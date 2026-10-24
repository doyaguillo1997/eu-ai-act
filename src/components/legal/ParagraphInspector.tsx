import React, { useState, useMemo } from 'react';
import {
  LegalArticle,
  LegalParagraph,
  LegalRecital,
  LegalAnnex,
  EnterpriseRole,
  LegalCitation,
  RiskLevel,
} from '../../types/legal.types';
import {
  LegalVectorEngine,
  resolveOfficialExternalUrl,
  resolveOfficialAnchorBadge,
  isLeadInParagraph,
} from '../../services/vectorStore';
import { RiskBadge } from '../shared/RiskBadge';
import { CitationBadge } from '../shared/CitationBadge';
import { MultiRoleSelector, ENTERPRISE_ROLE_OPTIONS } from '../shared/MultiRoleSelector';
import {
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Briefcase,
  AlertTriangle,
  BookOpen,
  Layers,
  GraduationCap,
  Scale,
  FileText,
  ListChecks,
  ChevronRight,
} from 'lucide-react';

export interface ParagraphInspectorProps {
  engine: LegalVectorEngine;
  article?: LegalArticle;
  paragraph?: LegalParagraph;
  recital?: LegalRecital;
  annex?: LegalAnnex;
  selectedRole: EnterpriseRole;
  onSelectRole: (role: EnterpriseRole) => void;
  selectedRoles?: EnterpriseRole[];
  onToggleRole?: (role: EnterpriseRole) => void;
  onSetRoles?: (roles: EnterpriseRole[]) => void;
  onCollapseInspector?: () => void;
  onNavigateCitation: (citation: LegalCitation) => void;
  onStartArticleQuiz?: (articleId: string) => void;
}

export const ParagraphInspector: React.FC<ParagraphInspectorProps> = ({
  engine,
  article,
  paragraph,
  recital,
  annex,
  selectedRole,
  onSelectRole,
  selectedRoles,
  onToggleRole,
  onSetRoles,
  onCollapseInspector,
  onNavigateCitation,
  onStartArticleQuiz,
}) => {
  const [copied, setCopied] = useState(false);

  // Compute active roles (supports multi-role selection with single-role fallback)
  const activeRoles: EnterpriseRole[] = useMemo(() => {
    return selectedRoles && selectedRoles.length > 0 ? selectedRoles : [selectedRole];
  }, [selectedRoles, selectedRole]);

  // Resolve effective active paragraph (skips non-interactive lead-in paragraphs)
  const activeParagraph = useMemo(() => {
    if (!paragraph) return undefined;
    if (isLeadInParagraph(paragraph, article?.paragraphs)) {
      const firstSubstantive = article?.paragraphs.find(
        (p) => !isLeadInParagraph(p, article.paragraphs)
      );
      return firstSubstantive;
    }
    return paragraph;
  }, [paragraph, article]);

  // Determine current active entity
  const isParagraph = Boolean(activeParagraph);
  const isRecital = Boolean(recital) && !activeParagraph && !article;
  const isAnnex = Boolean(annex);

  const riskLevel: RiskLevel = useMemo(() => {
    if (activeParagraph) return activeParagraph.riskLevel;
    if (article) return article.riskLevel;
    if (recital) return recital.riskLevel;
    if (annex) return annex.riskLevel;
    return 'governance';
  }, [activeParagraph, article, recital, annex]);

  // Current entity identifiers
  const displayTitle = useMemo(() => {
    if (annex && activeParagraph) {
      return `Anexo ${annex.roman} · Punto ${activeParagraph.numberLabel || 'Apartado'}`;
    }
    if (activeParagraph) {
      const art = article || engine.getArticle(activeParagraph.articleId);
      const artLabel = art ? art.titleLabel : activeParagraph.articleId;
      return `${artLabel} · ${activeParagraph.numberLabel || 'Apartado'}`;
    }
    if (article) {
      return `${article.titleLabel}: ${article.heading}`;
    }
    if (recital) {
      return `Considerando (${recital.number})`;
    }
    if (annex) {
      return `Anexo ${annex.roman}: ${annex.heading || annex.title}`;
    }
    return 'Inspector de Provisiones';
  }, [activeParagraph, article, recital, annex, engine]);

  const displaySubtitle = useMemo(() => {
    if (annex) return annex.heading || annex.title;
    if (activeParagraph && article) return article.heading;
    if (activeParagraph) {
      const art = engine.getArticle(activeParagraph.articleId);
      return art ? art.heading : '';
    }
    if (recital) return 'Fundamento del Reglamento (UE) 2024/1689';
    return 'Reglamento (UE) 2024/1689 · DOUE-L-2024-81079';
  }, [activeParagraph, article, recital, annex, engine]);

  const officialCitationString = useMemo(() => {
    const boeId = engine.corpus.metadata?.boeId || 'DOUE-L-2024-81079';
    return `${displayTitle} — ${displaySubtitle} [${boeId} · Reglamento (UE) 2024/1689]`;
  }, [displayTitle, displaySubtitle, engine]);

  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(officialCitationString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  // Find vector similarity connections (top 4)
  const vectorIndex = activeParagraph?.vectorIndex ?? article?.vectorIndex ?? recital?.vectorIndex ?? annex?.vectorIndex;

  const semanticConnections = useMemo(() => {
    if (vectorIndex === undefined || vectorIndex < 0) return [];
    return engine.findSimilarProvisions(vectorIndex, 4);
  }, [vectorIndex, engine]);

  // Related recitals & annexes
  const linkedRecitals = useMemo(() => {
    const ids = activeParagraph?.relatedRecitals ?? article?.relatedRecitals ?? [];
    return ids
      .map((id) => engine.getRecital(id))
      .filter((r): r is LegalRecital => Boolean(r));
  }, [activeParagraph, article, engine]);

  const linkedAnnexes = useMemo(() => {
    const ids = activeParagraph?.relatedAnnexes ?? article?.relatedAnnexes ?? [];
    return ids
      .map((id) => engine.getAnnex(id))
      .filter((a): a is LegalAnnex => Boolean(a));
  }, [activeParagraph, article, engine]);

  // Enterprise impact
  const enterpriseImpact = activeParagraph?.enterpriseImpact;
  const targetArticleId =
    (activeParagraph?.articleId.startsWith('art_') ? activeParagraph.articleId : undefined) ||
    article?.id ||
    annex?.linkedArticles?.[0] ||
    recital?.linkedArticles?.[0];

  // External URL with exact EUR-Lex HTML anchor (#art_X, #anx_V, #rct_Y)
  const boeId = engine.corpus.metadata?.boeId || 'DOUE-L-2024-81079';
  const externalUrl = useMemo(
    () =>
      resolveOfficialExternalUrl({
        articleId: article?.id || activeParagraph?.articleId,
        paragraphId: activeParagraph?.id,
        recitalId: recital?.id,
        annexId: annex?.id,
        boeId,
        targetType: annex ? 'annex' : recital ? 'recital' : activeParagraph ? 'paragraph' : 'article',
      }),
    [article, activeParagraph, recital, annex, boeId]
  );
  const anchorBadge = useMemo(
    () =>
      resolveOfficialAnchorBadge({
        articleId: article?.id || activeParagraph?.articleId,
        paragraphId: activeParagraph?.id,
        recitalId: recital?.id,
        annexId: annex?.id,
        boeId,
        targetType: annex ? 'annex' : recital ? 'recital' : activeParagraph ? 'paragraph' : 'article',
      }),
    [article, activeParagraph, recital, annex, boeId]
  );

  return (
    <div className="flex flex-col h-full bg-slate-950/70 divide-y divide-slate-800/70 text-slate-200">
      {/* 1. HEADER: Reference, Risk Badge, BOE ID, External Link, Copy, Collapse button */}
      <header className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 sticky top-0 z-20 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <RiskBadge level={riskLevel} size="sm" />
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-800/90 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 text-[11px] font-mono transition-colors"
              title="Copiar referencia jurídica"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-400" />
                  <span>Copiar cita</span>
                </>
              )}
            </button>

            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 hover:text-white border border-indigo-500/40 text-[11px] font-mono transition-colors"
              title={`Abrir sección exacta (${anchorBadge}) en el HTML oficial de EUR-Lex`}
            >
              <ExternalLink className="w-3 h-3 text-indigo-400" />
              <span>EUR-Lex ({anchorBadge})</span>
            </a>

            {onCollapseInspector && (
              <button
                type="button"
                onClick={onCollapseInspector}
                className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-800/90 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 text-[11px] font-mono transition-colors"
                title="Contraer panel de información hacia la derecha"
                aria-label="Contraer panel de información hacia la derecha"
              >
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Ocultar panel</span>
              </button>
            )}
          </div>
        </div>

        <h2 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight leading-snug">
          {displayTitle}
        </h2>
        {displaySubtitle && (
          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
            {displaySubtitle}
          </p>
        )}

        <div className="mt-2.5 flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700/50">
            {boeId}
          </span>
          <span className="text-slate-400">·</span>
          <span>Reglamento (UE) 2024/1689</span>
        </div>
      </header>

      {/* 2. BODY CONTENT (SCROLLABLE) */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
        {/* Test launcher button (if available) */}
        {onStartArticleQuiz && targetArticleId && (
          <div>
            <button
              type="button"
              onClick={() => onStartArticleQuiz(targetArticleId)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-xs shadow-md transition-all duration-150"
            >
              <GraduationCap className="w-4 h-4 text-indigo-200" />
              <span>Evaluar conocimientos en Test de este Artículo</span>
            </button>
          </div>
        )}

        {/* SECTION: EXPLICACIÓN EN LENGUAJE CLARO ("Vuelta de Tuerca") */}
        <section aria-labelledby="section-plain-explanation">
          <div className="flex items-center gap-2 mb-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <h3
              id="section-plain-explanation"
              className="text-xs font-semibold uppercase tracking-wider text-amber-300 font-mono"
            >
              Explicación en lenguaje claro
            </h3>
          </div>

          <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-slate-200 text-xs leading-relaxed space-y-2">
            {activeParagraph?.plainExplanation ? (
              <p>{activeParagraph.plainExplanation}</p>
            ) : article?.summary ? (
              <p>{article.summary}</p>
            ) : recital?.plainSummary ? (
              <p>{recital.plainSummary}</p>
            ) : annex?.summary ? (
              <p>{annex.summary}</p>
            ) : (
              <p className="text-slate-400 italic">
                Seleccione un precepto para examinar su explicación operativa.
              </p>
            )}

            {article?.enterpriseTakeaway && !activeParagraph && (
              <div className="pt-2 border-t border-amber-500/20">
                <span className="font-semibold text-amber-200 block mb-1">
                  Clave ejecutiva:
                </span>
                <p className="text-slate-300">{article.enterpriseTakeaway}</p>
              </div>
            )}
          </div>
        </section>

        {/* SECTION: ¿QUÉ IMPLICA PARA TU EMPRESA? */}
        <section aria-labelledby="section-enterprise-impact">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
              <h3
                id="section-enterprise-impact"
                className="text-xs font-semibold uppercase tracking-wider text-indigo-300 font-mono"
              >
                ¿Qué implica para tu empresa?
              </h3>
            </div>
          </div>

          {/* Multi-role selector */}
          <div className="mb-3">
            <MultiRoleSelector
              selectedRoles={activeRoles}
              onToggleRole={onToggleRole || onSelectRole}
              onSetRoles={onSetRoles}
              compact
            />
          </div>

          {/* Multi-role combo notification when 2 or more roles are active */}
          {activeRoles.length >= 2 && (
            <div className="mb-3 flex items-center gap-2 p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-200">
              <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
              <div className="min-w-0">
                <span className="font-semibold block text-indigo-100">
                  Combinación activa: {activeRoles.length} roles simultáneos
                </span>
                <span className="text-[11px] text-slate-300">
                  Visualizando el impacto agregado de actuar en múltiples posiciones en la cadena de valor:
                </span>
              </div>
            </div>
          )}

          {/* Role-specific obligation cards for ALL active roles */}
          <div className="space-y-3">
            <div className="space-y-2.5">
              {activeRoles.map((role) => {
                const roleMeta = ENTERPRISE_ROLE_OPTIONS.find((r) => r.id === role);
                const obligation =
                  enterpriseImpact?.byRole?.[role] ||
                  (isAnnex && annex?.enterpriseRelevance
                    ? annex.enterpriseRelevance
                    : 'Este apartado establece condiciones directas sobre el ciclo de vida del sistema de IA. Verifique responsabilidades operativas y técnicas en la cadena de valor.');

                return (
                  <div
                    key={role}
                    className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs transition-colors hover:border-slate-700/80 shadow-sm overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5 pb-1.5 border-b border-slate-800/80">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                        <span>Obligación como</span>
                        <span className="text-indigo-400 font-mono truncate">
                          {roleMeta?.shortLabel || role}
                        </span>
                      </span>
                      {roleMeta?.articleRef && (
                        <span className="font-mono text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-800/90 border border-slate-700/50 shrink-0">
                          {roleMeta.articleRef}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{obligation}</p>
                  </div>
                );
              })}
            </div>

            {/* Actionable checklist */}
            {enterpriseImpact?.actionItems && enterpriseImpact.actionItems.length > 0 && (
              <div className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 mb-2 font-semibold text-slate-200">
                  <ListChecks className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Acciones de cumplimiento recomendadas:</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {enterpriseImpact.actionItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sanctions & Penalty info */}
            {enterpriseImpact?.penaltyInfo && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs max-w-full overflow-hidden">
                <div className="flex items-start gap-2 mb-2 min-w-0">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-rose-300">
                      Régimen Sancionador Aplicable (Art. 99)
                    </h4>
                    <p className="text-slate-300 mt-0.5 text-[11px] leading-relaxed">
                      El incumplimiento grave de estas obligaciones puede acarrear multas de hasta{' '}
                      <span className="font-bold font-mono text-rose-200">
                        {enterpriseImpact.penaltyInfo.maxFineEuros}
                      </span>{' '}
                      o el{' '}
                      <span className="font-bold font-mono text-rose-200">
                        {enterpriseImpact.penaltyInfo.maxTurnoverPct}
                      </span>
                      {enterpriseImpact.penaltyInfo.maxTurnoverPct
                        .toLowerCase()
                        .includes('volumen')
                        ? ' del ejercicio financiero anterior.'
                        : ' del volumen de negocio anual global de la empresa.'}
                    </p>
                  </div>
                </div>

                {enterpriseImpact.penaltyInfo.citation && (
                  <div className="pt-2 border-t border-rose-500/20 flex flex-wrap items-center justify-between gap-1.5 min-w-0">
                    <span className="text-[10px] text-slate-400 font-mono shrink-0">
                      Precepto sancionador:
                    </span>
                    <CitationBadge
                      citation={enterpriseImpact.penaltyInfo.citation}
                      onSelect={onNavigateCitation}
                      size="xs"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* SECTION: CONSIDERANDOS Y ANEXOS VINCULADOS */}
        <section aria-labelledby="section-linked-recitals">
          <div className="flex items-center gap-2 mb-2.5">
            <BookOpen className="w-4 h-4 text-violet-400 shrink-0" />
            <h3
              id="section-linked-recitals"
              className="text-xs font-semibold uppercase tracking-wider text-violet-300 font-mono"
            >
              Considerandos y Anexos vinculados
            </h3>
          </div>

          <div className="space-y-2">
            {linkedRecitals.length === 0 && linkedAnnexes.length === 0 ? (
              <p className="text-xs text-slate-400 italic p-3 rounded bg-slate-900/50 border border-slate-800">
                Sin considerandos directos enlazados en este apartado.
              </p>
            ) : (
              <>
                {linkedRecitals.map((rec) => (
                  <div
                    key={rec.id}
                    onClick={() =>
                      onNavigateCitation({
                        citationId: `EU-2024-1689:${rec.id}`,
                        boeId,
                        eliUri: externalUrl,
                        targetType: 'recital',
                        articleId: rec.id,
                        displayLabel: `Considerando (${rec.number})`,
                        exactQuote: rec.plainSummary || rec.officialText.slice(0, 200),
                      })
                    }
                    className="group cursor-pointer p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-violet-500/50 transition-all text-xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono font-semibold text-violet-300 group-hover:text-violet-200">
                        Considerando ({rec.number})
                      </span>
                      <RiskBadge level={rec.riskLevel} size="xs" />
                    </div>
                    <p className="text-slate-300 line-clamp-2 text-[11px] leading-relaxed">
                      {rec.plainSummary || rec.officialText}
                    </p>
                  </div>
                ))}

                {linkedAnnexes.map((anx) => (
                  <div
                    key={anx.id}
                    onClick={() =>
                      onNavigateCitation({
                        citationId: `EU-2024-1689:${anx.id}`,
                        boeId,
                        eliUri: externalUrl,
                        targetType: 'annex',
                        articleId: anx.id,
                        displayLabel: `Anexo ${anx.roman} — ${anx.heading}`,
                        exactQuote: anx.summary,
                      })
                    }
                    className="group cursor-pointer p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-sky-500/50 transition-all text-xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1 min-w-0">
                      <span className="font-mono font-semibold text-sky-300 group-hover:text-sky-200 truncate">
                        Anexo {anx.roman}: {anx.heading}
                      </span>
                      <RiskBadge level={anx.riskLevel} size="xs" />
                    </div>
                    <p className="text-slate-300 line-clamp-2 text-[11px] leading-relaxed">
                      {anx.summary}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        {/* SECTION: CONEXIONES SEMÁNTICAS (VECTOR SEARCH) */}
        <section aria-labelledby="section-vector-similar">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
              <h3
                id="section-vector-similar"
                className="text-xs font-semibold uppercase tracking-wider text-emerald-300 font-mono"
              >
                Conexiones Semánticas (Vector Search)
              </h3>
            </div>
            <span className="text-[10px] font-mono text-slate-400">128-dim cosine</span>
          </div>

          <div className="space-y-2">
            {semanticConnections.length === 0 ? (
              <p className="text-xs text-slate-400 italic p-3 rounded bg-slate-900/50 border border-slate-800">
                Seleccione un apartado para proyectar similitud semántica.
              </p>
            ) : (
              semanticConnections.map((sim) => {
                const pct = Math.round(sim.cosineSimilarity * 100);
                return (
                  <div
                    key={`${sim.id}-${sim.vectorIndex}`}
                    onClick={() => onNavigateCitation(sim.citation)}
                    className="group cursor-pointer p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 transition-all text-xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono font-semibold text-slate-200 group-hover:text-emerald-300 truncate">
                        {sim.label}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                          {pct}% sim
                        </span>
                        <RiskBadge level={sim.riskLevel} size="xs" showDot={false} />
                      </div>
                    </div>
                    <p className="text-slate-300 text-[11px] line-clamp-2 leading-relaxed">
                      {sim.snippet}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
