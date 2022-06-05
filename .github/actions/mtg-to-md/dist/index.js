// src/index.ts
var import_promises = require("fs/promises");
var import_readline = require("readline");
var import_path = require("path");

// node_modules/ts-pattern/dist/index.modern.js
var e = Symbol("@ts-pattern/matcher");
var t = "@ts-pattern/anonymous-select-key";
var n = (e2) => Boolean(e2 && typeof e2 == "object");
var r = (t2) => t2 && !!t2[e];
var o = (t2, c2, a2) => {
  if (n(t2)) {
    if (r(t2)) {
      const n2 = t2[e](), { matched: r2, selections: o2 } = n2.match(c2);
      return r2 && o2 && Object.keys(o2).forEach((e2) => a2(e2, o2[e2])), r2;
    }
    if (!n(c2))
      return false;
    if (Array.isArray(t2))
      return !!Array.isArray(c2) && t2.length === c2.length && t2.every((e2, t3) => o(e2, c2[t3], a2));
    if (t2 instanceof Map)
      return c2 instanceof Map && Array.from(t2.keys()).every((e2) => o(t2.get(e2), c2.get(e2), a2));
    if (t2 instanceof Set) {
      if (!(c2 instanceof Set))
        return false;
      if (t2.size === 0)
        return c2.size === 0;
      if (t2.size === 1) {
        const [e2] = Array.from(t2.values());
        return r(e2) ? Array.from(c2.values()).every((t3) => o(e2, t3, a2)) : c2.has(e2);
      }
      return Array.from(t2.values()).every((e2) => c2.has(e2));
    }
    return Object.keys(t2).every((n2) => {
      const s2 = t2[n2];
      return (n2 in c2 || r(i2 = s2) && i2[e]().matcherType === "optional") && o(s2, c2[n2], a2);
      var i2;
    });
  }
  return Object.is(c2, t2);
};
var c = (t2) => {
  var o2, s2, i2;
  return n(t2) ? r(t2) ? (o2 = (s2 = (i2 = t2[e]()).getSelectionKeys) == null ? void 0 : s2.call(i2)) != null ? o2 : [] : Array.isArray(t2) ? a(t2, c) : a(Object.values(t2), c) : [];
};
var a = (e2, t2) => e2.reduce((e3, n2) => e3.concat(t2(n2)), []);
function s(t2) {
  return { [e]: () => ({ match: (e2) => {
    let n2 = {};
    const r2 = (e3, t3) => {
      n2[e3] = t3;
    };
    return e2 === void 0 ? (c(t2).forEach((e3) => r2(e3, void 0)), { matched: true, selections: n2 }) : { matched: o(t2, e2, r2), selections: n2 };
  }, getSelectionKeys: () => c(t2), matcherType: "optional" }) };
}
function i(t2) {
  return { [e]: () => ({ match: (e2) => {
    if (!Array.isArray(e2))
      return { matched: false };
    let n2 = {};
    const r2 = (e3, t3) => {
      n2[e3] = (n2[e3] || []).concat([t3]);
    };
    return { matched: e2.every((e3) => o(t2, e3, r2)), selections: n2 };
  }, getSelectionKeys: () => c(t2) }) };
}
function u(...t2) {
  return { [e]: () => ({ match: (e2) => {
    let n2 = {};
    const r2 = (e3, t3) => {
      n2[e3] = t3;
    };
    return { matched: t2.every((t3) => o(t3, e2, r2)), selections: n2 };
  }, getSelectionKeys: () => a(t2, c), matcherType: "and" }) };
}
function l(...t2) {
  return { [e]: () => ({ match: (e2) => {
    let n2 = {};
    const r2 = (e3, t3) => {
      n2[e3] = t3;
    };
    return a(t2, c).forEach((e3) => r2(e3, void 0)), { matched: t2.some((t3) => o(t3, e2, r2)), selections: n2 };
  }, getSelectionKeys: () => a(t2, c), matcherType: "or" }) };
}
function h(t2) {
  return { [e]: () => ({ match: (e2) => ({ matched: !o(t2, e2, () => {
  }) }), getSelectionKeys: () => [], matcherType: "not" }) };
}
function f(t2) {
  return { [e]: () => ({ match: (e2) => ({ matched: Boolean(t2(e2)) }) }) };
}
function y(...n2) {
  const r2 = typeof n2[0] == "string" ? n2[0] : void 0, a2 = n2.length === 2 ? n2[1] : typeof n2[0] == "string" ? void 0 : n2[0];
  return { [e]: () => ({ match: (e2) => {
    let n3 = { [r2 != null ? r2 : t]: e2 };
    return { matched: a2 === void 0 || o(a2, e2, (e3, t2) => {
      n3[e3] = t2;
    }), selections: n3 };
  }, getSelectionKeys: () => [r2 != null ? r2 : t].concat(a2 === void 0 ? [] : c(a2)) }) };
}
var m = f(function(e2) {
  return true;
});
var v = m;
var d = f(function(e2) {
  return typeof e2 == "string";
});
var g = f(function(e2) {
  return typeof e2 == "number";
});
var p = f(function(e2) {
  return typeof e2 == "boolean";
});
var b = f(function(e2) {
  return typeof e2 == "bigint";
});
var w = f(function(e2) {
  return typeof e2 == "symbol";
});
var A = f(function(e2) {
  return e2 == null;
});
var S = { __proto__: null, optional: s, array: i, intersection: u, union: l, not: h, when: f, select: y, any: m, _: v, string: d, number: g, boolean: p, bigint: b, symbol: w, nullish: A, instanceOf: function(e2) {
  return f(function(e3) {
    return (t2) => t2 instanceof e3;
  }(e2));
}, typed: function() {
  return { array: i, optional: s, intersection: u, union: l, not: h, select: y, when: f };
} };
var K = (e2) => new O(e2, []);
var O = class {
  constructor(e2, t2) {
    this.value = void 0, this.cases = void 0, this.value = e2, this.cases = t2;
  }
  with(...e2) {
    const n2 = e2[e2.length - 1], r2 = [e2[0]], c2 = [];
    return e2.length === 3 && typeof e2[1] == "function" ? (r2.push(e2[0]), c2.push(e2[1])) : e2.length > 2 && r2.push(...e2.slice(1, e2.length - 1)), new O(this.value, this.cases.concat([{ match: (e3) => {
      let n3 = {};
      const a2 = Boolean(r2.some((t2) => o(t2, e3, (e4, t3) => {
        n3[e4] = t3;
      })) && c2.every((t2) => t2(e3)));
      return { matched: a2, value: a2 && Object.keys(n3).length ? t in n3 ? n3[t] : n3 : e3 };
    }, handler: n2 }]));
  }
  when(e2, t2) {
    return new O(this.value, this.cases.concat([{ match: (t3) => ({ matched: Boolean(e2(t3)), value: t3 }), handler: t2 }]));
  }
  otherwise(e2) {
    return new O(this.value, this.cases.concat([{ match: (e3) => ({ matched: true, value: e3 }), handler: e2 }])).run();
  }
  exhaustive() {
    return this.run();
  }
  run() {
    let e2, t2 = this.value;
    for (const n2 of this.cases) {
      const r2 = n2.match(this.value);
      if (r2.matched) {
        t2 = r2.value, e2 = n2.handler;
        break;
      }
    }
    if (!e2) {
      let e3;
      try {
        e3 = JSON.stringify(this.value);
      } catch (t3) {
        e3 = this.value;
      }
      throw new Error(`Pattern matching error: no pattern matches value ${e3}`);
    }
    return e2(t2, this.value);
  }
};

// src/index.ts
async function ensureFile(filePath) {
  let dir = (0, import_path.dirname)(filePath);
  await (0, import_promises.stat)(dir).catch((e2) => {
    if (e2.errno == -4058)
      (0, import_promises.mkdir)(dir, { recursive: true });
  });
}
function toKebabCase(str) {
  return str.toLowerCase().replaceAll(" ", "-").replaceAll(",", "").replaceAll("/", "");
}
async function main() {
  const inFile = await (0, import_promises.open)("mtg-rules/MagicCompRules 20220610.txt");
  const stream = inFile.createReadStream();
  const rl = (0, import_readline.createInterface)({
    input: stream,
    crlfDelay: Infinity
  });
  let currentSection = 0 /* Introduction */;
  let outLine;
  let outPath = "README.md";
  let i2 = 0;
  let ruleSection = "Game Concepts";
  let inList = false;
  for await (const line of rl) {
    if (["Contents", "Glossary", "Credits"].includes(line) && currentSection != 1 /* Contents */ || line == "1. Game Concepts" && i2 > 20) {
      currentSection++;
      outPath = K(line).with("Contents", () => "SUMMARY.md").with("Glossary", () => "glossary.md").with("Credits", () => "credits.md").otherwise(() => outPath);
    }
    outLine = K(currentSection).with(0 /* Introduction */, () => {
      if (line == "Introduction") {
        return `# ${line}`;
      } else {
        return line;
      }
    }).with(1 /* Contents */, () => {
      return K(line).with("Contents", () => "- [Introduction](README.md)").with(S.when((line2) => /^\d{1,2}\..+$/.test(line2)), () => {
        ruleSection = line.replace(/^\d{1,2}\. /, "");
        return `- [**${line.replace(/(?<=^\d{1,2}\.)/, "**")}]()`;
      }).with(S.when((line2) => /^\d{3}\..+$/.test(line2)), () => {
        let sectionName = line.replace(/^\d{3}\. /, "");
        return `	- [**${line.replace(/(?<=^\d{3}\.)(?= )/, "**")}](${toKebabCase(ruleSection)}/${toKebabCase(sectionName)}.md)`;
      }).with("Glossary", () => "[Glossary](glossary.md)").with("Credits", () => "[Credits](credits.md)").otherwise((line2) => line2);
    }).with(2 /* Rules */, () => {
      return K(line).with(S.when((line2) => /^\d{1,2}\..+$/.test(line2)), () => {
        inList = false;
        ruleSection = line.replace(/^\d{1,2}\. /, "");
        return "";
      }).with(S.when((line2) => /^\d{3}\. .+$/.test(line2)), () => {
        inList = false;
        let sectionName = line.replace(/^\d{3}\. /, "");
        outPath = `${toKebabCase(ruleSection)}/${toKebabCase(sectionName)}.md`;
        return `# **${line.replace(/(?<=^\d{3}\.)(?= )/, "**")}`;
      }).with(S.when((line2) => /^\d{3}\.\d+\. .+$/.test(line2)), () => {
        inList = false;
        return `
**${line.replace(/(?<=^\d{3}\.\d+\.)/, "**")}`;
      }).with(S.when((line2) => /^\d{3}\.\d+\w .+$/.test(line2)), () => {
        inList = true;
        return `+ **${line.replace(/(?<=^\d{3}\.\d+\w)/, "**")}`;
      }).with(S.when((line2) => /^Example: .+$/.test(line2)), () => `
${inList ? "      " : "    "}${line}`).otherwise((line2) => line2);
    }).otherwise(() => outLine);
    if ((currentSection == 0 /* Introduction */ || currentSection == 1 /* Contents */ || currentSection == 2 /* Rules */) && outLine) {
      await ensureFile((0, import_path.join)("bookOut/", outPath));
      await (0, import_promises.appendFile)((0, import_path.join)("bookOut/", outPath), `${outLine}
`, { flag: "a" });
    }
    i2++;
  }
}
main().catch((e2) => console.error(e2));
