// CodeRunner.js
const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");
const os = require("os");

const mdPath = path.resolve(process.argv[2] || "1-counter.md");
const mdRaw = fs.readFileSync(mdPath, "utf8");

// Normalize newlines to Unix-style
const md = mdRaw.replace(/\r\n/g, "\n");

// Regex: match the first fenced JS block
// - ```js or ```javascript
// - optional spaces
// - code until the next ```
const re = /```(?:js|javascript)\s*\n([\s\S]*?)\n?```/i;
const match = md.match(re);

if (!match) {
  console.error("No JavaScript code block found in markdown.");
  process.exit(1);
}

const code = match[1];

// Optional: show the extracted code for debugging
// console.log("Extracted code:\n---\n" + code + "\n---");

const tmpFile = path.join(os.tmpdir(), `md-code-${Date.now()}.js`);
fs.writeFileSync(tmpFile, code, "utf8");

// Execute with Node, inherit stdio so logs show up
const child = execFile(process.execPath, [tmpFile], { stdio: "inherit" });

child.on("exit", (code) => {
  try { fs.unlinkSync(tmpFile); } catch {}
  process.exit(code);
});
