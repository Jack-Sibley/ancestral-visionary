import { appendFile, open, stat, mkdir} from "fs/promises";
import { createInterface } from "readline";
import { join, dirname } from "path";
import { match, P} from "ts-pattern";
import { decodeStream, encodeStream } from "iconv-lite";

async function ensureFile(filePath: string) {
    let dir = dirname(filePath);
    await stat(dir).catch((e) => {
        if (e.errno == -4058) mkdir(dir, {recursive: true});
    });
}

function toKebabCase(str: string){
    return str.toLowerCase().replaceAll(' ','-').replaceAll(',','').replaceAll('/','');
}

enum Section {
    Introduction,
    Contents,
    Rules,
    Glossary,
    Credits, 
}

async function main() {
    const inFile = await open('mtg-rules/Comprehensive Rules 20221007.txt');
    const stream = inFile.createReadStream()
        .pipe(decodeStream("win1251"));

    const rl = createInterface({
        input: stream,
        crlfDelay: Infinity
    });

    let currentSection : Section = Section.Introduction;
    let outLine: string;
    let outPath: string = 'README.md';
    let i: number = 0;
    let ruleSection: string = "Game Concepts";
    let inList: boolean = false;
    for await (const line of rl) {
        if ((['Contents', 'Glossary', 'Credits'].includes(line) && currentSection != Section.Contents) || line == '1. Game Concepts' && i > 20) {
            currentSection++;
            outPath = match(line)
                .with('Contents', () => 'SUMMARY.md')
                .with('Glossary', () => 'glossary.md')
                .with('Credits', () => 'credits.md')
            .otherwise(() => outPath)
        }

        outLine = match(currentSection)
            .with(Section.Introduction, () => {

                if (line == 'Introduction') {
                    return `# ${line}`;
                } else {
                    return line;
                }

            })

            .with(Section.Contents, () => {

              return match(line)
                .with('Contents', () => '- [Introduction](README.md)')
                // For Section headers e.g. "1. Game Concepts"
                .with(P.when((line : string) : line is string => /^\d{1,2}\..+$/.test(line)), () => {
                    
                    ruleSection = line.replace(/^\d{1,2}\. /, '');
                    return `- [**${line.replace(/(?<=^\d{1,2}\.)/,'**')}]()`

                })
                .with(P.when((line : string) : line is string => /^\d{3}\..+$/.test(line)), () => {

                    let sectionName = line.replace(/^\d{3}\. /, '');
                    return `\t- [**${line.replace(/(?<=^\d{3}\.)(?= )/,'**')}](${toKebabCase(ruleSection)}/${(toKebabCase(sectionName))}.md)`;

                })
                .with('Glossary', () => '[Glossary](glossary.md)')
                .with('Credits', () => '[Credits](credits.md)')
              .otherwise((line) => line);

            })

            .with(Section.Rules, () => {

                return match(line)

                    .with(P.when((line : string) : line is string => /^\d{1,2}\..+$/.test(line)), () => {
                        inList = false;
                        ruleSection = line.replace(/^\d{1,2}\. /, '');
                        return '';
                    })
                    
                    .with(P.when((line : string) : line is string => /^\d{3}\. .+$/.test(line)), () => {
                        inList = false;
                        let sectionName = line.replace(/^\d{3}\. /, '');
                        outPath = `${toKebabCase(ruleSection)}/${(toKebabCase(sectionName))}.md`;
                        return `# **${line.replace(/(?<=^\d{3}\.)(?= )/,'**')}`;
                    })
                    
                    .with(P.when((line : string) : line is string => /^\d{3}\.\d+\. .+$/.test(line)), () => {
                        inList = false;
                        return `\n**${line.replace(/(?<=^\d{3}\.\d+\.)/,'**')}`;
                    })
                    
                    .with(P.when((line : string) : line is string => /^\d{3}\.\d+[a-z]\.? .+$/.test(line)), () => {
                        inList = true;
                        return `+ **${line.replace(/(?<=^\d{3}\.\d+[a-z]\.?)(?!\.)/,'**')}`
                    })

                    .with(P.when((line : string) : line is string => /^Example: .+$/.test(line)), () => `\n${inList ? '      ':'    '}${line}`)

                .otherwise((line) => line);

            })
        .otherwise(() => outLine)

        if ((currentSection == Section.Introduction || currentSection == Section.Contents || currentSection == Section.Rules) && outLine) {
            await ensureFile(join('bookOut/', outPath));
            await appendFile(join('bookOut/', outPath), `${outLine}\n`, {flag: 'a'});
        }

        i++;
    }


}

main().catch(e => console.error(e));