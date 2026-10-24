import React, { useState, useRef, useEffect } from 'react';
import { useLegalStore, ActiveAppTab } from './hooks/useLegalStore';
import { EnterpriseRole, LegalCitation } from './types/legal.types';
import { CommandPaletteModal } from './components/legal/CommandPaletteModal';
import { MultiRoleSelector } from './components/shared/MultiRoleSelector';
import { RoleContextHomeView } from './views/RoleContextHomeView';
import { EnterpriseGuideView } from './views/EnterpriseGuideView';
import { InteractiveLawView } from './views/InteractiveLawView';
import { TimelineDeadlinesView } from './views/TimelineDeadlinesView';
import { QuizEngineView } from './views/QuizEngineView';
import {
  Compass,
  BookOpen,
  Calendar,
  GraduationCap,
  Search,
  Scale,
  Sparkles,
  Loader2,
  AlertCircle,
  Building2,
  Sun,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronDown,
} from 'lucide-react';

const NAV_ITEMS: { id: ActiveAppTab; label: string; icon: React.ReactNode; badge?: string }[] = [
  { id: 'context_roles', label: 'Inicio: Roles y Casos', icon: <Sparkles className="w-4 h-4" />, badge: 'Contexto' },
  { id: 'guide', label: 'Guía & Infografías', icon: <Compass className="w-4 h-4" />, badge: 'Pirámide' },
  { id: 'law_reader', label: 'Lector Interactivo', icon: <BookOpen className="w-4 h-4" />, badge: '113 Arts' },
  { id: 'timeline', label: 'Plazos & Readiness', icon: <Calendar className="w-4 h-4" />, badge: 'Oct 2026' },
  { id: 'quiz', label: 'Certificación & Quiz', icon: <GraduationCap className="w-4 h-4" /> },
];

export const App: React.FC = () => {
  const {
    engine,
    loading,
    error,
    activeTab,
    setActiveTab,
    themeMode,
    toggleThemeMode,
    selectedRole,
    setSelectedRole,
    selectedRoles,
    setSelectedRoles,
    toggleRole,
    selectedProvision,
    setSelectedProvision,
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    navigateToCitation,
    checkedReadinessIds,
    toggleReadinessItem,
    quizStats,
    recordQuizAnswer,
    examHistory,
    recordCompletedExam,
    deleteCompletedExam,
    clearExamHistory,
  } = useLegalStore();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });
  const [isRolePopoverOpen, setIsRolePopoverOpen] = useState<boolean>(false);
  const rolePopoverRef = useRef<HTMLDivElement | null>(null);
  const [quizFilterTopicOrArticle, setQuizFilterTopicOrArticle] = useState<{
    topicId?: string;
    articleId?: string;
  }>({});

  // Close top-right Role Combination Popover on outside click or Escape
  useEffect(() => {
    if (!isRolePopoverOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (rolePopoverRef.current && !rolePopoverRef.current.contains(e.target as Node)) {
        setIsRolePopoverOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsRolePopoverOpen(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRolePopoverOpen]);

  const handleOpenQuizForTopic = (topicId: string) => {
    setQuizFilterTopicOrArticle({ topicId });
    setActiveTab('quiz');
  };

  const handleStartArticleQuiz = (articleId: string) => {
    setQuizFilterTopicOrArticle({ articleId });
    setActiveTab('quiz');
  };

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-950 text-slate-100 p-6 select-none">
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl max-w-md w-full text-center space-y-4">
          <div className="relative mx-auto w-12 h-12 flex items-center justify-center">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
            <Scale className="w-5 h-5 text-indigo-300 absolute" />
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            EU AI Act macOS Studio
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Cargando corpus oficial verificado del Reglamento (UE) 2024/1689 y descompresión de vectores Float32Array...
          </p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 h-full w-2/3" />
          </div>
          <span className="font-mono text-[10px] text-slate-500 block">
            DOUE-L-2024-81079 · 113 Artículos · 180 Considerandos
          </span>
        </div>
      </div>
    );
  }

  if (error || !engine) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-950 text-slate-100 p-6">
        <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-950/20 max-w-md w-full text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
          <h2 className="text-base font-bold text-white">Error de Inicialización del Corpus</h2>
          <p className="text-xs text-rose-300/80 leading-relaxed font-mono">
            {error || 'No se pudo instanciar el motor vectorial legal.'}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-4 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow transition-colors"
          >
            Reintentar Carga
          </button>
        </div>
      </div>
    );
  }

  const isElectronMac =
    typeof navigator !== 'undefined' &&
    /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent) &&
    /Electron/i.test(navigator.userAgent);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 select-none">
      {/* Top Titlebar (Draggable, with traffic lights clearance on macOS Electron) */}
      <header
        className={`app-drag-region h-11 shrink-0 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between px-4 ${
          isElectronMac ? 'pl-20' : 'pl-4'
        } select-none z-30`}
      >
        {/* Left Title / Branding */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="./app-icon.png"
            alt="EU AI Act Studio Icon"
            className="w-6 h-6 rounded-md shadow-sm object-cover shrink-0"
          />
          <span className="font-semibold text-xs tracking-tight text-slate-200 truncate">
            EU AI Act Studio
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
            <span className="text-amber-400">★</span>
            <span>Reglamento (UE) 2024/1689</span>
          </span>
        </div>

        {/* Global Search Button Trigger (Cmd+K), Theme Switcher & Interactive Active Roles Popover */}
        <div className="app-no-drag flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsCommandPaletteOpen(true)}
            className="group flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-xs text-slate-400 hover:text-slate-200 transition-all shadow-sm"
            aria-label="Abrir buscador semántico global (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300" />
            <span className="hidden sm:inline font-sans text-xs">Búsqueda Semántica Vectorial...</span>
            <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Theme Mode Toggle (Modo Claro / Modo Oscuro) */}
          <button
            type="button"
            onClick={toggleThemeMode}
            title={themeMode === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            aria-label={themeMode === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 transition-all shadow-sm"
          >
            {themeMode === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline">Modo Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-500" />
                <span className="hidden md:inline">Modo Oscuro</span>
              </>
            )}
          </button>

          {/* Interactive Top-Right Active Roles Combination Selector Pill */}
          <div ref={rolePopoverRef} className="relative flex items-center pl-2 border-l border-slate-800">
            <button
              type="button"
              onClick={() => setIsRolePopoverOpen((prev) => !prev)}
              aria-expanded={isRolePopoverOpen}
              title="Haz clic para seleccionar y combinar roles activos de tu empresa"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[11px] border transition-all whitespace-nowrap cursor-pointer ${
                isRolePopoverOpen
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                  : 'bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border-indigo-500/40'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                {selectedRoles.length === 1
                  ? '1 rol activo'
                  : `${selectedRoles.length} roles activos`}
              </span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  isRolePopoverOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isRolePopoverOpen && (
              <div
                role="dialog"
                aria-label="Selector rápido de combinación de roles"
                className="absolute right-0 top-full mt-2 w-[360px] sm:w-[420px] z-50 rounded-xl bg-slate-950 border border-indigo-500/40 shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-150"
              >
                <MultiRoleSelector
                  selectedRoles={selectedRoles}
                  onToggleRole={toggleRole}
                  onSetRoles={setSelectedRoles}
                  compact
                />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main App Body with Sidebar & Dynamic View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Collapsible Translucent Sidebar Navigation */}
        <nav
          aria-label="Navegación principal"
          className={`${
            isSidebarCollapsed ? 'w-14' : 'w-64'
          } shrink-0 border-r border-slate-800/80 bg-slate-950 flex flex-col justify-between p-2.5 transition-all duration-200 z-20`}
        >
          <div className="space-y-1">
            {/* Sidebar Header with Collapse / Expand Toggle */}
            <div className="flex items-center justify-between px-2 py-1 mb-1">
              {!isSidebarCollapsed && (
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">
                  Módulos de Estudio
                </span>
              )}
              <button
                type="button"
                onClick={() => setIsSidebarCollapsed((prev) => !prev)}
                className={`p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-colors ${
                  isSidebarCollapsed ? 'mx-auto' : ''
                }`}
                title={isSidebarCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
                aria-label={isSidebarCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
              >
                {isSidebarCollapsed ? (
                  <PanelLeftOpen className="w-4 h-4 text-indigo-400" />
                ) : (
                  <PanelLeftClose className="w-4 h-4 text-slate-400" />
                )}
              </button>
            </div>

            {/* Navigation Items (strictly single line on labels and badges) */}
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  title={isSidebarCollapsed ? item.label : undefined}
                  className={`w-full flex items-center ${
                    isSidebarCollapsed ? 'justify-center px-2 py-2.5' : 'justify-between px-3 py-2'
                  } rounded-xl text-xs font-semibold transition-all duration-150 text-left whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {item.icon}
                    </span>
                    {!isSidebarCollapsed && (
                      <span className="truncate whitespace-nowrap">{item.label}</span>
                    )}
                  </div>
                  {!isSidebarCollapsed && item.badge && (
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.2 rounded-full shrink-0 whitespace-nowrap ${
                        isActive
                          ? 'bg-indigo-700 text-white'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Sidebar Footer Status */}
          <div
            className={`p-2 rounded-xl border border-slate-800/80 bg-slate-900/40 ${
              isSidebarCollapsed ? 'text-center' : 'space-y-1.5 p-3'
            }`}
          >
            <div className={`flex items-center gap-1.5 ${isSidebarCollapsed ? 'justify-center' : ''}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)] shrink-0" />
              {!isSidebarCollapsed && (
                <span className="font-mono text-[10px] font-bold text-slate-300 truncate whitespace-nowrap">
                  Vector Store Conectado
                </span>
              )}
            </div>
            {!isSidebarCollapsed && (
              <>
                <p className="text-[10px] text-slate-400 font-mono leading-tight whitespace-nowrap">
                  113 Arts · 180 Cons · 13 Anexos · F32
                </p>
                <span className="text-[9px] text-slate-500 font-mono block whitespace-nowrap">
                  DOUE-L-2024-81079
                </span>
              </>
            )}
          </div>
        </nav>

        {/* Dynamic View Container */}
        <main className="flex-1 h-full overflow-hidden bg-slate-950 min-w-0">
          {activeTab === 'context_roles' && (
            <div className="h-full overflow-y-auto">
              <RoleContextHomeView
                engine={engine}
                selectedRole={selectedRole}
                onSelectRole={setSelectedRole}
                selectedRoles={selectedRoles}
                onToggleRole={toggleRole}
                onSetRoles={setSelectedRoles}
                onNavigateCitation={navigateToCitation}
                onNavigateTab={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="h-full overflow-y-auto">
              <EnterpriseGuideView
                engine={engine}
                selectedRole={selectedRole}
                onSelectRole={setSelectedRole}
                selectedRoles={selectedRoles}
                onToggleRole={toggleRole}
                onSetRoles={setSelectedRoles}
                onNavigateCitation={navigateToCitation}
                onOpenQuizForTopic={handleOpenQuizForTopic}
              />
            </div>
          )}

          {activeTab === 'law_reader' && (
            <InteractiveLawView
              engine={engine}
              selectedProvision={selectedProvision}
              onSelectProvision={setSelectedProvision}
              selectedRole={selectedRole}
              onSelectRole={setSelectedRole}
              selectedRoles={selectedRoles}
              onToggleRole={toggleRole}
              onSetRoles={setSelectedRoles}
              onNavigateCitation={navigateToCitation}
              onStartArticleQuiz={handleStartArticleQuiz}
            />
          )}

          {activeTab === 'timeline' && (
            <div className="h-full overflow-y-auto">
              <TimelineDeadlinesView
                engine={engine}
                checkedReadinessIds={checkedReadinessIds}
                onToggleReadinessItem={toggleReadinessItem}
                selectedRole={selectedRole}
                onSelectRole={setSelectedRole}
                selectedRoles={selectedRoles}
                onToggleRole={toggleRole}
                onSetRoles={setSelectedRoles}
                onNavigateCitation={navigateToCitation}
              />
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="h-full overflow-y-auto">
              <QuizEngineView
                engine={engine}
                initialTopicOrArticle={quizFilterTopicOrArticle}
                quizStats={quizStats}
                onRecordAnswer={recordQuizAnswer}
                onNavigateCitation={navigateToCitation}
                examHistory={examHistory}
                onRecordCompletedExam={recordCompletedExam}
                onDeleteCompletedExam={deleteCompletedExam}
                onClearExamHistory={clearExamHistory}
              />
            </div>
          )}
        </main>
      </div>

      {/* Global Cmd+K Hybrid Vector & Lexical Search Palette */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        engine={engine}
        onNavigateCitation={navigateToCitation}
      />
    </div>
  );
};

export default App;
