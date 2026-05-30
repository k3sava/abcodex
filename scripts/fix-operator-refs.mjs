#!/usr/bin/env node
// One-shot: resolve the 11 pre-existing validate warnings.
import fs from 'node:fs';
const L = 'insight-library/';
const R = (p, find, repl) => {
  const fp = L + p; let t = fs.readFileSync(fp, 'utf8');
  if (!t.includes(find)) { console.log(`! not found in ${p}: ${find}`); return; }
  fs.writeFileSync(fp, t.replace(find, repl)); console.log(`✓ ${p}`);
};

// Taleb: 6 cards "Nassim Nicholas Taleb" -> "Nassim Taleb" (dir nassim-taleb)
for (const c of ['insights/ins_antifragile-barbell.md','insights/ins_taleb-barbell-strategy.md','insights/ins_taleb-lindy-effect.md','insights/ins_taleb-via-negativa.md','insights/ins_taleb-iatrogenics.md','insights/ins_taleb-skin-in-the-game.md'])
  R(c, 'operator: Nassim Nicholas Taleb', 'operator: Nassim Taleb');

// Keenan, swyx: collapse parenthetical to the canonical dir name
R('insights/ins_gap-selling-change-formula.md', 'operator: Keenan (Jim Keenan)', 'operator: Keenan');
R('insights/ins_software-3-ai-engineer.md', 'operator: Swyx (Shawn Wang)', 'operator: swyx');

// Nate: make card + profile name consistent with slug nate-substack
R('insights/ins_skills-as-prompts-as-code.md', 'operator: Nate', 'operator: Nate (Substack)');
R('operators/nate-substack/README.md', 'name: Nate', 'name: Nate (Substack)');

// Mark Petty is a Gartner analyst -> attribute to Gartner per corpus convention
R('insights/ins_llms-are-new-os-agents-are-apps.md', 'operator: Mark Petty', 'operator: Gartner');
R('insights/ins_llms-are-new-os-agents-are-apps.md', 'operator_role: Senior Director Analyst, Gartner', 'operator_role: Mark Petty, Senior Director Analyst, Gartner');

// 3 dangling related: refs
R('insights/ins_dark-factory-pattern.md', 'related: [ins_november-2025-coding-inflection, ins_simulated-qa-swarm]', 'related: [ins_november-2025-coding-inflection]');
R('insights/ins_handley-write-to-one-subscriber.md', 'ins_dave-harland-write-like-you-speak', 'ins_write-like-you-speak');
R('insights/ins_anthropic-glasswing-verification-bottleneck-shift.md', ', ins_pat_verification-as-human-job', '');

console.log('done');
