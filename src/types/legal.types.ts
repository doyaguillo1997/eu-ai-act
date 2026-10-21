export type RiskLevel =
  | 'unacceptable'
  | 'high'
  | 'gpai'
  | 'transparency'
  | 'minimal'
  | 'governance';

export type EnterpriseRole =
  | 'provider'
  | 'deployer'
  | 'distributor'
  | 'importer'
  | 'gpai_provider';

export interface LegalCitation {
  citationId: string;        // e.g. "EU-2024-1689:art_5.p1.a" or "EU-2024-1689:rct_29"
  boeId: string;             // e.g. "DOUE-L-2024-81079" or "BOE-A-2023-18911"
  eliUri: string;            // e.g. "https://data.europa.eu/eli/reg/2024/1689/spa"
  targetType: 'article' | 'paragraph' | 'recital' | 'annex' | 'boe_update';
  articleId: string;         // e.g. "art_5", "rct_29", "anx_III"
  paragraphId?: string;      // e.g. "art_5.p1"
  displayLabel: string;      // e.g. "Art. 5.1(a) · Reglamento (UE) 2024/1689"
  exactQuote: string;        // Verbatim excerpt from EUR-Lex / BOE
}

export interface EnterpriseImpact {
  summary: string;
  byRole: Record<EnterpriseRole, string>;
  actionItems: string[];
  penaltyInfo: {
    maxFineEuros: string;
    maxTurnoverPct: string;
    citation: LegalCitation;
  };
}

export interface LegalParagraph {
  id: string;                // e.g. "art_5.p1"
  articleId: string;         // e.g. "art_5"
  numberLabel: string;       // e.g. "1.", "1.a)", "Párrafo 2"
  officialText: string;      // Full official Spanish paragraph text from EUR-Lex / BOE
  plainExplanation: string;  // Clear explanation of what this specific paragraph means
  enterpriseImpact: EnterpriseImpact;
  riskLevel: RiskLevel;
  relatedRecitals: string[]; // e.g. ["rct_28", "rct_29"]
  relatedAnnexes: string[];  // e.g. ["anx_III"]
  citations: LegalCitation[];
  vectorIndex: number;       // Row index into Float32Array vector store
}

export interface LegalArticle {
  id: string;                // "art_1" .. "art_113"
  number: number;            // 1 .. 113
  titleLabel: string;        // "Artículo 5"
  heading: string;           // "Prácticas de IA prohibidas"
  titleId: string;           // "tit_II"
  titleName: string;         // "TÍTULO II — PRÁCTICAS DE IA PROHIBIDAS"
  chapterId?: string;
  chapterName?: string;
  sectionName?: string;
  riskLevel: RiskLevel;
  summary: string;
  enterpriseTakeaway: string;
  paragraphs: LegalParagraph[];
  relatedRecitals: string[];
  relatedAnnexes: string[];
  applicationDeadlineId: string; // Links to TimelineMilestone.id
  vectorIndex: number;
}

export interface LegalRecital {
  id: string;                // "rct_1" .. "rct_180"
  number: number;            // 1 .. 180
  officialText: string;
  plainSummary: string;
  linkedArticles: string[];  // e.g. ["art_5", "art_6"]
  riskLevel: RiskLevel;
  vectorIndex: number;
}

export interface LegalAnnex {
  id: string;                // "anx_I" .. "anx_XIII"
  roman: string;             // "I" .. "XIII"
  title: string;
  heading: string;
  summary: string;
  enterpriseRelevance: string;
  paragraphs: LegalParagraph[];
  linkedArticles: string[];
  riskLevel: RiskLevel;
  vectorIndex: number;
}

export interface BoePosteriorUpdate {
  boeId: string;             // e.g. "DOUE-L-2026-81147", "BOE-A-2023-18911"
  date: string;
  relationship: string;      // e.g. "SE MODIFICA", "SE DICTA DE CONFORMIDAD", "MARCO NACIONAL ESPAÑA"
  title: string;
  enterpriseImplication: string;
  citation: LegalCitation;
}

export interface TimelineReadinessItem {
  id: string;
  category: 'Gobernanza' | 'Técnico' | 'Datos' | 'Legal' | 'Formación';
  requirement: string;
  expectedStateDescription: string;
  targetRoles: EnterpriseRole[];
  citation: LegalCitation;
}

export interface TimelineMilestone {
  id: string;
  dateIso: string;           // e.g. "2025-02-02"
  dateLabel: string;         // e.g. "2 de febrero de 2025"
  monthsFromEntry: number;   // 0, 6, 12, 24, 36, 72
  title: string;
  subtitle: string;
  statusInOct2026: 'enforced' | 'recently_enforced' | 'upcoming';
  riskLevel: RiskLevel;
  whatApplies: string[];
  howCompanyShouldBe: string;
  readinessChecklist: TimelineReadinessItem[];
  affectedArticles: string[];
  citations: LegalCitation[];
}

export interface InfographicModule {
  id: string;
  title: string;
  subtitle: string;
  category: 'risk_pyramid' | 'role_obligations' | 'conformity_flow' | 'sanctions' | 'gpai' | 'spain_aesia';
  riskLevel: RiskLevel;
  keyPoints: {
    heading: string;
    explanation: string;
    enterpriseConsequence: string;
    metricOrBadge?: string;
    citation: LegalCitation;
  }[];
  citations: LegalCitation[];
}

export type QuizTopicId =
  | 'prohibited'
  | 'high_risk'
  | 'gpai'
  | 'transparency'
  | 'governance_sanctions'
  | 'deadlines'
  | 'enterprise_cases';

export interface ExamTopicBreakdown {
  topicId: QuizTopicId;
  topicLabel: string;
  correct: number;
  total: number;
  accuracyPct: number;
}

export interface ExamTitleBreakdown {
  titleId: string;
  titleLabel: string;
  correct: number;
  total: number;
  accuracyPct: number;
}

export interface CompletedExamQuestionResult {
  questionId: string;
  topicId: QuizTopicId;
  titleId: string;
  articleId: string;
  selectedOptionIndex: number | null;
  correctOptionIndex: number;
  isCorrect: boolean;
}

export interface CompletedExamRecord {
  id: string;
  completedAtIso: string;
  questionCount: number;
  correctCount: number;
  scorePct: number;
  durationSeconds: number;
  scopeDescription: string;
  samplingStrategy: 'stratified_all' | 'custom_topics' | 'weakness_focus';
  byTopic: ExamTopicBreakdown[];
  byTitle: ExamTitleBreakdown[];
  questionResults: CompletedExamQuestionResult[];
}

export interface QuizQuestion {
  id: string;
  topicId: QuizTopicId;
  topicLabel: string;
  articleId: string;         // e.g. "art_5"
  titleId: string;           // e.g. "tit_II"
  difficulty: 'básico' | 'intermedio' | 'avanzado';
  isPracticalCase: boolean;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  enterpriseLesson: string;
  citations: LegalCitation[];
}

export interface EuAiActCorpus {
  metadata: {
    officialTitle: string;
    celex: string;
    boeId: string;
    eliUri: string;
    eurLexHtmlUrl: string;
    boeXmlUrl: string;
    publicationDate: string;
    entryIntoForceDate: string;
    generalApplicationDate: string;
    vectorDimensions: number;
    totalVectors: number;
    totalArticles: number;
    totalParagraphs: number;
    totalRecitals: number;
    totalAnnexes: number;
    generatedAt: string;
  };
  titles: {
    id: string;
    roman: string;
    name: string;
    summary: string;
    articleIds: string[];
  }[];
  articles: LegalArticle[];
  recitals: LegalRecital[];
  annexes: LegalAnnex[];
  boeUpdates: BoePosteriorUpdate[];
  timeline: TimelineMilestone[];
  infographics: InfographicModule[];
  quizBank: QuizQuestion[];
  vectorIndexMap: {
    vectorIndex: number;
    kind: 'article' | 'paragraph' | 'recital' | 'annex';
    id: string;
    articleId: string;
    label: string;
    snippet: string;
    riskLevel: RiskLevel;
  }[];
}

export interface VectorSearchResult {
  vectorIndex: number;
  kind: 'article' | 'paragraph' | 'recital' | 'annex';
  id: string;
  articleId: string;
  label: string;
  snippet: string;
  riskLevel: RiskLevel;
  score: number;             // Combined hybrid semantic + lexical score (0..1)
  cosineSimilarity: number;
  lexicalScore: number;
  citation: LegalCitation;
}
