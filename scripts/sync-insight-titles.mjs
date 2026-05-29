#!/usr/bin/env node
// Sync each insight's `title:` frontmatter to its body H1 (which the build renders and
// which the em-dash sweep already cleaned). Removes em dashes that linger only in frontmatter.
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.resolve(process.argv[2] || 'insight-library/insights');
const DRY = process.argv.includes('--dry');

let changed = 0;
const report = [];
for (const name of fs.readdirSync(DIR)) {
  if (!name.endsWith('.md')) continue;
  const fp = path.join(DIR, name);
  const txt = fs.readFileSync(fp, 'utf8');
  const titleM = txt.match(/^title:\s*(.+)$/m);
  if (!titleM) continue;
  if (!titleM[1].includes('—')) continue;            // only fix em-dash titles
  const h1M = txt.match(/^#\s+(.+)$/m);
  if (!h1M) { console.log(`! no H1: ${name}`); continue; }
  const h1 = h1M[1].trim();
  if (h1.includes('—')) { console.log(`! H1 still has em-dash, skip: ${name}`); continue; }
  // YAML-safe single-quote the value, escaping internal single quotes
  const safe = `'${h1.replace(/'/g, "''")}'`;
  const out = txt.replace(/^title:\s*.+$/m, `title: ${safe}`);
  if (out !== txt) {
    if (!DRY) fs.writeFileSync(fp, out);
    changed++; report.push(`${name}  ->  ${h1.slice(0,70)}`);
  }
}
console.log(`${DRY ? '[DRY] would sync' : 'synced'} ${changed} insight titles`);
report.slice(0, 40).forEach(r => console.log('  ' + r));
