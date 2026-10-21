import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { LegalVectorEngine } from '../../services/vectorStore';
import { LegalCitation, VectorSearchResult, RiskLevel } from '../../types/legal.types';
import { RiskBadge } from '../shared/RiskBadge';
import { Search, X, CornerDownLeft, Sparkles, Scale, BookOpen, Layers, ArrowUpDown } from 'lucide-react';

export interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  engine: LegalVectorEngine | null;
  onNavigateCitation: (citation: LegalCitation) => void;
}

type KindFilterOption = 'all' | 'article' | 'paragraph' | 'recital' | 'annex';

interface SuggestedItem {
  id: string;
  articleId: string;
  kind: 'article' | 'paragraph' | 'recital' | 'annex';
  label: string;
  snippet: string;
  riskLevel: RiskLevel;
}

const DEFAULT_SUGGESTIONS: SuggestedItem[] = [
  {
    id: 'art_5',
    articleId: 'art_5',
    kind: 'article',
    label: 'Artículo 5: Prácticas de IA prohibidas',
    snippet: 'Prohibición de manipulación subliminal perjudicial, explotación de vulnerabilidades, puntuación social (social scoring) e identificación biométrica remota en tiempo real.',
    riskLevel: 'unacceptable',
  },
  {
    id: 'art_6',
    articleId: 'art_6',
    kind: 'article',
    label: 'Artículo 6: Normas de clasificación para sistemas de IA de alto riesgo',
    snippet: 'Criterios de clasificación de alto riesgo: sistemas de seguridad bajo legislación de armonización de la UE (Anexo I) y casos específicos del Anexo III.',
    riskLevel: 'high',
  },
  {
    id: 'art_50',
    articleId: 'art_50',
    kind: 'article',
    label: 'Artículo 50: Obligaciones de transparencia para proveedores y usuarios',
    snippet: 'Deber de información al interactuar con IA, marcado indeleble y detectable de contenidos generados por IA (deepfakes, audio, texto sintético).',
    riskLevel: 'transparency',
  },
  {
    id: 'art_51',
    articleId: 'art_51',
    kind: 'article',
    label: 'Artículo 51: Clasificación de modelos GPAI con riesgo sistémico',
    snippet: 'Umbral cuantitativo de capacidades de alta repercusión: potencia de cálculo acumulada superior a 10^25 FLOPs utilizada para el entrenamiento.',
    riskLevel: 'gpai',
  },
  {
    id: 'art_99',
    articleId: 'art_99',
    kind: 'article',
    label: 'Artículo 99: Sanciones e importes máximos',
    snippet: 'Multas administrativas de hasta 35.000.000 EUR o 7% del volumen de negocio por infracción de prácticas prohibidas (Art. 5).',
    riskLevel: 'governance',
  },
];

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  engine,
  onNavigateCitation,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState('');
  const [kindFilter, setKindFilter] = useState<KindFilterOption>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Synchronize open state with native dialog.showModal()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      // Auto-focus input
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      if (dialog.open) {
        dialog.close();
      }
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle native dialog close / cancel events
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  // Modern Web Guidance: light-dismiss-a-dialog fallback for browsers without closedby support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (isDialogContent) return;
        dialog.close();
      };

      dialog.addEventListener('click', handleBackdropClick);
      return () => dialog.removeEventListener('click', handleBackdropClick);
    }
  }, []);

  // Compute search results via hybrid vector + lexical search
  const results: VectorSearchResult[] = useMemo(() => {
    if (!engine) return [];
    const trimmed = query.trim();
    if (!trimmed) {
      // Build results from default suggestions
      return DEFAULT_SUGGESTIONS.map((item, idx) => ({
        vectorIndex: idx,
        kind: item.kind,
        id: item.id,
        articleId: item.articleId,
        label: item.label,
        snippet: item.snippet,
        riskLevel: item.riskLevel,
        score: 1.0,
        cosineSimilarity: 1.0,
        lexicalScore: 1.0,
        citation: {
          citationId: `EU-2024-1689:${item.id}`,
          boeId: engine.corpus.metadata.boeId,
          eliUri: engine.corpus.metadata.eliUri,
          targetType: item.kind,
          articleId: item.articleId,
          displayLabel: `${item.label} · Reglamento (UE) 2024/1689`,
          exactQuote: item.snippet,
        },
      })).filter((item) => (kindFilter === 'all' ? true : item.kind === kindFilter));
    }

    return engine.hybridSearch(trimmed, {
      topK: 15,
      kindFilter: kindFilter === 'all' ? undefined : [kindFilter],
    });
  }, [engine, query, kindFilter]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const selectedElement = listRef.current.querySelector<HTMLElement>(
      `[data-result-index="${selectedIndex}"]`
    );
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  const handleSelectResult = useCallback(
    (result: VectorSearchResult) => {
      onNavigateCitation(result.citation);
      onClose();
    },
    [onNavigateCitation, onClose]
  );

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="command-palette-dialog fixed inset-0 m-auto z-50 bg-slate-900 text-slate-100 rounded-2xl border border-slate-700/80 shadow-2xl p-0 max-w-2xl w-[92vw] sm:w-[680px] overflow-hidden outline-none backdrop:bg-slate-950/75 backdrop:backdrop-blur-sm"
      {...({ closedby: 'any' } as any)}
      aria-label="Búsqueda vectorial e índice del Reglamento UE 2024/1689"
      onKeyDown={handleKeyDown}
    >
      <div className="flex flex-col max-h-[82vh] bg-slate-900">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90 gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por artículo, GPAI, biometría, sanciones, plazo... (Cmd+K)"
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
            aria-autocomplete="list"
            aria-controls="command-palette-results"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60 select-none">
            <span>ESC</span>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 bg-slate-950/40 text-xs gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            {(
              [
                { id: 'all', label: 'Todo' },
                { id: 'article', label: 'Artículos' },
                { id: 'paragraph', label: 'Apartados' },
                { id: 'recital', label: 'Considerandos' },
                { id: 'annex', label: 'Anexos' },
              ] as { id: KindFilterOption; label: string }[]
            ).map((filter) => {
              const active = kindFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setKindFilter(filter.id)}
                  className={`px-2 py-0.5 rounded-md font-medium text-xs transition-colors ${
                    active
                      ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-slate-400 shrink-0">
            {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
          </div>
        </div>

        {/* Search Results / Suggestion List */}
        <div
          ref={listRef}
          id="command-palette-results"
          role="listbox"
          className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40"
        >
          {results.length === 0 ? (
            <div className="p-8 text-center text-slate-400 space-y-2">
              <Sparkles className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-sm font-medium text-slate-300">
                No se han encontrado resultados para &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-slate-400">
                Pruebe términos jurídicos como &ldquo;alto riesgo&rdquo;, &ldquo;multas&rdquo;, &ldquo;biometría&rdquo; o el número de artículo (ej. &ldquo;art 5&rdquo;).
              </p>
            </div>
          ) : (
            results.map((res, index) => {
              const isSelected = index === selectedIndex;
              const hasQuery = query.trim().length > 0;
              const cosPct = Math.round(res.cosineSimilarity * 100);
              const rankPct = Math.round(res.score * 100);

              return (
                <div
                  key={`${res.id}-${res.vectorIndex}-${index}`}
                  data-result-index={index}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelectResult(res)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`cursor-pointer rounded-lg p-2.5 transition-all text-left ${
                    isSelected
                      ? 'bg-indigo-950/50 border border-indigo-500/40 shadow-sm'
                      : 'hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-xs font-semibold text-slate-200 truncate">
                        {res.label}
                      </span>
                      <RiskBadge level={res.riskLevel} size="xs" showDot={false} />
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono">
                      {hasQuery && (
                        <span
                          className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                          title={`Similitud semántica coseno: ${cosPct}%`}
                        >
                          {cosPct}% sem
                        </span>
                      )}
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 uppercase">
                        {res.kind}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {res.snippet}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <footer className="flex items-center justify-between px-4 py-2 border-t border-slate-800 bg-slate-950/70 text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-mono">
              <span className="px-1 rounded bg-slate-800 border border-slate-700">↑↓</span> Navegar
            </span>
            <span className="flex items-center gap-1 font-mono">
              <span className="px-1 rounded bg-slate-800 border border-slate-700">↵</span> Abrir
            </span>
            <span className="flex items-center gap-1 font-mono">
              <span className="px-1 rounded bg-slate-800 border border-slate-700">esc</span> Cerrar
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
            <span>Búsqueda híbrida vectorial</span>
            <span>·</span>
            <span className="text-indigo-400">Reglamento (UE) 2024/1689</span>
          </div>
        </footer>
      </div>
    </dialog>
  );
};
