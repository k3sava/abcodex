#!/usr/bin/env node
// Repair daily/ files where the ingest nested a second frontmatter block + duplicate
// H1 inside the body. Collapse to: outer frontmatter (+ merged patterns_updated) +
// one H1 + real body. Preserves body prose exactly.
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.resolve(process.argv[2] || 'insight-library/daily');
const DRY = process.argv.includes('--dry');

function repair(fp) {
  const raw = fs.readFileSync(fp, 'utf8');
  const lines = raw.split('\n');
  const fence = lines.map((l, i) => (l.trim() === '---' ? i : -1)).filter(i => i >= 0);
  if (fence.length < 2) return null;                 // no frontmatter, skip
  const outerEnd = fence[1];
  let outer = lines.slice(1, outerEnd);              // outer frontmatter body
  let body = lines.slice(outerEnd + 1);

  // remove the FIRST embedded frontmatter block in body (a --- ... --- pair),
  // capturing its patterns_updated list.
  const bf = body.map((l, i) => (l.trim() === '---' ? i : -1)).filter(i => i >= 0);
  let pu = [];
  if (bf.length >= 2) {
    const block = body.slice(bf[0], bf[1] + 1);
    let inPU = false;
    for (const b of block) {
      if (/^\s*patterns_updated:/.test(b)) { inPU = true; continue; }
      if (inPU) {
        const m = b.match(/^\s*-\s*(\S+)/);
        if (m) pu.push(m[1]); else inPU = false;
      }
    }
    body.splice(bf[0], bf[1] - bf[0] + 1);
  }

  // collapse duplicate H1 lines (keep first)
  let seenH1 = false;
  body = body.filter(l => {
    if (/^#\s/.test(l)) { if (seenH1) return false; seenH1 = true; }
    return true;
  });

  // merge patterns_updated into outer frontmatter if absent
  if (pu.length && !outer.some(l => /^patterns_updated:/.test(l))) {
    outer.push('patterns_updated:');
    for (const p of pu) outer.push(`  - ${p}`);
  }

  let bodyText = body.join('\n').replace(/\n{3,}/g, '\n\n').replace(/^\n+/, '').replace(/\n+$/, '');
  const out = `---\n${outer.join('\n')}\n---\n\n${bodyText}\n`;
  return out !== raw ? out : null;
}

let changed = 0;
for (const name of fs.readdirSync(DIR).sort()) {
  if (!/^2026.*\.md$/.test(name)) continue;
  const fp = path.join(DIR, name);
  const out = repair(fp);
  if (out) {
    changed++;
    const fc = (out.match(/^---$/gm) || []).length;
    const h1 = (out.match(/^# /gm) || []).length;
    const firstBody = out.split('---\n\n')[1]?.split('\n').filter(l => l && !l.startsWith('#'))[0] || '';
    console.log(`${DRY ? '[DRY] ' : ''}${name}: ---x${fc} H1x${h1} | body: ${firstBody.slice(0, 70)}`);
    if (!DRY) fs.writeFileSync(fp, out);
  }
}
console.log(`\n${DRY ? 'would change' : 'changed'} ${changed} files`);
