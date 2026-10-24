import {
  EuAiActCorpus,
  LegalArticle,
  LegalParagraph,
  LegalRecital,
  LegalAnnex,
  LegalCitation,
  RiskLevel,
  VectorSearchResult,
} from '../types/legal.types';

export const VECTOR_MAGIC = 0x45555631; // "EUV1"
export const CORPUS_MAGIC = 0x45554131; // "EUA1"
export const VECTOR_DIMENSIONS = 128;

export const EUR_LEX_CONSOLIDATED_HTML_BASE =
  'https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:02024R1689-20260727';
export const EUR_LEX_OJ_HTML_BASE =
  'https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202401689';

/**
 * Resolves the exact official EUR-Lex HTML deep-link (with #art_X, #anx_V, #rct_Y, #tit_Z fragment)
 * or official BOE document link so clicking an external reference jumps directly to that section.
 */
export function resolveOfficialExternalUrl(input: {
  articleId?: string;
  paragraphId?: string;
  recitalId?: string;
  annexId?: string;
  boeId?: string;
  targetType?: string;
  eliUri?: string;
}): string {
  const boeId = input.boeId || 'DOUE-L-2024-81079';

  if (
    input.targetType === 'boe_update' ||
    (boeId !== 'DOUE-L-2024-81079' &&
      !input.articleId?.startsWith('art_') &&
      !input.articleId?.startsWith('anx_') &&
      !input.articleId?.startsWith('rct_') &&
      !input.annexId &&
      !input.recitalId)
  ) {
    return `https://www.boe.es/buscar/doc.php?id=${encodeURIComponent(boeId)}`;
  }

  const rawAnchorSource =
    input.annexId ||
    input.recitalId ||
    input.articleId ||
    input.paragraphId ||
    '';

  const baseAnchor = rawAnchorSource.split('.')[0].trim();

  if (baseAnchor.startsWith('anx_') || baseAnchor.startsWith('art_') || baseAnchor.startsWith('tit_')) {
    return `${EUR_LEX_CONSOLIDATED_HTML_BASE}#${baseAnchor}`;
  }

  if (baseAnchor.startsWith('rct_')) {
    return `${EUR_LEX_OJ_HTML_BASE}#${baseAnchor}`;
  }

  if (input.eliUri && input.eliUri.includes('#')) {
    return input.eliUri;
  }

  return EUR_LEX_CONSOLIDATED_HTML_BASE;
}

/**
 * Returns the short fragment badge label (e.g. "#anx_V", "#art_5", "#rct_27") for display on official links.
 */
export function resolveOfficialAnchorBadge(input: {
  articleId?: string;
  paragraphId?: string;
  recitalId?: string;
  annexId?: string;
  boeId?: string;
  targetType?: string;
}): string {
  if (input.targetType === 'boe_update') {
    return input.boeId || 'BOE';
  }
  const raw = input.annexId || input.recitalId || input.articleId || input.paragraphId || '';
  const base = raw.split('.')[0].trim();
  return base ? `#${base}` : 'EUR-Lex';
}

const STOPWORDS_ES = new Set([
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'de', 'del', 'al', 'a', 'en',
  'con', 'por', 'para', 'sin', 'sobre', 'entre', 'hacia', 'hasta', 'desde', 'que', 'y',
  'o', 'u', 'e', 'ni', 'pero', 'como', 'cuando', 'donde', 'quien', 'cual', 'cuyo', 'se',
  'su', 'sus', 'le', 'les', 'lo', 'me', 'te', 'nos', 'os', 'mi', 'tu', 'este', 'esta',
  'estos', 'estas', 'ese', 'esa', 'esos', 'esas', 'aquel', 'aquella', 'ser', 'estar',
  'haber', 'tener', 'hacer', 'poder', 'deber', 'mas', 'menos', 'muy', 'ya', 'no', 'si',
  'tambien', 'asi', 'solo', 'todo', 'toda', 'todos', 'todas', 'otro', 'otra', 'otros',
]);

// High-signal legal domain keywords given 2.5x weight in dense hashing projection
const LEGAL_DOMAIN_BOOST: Record<string, number> = {
  prohibid: 2.8,
  inaceptable: 2.8,
  subliminal: 2.6,
  biometric: 2.7,
  emocion: 2.6,
  puntuacion: 2.5,
  ciudadana: 2.5,
  alto: 2.3,
  riesgo: 2.4,
  proveedor: 2.4,
  desplegador: 2.5,
  conformidad: 2.4,
  transparencia: 2.5,
  gpai: 2.8,
  general: 2.1,
  sistemico: 2.7,
  sancion: 2.7,
  multa: 2.8,
  volumen: 2.3,
  negocios: 2.3,
  plazo: 2.4,
  entrada: 2.2,
  vigor: 2.2,
  aplicacion: 2.1,
  alfabetizacion: 2.7,
  supervision: 2.4,
  humana: 2.3,
  datos: 2.2,
  gobernanza: 2.4,
  sandbox: 2.6,
  aesia: 2.8,
  derechos: 2.3,
  fundamentales: 2.4,
  impacto: 2.3,
  profundo: 2.3,
  sintetic: 2.5,
  deepfake: 2.8,
  marcado: 2.4,
  registro: 2.2,
  anexo: 2.3,
  articulo: 2.2,
  considerando: 2.2,
};

export function normalizeSpanishText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenizeLegalText(text: string): string[] {
  const norm = normalizeSpanishText(text);
  if (!norm) return [];
  return norm.split(' ').filter((tok) => tok.length > 1 && !STOPWORDS_ES.has(tok));
}

function fnv1aHash(str: string, seed = 2166136261): number {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/**
 * Deterministic 128-dimensional signed feature-hashing + character n-gram vectorizer.
 * Identical algorithm is executed at build time (ingest-and-vectorize.mjs) and query time.
 */
export function computeTextEmbedding(text: string, dim = VECTOR_DIMENSIONS): Float32Array {
  const vec = new Float32Array(dim);
  const tokens = tokenizeLegalText(text);
  if (tokens.length === 0) return vec;

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    let weight = 1.0;
    for (const [stem, boost] of Object.entries(LEGAL_DOMAIN_BOOST)) {
      if (tok.startsWith(stem)) {
        weight = boost;
        break;
      }
    }

    // Word unigram projection (2 hash projections)
    const h1 = fnv1aHash(tok, 0x811c9dc5);
    const h2 = fnv1aHash(tok, 0x9e3779b9);
    const idx1 = h1 % dim;
    const sign1 = (h1 & 0x10000) !== 0 ? 1 : -1;
    vec[idx1] += sign1 * weight;

    const idx2 = h2 % dim;
    const sign2 = (h2 & 0x20000) !== 0 ? 1 : -1;
    vec[idx2] += sign2 * weight * 0.65;

    // Word stem / prefix (first 5 chars) for morphological invariance in Spanish
    if (tok.length >= 5) {
      const stem = tok.slice(0, 5);
      const hs = fnv1aHash(`stem:${stem}`, 0x85ebca6b);
      vec[hs % dim] += ((hs & 0x1000) ? 1 : -1) * weight * 0.85;
    }

    // Word bigram context
    if (i + 1 < tokens.length) {
      const bg = `${tok}_${tokens[i + 1]}`;
      const hb = fnv1aHash(bg, 0xc2b2ae35);
      vec[hb % dim] += ((hb & 0x4000) ? 1 : -1) * 1.15;
    }

    // Character 4-grams for sub-lexical fuzzy matching
    if (tok.length >= 4) {
      for (let c = 0; c <= tok.length - 4; c++) {
        const ngram = tok.slice(c, c + 4);
        const hc = fnv1aHash(ngram, 0x27d4eb2f);
        vec[hc % dim] += ((hc & 0x8000) ? 1 : -1) * 0.35;
      }
    }
  }

  // L2 normalization so dot product === cosine similarity
  let normSq = 0;
  for (let d = 0; d < dim; d++) {
    normSq += vec[d] * vec[d];
  }
  if (normSq > 1e-12) {
    const invNorm = 1.0 / Math.sqrt(normSq);
    for (let d = 0; d < dim; d++) {
      vec[d] *= invNorm;
    }
  }
  return vec;
}

export function decodeCorpusBinary(buffer: ArrayBuffer): EuAiActCorpus {
  const view = new DataView(buffer);
  const magic = view.getUint32(0, true);
  if (magic !== CORPUS_MAGIC) {
    throw new Error(`Invalid corpus binary magic header: 0x${magic.toString(16)}`);
  }
  const byteLength = view.getUint32(4, true);
  const payload = new Uint8Array(buffer, 8, byteLength);
  // Decode XOR-masked binary stream (key 0x5A) back to UTF-8 structured JSON
  const decoded = new Uint8Array(byteLength);
  for (let i = 0; i < byteLength; i++) {
    decoded[i] = payload[i] ^ ((i * 31 + 0x5a) & 0xff);
  }
  const jsonStr = new TextDecoder('utf-8').decode(decoded);
  return JSON.parse(jsonStr) as EuAiActCorpus;
}

export function decodeVectorsBinary(buffer: ArrayBuffer): {
  numVectors: number;
  dimensions: number;
  vectors: Float32Array;
} {
  const view = new DataView(buffer);
  const magic = view.getUint32(0, true);
  if (magic !== VECTOR_MAGIC) {
    throw new Error(`Invalid vector binary magic header: 0x${magic.toString(16)}`);
  }
  const numVectors = view.getUint32(4, true);
  const dimensions = view.getUint32(8, true);
  const vectors = new Float32Array(buffer, 12, numVectors * dimensions);
  return { numVectors, dimensions, vectors };
}

export class LegalVectorEngine {
  public readonly corpus: EuAiActCorpus;
  public readonly vectors: Float32Array;
  public readonly numVectors: number;
  public readonly dimensions: number;

  private articleMap = new Map<string, LegalArticle>();
  private paragraphMap = new Map<string, LegalParagraph>();
  private recitalMap = new Map<string, LegalRecital>();
  private annexMap = new Map<string, LegalAnnex>();
  private tokenMap = new Map<number, Set<string>>();

  constructor(corpus: EuAiActCorpus, vectors: Float32Array, numVectors: number, dimensions: number) {
    this.corpus = corpus;
    this.vectors = vectors;
    this.numVectors = numVectors;
    this.dimensions = dimensions;

    for (const art of corpus.articles) {
      this.articleMap.set(art.id, art);
      for (const p of art.paragraphs) {
        this.paragraphMap.set(p.id, p);
      }
    }
    for (const rct of corpus.recitals) {
      this.recitalMap.set(rct.id, rct);
    }
    for (const anx of corpus.annexes) {
      this.annexMap.set(anx.id, anx);
      for (const p of anx.paragraphs) {
        this.paragraphMap.set(p.id, p);
      }
    }
    for (const item of corpus.vectorIndexMap) {
      this.tokenMap.set(item.vectorIndex, new Set(tokenizeLegalText(`${item.label} ${item.snippet}`)));
    }
  }

  public getArticle(articleId: string): LegalArticle | undefined {
    return this.articleMap.get(articleId);
  }

  public getParagraph(paragraphId: string): LegalParagraph | undefined {
    const direct = this.paragraphMap.get(paragraphId);
    if (direct) return direct;

    // Smart resolution for sub-point citations like "art_5.p1.a" or "art_113.c"
    const artPrefixMatch = paragraphId.match(/^(art_\d+|anx_[IVXLC]+)\.(.+)$/);
    if (artPrefixMatch) {
      const [, parentId, subKey] = artPrefixMatch;
      const cleanSub = subKey.replace(/^p/, '').toLowerCase();
      const parent =
        this.articleMap.get(parentId) || this.annexMap.get(parentId);
      if (parent && parent.paragraphs.length > 0) {
        const byLabel = parent.paragraphs.find((p) => {
          const normLabel = p.numberLabel.toLowerCase().replace(/[()]/g, '').replace(/\.$/, '');
          return normLabel === cleanSub || normLabel.endsWith(cleanSub);
        });
        if (byLabel) return byLabel;
        return parent.paragraphs[0];
      }
    }
    return undefined;
  }

  public getRecital(recitalId: string): LegalRecital | undefined {
    return this.recitalMap.get(recitalId);
  }

  public getAnnex(annexId: string): LegalAnnex | undefined {
    return this.annexMap.get(annexId);
  }

  public cosineSimilarity(vecA: Float32Array, rowIndexB: number): number {
    if (rowIndexB < 0 || rowIndexB >= this.numVectors) return 0;
    const offsetB = rowIndexB * this.dimensions;
    let dot = 0;
    for (let d = 0; d < this.dimensions; d++) {
      dot += vecA[d] * this.vectors[offsetB + d];
    }
    return dot;
  }

  public getRowVector(rowIndex: number): Float32Array {
    const start = rowIndex * this.dimensions;
    return this.vectors.subarray(start, start + this.dimensions);
  }

  public findSimilarProvisions(vectorIndex: number, topK = 5): VectorSearchResult[] {
    if (vectorIndex < 0 || vectorIndex >= this.numVectors) return [];
    const sourceVec = this.getRowVector(vectorIndex);
    const sourceEntry = this.corpus.vectorIndexMap[vectorIndex];
    const results: VectorSearchResult[] = [];

    for (const entry of this.corpus.vectorIndexMap) {
      if (entry.vectorIndex === vectorIndex) continue;
      if (sourceEntry && entry.id === sourceEntry.id) continue;
      const cos = this.cosineSimilarity(sourceVec, entry.vectorIndex);
      if (cos <= 0.08) continue;

      results.push({
        ...entry,
        score: cos,
        cosineSimilarity: cos,
        lexicalScore: 0,
        citation: this.buildCitationForEntry(entry),
      });
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, topK);
  }

  public hybridSearch(
    query: string,
    options?: {
      topK?: number;
      kindFilter?: ('article' | 'paragraph' | 'recital' | 'annex')[];
      riskFilter?: RiskLevel[];
    }
  ): VectorSearchResult[] {
    const topK = options?.topK ?? 20;
    const trimmed = query.trim();
    if (!trimmed) return [];

    const queryVec = computeTextEmbedding(trimmed, this.dimensions);
    const queryTokens = tokenizeLegalText(trimmed);
    const normQuery = normalizeSpanishText(trimmed);

    // Detect explicit article or recital number queries like "art 5", "articulo 99", "considerando 47"
    const artMatch = normQuery.match(/\b(?:art|articulo)\s*(\d{1,3})\b/);
    const rctMatch = normQuery.match(/\b(?:cons|considerando)\s*(\d{1,3})\b/);
    const targetArtId = artMatch ? `art_${artMatch[1]}` : null;
    const targetRctId = rctMatch ? `rct_${rctMatch[1]}` : null;

    const results: VectorSearchResult[] = [];

    for (const entry of this.corpus.vectorIndexMap) {
      if (options?.kindFilter && options.kindFilter.length > 0 && !options.kindFilter.includes(entry.kind)) {
        continue;
      }
      if (options?.riskFilter && options.riskFilter.length > 0 && !options.riskFilter.includes(entry.riskLevel)) {
        continue;
      }

      const cos = Math.max(0, this.cosineSimilarity(queryVec, entry.vectorIndex));
      let lexical = 0;

      if (queryTokens.length > 0) {
        const entryTokens = this.tokenMap.get(entry.vectorIndex);
        let matched = 0;
        if (entryTokens) {
          for (const qt of queryTokens) {
            if (entryTokens.has(qt)) {
              matched += 1;
            } else {
              for (const et of entryTokens) {
                if (et.startsWith(qt) || (qt.length >= 5 && et.startsWith(qt.slice(0, 5)))) {
                  matched += 0.75;
                  break;
                }
              }
            }
          }
        }
        lexical = matched / queryTokens.length;
      }

      let exactBoost = 0;
      if (targetArtId && (entry.id === targetArtId || entry.articleId === targetArtId)) {
        exactBoost = entry.kind === 'article' ? 0.65 : 0.45;
      }
      if (targetRctId && entry.id === targetRctId) {
        exactBoost = 0.65;
      }

      const combinedScore = Math.min(1, cos * 0.55 + lexical * 0.45 + exactBoost);
      if (combinedScore < 0.12) continue;

      results.push({
        ...entry,
        score: combinedScore,
        cosineSimilarity: cos,
        lexicalScore: lexical,
        citation: this.buildCitationForEntry(entry),
      });
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, topK);
  }

  public buildCitationForEntry(entry: EuAiActCorpus['vectorIndexMap'][number]): LegalCitation {
    const paragraphId = entry.kind === 'paragraph' ? entry.id : undefined;
    return {
      citationId: `EU-2024-1689:${entry.id}`,
      boeId: this.corpus.metadata.boeId,
      eliUri: resolveOfficialExternalUrl({
        articleId: entry.articleId,
        paragraphId,
        recitalId: entry.kind === 'recital' ? entry.id : undefined,
        annexId: entry.kind === 'annex' ? entry.id : undefined,
        boeId: this.corpus.metadata.boeId,
        targetType: entry.kind,
      }),
      targetType: entry.kind,
      articleId: entry.articleId,
      paragraphId,
      displayLabel: `${entry.label} · Reglamento (UE) 2024/1689`,
      exactQuote: entry.snippet,
    };
  }
}

/**
 * Determines if a paragraph is a structural legal lead-in / chapeau / encabezamiento
 * (e.g. "1. Quedan prohibidas las siguientes prácticas de IA:", "2. El presente Reglamento establece:",
 * "...cuando reúna las dos condiciones siguientes:") that merely introduces subordinate
 * lettered/numbered sections rather than containing an independent interactive obligation.
 */
export function isLeadInParagraph(
  p: LegalParagraph,
  articleParagraphs?: LegalParagraph[]
): boolean {
  const text = p.officialText.trim();
  const idx = articleParagraphs ? articleParagraphs.findIndex((item) => item.id === p.id) : -1;
  const nextP = articleParagraphs && idx >= 0 ? articleParagraphs[idx + 1] : undefined;

  // 1. Ends with a colon ":"
  if (text.endsWith(':')) {
    if (nextP) {
      const nextLabel = (nextP.numberLabel || '').trim();
      const nextText = nextP.officialText.trim();
      if (
        /^([a-z]\)|\d+\)|[ivxlcdm]+\))/i.test(nextLabel) ||
        /\.[a-z]\)/i.test(nextLabel) ||
        /^[a-z]\)\s+/i.test(nextText) ||
        nextLabel.includes(')')
      ) {
        return true;
      }
    }
    if (text.length < 380) {
      return true;
    }
  }

  // 2. Typical Spanish legal lead-in introductory phrases
  const leadInRegex = /(quedan prohibid[ao]s?|se prohíben?|enumera lo siguiente|las siguientes prácticas|las siguientes condiciones|las condiciones siguientes|los requisitos siguientes|los criterios siguientes|los elementos siguientes|lo siguiente|se aplicará a|establece lo siguiente|se entenderá por|tendrá en cuenta los siguientes aspectos|comprenderá lo siguiente)\s*:?$/i;
  if (leadInRegex.test(text)) {
    if (nextP || text.length < 350) {
      return true;
    }
  }

  return false;
}
