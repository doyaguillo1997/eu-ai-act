import React, { useState, useRef, useEffect } from 'react';
import { Scale, BookOpen, ExternalLink } from 'lucide-react';
import { LegalCitation } from '../../types/legal.types';
import {
  resolveOfficialExternalUrl,
  resolveOfficialAnchorBadge,
} from '../../services/vectorStore';

export interface CitationBadgeProps {
  citation: LegalCitation;
  onSelect?: (citation: LegalCitation) => void;
  size?: 'xs' | 'sm' | 'md';
  showQuotePreview?: boolean;
  className?: string;
}

const SIZE_STYLES: Record<'xs' | 'sm' | 'md', { pill: string; icon: string; text: string }> = {
  xs: {
    pill: 'px-1.5 py-0.5 gap-1 text-[11px]',
    icon: 'w-3 h-3',
    text: 'text-[11px]',
  },
  sm: {
    pill: 'px-2 py-0.5 gap-1.5 text-xs',
    icon: 'w-3.5 h-3.5',
    text: 'text-xs',
  },
  md: {
    pill: 'px-2.5 py-1 gap-2 text-xs',
    icon: 'w-4 h-4',
    text: 'text-xs',
  },
};

export const CitationBadge: React.FC<CitationBadgeProps> = ({
  citation,
  onSelect,
  size = 'sm',
  showQuotePreview = true,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const [openBelow, setOpenBelow] = useState(false);
  const sizeConfig = SIZE_STYLES[size] ?? SIZE_STYLES.sm;
  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!showQuotePreview) return;
    if (containerRef.current && typeof window !== 'undefined') {
      const rect = containerRef.current.getBoundingClientRect();
      setAlignRight(rect.left + 380 > window.innerWidth);
      setOpenBelow(rect.top < 220);
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsHovered(true), 120);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsHovered(false), 80);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect(citation);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      e.stopPropagation();
      onSelect(citation);
    }
  };

  const IconComponent = citation.targetType === 'recital' ? BookOpen : Scale;
  const officialUrl = resolveOfficialExternalUrl(citation);
  const anchorBadge = resolveOfficialAnchorBadge(citation);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center max-w-full min-w-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`citation-badge-container inline-flex items-center max-w-full min-w-0 rounded-md font-mono border transition-all duration-150 select-none bg-slate-900/90 border-slate-700/60 text-slate-300 shadow-sm hover:border-indigo-400/60 ${className}`}
      >
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={`citation-badge-btn group inline-flex items-center min-w-0 text-left transition-colors ${
            onSelect
              ? 'cursor-pointer hover:bg-indigo-950/40 hover:text-indigo-200 active:scale-[0.98]'
              : 'cursor-default'
          } rounded-l-md ${sizeConfig.pill}`}
          aria-label={`Referencia oficial: ${citation.displayLabel}`}
        >
          <IconComponent
            className={`citation-badge-icon shrink-0 text-indigo-400 group-hover:text-indigo-300 transition-colors ${sizeConfig.icon}`}
            aria-hidden="true"
          />
          <span className={`font-mono font-medium truncate max-w-[240px] ${sizeConfig.text}`}>
            {citation.displayLabel}
          </span>
        </button>

        <a
          href={officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          title={`Abrir directamente en web oficial EUR-Lex / BOE (${anchorBadge})`}
          aria-label={`Abrir ${citation.displayLabel} en web oficial (${anchorBadge})`}
          className="citation-badge-link shrink-0 inline-flex items-center justify-center px-1.5 py-0.5 border-l border-slate-700/60 text-slate-400 hover:text-indigo-300 hover:bg-indigo-950/50 rounded-r-md transition-colors"
        >
          <ExternalLink className="w-3 h-3 shrink-0" />
        </a>
      </div>

      {/* Hover preview popover with high-contrast classes for Dark and Light mode */}
      {showQuotePreview && isHovered && (
        <div
          role="tooltip"
          className={`citation-popover-tooltip absolute z-50 ${
            openBelow ? 'top-full mt-2' : 'bottom-full mb-2'
          } ${
            alignRight ? 'right-0' : 'left-0'
          } w-72 sm:w-80 p-3 rounded-lg bg-slate-950 border border-indigo-500/40 shadow-2xl text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="citation-popover-header flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800">
            <span className="font-mono font-semibold text-indigo-300 truncate">
              {citation.displayLabel}
            </span>
            <span className="citation-anchor-badge shrink-0 font-mono text-[10px] px-1.5 py-0.5 rounded bg-indigo-950/90 text-indigo-300 border border-indigo-700/60 whitespace-nowrap">
              {anchorBadge}
            </span>
          </div>

          {citation.exactQuote ? (
            <blockquote className="my-1.5 pl-2.5 border-l-2 border-indigo-500/70 text-slate-200 italic text-[11px] leading-relaxed line-clamp-5">
              &ldquo;{citation.exactQuote}&rdquo;
            </blockquote>
          ) : (
            <p className="text-slate-400 italic text-[11px]">
              Texto oficial registrado en EUR-Lex y BOE.
            </p>
          )}

          <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2 text-[10px] text-slate-400">
            {onSelect ? (
              <button
                type="button"
                onClick={handleClick}
                className="text-indigo-400 hover:text-indigo-300 font-medium text-left"
              >
                Lector interno →
              </button>
            ) : (
              <span className="text-indigo-400 font-mono uppercase tracking-wider">
                {citation.targetType}
              </span>
            )}
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 font-mono text-emerald-400 hover:text-emerald-300 font-semibold whitespace-nowrap"
            >
              <span>Web Oficial ({anchorBadge})</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
