import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LegalVectorEngine } from '../services/vectorStore';
import {
  QuizQuestion,
  LegalCitation,
  LegalArticle,
  QuizTopicId,
  CompletedExamRecord,
  CompletedExamQuestionResult,
  ExamTopicBreakdown,
  ExamTitleBreakdown,
} from '../types/legal.types';
import { QuizMasteryStats } from '../hooks/useLegalStore';
import { CitationBadge } from '../components/shared/CitationBadge';
import { SegmentedFilterBar, FilterOption } from '../components/shared/SegmentedFilterBar';
import {
  GraduationCap,
  Trophy,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Scale,
  Award,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Minus,
  Shuffle,
  Play,
  Check,
  Trash2,
  Eye,
  Target,
  BarChart3,
  Calendar,
  Layers,
  ChevronRight,
  Filter,
  CheckSquare,
  Square,
  AlertCircle,
} from 'lucide-react';

export interface QuizEngineViewProps {
  engine: LegalVectorEngine;
  initialTopicOrArticle?: { topicId?: string; articleId?: string };
  quizStats: QuizMasteryStats;
  onRecordAnswer: (topicId: string, articleId: string, isCorrect: boolean) => void;
  onNavigateCitation: (citation: LegalCitation) => void;
  examHistory?: CompletedExamRecord[];
  onRecordCompletedExam?: (exam: CompletedExamRecord) => void;
  onDeleteCompletedExam?: (examId: string) => void;
  onClearExamHistory?: () => void;
}

type QuizMode = 'study' | 'exam' | 'history';
type ExamState = 'config' | 'active' | 'diagnostic';

const QUIZ_TOPICS: { id: QuizTopicId | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos los Bloques' },
  { id: 'prohibited', label: 'Prácticas Prohibidas (Art. 5)' },
  { id: 'high_risk', label: 'Alto Riesgo (Arts. 6-49)' },
  { id: 'gpai', label: 'Modelos GPAI (Arts. 51-55)' },
  { id: 'transparency', label: 'Transparencia (Art. 50)' },
  { id: 'governance_sanctions', label: 'Gobernanza y Sanciones' },
  { id: 'deadlines', label: 'Plazos y Calendario' },
  { id: 'enterprise_cases', label: 'Casos Prácticos de Empresa' },
];

const TOPIC_METADATA: Record<
  QuizTopicId,
  { label: string; shortLabel: string; color: string; border: string; bg: string }
> = {
  prohibited: {
    label: 'Prácticas Prohibidas (Art. 5)',
    shortLabel: 'Prohibidas (Art. 5)',
    color: 'text-rose-400',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/10',
  },
  high_risk: {
    label: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    shortLabel: 'Alto Riesgo',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
  },
  gpai: {
    label: 'Modelos GPAI (Arts. 51-55)',
    shortLabel: 'Modelos GPAI',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
  },
  transparency: {
    label: 'Transparencia Específica (Art. 50)',
    shortLabel: 'Transparencia',
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
  },
  governance_sanctions: {
    label: 'Gobernanza y Sanciones (Arts. 99-101)',
    shortLabel: 'Gobernanza y Sanciones',
    color: 'text-indigo-400',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10',
  },
  deadlines: {
    label: 'Plazos y Calendario (Art. 113)',
    shortLabel: 'Plazos y Calendario',
    color: 'text-teal-400',
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/10',
  },
  enterprise_cases: {
    label: 'Casos Prácticos de Empresa',
    shortLabel: 'Casos Prácticos',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
  },
};

const ALL_TOPIC_IDS: QuizTopicId[] = [
  'prohibited',
  'high_risk',
  'gpai',
  'transparency',
  'governance_sanctions',
  'deadlines',
  'enterprise_cases',
];

const FALLBACK_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q_art5_subliminal',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa de comercio electrónico implementa un sistema de IA con microestímulos sonoros y visuales imperceptibles para inducir a usuarios vulnerables a solicitar préstamos rápidos. ¿Cómo se califica bajo el EU AI Act?',
    options: [
      'Sistema de Alto Riesgo que requiere auditoría previa y marcado CE.',
      'Práctica prohibida de riesgo inaceptable bajo el Art. 5.1(a) sujeta a multas de hasta 35M€ o 7% de facturación.',
      'Riesgo de transparencia específica regulado en el Art. 50 que requiere sólo aviso en pantalla.',
      'Práctica permitida si el usuario aceptó los términos y condiciones de la plataforma.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El Art. 5.1(a) prohíbe de forma terminante los sistemas que utilicen técnicas subliminales que trasciendan la conciencia para distorsionar apreciablemente el comportamiento causando perjuicio físico o psicológico.',
    enterpriseLesson:
      'Cualquier técnica persuasiva que opere por debajo del umbral de conciencia constituye infracción máxima y no puede subsanarse con consentimientos contractuales.',
    citations: [
      {
        citationId: 'EU-2024-1689:art_5.p1.a',
        boeId: 'DOUE-L-2024-81079',
        eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p1',
        displayLabel: 'Art. 5.1(a) · Técnicas subliminales prohibidas',
        exactQuote:
          'Quedan prohibidas las siguientes prácticas: el uso de un sistema de IA que emplee técnicas subliminales que trasciendan la conciencia...',
      },
    ],
  },
  {
    id: 'q_art6_annex3_hr',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Un departamento corporativo de Recursos Humanos adquiere una herramienta de IA para filtrar currículums y clasificar candidatos según probabilidades de éxito. ¿Qué obligaciones impone el Reglamento a la empresa usuaria (desplegador)?',
    options: [
      'Ninguna, las obligaciones corresponden exclusivamente al fabricante del software.',
      'Supervisión humana efectiva (Art. 26.2), control de datos de entrada pertinentes, conservación de logs durante 6 meses e información previa a los empleados.',
      'Redactar un nuevo modelo fundacional conforme al Anexo XI.',
      'Solicitar autorización previa trimestral a la Comisión Europea.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Los sistemas de selección y filtrado de empleo son de Alto Riesgo (Anexo III.4). El desplegador debe asignar personas cualificadas para su supervisión (Art. 26.2) y retener los logs durante al menos 6 meses (Art. 26.5).',
    enterpriseLesson:
      'La empresa compradora no es un mero cliente pasivo; como "desplegador" asume responsabilidades directas sancionables si opera la IA sin supervisión humana.',
    citations: [
      {
        citationId: 'EU-2024-1689:art_26',
        boeId: 'DOUE-L-2024-81079',
        eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
        targetType: 'article',
        articleId: 'art_26',
        displayLabel: 'Art. 26 · Obligaciones de los desplegadores',
        exactQuote:
          'Los desplegadores de sistemas de IA de alto riesgo adoptarán las medidas técnicas y organizativas adecuadas para utilizar dichos sistemas conforme a las instrucciones...',
      },
    ],
  },
  {
    id: 'q_art50_chatbots',
    topicId: 'transparency',
    topicLabel: 'Transparencia',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una entidad bancaria despliega un agente virtual de atención al cliente que atiende llamadas de voz de forma indistinguible de un operador humano. ¿Qué deber inexcusable establece el Art. 50?',
    options: [
      'Inscribir el agente en el registro de patentes de la Unión.',
      'Informar inmediatamente a la persona de que está interactuando con un sistema de IA.',
      'Ceder el código fuente del modelo a la AESIA.',
      'Limitar la duración de la llamada a un máximo de 5 minutos.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El Art. 50.1 obliga a diseñar el sistema para que las personas físicas sean informadas de forma clara y oportuna de que están interactuando con una IA, salvo que resulte obvio por el contexto.',
    enterpriseLesson:
      'La transparencia no puede ocultarse en la letra pequeña de los avisos legales; debe presentarse al comienzo de la interacción.',
    citations: [
      {
        citationId: 'EU-2024-1689:art_50.p1',
        boeId: 'DOUE-L-2024-81079',
        eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p1',
        displayLabel: 'Art. 50.1 · Deber de información al interactuar',
        exactQuote:
          'Los proveedores garantizarán que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen de manera que se informe de que interactúan con una IA...',
      },
    ],
  },
  {
    id: 'q_art51_gpai_flops',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI',
    articleId: 'art_51',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿A partir de qué umbral técnico cuantitativo se presume que un modelo de IA de uso general (GPAI) presenta "riesgo sistémico" bajo el Art. 51?',
    options: [
      'Más de 100 millones de parámetros y 10.000 usuarios activos diarios.',
      'Potencia de cálculo acumulada superior a 10^25 FLOPs utilizada para su entrenamiento.',
      'Facturación de más de 100 millones de euros en la Unión Europea.',
      'Cualquier modelo entrenado con datos no autorizados por el RGPD.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El Art. 51.1(a) y 51.2 fija el umbral numérico de presunción de riesgo sistémico en 10^25 operaciones de coma flotante (FLOPs) acumuladas durante el proceso de entrenamiento.',
    enterpriseLesson:
      'Los modelos que superan este umbral quedan sujetos a notificación obligatoria a la Comisión Europea y a realizar pruebas adversarias (red teaming).',
    citations: [
      {
        citationId: 'EU-2024-1689:art_51.p2',
        boeId: 'DOUE-L-2024-81079',
        eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
        targetType: 'paragraph',
        articleId: 'art_51',
        paragraphId: 'art_51.p2',
        displayLabel: 'Art. 51.2 · Umbral de 10^25 FLOPs para riesgo sistémico',
        exactQuote:
          'Se presumirá que un modelo de IA de uso general presenta capacidades de gran impacto cuando la cantidad acumulada de cálculo utilizada para su entrenamiento sea superior a 10^25 FLOPs...',
      },
    ],
  },
  {
    id: 'q_art99_penalties',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones',
    articleId: 'art_99',
    titleId: 'tit_XII',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      '¿Cuál es el límite máximo de sanción económica previsto en el Reglamento por incumplir los requisitos esenciales de un sistema de IA de alto riesgo (como la falta de gestión de riesgos o datos de calidad)?',
    options: [
      'Hasta 15.000.000 € o el 3% del volumen de negocios mundial total anual.',
      'Hasta 35.000.000 € o el 7% del volumen de negocios mundial total anual.',
      'Hasta 7.500.000 € o el 1.5% del volumen de negocios.',
      'Una sanción administrativa fija de 50.000 €.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El Art. 99.4 establece para el incumplimiento de las obligaciones de sistemas de alto riesgo multas de hasta 15M€ o el 3% de la facturación global anual (el tope de 35M€ / 7% se reserva para prácticas prohibidas del Art. 5).',
    enterpriseLesson:
      'Las sanciones corporativas calculadas sobre la facturación global imponen un estándar de riesgo equiparable o superior al del RGPD.',
    citations: [
      {
        citationId: 'EU-2024-1689:art_99.p4',
        boeId: 'DOUE-L-2024-81079',
        eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
        targetType: 'paragraph',
        articleId: 'art_99',
        paragraphId: 'art_99.p4',
        displayLabel: 'Art. 99.4 · Multas de hasta 15M€ / 3%',
        exactQuote:
          'El incumplimiento de cualquiera de las disposiciones aplicables a sistemas de alto riesgo se sancionará con multas de hasta 15 000 000 EUR o el 3 % del volumen de negocios total anual...',
      },
    ],
  },
  {
    id: 'q_deadlines_aug2026',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Deadlines',
    articleId: 'art_113',
    titleId: 'tit_XIII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'En el calendario de aplicación del Reglamento, ¿qué acontecimiento clave tuvo lugar el 2 de agosto de 2026?',
    options: [
      'La expiración definitiva de la moratoria para prácticas prohibidas.',
      'La plena aplicación de las obligaciones para sistemas de IA de alto riesgo del Anexo III y la transparencia del Art. 50.',
      'El cierre de la oficina de la AESIA en España.',
      'La entrada en vigor exclusiva para modelos cuánticos.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Conforme al Art. 113(c), a los 24 meses de la entrada en vigor (2 de agosto de 2026) resulta de plena aplicación el régimen general del Reglamento para sistemas de alto riesgo del Anexo III.',
    enterpriseLesson:
      'A partir de agosto de 2026 cualquier despliegue laboral, educativo o crediticio de alto riesgo en la UE debe estar en conformidad legal completa.',
    citations: [
      {
        citationId: 'EU-2024-1689:art_113.c',
        boeId: 'DOUE-L-2024-81079',
        eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.c',
        displayLabel: 'Art. 113(c) · Aplicación a los 24 meses (2 Ago 2026)',
        exactQuote:
          'El presente Reglamento será aplicable a partir del 2 de agosto de 2026, salvo excepciones expresas...',
      },
    ],
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s} s`;
  return `${m} min ${s} s`;
}

function getScoreLevel(scorePct: number): {
  label: string;
  badgeClass: string;
  icon: string;
  description: string;
} {
  if (scorePct >= 85) {
    return {
      label: 'Dominio Experto (≥85%)',
      badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      icon: '🏆',
      description: 'Preparación excelente para certificación y auditoría jurídica en el EU AI Act.',
    };
  }
  if (scorePct >= 70) {
    return {
      label: 'Apto / Solvencia Legal (70–84%)',
      badgeClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      icon: '🎖️',
      description: 'Nivel técnico y normativo sólido con buen entendimiento de deberes corporativos.',
    };
  }
  if (scorePct >= 50) {
    return {
      label: 'En Consolidación (50–69%)',
      badgeClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      icon: '⚠️',
      description: 'Base asimilada, pero con margen de mejora en artículos y sanciones específicas.',
    };
  }
  return {
    label: 'Refuerzo Prioritario (<50%)',
    badgeClass: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    icon: '🚨',
    description: 'Se recomienda estudio guiado y lectura atenta del articulado antes de certificar.',
  };
}

function synthesizeArticleQuestion(art: LegalArticle): QuizQuestion {
  const firstP = art.paragraphs[0];
  return {
    id: `art_${art.id}_synth_clean`,
    topicId: 'enterprise_cases',
    topicLabel: `${art.titleLabel} · Caso de Aplicación`,
    articleId: art.id,
    titleId: art.titleId,
    difficulty: 'intermedio',
    isPracticalCase: true,
    question: `En relación con el ${art.titleLabel} («${art.heading}»), ¿cuál es el mandato u obligación esencial que debe considerar una empresa afectada?`,
    options: [
      firstP?.enterpriseImpact?.actionItems[0] ||
        firstP?.plainExplanation?.slice(0, 200) ||
        art.summary,
      'Exención automática para todas las empresas que facturen menos de 50 millones de euros anuales.',
      'Sustituir la evaluación técnica por una declaración verbal interna sin trazabilidad documental.',
      'Delegar la responsabilidad jurídica exclusivamente en el proveedor de infraestructura en la nube.',
    ],
    correctOptionIndex: 0,
    explanation: firstP?.plainExplanation || art.summary,
    enterpriseLesson: art.enterpriseTakeaway,
    citations: firstP ? firstP.citations : [],
  };
}

export const QuizEngineView: React.FC<QuizEngineViewProps> = ({
  engine,
  initialTopicOrArticle,
  quizStats,
  onRecordAnswer,
  onNavigateCitation,
  examHistory = [],
  onRecordCompletedExam,
  onDeleteCompletedExam,
  onClearExamHistory,
}) => {
  // Navigation mode
  const [quizMode, setQuizMode] = useState<QuizMode>('study');

  // Pool of curated questions from corpus
  const allCuratedQuestions: QuizQuestion[] = useMemo(() => {
    const fromCorpus = engine.corpus.quizBank || [];
    return fromCorpus.length > 0 ? fromCorpus : FALLBACK_QUIZ_QUESTIONS;
  }, [engine]);

  // =========================================================================
  // MODO ESTUDIO: Estado y Filtros
  // =========================================================================
  const [selectedTopic, setSelectedTopic] = useState<string>(
    initialTopicOrArticle?.topicId || 'all'
  );
  const [selectedTitleId, setSelectedTitleId] = useState<string>('all');
  const [selectedArticleId, setSelectedArticleId] = useState<string>(
    initialTopicOrArticle?.articleId || 'all'
  );
  const [studyDifficulty, setStudyDifficulty] = useState<string>('all');
  const [studyFocus, setStudyFocus] = useState<string>('all');
  const [studyShuffleKey, setStudyShuffleKey] = useState<number>(0);
  const [studyCurrentIndex, setStudyCurrentIndex] = useState<number>(0);
  const [studySelectedOption, setStudySelectedOption] = useState<number | null>(null);
  const [isStudyAnswerSubmitted, setIsStudyAnswerSubmitted] = useState<boolean>(false);

  // Sync external topic or article jump
  useEffect(() => {
    if (initialTopicOrArticle?.articleId) {
      setSelectedTopic('all');
      setSelectedTitleId('all');
      setSelectedArticleId(initialTopicOrArticle.articleId);
      setQuizMode('study');
    } else if (initialTopicOrArticle?.topicId) {
      setSelectedArticleId('all');
      setSelectedTitleId('all');
      setSelectedTopic(initialTopicOrArticle.topicId);
      setQuizMode('study');
    }
  }, [initialTopicOrArticle?.topicId, initialTopicOrArticle?.articleId]);

  // Filtered articles according to selected Title
  const filteredArticlesForSelect = useMemo(() => {
    if (selectedTitleId === 'all') return engine.corpus.articles;
    return engine.corpus.articles.filter((a) => a.titleId === selectedTitleId);
  }, [engine.corpus.articles, selectedTitleId]);

  // Study questions calculation: Cero preguntas repetitivas dyn_...
  const studyQuestions: QuizQuestion[] = useMemo(() => {
    const matched = allCuratedQuestions.filter((q) => {
      if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
      if (selectedTitleId !== 'all' && q.titleId !== selectedTitleId) return false;
      if (selectedArticleId !== 'all' && q.articleId !== selectedArticleId) return false;
      if (studyDifficulty !== 'all' && q.difficulty !== studyDifficulty) return false;
      if (studyFocus === 'practical' && !q.isPracticalCase) return false;
      if (studyFocus === 'theory' && q.isPracticalCase) return false;
      return true;
    });

    // Solo si el usuario filtra por un artículo específico y hay 0 preguntas en el corpus, sintetizar 1 pregunta limpia
    if (selectedArticleId !== 'all' && matched.length === 0) {
      const art = engine.getArticle(selectedArticleId);
      if (art && art.paragraphs.length > 0) {
        return [synthesizeArticleQuestion(art)];
      }
    }

    if (studyShuffleKey > 0) {
      return shuffleArray(matched);
    }
    return matched;
  }, [
    allCuratedQuestions,
    selectedTopic,
    selectedTitleId,
    selectedArticleId,
    studyDifficulty,
    studyFocus,
    studyShuffleKey,
    engine,
  ]);

  // Reset study index on filter change
  useEffect(() => {
    setStudyCurrentIndex(0);
    setStudySelectedOption(null);
    setIsStudyAnswerSubmitted(false);
  }, [selectedTopic, selectedTitleId, selectedArticleId, studyDifficulty, studyFocus, studyShuffleKey]);

  const currentStudyQuestion: QuizQuestion | undefined = studyQuestions[studyCurrentIndex];

  const handleStudySelectOption = (optIdx: number) => {
    if (isStudyAnswerSubmitted) return;
    setStudySelectedOption(optIdx);
  };

  const handleStudySubmitAnswer = () => {
    if (studySelectedOption === null || !currentStudyQuestion || isStudyAnswerSubmitted) return;
    setIsStudyAnswerSubmitted(true);
    const isCorrect = studySelectedOption === currentStudyQuestion.correctOptionIndex;
    onRecordAnswer(currentStudyQuestion.topicId, currentStudyQuestion.articleId, isCorrect);
  };

  const handleStudyNext = () => {
    if (studyCurrentIndex + 1 < studyQuestions.length) {
      setStudyCurrentIndex((prev) => prev + 1);
      setStudySelectedOption(null);
      setIsStudyAnswerSubmitted(false);
    }
  };

  const handleStudyPrev = () => {
    if (studyCurrentIndex > 0) {
      setStudyCurrentIndex((prev) => prev - 1);
      setStudySelectedOption(null);
      setIsStudyAnswerSubmitted(false);
    }
  };

  // =========================================================================
  // MODO EXAMEN ALEATORIO (N Preguntas): Estado y Lógica
  // =========================================================================
  const [examState, setExamState] = useState<ExamState>('config');
  const [examSize, setExamSize] = useState<number>(20);
  const [customExamSizeInput, setCustomExamSizeInput] = useState<string>('20');
  const [examSamplingStrategy, setExamSamplingStrategy] = useState<
    'stratified_all' | 'custom_topics' | 'weakness_focus'
  >('stratified_all');
  const [examCustomSelectedTopics, setExamCustomSelectedTopics] = useState<QuizTopicId[]>([
    'prohibited',
    'high_risk',
    'gpai',
    'transparency',
  ]);
  const [examDifficultyFilter, setExamDifficultyFilter] = useState<
    'all' | 'medium_advanced' | 'practical_only'
  >('all');

  // Active Exam state
  const [activeExamQuestions, setActiveExamQuestions] = useState<QuizQuestion[]>([]);
  const [activeExamAnswers, setActiveExamAnswers] = useState<Record<number, number>>({});
  const [activeExamCurrentIndex, setActiveExamCurrentIndex] = useState<number>(0);
  const [activeExamTimeElapsed, setActiveExamTimeElapsed] = useState<number>(0);
  const [showConfirmFinishModal, setShowConfirmFinishModal] = useState<boolean>(false);

  // Diagnostic record (either freshly finished or viewed from history)
  const [diagnosticRecord, setDiagnosticRecord] = useState<CompletedExamRecord | null>(null);
  const [diagnosticFilter, setDiagnosticFilter] = useState<'all' | 'failures'>('all');
  const [diagnosticOriginIsHistory, setDiagnosticOriginIsHistory] = useState<boolean>(false);

  // Timer for active exam
  useEffect(() => {
    if (quizMode !== 'exam' || examState !== 'active') return;
    const interval = setInterval(() => {
      setActiveExamTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [quizMode, examState]);

  // Start exam handler
  const handleStartExam = (
    sizeOverride?: number,
    strategyOverride?: 'stratified_all' | 'custom_topics' | 'weakness_focus',
    customTopicsOverride?: QuizTopicId[]
  ) => {
    const size = sizeOverride ?? examSize;
    const strategy = strategyOverride ?? examSamplingStrategy;
    const customTopics = customTopicsOverride ?? examCustomSelectedTopics;

    // Filter candidate pool by difficulty
    let candidatePool = allCuratedQuestions.filter((q) => {
      if (examDifficultyFilter === 'medium_advanced') {
        if (q.difficulty !== 'intermedio' && q.difficulty !== 'avanzado') return false;
      } else if (examDifficultyFilter === 'practical_only') {
        if (!q.isPracticalCase) return false;
      }
      return true;
    });

    if (candidatePool.length === 0) {
      candidatePool = allCuratedQuestions;
    }

    const targetCount = Math.min(size, candidatePool.length);
    let selectedQuestions: QuizQuestion[] = [];

    if (strategy === 'custom_topics') {
      const topicSet = new Set(customTopics);
      const inTopics = candidatePool.filter((q) => topicSet.has(q.topicId));
      const poolToUse = inTopics.length >= targetCount ? inTopics : candidatePool;
      selectedQuestions = shuffleArray(poolToUse).slice(0, targetCount);
    } else if (strategy === 'weakness_focus') {
      // Prioritize topics with low accuracy or questions failed in past exams
      const failedIds = new Set<string>();
      examHistory.forEach((h) => {
        h.questionResults.forEach((qr) => {
          if (!qr.isCorrect) failedIds.add(qr.questionId);
        });
      });

      const scored = candidatePool.map((q) => {
        let weight = 50;
        const topicStat = quizStats.byTopic[q.topicId];
        if (topicStat && topicStat.answered > 0) {
          const acc = (topicStat.correct / topicStat.answered) * 100;
          weight += 100 - acc;
        }
        if (failedIds.has(q.id)) {
          weight += 80;
        }
        weight += Math.random() * 30 - 15;
        return { q, weight };
      });

      scored.sort((a, b) => b.weight - a.weight);
      selectedQuestions = shuffleArray(scored.slice(0, targetCount).map((s) => s.q));
    } else {
      // Stratified all 7 topics
      const buckets = new Map<QuizTopicId, QuizQuestion[]>();
      ALL_TOPIC_IDS.forEach((tid) => buckets.set(tid, []));
      candidatePool.forEach((q) => {
        const arr = buckets.get(q.topicId);
        if (arr) arr.push(q);
      });
      ALL_TOPIC_IDS.forEach((tid) => {
        const arr = buckets.get(tid)!;
        buckets.set(tid, shuffleArray(arr));
      });

      const picked: QuizQuestion[] = [];
      const pickedIds = new Set<string>();
      let round = 0;
      let addedInRound = true;

      while (picked.length < targetCount && addedInRound) {
        addedInRound = false;
        for (const tid of ALL_TOPIC_IDS) {
          if (picked.length >= targetCount) break;
          const list = buckets.get(tid)!;
          if (round < list.length) {
            const item = list[round];
            if (!pickedIds.has(item.id)) {
              picked.push(item);
              pickedIds.add(item.id);
              addedInRound = true;
            }
          }
        }
        round++;
      }

      if (picked.length < targetCount) {
        for (const q of shuffleArray(candidatePool)) {
          if (picked.length >= targetCount) break;
          if (!pickedIds.has(q.id)) {
            picked.push(q);
            pickedIds.add(q.id);
          }
        }
      }

      selectedQuestions = shuffleArray(picked);
    }

    setActiveExamQuestions(selectedQuestions);
    setActiveExamAnswers({});
    setActiveExamCurrentIndex(0);
    setActiveExamTimeElapsed(0);
    setShowConfirmFinishModal(false);
    setDiagnosticOriginIsHistory(false);
    setExamState('active');
    setQuizMode('exam');
  };

  // Option selection in active exam
  const handleExamSelectOption = (optIndex: number) => {
    setActiveExamAnswers((prev) => ({
      ...prev,
      [activeExamCurrentIndex]: optIndex,
    }));
  };

  // Finalize and grade active exam
  const handleFinalizeExam = () => {
    let correctCount = 0;
    const questionResults: CompletedExamQuestionResult[] = [];

    const topicTotals: Record<QuizTopicId, { correct: number; total: number }> = {
      prohibited: { correct: 0, total: 0 },
      high_risk: { correct: 0, total: 0 },
      gpai: { correct: 0, total: 0 },
      transparency: { correct: 0, total: 0 },
      governance_sanctions: { correct: 0, total: 0 },
      deadlines: { correct: 0, total: 0 },
      enterprise_cases: { correct: 0, total: 0 },
    };

    const titleTotals: Record<string, { correct: number; total: number; label: string }> = {};

    activeExamQuestions.forEach((q, idx) => {
      const selected = activeExamAnswers[idx] ?? null;
      const isCorrect = selected === q.correctOptionIndex;
      if (isCorrect) correctCount++;

      questionResults.push({
        questionId: q.id,
        topicId: q.topicId,
        titleId: q.titleId,
        articleId: q.articleId,
        selectedOptionIndex: selected,
        correctOptionIndex: q.correctOptionIndex,
        isCorrect,
      });

      if (topicTotals[q.topicId]) {
        topicTotals[q.topicId].total += 1;
        if (isCorrect) topicTotals[q.topicId].correct += 1;
      }

      if (!titleTotals[q.titleId]) {
        const titleObj = engine.corpus.titles.find((t) => t.id === q.titleId);
        const titleLabel = titleObj
          ? titleObj.roman
            ? `Título ${titleObj.roman}`
            : titleObj.name
          : q.titleId;
        titleTotals[q.titleId] = { correct: 0, total: 0, label: titleLabel };
      }
      titleTotals[q.titleId].total += 1;
      if (isCorrect) titleTotals[q.titleId].correct += 1;
    });

    const byTopic: ExamTopicBreakdown[] = (Object.keys(topicTotals) as QuizTopicId[])
      .filter((tid) => topicTotals[tid].total > 0)
      .map((tid) => ({
        topicId: tid,
        topicLabel: TOPIC_METADATA[tid]?.label || tid,
        correct: topicTotals[tid].correct,
        total: topicTotals[tid].total,
        accuracyPct: Math.round((topicTotals[tid].correct / topicTotals[tid].total) * 100),
      }));

    const byTitle: ExamTitleBreakdown[] = Object.keys(titleTotals).map((tid) => ({
      titleId: tid,
      titleLabel: titleTotals[tid].label,
      correct: titleTotals[tid].correct,
      total: titleTotals[tid].total,
      accuracyPct: Math.round((titleTotals[tid].correct / titleTotals[tid].total) * 100),
    }));

    const scorePct = Math.round((correctCount / activeExamQuestions.length) * 100);

    let scopeDesc = 'Toda la Ley (Estratificado Global)';
    if (examSamplingStrategy === 'custom_topics') {
      scopeDesc = `Temas específicos (${examCustomSelectedTopics
        .map((t) => TOPIC_METADATA[t]?.shortLabel || t)
        .join(', ')})`;
    } else if (examSamplingStrategy === 'weakness_focus') {
      scopeDesc = 'Refuerzo Inteligente (Puntos Flojos)';
    }

    const record: CompletedExamRecord = {
      id: `exam_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      completedAtIso: new Date().toISOString(),
      questionCount: activeExamQuestions.length,
      correctCount,
      scorePct,
      durationSeconds: activeExamTimeElapsed,
      scopeDescription: scopeDesc,
      samplingStrategy: examSamplingStrategy,
      byTopic,
      byTitle,
      questionResults,
    };

    if (onRecordCompletedExam) {
      onRecordCompletedExam(record);
    }

    setDiagnosticRecord(record);
    setShowConfirmFinishModal(false);
    setExamState('diagnostic');
  };

  // View diagnostic report from history
  const handleViewHistoricalExam = (exam: CompletedExamRecord) => {
    setDiagnosticRecord(exam);
    setDiagnosticOriginIsHistory(true);
    setDiagnosticFilter('all');
    setExamState('diagnostic');
    setQuizMode('exam');
  };

  // Mode tabs definition
  const MODE_TABS: FilterOption<QuizMode>[] = [
    { id: 'study', label: '📚 Estudio por Temas y Artículos' },
    { id: 'exam', label: '🎯 Examen Aleatorio (N Preguntas)' },
    {
      id: 'history',
      label: '📈 Historial y Evolución',
      count: examHistory.length > 0 ? examHistory.length.toString() : undefined,
    },
  ];

  // =========================================================================
  // CÁLCULOS LONGITUDINALES Y ESTADÍSTICAS GLOBALES PARA HISTORIAL
  // =========================================================================
  const historicalMetrics = useMemo(() => {
    if (examHistory.length === 0) return null;

    const totalExams = examHistory.length;
    const avgScore = Math.round(
      examHistory.reduce((acc, curr) => acc + curr.scorePct, 0) / totalExams
    );
    const maxScore = Math.max(...examHistory.map((h) => h.scorePct));

    const oldest = examHistory[examHistory.length - 1];
    const latest = examHistory[0];
    const scoreDiff = totalExams >= 2 ? latest.scorePct - oldest.scorePct : 0;

    // Longitudinal comparison per topic
    const topicEvolution = ALL_TOPIC_IDS.map((tid) => {
      const topicExams = examHistory
        .map((e) => {
          const breakdown = e.byTopic.find((bt) => bt.topicId === tid);
          return breakdown ? { date: e.completedAtIso, pct: breakdown.accuracyPct, correct: breakdown.correct, total: breakdown.total } : null;
        })
        .filter((item): item is NonNullable<typeof item> => item !== null);

      if (topicExams.length === 0) {
        return {
          topicId: tid,
          topicLabel: TOPIC_METADATA[tid].label,
          shortLabel: TOPIC_METADATA[tid].shortLabel,
          testedCount: 0,
          firstPct: null,
          prevPct: null,
          latestPct: null,
          avgPct: 0,
          trend: 0,
        };
      }

      const totalCorrect = topicExams.reduce((acc, curr) => acc + curr.correct, 0);
      const totalQuestions = topicExams.reduce((acc, curr) => acc + curr.total, 0);
      const avgPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

      const firstPct = topicExams[topicExams.length - 1].pct;
      const latestPct = topicExams[0].pct;
      const prevPct = topicExams.length >= 2 ? topicExams[1].pct : firstPct;
      const trend = topicExams.length >= 2 ? latestPct - prevPct : 0;

      return {
        topicId: tid,
        topicLabel: TOPIC_METADATA[tid].label,
        shortLabel: TOPIC_METADATA[tid].shortLabel,
        testedCount: topicExams.length,
        firstPct,
        prevPct,
        latestPct,
        avgPct,
        trend,
      };
    });

    return {
      totalExams,
      avgScore,
      maxScore,
      scoreDiff,
      topicEvolution,
    };
  }, [examHistory]);

  return (
    <div className="h-full w-full flex flex-col min-w-0 bg-slate-950/20">
      {/* Top Header Bar with Segmented Mode Tabs */}
      <header className="shrink-0 p-4 sm:p-5 border-b border-slate-800/80 bg-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">
                Certificación & Evaluación Pro · EU AI Act
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Modelo Oficial 2026
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Laboratorio de Evaluación y Simulador de Examen
            </h1>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <SegmentedFilterBar
              options={MODE_TABS}
              value={quizMode}
              onChange={(mode) => {
                setQuizMode(mode);
                if (mode === 'exam' && examState === 'diagnostic' && diagnosticOriginIsHistory) {
                  // return to config if navigating normally
                  setExamState('config');
                }
              }}
              size="sm"
              className="w-full"
            />
          </div>
        </div>
      </header>

      {/* Main Mode Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 min-w-0">
        <div className="max-w-5xl mx-auto space-y-6 min-w-0 break-words">
          {/* ================================================================= */}
          {/* MODO A: ESTUDIO POR TEMAS Y ARTÍCULOS                             */}
          {/* ================================================================= */}
          {quizMode === 'study' && (
            <div className="space-y-6 min-w-0">
              {/* Study Filter Controls */}
              <div className="p-4 sm:p-5 rounded-xl border border-slate-800/80 bg-slate-900 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    <span>Filtros de Estudio Normativo</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setStudyShuffleKey((k) => k + 1)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="Barajar preguntas de la selección actual"
                    >
                      <Shuffle className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Barajar</span>
                    </button>

                    <span className="font-mono text-xs text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                      {studyQuestions.length} {studyQuestions.length === 1 ? 'pregunta' : 'preguntas'}
                    </span>
                  </div>
                </div>

                {/* Primary Topic Selector Pills with Mastery Percentage */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    1. Bloque Temático y % de Dominio Histórico:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {QUIZ_TOPICS.map((topic) => {
                      const isSelected = selectedTopic === topic.id;
                      const count =
                        topic.id === 'all'
                          ? allCuratedQuestions.length
                          : allCuratedQuestions.filter((q) => q.topicId === topic.id).length;

                      const topicStat =
                        topic.id !== 'all' ? quizStats.byTopic[topic.id] : undefined;
                      const masteryPct =
                        topicStat && topicStat.answered > 0
                          ? Math.round((topicStat.correct / topicStat.answered) * 100)
                          : null;

                      return (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => {
                            setSelectedTopic(topic.id);
                            setSelectedArticleId('all');
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all select-none flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                              : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                          }`}
                        >
                          <span>{topic.label}</span>
                          <span
                            className={`font-mono text-[10px] px-1.5 py-0.2 rounded ${
                              isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {count}
                          </span>
                          {masteryPct !== null && (
                            <span
                              className={`font-mono text-[10px] px-1 py-0.2 rounded font-bold ${
                                isSelected
                                  ? 'bg-indigo-800 text-emerald-300'
                                  : masteryPct >= 70
                                  ? 'text-emerald-400'
                                  : masteryPct >= 50
                                  ? 'text-amber-400'
                                  : 'text-rose-400'
                              }`}
                              title={`Histórico: ${masteryPct}% de aciertos en este bloque`}
                            >
                              {masteryPct}%
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-Filters: Title, Article, Difficulty, Focus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-800/40">
                  {/* Title Filter */}
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Título de la Ley:
                    </label>
                    <select
                      value={selectedTitleId}
                      onChange={(e) => {
                        setSelectedTitleId(e.target.value);
                        setSelectedArticleId('all');
                      }}
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="all">Todos los Títulos (I-XIII)</option>
                      {engine.corpus.titles.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.roman ? `Título ${t.roman} · ${t.name.slice(0, 35)}...` : t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Specific Article Filter */}
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Artículo Específico:
                    </label>
                    <select
                      value={selectedArticleId}
                      onChange={(e) => setSelectedArticleId(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="all">Todos los Artículos</option>
                      {filteredArticlesForSelect.map((art) => (
                        <option key={art.id} value={art.id}>
                          {art.titleLabel}: {art.heading.slice(0, 32)}...
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Dificultad:
                    </label>
                    <select
                      value={studyDifficulty}
                      onChange={(e) => setStudyDifficulty(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="all">Todas las Dificultades</option>
                      <option value="básico">Básico</option>
                      <option value="intermedio">Intermedio</option>
                      <option value="avanzado">Avanzado</option>
                    </select>
                  </div>

                  {/* Focus Filter */}
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Enfoque:
                    </label>
                    <select
                      value={studyFocus}
                      onChange={(e) => setStudyFocus(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="all">Casos Prácticos y Teoría</option>
                      <option value="practical">Solo Casos Prácticos</option>
                      <option value="theory">Solo Teoría Normativa</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Study Question View */}
              {studyQuestions.length === 0 ? (
                <div className="p-8 rounded-xl border border-dashed border-slate-800 bg-slate-900/30 text-center space-y-3">
                  <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
                  <h3 className="text-sm font-semibold text-white">
                    No hay preguntas para los filtros seleccionados
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Prueba a seleccionar «Todos los Títulos» o relajar los filtros de dificultad y enfoque para explorar preguntas disponibles.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTopic('all');
                      setSelectedTitleId('all');
                      setSelectedArticleId('all');
                      setStudyDifficulty('all');
                      setStudyFocus('all');
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    Restablecer Filtros
                  </button>
                </div>
              ) : currentStudyQuestion ? (
                <div className="space-y-4">
                  {/* Jump Selector and Question Progress */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-400">Pregunta:</span>
                      <select
                        value={studyCurrentIndex}
                        onChange={(e) => {
                          setStudyCurrentIndex(Number(e.target.value));
                          setStudySelectedOption(null);
                          setIsStudyAnswerSubmitted(false);
                        }}
                        className="bg-slate-900 border border-slate-800 rounded-md px-2 py-1 text-xs text-white font-mono"
                      >
                        {studyQuestions.map((_, idx) => (
                          <option key={idx} value={idx}>
                            Pregunta {idx + 1} de {studyQuestions.length}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleStudyPrev}
                        disabled={studyCurrentIndex === 0}
                        className="p-1.5 rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        title="Pregunta anterior"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <span className="font-mono text-xs text-slate-400">
                        {studyCurrentIndex + 1} / {studyQuestions.length}
                      </span>
                      <button
                        type="button"
                        onClick={handleStudyNext}
                        disabled={studyCurrentIndex === studyQuestions.length - 1}
                        className="p-1.5 rounded-md border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        title="Siguiente pregunta"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Question Card */}
                  <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900 space-y-6 shadow-xl">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          {currentStudyQuestion.topicLabel}
                        </span>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {currentStudyQuestion.difficulty.toUpperCase()}
                        </span>
                        {currentStudyQuestion.isPracticalCase && (
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                            CASO EMPRESARIAL
                          </span>
                        )}
                      </div>

                      <span className="font-mono text-xs text-slate-500">
                        {currentStudyQuestion.articleId.replace('art_', 'Art. ')}
                      </span>
                    </div>

                    {/* Question Prompt */}
                    <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                      {currentStudyQuestion.question}
                    </p>

                    {/* Options list */}
                    <div className="space-y-3">
                      {currentStudyQuestion.options.map((optText, optIdx) => {
                        const isSelected = studySelectedOption === optIdx;
                        const isCorrectOption = optIdx === currentStudyQuestion.correctOptionIndex;

                        let optionStyle =
                          'border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-slate-700 text-slate-200';

                        if (isSelected && !isStudyAnswerSubmitted) {
                          optionStyle =
                            'border-indigo-500 bg-indigo-950/40 text-white ring-1 ring-indigo-500';
                        } else if (isStudyAnswerSubmitted) {
                          if (isCorrectOption) {
                            optionStyle =
                              'border-emerald-500/80 bg-emerald-950/40 text-emerald-200 font-semibold ring-1 ring-emerald-500/60';
                          } else if (isSelected && !isCorrectOption) {
                            optionStyle =
                              'border-rose-500/80 bg-rose-950/40 text-rose-200 ring-1 ring-rose-500/60';
                          } else {
                            optionStyle = 'border-slate-800/60 bg-slate-900/30 text-slate-400 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleStudySelectOption(optIdx)}
                            disabled={isStudyAnswerSubmitted}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 select-none ${optionStyle}`}
                          >
                            <span className="font-mono text-xs font-bold shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center bg-slate-800/80 border border-slate-700 text-slate-300">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="text-sm leading-relaxed min-w-0 flex-1">{optText}</span>
                            {isStudyAnswerSubmitted && isCorrectOption && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            )}
                            {isStudyAnswerSubmitted && isSelected && !isCorrectOption && (
                              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Action Bar: Check answer or navigate next */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        {!isStudyAnswerSubmitted ? (
                          <button
                            type="button"
                            onClick={handleStudySubmitAnswer}
                            disabled={studySelectedOption === null}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-indigo-600/20"
                          >
                            <Check className="w-4 h-4" />
                            <span>Comprobar Respuesta</span>
                          </button>
                        ) : (
                          <div className="inline-flex items-center gap-2 text-xs font-semibold">
                            {studySelectedOption === currentStudyQuestion.correctOptionIndex ? (
                              <span className="text-emerald-400 flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4" /> ¡Respuesta Correcta!
                              </span>
                            ) : (
                              <span className="text-rose-400 flex items-center gap-1.5">
                                <XCircle className="w-4 h-4" /> Respuesta Incorrecta
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleStudyPrev}
                          disabled={studyCurrentIndex === 0}
                          className="px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-colors"
                        >
                          Anterior
                        </button>
                        <button
                          type="button"
                          onClick={handleStudyNext}
                          disabled={studyCurrentIndex === studyQuestions.length - 1}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <span>Siguiente</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Immediate Post-Answer Feedback */}
                    {isStudyAnswerSubmitted && (
                      <div className="pt-4 border-t border-slate-800 space-y-4 animate-fadeIn">
                        {/* Legal Explanation */}
                        <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                            <Scale className="w-4 h-4 text-indigo-400" />
                            <span>Fundamento Jurídico Oficial (EU AI Act)</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                            {currentStudyQuestion.explanation}
                          </p>
                        </div>

                        {/* Enterprise Compliance Lesson */}
                        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                            <Lightbulb className="w-4 h-4 text-amber-400" />
                            <span>Lección de Compliance Empresarial</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                            {currentStudyQuestion.enterpriseLesson}
                          </p>
                        </div>

                        {/* Clickable Citations */}
                        {currentStudyQuestion.citations && currentStudyQuestion.citations.length > 0 && (
                          <div className="space-y-1.5 pt-1">
                            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                              Citas Legales Verificables (Clic para abrir en Lector):
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {currentStudyQuestion.citations.map((c, cIdx) => (
                                <CitationBadge
                                  key={cIdx}
                                  citation={c}
                                  onSelect={onNavigateCitation}
                                  size="sm"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* ================================================================= */}
          {/* MODO B: EXAMEN ALEATORIO DE N PREGUNTAS                           */}
          {/* ================================================================= */}
          {quizMode === 'exam' && (
            <div className="space-y-6 min-w-0">
              {/* SUB-ESTADO 1: CONFIGURACIÓN DE EXAMEN */}
              {examState === 'config' && (
                <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900 space-y-7 shadow-xl">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                      <Target className="w-4 h-4 text-indigo-400" />
                      <span>Configuración del Simulador de Examen</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      Diseña tu Examen Aleatorio del EU AI Act
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Elige el tamaño del test, la estrategia de selección y los filtros de dificultad. Al finalizar obtendrás un diagnóstico exhaustivo de tus puntos fuertes y áreas a reforzar.
                    </p>
                  </div>

                  {/* 1. Tamaño del Test (N preguntas) */}
                  <div className="space-y-2.5">
                    <label className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      1. Número de Preguntas (N):
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {[10, 20, 30, 48].map((sizeOpt) => {
                        const isAll = sizeOpt === 48;
                        const label = isAll ? `Todas (${allCuratedQuestions.length})` : `${sizeOpt} Preguntas`;
                        const isSelected = examSize === sizeOpt;
                        return (
                          <button
                            key={sizeOpt}
                            type="button"
                            onClick={() => {
                              setExamSize(sizeOpt);
                              setCustomExamSizeInput(sizeOpt.toString());
                            }}
                            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-all ${
                              isSelected
                                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}

                      {/* Custom input */}
                      <div className="flex items-center gap-1.5 ml-2">
                        <span className="text-xs text-slate-400 font-mono">Otro:</span>
                        <input
                          type="number"
                          min={5}
                          max={allCuratedQuestions.length}
                          value={customExamSizeInput}
                          onChange={(e) => {
                            setCustomExamSizeInput(e.target.value);
                            const parsed = parseInt(e.target.value, 10);
                            if (!isNaN(parsed) && parsed >= 5) {
                              setExamSize(Math.min(parsed, allCuratedQuestions.length));
                            }
                          }}
                          className="w-16 bg-slate-950 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-center text-white font-mono focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2. Estrategia de Selección Aleatoria */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      2. Estrategia de Selección de Preguntas:
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* Stratified All */}
                      <button
                        type="button"
                        onClick={() => setExamSamplingStrategy('stratified_all')}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          examSamplingStrategy === 'stratified_all'
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                            : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 pb-1.5">
                          <span className="font-mono font-bold text-xs text-indigo-400">
                            Estratificado Global
                          </span>
                          {examSamplingStrategy === 'stratified_all' && (
                            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">Toda la Ley (Equilibrado)</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Reparte las {examSize} preguntas equitativamente entre los 7 bloques temáticos y los 13 Títulos para una evaluación holística.
                        </p>
                      </button>

                      {/* Custom Topics */}
                      <button
                        type="button"
                        onClick={() => setExamSamplingStrategy('custom_topics')}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          examSamplingStrategy === 'custom_topics'
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                            : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 pb-1.5">
                          <span className="font-mono font-bold text-xs text-amber-400">
                            Selección Personalizada
                          </span>
                          {examSamplingStrategy === 'custom_topics' && (
                            <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">Por Bloques a Medida</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Permite marcar qué bloques temáticos específicos quieres incluir en el sorteo aleatorio.
                        </p>
                      </button>

                      {/* Weakness Focus */}
                      <button
                        type="button"
                        onClick={() => setExamSamplingStrategy('weakness_focus')}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          examSamplingStrategy === 'weakness_focus'
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                            : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 pb-1.5">
                          <span className="font-mono font-bold text-xs text-rose-400">
                            Refuerzo Inteligente
                          </span>
                          {examSamplingStrategy === 'weakness_focus' && (
                            <CheckCircle2 className="w-4 h-4 text-rose-400" />
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">Foco en Puntos Flojos</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Prioriza preguntas de temas con menor % de aciertos histórico o falladas en exámenes anteriores.
                        </p>
                      </button>
                    </div>

                    {/* Custom Topics Checkbox Grid if custom_topics is selected */}
                    {examSamplingStrategy === 'custom_topics' && (
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 space-y-2 mt-3 animate-fadeIn">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          Selecciona los bloques a incluir:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {ALL_TOPIC_IDS.map((tid) => {
                            const isChecked = examCustomSelectedTopics.includes(tid);
                            return (
                              <label
                                key={tid}
                                className="flex items-center gap-2.5 p-2 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-850 cursor-pointer select-none text-xs text-slate-200"
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {
                                    setExamCustomSelectedTopics((prev) =>
                                      prev.includes(tid)
                                        ? prev.length > 1
                                          ? prev.filter((t) => t !== tid)
                                          : prev
                                        : [...prev, tid]
                                    );
                                  }}
                                  className="w-4 h-4 rounded text-indigo-600 focus:ring-0 bg-slate-950 border-slate-700"
                                />
                                <span>{TOPIC_METADATA[tid].label}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. Filtro opcional de Dificultad */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      3. Filtro Opcional de Dificultad:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'all', label: 'Todas las Dificultades' },
                        { id: 'medium_advanced', label: 'Solo Intermedio + Avanzado' },
                        { id: 'practical_only', label: 'Solo Casos Prácticos' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setExamDifficultyFilter(opt.id as any)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                            examDifficultyFilter === opt.id
                              ? 'bg-indigo-600 text-white border-indigo-500'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Start Exam CTA */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-400">
                      <span>Total estimado: </span>
                      <strong className="text-white font-mono">{examSize} preguntas aleatorias</strong>
                      <span> · Tiempo sin límite estricto</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleStartExam()}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Iniciar Examen Aleatorio de {examSize} Preguntas</span>
                    </button>
                  </div>
                </div>
              )}

              {/* SUB-ESTADO 2: EXAMEN ACTIVO */}
              {examState === 'active' && activeExamQuestions.length > 0 && (
                <div className="space-y-6">
                  {/* Active Exam Header: Timer, Progress bar, Fast Nav Grid */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900 space-y-4 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-mono font-bold text-xs">
                          <Clock className="w-4 h-4 text-indigo-400" />
                          <span>{formatDuration(activeExamTimeElapsed)}</span>
                        </div>

                        <span className="font-mono text-xs text-slate-400">
                          {Object.keys(activeExamAnswers).length} de {activeExamQuestions.length} respondidas
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          const unanswered =
                            activeExamQuestions.length - Object.keys(activeExamAnswers).length;
                          if (unanswered > 0) {
                            setShowConfirmFinishModal(true);
                          } else {
                            handleFinalizeExam();
                          }
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all"
                      >
                        Finalizar y Calificar Examen
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-indigo-500 h-full transition-all duration-300"
                        style={{
                          width: `${Math.round(
                            (Object.keys(activeExamAnswers).length / activeExamQuestions.length) * 100
                          )}%`,
                        }}
                      />
                    </div>

                    {/* Fast Navigation Grid (1..N) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Mapa de preguntas (clic para saltar):</span>
                        <div className="flex items-center gap-3 text-[10px]">
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded bg-indigo-600 inline-block" /> Respondida
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded border border-slate-700 bg-slate-900 inline-block" /> Pendiente
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-1 bg-slate-950/40 rounded-lg border border-slate-800/60">
                        {activeExamQuestions.map((_, idx) => {
                          const isAnswered = activeExamAnswers[idx] !== undefined;
                          const isCurrent = activeExamCurrentIndex === idx;

                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveExamCurrentIndex(idx)}
                              className={`w-7 h-7 rounded-md font-mono text-xs font-semibold flex items-center justify-center transition-all ${
                                isCurrent
                                  ? 'ring-2 ring-indigo-400 font-bold ' +
                                    (isAnswered
                                      ? 'bg-indigo-600 text-white'
                                      : 'bg-slate-850 text-white border border-indigo-500')
                                  : isAnswered
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Active Question Card */}
                  {activeExamQuestions[activeExamCurrentIndex] && (
                    <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900 space-y-6 shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                            Pregunta {activeExamCurrentIndex + 1} de {activeExamQuestions.length}
                          </span>
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            {activeExamQuestions[activeExamCurrentIndex].topicLabel}
                          </span>
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            {activeExamQuestions[activeExamCurrentIndex].difficulty.toUpperCase()}
                          </span>
                        </div>

                        <span className="font-mono text-xs text-slate-500">
                          {activeExamQuestions[activeExamCurrentIndex].articleId.replace('art_', 'Art. ')}
                        </span>
                      </div>

                      <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                        {activeExamQuestions[activeExamCurrentIndex].question}
                      </p>

                      {/* Options */}
                      <div className="space-y-3">
                        {activeExamQuestions[activeExamCurrentIndex].options.map((optText, optIdx) => {
                          const isSelected =
                            activeExamAnswers[activeExamCurrentIndex] === optIdx;

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleExamSelectOption(optIdx)}
                              className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 select-none ${
                                isSelected
                                  ? 'border-indigo-500 bg-indigo-950/40 text-white ring-1 ring-indigo-500 shadow-sm'
                                  : 'border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-slate-700 text-slate-200'
                              }`}
                            >
                              <span className="font-mono text-xs font-bold shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center bg-slate-800 border border-slate-700 text-slate-300">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="text-sm leading-relaxed min-w-0 flex-1">{optText}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Navigation bottom bar */}
                      <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveExamCurrentIndex((prev) => Math.max(0, prev - 1))}
                          disabled={activeExamCurrentIndex === 0}
                          className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-colors"
                        >
                          Anterior
                        </button>

                        <span className="font-mono text-xs text-slate-400">
                          {activeExamCurrentIndex + 1} / {activeExamQuestions.length}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            setActiveExamCurrentIndex((prev) =>
                              Math.min(activeExamQuestions.length - 1, prev + 1)
                            )
                          }
                          disabled={activeExamCurrentIndex === activeExamQuestions.length - 1}
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold transition-colors"
                        >
                          Siguiente
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Confirmation Modal if ending with blanks */}
                  {showConfirmFinishModal && (
                    <div className="p-4 rounded-xl border border-amber-500/50 bg-amber-950/40 space-y-3 animate-fadeIn">
                      <div className="flex items-center gap-2 text-amber-300 font-bold text-xs font-mono uppercase">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span>Preguntas sin responder detectadas</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        Te quedan{' '}
                        <strong className="text-white font-mono">
                          {activeExamQuestions.length - Object.keys(activeExamAnswers).length} preguntas en blanco
                        </strong>{' '}
                        de las {activeExamQuestions.length}. Las preguntas no respondidas contarán como fallos. ¿Deseas calificar de todos modos?
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={() => setShowConfirmFinishModal(false)}
                          className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs text-slate-300 hover:text-white"
                        >
                          Seguir respondiendo
                        </button>
                        <button
                          type="button"
                          onClick={handleFinalizeExam}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white"
                        >
                          Sí, finalizar y calificar ahora
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SUB-ESTADO 3: INFORME DIAGNÓSTICO POST-EXAMEN */}
              {examState === 'diagnostic' && diagnosticRecord && (
                <div className="space-y-6">
                  {/* Diagnostic Header with Score & Level */}
                  {(() => {
                    const level = getScoreLevel(diagnosticRecord.scorePct);
                    const weakTopics = diagnosticRecord.byTopic.filter(
                      (bt) => bt.accuracyPct < 50 || bt.correct < bt.total
                    );
                    const consolidatingTopics = diagnosticRecord.byTopic.filter(
                      (bt) => bt.accuracyPct >= 50 && bt.accuracyPct < 80
                    );
                    const strongTopics = diagnosticRecord.byTopic.filter(
                      (bt) => bt.accuracyPct >= 80
                    );

                    return (
                      <>
                        <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900 space-y-6 shadow-xl">
                          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">
                                Informe Diagnóstico Oficial de Examen
                              </span>
                              {diagnosticOriginIsHistory && (
                                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                  Histórico
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setExamState('config')}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Configurar Nuevo Examen</span>
                              </button>

                              {diagnosticOriginIsHistory && (
                                <button
                                  type="button"
                                  onClick={() => setQuizMode('history')}
                                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                                >
                                  Volver al Historial
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Score and Stats Banner */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            {/* Score Big Pill */}
                            <div className="md:col-span-1 p-5 rounded-xl border border-indigo-500/30 bg-indigo-950/20 text-center space-y-1">
                              <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight block">
                                {diagnosticRecord.scorePct}%
                              </span>
                              <span className="font-mono text-xs text-indigo-300 font-bold block">
                                NOTA GLOBAL
                              </span>
                              <span className="font-mono text-[11px] text-slate-400 block">
                                {diagnosticRecord.correctCount} de {diagnosticRecord.questionCount} correctas
                              </span>
                            </div>

                            {/* Level Description */}
                            <div className="md:col-span-3 space-y-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span
                                  className={`px-3 py-1 rounded-full font-mono text-xs font-bold border ${level.badgeClass}`}
                                >
                                  {level.icon} {level.label}
                                </span>
                                <span className="font-mono text-xs text-slate-400">
                                  Duración: {formatDuration(diagnosticRecord.durationSeconds)}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                {level.description}
                              </p>
                              <p className="text-[11px] font-mono text-slate-400">
                                Ámbito: {diagnosticRecord.scopeDescription} · Fecha:{' '}
                                {new Date(diagnosticRecord.completedAtIso).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* DIAGNÓSTICO: ¿QUÉ TENGO MÁS FLOJO Y EN QUÉ VOY MEJOR? (3 BLOQUES) */}
                        <div className="space-y-3">
                          <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Diagnóstico de Fortalezas y Debilidades:
                          </h3>

                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {/* 1. Refuerzo Prioritario / Puntos Flojos (<50% o con fallos) */}
                            <div className="p-5 rounded-xl border border-rose-500/30 bg-rose-950/15 space-y-3">
                              <div className="flex items-center justify-between gap-2 pb-2 border-b border-rose-500/20">
                                <div className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                                  <h4 className="font-bold text-xs text-rose-200 uppercase tracking-wider">
                                    Qué tengo más flojo
                                  </h4>
                                </div>
                                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                  {weakTopics.length} {weakTopics.length === 1 ? 'bloque' : 'bloques'}
                                </span>
                              </div>

                              {weakTopics.length === 0 ? (
                                <p className="text-xs text-slate-400 italic">
                                  ¡Excelente! No tienes ningún bloque con rendimiento crítico en este examen.
                                </p>
                              ) : (
                                <div className="space-y-3">
                                  {weakTopics.map((bt) => (
                                    <div
                                      key={bt.topicId}
                                      className="p-3 rounded-lg border border-rose-500/20 bg-slate-900/60 space-y-2"
                                    >
                                      <div className="flex items-center justify-between text-xs">
                                        <span className="font-semibold text-white truncate">
                                          {bt.topicLabel}
                                        </span>
                                        <span className="font-mono font-bold text-rose-400 shrink-0">
                                          {bt.correct}/{bt.total} ({bt.accuracyPct}%)
                                        </span>
                                      </div>

                                      <div className="flex items-center gap-2 pt-1">
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setSelectedTopic(bt.topicId);
                                            setSelectedTitleId('all');
                                            setSelectedArticleId('all');
                                            setQuizMode('study');
                                          }}
                                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 text-[11px] font-medium border border-slate-700 transition-colors"
                                        >
                                          Estudiar este tema
                                        </button>

                                        <button
                                          type="button"
                                          onClick={() => {
                                            handleStartExam(10, 'custom_topics', [bt.topicId]);
                                          }}
                                          className="px-2 py-1 rounded bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 text-[11px] font-medium border border-rose-500/30 transition-colors"
                                        >
                                          Test rápido (10q)
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* 2. En Consolidación (50% - 79%) */}
                            <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-950/15 space-y-3">
                              <div className="flex items-center justify-between gap-2 pb-2 border-b border-amber-500/20">
                                <div className="flex items-center gap-2">
                                  <Sparkles className="w-4 h-4 text-amber-400" />
                                  <h4 className="font-bold text-xs text-amber-200 uppercase tracking-wider">
                                    En Consolidación
                                  </h4>
                                </div>
                                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                  {consolidatingTopics.length} {consolidatingTopics.length === 1 ? 'bloque' : 'bloques'}
                                </span>
                              </div>

                              {consolidatingTopics.length === 0 ? (
                                <p className="text-xs text-slate-400 italic">
                                  No hay temas en este rango intermedio.
                                </p>
                              ) : (
                                <div className="space-y-3">
                                  {consolidatingTopics.map((bt) => (
                                    <div
                                      key={bt.topicId}
                                      className="p-3 rounded-lg border border-amber-500/20 bg-slate-900/60 space-y-2"
                                    >
                                      <div className="flex items-center justify-between text-xs">
                                        <span className="font-semibold text-white truncate">
                                          {bt.topicLabel}
                                        </span>
                                        <span className="font-mono font-bold text-amber-400 shrink-0">
                                          {bt.correct}/{bt.total} ({bt.accuracyPct}%)
                                        </span>
                                      </div>

                                      <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                                        <div
                                          className="bg-amber-400 h-full"
                                          style={{ width: `${bt.accuracyPct}%` }}
                                        />
                                      </div>

                                      <div className="pt-1">
                                        <button
                                          type="button"
                                          onClick={() => {
                                            handleStartExam(10, 'custom_topics', [bt.topicId]);
                                          }}
                                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] font-medium border border-slate-700 transition-colors"
                                        >
                                          Repasar tema (10q)
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* 3. Puntos Fuertes (>=80%) */}
                            <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/15 space-y-3">
                              <div className="flex items-center justify-between gap-2 pb-2 border-b border-emerald-500/20">
                                <div className="flex items-center gap-2">
                                  <Trophy className="w-4 h-4 text-emerald-400" />
                                  <h4 className="font-bold text-xs text-emerald-200 uppercase tracking-wider">
                                    En qué voy mejor
                                  </h4>
                                </div>
                                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                  {strongTopics.length} {strongTopics.length === 1 ? 'bloque' : 'bloques'}
                                </span>
                              </div>

                              {strongTopics.length === 0 ? (
                                <p className="text-xs text-slate-400 italic">
                                  Continúa practicando para alcanzar el umbral de excelencia en los bloques evaluados.
                                </p>
                              ) : (
                                <div className="space-y-3">
                                  {strongTopics.map((bt) => (
                                    <div
                                      key={bt.topicId}
                                      className="p-3 rounded-lg border border-emerald-500/20 bg-slate-900/60 space-y-1.5"
                                    >
                                      <div className="flex items-center justify-between text-xs">
                                        <span className="font-semibold text-white truncate">
                                          {bt.topicLabel}
                                        </span>
                                        <span className="font-mono font-bold text-emerald-400 shrink-0">
                                          {bt.correct}/{bt.total} ({bt.accuracyPct}%)
                                        </span>
                                      </div>

                                      <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                                        <div
                                          className="bg-emerald-400 h-full"
                                          style={{ width: `${bt.accuracyPct}%` }}
                                        />
                                      </div>

                                      <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                                        <CheckCircle2 className="w-3 h-3" /> Dominado en este examen
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* DESGLOSE POR TÍTULOS DE LA LEY */}
                        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
                          <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Rendimiento por Títulos de la Ley Evaluados:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {diagnosticRecord.byTitle.map((bt) => (
                              <div
                                key={bt.titleId}
                                className="p-2.5 rounded-lg border border-slate-800 bg-slate-950/60 flex items-center justify-between gap-2"
                              >
                                <span className="font-mono text-xs text-slate-200 truncate">
                                  {bt.titleLabel}
                                </span>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="font-mono text-xs text-slate-400">
                                    {bt.correct}/{bt.total}
                                  </span>
                                  <span
                                    className={`font-mono text-xs font-bold ${
                                      bt.accuracyPct >= 80
                                        ? 'text-emerald-400'
                                        : bt.accuracyPct >= 50
                                        ? 'text-amber-400'
                                        : 'text-rose-400'
                                    }`}
                                  >
                                    {bt.accuracyPct}%
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* REVISIÓN DETALLADA DE PREGUNTAS DEL EXAMEN */}
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
                            <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                              Revisión Detallada de Preguntas y Citas Legales:
                            </h3>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setDiagnosticFilter('all')}
                                className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                                  diagnosticFilter === 'all'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                                }`}
                              >
                                Todas ({diagnosticRecord.questionCount})
                              </button>
                              <button
                                type="button"
                                onClick={() => setDiagnosticFilter('failures')}
                                className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                                  diagnosticFilter === 'failures'
                                    ? 'bg-rose-600 text-white'
                                    : 'bg-slate-900 text-rose-300 hover:text-rose-200 border border-slate-800'
                                }`}
                              >
                                Solo Fallos ({diagnosticRecord.questionCount - diagnosticRecord.correctCount})
                              </button>
                            </div>
                          </div>

                          <div className="space-y-4">
                            {diagnosticRecord.questionResults
                              .map((qr, originalIndex) => {
                                const questionObj = allCuratedQuestions.find((q) => q.id === qr.questionId);
                                return { qr, questionObj, index: originalIndex };
                              })
                              .filter(({ qr }) => (diagnosticFilter === 'failures' ? !qr.isCorrect : true))
                              .map(({ qr, questionObj, index }) => {
                                if (!questionObj) return null;

                                return (
                                  <div
                                    key={index}
                                    className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                                      qr.isCorrect
                                        ? 'border-emerald-500/30 bg-slate-900/60'
                                        : 'border-rose-500/40 bg-slate-900/70 ring-1 ring-rose-500/20'
                                    } space-y-4`}
                                  >
                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-800/80">
                                      <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs font-bold text-slate-300">
                                          Pregunta {index + 1}
                                        </span>
                                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                          {questionObj.topicLabel}
                                        </span>
                                      </div>

                                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
                                        {qr.isCorrect ? (
                                          <span className="text-emerald-400 flex items-center gap-1">
                                            <CheckCircle2 className="w-4 h-4" /> Correcta
                                          </span>
                                        ) : (
                                          <span className="text-rose-400 flex items-center gap-1">
                                            <XCircle className="w-4 h-4" />{' '}
                                            {qr.selectedOptionIndex === null ? 'En blanco' : 'Incorrecta'}
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                                      {questionObj.question}
                                    </p>

                                    {/* Options comparison */}
                                    <div className="space-y-2">
                                      {questionObj.options.map((opt, optIdx) => {
                                        const isChosen = qr.selectedOptionIndex === optIdx;
                                        const isCorrect = qr.correctOptionIndex === optIdx;

                                        let style =
                                          'border-slate-800 bg-slate-950/40 text-slate-400 opacity-60';
                                        if (isCorrect) {
                                          style =
                                            'border-emerald-500/60 bg-emerald-950/30 text-emerald-200 font-semibold';
                                        } else if (isChosen && !isCorrect) {
                                          style =
                                            'border-rose-500/60 bg-rose-950/30 text-rose-200';
                                        }

                                        return (
                                          <div
                                            key={optIdx}
                                            className={`p-3 rounded-lg border text-xs leading-relaxed flex items-start gap-2.5 ${style}`}
                                          >
                                            <span className="font-mono font-bold shrink-0">
                                              {String.fromCharCode(65 + optIdx)}.
                                            </span>
                                            <span className="flex-1">{opt}</span>
                                            {isCorrect && (
                                              <span className="font-mono text-[10px] text-emerald-400 font-bold shrink-0">
                                                ✓ Respuesta Oficial
                                              </span>
                                            )}
                                            {isChosen && !isCorrect && (
                                              <span className="font-mono text-[10px] text-rose-400 font-bold shrink-0">
                                                ✕ Tu selección
                                              </span>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>

                                    {/* Legal explanation & lesson */}
                                    <div className="p-3.5 rounded-xl border border-indigo-500/20 bg-indigo-950/15 space-y-2">
                                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400">
                                        <Scale className="w-3.5 h-3.5" />
                                        <span>Explicación Jurídica y Lección de Compliance:</span>
                                      </div>
                                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                                        {questionObj.explanation}
                                      </p>
                                      <p className="text-xs text-amber-300 font-sans border-t border-slate-800/60 pt-2 mt-2">
                                        💡 {questionObj.enterpriseLesson}
                                      </p>

                                      {questionObj.citations && questionObj.citations.length > 0 && (
                                        <div className="pt-2 flex flex-wrap gap-2">
                                          {questionObj.citations.map((c, cIdx) => (
                                            <CitationBadge
                                              key={cIdx}
                                              citation={c}
                                              onSelect={onNavigateCitation}
                                              size="xs"
                                            />
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          )}

          {/* ================================================================= */}
          {/* MODO C: HISTORIAL Y EVOLUCIÓN LONGITUDINAL                        */}
          {/* ================================================================= */}
          {quizMode === 'history' && (
            <div className="space-y-6 min-w-0">
              {examHistory.length === 0 ? (
                <div className="p-10 rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 text-center space-y-4">
                  <GraduationCap className="w-12 h-12 text-indigo-400 mx-auto" />
                  <h3 className="text-base font-bold text-white">
                    Aún no has completado ningún examen aleatorio
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    Realiza tu primer simulador de examen para comenzar a registrar tu evolución longitudinal, medir tu % de acierto por tema y detectar tus puntos débiles.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuizMode('exam');
                      setExamState('config');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Configurar mi Primer Examen</span>
                  </button>
                </div>
              ) : historicalMetrics ? (
                <>
                  {/* KPIs Longitudinales */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                        Exámenes Guardados
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                        {historicalMetrics.totalExams}
                      </span>
                      <span className="text-[11px] text-slate-400 block">Registros completos</span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                        Nota Media
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">
                        {historicalMetrics.avgScore}%
                      </span>
                      <span className="text-[11px] text-slate-400 block">Promedio histórico</span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                        Mejor Calificación
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                        {historicalMetrics.maxScore}%
                      </span>
                      <span className="text-[11px] text-slate-400 block">Récord personal</span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                        Evolución (1º vs Último)
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-2xl sm:text-3xl font-black font-mono ${
                            historicalMetrics.scoreDiff > 0
                              ? 'text-emerald-400'
                              : historicalMetrics.scoreDiff < 0
                              ? 'text-rose-400'
                              : 'text-slate-300'
                          }`}
                        >
                          {historicalMetrics.scoreDiff > 0
                            ? `+${historicalMetrics.scoreDiff}%`
                            : `${historicalMetrics.scoreDiff}%`}
                        </span>
                        {historicalMetrics.scoreDiff > 0 ? (
                          <TrendingUp className="w-5 h-5 text-emerald-400" />
                        ) : historicalMetrics.scoreDiff < 0 ? (
                          <TrendingDown className="w-5 h-5 text-rose-400" />
                        ) : (
                          <Minus className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 block">Tendencia global</span>
                    </div>
                  </div>

                  {/* Cronograma Visual de Últimos Exámenes */}
                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Evolución Cronológica de Calificaciones:
                      </h4>
                      <span className="font-mono text-[10px] text-slate-500">
                        (Más antiguo → Más reciente)
                      </span>
                    </div>

                    <div className="flex items-end gap-3 h-32 pt-4 px-2 overflow-x-auto border-b border-slate-800/80">
                      {[...examHistory].reverse().map((exam, idx) => {
                        const level = getScoreLevel(exam.scorePct);
                        const heightPct = Math.max(15, exam.scorePct);

                        return (
                          <div
                            key={exam.id}
                            className="flex-1 min-w-[50px] max-w-[80px] flex flex-col items-center gap-1 group cursor-pointer"
                            onClick={() => handleViewHistoricalExam(exam)}
                            title={`Examen #${idx + 1}: ${exam.scorePct}% (${exam.correctCount}/${exam.questionCount}) - ${new Date(exam.completedAtIso).toLocaleDateString()}`}
                          >
                            <span className="font-mono text-[10px] font-bold text-white group-hover:text-indigo-300">
                              {exam.scorePct}%
                            </span>
                            <div className="w-full bg-slate-800 rounded-t-md overflow-hidden flex items-end h-20">
                              <div
                                className={`w-full rounded-t-md transition-all duration-300 ${
                                  exam.scorePct >= 80
                                    ? 'bg-emerald-500 group-hover:bg-emerald-400'
                                    : exam.scorePct >= 50
                                    ? 'bg-indigo-500 group-hover:bg-indigo-400'
                                    : 'bg-rose-500 group-hover:bg-rose-400'
                                }`}
                                style={{ height: `${heightPct}%` }}
                              />
                            </div>
                            <span className="font-mono text-[9px] text-slate-500 truncate w-full text-center">
                              #{idx + 1}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tabla de Evolución por Tema y Sección de la Ley */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-indigo-400" />
                        <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                          Evolución Longitudinal por Bloque Temático:
                        </h4>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">
                        Seguimiento entre primer y último test
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            <th className="py-2.5 px-3">Bloque Temático</th>
                            <th className="py-2.5 px-3 text-center">Primer Test</th>
                            <th className="py-2.5 px-3 text-center">Último Test</th>
                            <th className="py-2.5 px-3 text-center">Tendencia</th>
                            <th className="py-2.5 px-3 text-center">Media Acumulada</th>
                            <th className="py-2.5 px-3 text-right">Acción</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 font-sans">
                          {historicalMetrics.topicEvolution.map((item) => (
                            <tr key={item.topicId} className="hover:bg-slate-850/50 transition-colors">
                              <td className="py-3 px-3 font-medium text-white">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${TOPIC_METADATA[item.topicId].bg} border ${TOPIC_METADATA[item.topicId].border}`} />
                                  <span>{item.topicLabel}</span>
                                </div>
                              </td>

                              <td className="py-3 px-3 text-center font-mono text-slate-300">
                                {item.firstPct !== null ? `${item.firstPct}%` : '—'}
                              </td>

                              <td className="py-3 px-3 text-center font-mono font-bold text-white">
                                {item.latestPct !== null ? `${item.latestPct}%` : '—'}
                              </td>

                              <td className="py-3 px-3 text-center font-mono font-bold">
                                {item.testedCount < 2 ? (
                                  <span className="text-slate-500 font-normal">Inicial</span>
                                ) : item.trend > 0 ? (
                                  <span className="text-emerald-400">+{item.trend}% ▲</span>
                                ) : item.trend < 0 ? (
                                  <span className="text-rose-400">{item.trend}% ▼</span>
                                ) : (
                                  <span className="text-slate-400">= 0%</span>
                                )}
                              </td>

                              <td className="py-3 px-3 text-center font-mono text-slate-300">
                                <div className="flex items-center justify-center gap-2">
                                  <div className="w-16 bg-slate-800 rounded-full h-1.5 overflow-hidden hidden sm:block">
                                    <div
                                      className={`h-full ${
                                        item.avgPct >= 80
                                          ? 'bg-emerald-500'
                                          : item.avgPct >= 50
                                          ? 'bg-amber-500'
                                          : 'bg-rose-500'
                                      }`}
                                      style={{ width: `${item.avgPct}%` }}
                                    />
                                  </div>
                                  <span>{item.avgPct}%</span>
                                </div>
                              </td>

                              <td className="py-3 px-3 text-right">
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleStartExam(10, 'custom_topics', [item.topicId]);
                                  }}
                                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white border border-slate-700 text-[11px] font-mono transition-colors"
                                >
                                  Practicar
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Listado de Exámenes Guardados */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2">
                      <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Historial de Exámenes Guardados ({examHistory.length}):
                      </h4>

                      {onClearExamHistory && (
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm('¿Seguro que deseas vaciar todo el historial de exámenes? Esta acción no se puede deshacer.')) {
                              onClearExamHistory();
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/60 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Borrar Todo el Historial</span>
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      {examHistory.map((exam, idx) => {
                        const level = getScoreLevel(exam.scorePct);
                        const sortedTopics = [...exam.byTopic].sort(
                          (a, b) => b.accuracyPct - a.accuracyPct
                        );
                        const bestTopic = sortedTopics[0];
                        const worstTopic = sortedTopics[sortedTopics.length - 1];

                        return (
                          <div
                            key={exam.id}
                            className="p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-900 space-y-3 hover:border-slate-700 transition-colors"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/60">
                              <div className="flex items-center gap-2.5">
                                <span className="font-mono text-xs font-bold text-indigo-400">
                                  Examen #{examHistory.length - idx}
                                </span>
                                <span className="font-mono text-xs text-slate-400">
                                  {new Date(exam.completedAtIso).toLocaleString()}
                                </span>
                                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                  {exam.samplingStrategy === 'stratified_all'
                                    ? 'Estratificado Global'
                                    : exam.samplingStrategy === 'weakness_focus'
                                    ? 'Foco en Flojos'
                                    : 'Temas Personalizados'}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <span
                                  className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold border ${level.badgeClass}`}
                                >
                                  {exam.scorePct}% ({exam.correctCount}/{exam.questionCount})
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                              <div className="space-y-1">
                                <p className="text-slate-300 font-medium">
                                  {exam.scopeDescription} · {formatDuration(exam.durationSeconds)}
                                </p>
                                <div className="flex flex-wrap gap-3 text-[11px] font-mono text-slate-400">
                                  {bestTopic && (
                                    <span className="text-emerald-400">
                                      🏆 Mejor: {bestTopic.topicLabel} ({bestTopic.accuracyPct}%)
                                    </span>
                                  )}
                                  {worstTopic && worstTopic.topicId !== bestTopic?.topicId && (
                                    <span className="text-rose-400">
                                      ⚠️ A reforzar: {worstTopic.topicLabel} ({worstTopic.accuracyPct}%)
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => handleViewHistoricalExam(exam)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 transition-colors"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Ver Informe y Respuestas</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleStartExam(
                                      exam.questionCount,
                                      exam.samplingStrategy,
                                      exam.byTopic.map((b) => b.topicId)
                                    )
                                  }
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                                  title="Repetir un examen similar con el mismo tamaño y ámbito"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Repetir Similar</span>
                                </button>

                                {onDeleteCompletedExam && (
                                  <button
                                    type="button"
                                    onClick={() => onDeleteCompletedExam(exam.id)}
                                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                                    title="Eliminar este examen del historial"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
