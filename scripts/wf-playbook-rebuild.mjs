export const meta = {
  name: 'playbook-rebuild',
  description: 'Deep-rebuild 23 abcodex playbooks to canonical competitive-analysis depth with adversarial anti-fabrication verification',
  phases: [
    { title: 'Rebuild', detail: 'one agent per playbook, weave in new cards' },
    { title: 'Verify', detail: 'independent ref-resolve + verbatim quote trace' },
    { title: 'Fix', detail: 'repair any issues the verifier flags' },
  ],
}

// 23 remaining playbooks (competitive-analysis is the gold reference; positioning,
// messaging-matrix, icp-definition already rebuilt). Domains drive card discovery.
const PLAYBOOKS = [
  { path: 'aeo/aeo-relevance-engineering.md', domains: ['aeo','seo','gtm'] },
  { path: 'aeo/pseo-framework.md', domains: ['seo','aeo','content'] },
  { path: 'ai-native-gtm/claim-verify-gate.md', domains: ['ai-native-gtm','substrate','anti-fabrication'] },
  { path: 'ai-native-gtm/llm-wiki.md', domains: ['ai-native-gtm','knowledge','substrate'] },
  { path: 'ai-native-gtm/synthetic-audience-test.md', domains: ['messaging','ai-native-gtm','conversion'] },
  { path: 'competitive/win-loss-framework.md', domains: ['competitive','sales-enablement','voc'] },
  { path: 'copywriting/copywriting-mastery.md', domains: ['copywriting','messaging','conversion'] },
  { path: 'copywriting/humanizer.md', domains: ['copywriting','ai-native-gtm','voice'] },
  { path: 'copywriting/lp-cro-rubric.md', domains: ['conversion','copywriting','landing-page'] },
  { path: 'copywriting/the-converting-copy-playbook.md', domains: ['copywriting','conversion','messaging'] },
  { path: 'copywriting/writing-craft.md', domains: ['copywriting','messaging'] },
  { path: 'decision-quality/the-mental-models-operating-system.md', domains: ['decision-quality','strategy','pmm'] },
  { path: 'design/design-principles.md', domains: ['design','conversion'] },
  { path: 'design/design-thinking-for-content.md', domains: ['design','copywriting','conversion'] },
  { path: 'design/help-documentation.md', domains: ['help-docs','design','post-sale'] },
  { path: 'launch/campaign-strategy.md', domains: ['campaigns','gtm','demand-gen'] },
  { path: 'launch/launch-plan.md', domains: ['launch','gtm','pmm'] },
  { path: 'measurement/measurement-framework.md', domains: ['measurement','pmm','gtm'] },
  { path: 'messaging/pmm-coaching-framework.md', domains: ['messaging','copywriting','pmm'] },
  { path: 'narrative/narrative-compose.md', domains: ['narrative','messaging','positioning'] },
  { path: 'pricing/the-pricing-as-strategic-function-playbook.md', domains: ['pricing','gtm','monetization'] },
  { path: 'sales-discovery/the-tactical-empathy-discovery-playbook.md', domains: ['sales-discovery','sales-enablement','voc'] },
  { path: 'sales-enablement/sales-enablement.md', domains: ['sales-enablement','pmm','gtm'] },
]

const VERDICT = {
  type: 'object',
  additionalProperties: false,
  properties: {
    pass: { type: 'boolean', description: 'true only if ZERO issues remain' },
    issues: { type: 'array', items: { type: 'string' }, description: 'specific, actionable problems found' },
    refs_checked: { type: 'number' },
    quotes_checked: { type: 'number' },
  },
  required: ['pass', 'issues'],
}

const ANTIFAB = `ANTI-FABRICATION (overrides everything):
- Every ins_/pat_/con_ id you write MUST exist on disk. insights at insight-library/insights/<id>.md ; patterns at insight-library/synthesis/patterns/<id-without-pat_>.md ; contradictions at insight-library/synthesis/contradictions/<id-without-con_>.md . Verify each with ls before writing it.
- A > "quote" may ONLY be text that appears verbatim as a > "..." line inside a card's ## Evidence block (or verbatim in its raw_ref file). NEVER turn a card's ## Claim into a quote. Never truncate, re-capitalize, or stitch a quote. If no real Evidence quote exists, state the point as prose with an inline \`ins_…\` ref instead.
- Never invent metrics, dates, names, or ids.`

function rebuildPrompt(pb) {
  return `You are rebuilding ONE playbook in the abcodex library. Work in /Users/k3sava/r2d2/ab-codex.

Read in full first:
- Spec: scripts/playbook-rebuild-spec.md (follow exactly)
- Gold reference: insight-library/playbooks/competitive/competitive-analysis.md (match its structure, depth, voice)
- A second proven example: insight-library/playbooks/positioning/positioning-document.md
- The playbook to rebuild: insight-library/playbooks/${pb.path}

Rebuild insight-library/playbooks/${pb.path} IN PLACE to canonical depth.
- Domains: ${JSON.stringify(pb.domains)}. Find REAL candidate cards with:
  python3 -c "import json; d=json.load(open('insight-library/INDEX.json')); [print(i['id'],'|',i.get('captured_date'),'|',i.get('tier',''),'|',i.get('operator','')) for i in d['insights'] if set(i.get('domain',[])) & set(${JSON.stringify(pb.domains)})]"
  Open each card before citing it. Prefer Tier A/B and weave in cards captured AFTER 2026-05-01 to fix staleness.
- Keep the existing frontmatter id and captured_date. Keep the existing (already-fixed) title; H1 must match it exactly.
- Canonical structure: opening quality-bar sentence(s); ## When to use; ## How to use with \`### N.\` instructive-sentence step headers, inline ins_/pat_ refs, > "quote" + > · Name, Source, Date blocks (middot), tables where a model helps; ## Check your work; ## What goes wrong (bold-led, pat_/con_ refs); ## What you get. Add uses_cards, uses_patterns, uses_contradictions (if any), originating_operators frontmatter (operator dir slugs that exist).
- Voice: zero em dashes outside > quotes; no kill-list words (orchestration, seamless, strategic, leverage, transform, holistic, synergy, bespoke, unlock, robust, comprehensive, cutting-edge, innovative, paradigm, dive, delve, embark, journey); every sentence capitalized; plain English.

${ANTIFAB}

Do NOT run the build. Do NOT git commit. Rewrite the file only. Report: # steps, ids cited, # quote blocks, and confirm you verified each id exists and each quote traces verbatim.`
}

function verifyPrompt(pb) {
  return `You are an ADVERSARIAL verifier for a rebuilt abcodex playbook. Default to skepticism: assume the rebuilder fabricated something and prove otherwise. Work in /Users/k3sava/r2d2/ab-codex.

Target file: insight-library/playbooks/${pb.path}

Run these checks with Bash and report every failure as a specific issue string:
1. REF RESOLUTION: extract every ins_/pat_/con_ id in the file. For each: ls insight-library/insights/<id>.md (ins_), insight-library/synthesis/patterns/<id without pat_>.md (pat_), insight-library/synthesis/contradictions/<id without con_>.md (con_). Any that do not resolve -> issue.
2. VERBATIM QUOTES (the critical check): for every > "..." block, grep the corpus to confirm the quoted text appears VERBATIM in some insight card's ## Evidence or a raw/ file:
   grep -rF "<quote text>" insight-library/insights insight-library/raw insight-library/synthesis
   If a quote is NOT found verbatim, it is FABRICATED (likely a Claim dressed as a quote) -> issue, quote the offending text.
3. EM DASHES: grep -n "—" <file> | grep -v '^[0-9]*:>'  -> any non-quote line with an em dash is an issue (en dash – in ranges is fine).
4. KILL-LIST: grep -inE "\\b(orchestration|seamless|strategic|leverage|transform|holistic|synergy|bespoke|unlock|robust|comprehensive|cutting-edge|innovative|paradigm|delve|embark)\\b" <file> -> each hit not inside a > quote is an issue.
5. STRUCTURE: confirm these headings exist: "## When to use", "## How to use", "## Check your work", "## What goes wrong", "## What you get". Missing -> issue.
6. TITLE: frontmatter title has no em dash AND equals the # H1 line. Mismatch -> issue.
7. FRONTMATTER: uses_cards present and non-empty; every uses_cards/uses_patterns/uses_contradictions id resolves; originating_operators slugs exist under insight-library/operators/.

Return pass=true ONLY if zero issues. Otherwise pass=false with the full issues list. Include refs_checked and quotes_checked counts. Do NOT edit the file.`
}

function fixPrompt(pb, verdict) {
  return `You are fixing a rebuilt abcodex playbook that FAILED verification. Work in /Users/k3sava/r2d2/ab-codex.

Target file: insight-library/playbooks/${pb.path}

The verifier found these issues. Fix every one, editing the file in place:
${(verdict.issues || []).map((s, i) => `${i + 1}. ${s}`).join('\n')}

How to fix each class:
- Fabricated/untraced quote: either replace with the exact verbatim quote from the card's ## Evidence (grep to find it), or convert the > "quote" block to plain prose with an inline \`ins_…\` ref (keep only facts that trace to the card). NEVER keep a quote that is a Claim.
- Unresolved ref: fix the id to the correct existing one (grep to find it) or remove the reference.
- Em dash outside quotes: replace with period/comma/colon/middot.
- Kill-list word: rephrase.
- Missing section: add it in canonical form.
- Title/H1 mismatch or em dash in title: align them, remove em dash.

${ANTIFAB}

After fixing, re-run the verifier's checks yourself (ref resolution + grep -F each quote + em-dash + kill-list + sections + title) and report. Do NOT build or commit. Return pass=true only if every check now passes, else pass=false with remaining issues.`
}

phase('Rebuild')
log(`Rebuilding ${PLAYBOOKS.length} playbooks to canonical depth, each independently verified for fabrication.`)

const results = await pipeline(
  PLAYBOOKS,
  (pb) => agent(rebuildPrompt(pb), { label: `rebuild:${pb.path}`, phase: 'Rebuild' }).then(() => pb),
  (pb) => agent(verifyPrompt(pb), { label: `verify:${pb.path}`, phase: 'Verify', schema: VERDICT })
            .then(v => ({ pb: pb.path, verdict: v || { pass: false, issues: ['verifier returned null'] } })),
  (r) => (r.verdict && r.verdict.pass)
    ? { pb: r.pb, pass: true, issues: [] }
    : agent(fixPrompt({ path: r.pb }, r.verdict), { label: `fix:${r.pb}`, phase: 'Fix', schema: VERDICT })
        .then(v => ({ pb: r.pb, pass: !!(v && v.pass), issues: (v && v.issues) || ['fixer returned null'] }))
)

const clean = results.filter(Boolean)
const failed = clean.filter(r => !r.pass)
log(`Done. ${clean.length - failed.length}/${clean.length} clean. ${failed.length} still flagged.`)
return { total: clean.length, clean: clean.length - failed.length, failed }
