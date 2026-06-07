import { z } from "zod";
export const normalizedRecordSchema = z.object({ source: z.string(), sourceUrl: z.string().optional(), author: z.string().optional(), date: z.string().optional(), title: z.string().optional(), body: z.string().min(1), product: z.string().optional(), engagement: z.number().optional(), rawPayload: z.unknown().optional() });
export type NormalizedCollectorRecord = z.infer<typeof normalizedRecordSchema>;
