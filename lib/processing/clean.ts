export function cleanText(input: string) { return input.replace(/<[^>]+>/g, " ").replace(/https?:\/\/\S+/g, " ").replace(/\s+/g, " ").trim(); }
export function fingerprint(text: string) { return cleanText(text).toLowerCase().replace(/[^a-z0-9 ]/g, "").split(" ").filter(w => w.length > 2).slice(0, 80).sort().join("|"); }
export function dedupe<T extends { body: string }>(records: T[]) { const seen = new Set<string>(); return records.filter(r => { const fp = fingerprint(r.body); if (seen.has(fp)) return false; seen.add(fp); return true; }); }
export function extractWorkflowVerbs(text: string) { return Array.from(new Set((text.match(/\b(export|copy|paste|sync|merge|reconcile|track|report|import|glue|stitch|manually)\b/gi) ?? []).map(v => v.toLowerCase()))); }
export function detectLanguage() { return "en"; }
