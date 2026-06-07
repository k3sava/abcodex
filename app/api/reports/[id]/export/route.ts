import { NextResponse } from "next/server";
import { generateBuilderReport, generatePmmReport } from "@/lib/reports/generator";
import { clusters, opportunities, projects, rawRecords } from "@/lib/demo-data";
export async function GET(_: Request, { params }: { params: { id: string } }) { const p = projects.find(x => x.id === params.id); const records = rawRecords.filter(r => r.projectId === params.id); const cls = clusters.filter(c => c.projectId === params.id); const opps = opportunities.filter(o => o.projectId === params.id); return NextResponse.json({ markdown: { pmm: generatePmmReport(p?.name ?? params.id, cls, opps, records), builder: generateBuilderReport(p?.name ?? params.id, opps) }, json: { project: p, clusters: cls, opportunities: opps, evidence: records } }); }
