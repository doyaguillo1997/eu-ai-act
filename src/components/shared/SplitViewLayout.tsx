import React from 'react';
import { PanelRightClose, PanelRightOpen, ChevronRight, ChevronLeft } from 'lucide-react';

export interface SplitViewLayoutProps {
  primary: React.ReactNode;
  inspector: React.ReactNode;
  inspectorOpen?: boolean;
  onToggleInspector?: () => void;
  inspectorWidthClass?: string;
}

export const SplitViewLayout: React.FC<SplitViewLayoutProps> = ({
  primary,
  inspector,
  inspectorOpen = true,
  onToggleInspector,
  inspectorWidthClass = 'w-80 xl:w-96 2xl:w-[410px]',
}) => {
  return (
    <div className="flex h-full w-full overflow-hidden bg-slate-950">
      {/* Primary scrollable pane */}
      <main className="flex-1 min-w-0 h-full overflow-y-auto" tabIndex={-1}>
        {primary}
      </main>

      {/* Docked vertical tab when inspector is collapsed */}
      {!inspectorOpen && onToggleInspector && (
        <button
          type="button"
          onClick={onToggleInspector}
          title="Abrir Inspector"
          aria-label="Abrir Inspector"
          className="shrink-0 h-full w-9 flex flex-col items-center justify-start pt-6 gap-3 border-l border-slate-800/80 bg-slate-900/90 hover:bg-slate-800/90 text-slate-400 hover:text-indigo-300 transition-colors cursor-pointer select-none z-20 group"
        >
          <PanelRightOpen className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
          <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-mono tracking-wider text-slate-400 group-hover:text-indigo-200 uppercase font-semibold">
            Inspector
          </span>
        </button>
      )}

      {/* Right-hand inspector pane (collapsible to the right) */}
      <aside
        aria-label="Inspector Legal y Empresarial"
        className={`relative shrink-0 h-full transition-all duration-200 z-10 ${
          inspectorOpen
            ? `border-l border-slate-800/80 bg-slate-900 overflow-y-auto ${inspectorWidthClass}`
            : 'w-0 overflow-hidden border-l-0'
        }`}
      >
        {/* Floating toggle button docked on left border to collapse */}
        {inspectorOpen && onToggleInspector && (
          <button
            type="button"
            onClick={onToggleInspector}
            title="Contraer panel de información hacia la derecha"
            aria-label="Contraer panel de información hacia la derecha"
            className="absolute top-3 -left-3.5 z-30 flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 shadow-md transition-all select-none group"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}

        {inspector}
      </aside>
    </div>
  );
};
