import { describe, expect, it } from "vitest";
import { parseCsvRecords } from "../lib/collectors/csv";
import { clusterRecords } from "../lib/clustering";
import { heuristicClassify } from "../lib/ai/provider";
import { dedupe } from "../lib/processing/clean";
import { generateOpportunities } from "../lib/opportunities";
import { generateBuilderReport, generatePmmReport } from "../lib/reports/generator";
import { scoreCluster } from "../lib/scoring";
import { classifications, rawRecords } from "../lib/demo-data";

describe("DemandOS ingestion and processing", () => {
  it("imports CSV records", () => { const rows = parseCsvRecords("source,url,author,text\ncsv,https://x.test,a,I export reports manually"); expect(rows).toHaveLength(1); expect(rows[0].body).toContain("export"); });
  it("deduplicates near-identical records", () => { expect(dedupe([{ body: "I export reports manually" }, { body: "manually reports export I" }])).toHaveLength(1); });
});

describe("DemandOS AI parsing and scoring", () => {
  it("classifies workaround and willingness-to-pay signals", () => { const c = heuristicClassify("I export CSVs before board meetings and would pay to stop"); expect(c.workaroundPresent).toBe(true); expect(c.willingnessToPaySignal).toBe(true); });
  it("scores clusters deterministically", () => { const score = scoreCluster(rawRecords.filter(r => r.projectId === "demo-crm-reporting"), classifications); expect(score).toBeGreaterThan(50); });
});

describe("DemandOS clustering, opportunities, reports, and flow", () => {
  it("clusters records and generates opportunities", () => { const records = rawRecords.filter(r => r.projectId === "demo-crm-reporting"); const cls = clusterRecords("demo-crm-reporting", records, classifications); const opps = generateOpportunities("demo-crm-reporting", cls); expect(cls.length).toBeGreaterThan(0); expect(opps[0].evidenceRecordIds.length).toBeGreaterThan(0); });
  it("generates PMM and builder exports with evidence", () => { const records = rawRecords.filter(r => r.projectId === "demo-crm-reporting"); const cls = clusterRecords("demo-crm-reporting", records, classifications); const opps = generateOpportunities("demo-crm-reporting", cls); expect(generatePmmReport("CRM", cls, opps, records)).toContain("Evidence appendix"); expect(generateBuilderReport("CRM", opps)).toContain("Recommendation"); });
});
