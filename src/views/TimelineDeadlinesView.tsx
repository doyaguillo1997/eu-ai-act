import React, { useState, useMemo, useEffect } from 'react';
import { LegalVectorEngine } from '../services/vectorStore';
import {
  EnterpriseRole,
  LegalCitation,
  TimelineMilestone,
  TimelineReadinessItem,
  RiskLevel,
} from '../types/legal.types';
import { RiskBadge } from '../components/shared/RiskBadge';
import { CitationBadge } from '../components/shared/CitationBadge';
import { SectionCard } from '../components/shared/SectionCard';
import { SegmentedFilterBar, FilterOption } from '../components/shared/SegmentedFilterBar';
import { MultiRoleSelector } from '../components/shared/MultiRoleSelector';
import { StatMetricCard } from '../components/shared/StatMetricCard';
import {
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Flag,
  ArrowRight,
  ShieldCheck,
  Building2,
  ListChecks,
  Scale,
  Sparkles,
  Info,
} from 'lucide-react';

export interface TimelineDeadlinesViewProps {
  engine: LegalVectorEngine;
  checkedReadinessIds: string[];
  onToggleReadinessItem: (id: string) => void;
  selectedRole: EnterpriseRole;
  onSelectRole: (role: EnterpriseRole) => void;
  onNavigateCitation: (citation: LegalCitation) => void;
  selectedRoles?: EnterpriseRole[];
  onToggleRole?: (role: EnterpriseRole) => void;
  onSetRoles?: (roles: EnterpriseRole[]) => void;
}

type ChecklistCategory = 'Todos' | 'Gobernanza' | 'Técnico' | 'Datos' | 'Legal' | 'Formación';

const CATEGORY_OPTIONS: FilterOption<ChecklistCategory>[] = [
  { id: 'Todos', label: 'Todas las Categorías' },
  { id: 'Gobernanza', label: 'Gobernanza' },
  { id: 'Técnico', label: 'Técnico / IT' },
  { id: 'Datos', label: 'Datos & Privacidad' },
  { id: 'Legal', label: 'Legal & Compliance' },
  { id: 'Formación', label: 'Formación & RRHH' },
];

export const TimelineDeadlinesView: React.FC<TimelineDeadlinesViewProps> = ({
  engine,
  checkedReadinessIds,
  onToggleReadinessItem,
  selectedRole,
  onSelectRole,
  onNavigateCitation,
  selectedRoles,
  onToggleRole,
  onSetRoles,
}) => {
  const milestones: TimelineMilestone[] = useMemo(() => {
    return engine.corpus.timeline || [];
  }, [engine]);

  // Default selected milestone: August 2, 2026 (general application milestone)
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(() => {
    const aug2026 = milestones.find((m) => m.dateIso === '2026-08-02');
    return aug2026?.id || milestones[0]?.id || 'm_2026_08_02';
  });

  const [selectedCategory, setSelectedCategory] = useState<ChecklistCategory>('Todos');
  const [filterByActiveRoles, setFilterByActiveRoles] = useState<boolean>(true);

  const activeRoles = useMemo(() => {
    return selectedRoles && selectedRoles.length > 0 ? selectedRoles : [selectedRole];
  }, [selectedRoles, selectedRole]);

  const handleToggleRole = (role: EnterpriseRole) => {
    if (onToggleRole) {
      onToggleRole(role);
    } else {
      onSelectRole(role);
    }
  };

  const selectedMilestone: TimelineMilestone | undefined = useMemo(() => {
    return milestones.find((m) => m.id === selectedMilestoneId) || milestones[0];
  }, [milestones, selectedMilestoneId]);

  // Total checklist items across entire corpus
  const allChecklistItems: TimelineReadinessItem[] = useMemo(() => {
    const items: TimelineReadinessItem[] = [];
    for (const m of milestones) {
      if (m.readinessChecklist) {
        items.push(...m.readinessChecklist);
      }
    }
    return items;
  }, [milestones]);

  // Overall readiness progress
  const overallProgress = useMemo(() => {
    const total = allChecklistItems.length;
    const checked = allChecklistItems.filter((i) => checkedReadinessIds.includes(i.id)).length;
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    return { total, checked, pct };
  }, [allChecklistItems, checkedReadinessIds]);

  // Filtered checklist items for currently selected milestone
  const filteredMilestoneItems = useMemo(() => {
    if (!selectedMilestone?.readinessChecklist) return [];

    return selectedMilestone.readinessChecklist.filter((item) => {
      if (selectedCategory !== 'Todos' && item.category !== selectedCategory) {
        return false;
      }
      if (filterByActiveRoles && item.targetRoles) {
        return item.targetRoles.some((r) => activeRoles.includes(r));
      }
      return true;
    });
  }, [selectedMilestone, selectedCategory, filterByActiveRoles, activeRoles]);

  // Milestone readiness progress
  const milestoneProgress = useMemo(() => {
    if (!selectedMilestone?.readinessChecklist) return { total: 0, checked: 0, pct: 0 };
    const total = selectedMilestone.readinessChecklist.length;
    const checked = selectedMilestone.readinessChecklist.filter((i) => checkedReadinessIds.includes(i.id)).length;
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    return { total, checked, pct };
  }, [selectedMilestone, checkedReadinessIds]);

  const getStatusBadge = (status: TimelineMilestone['statusInOct2026']) => {
    switch (status) {
      case 'enforced':
        return (
          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>EN VIGOR (OBLIGATORIO)</span>
          </span>
        );
      case 'recently_enforced':
        return (
          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 text-amber-400" />
            <span>EN APLICACIÓN DESDE AGO 2026</span>
          </span>
        );
      case 'upcoming':
        return (
          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
            <Clock className="w-3 h-3 text-indigo-400" />
            <span>FUTURO (EN PREPARACIÓN)</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* View Header & KPIs */}
      <header className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                OCTUBRE 2026 · CONTEXTO TEMPORAL ACTUAL
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Art. 113 · Entrada en vigor escalonada
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1.5">
              Calendario de Plazos de Aplicación y Auditoría de Readiness
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Monitoreo del régimen transitorio del Reglamento (UE) 2024/1689. Auditoría interactiva con lista de control de conformidad por rol corporativo y evidencia documental.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterByActiveRoles((prev) => !prev)}
              className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all ${
                filterByActiveRoles
                  ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/40 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {filterByActiveRoles
                ? `✓ Filtrando por ${activeRoles.length} rol(es) activos`
                : 'Mostrar todos los roles'}
            </button>
          </div>
        </div>

        {/* Readiness Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <StatMetricCard
            title="Readiness Global"
            value={`${overallProgress.pct}%`}
            subtitle={`${overallProgress.checked} de ${overallProgress.total} deberes auditados`}
            progress={{
              current: overallProgress.checked,
              total: overallProgress.total,
              label: 'Completado',
            }}
            icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
          />
          <StatMetricCard
            title="Hito Activo Seleccionado"
            value={`${milestoneProgress.pct}%`}
            subtitle={`${milestoneProgress.checked} de ${milestoneProgress.total} requisitos cumplidos`}
            progress={{
              current: milestoneProgress.checked,
              total: milestoneProgress.total,
              label: 'Hito',
            }}
            icon={<ListChecks className="w-5 h-5 text-indigo-400" />}
          />
          <StatMetricCard
            title="Fecha Actual"
            value="Oct 2026"
            subtitle="Plena aplicación Anexo III activa"
            icon={<Calendar className="w-5 h-5 text-amber-400" />}
          />
          <StatMetricCard
            title="Próximo Gran Hito"
            value="2 Ago 2027"
            subtitle="Sistemas Anexo I (CE armonizado)"
            icon={<Clock className="w-5 h-5 text-sky-400" />}
          />
        </div>
      </header>

      {/* HORIZONTAL TIMELINE RAIL */}
      <SectionCard
        title="Línea Temporal de Aplicación del EU AI Act"
        subtitle="Haga clic en una fecha clave para desplegar sus obligaciones de aplicación y checklist de verificación"
        icon={<Calendar className="w-5 h-5 text-indigo-400" />}
      >
        <div className="overflow-x-auto pb-4 pt-2">
          <div className="flex items-stretch gap-3 min-w-[840px]">
            {milestones.map((m) => {
              const isSelected = selectedMilestone?.id === m.id;
              const isEnforced = m.statusInOct2026 === 'enforced';
              const isRecentlyEnforced = m.statusInOct2026 === 'recently_enforced';
              const isUpcoming = m.statusInOct2026 === 'upcoming';

              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMilestoneId(m.id)}
                  className={`flex-1 flex flex-col justify-between text-left p-3.5 rounded-xl border transition-all duration-150 relative ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-950/30 ring-2 ring-indigo-500/40 shadow-lg'
                      : 'border-slate-800/80 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  {/* Active Context Marker Badge */}
                  {isRecentlyEnforced && (
                    <div className="absolute -top-2.5 left-3 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-mono text-[9px] font-black uppercase tracking-wider shadow">
                      ★ Contexto Actual
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-1 pb-1">
                      <span className="font-mono font-bold text-xs text-white">
                        {m.dateLabel}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {m.monthsFromEntry === 0 ? 'Entrada en vigor' : `+${m.monthsFromEntry}m`}
                      </span>
                    </div>

                    <div className="my-1.5">
                      {getStatusBadge(m.statusInOct2026)}
                    </div>

                    <h4 className="font-semibold text-xs text-slate-100 line-clamp-1 mt-1">
                      {m.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                      {m.subtitle}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="font-mono">
                      {m.readinessChecklist ? `${m.readinessChecklist.length} puntos` : ''}
                    </span>
                    <span className="text-indigo-400 font-medium">Ver detalles →</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </SectionCard>

      {/* MILESTONE DETAIL & READINESS AUDIT CHECKLIST */}
      {selectedMilestone && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Scope & Enterprise State */}
          <div className="lg:col-span-5 space-y-5">
            {/* Scope Overview Card */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                    Hito Analizado
                  </span>
                  <span className="font-mono font-bold text-base text-white">
                    {selectedMilestone.dateLabel}
                  </span>
                </div>
                {getStatusBadge(selectedMilestone.statusInOct2026)}
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-100">
                  {selectedMilestone.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {selectedMilestone.subtitle}
                </p>
              </div>

              {/* What applies in this milestone */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-300 font-semibold flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5 text-indigo-400" />
                  ¿Qué entra en aplicación jurídica?
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedMilestone.whatApplies.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How company should be positioned */}
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  ¿Cómo debería estar la empresa?
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                  {selectedMilestone.howCompanyShouldBe}
                </p>
              </div>

              {/* Affected Articles Links */}
              {selectedMilestone.affectedArticles.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider block">
                    Artículos afectados:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMilestone.affectedArticles.map((artId) => {
                      const art = engine.getArticle(artId);
                      return (
                        <CitationBadge
                          key={artId}
                          citation={{
                            citationId: `EU-2024-1689:${artId}`,
                            boeId: engine.corpus.metadata.boeId,
                            eliUri: engine.corpus.metadata.eliUri,
                            targetType: 'article',
                            articleId: artId,
                            displayLabel: art ? `${art.titleLabel}` : artId.replace('art_', 'Art. '),
                            exactQuote: art?.summary || 'Artículo afectado por el hito.',
                          }}
                          onSelect={onNavigateCitation}
                          size="xs"
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Checklist */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/90 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-indigo-400" />
                  <div>
                    <h3 className="font-semibold text-sm text-white">
                      Checklist de Auditoría de Readiness
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Marque los requisitos verificados con evidencia documental
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-indigo-400">
                    {milestoneProgress.checked} / {milestoneProgress.total} verificados
                  </span>
                  <div className="w-32 bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                    <div
                      className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${milestoneProgress.pct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Multi-Role Selector */}
              <MultiRoleSelector
                selectedRoles={activeRoles}
                onToggleRole={handleToggleRole}
                onSetRoles={onSetRoles}
                compact
              />

              {/* Category Filter Bar */}
              <SegmentedFilterBar
                options={CATEGORY_OPTIONS}
                value={selectedCategory}
                onChange={setSelectedCategory}
                size="sm"
                className="w-full"
              />

              {/* Checklist items list */}
              <div className="space-y-3 pt-1">
                {filteredMilestoneItems.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-500 rounded-lg border border-dashed border-slate-800">
                    No hay requisitos de auditoría para la categoría o rol seleccionados en esta fecha.
                  </div>
                ) : (
                  filteredMilestoneItems.map((item) => {
                    const isChecked = checkedReadinessIds.includes(item.id);

                    return (
                      <div
                        key={item.id}
                        onClick={() => onToggleReadinessItem(item.id)}
                        className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-150 select-none ${
                          isChecked
                            ? 'border-emerald-500/40 bg-emerald-950/20 shadow-sm'
                            : 'border-slate-800/80 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-900/60'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => onToggleReadinessItem(item.id)}
                            className="mt-1 w-4 h-4 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                {item.category}
                              </span>
                              {item.targetRoles && (
                                <div className="flex gap-1">
                                  {item.targetRoles.map((r) => (
                                    <span
                                      key={r}
                                      className="font-mono text-[9px] px-1 rounded bg-slate-900 text-slate-400 border border-slate-800"
                                    >
                                      {r}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <p className={`text-xs sm:text-sm font-semibold mt-1.5 leading-snug ${
                              isChecked ? 'text-emerald-300' : 'text-slate-200'
                            }`}>
                              {item.requirement}
                            </p>

                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                              {item.expectedStateDescription}
                            </p>

                            <div className="mt-2 pt-2 border-t border-slate-800/40" onClick={(e) => e.stopPropagation()}>
                              <CitationBadge
                                citation={item.citation}
                                onSelect={onNavigateCitation}
                                size="xs"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
