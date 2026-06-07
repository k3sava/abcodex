import OpenAI from "openai";
import { z } from "zod";
import { signalTypes } from "../types";
import { classificationPrompt } from "./prompts";

export const classificationSchema = z.object({ signalType: z.enum(signalTypes), painCategory: z.string(), emotionalIntensity: z.number().min(1).max(5), urgency: z.number().min(1).max(5), persona: z.string(), productArea: z.string(), workflowStep: z.string(), competitorsMentioned: z.array(z.string()), toolsMentioned: z.array(z.string()), workaroundPresent: z.boolean(), willingnessToPaySignal: z.boolean(), summary: z.string(), quotableLanguage: z.string(), confidence: z.number().min(0).max(1), why: z.string() });
export type AiLog = { prompt: string; rawResponse: string; parsed: unknown; model: string; attempts: number };
const cache = new Map<string, unknown>();

export async function classifyWithAi(text: string, model = process.env.OPENAI_MODEL || "gpt-4o-mini") {
  const key = `classify:${model}:${text}`; if (cache.has(key)) return cache.get(key) as z.infer<typeof classificationSchema>;
  if (!process.env.OPENAI_API_KEY || process.env.DEMO_MODE === "true") { const parsed = heuristicClassify(text); cache.set(key, parsed); return parsed; }
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, baseURL: process.env.OPENAI_BASE_URL });
  let last = "";
  for (let attempts = 1; attempts <= 3; attempts++) {
    const res = await client.chat.completions.create({ model, messages: [{ role: "system", content: classificationPrompt }, { role: "user", content: text }], response_format: { type: "json_object" } });
    last = res.choices[0]?.message.content || "{}";
    try { const parsed = classificationSchema.parse(JSON.parse(last)); cache.set(key, parsed); return parsed; } catch { if (attempts === 3) throw new Error(`Invalid AI JSON after retries: ${last}`); }
  }
  throw new Error(`Invalid AI response: ${last}`);
}

export function heuristicClassify(text: string) {
  const lower = text.toLowerCase();
  const workaround = /export|copy|paste|spreadsheet|manual|glue|zapier|csv|workaround/.test(lower);
  const alt = /alternative|switch|migrat|replace/.test(lower);
  const pricing = /pay|pricing|expensive|cost/.test(lower);
  const signalType = alt ? "alternative_request" : workaround ? "workaround" : pricing ? "pricing_complaint" : /wish|feature/.test(lower) ? "feature_request" : "complaint";
  return classificationSchema.parse({ signalType, painCategory: /report|dashboard|arr|pipeline/.test(lower) ? "reporting" : "workflow friction", emotionalIntensity: /hate|worst|exhaust|break/.test(lower) ? 4 : 3, urgency: /weekly|friday|board|leadership|every month/.test(lower) ? 4 : 3, persona: /revops|salesops|pipeline|arr/.test(lower) ? "RevOps manager" : "Operator", productArea: /dashboard|report/.test(lower) ? "reporting" : "workflow", workflowStep: /board/.test(lower) ? "board reporting" : /weekly|friday/.test(lower) ? "weekly reporting" : "daily workflow", competitorsMentioned: ["HubSpot", "Salesforce", "Fireflies", "Airtable"].filter(p => lower.includes(p.toLowerCase())), toolsMentioned: ["Google Sheets", "Zapier", "CSV", "Notion", "Slack"].filter(p => lower.includes(p.toLowerCase())), workaroundPresent: workaround, willingnessToPaySignal: pricing || /board|leadership|arr|revenue/.test(lower), summary: text.slice(0, 180), quotableLanguage: text.slice(0, 160), confidence: 0.76, why: "Demo classifier detected complaint, workaround, switching, pricing, workflow, and buyer-value phrases deterministically." });
}
