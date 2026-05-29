#!/usr/bin/env node
// Final QC gate for playbooks: ref resolution + verbatim quote tracing + voice.
// Usage: node scripts/verify-playbooks.mjs [glob-substring]
// Exits non-zero if any playbook has issues. Reusable after every rebuild batch.
import fs from 'node:fs';
import path from 'node:path';

const LIB = path.resolve('insight-library');
const PB_DIR = path.join(LIB, 'playbooks');
const filter = process.argv[2] || '';

const KILL = ['orchestration','seamless','strategic','leverage','transform','holistic','synergy','bespoke','unlock','robust','comprehensive','cutting-edge','innovative','paradigm','dive','delve','embark','journey'];

function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(fp));
    else if (e.name.endsWith('.md')) out.push(fp);
  }
  return out;
}

// corpus for verbatim quote tracing
const corpusFiles = [
  ...walk(path.join(LIB, 'insights')),
  ...walk(path.join(LIB, 'raw')),
  ...walk(path.join(LIB, 'synthesis')),
];
const corpus = corpusFiles.map(f => fs.readFileSync(f, 'utf8'));
// normalize curly quotes/apostrophes AND collapse all whitespace (so a multi-sentence
// quote that was reflowed across lines still matches its source verbatim).
const norm = s => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
const corpusNorm = corpus.map(norm);
function traced(q) {
  const qn = norm(q);
  return corpusNorm.some(t => t.includes(qn));
}
function resolves(id) {
  if (id.startsWith('ins_')) return fs.existsSync(path.join(LIB, 'insights', `${id}.md`));
  if (id.startsWith('pat_')) return fs.existsSync(path.join(LIB, 'synthesis', 'patterns', `${id.slice(4)}.md`)) || fs.existsSync(path.join(LIB, 'synthesis', 'patterns', `${id}.md`));
  if (id.startsWith('con_')) return fs.existsSync(path.join(LIB, 'synthesis', 'contradictions', `${id.slice(4)}.md`)) || fs.existsSync(path.join(LIB, 'synthesis', 'contradictions', `${id}.md`));
  return false;
}
const opExists = slug => fs.existsSync(path.join(LIB, 'operators', slug));

const SECTIONS = ['## When to use', '## How to use', '## Check your work', '## What goes wrong', '## What you get'];
let totalIssues = 0;
const report = [];

for (const fp of walk(PB_DIR).sort()) {
  if (filter && !fp.includes(filter)) continue;
  const t = fs.readFileSync(fp, 'utf8');
  const rel = path.relative(PB_DIR, fp);
  const issues = [];

  // refs
  const refs = [...new Set((t.match(/\b(?:ins_|pat_|con_)[a-z0-9-]+/g) || []))];
  const badRefs = refs.filter(r => !resolves(r));
  if (badRefs.length) issues.push(`unresolved refs: ${badRefs.join(', ')}`);

  // quotes verbatim
  const quotes = [...t.matchAll(/^>\s*"([^"]+)"/gm)].map(m => m[1]);
  const fab = quotes.filter(q => !traced(q));
  if (fab.length) fab.forEach(q => issues.push(`UNTRACED quote: "${q.slice(0, 70)}"`));

  // em dash outside quote lines
  const emLines = t.split('\n').map((l, i) => [i + 1, l]).filter(([, l]) => l.includes('—') && !l.trimStart().startsWith('>'));
  if (emLines.length) issues.push(`em dash outside quotes on lines: ${emLines.map(([n]) => n).join(', ')}`);

  // kill-list: prose only. Exclude quote lines, frontmatter, code fences, inline
  // code spans, and bare ins_/pat_/con_ ids (card slugs legitimately contain words
  // like "leverage", e.g. ins_...-highest-leverage-eval-step).
  const prose = t.replace(/^---\n[\s\S]*?\n---\n/, '')        // drop frontmatter
    .split('\n').filter(l => !l.trimStart().startsWith('>')).join('\n')
    .replace(/```[\s\S]*?```/g, ' ')                          // code fences
    .replace(/`[^`]*`/g, ' ')                                 // inline code (refs)
    .replace(/\b(?:ins_|pat_|con_)[a-z0-9-]+/g, ' ');         // any stray bare ids
  const kl = KILL.filter(w => new RegExp(`\\b${w}\\b`, 'i').test(prose));
  if (kl.length) issues.push(`kill-list: ${kl.join(', ')}`);

  // sections
  const missing = SECTIONS.filter(s => !t.includes(s));
  if (missing.length) issues.push(`missing sections: ${missing.join(' | ')}`);

  // title == H1, no em dash
  const ti = (t.match(/^title:\s*(.+)$/m) || [])[1]?.trim().replace(/^["']|["']$/g, '') || '';
  const h1 = (t.match(/^#\s+(.+)$/m) || [])[1]?.trim() || '';
  if (ti.includes('—')) issues.push('em dash in title');
  if (ti && h1 && ti !== h1) issues.push(`title != H1 ("${ti}" vs "${h1}")`);

  // frontmatter uses_cards present + operators exist
  const usesCards = (t.match(/^uses_cards:\s*\[([^\]]*)\]/m) || [])[1];
  if (!usesCards || !usesCards.trim()) issues.push('uses_cards missing/empty');
  const ops = (t.match(/^originating_operators:\s*\[([^\]]*)\]/m) || [])[1];
  if (ops) {
    const badOps = ops.split(',').map(s => s.trim()).filter(Boolean).filter(s => !opExists(s));
    if (badOps.length) issues.push(`originating_operators not found: ${badOps.join(', ')}`);
  }

  totalIssues += issues.length;
  report.push({ rel, issues, refs: refs.length, quotes: quotes.length, lines: t.split('\n').length });
}

for (const r of report) {
  const flag = r.issues.length ? '✗' : '✓';
  console.log(`${flag} ${r.rel}  (refs ${r.refs}, quotes ${r.quotes}, ${r.lines}L)`);
  r.issues.forEach(i => console.log(`    - ${i}`));
}
console.log(`\n${report.filter(r => !r.issues.length).length}/${report.length} clean · ${totalIssues} total issues`);
process.exit(totalIssues ? 1 : 0);
