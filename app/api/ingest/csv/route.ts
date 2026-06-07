import { NextResponse } from "next/server";
import { parseCsvRecords } from "@/lib/collectors/csv";
import { dedupe } from "@/lib/processing/clean";
export async function POST(req: Request) { const form = await req.formData(); const file = form.get("file"); if (!(file instanceof File)) return NextResponse.json({ error: "file is required" }, { status: 400 }); const records = dedupe(parseCsvRecords(await file.text())); return NextResponse.json({ imported: records.length, records }); }
