import type { Classification, RawRecord } from "./types";
export function recencyWeight(date?: string, now = new Date("2026-06-06")) { if (!date) return 0.5; const days = Math.max(0, (now.getTime() - new Date(date).getTime()) / 86400000); return Math.max(0.2, 1 - days / 180); }
export function scoreCluster(records: RawRecord[], classifications: Classification[]) {
  const authors = new Set(records.map(r => r.author).filter(Boolean)).size;
  const sources = new Set(records.map(r => r.source)).size;
  const frequency = Math.min(records.length * 8, 30);
  const uniqueAuthors = Math.min(authors * 5, 15);
  const sourceDiversity = Math.min(sources * 6, 18);
  const emotional = avg(classifications.map(c => c.emotionalIntensity)) * 5;
  const urgency = avg(classifications.map(c => c.urgency)) * 4;
  const workarounds = classifications.filter(c => c.workaroundPresent).length * 6;
  const switching = classifications.filter(c => ["alternative_request", "switching_trigger"].includes(c.signalType)).length * 6;
  const wtp = classifications.filter(c => c.willingnessToPaySignal).length * 7;
  const recency = avg(records.map(r => recencyWeight(r.date))) * 10;
  const engagement = Math.min(records.reduce((s, r) => s + (r.engagement ?? 0), 0) / 10, 10);
  return Math.round(Math.min(100, frequency + uniqueAuthors + sourceDiversity + emotional + urgency + workarounds + switching + wtp + recency + engagement) / 1.55);
}
function avg(nums: number[]) { return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0; }
