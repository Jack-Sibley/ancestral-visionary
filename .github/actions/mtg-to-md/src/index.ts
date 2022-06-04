import { getInput, setFailed } from "@actions/core";


try {
    const targetFile = getInput('target-file');
    console.log(`${targetFile}`);
} catch (error) {
    setFailed(error.message)
}