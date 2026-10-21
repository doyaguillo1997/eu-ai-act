import React from 'react';
import { LegalCitation } from '../../types/legal.types';
import { CitationBadge } from './CitationBadge';

export interface SectionCardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  headerRight?: React.ReactNode;
  citations?: LegalCitation[];
  onSelectCitation?: (citation: LegalCitation) => void;
  className?: string;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  badge,
  icon,
  headerRight,
  citations,
  onSelectCitation,
  className = '',
  children,
}) => {
  const hasHeader = Boolean(title || subtitle || badge || icon || headerRight);
  const hasCitations = Boolean(citations && citations.length > 0);

  return (
    <section
      className={`relative rounded-xl border border-slate-800/80 bg-slate-900 p-4 sm:p-5 shadow-sm transition-all duration-150 hover:border-slate-700/70 ${className}`}
    >
      {hasHeader && (
        <header className="flex flex-wrap items-start justify-between gap-3 pb-3 mb-3 border-b border-slate-800/60">
          <div className="flex items-start gap-3 min-w-0">
            {icon && (
              <div className="shrink-0 p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-indigo-400 mt-0.5">
                {icon}
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center flex-wrap gap-2">
                {title && (
                  <h3 className="font-semibold text-slate-100 text-sm sm:text-base leading-snug">
                    {title}
                  </h3>
                )}
                {badge && <div className="shrink-0">{badge}</div>}
              </div>
              {subtitle && (
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {headerRight && <div className="shrink-0 flex items-center gap-2">{headerRight}</div>}
        </header>
      )}

      <div className="text-slate-300 text-sm leading-relaxed">
        {children}
      </div>

      {hasCitations && citations && (
        <footer className="mt-4 pt-3 border-t border-slate-800/70 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider shrink-0 mr-1 select-none">
            Citas oficiales:
          </span>
          {citations.map((c, idx) => (
            <CitationBadge
              key={c.citationId ? `${c.citationId}-${idx}` : `citation-${idx}`}
              citation={c}
              onSelect={onSelectCitation}
              size="xs"
            />
          ))}
        </footer>
      )}
    </section>
  );
};
