export type Platform = "instagram" | "linkedin" | "youtube" | "unknown";
export type SignalType = "like" | "save" | "reaction" | "manual_capture";
export type MediaType = "post" | "reel" | "video" | "article" | "unknown";
export type ProcessingStatus = "queued" | "processing" | "processed" | "failed";

export interface RawCapture {
  id: string;
  platform: Platform;
  signalType: SignalType;
  sourceUrl: string;
  canonicalUrl: string;
  creatorName?: string;
  creatorHandle?: string;
  creatorProfileUrl?: string;
  title?: string;
  text?: string;
  transcript?: string;
  description?: string;
  thumbnailUrl?: string;
  mediaType: MediaType;
  capturedAt: string;
  originalPublishedAt?: string;
  rawHtmlSnapshot?: string;
  extractionConfidence: number;
  processingStatus: ProcessingStatus;
  extractionWarnings?: string[];
}

export interface ProcessedInsight {
  id: string;
  rawCaptureId: string;
  shortSummary: string;
  detailedSummary: string;
  keyIdeas: string[];
  claims: string[];
  examples: string[];
  frameworks: string[];
  toolsMentioned: string[];
  peopleMentioned: string[];
  companiesMentioned: string[];
  topics: string[];
  subtopics: string[];
  noveltyScore: number;
  usefulnessScore: number;
  confidenceScore: number;
  sourceQualityScore: number;
  createdAt: string;
}

export interface Operator {
  id: string;
  name: string;
  handle?: string;
  platform: Platform;
  profileUrl?: string;
  bio?: string;
  domains: string[];
  recurringThemes: string[];
  credibilityNotes?: string;
  relatedOperators: string[];
  capturedItemCount: number;
}

export interface Topic {
  id: string;
  name: string;
  summary: string;
  relatedTopics: string[];
  representativeCaptures: string[];
  strongestOperators: string[];
  openQuestions: string[];
  contradictoryViews: string[];
  lastUpdatedAt: string;
}

export type ResearchRelationship = "supports" | "contradicts" | "adjacent" | "background";

export interface ResearchResult {
  id: string;
  relatedInsightId: string;
  query: string;
  sourceTitle: string;
  sourceUrl: string;
  sourceAuthor?: string;
  sourceType: "article" | "video" | "podcast" | "newsletter" | "paper" | "search";
  sourceSummary: string;
  supportsOrContradicts: ResearchRelationship;
  credibilityNotes: string;
  capturedAt: string;
}

export interface ExportedNote {
  id: string;
  noteType: "capture" | "topic" | "operator" | "digest";
  destination: "obsidian" | "google_drive";
  path: string;
  markdownContent: string;
  lastSyncedAt?: string;
  syncStatus: "pending" | "synced" | "failed";
}

export interface KnowledgeBase {
  rawCaptures: RawCapture[];
  processedInsights: ProcessedInsight[];
  operators: Operator[];
  topics: Topic[];
  researchResults: ResearchResult[];
  exportedNotes: ExportedNote[];
}

export interface AiSettings {
  provider: "local_mock" | "openai" | "anthropic";
  apiKey?: string;
  model?: string;
  allowSendingText: boolean;
  allowSendingTranscript: boolean;
  allowSendingRawHtml: boolean;
}
