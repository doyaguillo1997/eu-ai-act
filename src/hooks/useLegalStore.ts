import { useState, useEffect, useCallback } from 'react';
import {
  LegalVectorEngine,
  decodeCorpusBinary,
  decodeVectorsBinary,
} from '../services/vectorStore';
import { LegalCitation, EnterpriseRole, CompletedExamRecord } from '../types/legal.types';

export type ActiveAppTab = 'context_roles' | 'guide' | 'law_reader' | 'timeline' | 'quiz';
export type ThemeMode = 'dark' | 'light';

export interface SelectedProvisionState {
  articleId: string;
  paragraphId?: string;
  recitalId?: string;
  annexId?: string;
  boeUpdateId?: string;
}

const CHECKLIST_STORAGE_KEY = 'eu_ai_act_readiness_checked_v1';
const QUIZ_STATS_STORAGE_KEY = 'eu_ai_act_quiz_stats_v1';
const COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
const ROLES_STORAGE_KEY = 'eu_ai_act_selected_roles_v1';
const EXAM_HISTORY_STORAGE_KEY = 'eu_ai_act_completed_exams_v1';

export interface QuizMasteryStats {
  totalAnswered: number;
  totalCorrect: number;
  byTopic: Record<string, { answered: number; correct: number }>;
  byArticle: Record<string, { answered: number; correct: number }>;
}

export function useLegalStore() {
  const [engine, setEngine] = useState<LegalVectorEngine | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<ActiveAppTab>('context_roles');
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore
    }
    return 'dark';
  });
  const [selectedRoles, setSelectedRolesState] = useState<EnterpriseRole[]>(() => {
    try {
      const raw = localStorage.getItem(ROLES_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return ['provider', 'deployer'];
  });

  const setSelectedRoles = useCallback((roles: EnterpriseRole[]) => {
    const valid: EnterpriseRole[] = roles.length > 0 ? roles : ['deployer'];
    setSelectedRolesState(valid);
    try {
      localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(valid));
    } catch {
      // ignore
    }
  }, []);

  const toggleRole = useCallback((role: EnterpriseRole) => {
    setSelectedRolesState((prev) => {
      const exists = prev.includes(role);
      const next: EnterpriseRole[] = exists
        ? prev.length > 1
          ? prev.filter((r) => r !== role)
          : prev
        : [...prev, role];
      try {
        localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const selectedRole: EnterpriseRole = selectedRoles[0] ?? 'deployer';
  const setSelectedRole = useCallback((role: EnterpriseRole) => {
    setSelectedRolesState((prev) => {
      if (prev.includes(role) && prev.length === 1) return prev;
      const next: EnterpriseRole[] = [role];
      try {
        localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);
  const [selectedProvision, setSelectedProvision] = useState<SelectedProvisionState>({
    articleId: 'art_5',
    paragraphId: 'art_5.p1',
  });
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  const [checkedReadinessIds, setCheckedReadinessIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [quizStats, setQuizStats] = useState<QuizMasteryStats>(() => {
    try {
      const raw = localStorage.getItem(QUIZ_STATS_STORAGE_KEY);
      return raw
        ? JSON.parse(raw)
        : { totalAnswered: 0, totalCorrect: 0, byTopic: {}, byArticle: {} };
    } catch {
      return { totalAnswered: 0, totalCorrect: 0, byTopic: {}, byArticle: {} };
    }
  });

  const [examHistory, setExamHistory] = useState<CompletedExamRecord[]>(() => {
    try {
      const raw = localStorage.getItem(EXAM_HISTORY_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return [];
  });

  useEffect(() => {
    let cancelled = false;
    async function loadBinaryStore() {
      try {
        setLoading(true);
        const [corpusRes, vectorsRes] = await Promise.all([
          fetch('./data/eu-ai-act.corpus.bin'),
          fetch('./data/eu-ai-act.vectors.bin'),
        ]);

        if (!corpusRes.ok || !vectorsRes.ok) {
          throw new Error(
            `Error cargando binarios vectorizados (${corpusRes.status} / ${vectorsRes.status})`
          );
        }

        const [corpusBuf, vectorsBuf] = await Promise.all([
          corpusRes.arrayBuffer(),
          vectorsRes.arrayBuffer(),
        ]);

        if (cancelled) return;

        const corpus = decodeCorpusBinary(corpusBuf);
        const { numVectors, dimensions, vectors } = decodeVectorsBinary(vectorsBuf);
        const instance = new LegalVectorEngine(corpus, vectors, numVectors, dimensions);
        setEngine(instance);
        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : String(err));
          setLoading(false);
        }
      }
    }
    loadBinaryStore();
    return () => {
      cancelled = true;
    };
  }, []);

  // Sync themeMode with <meta name="color-scheme">, html classes, and localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', themeMode === 'light');
    root.classList.toggle('dark', themeMode === 'dark');
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', themeMode);
    }
    try {
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, themeMode);
    } catch {
      // ignore
    }
  }, [themeMode]);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateToCitation = useCallback((citation: LegalCitation) => {
    if (citation.targetType === 'boe_update') {
      setSelectedProvision({
        articleId: citation.articleId || 'art_70',
        paragraphId: citation.paragraphId,
        recitalId: undefined,
        annexId: undefined,
        boeUpdateId: citation.boeId,
      });
    } else if (citation.targetType === 'recital' || citation.articleId.startsWith('rct_')) {
      setSelectedProvision({
        articleId: 'art_1',
        paragraphId: undefined,
        recitalId: citation.articleId,
        annexId: undefined,
        boeUpdateId: undefined,
      });
    } else if (citation.targetType === 'annex' || citation.articleId.startsWith('anx_')) {
      setSelectedProvision({
        articleId: 'art_6',
        annexId: citation.articleId,
        paragraphId: citation.paragraphId,
        recitalId: undefined,
        boeUpdateId: undefined,
      });
    } else {
      setSelectedProvision({
        articleId: citation.articleId,
        paragraphId: citation.paragraphId,
        recitalId: undefined,
        annexId: undefined,
        boeUpdateId: undefined,
      });
    }
    setActiveTab('law_reader');
    setIsCommandPaletteOpen(false);
  }, []);

  const toggleReadinessItem = useCallback((itemId: string) => {
    setCheckedReadinessIds((prev) => {
      const next = prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId];
      try {
        localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage quota errors
      }
      return next;
    });
  }, []);

  const recordQuizAnswer = useCallback(
    (topicId: string, articleId: string, isCorrect: boolean) => {
      setQuizStats((prev) => {
        const prevTopic = prev.byTopic[topicId] ?? { answered: 0, correct: 0 };
        const prevArt = prev.byArticle[articleId] ?? { answered: 0, correct: 0 };
        const next: QuizMasteryStats = {
          totalAnswered: prev.totalAnswered + 1,
          totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
          byTopic: {
            ...prev.byTopic,
            [topicId]: {
              answered: prevTopic.answered + 1,
              correct: prevTopic.correct + (isCorrect ? 1 : 0),
            },
          },
          byArticle: {
            ...prev.byArticle,
            [articleId]: {
              answered: prevArt.answered + 1,
              correct: prevArt.correct + (isCorrect ? 1 : 0),
            },
          },
        };
        try {
          localStorage.setItem(QUIZ_STATS_STORAGE_KEY, JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    []
  );

  const recordCompletedExam = useCallback((exam: CompletedExamRecord) => {
    setExamHistory((prev) => {
      const next = [exam, ...prev];
      try {
        localStorage.setItem(EXAM_HISTORY_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });

    setQuizStats((prev) => {
      let totalAnswered = prev.totalAnswered;
      let totalCorrect = prev.totalCorrect;
      const byTopic = { ...prev.byTopic };
      const byArticle = { ...prev.byArticle };

      for (const qr of exam.questionResults) {
        if (qr.selectedOptionIndex !== null) {
          totalAnswered += 1;
          const isCorrect = qr.isCorrect;
          if (isCorrect) totalCorrect += 1;

          const topicId = qr.topicId;
          const curTopic = byTopic[topicId] ?? { answered: 0, correct: 0 };
          byTopic[topicId] = {
            answered: curTopic.answered + 1,
            correct: curTopic.correct + (isCorrect ? 1 : 0),
          };

          const articleId = qr.articleId;
          const curArt = byArticle[articleId] ?? { answered: 0, correct: 0 };
          byArticle[articleId] = {
            answered: curArt.answered + 1,
            correct: curArt.correct + (isCorrect ? 1 : 0),
          };
        }
      }

      const next: QuizMasteryStats = {
        totalAnswered,
        totalCorrect,
        byTopic,
        byArticle,
      };

      try {
        localStorage.setItem(QUIZ_STATS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const deleteCompletedExam = useCallback((examId: string) => {
    setExamHistory((prev) => {
      const next = prev.filter((item) => item.id !== examId);
      try {
        localStorage.setItem(EXAM_HISTORY_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const clearExamHistory = useCallback(() => {
    setExamHistory([]);
    try {
      localStorage.removeItem(EXAM_HISTORY_STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return {
    engine,
    loading,
    error,
    activeTab,
    setActiveTab,
    themeMode,
    setThemeMode,
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
  };
}
