import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  LegalVectorEngine,
  resolveOfficialExternalUrl,
  isLeadInParagraph,
} from '../services/vectorStore';
import {
  EnterpriseRole,
  LegalCitation,
  LegalArticle,
  LegalParagraph,
  LegalRecital,
  LegalAnnex,
  BoePosteriorUpdate,
  RiskLevel,
} from '../types/legal.types';
import { SelectedProvisionState } from '../hooks/useLegalStore';
import { RiskBadge, RISK_METADATA } from '../components/shared/RiskBadge';
import { CitationBadge } from '../components/shared/CitationBadge';
import { SegmentedFilterBar, FilterOption } from '../components/shared/SegmentedFilterBar';
import { SplitViewLayout } from '../components/shared/SplitViewLayout';
import { ParagraphInspector } from '../components/legal/ParagraphInspector';
import { MultiRoleSelector } from '../components/shared/MultiRoleSelector';
import {
  Search,
  BookOpen,
  Scale,
  Layers,
  FileText,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Building2,
  Calendar,
  Filter,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

export interface InteractiveLawViewProps {
  engine: LegalVectorEngine;
  selectedProvision: SelectedProvisionState;
  onSelectProvision: (state: SelectedProvisionState) => void;
  selectedRole: EnterpriseRole;
  onSelectRole: (role: EnterpriseRole) => void;
  onNavigateCitation: (citation: LegalCitation) => void;
  onStartArticleQuiz: (articleId: string) => void;
  selectedRoles?: EnterpriseRole[];
  onToggleRole?: (role: EnterpriseRole) => void;
  onSetRoles?: (roles: EnterpriseRole[]) => void;
}

type RailTab = 'articles' | 'recitals' | 'annexes' | 'boe_updates';

const RAIL_TABS: FilterOption<RailTab>[] = [
  { id: 'articles', label: 'Artículos', count: '113' },
  { id: 'recitals', label: 'Cons.', count: '180' },
  { id: 'annexes', label: 'Anexos', count: '13' },
  { id: 'boe_updates', label: 'BOE', count: 'AESIA' },
];

const RISK_FILTER_OPTIONS: FilterOption<string>[] = [
  { id: 'all', label: 'Todos los Riesgos' },
  { id: 'unacceptable', label: 'Prohibido (Art. 5)' },
  { id: 'high', label: 'Alto Riesgo (Art. 6)' },
  { id: 'gpai', label: 'GPAI (Arts. 51-55)' },
  { id: 'transparency', label: 'Transparencia (Art. 50)' },
  { id: 'minimal', label: 'Riesgo Mínimo (Art. 95)' },
];

export const InteractiveLawView: React.FC<InteractiveLawViewProps> = ({
  engine,
  selectedProvision,
  onSelectProvision,
  selectedRole,
  onSelectRole,
  onNavigateCitation,
  onStartArticleQuiz,
  selectedRoles,
  onToggleRole,
  onSetRoles,
}) => {
  const [activeRailTab, setActiveRailTab] = useState<RailTab>('articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [riskFilter, setRiskFilter] = useState<string>('all');
  const [expandedTitleId, setExpandedTitleId] = useState<string | null>('tit_II');
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });
  const [isLeftRailCollapsed, setIsLeftRailCollapsed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [isSiriGlowing, setIsSiriGlowing] = useState<boolean>(false);
  const readerContainerRef = useRef<HTMLElement | null>(null);
  const lastSelectedKeyRef = useRef<string | null>(null);
  const siriTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Close mobile drawer and reset consecutive tap tracking
  const closeMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
    lastSelectedKeyRef.current = null;
  };

  // When drawer closes by any means, clear consecutive tap tracking so next tap previews with glow
  useEffect(() => {
    if (!isMobileDrawerOpen) {
      lastSelectedKeyRef.current = null;
    }
  }, [isMobileDrawerOpen]);

  // Responsive mobile tracking (< 1024px) & ghost state cleanup
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileDrawerOpen(false);
        lastSelectedKeyRef.current = null;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cleanup Siri glow timer on unmount
  useEffect(() => {
    return () => {
      if (siriTimeoutRef.current) {
        clearTimeout(siriTimeoutRef.current);
      }
    };
  }, []);

  // Keyboard navigation: Escape minimizes mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileDrawerOpen) {
        closeMobileDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileDrawerOpen]);

  // Touch swipe-down handler for mobile drawer top bar
  const handleHeaderTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleHeaderTouchEnd = (e: React.TouchEvent) => {
    if (touchStartYRef.current !== null) {
      const diff = e.changedTouches[0].clientY - touchStartYRef.current;
      if (diff > 45) {
        closeMobileDrawer();
      }
      touchStartYRef.current = null;
    }
  };

  const triggerSiriGlow = () => {
    setIsSiriGlowing(true);
    if (siriTimeoutRef.current) {
      clearTimeout(siriTimeoutRef.current);
    }
    siriTimeoutRef.current = setTimeout(() => {
      setIsSiriGlowing(false);
    }, 1800);
  };

  const activeRoles: EnterpriseRole[] = useMemo(() => {
    if (selectedRoles && selectedRoles.length > 0) return selectedRoles;
    return [selectedRole];
  }, [selectedRoles, selectedRole]);

  const handleToggleRole = (role: EnterpriseRole) => {
    if (onToggleRole) {
      onToggleRole(role);
    } else {
      onSelectRole(role);
    }
  };

  // Currently selected entities
  const currentArticle: LegalArticle | undefined = useMemo(() => {
    return engine.getArticle(selectedProvision.articleId) || engine.corpus.articles[4]; // Default to art_5
  }, [engine, selectedProvision.articleId]);

  const currentRecital: LegalRecital | undefined = useMemo(() => {
    if (selectedProvision.recitalId) {
      return engine.getRecital(selectedProvision.recitalId);
    }
    return undefined;
  }, [engine, selectedProvision.recitalId]);

  const currentAnnex: LegalAnnex | undefined = useMemo(() => {
    if (selectedProvision.annexId) {
      return engine.getAnnex(selectedProvision.annexId);
    }
    return undefined;
  }, [engine, selectedProvision.annexId]);

  // Memoized currently selected paragraph (skips non-interactive introductory lead-in paragraphs)
  const currentParagraph: LegalParagraph | undefined = useMemo(() => {
    if (selectedProvision.recitalId) return undefined;
    if (selectedProvision.paragraphId) {
      const resolved = engine.getParagraph(selectedProvision.paragraphId);
      if (resolved) {
        // If the targeted paragraph is an introductory lead-in line, advance to the first substantive paragraph
        if (isLeadInParagraph(resolved, currentArticle?.paragraphs)) {
          const firstSubstantive = currentArticle?.paragraphs.find(
            (p) => !isLeadInParagraph(p, currentArticle.paragraphs)
          );
          return firstSubstantive || resolved;
        }
        return resolved;
      }
    }
    if (selectedProvision.annexId && currentAnnex) {
      if (selectedProvision.paragraphId) {
        const resolvedAnx = currentAnnex.paragraphs.find((p) => p.id === selectedProvision.paragraphId);
        if (resolvedAnx && !isLeadInParagraph(resolvedAnx, currentAnnex.paragraphs)) return resolvedAnx;
      }
      const firstSubstantiveAnnex = currentAnnex.paragraphs.find(
        (p) => !isLeadInParagraph(p, currentAnnex.paragraphs)
      );
      return firstSubstantiveAnnex || currentAnnex.paragraphs[0];
    }
    // Default to the first substantive paragraph of the current article
    const firstSubstantive = currentArticle?.paragraphs.find(
      (p) => !isLeadInParagraph(p, currentArticle.paragraphs)
    );
    return firstSubstantive || currentArticle?.paragraphs[0];
  }, [engine, selectedProvision.recitalId, selectedProvision.paragraphId, selectedProvision.annexId, currentAnnex, currentArticle]);

  // Automatically sync Rail Tab, expanded Title, and scroll paragraph into view on citation jump
  useEffect(() => {
    if (selectedProvision.boeUpdateId) {
      setActiveRailTab('boe_updates');
    } else if (selectedProvision.recitalId) {
      setActiveRailTab('recitals');
    } else if (selectedProvision.annexId) {
      setActiveRailTab('annexes');
    } else if (selectedProvision.articleId) {
      setActiveRailTab('articles');
      const art = engine.getArticle(selectedProvision.articleId);
      if (art) {
        setExpandedTitleId(art.titleId);
      }
    }

    const timer = window.setTimeout(() => {
      if (!readerContainerRef.current) return;
      if (selectedProvision.paragraphId) {
        const resolved = engine.getParagraph(selectedProvision.paragraphId);
        const targetId = resolved?.id || selectedProvision.paragraphId;
        const el = readerContainerRef.current.querySelector<HTMLElement>(
          `[data-paragraph-id="${targetId}"]`
        );
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }
      readerContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }, 60);

    return () => window.clearTimeout(timer);
  }, [
    engine,
    selectedProvision.articleId,
    selectedProvision.paragraphId,
    selectedProvision.recitalId,
    selectedProvision.annexId,
    selectedProvision.boeUpdateId,
  ]);

  // Filtered Articles grouped by Title
  const filteredTitles = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const rf = riskFilter;

    return engine.corpus.titles
      .map((title) => {
        const titleArticles = title.articleIds
          .map((id) => engine.getArticle(id))
          .filter((art): art is LegalArticle => Boolean(art))
          .filter((art) => {
            if (rf !== 'all' && art.riskLevel !== rf) return false;
            if (!q) return true;
            return (
              art.titleLabel.toLowerCase().includes(q) ||
              art.heading.toLowerCase().includes(q) ||
              art.summary.toLowerCase().includes(q) ||
              art.id.toLowerCase().includes(q) ||
              art.paragraphs.some((p) => p.officialText.toLowerCase().includes(q))
            );
          });

        return {
          ...title,
          articles: titleArticles,
        };
      })
      .filter((t) => t.articles.length > 0);
  }, [engine, searchQuery, riskFilter]);

  // Filtered Recitals
  const filteredRecitals = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const rf = riskFilter;

    return engine.corpus.recitals.filter((r) => {
      if (rf !== 'all' && r.riskLevel !== rf) return false;
      if (!q) return true;
      return (
        r.id.toLowerCase().includes(q) ||
        r.number.toString().includes(q) ||
        r.officialText.toLowerCase().includes(q) ||
        r.plainSummary.toLowerCase().includes(q)
      );
    });
  }, [engine, searchQuery, riskFilter]);

  // Filtered Annexes
  const filteredAnnexes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const rf = riskFilter;

    return engine.corpus.annexes.filter((anx) => {
      if (rf !== 'all' && anx.riskLevel !== rf) return false;
      if (!q) return true;
      return (
        anx.id.toLowerCase().includes(q) ||
        anx.roman.toLowerCase().includes(q) ||
        anx.title.toLowerCase().includes(q) ||
        anx.heading.toLowerCase().includes(q) ||
        anx.summary.toLowerCase().includes(q)
      );
    });
  }, [engine, searchQuery, riskFilter]);

  // Filtered BOE updates
  const filteredBoeUpdates = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return engine.corpus.boeUpdates.filter((u) => {
      if (!q) return true;
      return (
        u.boeId.toLowerCase().includes(q) ||
        u.title.toLowerCase().includes(q) ||
        u.relationship.toLowerCase().includes(q) ||
        u.enterpriseImplication.toLowerCase().includes(q)
      );
    });
  }, [engine, searchQuery]);

  // Select article handler (targets first substantive paragraph, skipping introductory lead-ins)
  const handleSelectArticle = (art: LegalArticle) => {
    const firstSubstantive = art.paragraphs.find((p) => !isLeadInParagraph(p, art.paragraphs));
    const targetKey = art.id;
    onSelectProvision({
      articleId: art.id,
      paragraphId: firstSubstantive?.id || art.paragraphs[0]?.id,
    });
    setExpandedTitleId(art.titleId);
    setIsInspectorOpen(true);

    if (isMobile) {
      setIsLeftRailCollapsed(true);
      if (isMobileDrawerOpen) {
        lastSelectedKeyRef.current = targetKey;
      } else {
        if (lastSelectedKeyRef.current === targetKey) {
          setIsMobileDrawerOpen(true);
          setIsSiriGlowing(false);
        } else {
          lastSelectedKeyRef.current = targetKey;
          triggerSiriGlow();
        }
      }
    }
  };

  // Select paragraph handler (ignores non-interactive introductory lead-in lines)
  const handleSelectParagraph = (p: LegalParagraph) => {
    const activeParas = selectedProvision.annexId && currentAnnex ? currentAnnex.paragraphs : currentArticle?.paragraphs;
    if (isLeadInParagraph(p, activeParas)) return;
    const targetKey = p.id;
    onSelectProvision({
      articleId: p.articleId.startsWith('art_') ? p.articleId : selectedProvision.articleId,
      paragraphId: p.id,
      annexId: selectedProvision.annexId,
    });
    setIsInspectorOpen(true);

    if (isMobile) {
      if (isMobileDrawerOpen) {
        lastSelectedKeyRef.current = targetKey;
      } else {
        if (lastSelectedKeyRef.current === targetKey) {
          setIsMobileDrawerOpen(true);
          setIsSiriGlowing(false);
        } else {
          lastSelectedKeyRef.current = targetKey;
          triggerSiriGlow();
        }
      }
    }
  };

  // Select recital handler
  const handleSelectRecital = (r: LegalRecital) => {
    const targetKey = r.id;
    onSelectProvision({
      articleId: r.linkedArticles[0] || 'art_1',
      recitalId: r.id,
    });
    setIsInspectorOpen(true);

    if (isMobile) {
      setIsLeftRailCollapsed(true);
      if (isMobileDrawerOpen) {
        lastSelectedKeyRef.current = targetKey;
      } else {
        if (lastSelectedKeyRef.current === targetKey) {
          setIsMobileDrawerOpen(true);
          setIsSiriGlowing(false);
        } else {
          lastSelectedKeyRef.current = targetKey;
          triggerSiriGlow();
        }
      }
    }
  };

  // Select annex handler
  const handleSelectAnnex = (anx: LegalAnnex) => {
    const targetKey = anx.id;
    const firstSubstantiveAnnex = anx.paragraphs.find((p) => !isLeadInParagraph(p, anx.paragraphs));
    onSelectProvision({
      articleId: anx.linkedArticles[0] || 'art_6',
      annexId: anx.id,
      paragraphId: firstSubstantiveAnnex?.id || anx.paragraphs[0]?.id,
    });
    setIsInspectorOpen(true);

    if (isMobile) {
      setIsLeftRailCollapsed(true);
      if (isMobileDrawerOpen) {
        lastSelectedKeyRef.current = targetKey;
      } else {
        if (lastSelectedKeyRef.current === targetKey) {
          setIsMobileDrawerOpen(true);
          setIsSiriGlowing(false);
        } else {
          lastSelectedKeyRef.current = targetKey;
          triggerSiriGlow();
        }
      }
    }
  };

  // Primary pane content
  const primaryContent = (
    <div className="flex h-full w-full">
      {/* Left Navigation Rail (Article / Recital / Annex / BOE Tree) */}
      {isLeftRailCollapsed ? (
        <aside
          className="w-10 shrink-0 h-full border-r border-slate-800/80 bg-slate-900/60 flex flex-col items-center py-3 gap-3 z-10 transition-all duration-200"
          aria-label="Índice legal colapsado"
        >
          <button
            type="button"
            onClick={() => setIsLeftRailCollapsed(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Expandir índice de la ley"
            aria-label="Expandir índice de la ley"
          >
            <PanelLeftOpen className="w-4 h-4 text-indigo-400" />
          </button>
          <div className="h-px w-5 bg-slate-800" />
          <button
            type="button"
            onClick={() => {
              setActiveRailTab('articles');
              setIsLeftRailCollapsed(false);
            }}
            className={`p-1.5 rounded-lg transition-colors ${
              activeRailTab === 'articles' ? 'bg-indigo-600/20 text-indigo-300' : 'text-slate-500 hover:text-slate-300'
            }`}
            title="Artículos (113)"
          >
            <BookOpen className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveRailTab('recitals');
              setIsLeftRailCollapsed(false);
            }}
            className={`p-1.5 rounded-lg transition-colors ${
              activeRailTab === 'recitals' ? 'bg-violet-600/20 text-violet-300' : 'text-slate-500 hover:text-slate-300'
            }`}
            title="Considerandos (180)"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveRailTab('annexes');
              setIsLeftRailCollapsed(false);
            }}
            className={`p-1.5 rounded-lg transition-colors ${
              activeRailTab === 'annexes' ? 'bg-amber-600/20 text-amber-300' : 'text-slate-500 hover:text-slate-300'
            }`}
            title="Anexos (13)"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveRailTab('boe_updates');
              setIsLeftRailCollapsed(false);
            }}
            className={`p-1.5 rounded-lg transition-colors ${
              activeRailTab === 'boe_updates' ? 'bg-emerald-600/20 text-emerald-300' : 'text-slate-500 hover:text-slate-300'
            }`}
            title="BOE & AESIA"
          >
            <Scale className="w-4 h-4" />
          </button>
          <div className="mt-auto">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono tracking-wider text-slate-500 uppercase">
              Índice
            </span>
          </div>
        </aside>
      ) : (
        <aside className="w-64 xl:w-72 shrink-0 h-full border-r border-slate-800/80 bg-slate-900/50 flex flex-col transition-all duration-200">
          {/* Rail Header with Tabs & Collapse Button */}
          <div className="p-3 border-b border-slate-800/80 space-y-2.5">
            <div className="flex items-center justify-between pb-0.5">
              <div className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Índice Oficial
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsLeftRailCollapsed(true)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Colapsar índice lateral"
                aria-label="Colapsar índice lateral"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            </div>

            <SegmentedFilterBar
              options={RAIL_TABS}
              value={activeRailTab}
              onChange={(tab) => {
                setActiveRailTab(tab);
                setSearchQuery('');
              }}
              size="sm"
              className="w-full"
            />

            {/* Search and Risk Filter Bar */}
            <div className="space-y-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    activeRailTab === 'articles'
                      ? 'Buscar art, término ("biometría")...'
                      : activeRailTab === 'recitals'
                      ? 'Buscar considerando...'
                      : activeRailTab === 'annexes'
                      ? 'Buscar anexo o ámbito...'
                      : 'Buscar norma BOE o AESIA...'
                  }
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>

              {activeRailTab !== 'boe_updates' && (
                <select
                  value={riskFilter}
                  onChange={(e) => setRiskFilter(e.target.value)}
                  className="w-full bg-slate-950/70 border border-slate-800/80 rounded-md px-2 py-1 text-[11px] text-slate-300 focus:outline-none focus:border-indigo-500/60"
                >
                  {RISK_FILTER_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

        {/* Rail Scrollable List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 text-xs">
          {activeRailTab === 'articles' && (
            <div className="space-y-3">
              {filteredTitles.map((title) => {
                const isExpanded = expandedTitleId === title.id || searchQuery.length > 0;
                return (
                  <div key={title.id} className="rounded-lg border border-slate-800/60 bg-slate-900/40 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setExpandedTitleId(isExpanded && !searchQuery ? null : title.id)}
                      className="w-full text-left p-2.5 bg-slate-900/80 hover:bg-slate-850 flex items-center justify-between gap-2 border-b border-slate-800/40 select-none transition-colors"
                    >
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] font-bold text-indigo-400 block uppercase">
                          {title.roman ? `TÍTULO ${title.roman} (CAPÍTULO ${title.roman})` : title.name}
                        </span>
                        <p className="text-xs font-semibold text-slate-200 truncate mt-0.5">
                          {title.name.replace(/^TÍTULO\s+[IVXLC]+(?:\s*\([^)]+\))?\s*[—-]\s*/i, '')}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {title.articles.length}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="p-1 space-y-0.5 bg-slate-950/30">
                        {title.articles.map((art) => {
                          const isSelected = selectedProvision.articleId === art.id && !selectedProvision.recitalId && !selectedProvision.annexId;
                          return (
                            <button
                              key={art.id}
                              type="button"
                              onClick={() => handleSelectArticle(art)}
                              className={`w-full text-left px-2.5 py-2 rounded-md transition-all duration-150 flex items-start justify-between gap-2 ${
                                isSelected
                                  ? 'bg-indigo-600/20 border border-indigo-500/40 text-white shadow-sm'
                                  : 'hover:bg-slate-800/60 text-slate-300'
                              }`}
                            >
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-mono font-bold text-xs text-indigo-300 shrink-0">
                                    {art.titleLabel}
                                  </span>
                                  <RiskBadge level={art.riskLevel} size="xs" showDot={false} />
                                </div>
                                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                  {art.heading}
                                </p>
                              </div>
                              <span className="font-mono text-[10px] text-slate-500 shrink-0 mt-0.5">
                                {art.paragraphs.length} §
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeRailTab === 'recitals' && (
            <div className="space-y-1">
              {filteredRecitals.map((r, idx) => {
                const isSelected = selectedProvision.recitalId === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleSelectRecital(r)}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all duration-150 ${
                      idx >= 10 ? 'legal-block-deferred' : ''
                    } ${
                      isSelected
                        ? 'bg-violet-950/40 border-violet-500/50 text-white'
                        : 'border-slate-800/60 bg-slate-900/40 hover:bg-slate-800/60 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono font-bold text-xs text-violet-300">
                        Considerando ({r.number})
                      </span>
                      <RiskBadge level={r.riskLevel} size="xs" showDot={false} />
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                      {r.plainSummary || r.officialText}
                    </p>
                    {r.linkedArticles.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {r.linkedArticles.slice(0, 3).map((artId) => (
                          <span key={artId} className="font-mono text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400">
                            {artId.replace('art_', 'Art. ')}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {activeRailTab === 'annexes' && (
            <div className="space-y-1.5">
              {filteredAnnexes.map((anx) => {
                const isSelected = selectedProvision.annexId === anx.id;
                return (
                  <button
                    key={anx.id}
                    type="button"
                    onClick={() => handleSelectAnnex(anx)}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all duration-150 ${
                      isSelected
                        ? 'bg-amber-950/40 border-amber-500/50 text-white'
                        : 'border-slate-800/60 bg-slate-900/40 hover:bg-slate-850 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono font-bold text-xs text-amber-300">
                        ANEXO {anx.roman}
                      </span>
                      <RiskBadge level={anx.riskLevel} size="xs" showDot={false} />
                    </div>
                    <p className="text-xs font-semibold text-slate-200 mt-1 line-clamp-1">
                      {anx.title}
                    </p>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                      {anx.summary}
                    </p>
                  </button>
                );
              })}
            </div>
          )}

          {activeRailTab === 'boe_updates' && (
            <div className="space-y-2">
              {filteredBoeUpdates.map((update, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-slate-800/70 bg-slate-900/40 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {update.relationship}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">{update.date}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-200 leading-snug">
                    {update.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {update.enterpriseImplication}
                  </p>
                  <div className="pt-1">
                    <CitationBadge citation={update.citation} onSelect={onNavigateCitation} size="xs" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
      )}

      {/* Center Column: Reader + Mobile Inspector Bottom Dock */}
      <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden">
        {/* Center Reader ("La Ley con Vuelta de Tuerca") */}
        <section ref={readerContainerRef} className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Top Control Bar: Multi-Role Selector & Inspector Toggle */}
        <div className="w-full max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[11px] font-mono uppercase text-slate-400 whitespace-nowrap shrink-0">
              Roles:
            </span>
            <MultiRoleSelector
              selectedRoles={activeRoles}
              onToggleRole={handleToggleRole}
              onSetRoles={onSetRoles}
              compact
            />
          </div>

          <button
            type="button"
            onClick={() => {
              if (isMobile) {
                setIsMobileDrawerOpen((prev) => !prev);
              } else {
                setIsInspectorOpen((prev) => !prev);
              }
            }}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors shrink-0 ${
              (isMobile ? isMobileDrawerOpen : isInspectorOpen)
                ? 'bg-indigo-600/20 border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/30'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
            }`}
            title="Mostrar u Ocultar Inspector"
            aria-label="Mostrar u Ocultar Inspector"
          >
            {(isMobile ? isMobileDrawerOpen : isInspectorOpen) ? (
              <PanelRightClose className="w-3.5 h-3.5" />
            ) : (
              <PanelRightOpen className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">
              {(isMobile ? isMobileDrawerOpen : isInspectorOpen) ? 'Ocultar Inspector' : 'Ver Inspector'}
            </span>
          </button>
        </div>

        {/* Recital View Mode */}
        {selectedProvision.recitalId && currentRecital && (
          <div className="w-full max-w-3xl mx-auto min-w-0 break-words space-y-6">
            <div className="p-4 rounded-xl border border-violet-500/30 bg-violet-950/20 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-violet-300 uppercase tracking-wider">
                  Considerando ({currentRecital.number}) · Fundamento Jurídico Oficial
                </span>
                <RiskBadge level={currentRecital.riskLevel} size="xs" />
              </div>
              <h2 className="text-lg font-bold text-white">
                Fundamento e Intención del Legislador Europeo
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentRecital.plainSummary}
              </p>
            </div>

            <article className="p-6 rounded-xl border border-slate-800 bg-slate-900 space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Texto íntegro oficial (EUR-Lex / DOUE-L-2024-81079)
                </span>
                <CitationBadge
                  citation={{
                    citationId: `EU-2024-1689:${currentRecital.id}`,
                    boeId: engine.corpus.metadata.boeId,
                    eliUri: engine.corpus.metadata.eliUri,
                    targetType: 'recital',
                    articleId: currentRecital.id,
                    displayLabel: `Considerando (${currentRecital.number}) · Reglamento (UE) 2024/1689`,
                    exactQuote: currentRecital.officialText,
                  }}
                  onSelect={onNavigateCitation}
                  size="sm"
                />
              </div>

              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed font-serif pl-4 border-l-2 border-violet-500 italic">
                &ldquo;{currentRecital.officialText}&rdquo;
              </blockquote>

              {currentRecital.linkedArticles.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    Artículos reglamentarios fundamentados por este considerando:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentRecital.linkedArticles.map((artId) => {
                      const linkedArt = engine.getArticle(artId);
                      return linkedArt ? (
                        <button
                          key={artId}
                          type="button"
                          onClick={() => handleSelectArticle(linkedArt)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-mono text-indigo-300 transition-colors"
                        >
                          <Scale className="w-3.5 h-3.5" />
                          <span>{linkedArt.titleLabel}: {linkedArt.heading}</span>
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </article>
          </div>
        )}

        {/* Annex View Mode */}
        {selectedProvision.annexId && currentAnnex && (
          <div className="w-full max-w-3xl mx-auto min-w-0 break-words space-y-6">
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-amber-300 uppercase tracking-wider">
                  ANEXO {currentAnnex.roman} · Reglamento (UE) 2024/1689
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={resolveOfficialExternalUrl({ annexId: currentAnnex.id, targetType: 'annex' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-[11px] font-mono transition-colors"
                    title={`Abrir Anexo ${currentAnnex.roman} (#${currentAnnex.id}) directamente en EUR-Lex HTML`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>EUR-Lex (#{currentAnnex.id})</span>
                  </a>
                  <RiskBadge level={currentAnnex.riskLevel} size="xs" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-white">
                {currentAnnex.title}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentAnnex.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
              <span className="font-mono text-xs text-indigo-400 uppercase font-semibold block">
                Relevancia e Impacto para la Empresa:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentAnnex.enterpriseRelevance}
              </p>
            </div>

            {/* Annex Paragraphs */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                Estructura y Párrafos del Anexo {currentAnnex.roman}:
              </h3>

              {currentAnnex.paragraphs.map((p, idx) => {
                const isLeadIn = isLeadInParagraph(p, currentAnnex.paragraphs);
                const isBulletItem = /^[—–-]/.test(p.numberLabel || '') || /^[—–-]\s+/.test(p.officialText.trim());

                // Non-interactive introductory chapeau or subordinate enumeration
                if (isLeadIn || isBulletItem) {
                  return (
                    <div
                      key={p.id}
                      data-paragraph-id={p.id}
                      className="py-3 px-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left my-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {isLeadIn ? 'Disposición introductoria' : 'Enumeración subordinada'}
                        </span>
                        {p.numberLabel && (
                          <span className="font-mono text-xs font-semibold text-slate-300">
                            {p.numberLabel}
                          </span>
                        )}
                      </div>
                      <p className="font-sans font-medium text-slate-200 text-xs sm:text-sm leading-relaxed select-text pl-0.5 whitespace-pre-line">
                        {p.officialText}
                      </p>
                    </div>
                  );
                }

                const isSelected = currentParagraph?.id === p.id;
                const isDeferred = idx >= 6;

                return (
                  <div
                    key={p.id}
                    data-paragraph-id={p.id}
                    onClick={() => handleSelectParagraph(p)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-150 ${
                      isSelected
                        ? 'border-indigo-500 bg-slate-900 shadow-lg ring-1 ring-indigo-500/40'
                        : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-850'
                    } ${isDeferred ? 'legal-block-deferred' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800/60">
                      <span className="font-mono font-bold text-xs text-amber-400">
                        {p.numberLabel
                          ? p.numberLabel.startsWith('Párrafo')
                            ? p.numberLabel
                            : `Punto ${p.numberLabel}`
                          : `Punto ${idx + 1}.`}
                      </span>
                      <RiskBadge level={p.riskLevel} size="xs" showDot={false} />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                      {p.officialText}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="text-indigo-400">Clic para inspeccionar en el panel lateral →</span>
                      <span className="font-mono text-[10px] text-slate-500">{p.id}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Standard Article View Mode */}
        {!selectedProvision.recitalId && !selectedProvision.annexId && currentArticle && (
          <div className="w-full max-w-3xl mx-auto min-w-0 break-words space-y-6">
            {/* Title / Article Header Banner */}
            <header className="space-y-3 pb-4 border-b border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {currentArticle.titleName}
                </span>
                <RiskBadge level={currentArticle.riskLevel} size="sm" />
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {currentArticle.titleLabel}: {currentArticle.heading}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  {currentArticle.summary}
                </p>
              </div>

              {/* Enterprise Takeaway Highlight Box */}
              <div className="p-3.5 rounded-lg border border-indigo-500/30 bg-indigo-950/20 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-slate-200">
                  <strong className="text-indigo-300 font-semibold block mb-0.5">
                    Conclusión ejecutiva para la empresa:
                  </strong>
                  {currentArticle.enterpriseTakeaway}
                </div>
              </div>

              {/* Action buttons bar */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <CitationBadge
                  citation={{
                    citationId: `EU-2024-1689:${currentArticle.id}`,
                    boeId: engine.corpus.metadata.boeId,
                    eliUri: engine.corpus.metadata.eliUri,
                    targetType: 'article',
                    articleId: currentArticle.id,
                    displayLabel: `${currentArticle.titleLabel} · Reglamento (UE) 2024/1689`,
                    exactQuote: currentArticle.summary,
                  }}
                  onSelect={onNavigateCitation}
                  size="sm"
                />

                {currentArticle.paragraphs.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onStartArticleQuiz(currentArticle.id)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-xs font-medium border border-indigo-500/40 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Test de este Artículo</span>
                  </button>
                )}

                <a
                  href={resolveOfficialExternalUrl({ articleId: currentArticle.id, targetType: 'article' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-mono border border-emerald-500/30 transition-colors"
                  title={`Abrir ${currentArticle.titleLabel} (#${currentArticle.id}) directamente en EUR-Lex HTML`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ir a EUR-Lex Oficial (#{currentArticle.id})</span>
                </a>
              </div>
            </header>

            {/* Paragraphs Reader ("Vuelta de Tuerca" on click) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono uppercase tracking-wider font-semibold">
                  Articulado Oficial EUR-Lex ({currentArticle.paragraphs.filter((p) => !isLeadInParagraph(p, currentArticle.paragraphs)).length} apartados interactivos)
                </span>
                <span>Haga clic en cualquier apartado para abrir su análisis empresarial</span>
              </div>

              {currentArticle.paragraphs.map((p, idx) => {
                const isLeadIn = isLeadInParagraph(p, currentArticle.paragraphs);
                const isBulletItem = /^[—–-]/.test(p.numberLabel || '') || /^[—–-]\s+/.test(p.officialText.trim());

                // Non-interactive structural lead-in / chapeau heading or subordinate enumeration
                if (isLeadIn || isBulletItem) {
                  return (
                    <div
                      key={p.id}
                      data-paragraph-id={p.id}
                      className="py-3 px-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left my-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                          {isLeadIn ? 'Disposición introductoria' : 'Enumeración subordinada'}
                        </span>
                        {p.numberLabel && (
                          <span className="font-mono text-xs font-semibold text-slate-300">
                            {p.numberLabel}
                          </span>
                        )}
                        <span className="text-slate-500 text-xs">·</span>
                        <span className="text-xs text-slate-400 italic">
                          {isLeadIn ? 'Enumera los apartados siguientes:' : 'Elemento enumerado:'}
                        </span>
                      </div>
                      <p className="font-sans font-medium text-slate-200 text-sm sm:text-[15px] leading-relaxed select-text pl-0.5 whitespace-pre-line">
                        {p.officialText}
                      </p>
                    </div>
                  );
                }

                const isSelected = currentParagraph?.id === p.id;
                const isDeferred = idx >= 6;
                const riskMeta = RISK_METADATA[p.riskLevel] ?? RISK_METADATA.minimal;

                return (
                  <article
                    key={p.id}
                    data-paragraph-id={p.id}
                    onClick={() => handleSelectParagraph(p)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isSelected}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelectParagraph(p);
                      }
                    }}
                    className={`group relative rounded-xl border p-4 sm:p-5 transition-all duration-150 cursor-pointer select-none text-left ${
                      isSelected
                        ? `bg-slate-900 border-indigo-500/80 shadow-md ring-1 ring-indigo-500/40`
                        : `bg-slate-900/50 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700/80`
                    } ${isDeferred ? 'legal-block-deferred' : ''}`}
                  >
                    {/* Left Risk Indicator Bar */}
                    <div
                      className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${
                        isSelected ? 'bg-indigo-500' : riskMeta.dotClass
                      }`}
                      aria-hidden="true"
                    />

                    {/* Paragraph Header */}
                    <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-800/60 pl-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-indigo-300">
                          {p.numberLabel ? `${currentArticle.titleLabel}, ${p.numberLabel}` : `${currentArticle.titleLabel}`}
                        </span>
                        <RiskBadge level={p.riskLevel} size="xs" showDot={false} />
                      </div>

                      <div className="flex items-center gap-2">
                        {p.relatedRecitals && p.relatedRecitals.length > 0 && (
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">
                            {p.relatedRecitals.length} {p.relatedRecitals.length === 1 ? 'cons.' : 'cons.'}
                          </span>
                        )}
                        {p.enterpriseImpact?.actionItems && p.enterpriseImpact.actionItems.length > 0 && (
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            {p.enterpriseImpact.actionItems.length} deberes
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Official Paragraph Text */}
                    <p className="text-slate-100 text-sm sm:text-[15px] leading-relaxed font-sans pl-2 select-text whitespace-pre-line">
                      {p.officialText}
                    </p>

                    {/* Footer cue */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400 pl-2">
                      <span className="text-[11px] text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        {isSelected ? '✓ Seleccionado en el Inspector Legal' : 'Clic para desplegar análisis empresarial y sanciones →'}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">
                        {p.id}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
        </section>

        {/* Mobile Inspector Bottom Dock (Fixed at bottom of mobile reader, with Siri EU Glow) */}
        <div
          data-testid="mobile-inspector-dock"
          onClick={() => {
            setIsMobileDrawerOpen(true);
            setIsSiriGlowing(false);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMobileDrawerOpen(true);
              setIsSiriGlowing(false);
            }
          }}
          className={`lg:hidden shrink-0 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md px-3.5 py-2.5 flex items-center justify-between gap-3 cursor-pointer select-none transition-all duration-200 shadow-lg ${
            isSiriGlowing ? 'eu-siri-glow bg-slate-900' : 'hover:bg-slate-850'
          }`}
          title="Toca para desplegar el inspector (60% pantalla)"
          aria-label="Desplegar inspector legal y empresarial"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 group-hover:scale-105 transition-transform">
              <ChevronUp className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-indigo-300 truncate">
                  {selectedProvision.annexId && currentAnnex
                    ? `Anexo ${currentAnnex.roman}${currentParagraph?.numberLabel ? ` (${currentParagraph.numberLabel})` : ''}`
                    : selectedProvision.recitalId && currentRecital
                    ? `Cons. ${currentRecital.number}`
                    : currentArticle
                    ? `Art. ${currentArticle.number}${currentParagraph?.numberLabel ? ` (${currentParagraph.numberLabel})` : ''}`
                    : 'Inspector Legal'}
                </span>
                <RiskBadge
                  level={currentParagraph?.riskLevel || currentArticle?.riskLevel || 'governance'}
                  size="xs"
                  showDot={false}
                />
              </div>
              <p className="text-[11px] text-slate-400 truncate max-w-[210px] sm:max-w-md">
                {isSiriGlowing
                  ? '★ ¡Actualizado! Toca de nuevo para abrir inspector'
                  : currentArticle?.heading || currentAnnex?.heading || 'Toca para abrir análisis empresarial'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <span className={`text-[11px] font-medium ${isSiriGlowing ? 'text-amber-300 font-bold' : 'text-slate-400'}`}>
              {isSiriGlowing ? 'Abrir (60%)' : 'Inspector'}
            </span>
            <ChevronUp className={`w-3.5 h-3.5 ${isSiriGlowing ? 'text-amber-300 animate-bounce' : 'text-indigo-400'}`} />
          </div>
        </div>
      </div>
    </div>
  );

  // Inspector pane content (desktop and mobile drawer)
  const inspectorContent = (
    <ParagraphInspector
      engine={engine}
      article={selectedProvision.recitalId || selectedProvision.annexId ? undefined : currentArticle}
      paragraph={selectedProvision.recitalId ? undefined : currentParagraph}
      recital={currentRecital}
      annex={currentAnnex}
      selectedRole={selectedRole}
      onSelectRole={onSelectRole}
      selectedRoles={activeRoles}
      onToggleRole={handleToggleRole}
      onSetRoles={onSetRoles}
      onCollapseInspector={() => {
        setIsInspectorOpen(false);
        closeMobileDrawer();
      }}
      onNavigateCitation={(cit) => {
        closeMobileDrawer();
        onNavigateCitation(cit);
      }}
      onStartArticleQuiz={onStartArticleQuiz}
    />
  );

  return (
    <div className="relative h-full w-full overflow-hidden">
      <SplitViewLayout
        primary={primaryContent}
        inspector={inspectorContent}
        inspectorOpen={isInspectorOpen}
        onToggleInspector={() => setIsInspectorOpen((prev) => !prev)}
        inspectorWidthClass="w-80 xl:w-96 2xl:w-[420px]"
      />

      {/* Mobile Drawer (up to 60vh from bottom, with header minimize button) */}
      <div
        data-testid="mobile-inspector-drawer"
        className={`fixed inset-x-0 bottom-0 z-50 h-[60vh] max-h-[60vh] bg-slate-900 border-t border-slate-700 shadow-2xl rounded-t-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          isMobileDrawerOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Inspector Legal y Empresarial (Versión Móvil)"
      >
        {/* Top Header with Drag Handle & Close/Minimize Button (Supports Swipe-Down Dismiss) */}
        <div
          onTouchStart={handleHeaderTouchStart}
          onTouchEnd={handleHeaderTouchEnd}
          className="shrink-0 px-4 pt-2.5 pb-2 border-b border-slate-800 bg-slate-950/80 rounded-t-2xl flex flex-col gap-1.5 touch-none select-none"
        >
          <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto shrink-0" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-xs text-white truncate">
                Inspector Legal y Empresarial
              </span>
              <RiskBadge
                level={currentParagraph?.riskLevel || currentArticle?.riskLevel || 'governance'}
                size="xs"
                showDot={false}
              />
            </div>
            <button
              type="button"
              data-testid="mobile-inspector-minimize-button"
              onClick={closeMobileDrawer}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 shadow-sm transition-colors cursor-pointer shrink-0"
              title="Minimizar inspector abajo del todo"
              aria-label="Minimizar inspector abajo del todo"
            >
              <ChevronDown className="w-4 h-4 text-indigo-400" />
              <span>Minimizar</span>
            </button>
          </div>
        </div>

        {/* Scrollable Drawer Inspector Content (Single-scroll container) */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          {inspectorContent}
        </div>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {isMobileDrawerOpen && (
        <div
          data-testid="mobile-inspector-backdrop"
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          onClick={closeMobileDrawer}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
