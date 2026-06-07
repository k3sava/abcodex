import type { Platform } from "./types";

const TRACKING_PARAMS = new Set([
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid", "mc_cid", "mc_eid", "si", "feature"
]);

export function detectPlatform(input: string): Platform {
  try {
    const host = new URL(input).hostname.replace(/^www\./, "");
    if (host.endsWith("instagram.com")) return "instagram";
    if (host.endsWith("linkedin.com")) return "linkedin";
    if (host.endsWith("youtube.com") || host === "youtu.be") return "youtube";
  } catch {
    return "unknown";
  }
  return "unknown";
}

export function normalizeUrl(input: string): string {
  const url = new URL(input);
  url.hash = "";
  url.hostname = url.hostname.toLowerCase().replace(/^m\./, "www.");
  for (const param of [...url.searchParams.keys()]) {
    if (TRACKING_PARAMS.has(param.toLowerCase())) url.searchParams.delete(param);
  }
  if (url.hostname === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    return `https://www.youtube.com/watch?v=${id}`;
  }
  if (url.hostname.endsWith("youtube.com") && url.pathname === "/watch") {
    const id = url.searchParams.get("v");
    return id ? `https://www.youtube.com/watch?v=${id}` : url.toString();
  }
  url.pathname = url.pathname.replace(/\/$/, "");
  return url.toString();
}

export function stableId(prefix: string, source: string): string {
  let hash = 5381;
  for (let i = 0; i < source.length; i += 1) hash = (hash * 33) ^ source.charCodeAt(i);
  return `${prefix}_${(hash >>> 0).toString(36)}`;
}
