#!/usr/bin/env node
// Strip decorative emoji from operator DISPLAY NAMES only.
// Insights: `operator:` frontmatter line + `· ` attribution lines.
// Operator READMEs: every line EXCEPT `roles:` list items and `>` verbatim quotes.
// Preserves middot (·), arrows, and verbatim self-descriptions (roles/operator_role).
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = path.resolve(process.argv[2] || 'insight-library');
const DRY = process.argv.includes('--dry');

const hasEmoji = (s) => /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{2B00}-\u{2BFF}️‍\u{1F3FB}-\u{1F3FF}]/u.test(s);
const stripEmoji = (s) => s.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{2B00}-\u{2BFF}️‍\u{1F3FB}-\u{1F3FF}]/gu, '');

// Only rewrite lines that actually carry emoji; otherwise leave byte-for-byte.
const cleanLine = (line) => stripEmoji(line)
  .replace(/^ +/, '')          // leading space a line-start emoji left behind
  .replace(/  +/g, ' ')        // collapse the double space the emoji left behind
  .replace(/\s+$/, '')         // trailing space the emoji left behind
  .replace(/\s+,/g, ',')       // "name , role" -> "name, role"
  .replace(/^(operator:|name:|#)\s+/, '$1 ')  // normalize the one separating space
  .replace(/^· +/, '· ');

function transformInsight(txt) {
  return txt.split('\n').map(line => {
    if (!hasEmoji(line)) return line;
    if (/^operator:\s/.test(line) || /^· /.test(line)) return cleanLine(line);
    return line;  // leave emoji elsewhere (verbatim quotes, role text)
  }).join('\n');
}

function transformOperator(txt) {
  let inRoles = false;
  return txt.split('\n').map(line => {
    if (/^roles:/.test(line)) { inRoles = true; return line; }
    if (inRoles && /^\s*-\s/.test(line)) return line;          // verbatim role headline
    if (/^\S/.test(line)) inRoles = false;
    if (!hasEmoji(line)) return line;
    if (/^>/.test(line)) return line;                           // verbatim quote
    if (/^operator_role:/.test(line)) return line;              // verbatim self-desc
    return cleanLine(line);
  }).join('\n');
}

function walk(dir) {
  let files = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(walk(fp));
    else if (e.name.endsWith('.md')) files.push(fp);
  }
  return files;
}

let changed = 0;
const report = [];
for (const fp of walk(path.join(ROOT, 'insights'))) {
  const txt = fs.readFileSync(fp, 'utf8');
  const out = transformInsight(txt);
  if (out !== txt) { changed++; report.push(path.relative(ROOT, fp)); if (!DRY) fs.writeFileSync(fp, out); }
}
for (const fp of walk(path.join(ROOT, 'operators'))) {
  const txt = fs.readFileSync(fp, 'utf8');
  const out = transformOperator(txt);
  if (out !== txt) { changed++; report.push(path.relative(ROOT, fp)); if (!DRY) fs.writeFileSync(fp, out); }
}
console.log(`${DRY ? '[DRY] would change' : 'changed'} ${changed} files:`);
report.forEach(r => console.log('  ' + r));

// verify no emoji left in names
console.log('\n--- leftover emoji in operator: / name: / · lines ---');
try {
  const out = execSync(`grep -rnP "^(operator:|name:|·).*[\\x{1F300}-\\x{1FAFF}\\x{2600}-\\x{27BF}\\x{1F1E6}-\\x{1F1FF}]" ${ROOT}/insights ${ROOT}/operators`, { encoding: 'utf8' });
  console.log(out || '(none)');
} catch { console.log('(none)'); }
