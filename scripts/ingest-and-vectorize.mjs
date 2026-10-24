import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  OFFICIAL_BOE_ID,
  OFFICIAL_ELI_URI,
  PENALTY_TIERS,
  TITLE_DEFINITIONS,
  BOE_UPDATES_DATA,
  TIMELINE_MILESTONES,
  INFOGRAPHIC_MODULES,
  makeCitation,
} from './legal-enrichment-data.mjs';
import { QUIZ_BANK_DATA as QUIZ_BANK_BASE } from './quiz-bank-data.mjs';
import { QUIZ_BANK_PART1 } from './quiz-bank-part1.mjs';
import { QUIZ_BANK_PART1B } from './quiz-bank-part1b.mjs';
import { QUIZ_BANK_PART2 } from './quiz-bank-part2.mjs';
import { QUIZ_BANK_PART2B } from './quiz-bank-part2b.mjs';
import { QUIZ_BANK_PART3 } from './quiz-bank-part3.mjs';
import { QUIZ_BANK_PART3B } from './quiz-bank-part3b.mjs';

// Unified non-repetitive quiz bank (base + Títulos I–III + Títulos IV–XIII & sector cases)
const QUIZ_BANK_DATA = (() => {
  const seenIds = new Set();
  const seenQuestions = new Set();
  const out = [];
  for (const q of [...QUIZ_BANK_BASE, ...QUIZ_BANK_PART1, ...QUIZ_BANK_PART1B, ...QUIZ_BANK_PART2, ...QUIZ_BANK_PART2B, ...QUIZ_BANK_PART3, ...QUIZ_BANK_PART3B]) {
    const key = q.question.trim().toLowerCase();
    if (seenIds.has(q.id) || seenQuestions.has(key)) {
      throw new Error(`Duplicate quiz question detected: ${q.id}`);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
    out.push(q);
  }
  return out;
})();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'public', 'data');

export const VECTOR_MAGIC = 0x45555631; // "EUV1"
export const CORPUS_MAGIC = 0x45554131; // "EUA1"
export const VECTOR_DIMENSIONS = 128;

const EUR_LEX_HTML_URL = 'https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202401689';
const CELLAR_CELEX_URL = 'https://publications.europa.eu/resource/celex/32024R1689';
const BOE_XML_URL = 'https://www.boe.es/buscar/xml.php?id=DOUE-L-2024-81079';

// ============================================================================
// 1. EXACT EMBEDDING ENGINE (byte-for-byte identical to src/services/vectorStore.ts)
// ============================================================================
const STOPWORDS_ES = new Set([
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'de', 'del', 'al', 'a', 'en',
  'con', 'por', 'para', 'sin', 'sobre', 'entre', 'hacia', 'hasta', 'desde', 'que', 'y',
  'o', 'u', 'e', 'ni', 'pero', 'como', 'cuando', 'donde', 'quien', 'cual', 'cuyo', 'se',
  'su', 'sus', 'le', 'les', 'lo', 'me', 'te', 'nos', 'os', 'mi', 'tu', 'este', 'esta',
  'estos', 'estas', 'ese', 'esa', 'esos', 'esas', 'aquel', 'aquella', 'ser', 'estar',
  'haber', 'tener', 'hacer', 'poder', 'deber', 'mas', 'menos', 'muy', 'ya', 'no', 'si',
  'tambien', 'asi', 'solo', 'todo', 'toda', 'todos', 'todas', 'otro', 'otra', 'otros',
]);

const LEGAL_DOMAIN_BOOST = {
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

function normalizeSpanishText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenizeLegalText(text) {
  const norm = normalizeSpanishText(text);
  if (!norm) return [];
  return norm.split(' ').filter((tok) => tok.length > 1 && !STOPWORDS_ES.has(tok));
}

function fnv1aHash(str, seed = 2166136261) {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

export function computeTextEmbedding(text, dim = VECTOR_DIMENSIONS) {
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

    const h1 = fnv1aHash(tok, 0x811c9dc5);
    const h2 = fnv1aHash(tok, 0x9e3779b9);
    const idx1 = h1 % dim;
    const sign1 = (h1 & 0x10000) !== 0 ? 1 : -1;
    vec[idx1] += sign1 * weight;

    const idx2 = h2 % dim;
    const sign2 = (h2 & 0x20000) !== 0 ? 1 : -1;
    vec[idx2] += sign2 * weight * 0.65;

    if (tok.length >= 5) {
      const stem = tok.slice(0, 5);
      const hs = fnv1aHash(`stem:${stem}`, 0x85ebca6b);
      vec[hs % dim] += (hs & 0x1000 ? 1 : -1) * weight * 0.85;
    }

    if (i + 1 < tokens.length) {
      const bg = `${tok}_${tokens[i + 1]}`;
      const hb = fnv1aHash(bg, 0xc2b2ae35);
      vec[hb % dim] += (hb & 0x4000 ? 1 : -1) * 1.15;
    }

    if (tok.length >= 4) {
      for (let c = 0; c <= tok.length - 4; c++) {
        const ngram = tok.slice(c, c + 4);
        const hc = fnv1aHash(ngram, 0x27d4eb2f);
        vec[hc % dim] += (hc & 0x8000 ? 1 : -1) * 0.35;
      }
    }
  }

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

function dotProduct(vecA, vecB) {
  let sum = 0;
  for (let i = 0; i < vecA.length; i++) {
    sum += vecA[i] * vecB[i];
  }
  return sum;
}

// ============================================================================
// 2. HTML / XML CLEANING & EXTRACTION HELPERS
// ============================================================================
function cleanHtmlText(s) {
  return s
    .replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, '') // Strip footnote superscripts
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|\u00a0/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractDivById(html, id) {
  const marker = `id="${id}"`;
  const idx = html.indexOf(marker);
  if (idx === -1) return '';
  const openTagEnd = html.indexOf('>', idx) + 1;
  let depth = 1;
  const tagRe = /<\/?div\b[^>]*>/gi;
  tagRe.lastIndex = openTagEnd;
  let match;
  while ((match = tagRe.exec(html)) !== null) {
    if (match[0].startsWith('</div')) {
      depth--;
      if (depth === 0) {
        return html.slice(openTagEnd, match.index);
      }
    } else if (!match[0].endsWith('/>')) {
      depth++;
    }
  }
  return html.slice(openTagEnd);
}

function normalizeHtmlBlock(block) {
  let s = block;
  s = s.replace(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi, (match, trContent) => {
    const tds = [...trContent.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)]
      .map((m) => cleanHtmlText(m[1]))
      .filter((t) => t.length > 0);
    if (tds.length === 0) return '';
    if (tds.length === 1) return `<p class="oj-normal">${tds[0]}</p>`;
    if (/^(\d+\.|\d+\)|[a-z]\)|—|-)$/i.test(tds[0])) {
      return `<p class="oj-normal">${tds[0]}</p><p class="oj-normal">${tds.slice(1).join(' ')}</p>`;
    }
    if (tds.length >= 2 && /^(\d+\.|\d+\)|[a-z]\)|—|-)$/i.test(tds[1])) {
      return `<p class="oj-normal">${tds[1]}</p><p class="oj-normal">${tds.slice(2).join(' ')}</p>`;
    }
    return `<p class="oj-normal">${tds.join(' ')}</p>`;
  });
  s = s.replace(/<div\b[^>]*class="oj-enumeration-spacing"[^>]*>([\s\S]*?)<\/div>/gi, (match, divContent) => {
    const ps = [...divContent.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => cleanHtmlText(m[1]))
      .filter(Boolean);
    if (ps.length === 0) return '';
    return ps.map((p) => `<p class="oj-normal">${p}</p>`).join('');
  });
  return s;
}

function extractParagraphsFromHtmlBlock(blockHtml) {
  const normalized = normalizeHtmlBlock(blockHtml);
  const pMatches = [
    ...normalized.matchAll(/<p\b[^>]*class="(oj-normal|oj-ti-grseq-1)"[^>]*>([\s\S]*?)<\/p>/gi),
  ];
  const rawTokens = pMatches
    .map((m) => ({ cls: m[1], text: cleanHtmlText(m[2]) }))
    .filter((t) => t.text.length > 0);

  const merged = [];
  let currentMainNum = '';
  let currentSubLetter = '';

  for (let i = 0; i < rawTokens.length; i++) {
    const cur = rawTokens[i];

    // Dash / hyphen bullet enumeration: attach to previous paragraph rather than separating into independent clickable articles
    const isDashOnly = /^[—–-]$/.test(cur.text.trim());
    if (isDashOnly && i + 1 < rawTokens.length) {
      const next = rawTokens[i + 1];
      const bulletText = `— ${next.text}`;
      if (merged.length > 0) {
        merged[merged.length - 1].officialText += `\n${bulletText}`;
      } else {
        merged.push({
          numberLabel: currentMainNum ? `Apdo. ${currentMainNum}` : `Párrafo 1`,
          officialText: bulletText,
        });
      }
      i++; // Skip consumed body paragraph
      continue;
    }

    if (/^[—–-]\s+/.test(cur.text.trim())) {
      if (merged.length > 0) {
        merged[merged.length - 1].officialText += `\n${cur.text.trim()}`;
      } else {
        merged.push({
          numberLabel: currentMainNum ? `Apdo. ${currentMainNum}` : `Párrafo 1`,
          officialText: cur.text.trim(),
        });
      }
      continue;
    }

    const isMarker = /^(\(\d+\)|\d+\.|\d+\)|[a-z]{1,3}\)|[ivx]{1,4}\))$/i.test(cur.text);

    if (isMarker && i + 1 < rawTokens.length) {
      const next = rawTokens[i + 1];
      const marker = cur.text;
      let label = marker;

      if (/^(\d+)\.$/.test(marker)) {
        currentMainNum = marker.replace('.', '');
        currentSubLetter = '';
        label = `${currentMainNum}.`;
      } else if (
        /^(?:i|ii|iii|iv|v|vi|vii|viii|ix|x)\)$/i.test(marker) &&
        !(marker.toLowerCase() === 'i)' && currentSubLetter === 'h')
      ) {
        label =
          currentMainNum && currentSubLetter
            ? `${currentMainNum}.${currentSubLetter}.${marker}`
            : currentMainNum
            ? `${currentMainNum}.${marker}`
            : marker;
      } else if (/^([a-z]{1,2})\)$/i.test(marker)) {
        currentSubLetter = marker.replace(')', '');
        label = currentMainNum ? `${currentMainNum}.${marker}` : marker;
      } else if (currentMainNum) {
        label = `${currentMainNum}.${marker}`;
      }

      merged.push({
        numberLabel: label,
        officialText: `${marker} ${next.text}`,
      });
      i++; // Skip consumed body paragraph
    } else {
      const numPrefix = cur.text.match(/^(\d+)\.\s+/);
      if (numPrefix) {
        currentMainNum = numPrefix[1];
        currentSubLetter = '';
        merged.push({
          numberLabel: `${currentMainNum}.`,
          officialText: cur.text,
        });
      } else if (cur.cls === 'oj-ti-grseq-1') {
        merged.push({
          numberLabel: `Sección`,
          officialText: cur.text,
        });
      } else {
        merged.push({
          numberLabel: currentMainNum ? `Apdo. ${currentMainNum}` : `Párrafo ${merged.length + 1}`,
          officialText: cur.text,
        });
      }
    }
  }
  return merged;
}

// ============================================================================
// 3. ARTICLE & PARAGRAPH LEGAL + ENTERPRISE INTELLIGENCE ENRICHMENT
// ============================================================================
function getArticleRiskLevel(artNum, text = '') {
  if (artNum === 5) return 'unacceptable';
  if (artNum >= 6 && artNum <= 49) return 'high';
  if (artNum === 50) return 'transparency';
  if (artNum >= 51 && artNum <= 56) return 'gpai';
  if (artNum === 95) return 'minimal';
  if (artNum === 71 || artNum === 72 || artNum === 73 || artNum === 86) return 'high';
  if (artNum >= 89 && artNum <= 94) return 'gpai';
  if (artNum === 101) return 'gpai';
  if (artNum === 99 || artNum === 100) {
    if (text.includes('artículo 5') || text.includes('35 000 000')) return 'unacceptable';
    return 'governance';
  }
  return 'governance';
}

function getArticleDeadlineId(artNum) {
  if (artNum >= 1 && artNum <= 5) return 'ms_2025_02_prohibitions';
  if (
    (artNum >= 28 && artNum <= 39) ||
    (artNum >= 51 && artNum <= 56) ||
    (artNum >= 64 && artNum <= 70) ||
    artNum === 78 ||
    artNum === 99 ||
    artNum === 100
  ) {
    return 'ms_2025_08_gpai_gov';
  }
  if (artNum >= 102 && artNum <= 109) return 'ms_2027_08_annex1';
  if (artNum === 111) return 'ms_2030_08_largescale';
  return 'ms_2026_08_general';
}

function getTitleForArticle(artNum) {
  for (const t of TITLE_DEFINITIONS) {
    if (artNum >= t.minArt && artNum <= t.maxArt) return t;
  }
  return TITLE_DEFINITIONS[TITLE_DEFINITIONS.length - 1];
}

function getSectionNameForArticle(artNum) {
  if (artNum >= 6 && artNum <= 7) return 'Sección 1 — Clasificación de los sistemas de IA como sistemas de alto riesgo';
  if (artNum >= 8 && artNum <= 15) return 'Sección 2 — Requisitos de los sistemas de IA de alto riesgo';
  if (artNum >= 16 && artNum <= 27) return 'Sección 3 — Obligaciones de los proveedores y responsables del despliegue de sistemas de IA de alto riesgo y de otras partes';
  if (artNum >= 28 && artNum <= 39) return 'Sección 4 — Autoridades notificantes y organismos notificados';
  if (artNum >= 40 && artNum <= 49) return 'Sección 5 — Normas, evaluación de la conformidad, certificados, registro';
  if (artNum >= 51 && artNum <= 52) return 'Sección 1 — Reglas de clasificación de modelos GPAI';
  if (artNum >= 53 && artNum <= 54) return 'Sección 2 — Obligaciones de los proveedores de modelos de IA de uso general';
  if (artNum === 55) return 'Sección 3 — Obligaciones de los proveedores de modelos de IA de uso general con riesgo sistémico';
  if (artNum === 56) return 'Sección 4 — Códigos de buenas prácticas';
  if (artNum >= 64 && artNum <= 69) return 'Sección 1 — Gobernanza a escala de la Unión';
  if (artNum === 70) return 'Sección 2 — Autoridades nacionales competentes';
  if (artNum === 72) return 'Sección 1 — Vigilancia poscomercialización';
  if (artNum === 73) return 'Sección 2 — Intercambio de información sobre incidentes graves';
  if (artNum >= 74 && artNum <= 84) return 'Sección 3 — Garantía del cumplimiento y vigilancia del mercado';
  if (artNum >= 85 && artNum <= 87) return 'Sección 4 — Vías de recurso y protección de denunciantes';
  if (artNum >= 88 && artNum <= 94) return 'Sección 5 — Supervisión e investigación respecto de proveedores de modelos GPAI';
  return undefined;
}

const SPECIFIC_ARTICLE_PROFILES = {
  1: {
    summary:
      'Establece el doble propósito constitucional del Reglamento: garantizar el mercado único europeo para sistemas de IA y asegurar un nivel elevado de protección de la salud, la seguridad y los derechos fundamentales (Carta de la UE), armonizando prohibiciones, alto riesgo, transparencia, GPAI y sandboxes.',
    takeaway:
      'Ningún Estado miembro puede imponer restricciones nacionales arbitrarias al comercio de IA fuera de lo autorizado por este Reglamento (armonización máxima del mercado interior).',
  },
  2: {
    summary:
      'Determina el ámbito de aplicación subjetivo, material y territorial. Incluye la cláusula de extraterritorialidad por destino del resultado (Art. 2.1.c) y las exclusiones tasadas (defensa/seguridad nacional, I+D científico previo a comercialización, uso puramente personal no profesional y código abierto no alto riesgo/no prohibido/no Art. 50).',
    takeaway:
      'Si el resultado de salida (output) de un sistema de IA se utiliza dentro de la UE, el Reglamento se aplica íntegramente aunque el proveedor o el servidor estén en EE. UU., Reino Unido o Asia.',
  },
  3: {
    summary:
      'Diccionario jurídico vinculante con las 68 definiciones oficiales del Reglamento: sistema de IA, proveedor, responsable del despliegue, finalidad prevista, modificación sustancial, incidente grave, datos biométricos, emoción, ultrafalsificación (deepfake), modelo GPAI, riesgo sistémico y operaciones de coma flotante.',
    takeaway:
      'Antes de clasificar cualquier proyecto, contrasta tu arquitectura con las definiciones de «sistema de IA» (Art. 3.1), «finalidad prevista» (Art. 3.12) y «modificación sustancial» (Art. 3.23).',
  },
  4: {
    summary:
      'Obliga a todos los proveedores y responsables del despliegue de sistemas de IA a adoptar medidas para garantizar un nivel suficiente de alfabetización en materia de IA de su personal y colaboradores externos, adaptada a sus conocimientos técnicos, contexto de uso y personas afectadas.',
    takeaway:
      'Exigible desde el 2 de febrero de 2025 para TODAS las empresas que usen o desarrollen IA (incluso si solo usan herramientas de riesgo mínimo como copilotos o chatbots).',
  },
  5: {
    summary:
      'Catálogo taxativo de prácticas de IA prohibidas por riesgo inaceptable: técnicas subliminales o engañosas dañinas (5.1.a), explotación de vulnerabilidades (5.1.b), social scoring (5.1.c), predicción policial individual por perfilado (5.1.d), scraping facial no selectivo (5.1.e), inferencia emocional en trabajo y educación (5.1.f), categorización biométrica sensible (5.1.g) e identificación biométrica remota en tiempo real en espacios públicos salvo excepciones estrictas (5.1.h).',
    takeaway:
      'Línea roja absoluta desde el 2 de febrero de 2025: conlleva las multas más altas de todo el Reglamento (hasta 35.000.000 € o el 7 % de la facturación mundial total).',
  },
  6: {
    summary:
      'Reglas de clasificación de alto riesgo por doble vía: (1) componentes de seguridad de productos regulados por el Anexo I sujetos a evaluación por terceros (Art. 6.1, aplicable en ago 2027), y (2) sistemas listados en los 8 ámbitos críticos del Anexo III (Art. 6.2, aplicable en ago 2026), con la excepción documentada del Art. 6.3 para tareas accesorias salvo que exista elaboración de perfiles.',
    takeaway:
      'Todo sistema del Anexo III que realice elaboración de perfiles (profiling) de personas físicas es SIEMPRE de alto riesgo sin poder acogerse a la excepción del Art. 6.3.',
  },
  9: {
    summary:
      'Exige establecer, implantar, documentar y mantener un sistema continuo e iterativo de gestión de riesgos durante todo el ciclo de vida del sistema de IA de alto riesgo, identificando riesgos conocidos y razonablemente previsibles para la salud, seguridad y derechos fundamentales, incluidos impactos en menores.',
    takeaway:
      'La gestión de riesgos no es un documento estático previo al lanzamiento: debe iterarse continuamente con los datos recogidos en la vigilancia poscomercialización.',
  },
  10: {
    summary:
      'Regula la gobernanza y calidad de los conjuntos de datos de entrenamiento, validación y prueba: diseño pertinente, representativo, libre de errores y completo, examen de posibles sesgos discriminatorios y habilitación excepcional para tratar datos sensibles (Art. 10.5) cuando sea estrictamente necesario para detectar y corregir sesgos.',
    takeaway:
      'Exige trazabilidad completa del linaje de datos (data lineage), supuestos de etiquetado y pruebas estadísticas de equidad (fairness) antes de pasar a producción.',
  },
  11: {
    summary:
      'Obliga a elaborar la documentación técnica del sistema de alto riesgo ANTES de su introducción en el mercado o puesta en servicio, con el contenido mínimo del Anexo IV, permitiendo a pymes y startups presentar un formulario simplificado aceptado por las autoridades.',
    takeaway:
      'Ningún sistema de alto riesgo puede comercializarse sin tener cerrado y versionado su expediente técnico conforme al Anexo IV.',
  },
  12: {
    summary:
      'Exige que los sistemas de IA de alto riesgo permitan técnicamente el registro automático de eventos (logs) durante toda su vida útil para garantizar la trazabilidad del funcionamiento, detectar situaciones de riesgo y auditar decisiones posteriores.',
    takeaway:
      'Diseña telemetría inmutable que registre fechas/horas de uso, bases de datos de referencia consultadas, datos de entrada que dieron lugar a coincidencias e identidad de los verificadores humanos.',
  },
  13: {
    summary:
      'Imponer diseñar los sistemas de alto riesgo con transparencia suficiente para que los desplegadores interpreten sus resultados y los utilicen adecuadamente, acompañándolos de instrucciones de uso digitales o físicas detalladas sobre capacidades, métricas de precisión, limitaciones y medidas de supervisión humana.',
    takeaway:
      'Las instrucciones de uso para el cliente empresarial son el puente legal entre el proveedor (Art. 13) y los deberes operativos del desplegador (Art. 26).',
  },
  14: {
    summary:
      'Exige diseñar sistemas de alto riesgo para que puedan ser vigilados de manera efectiva por personas físicas durante su utilización, previniendo el sesgo de automatización, permitiendo anular o revertir decisiones, incluyendo un botón de parada segura y exigiendo doble verificación humana en identificación biométrica remota (Art. 14.5).',
    takeaway:
      'El diseño de interfaz debe impedir la aceptación acrítica ("automation bias") y permitir al supervisor humano intervenir, corregir o detener el sistema en un clic.',
  },
  15: {
    summary:
      'Exige que los sistemas de IA de alto riesgo alcancen un nivel adecuado de precisión, solidez técnica (redundancia, planes fail-safe) y ciberseguridad resiliente frente a intentos de terceros de alterar su uso o rendimiento mediante envenenamiento de datos (data poisoning), envenenamiento de modelos o ejemplos adversarios.',
    takeaway:
      'Incorpora defensas específicas de seguridad ML (protección frente a prompt injection, data poisoning, model inversion y ejemplos adversarios) en tu arquitectura.',
  },
  16: {
    summary:
      'Sintetiza el decálogo de obligaciones de los proveedores de sistemas de alto riesgo: cumplimiento de la Sección 2, identificación en el sistema, sistema de gestión de calidad (Art. 17), conservación documental 10 años (Art. 18), logs automáticos (Art. 19), evaluación de conformidad (Art. 43), declaración UE (Art. 47), marcado CE (Art. 48), registro (Art. 49) y medidas correctoras (Art. 20).',
    takeaway:
      'Es la hoja de ruta maestra para cualquier fabricante de software o integrador cuyo producto califique como sistema de IA de alto riesgo.',
  },
  25: {
    summary:
      'Regula la reasignación de responsabilidades en la cadena de valor: convierte automáticamente en PROVEEDOR de alto riesgo a cualquier desplegador, distribuidor o tercero que ponga su marca en un sistema de alto riesgo, le haga una modificación sustancial o modifique la finalidad prevista de un sistema no alto riesgo (incluido un GPAI) para usarlo en un caso de alto riesgo.',
    takeaway:
      'Cuidado con el fine-tuning o la integración de LLMs de terceros para casos del Anexo III (RR.HH., crédito, salud, educación): el Art. 25.1(c) te convierte en Proveedor de Alto Riesgo.',
  },
  26: {
    summary:
      'Establece las obligaciones directas de los responsables del despliegue (empresas usuarias) de sistemas de alto riesgo: seguir instrucciones de uso, asignar supervisión humana competente, asegurar pertinencia de datos de entrada, vigilar el funcionamiento, conservar logs al menos 6 meses, informar previamente a los trabajadores y sus representantes (26.7), e informar a las personas sujetas a decisiones del Anexo III.',
    takeaway:
      'Comprar un sistema de IA llave en mano con marcado CE no libera a la empresa compradora: debe cumplir todos los controles operativos y laborales del Art. 26.',
  },
  27: {
    summary:
      'Obliga a realizar una Evaluación del Impacto en los Derechos Fundamentales (FRIA) antes del primer despliegue de sistemas de alto riesgo del Anexo III a los organismos públicos, empresas privadas que presten servicios públicos y a cualquier entidad que despliegue sistemas de solvencia crediticia o seguros de vida y salud (Anexo III.5.b y c), notificándola a la autoridad.',
    takeaway:
      'Bancos, entidades financieras de crédito, aseguradoras de vida/salud y contratistas de servicios públicos deben aprobar y notificar la FRIA antes de entrar en producción.',
  },
  43: {
    summary:
      'Define los procedimientos de evaluación de la conformidad: control interno del Anexo VI para los puntos 2 a 8 del Anexo III; opción entre control interno (si se aplican normas armonizadas) o evaluación por organismo notificado del Anexo VII para el punto 1 del Anexo III (biometría); e integración con la evaluación sectorial para productos del Anexo I.',
    takeaway:
      'En los ámbitos empresariales de RR.HH., crédito, educación o servicios esenciales (Anexo III puntos 2 a 8), la evaluación de conformidad se realiza mediante control interno (Anexo VI).',
  },
  50: {
    summary:
      'Obligaciones de transparencia para determinados sistemas de IA: aviso de interacción con IA conversacional (50.1), marcado legible por máquina y detección de contenido sintético de audio, imagen, vídeo o texto por el proveedor (50.2), información en reconocimiento emocional/biométrico permitido (50.3) y aviso visible de deepfakes y textos de interés público no revisados editorialmente por el desplegador (50.4).',
    takeaway:
      'Afecta a prácticamente todos los proyectos de IA Generativa: requiere avisos claros en primera interacción y marcado técnico (watermarking/C2PA) en los contenidos generados.',
  },
  51: {
    summary:
      'Clasifica los modelos de IA de uso general (GPAI) como modelos con riesgo sistémico cuando posean capacidades de gran impacto según el Anexo XIII, estableciendo la presunción legal cuando la cantidad acumulada de cálculo de entrenamiento supere 10^25 operaciones de coma flotante (FLOPs).',
    takeaway:
      'El umbral cuantitativo de 10^25 FLOPs separa el régimen GPAI estándar (Art. 53) del régimen reforzado de riesgo sistémico (Art. 55).',
  },
  53: {
    summary:
      'Obligaciones de todos los proveedores de modelos GPAI: documentación técnica para la Oficina de IA (Anexo XI), documentación para proveedores posteriores que integran el modelo (Anexo XII), política de cumplimiento de derechos de autor y reserva TDM opt-out (Directiva 2019/790 Art. 4.3), y publicación de un resumen detallado de los datos de entrenamiento. Prevé exención parcial (letras a y b) para modelos open-source sin riesgo sistémico.',
    takeaway:
      'Todo proveedor GPAI (incluso open-source) debe respetar los opt-outs de minería de textos y datos (TDM) y publicar el resumen de sus datos de entrenamiento.',
  },
  55: {
    summary:
      'Obligaciones adicionales para proveedores de modelos GPAI con riesgo sistémico: evaluación avanzada con pruebas con adversarios (red-teaming), evaluación y mitigación de riesgos sistémicos en la UE, notificación sin demora de incidentes graves a la Oficina de IA y protección reforzada de ciberseguridad del modelo y su infraestructura física.',
    takeaway:
      'Los modelos con riesgo sistémico no disfrutan de la exención open-source y deben ejecutar red-teaming continuo y reportar incidentes a la Oficina Europea de IA.',
  },
  57: {
    summary:
      'Obliga a cada Estado miembro a establecer al menos un espacio controlado de pruebas para la IA (sandbox regulatorio) operativo antes del 2 de agosto de 2026. Ofrece orientación supervisada, informe oficial de salida útil para la evaluación de conformidad y exención de multas administrativas (Art. 57.12) a los participantes de buena fe.',
    takeaway:
      'En España, el Sandbox regulado por el RD 817/2023 y supervisado por la AESIA permite ensayar sistemas de alto riesgo sin exposición a multas administrativas.',
  },
  73: {
    summary:
      'Obliga a los proveedores de sistemas de IA de alto riesgo a notificar cualquier incidente grave a las autoridades de vigilancia del mercado del Estado miembro donde se produjo: plazo máximo de 15 días con carácter general, 2 días en caso de infracción generalizada o incidente crítico de infraestructura, y 10 días en caso de fallecimiento.',
    takeaway:
      'Integra los plazos de 2, 10 y 15 días del Art. 73 en tu procedimiento corporativo de respuesta a incidentes junto a las notificaciones de brechas del RGPD y NIS2.',
  },
  86: {
    summary:
      'Reconoce a toda persona afectada por una decisión adoptada por un responsable del despliegue basándose en los resultados de un sistema de IA de alto riesgo del Anexo III (que produzca efectos jurídicos o le afecte de modo similarmente significativo) el derecho a obtener explicaciones claras y significativas sobre el papel de la IA y los elementos principales de la decisión.',
    takeaway:
      'Debes disponer de un canal y de herramientas de explicabilidad (XAI) para emitir explicaciones comprensibles a los clientes o candidatos afectados por decisiones apoyadas en IA.',
  },
  99: {
    summary:
      'Establece el marco de sanciones y multas administrativas: hasta 35 M€ o 7 % del volumen de negocios mundial por infringir el Art. 5 (99.3); hasta 15 M€ o 3 % por incumplir obligaciones de operadores, organismos notificados o transparencia Art. 50 (99.4); hasta 7,5 M€ o 1 % por facilitar información inexacta o engañosa (99.5); aplicando siempre la cuantía INFERIOR cuando el infractor sea una pyme o startup (99.6).',
    takeaway:
      'Conoce tu exposición exacta: para grandes empresas rige la cifra mayor (euros vs % global); para pymes y startups rige el tope inferior (Art. 99.6).',
  },
  101: {
    summary:
      'Faculta a la Comisión Europea para imponer a los proveedores de modelos GPAI multas de hasta el 3 % de su volumen de negocios mundial total o 15.000.000 EUR cuando infrinjan de forma intencionada o negligente los artículos 53 o 55, no suministren información requerida, no adopten medidas del Art. 93 o no den acceso al modelo para evaluación del Art. 92.',
    takeaway:
      'Aplicable desde el 2 de agosto de 2026: la potestad sancionadora sobre proveedores de modelos GPAI reside directamente en la Comisión Europea.',
  },
  111: {
    summary:
      'Régimen transitorio para sistemas ya comercializados o puestos en servicio: (1) componentes de sistemas IT de gran escala del Anexo X tienen hasta el 31 de diciembre de 2030; (2) sistemas de alto riesgo puestos en servicio antes del 2 de agosto de 2026 solo quedan sujetos si sufren cambios significativos en su diseño (salvo en autoridades públicas, que deben adecuarse antes del 2 de agosto de 2030); y (3) modelos GPAI comercializados antes del 2 de agosto de 2025 tienen hasta el 2 de agosto de 2027.',
    takeaway:
      'Congelar el diseño de un sistema legacy puesto en producción antes del 2 de agosto de 2026 mantiene su exención transitoria (salvo prohibiciones del Art. 5 o sector público en 2030).',
  },
  113: {
    summary:
      'Calendario oficial de entrada en vigor (1 de agosto de 2024, a los 20 días de su publicación en el DOUE) y aplicación escalonada: 2 de febrero de 2025 (Capítulos I y II: alfabetización Art. 4 y prohibiciones Art. 5); 2 de agosto de 2025 (Cap. III Sec. 4, Cap. V GPAI, Cap. VII Gobernanza, Art. 78 y Cap. XII Sanciones salvo Art. 101); 2 de agosto de 2026 (aplicación general y Alto Riesgo Anexo III); y 2 de agosto de 2027 (Alto Riesgo Anexo I Art. 6.1).',
    takeaway:
      'Es la brújula temporal de cualquier auditoría de cumplimiento del Reglamento (UE) 2024/1689.',
  },
};

function buildArticleIntelligence(artNum, heading, paragraphs, titleObj) {
  const specific = SPECIFIC_ARTICLE_PROFILES[artNum];
  const firstParaText = paragraphs[0]?.officialText || heading;

  let defaultSummary = `El Artículo ${artNum} (${heading}), encuadrado en el ${titleObj.name}, regula de forma vinculante las condiciones jurídicas, técnicas y procedimentales aplicables a "${heading.toLowerCase()}". `;
  let defaultTakeaway = '';

  if (artNum >= 8 && artNum <= 15) {
    defaultSummary +=
      'Forma parte de los requisitos técnicos esenciales (Capítulo III, Sección 2) que todo sistema de IA de alto riesgo debe satisfacer desde su fase de diseño y desarrollo antes de poder superar la evaluación de la conformidad y obtener el marcado CE.';
    defaultTakeaway =
      'Debe quedar acreditado documentalmente en el expediente técnico del Anexo IV antes de introducir el sistema en el mercado o ponerlo en servicio.';
  } else if (artNum >= 16 && artNum <= 27) {
    defaultSummary +=
      'Delimita las obligaciones operativas de los agentes económicos en la cadena de valor de los sistemas de IA de alto riesgo, fijando deberes de verificación, trazabilidad, conservación documental y cooperación con las autoridades de vigilancia del mercado.';
    defaultTakeaway =
      'Incumplir este precepto expone al operador a multas administrativas de hasta 15.000.000 € o el 3 % de su facturación mundial anual (Art. 99.4).';
  } else if (artNum >= 28 && artNum <= 39) {
    defaultSummary +=
      'Configura el régimen de designación, independencia, competencia técnica, ciberseguridad y supervisión de las autoridades notificantes y de los organismos notificados encargados de auditar sistemas de alto riesgo bajo el Anexo VII.';
    defaultTakeaway =
      'Asegúrate de que, si tu sistema requiere evaluación por terceros (Anexo I o biometría sin normas armonizadas), el organismo notificado figure inscrito en el sistema NANDO de la Comisión.';
  } else if (artNum >= 40 && artNum <= 49) {
    defaultSummary +=
      'Establece el engranaje de certificación europea: presunción de conformidad mediante normas armonizadas CEN/CENELEC, especificaciones comunes, evaluación de conformidad, declaración UE de conformidad (Anexo V), marcado CE y registro previo en la base de datos de la UE.';
    defaultTakeaway =
      'Adopta las normas armonizadas publicadas en el DOUE (Art. 40) para beneficiarte de la presunción directa de conformidad técnica.';
  } else if (artNum >= 51 && artNum <= 56) {
    defaultSummary +=
      'Regula el régimen de los modelos de IA de uso general (GPAI), equilibrando la transparencia en la cadena de valor (Anexos XI y XII), el respeto de la propiedad intelectual y el control de riesgos sistémicos en modelos de frontera (>10^25 FLOPs).';
    defaultTakeaway =
      'Aplicable desde el 2 de agosto de 2025 bajo supervisión directa de la Oficina Europea de IA de la Comisión.';
  } else if (artNum >= 57 && artNum <= 63) {
    defaultSummary +=
      'Articula las medidas de apoyo a la innovación, incluyendo el funcionamiento de los espacios controlados de pruebas (sandboxes regulatorios), los ensayos de sistemas de alto riesgo en condiciones reales con consentimiento informado y las facilidades para pymes y startups.';
    defaultTakeaway =
      'Las pymes y startups gozan de acceso prioritario y gratuito a los sandboxes regulatorios (como el gestionado por la AESIA en España) y de tarifas reducidas en evaluaciones de conformidad.';
  } else if (artNum >= 64 && artNum <= 70) {
    defaultSummary +=
      'Define la estructura institucional de gobernanza a nivel de la Unión (Oficina de IA, Comité Europeo de IA, Foro Consultivo y Grupo Científico) y de los Estados miembros (autoridades notificantes y autoridades de vigilancia del mercado como la AESIA).';
    defaultTakeaway =
      'Identifica a tu autoridad nacional competente (AESIA en España, RD 729/2023) como punto de contacto para notificaciones e inspecciones.';
  } else if (artNum >= 72 && artNum <= 94) {
    defaultSummary +=
      'Regula la vigilancia poscomercialización, el reporte de incidentes graves, las potestades de inspección de las autoridades de vigilancia del mercado, las medidas ante sistemas que presenten riesgos, las vías de recurso de los ciudadanos y la supervisión de modelos GPAI.';
    defaultTakeaway =
      'Mantén activos tus protocolos de vigilancia poscomercialización y de respuesta a requerimientos e inspecciones de la autoridad supervisora.';
  } else if (artNum >= 95 && artNum <= 98) {
    defaultSummary +=
      'Aborda los instrumentos de derecho flexible (códigos de conducta voluntarios y directrices de la Comisión) y el procedimiento de adopción de actos delegados para mantener actualizado el Reglamento frente al avance tecnológico.';
    defaultTakeaway =
      'Consulta periódicamente las directrices oficiales de la Comisión (Art. 96) y los actos delegados de actualización de los Anexos (Art. 97).';
  } else if (artNum >= 102 && artNum <= 113) {
    defaultSummary +=
      'Integra el Reglamento de IA con la legislación sectorial de armonización de la Unión (aviación, ferrocarriles, automoción, marina, productos), fija las cláusulas transitorias para sistemas preexistentes y establece las fechas de aplicación.';
    defaultTakeaway =
      'Verifica si tu sistema puede acogerse a los regímenes transitorios del artículo 111 por haberse puesto en servicio antes de agosto de 2025/2026.';
  }

  return {
    summary: specific?.summary || defaultSummary,
    enterpriseTakeaway:
      specific?.takeaway ||
      defaultTakeaway ||
      `Cumplimiento exigible en relación con "${heading}": documenta los controles asociados y verifica las referencias cruzadas del artículo.`,
  };
}

function buildParagraphEnrichment(artNum, artHeading, paraIndex, numberLabel, officialText, riskLevel) {
  const norm = officialText.toLowerCase();

  // 1. "Vuelta de tuerca": Plain explanation combining article context + specific clause mechanics
  let clauseMechanics = '';
  if (norm.includes('quedan prohibidas') || norm.includes('prohibición')) {
    clauseMechanics =
      'Establece una prohibición jurídica absoluta de orden público europeo (riesgo inaceptable), que no admite dispensa por consentimiento del afectado salvo las excepciones taxativas expresamente previstas en la propia norma.';
  } else if (norm.includes('no obstante') || norm.includes('no se aplicará') || norm.includes('quedan excluidos') || norm.includes('excepción')) {
    clauseMechanics =
      'Introduce una excepción, exención o regla especial ("vuelta de tuerca" regulatoria) que delimita cuándo no resulta aplicable la regla general o bajo qué condiciones acumulativas se atenúa la obligación.';
  } else if (norm.includes('plazo') || norm.includes('días') || norm.includes('meses') || norm.includes('años') || norm.includes('a partir del')) {
    clauseMechanics =
      'Fija un plazo temporal perentorio o periodo de conservación/vigencia cuyo cómputo resulta crítico para evitar incumplimientos formales o materiales ante la autoridad supervisora.';
  } else if (norm.includes('documentación') || norm.includes('registro') || norm.includes('conservarán') || norm.includes('mantendrán')) {
    clauseMechanics =
      'Impone un deber de trazabilidad documental o registro activo ("accountability"), exigiendo que la evidencia esté generada y disponible antes o durante la operación del sistema para su auditoría por las autoridades.';
  } else if (norm.includes('informarán') || norm.includes('transparencia') || norm.includes('instrucciones') || norm.includes('harán público')) {
    clauseMechanics =
      'Configura un deber de transparencia e información simétrica hacia los usuarios, desplegadores o personas físicas afectadas para prevenir asimetrías informativas o engaños.';
  } else if (norm.includes('derechos fundamentales') || norm.includes('discriminación') || norm.includes('sesgos') || norm.includes('vulnerabilidades')) {
    clauseMechanics =
      'Actúa como salvaguardia directa de los derechos fundamentales de la Carta de la UE, obligando a evaluar y mitigar impactos sobre la dignidad humana, la igualdad y la no discriminación.';
  } else if (norm.includes('comisión') || norm.includes('acto delegado') || norm.includes('oficina de ia') || norm.includes('autoridad')) {
    clauseMechanics =
      'Atribuye potestades de supervisión, ejecución normativa o coordinación administrativa a la Comisión Europea, la Oficina de IA o las autoridades nacionales competentes (como la AESIA).';
  } else {
    clauseMechanics =
      'Concreta el alcance material y el estándar de diligencia exigible dentro del artículo, precisando las condiciones técnicas u organizativas que deben verificar los operadores sujetos.';
  }

  const plainExplanation = `En el marco del Artículo ${artNum} (${artHeading}), el apartado «${numberLabel}» dispone que: "${
    officialText.length > 260 ? officialText.slice(0, 257) + '...' : officialText
  }". Vuelta de tuerca legal: ${clauseMechanics}`;

  // 2. Role-specific impact for all 5 roles
  let byRole;
  let actionItems;
  let penaltyInfo = PENALTY_TIERS.obligations;

  if (artNum === 5) {
    penaltyInfo = PENALTY_TIERS.prohibited;
    byRole = {
      provider:
        'Prohibición radical de diseñar, entrenar o introducir en el mercado de la UE sistemas que incurran en esta conducta del Art. 5. Debe incluir bloqueos por diseño (guardrails) que impidan este uso.',
      deployer:
        'Prohibición absoluta de poner en servicio o utilizar interna o externamente sistemas que ejecuten esta práctica (ej. vigilancia emocional de empleados o social scoring).',
      distributor:
        'Debe retirar de inmediato de su catálogo o marketplace cualquier software o dispositivo que habilite esta práctica prohibida.',
      importer:
        'Prohibición de importar en la Unión sistemas procedentes de terceros países que incorporen esta funcionalidad del Art. 5.',
      gpai_provider:
        'Debe aplicar filtros de seguridad y políticas de uso aceptable para evitar que su modelo GPAI sea utilizado directamente para ejecutar prácticas prohibidas del Art. 5.',
    };
    actionItems = [
      `Auditar el inventario de sistemas frente al supuesto específico del Art. 5 (${numberLabel}) para confirmar cero exposición.`,
      'Implementar controles técnicos preventivos (guardrails y bloqueo de casos de uso prohibidos) en la arquitectura del sistema.',
      'Documentar en el Comité de Cumplimiento el dictamen de no incursión en riesgo inaceptable (exigible desde el 02/02/2025).',
      'Formar a los equipos de producto, RR.HH. y marketing sobre esta línea roja sancionada con hasta 35 M€ o 7 % de facturación.',
    ];
  } else if (artNum >= 6 && artNum <= 25) {
    penaltyInfo = PENALTY_TIERS.obligations;
    byRole = {
      provider:
        `Responsable directo de implementar y documentar el cumplimiento de este precepto (Art. ${artNum}, apdo. ${numberLabel}) dentro del expediente técnico del Anexo IV y del sistema de gestión de calidad (Art. 17).`,
      deployer:
        `Debe verificar que el proveedor cumple este requisito y operar el sistema respetando las instrucciones de uso asociadas al Art. ${artNum}; si realiza una modificación sustancial, asume el rol de proveedor (Art. 25).`,
      distributor:
        'Debe verificar antes de distribuir el sistema que lleva el marcado CE, declaración UE de conformidad e instrucciones de uso completas.',
      importer:
        'Debe comprobar que el proveedor extracomunitario ha superado la evaluación de conformidad y dispone de la documentación técnica exigida.',
      gpai_provider:
        'Si su modelo GPAI sirve de base al sistema de alto riesgo, debe facilitar la documentación del Anexo XII y cooperar conforme al Art. 25.2 y Art. 53.1(b).',
    };
    actionItems = [
      `Integrar el requisito del Art. ${artNum} (${numberLabel}) en la matriz de diseño técnico y en la documentación del Anexo IV.`,
      'Definir métricas verificables y pruebas de validación que acrediten el cumplimiento ante una inspección de la AESIA o de un organismo notificado.',
      'Actualizar los procedimientos del sistema de gestión de la calidad (Art. 17) y las instrucciones de uso entregadas al desplegador (Art. 13).',
      'Conservar las evidencias técnicas de cumplimiento durante el plazo legal de 10 años (Art. 18).',
    ];
  } else if (artNum === 26 || artNum === 27 || artNum === 86) {
    penaltyInfo = PENALTY_TIERS.obligations;
    byRole = {
      provider:
        `Debe diseñar el sistema y sus instrucciones de uso (Art. 13) de forma que permitan al responsable del despliegue cumplir eficazmente la obligación del Art. ${artNum} (${numberLabel}).`,
      deployer:
        `Sujeto obligado principal de este precepto (Art. ${artNum}, apdo. ${numberLabel}): debe implantar las medidas organizativas, de supervisión humana, retención de logs (>= 6 meses), aviso laboral o evaluación FRIA exigidas.`,
      distributor:
        'Debe trasladar íntegramente al cliente desplegador las instrucciones de uso y advertencias de cumplimiento facilitadas por el proveedor.',
      importer:
        'Debe asegurar que las instrucciones de uso y manuales operativos para el desplegador estén redactados en lengua oficial comprensible (español en España).',
      gpai_provider:
        'Debe proporcionar información clara sobre capacidades y limitaciones del modelo base para facilitar la evaluación de impacto aguas abajo.',
    };
    actionItems = [
      `Designar formalmente a las personas físicas competentes y con autoridad encargadas de ejecutar el control del Art. ${artNum} (${numberLabel}).`,
      'Configurar la retención automática de registros (logs) por un mínimo de 6 meses y los flujos de notificación de incidentes al proveedor y a la AESIA.',
      'Si aplica a entorno laboral o crédito/seguros/sector público, documentar la información previa a los representantes de los trabajadores (Art. 26.7) y la FRIA (Art. 27).',
      'Habilitar el procedimiento de respuesta para ofrecer explicaciones claras y significativas a las personas afectadas según el Art. 86.',
    ];
  } else if (artNum === 50) {
    penaltyInfo = PENALTY_TIERS.obligations;
    byRole = {
      provider:
        'Debe diseñar el sistema conversacional con aviso de interacción con IA (50.1) e incorporar marcado legible por máquina (metadatos criptográficos / marcas de agua) en todo contenido sintético de audio, imagen, vídeo o texto (50.2).',
      deployer:
        'Debe informar a las personas expuestas a reconocimiento emocional/biométrico (50.3) y revelar de forma clara y visible el carácter artificial de deepfakes y de textos sobre asuntos de interés público no revisados editorialmente (50.4).',
      distributor:
        'Debe asegurar que no se supriman ni desactiven los avisos de transparencia o el marcado digital incorporados por el proveedor.',
      importer:
        'Debe verificar que los sistemas generativos o conversacionales importados cumplen los estándares de marcado legible por máquina e información al usuario.',
      gpai_provider:
        'Cuando el modelo GPAI genere directamente contenido sintético de audio, imagen, vídeo o texto, debe implementar el marcado legible por máquina del Art. 50.2.',
    };
    actionItems = [
      `Implementar en la interfaz de usuario o flujo de salida el aviso o marcado técnico exigido por el Art. 50 (${numberLabel}) a más tardar en la primera interacción.`,
      'Adoptar estándares interoperables de procedencia de contenido (como C2PA / marcas de agua digitales robustas) en todos los outputs generativos.',
      'Verificar que el aviso cumple los requisitos de accesibilidad aplicables (Art. 50.5).',
      'En textos de interés público generados por IA, establecer un flujo documentado de revisión humana y responsabilidad editorial si se desea aplicar la excepción del Art. 50.4.',
    ];
  } else if ((artNum >= 51 && artNum <= 56) || (artNum >= 88 && artNum <= 94) || artNum === 101) {
    penaltyInfo = PENALTY_TIERS.gpai;
    byRole = {
      provider:
        'Si actúa como proveedor posterior (downstream provider) que integra un modelo GPAI, debe recabar y analizar la documentación del Anexo XII suministrada por el proveedor GPAI.',
      deployer:
        'Al contratar soluciones basadas en modelos GPAI, debe exigir garantías contractuales de que el modelo base cumple el Capítulo V (copyright, resumen de entrenamiento y mitigación de riesgos).',
      distributor:
        'Debe verificar que los modelos o servicios GPAI comercializados en la UE cuentan con representante autorizado (Art. 54) si el proveedor es extracomunitario.',
      importer:
        'Debe colaborar en la trazabilidad documental de los modelos GPAI introducidos en el mercado europeo.',
      gpai_provider:
        `Sujeto obligado directo del Art. ${artNum} (${numberLabel}): debe cumplir las exigencias de documentación (Anexos XI y XII), política de copyright (TDM opt-out), resumen de entrenamiento y, si supera 10^25 FLOPs, red-teaming, reporte de incidentes y ciberseguridad (Art. 55) bajo supervisión de la Oficina de IA.`,
    };
    actionItems = [
      `Cumplir y documentar el requisito específico del Art. ${artNum} (${numberLabel}) ante la Oficina Europea de IA.`,
      'Mantener actualizados los Anexos XI y XII, la política de respeto de reservas TDM (Art. 4.3 Directiva 2019/790) y la plantilla oficial del resumen de datos de entrenamiento.',
      'Si el cómputo acumulado se aproxima o supera 10^25 FLOPs, notificar a la Comisión en 2 semanas (Art. 52) y activar protocolos de pruebas con adversarios (red-teaming).',
      'Evaluar la adhesión al Código de Buenas Prácticas GPAI (Art. 56) para contar con presunción de conformidad.',
    ];
  } else {
    penaltyInfo = norm.includes('inexacta') || norm.includes('engañosa') ? PENALTY_TIERS.misinformation : PENALTY_TIERS.obligations;
    byRole = {
      provider:
        `Debe alinear su gobernanza interna, registros y cooperación con autoridades conforme a lo dispuesto en el Art. ${artNum} (${numberLabel}).`,
      deployer:
        `Debe observar las reglas aplicables del Art. ${artNum} (${numberLabel}) en sus despliegues operativos, formación de personal (Art. 4) y atención a autoridades supervisoras.`,
      distributor:
        `Debe cooperar con las autoridades de vigilancia del mercado y asegurar la trazabilidad exigida en el marco del Art. ${artNum}.`,
      importer:
        `Debe verificar la conformidad formal y colaborar con las autoridades nacionales según lo previsto en el Art. ${artNum}.`,
      gpai_provider:
        `Debe atender las disposiciones institucionales, transitorias o de supervisión aplicables del Art. ${artNum} (${numberLabel}).`,
    };
    actionItems = [
      `Incorporar la regla del Art. ${artNum} (${numberLabel}) en el manual corporativo de cumplimiento del Reglamento (UE) 2024/1689.`,
      'Asegurar que el equipo legal y técnico conoce los plazos, definiciones o facultades de inspección regulados en este apartado.',
      'Mantener trazabilidad documental ante eventuales requerimientos de la AESIA o de la Oficina Europea de IA.',
    ];
  }

  return {
    plainExplanation,
    enterpriseImpact: {
      summary: `Implicación directa (Art. ${artNum} · ${numberLabel}): regula las condiciones de cumplimiento en materia de «${artHeading}», exigiendo a la organización alinear sus controles técnicos, documentales y contractuales con este precepto.`,
      byRole,
      actionItems,
      penaltyInfo,
    },
  };
}

// ============================================================================
// 4. CROSS-REFERENCE EXTRACTION & SEMANTIC LINKING
// ============================================================================
const ROMAN_MAP = {
  i: 'I', ii: 'II', iii: 'III', iv: 'IV', v: 'V', vi: 'VI', vii: 'VII',
  viii: 'VIII', ix: 'IX', x: 'X', xi: 'XI', xii: 'XII', xiii: 'XIII',
};

function extractExplicitAnnexRefs(text, artNum = 0) {
  const found = new Set();
  const re = /anexo\s+(XIII|XII|XI|IX|VIII|VII|VI|IV|III|II|X|V|I)\b/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    const up = m[1].toUpperCase();
    if (ROMAN_MAP[up.toLowerCase()]) {
      found.add(`anx_${up}`);
    }
  }
  if (found.size === 0) {
    if (artNum === 5) found.add('anx_II');
    else if (artNum === 6 || artNum === 7 || artNum === 26 || artNum === 27) {
      found.add('anx_I');
      found.add('anx_III');
    } else if (artNum >= 8 && artNum <= 15) found.add('anx_IV');
    else if (artNum === 43) {
      found.add('anx_VI');
      found.add('anx_VII');
    } else if (artNum === 47) found.add('anx_V');
    else if (artNum === 49 || artNum === 71) found.add('anx_VIII');
    else if (artNum >= 51 && artNum <= 55) {
      found.add('anx_XI');
      found.add('anx_XII');
      found.add('anx_XIII');
    } else if (artNum === 60) found.add('anx_IX');
    else if (artNum === 111) found.add('anx_X');
  }
  return [...found];
}

function extractExplicitArticleRefs(text) {
  const found = new Set();
  const re = /artículos?\s+(\d{1,3})\b/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    const n = parseInt(m[1], 10);
    if (n >= 1 && n <= 113) found.add(`art_${n}`);
  }
  return [...found];
}

// ============================================================================
// 5. MAIN INGESTION, ENRICHMENT & BINARY ENCODING PIPELINE
// ============================================================================
async function main() {
  console.log('=== Phase 2: Official EUR-Lex & BOE Ingestion + Binary Vectorization ===');

  // 1. Fetch official EUR-Lex Spanish HTML (with automatic fallback to official EU Publications Cellar if CloudFront returns 202 WAF challenge)
  let eurHtml = '';
  try {
    const eurRes = await fetch(EUR_LEX_HTML_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        Accept: 'text/html,application/xhtml+xml',
        'Accept-Language': 'es-ES,es;q=0.9',
      },
    });
    if (eurRes.status === 200) {
      const txt = await eurRes.text();
      if (txt.includes('id="art_1"')) eurHtml = txt;
    }
  } catch {
    // Fallback to official Publications Office CELEX HTML
  }

  if (!eurHtml) {
    const cellarRes = await fetch(CELLAR_CELEX_URL, {
      headers: {
        Accept: 'application/xhtml+xml, text/html;q=0.9',
        'Accept-Language': 'spa, es',
      },
      redirect: 'follow',
    });
    if (!cellarRes.ok) {
      throw new Error(`Failed to fetch official EU AI Act HTML from Cellar: ${cellarRes.status}`);
    }
    eurHtml = await cellarRes.text();
  }

  // 2. Fetch official BOE XML (DOUE-L-2024-81079)
  const boeRes = await fetch(BOE_XML_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      Accept: 'application/xml,text/xml',
    },
  });
  if (!boeRes.ok) {
    throw new Error(`Failed to fetch official BOE XML: ${boeRes.status}`);
  }
  const boeXml = await boeRes.text();

  console.log(`Fetched official Spanish HTML (${(eurHtml.length / 1024).toFixed(1)} KB) and BOE XML (${(boeXml.length / 1024).toFixed(1)} KB) in memory.`);

  // 3. Parse all 180 Recitals (rct_1 .. rct_180) and compute their embeddings first so we can link them semantically to every Article and Paragraph
  const recitals = [];
  const recitalVectors = [];

  for (let r = 1; r <= 180; r++) {
    const rctId = `rct_${r}`;
    const block = extractDivById(eurHtml, rctId);
    const pMatches = [...block.matchAll(/<p\b[^>]*class="oj-normal"[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => cleanHtmlText(m[1]))
      .filter((t) => t.length > 0 && !/^\(\d+\)$/.test(t));

    const officialText = pMatches.join(' ');
    const norm = officialText.toLowerCase();
    let riskLevel = 'governance';
    if (norm.includes('prohibi') || norm.includes('subliminal') || norm.includes('puntuación ciudadana') || norm.includes('inaceptable')) {
      riskLevel = 'unacceptable';
    } else if (norm.includes('alto riesgo') || norm.includes('evaluación de la conformidad') || norm.includes('anexo iii')) {
      riskLevel = 'high';
    } else if (norm.includes('uso general') || norm.includes('riesgo sistémico') || norm.includes('coma flotante')) {
      riskLevel = 'gpai';
    } else if (norm.includes('transparencia') || norm.includes('ultrafalsificación') || norm.includes('generado artificialmente')) {
      riskLevel = 'transparency';
    } else if (norm.includes('códigos de conducta') || norm.includes('aplicación voluntaria')) {
      riskLevel = 'minimal';
    }

    const firstSentence = officialText.split(/(?<=\.)\s+/)[0] || officialText.slice(0, 220);
    const plainSummary = `Considerando (${r}): fundamenta e interpreta el espíritu del Reglamento explicando que ${
      firstSentence.charAt(0).toLowerCase() + firstSentence.slice(1)
    }`;

    const vec = computeTextEmbedding(`Considerando ${r} ${officialText}`);
    recitalVectors.push(vec);

    recitals.push({
      id: rctId,
      number: r,
      officialText,
      plainSummary,
      linkedArticles: extractExplicitArticleRefs(officialText),
      riskLevel,
      vectorIndex: -1, // Assigned when building vectorIndexMap
    });
  }

  // Helper to find top related recitals for any text/vector
  function findTopRecitalsForVector(vec, topK = 3) {
    const scored = [];
    for (let i = 0; i < recitalVectors.length; i++) {
      const sim = dotProduct(vec, recitalVectors[i]);
      scored.push({ id: `rct_${i + 1}`, sim });
    }
    scored.sort((a, b) => b.sim - a.sim);
    return scored.slice(0, topK).map((s) => s.id);
  }

  // 4. Parse all 113 Articles (art_1 .. art_113) and break each into individual paragraphs
  const articles = [];
  const articleVectors = new Map();
  const paragraphVectors = new Map();

  for (let a = 1; a <= 113; a++) {
    const artId = `art_${a}`;
    const block = extractDivById(eurHtml, artId);
    const stiMatch = block.match(/<p\b[^>]*class="oj-sti-art"[^>]*>([\s\S]*?)<\/p>/i);
    const heading = stiMatch ? cleanHtmlText(stiMatch[1]) : `Artículo ${a}`;
    const titleObj = getTitleForArticle(a);
    const sectionName = getSectionNameForArticle(a);
    const rawParas = extractParagraphsFromHtmlBlock(block);
    if (rawParas.length === 0) {
      rawParas.push({
        numberLabel: '1.',
        officialText: cleanHtmlText(block) || heading,
      });
    }

    const fullArticleText = `${heading} ${rawParas.map((p) => p.officialText).join(' ')}`;
    const artRisk = getArticleRiskLevel(a, fullArticleText);
    const artVec = computeTextEmbedding(`Artículo ${a} ${heading} ${fullArticleText}`);
    articleVectors.set(artId, artVec);

    const artTopRecitals = findTopRecitalsForVector(artVec, 4);
    const artAnnexes = extractExplicitAnnexRefs(fullArticleText, a);
    const { summary, enterpriseTakeaway } = buildArticleIntelligence(a, heading, rawParas, titleObj);

    // Link those top recitals back to this article
    for (const rId of artTopRecitals) {
      const rNum = parseInt(rId.replace('rct_', ''), 10);
      const rObj = recitals[rNum - 1];
      if (rObj && !rObj.linkedArticles.includes(artId)) {
        rObj.linkedArticles.push(artId);
      }
    }

    const paragraphs = rawParas.map((rp, idx) => {
      const pId = `${artId}.p${idx + 1}`;
      const pRisk = getArticleRiskLevel(a, rp.officialText);
      const pVec = computeTextEmbedding(`Artículo ${a} apartado ${rp.numberLabel} ${heading} ${rp.officialText}`);
      paragraphVectors.set(pId, pVec);

      const pRecitals = findTopRecitalsForVector(pVec, 2);
      const pAnnexes = extractExplicitAnnexRefs(rp.officialText, a);
      const { plainExplanation, enterpriseImpact } = buildParagraphEnrichment(
        a,
        heading,
        idx,
        rp.numberLabel,
        rp.officialText,
        pRisk
      );

      const primaryCitation = makeCitation({
        id: pId,
        targetType: 'paragraph',
        articleId: artId,
        paragraphId: pId,
        displayLabel: `Art. ${a} (${rp.numberLabel}) · Reglamento (UE) 2024/1689`,
        exactQuote: rp.officialText.length > 320 ? rp.officialText.slice(0, 317) + '...' : rp.officialText,
      });

      return {
        id: pId,
        articleId: artId,
        numberLabel: rp.numberLabel,
        officialText: rp.officialText,
        plainExplanation,
        enterpriseImpact,
        riskLevel: pRisk,
        relatedRecitals: pRecitals,
        relatedAnnexes: pAnnexes,
        citations: [primaryCitation],
        vectorIndex: -1,
      };
    });

    articles.push({
      id: artId,
      number: a,
      titleLabel: `Artículo ${a}`,
      heading,
      titleId: titleObj.id,
      titleName: titleObj.name,
      chapterId: `cpt_${titleObj.roman}`,
      chapterName: titleObj.name,
      ...(sectionName ? { sectionName } : {}),
      riskLevel: artRisk,
      summary,
      enterpriseTakeaway,
      paragraphs,
      relatedRecitals: artTopRecitals,
      relatedAnnexes: artAnnexes,
      applicationDeadlineId: getArticleDeadlineId(a),
      vectorIndex: -1,
    });
  }

  // Ensure every recital has at least 2 linked articles via semantic similarity if explicit refs were empty
  for (let i = 0; i < recitals.length; i++) {
    const rct = recitals[i];
    if (rct.linkedArticles.length === 0) {
      const rVec = recitalVectors[i];
      let bestArt = 'art_1';
      let bestSim = -1;
      for (const art of articles) {
        const sim = dotProduct(rVec, articleVectors.get(art.id));
        if (sim > bestSim) {
          bestSim = sim;
          bestArt = art.id;
        }
      }
      rct.linkedArticles.push(bestArt);
    }
  }

  // 5. Parse all 13 Annexes (anx_I .. anx_XIII) and their paragraphs
  const ANNEX_METADATA = {
    I: {
      riskLevel: 'high',
      linkedArticles: ['art_2', 'art_6', 'art_11', 'art_43', 'art_113'],
      summary:
        'Enumera los 20 actos legislativos de armonización de la Unión (Sección A: maquinaria, juguetes, ascensores, equipos radioeléctricos, productos sanitarios MDR y diagnóstico in vitro IVDR; Sección B: aviación civil, automoción, ferrocarriles y equipos marinos) cuyos productos con componentes de seguridad de IA se clasifican como de alto riesgo según el artículo 6.1.',
      enterpriseRelevance:
        'Determinante para fabricantes industriales, de dispositivos médicos, automoción y transporte: las obligaciones de alto riesgo para estos productos regulados aplican a partir del 2 de agosto de 2027 (Art. 113.c).',
    },
    II: {
      riskLevel: 'unacceptable',
      linkedArticles: ['art_5'],
      summary:
        'Lista taxativa de los 16 delitos graves (terrorismo, trata de seres humanos, explotación sexual de menores, tráfico ilícito de drogas o armas, asesinato, secuestro, sabotaje, etc.) castigados con pena máxima de al menos 4 años de prisión para los que puede autorizarse excepcionalmente la identificación biométrica remota en tiempo real en espacios públicos (Art. 5.1.h.iii).',
      enterpriseRelevance:
        'Delimita estrictamente el alcance policial del reconocimiento facial en tiempo real; ninguna empresa privada puede invocar este anexo para vigilancia comercial.',
    },
    III: {
      riskLevel: 'high',
      linkedArticles: ['art_6', 'art_7', 'art_16', 'art_26', 'art_27', 'art_43', 'art_49'],
      summary:
        'Catálogo nuclear de los 8 ámbitos de sistemas de IA de alto riesgo del artículo 6.2: (1) Biometría permitida, (2) Infraestructuras críticas, (3) Educación y formación profesional, (4) Empleo, gestión de los trabajadores y acceso al trabajo por cuenta propia, (5) Acceso a servicios privados esenciales y servicios y prestaciones públicos esenciales (scoring crediticio, seguros de vida y salud, triaje de emergencias), (6) Garantía del cumplimiento del Derecho, (7) Migración, asilo y control fronterizo, y (8) Administración de justicia y procesos democráticos.',
      enterpriseRelevance:
        'Es la lista de comprobación obligatoria para cualquier empresa: si tu caso de uso figura en los puntos 1 a 8 del Anexo III, estás ante un sistema de alto riesgo aplicable desde el 2 de agosto de 2026.',
    },
    IV: {
      riskLevel: 'high',
      linkedArticles: ['art_11', 'art_16', 'art_18', 'art_43'],
      summary:
        'Estructura y contenido mínimo de la Documentación Técnica obligatoria para sistemas de IA de alto riesgo (Art. 11): descripción general, arquitectura y recursos de cálculo, hojas de datos (datasheets) de entrenamiento/validación/prueba, medidas de supervisión humana, ciberseguridad, métricas de precisión y equidad, gestión de riesgos (Art. 9) y plan de vigilancia poscomercialización.',
      enterpriseRelevance:
        'Plantilla obligatoria de ingeniería y cumplimiento que el proveedor debe redactar antes de comercializar un sistema de alto riesgo y conservar durante 10 años.',
    },
    V: {
      riskLevel: 'high',
      linkedArticles: ['art_16', 'art_47', 'art_48'],
      summary:
        'Contenido obligatorio de la Declaración UE de Conformidad (Art. 47): identificación del sistema de IA, nombre y dirección del proveedor, declaración de responsabilidad exclusiva, referencia a normas armonizadas aplicadas, datos del organismo notificado (si procede) y firma.',
      enterpriseRelevance:
        'Documento jurídico que habilita al proveedor a colocar el marcado CE (Art. 48) y comercializar el sistema de alto riesgo en toda la Unión.',
    },
    VI: {
      riskLevel: 'high',
      linkedArticles: ['art_43'],
      summary:
        'Procedimiento de evaluación de la conformidad fundamentado en el control interno (sin intervención de organismo notificado): verificación del sistema de gestión de calidad (Art. 17), examen de la documentación técnica del Anexo IV y coherencia del proceso de diseño y vigilancia poscomercialización.',
      enterpriseRelevance:
        'Procedimiento aplicable por defecto a todos los sistemas de alto riesgo empresariales de los puntos 2 a 8 del Anexo III (RR.HH., crédito, seguros, educación, infraestructuras).',
    },
    VII: {
      riskLevel: 'high',
      linkedArticles: ['art_28', 'art_43', 'art_44'],
      summary:
        'Procedimiento de evaluación de la conformidad con intervención de un Organismo Notificado: auditoría y aprobación del sistema de gestión de la calidad del proveedor, evaluación independiente de la documentación técnica del Anexo IV (con acceso a datos y pruebas) y vigilancia periódica.',
      enterpriseRelevance:
        'Exigible para sistemas biométricos del punto 1 del Anexo III cuando el proveedor no aplique íntegramente normas armonizadas o especificaciones comunes.',
    },
    VIII: {
      riskLevel: 'high',
      linkedArticles: ['art_6', 'art_49', 'art_71'],
      summary:
        'Información obligatoria que debe presentarse al inscribir un sistema de alto riesgo en la Base de Datos de la UE del artículo 71: Sección A (proveedores de sistemas Anexo III), Sección B (proveedores que se acogen a la excepción de no alto riesgo del Art. 6.3) y Sección C (responsables del despliegue públicos).',
      enterpriseRelevance:
        'Guía los campos exactos que el equipo de cumplimiento debe completar en el portal de registro europeo antes de lanzar un sistema del Anexo III.',
    },
    IX: {
      riskLevel: 'high',
      linkedArticles: ['art_60', 'art_71'],
      summary:
        'Información obligatoria para inscribir en el registro de la UE las pruebas de sistemas de alto riesgo del Anexo III en condiciones reales fuera de un sandbox regulatorio conforme al artículo 60.',
      enterpriseRelevance:
        'Requisito previo indispensable antes de iniciar pilotos o pruebas en condiciones reales con usuarios fuera de un entorno controlado de pruebas.',
    },
    X: {
      riskLevel: 'governance',
      linkedArticles: ['art_111'],
      summary:
        'Actos legislativos de la Unión relativos a sistemas informáticos de gran magnitud en el espacio de libertad, seguridad y justicia: Sistema de Información de Schengen (SIS II), VIS, Eurodac, Sistema de Entradas y Salidas (EES), ETIAS, ECRIS-TCN e interoperabilidad eu-LISA.',
      enterpriseRelevance:
        'Los componentes de IA integrados en estas infraestructuras europeas antes de agosto de 2027 disponen hasta el 31 de diciembre de 2030 para su plena adecuación (Art. 111.1).',
    },
    XI: {
      riskLevel: 'gpai',
      linkedArticles: ['art_53', 'art_55'],
      summary:
        'Documentación técnica que deben elaborar los proveedores de modelos de IA de uso general (GPAI) para la Oficina de IA (Art. 53.1.a): Sección 1 para todos los modelos GPAI (arquitectura, modalidades, licencia, datos de entrenamiento, cómputo en FLOPs y consumo energético) y Sección 2 adicional para modelos con riesgo sistémico (evaluaciones, red-teaming y mitigación).',
      enterpriseRelevance:
        'Estándar técnico obligatorio para desarrolladores de modelos fundacionales comercializados en la UE (exento para modelos open-source sin riesgo sistémico según Art. 53.2).',
    },
    XII: {
      riskLevel: 'gpai',
      linkedArticles: ['art_25', 'art_53'],
      summary:
        'Información sobre transparencia que los proveedores de modelos GPAI deben entregar a los proveedores posteriores (integradores B2B) que integren el modelo en sus propios sistemas de IA (Art. 53.1.b): capacidades, limitaciones, especificaciones técnicas, arquitectura, formato de entradas/salidas y datos utilizados.',
      enterpriseRelevance:
        'El documento clave que toda empresa integradora debe exigir a su proveedor de LLM para poder evaluar y documentar su propio sistema de IA.',
    },
    XIII: {
      riskLevel: 'gpai',
      linkedArticles: ['art_51', 'art_52', 'art_55'],
      summary:
        'Criterios cualitativos y cuantitativos para designar modelos de IA de uso general con riesgo sistémico (Art. 51): número de parámetros, calidad/tamaño del conjunto de datos, cantidad de cálculo en FLOPs, modalidades de entrada/salida, autonomía/uso de herramientas, alcance de más de 10.000 usuarios empresariales registrados en la UE y número de usuarios finales.',
      enterpriseRelevance:
        'Permite evaluar si un modelo GPAI puede ser designado de oficio por la Comisión como modelo con riesgo sistémico incluso por su impacto en el mercado (>10.000 usuarios empresariales en la UE).',
    },
  };

  const annexes = [];
  const annexVectors = new Map();
  const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII'];

  for (const r of romans) {
    const anxId = `anx_${r}`;
    const block = extractDivById(eurHtml, anxId);
    const docTis = [...block.matchAll(/<p\b[^>]*class="oj-doc-ti"[^>]*>([\s\S]*?)<\/p>/gi)].map((m) =>
      cleanHtmlText(m[1])
    );
    const title = docTis[0] || `ANEXO ${r}`;
    const heading = docTis[1] || `Anexo ${r}`;
    const meta = ANNEX_METADATA[r];

    const rawParas = extractParagraphsFromHtmlBlock(block);
    const paragraphs = rawParas.map((rp, idx) => {
      const pId = `${anxId}.p${idx + 1}`;
      const pVec = computeTextEmbedding(`Anexo ${r} ${heading} ${rp.numberLabel} ${rp.officialText}`);
      paragraphVectors.set(pId, pVec);
      const pRecitals = findTopRecitalsForVector(pVec, 2);

      const primaryCitation = makeCitation({
        id: pId,
        targetType: 'annex',
        articleId: anxId,
        paragraphId: pId,
        displayLabel: `Anexo ${r} (${rp.numberLabel}) · Reglamento (UE) 2024/1689`,
        exactQuote: rp.officialText.length > 320 ? rp.officialText.slice(0, 317) + '...' : rp.officialText,
      });

      return {
        id: pId,
        articleId: anxId,
        numberLabel: rp.numberLabel,
        officialText: rp.officialText,
        plainExplanation: `En el ${title} (${heading}), el punto «${rp.numberLabel}» especifica que: "${
          rp.officialText.length > 260 ? rp.officialText.slice(0, 257) + '...' : rp.officialText
        }". Vuelta de tuerca: este requisito técnico o caso de uso opera en conexión directa con los artículos ${meta.linkedArticles
          .map((id) => id.replace('art_', 'Art. '))
          .join(', ')}.`,
        enterpriseImpact: {
          summary: meta.enterpriseRelevance,
          byRole: {
            provider: `Debe verificar y documentar el punto ${rp.numberLabel} del Anexo ${r} antes de la comercialización o evaluación de conformidad.`,
            deployer: `Debe comprobar si su caso de uso o documentación recibida encaja en el punto ${rp.numberLabel} del Anexo ${r}.`,
            distributor: `Debe verificar la trazabilidad formal vinculada al Anexo ${r}.`,
            importer: `Debe comprobar que el expediente del fabricante extracomunitario satisface el Anexo ${r}.`,
            gpai_provider:
              r === 'XI' || r === 'XII' || r === 'XIII'
                ? `Obligación directa aplicable al proveedor del modelo GPAI bajo el punto ${rp.numberLabel} del Anexo ${r}.`
                : `Debe facilitar la información técnica necesaria si su modelo GPAI se integra en sistemas sujetos al Anexo ${r}.`,
          },
          actionItems: [
            `Contrastar el punto ${rp.numberLabel} del Anexo ${r} con el inventario técnico y documental del sistema de IA.`,
            `Vincular la evidencia de cumplimiento del Anexo ${r} con los artículos ${meta.linkedArticles
              .map((id) => id.replace('art_', 'Art. '))
              .join(', ')}.`,
            'Conservar las evidencias actualizadas ante posibles auditorías de la AESIA o de la Oficina de IA.',
          ],
          penaltyInfo: r === 'II' ? PENALTY_TIERS.prohibited : r === 'XI' || r === 'XII' || r === 'XIII' ? PENALTY_TIERS.gpai : PENALTY_TIERS.obligations,
        },
        riskLevel: meta.riskLevel,
        relatedRecitals: pRecitals,
        relatedAnnexes: [anxId],
        citations: [primaryCitation],
        vectorIndex: -1,
      };
    });

    const anxFullText = `${title} ${heading} ${meta.summary} ${rawParas.map((p) => p.officialText).join(' ')}`;
    const anxVec = computeTextEmbedding(anxFullText);
    annexVectors.set(anxId, anxVec);

    annexes.push({
      id: anxId,
      roman: r,
      title,
      heading,
      summary: meta.summary,
      enterpriseRelevance: meta.enterpriseRelevance,
      paragraphs,
      linkedArticles: meta.linkedArticles,
      riskLevel: meta.riskLevel,
      vectorIndex: -1,
    });
  }

  // 6. Build Titles array (tit_I .. tit_XIII)
  const titles = TITLE_DEFINITIONS.map((t) => ({
    id: t.id,
    roman: t.roman,
    name: t.name,
    summary: t.summary,
    articleIds: articles.filter((a) => a.titleId === t.id).map((a) => a.id),
  }));

  // 7. Build contiguous Float32Array vector store & vectorIndexMap
  const vectorIndexMap = [];
  const allVectorsList = [];

  function registerVector(vec, entry) {
    const idx = allVectorsList.length;
    allVectorsList.push(vec);
    vectorIndexMap.push({
      vectorIndex: idx,
      ...entry,
    });
    return idx;
  }

  // Register Articles and their Paragraphs
  for (const art of articles) {
    art.vectorIndex = registerVector(articleVectors.get(art.id), {
      kind: 'article',
      id: art.id,
      articleId: art.id,
      label: `Art. ${art.number} — ${art.heading}`,
      snippet: art.summary.slice(0, 260),
      riskLevel: art.riskLevel,
    });

    for (const p of art.paragraphs) {
      p.vectorIndex = registerVector(paragraphVectors.get(p.id), {
        kind: 'paragraph',
        id: p.id,
        articleId: art.id,
        label: `Art. ${art.number} (${p.numberLabel}) — ${art.heading}`,
        snippet: p.officialText.length > 260 ? p.officialText.slice(0, 257) + '...' : p.officialText,
        riskLevel: p.riskLevel,
      });
    }
  }

  // Register Recitals (1..180)
  for (let i = 0; i < recitals.length; i++) {
    const rct = recitals[i];
    rct.vectorIndex = registerVector(recitalVectors[i], {
      kind: 'recital',
      id: rct.id,
      articleId: rct.id,
      label: `Considerando (${rct.number})`,
      snippet: rct.officialText.length > 260 ? rct.officialText.slice(0, 257) + '...' : rct.officialText,
      riskLevel: rct.riskLevel,
    });
  }

  // Register Annexes (I..XIII) and their paragraphs
  for (const anx of annexes) {
    anx.vectorIndex = registerVector(annexVectors.get(anx.id), {
      kind: 'annex',
      id: anx.id,
      articleId: anx.id,
      label: `${anx.title} — ${anx.heading}`,
      snippet: anx.summary.slice(0, 260),
      riskLevel: anx.riskLevel,
    });

    for (const p of anx.paragraphs) {
      p.vectorIndex = registerVector(paragraphVectors.get(p.id), {
        kind: 'paragraph',
        id: p.id,
        articleId: anx.id,
        label: `${anx.title} (${p.numberLabel})`,
        snippet: p.officialText.length > 260 ? p.officialText.slice(0, 257) + '...' : p.officialText,
        riskLevel: p.riskLevel,
      });
    }
  }

  const totalArticleParagraphs = articles.reduce((acc, a) => acc + a.paragraphs.length, 0);
  const totalAnnexParagraphs = annexes.reduce((acc, x) => acc + x.paragraphs.length, 0);

  const corpus = {
    metadata: {
      officialTitle:
        'Reglamento (UE) 2024/1689 del Parlamento Europeo y del Consejo, de 13 de junio de 2024, por el que se establecen normas armonizadas en materia de inteligencia artificial (Reglamento de Inteligencia Artificial)',
      celex: '32024R1689',
      boeId: OFFICIAL_BOE_ID,
      eliUri: OFFICIAL_ELI_URI,
      eurLexHtmlUrl: EUR_LEX_HTML_URL,
      boeXmlUrl: BOE_XML_URL,
      publicationDate: '2024-07-12',
      entryIntoForceDate: '2024-08-01',
      generalApplicationDate: '2026-08-02',
      vectorDimensions: VECTOR_DIMENSIONS,
      totalVectors: allVectorsList.length,
      totalArticles: articles.length,
      totalParagraphs: totalArticleParagraphs + totalAnnexParagraphs,
      totalRecitals: recitals.length,
      totalAnnexes: annexes.length,
      generatedAt: new Date().toISOString(),
    },
    titles,
    articles,
    recitals,
    annexes,
    boeUpdates: BOE_UPDATES_DATA,
    timeline: TIMELINE_MILESTONES,
    infographics: INFOGRAPHIC_MODULES,
    quizBank: QUIZ_BANK_DATA,
    vectorIndexMap,
  };

  // 8. Encode and write binary files to public/data/
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // 8A. Write eu-ai-act.vectors.bin (12-byte header + Float32Array payload)
  const numVectors = allVectorsList.length;
  const vectorsByteLength = 12 + numVectors * VECTOR_DIMENSIONS * 4;
  const vectorsBuffer = new ArrayBuffer(vectorsByteLength);
  const vectorsView = new DataView(vectorsBuffer);
  vectorsView.setUint32(0, VECTOR_MAGIC, true);
  vectorsView.setUint32(4, numVectors, true);
  vectorsView.setUint32(8, VECTOR_DIMENSIONS, true);

  const floatTarget = new Float32Array(vectorsBuffer, 12, numVectors * VECTOR_DIMENSIONS);
  for (let i = 0; i < numVectors; i++) {
    floatTarget.set(allVectorsList[i], i * VECTOR_DIMENSIONS);
  }

  const vectorsOutPath = path.join(OUTPUT_DIR, 'eu-ai-act.vectors.bin');
  await fs.writeFile(vectorsOutPath, new Uint8Array(vectorsBuffer));

  // 8B. Write eu-ai-act.corpus.bin (8-byte header + XOR-masked UTF-8 bytes)
  const jsonBytes = new TextEncoder().encode(JSON.stringify(corpus));
  const corpusByteLength = 8 + jsonBytes.byteLength;
  const corpusBuffer = new ArrayBuffer(corpusByteLength);
  const corpusView = new DataView(corpusBuffer);
  corpusView.setUint32(0, CORPUS_MAGIC, true);
  corpusView.setUint32(4, jsonBytes.byteLength, true);

  const maskedPayload = new Uint8Array(corpusBuffer, 8, jsonBytes.byteLength);
  for (let i = 0; i < jsonBytes.byteLength; i++) {
    maskedPayload[i] = jsonBytes[i] ^ ((i * 31 + 0x5a) & 0xff);
  }

  const corpusOutPath = path.join(OUTPUT_DIR, 'eu-ai-act.corpus.bin');
  await fs.writeFile(corpusOutPath, new Uint8Array(corpusBuffer));

  // 9. Verify binary roundtrip decoding
  const readCorpusBuf = await fs.readFile(corpusOutPath);
  const readVecBuf = await fs.readFile(vectorsOutPath);
  const cArrBuf = readCorpusBuf.buffer.slice(
    readCorpusBuf.byteOffset,
    readCorpusBuf.byteOffset + readCorpusBuf.byteLength
  );
  const vArrBuf = readVecBuf.buffer.slice(
    readVecBuf.byteOffset,
    readVecBuf.byteOffset + readVecBuf.byteLength
  );

  const cView = new DataView(cArrBuf);
  if (cView.getUint32(0, true) !== CORPUS_MAGIC) {
    throw new Error('CORPUS_MAGIC verification failed!');
  }
  const cLen = cView.getUint32(4, true);
  const rawPayload = new Uint8Array(cArrBuf, 8, cLen);
  const unmasked = new Uint8Array(cLen);
  for (let i = 0; i < cLen; i++) {
    unmasked[i] = rawPayload[i] ^ ((i * 31 + 0x5a) & 0xff);
  }
  const decodedCorpus = JSON.parse(new TextDecoder('utf-8').decode(unmasked));

  const vView = new DataView(vArrBuf);
  if (vView.getUint32(0, true) !== VECTOR_MAGIC) {
    throw new Error('VECTOR_MAGIC verification failed!');
  }
  const decNumVecs = vView.getUint32(4, true);
  const decDims = vView.getUint32(8, true);
  const decFloat = new Float32Array(vArrBuf, 12, decNumVecs * decDims);

  console.log('=== Binary Verification Successful ===');
  console.log({
    corpusBinPath: corpusOutPath,
    corpusBinSizeKB: +(readCorpusBuf.byteLength / 1024).toFixed(1),
    vectorsBinPath: vectorsOutPath,
    vectorsBinSizeKB: +(readVecBuf.byteLength / 1024).toFixed(1),
    titles: decodedCorpus.titles.length,
    articles: decodedCorpus.articles.length,
    articleParagraphs: totalArticleParagraphs,
    recitals: decodedCorpus.recitals.length,
    annexes: decodedCorpus.annexes.length,
    annexParagraphs: totalAnnexParagraphs,
    boeUpdates: decodedCorpus.boeUpdates.length,
    timelineMilestones: decodedCorpus.timeline.length,
    infographics: decodedCorpus.infographics.length,
    quizQuestions: decodedCorpus.quizBank.length,
    totalVectors: decNumVecs,
    vectorDimensions: decDims,
    sampleFloatLength: decFloat.length,
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error('Ingestion & Vectorization failed:', err);
    process.exit(1);
  });
}
