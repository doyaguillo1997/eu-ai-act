import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import {
  decodeCorpusBinary,
  decodeVectorsBinary,
  LegalVectorEngine,
  computeTextEmbedding,
} from '../src/services/vectorStore';

describe('EU AI Act Binary Corpus & Vector Engine QA', () => {
  const publicDir = path.resolve(process.cwd(), 'public/data');
  const corpusBinPath = path.join(publicDir, 'eu-ai-act.corpus.bin');
  const vectorsBinPath = path.join(publicDir, 'eu-ai-act.vectors.bin');

  it('verifies zero .pdf or .txt files exist inside public/data/', () => {
    expect(fs.existsSync(publicDir)).toBe(true);
    const files = fs.readdirSync(publicDir);
    const forbidden = files.filter((f) => f.endsWith('.pdf') || f.endsWith('.txt'));
    expect(forbidden).toEqual([]);
  });

  const corpusBuffer = fs.readFileSync(corpusBinPath).buffer;
  const vectorsBuffer = fs.readFileSync(vectorsBinPath).buffer;

  const corpus = decodeCorpusBinary(corpusBuffer);
  const { numVectors, dimensions, vectors } = decodeVectorsBinary(vectorsBuffer);
  const engine = new LegalVectorEngine(corpus, vectors, numVectors, dimensions);

  it('validates corpus structure counts and array bounds', () => {
    expect(corpus.articles.length).toBe(113);
    expect(corpus.recitals.length).toBe(180);
    expect(corpus.annexes.length).toBe(13);
    expect(corpus.titles.length).toBe(13);
  });

  it('validates every article has clickable paragraphs with explanations and impacts', () => {
    for (const art of corpus.articles) {
      expect(art.paragraphs.length).toBeGreaterThan(0);
      for (const p of art.paragraphs) {
        expect(p.plainExplanation.length).toBeGreaterThan(20);
        expect(p.enterpriseImpact.actionItems.length).toBeGreaterThan(0);
        expect(p.citations.length).toBeGreaterThan(0);
      }
    }
  });

  it('validates vectors binary dimensions and L2 normalization', () => {
    expect(dimensions).toBe(128);
    expect(numVectors).toBe(corpus.vectorIndexMap.length);

    // Verify first 5 vectors are L2 normalized (norm ≈ 1.0)
    for (let i = 0; i < Math.min(5, numVectors); i++) {
      const start = i * dimensions;
      let sumSq = 0;
      for (let d = 0; d < dimensions; d++) {
        const val = vectors[start + d];
        sumSq += val * val;
      }
      expect(Math.abs(Math.sqrt(sumSq) - 1.0)).toBeLessThan(1e-3);
    }
  });

  it('performs hybrid search for banned practices (Art. 5)', () => {
    const start = performance.now();
    const results = engine.hybridSearch('practicas prohibidas manipulacion subliminal art 5');
    const duration = performance.now() - start;

    expect(results.length).toBeGreaterThan(0);

    const topIds = results.slice(0, 5).map((r) => r.articleId);
    expect(topIds).toContain('art_5');
  });

  it('performs hybrid search for sanctions and 35 million fines (Art. 99)', () => {
    const results = engine.hybridSearch('sanciones multas 35 millones volumen negocios');
    expect(results.length).toBeGreaterThan(0);

    const topIds = results.slice(0, 5).map((r) => r.articleId);
    expect(topIds).toContain('art_99');
  });

  it('finds similar provisions for vector index 0', () => {
    const similar = engine.findSimilarProvisions(0, 4);
    expect(similar.length).toBe(4);
    for (const sim of similar) {
      expect(sim.cosineSimilarity).toBeGreaterThan(0);
      expect(sim.citation).toBeDefined();
    }
  });

  it('validates timeline milestones and checklist items citations', () => {
    expect(corpus.timeline.length).toBe(6);
    for (const milestone of corpus.timeline) {
      expect(milestone.id).toBeDefined();
      expect(milestone.title).toBeDefined();
      expect(milestone.dateIso).toBeDefined();
      expect(milestone.citations).toBeDefined();
      expect(milestone.citations.length).toBeGreaterThan(0);
      for (const cit of milestone.citations) {
        expect(cit.boeId).toBeDefined();
        expect(cit.exactQuote).toBeDefined();
      }
      if (milestone.readinessChecklist) {
        for (const item of milestone.readinessChecklist) {
          expect(item.requirement).toBeDefined();
          expect(item.citation).toBeDefined();
          expect(item.citation.boeId).toBeDefined();
          expect(item.citation.exactQuote).toBeDefined();
        }
      }
    }
  });

  it('validates infographics and key point citations', () => {
    expect(corpus.infographics.length).toBe(6);
    for (const info of corpus.infographics) {
      expect(info.title).toBeDefined();
      for (const kp of info.keyPoints) {
        expect(kp.citation).toBeDefined();
        expect(kp.citation.boeId).toBeDefined();
        expect(kp.citation.exactQuote).toBeDefined();
      }
    }
  });

  it('validates quiz bank citation integrity and correct option indices', () => {
    expect(corpus.quizBank.length).toBeGreaterThanOrEqual(200);
    const ids = new Set<string>();
    const stems = new Set<string>();
    const topics = new Set<string>();
    const titles = new Set<string>();
    for (const q of corpus.quizBank) {
      expect(ids.has(q.id)).toBe(false);
      expect(stems.has(q.question.trim().toLowerCase())).toBe(false);
      ids.add(q.id);
      stems.add(q.question.trim().toLowerCase());
      topics.add(q.topicId);
      titles.add(q.titleId);
      expect(q.options.length).toBe(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.citations.length).toBeGreaterThan(0);
      expect(q.correctOptionIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctOptionIndex).toBeLessThan(q.options.length);
      for (const cit of q.citations) {
        expect(cit.boeId).toBeDefined();
        expect(cit.exactQuote).toBeDefined();
      }
    }
    expect(topics.size).toBe(7);
    expect(titles.size).toBeGreaterThanOrEqual(10);
  });

  it('validates anti-length-bias standards across the full question bank', () => {
    expect(corpus.quizBank.length).toBe(302);

    let longestWins = 0;
    const positions = [0, 0, 0, 0];
    let shortOnlyCount = 0;

    for (const q of corpus.quizBank) {
      const lengths = q.options.map((o) => o.length);
      const maxLen = Math.max(...lengths);
      if (lengths.indexOf(maxLen) === q.correctOptionIndex) {
        longestWins++;
      }
      positions[q.correctOptionIndex]++;
      if (maxLen <= 60) {
        shortOnlyCount++;
      }

      // Check ratio constraints on each question: correct option should not be disproportionately longer
      const correctLen = lengths[q.correctOptionIndex];
      const otherLens = lengths.filter((_, i) => i !== q.correctOptionIndex);
      const maxOther = Math.max(...otherLens);
      expect(correctLen / maxOther).toBeLessThanOrEqual(1.25);
    }

    // Longest option heuristic must win <= 30% of the time (random chance is 25%)
    const longestWinPct = (longestWins / corpus.quizBank.length) * 100;
    expect(longestWinPct).toBeLessThanOrEqual(30);

    // Each option position (A, B, C, D) must have ~25% distribution (between 20% and 30%)
    for (const count of positions) {
      const pct = (count / corpus.quizBank.length) * 100;
      expect(pct).toBeGreaterThanOrEqual(20);
      expect(pct).toBeLessThanOrEqual(30);
    }

    // Must have at least 70 short-only questions (options <= 60 characters)
    expect(shortOnlyCount).toBeGreaterThanOrEqual(70);
  });

  it('validates smart sub-point paragraph resolution and BOE updates', () => {
    expect(corpus.boeUpdates.length).toBeGreaterThanOrEqual(6);
    const pSubliminal = engine.getParagraph('art_5.p1.a');
    expect(pSubliminal).toBeDefined();
    expect(pSubliminal?.articleId).toBe('art_5');

    const pDeadline = engine.getParagraph('art_113.c');
    expect(pDeadline).toBeDefined();
    expect(pDeadline?.articleId).toBe('art_113');

    const pDeployer = engine.getParagraph('art_26.p11');
    expect(pDeployer).toBeDefined();
    expect(pDeployer?.articleId).toBe('art_26');
  });
});
