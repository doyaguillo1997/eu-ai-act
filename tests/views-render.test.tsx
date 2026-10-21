import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import {
  decodeCorpusBinary,
  decodeVectorsBinary,
  LegalVectorEngine,
  resolveOfficialExternalUrl,
} from '../src/services/vectorStore';
import { RoleContextHomeView } from '../src/views/RoleContextHomeView';
import { EnterpriseGuideView } from '../src/views/EnterpriseGuideView';
import { InteractiveLawView } from '../src/views/InteractiveLawView';
import { TimelineDeadlinesView } from '../src/views/TimelineDeadlinesView';
import { QuizEngineView } from '../src/views/QuizEngineView';

describe('End-to-End View Rendering & Visual Integrity Audit', () => {
  const publicDir = path.resolve(process.cwd(), 'public/data');
  const corpusBuffer = fs.readFileSync(path.join(publicDir, 'eu-ai-act.corpus.bin')).buffer;
  const vectorsBuffer = fs.readFileSync(path.join(publicDir, 'eu-ai-act.vectors.bin')).buffer;

  const corpus = decodeCorpusBinary(corpusBuffer);
  const { numVectors, dimensions, vectors } = decodeVectorsBinary(vectorsBuffer);
  const engine = new LegalVectorEngine(corpus, vectors, numVectors, dimensions);
  const noop = () => {};

  it('renders EnterpriseGuideView with Risk Pyramid, Role Matrix, Classifier, and 6 Infographics', () => {
    const html = renderToStaticMarkup(
      <EnterpriseGuideView
        engine={engine}
        selectedRole="deployer"
        onSelectRole={noop}
        onNavigateCitation={noop}
        onOpenQuizForTopic={noop}
      />
    );
    expect(html).toContain('Pirámide Interactiva de Riesgos del EU AI Act');
    expect(html).toContain('Clasificador Diagnóstico de Sistema IA para Empresas');
    expect(html).toContain('DOUE-L-2024-81079');
    expect(html).toContain('BOE-A-2023-18911');
  });

  it('renders InteractiveLawView in Article, Recital, and Annex modes without inspector shadowing', () => {
    // 1. Article mode (Art. 5, paragraph 2 -> 1.a)
    const artHtml = renderToStaticMarkup(
      <InteractiveLawView
        engine={engine}
        selectedProvision={{ articleId: 'art_5', paragraphId: 'art_5.p2' }}
        onSelectProvision={noop}
        selectedRole="provider"
        onSelectRole={noop}
        onNavigateCitation={noop}
        onStartArticleQuiz={noop}
      />
    );
    expect(artHtml).toContain('Artículo 5: Prácticas de IA prohibidas');
    expect(artHtml).toContain('Artículo 5 · 1.a)');
    expect(artHtml).toContain('Explicación en lenguaje claro');

    // 2. Recital mode (Considerando 29) -> Inspector must show Considerando (29), not Artículo 1
    const rctHtml = renderToStaticMarkup(
      <InteractiveLawView
        engine={engine}
        selectedProvision={{ articleId: 'art_1', recitalId: 'rct_29' }}
        onSelectProvision={noop}
        selectedRole="deployer"
        onSelectRole={noop}
        onNavigateCitation={noop}
        onStartArticleQuiz={noop}
      />
    );
    expect(rctHtml).toContain('Considerando (29)');
    expect(rctHtml).not.toContain('Artículo 1 · 1.');

    // 3. Annex mode (Anexo III) -> Inspector must show Anexo III, not Artículo 6
    const anxHtml = renderToStaticMarkup(
      <InteractiveLawView
        engine={engine}
        selectedProvision={{ articleId: 'art_6', annexId: 'anx_III', paragraphId: 'anx_III.p1' }}
        onSelectProvision={noop}
        selectedRole="deployer"
        onSelectRole={noop}
        onNavigateCitation={noop}
        onStartArticleQuiz={noop}
      />
    );
    expect(anxHtml).toContain('ANEXO III');
    expect(anxHtml).toContain('Anexo III · Punto');
  });

  it('renders TimelineDeadlinesView with all 6 official milestones and readiness checklist', () => {
    const html = renderToStaticMarkup(
      <TimelineDeadlinesView
        engine={engine}
        checkedReadinessIds={['r_2025_02_1']}
        onToggleReadinessItem={noop}
        selectedRole="deployer"
        onSelectRole={noop}
        onNavigateCitation={noop}
      />
    );
    expect(html).toContain('1 de agosto de 2024');
    expect(html).toContain('2 de febrero de 2025');
    expect(html).toContain('2 de agosto de 2025');
    expect(html).toContain('2 de agosto de 2026');
    expect(html).toContain('2 de agosto de 2027');
    expect(html).toContain('2 de agosto de 2030');
    expect(html).toContain('Checklist de Auditoría de Readiness');
  });

  it('renders QuizEngineView with all 113 articles in selector and synthesizes questions for any article', () => {
    const html = renderToStaticMarkup(
      <QuizEngineView
        engine={engine}
        initialTopicOrArticle={{ articleId: 'art_72' }}
        quizStats={{ totalAnswered: 10, totalCorrect: 8, byTopic: {}, byArticle: {} }}
        onRecordAnswer={noop}
        onNavigateCitation={noop}
      />
    );
    expect(html).toContain('Artículo 113: Entrada en vigor y aplicación');
    expect(html).toContain('Artículo 72');
    expect(html).not.toContain('No hay preguntas disponibles con los filtros actuales');
  });

  it('renders RoleContextHomeView with roles, in-house models, pricing calculators, banks, SMEs, and comparators', () => {
    const html = renderToStaticMarkup(
      <RoleContextHomeView
        engine={engine}
        selectedRole="provider"
        onSelectRole={noop}
        onNavigateCitation={noop}
        onNavigateTab={noop}
      />
    );
    expect(html).toContain('Calculador de Precios para Clientes');
    expect(html).toContain('Modelos Propios de Bancos y Entidades Financieras');
    expect(html).toContain('Sector Asegurador: Cálculo de Primas, Costes de Lesionados y Convenios CICOS');
    expect(html).toContain('Pequeñas Empresas (PYMES y Autónomos) que usan IA en el Día a Día');
    expect(html).toContain('Comparadores de Precios, Recomendadores y Marketplaces');
    expect(html).toContain('#art_3');
  });

  it('resolves exact EUR-Lex HTML anchor links (#anx_V, #art_5, #rct_58) and BOE links', () => {
    expect(
      resolveOfficialExternalUrl({ annexId: 'anx_V', targetType: 'annex' })
    ).toBe('https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:02024R1689-20260727#anx_V');
    expect(
      resolveOfficialExternalUrl({ articleId: 'art_5', paragraphId: 'art_5.p1', targetType: 'paragraph' })
    ).toBe('https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:02024R1689-20260727#art_5');
    expect(
      resolveOfficialExternalUrl({ recitalId: 'rct_58', targetType: 'recital' })
    ).toBe('https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202401689#rct_58');
  });

  it('verifies multi-role rendering and collapsible split view controls', () => {
    // 1. Multi-role rendering across views
    const roles: ('provider' | 'deployer')[] = ['provider', 'deployer'];
    
    const roleHomeHtml = renderToStaticMarkup(
      <RoleContextHomeView
        engine={engine}
        selectedRole="provider"
        selectedRoles={roles}
        onSelectRole={noop}
        onNavigateCitation={noop}
        onNavigateTab={noop}
      />
    );
    expect(roleHomeHtml).toContain('2 roles combinados');

    const enterpriseGuideHtml = renderToStaticMarkup(
      <EnterpriseGuideView
        engine={engine}
        selectedRole="provider"
        selectedRoles={roles}
        onSelectRole={noop}
        onNavigateCitation={noop}
        onOpenQuizForTopic={noop}
      />
    );
    expect(enterpriseGuideHtml).toContain('2 roles combinados');

    const interactiveLawHtml = renderToStaticMarkup(
      <InteractiveLawView
        engine={engine}
        selectedProvision={{ articleId: 'art_5', paragraphId: 'art_5.p1' }}
        onSelectProvision={noop}
        selectedRole="provider"
        selectedRoles={roles}
        onSelectRole={noop}
        onNavigateCitation={noop}
        onStartArticleQuiz={noop}
      />
    );
    expect(interactiveLawHtml).toContain('2 roles combinados');
    expect(interactiveLawHtml).toContain('Contraer panel');
    expect(interactiveLawHtml).toContain('Ocultar panel');

    const timelineHtml = renderToStaticMarkup(
      <TimelineDeadlinesView
        engine={engine}
        checkedReadinessIds={[]}
        onToggleReadinessItem={noop}
        selectedRole="provider"
        selectedRoles={roles}
        onSelectRole={noop}
        onNavigateCitation={noop}
      />
    );
    expect(timelineHtml).toContain('2 roles combinados');
  });
});
