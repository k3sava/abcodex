import { NextResponse } from "next/server";
import { z } from "zod";
import { projects } from "@/lib/demo-data";
const schema = z.object({ name: z.string().min(1), category: z.string().min(1), icp: z.string().optional(), competitors: z.array(z.string()).optional(), keywords: z.array(z.string()).optional() });
export async function GET() { return NextResponse.json({ projects }); }
export async function POST(req: Request) { const input = schema.parse(await req.json()); return NextResponse.json({ project: { id: `project-${Date.now()}`, ...input, createdAt: new Date().toISOString() } }, { status: 201 }); }
