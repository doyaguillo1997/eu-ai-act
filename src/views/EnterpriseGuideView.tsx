import React, { useState, useMemo } from 'react';
import {
  LegalVectorEngine,
} from '../services/vectorStore';
import {
  EnterpriseRole,
  LegalCitation,
  RiskLevel,
  InfographicModule,
} from '../types/legal.types';
import { RiskBadge, RISK_METADATA } from '../components/shared/RiskBadge';
import { CitationBadge } from '../components/shared/CitationBadge';
import { SectionCard } from '../components/shared/SectionCard';
import { SegmentedFilterBar, FilterOption } from '../components/shared/SegmentedFilterBar';
import { MultiRoleSelector } from '../components/shared/MultiRoleSelector';
import { StatMetricCard } from '../components/shared/StatMetricCard';
import {
  ShieldAlert,
  AlertTriangle,
  Cpu,
  Eye,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Layers,
  FileCheck2,
  Scale,
  Building2,
  Compass,
  RotateCcw,
  BookOpen,
  Landmark,
  BadgeAlert,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

export interface EnterpriseGuideViewProps {
  engine: LegalVectorEngine;
  selectedRole: EnterpriseRole;
  onSelectRole: (role: EnterpriseRole) => void;
  onNavigateCitation: (citation: LegalCitation) => void;
  onOpenQuizForTopic: (topicId: string) => void;
  selectedRoles?: EnterpriseRole[];
  onToggleRole?: (role: EnterpriseRole) => void;
  onSetRoles?: (roles: EnterpriseRole[]) => void;
}

const ROLE_OPTIONS: FilterOption<EnterpriseRole>[] = [
  { id: 'deployer', label: 'Desplegador / Empresa Usuaria' },
  { id: 'provider', label: 'Proveedor' },
  { id: 'gpai_provider', label: 'Proveedor GPAI' },
  { id: 'importer', label: 'Importador' },
  { id: 'distributor', label: 'Distribuidor' },
];

interface RiskPyramidTier {
  id: RiskLevel;
  tierName: string;
  legalAnchor: string;
  articlesRange: string;
  penaltyCeiling: string;
  penaltyPct: string;
  corePrinciple: string;
  requirementsCount: string;
  colorBorder: string;
  colorBg: string;
  colorText: string;
  keyCitation: LegalCitation;
}

const PYRAMID_TIERS: RiskPyramidTier[] = [
  {
    id: 'unacceptable',
    tierName: 'Riesgo Inaceptable (Prácticas Prohibidas)',
    legalAnchor: 'Artículo 5',
    articlesRange: 'Art. 5 · Título II',
    penaltyCeiling: 'Hasta 35.000.000 €',
    penaltyPct: '7% volumen de negocios',
    corePrinciple: 'Prohibición absoluta en el mercado de la Unión. Entrada en aplicación preferente: 2 de febrero de 2025.',
    requirementsCount: '8 prácticas ilícitas',
    colorBorder: 'border-rose-500/40 hover:border-rose-500',
    colorBg: 'bg-rose-500/10 hover:bg-rose-500/20',
    colorText: 'text-rose-400',
    keyCitation: {
      citationId: 'EU-2024-1689:art_5',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'article',
      articleId: 'art_5',
      displayLabel: 'Art. 5 · Prácticas de IA prohibidas',
      exactQuote: 'Quedan prohibidas las siguientes prácticas de inteligencia artificial: la comercialización, la puesta en servicio o el uso de un sistema de IA que emplee técnicas subliminales o deliberadamente manipuladoras...',
    },
  },
  {
    id: 'high',
    tierName: 'Alto Riesgo (Sistemas Regulados)',
    legalAnchor: 'Artículos 6 a 49 + Anexos I y III',
    articlesRange: 'Arts. 6–49, Anexos I y III',
    penaltyCeiling: 'Hasta 15.000.000 €',
    penaltyPct: '3% volumen de negocios',
    corePrinciple: 'Conformidad estricta obligatoria: gestión de riesgos, calidad de datos, documentación técnica, logs y supervisión humana.',
    requirementsCount: '8 requisitos técnicos nucleares',
    colorBorder: 'border-amber-500/40 hover:border-amber-500',
    colorBg: 'bg-amber-500/10 hover:bg-amber-500/20',
    colorText: 'text-amber-400',
    keyCitation: {
      citationId: 'EU-2024-1689:art_6',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'article',
      articleId: 'art_6',
      displayLabel: 'Art. 6 · Normas de clasificación de alto riesgo',
      exactQuote: 'Un sistema de IA se considerará de alto riesgo cuando esté destinado a ser utilizado como componente de seguridad de un producto regulado o pertenezca a los ámbitos críticos del Anexo III...',
    },
  },
  {
    id: 'gpai',
    tierName: 'Modelos GPAI (Uso General / Fundacionales)',
    legalAnchor: 'Artículos 51 a 55 + Anexos XI y XII',
    articlesRange: 'Arts. 51–55, Anexos XI y XII',
    penaltyCeiling: 'Hasta 15.000.000 €',
    penaltyPct: '3% volumen de negocios',
    corePrinciple: 'Transparencia de entrenamiento, respeto a directiva de copyright y, si supera 10^25 FLOPs, mitigación de riesgo sistémico y red teaming.',
    requirementsCount: 'Doble nivel de gobernanza',
    colorBorder: 'border-violet-500/40 hover:border-violet-500',
    colorBg: 'bg-violet-500/10 hover:bg-violet-500/20',
    colorText: 'text-violet-400',
    keyCitation: {
      citationId: 'EU-2024-1689:art_51',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'article',
      articleId: 'art_51',
      displayLabel: 'Art. 51 · Modelos GPAI con riesgo sistémico',
      exactQuote: 'Un modelo de IA de uso general se clasificará como modelo de IA de uso general con riesgo sistémico si posee capacidades de gran impacto evaluadas sobre la base de herramientas técnicas adecuadas o si la potencia acumulada de cálculo utilizada para su entrenamiento es superior a 10^25 FLOPs.',
    },
  },
  {
    id: 'transparency',
    tierName: 'Riesgo de Transparencia Específica',
    legalAnchor: 'Artículo 50',
    articlesRange: 'Art. 50',
    penaltyCeiling: 'Hasta 15.000.000 €',
    penaltyPct: '3% volumen de negocios',
    corePrinciple: 'Marcado y divulgación obligatorios: advertir al usuario humano de que interactúa con IA, y watermarking en deepfakes y texto sintético.',
    requirementsCount: 'Obligaciones de marcado directo',
    colorBorder: 'border-sky-500/40 hover:border-sky-500',
    colorBg: 'bg-sky-500/10 hover:bg-sky-500/20',
    colorText: 'text-sky-400',
    keyCitation: {
      citationId: 'EU-2024-1689:art_50',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'article',
      articleId: 'art_50',
      displayLabel: 'Art. 50 · Obligaciones de transparencia',
      exactQuote: 'Los proveedores garantizarán que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de manera que se informe a las personas físicas interesadas de que están interactuando con un sistema de IA...',
    },
  },
  {
    id: 'minimal',
    tierName: 'Riesgo Mínimo o Nulo (Uso Libre)',
    legalAnchor: 'Artículo 95',
    articlesRange: 'Art. 95',
    penaltyCeiling: 'Sin régimen sancionador directo',
    penaltyPct: '0%',
    corePrinciple: 'Filtros antispam, videojuegos, IA de inventario o herramientas de productividad sin impacto en derechos. Adhesión voluntaria a Códigos de Conducta.',
    requirementsCount: 'Voluntario / Códigos de conducta',
    colorBorder: 'border-emerald-500/40 hover:border-emerald-500',
    colorBg: 'bg-emerald-500/10 hover:bg-emerald-500/20',
    colorText: 'text-emerald-400',
    keyCitation: {
      citationId: 'EU-2024-1689:art_95',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'article',
      articleId: 'art_95',
      displayLabel: 'Art. 95 · Códigos de conducta para riesgos mínimos',
      exactQuote: 'La Oficina de IA y los Estados miembros fomentarán y facilitarán la elaboración de códigos de conducta destinados a fomentar la aplicación voluntaria a sistemas de IA distintos de los sistemas de IA de alto riesgo...',
    },
  },
];

interface DiagnosticQuestion {
  id: string;
  category: 'prohibited' | 'safety_annex1' | 'highrisk_annex3' | 'transparency' | 'gpai';
  categoryLabel: string;
  prompt: string;
  legalCitation: LegalCitation;
}

const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // Prohibited (Art. 5)
  {
    id: 'q_subliminal',
    category: 'prohibited',
    categoryLabel: 'Prácticas Prohibidas (Art. 5)',
    prompt: '¿El sistema utiliza técnicas subliminales o deliberadamente manipuladoras para alterar de manera apreciable el comportamiento humano causando daños?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_5.p1.a',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_5',
      paragraphId: 'art_5.p1',
      displayLabel: 'Art. 5.1(a) · Manipulación subliminal',
      exactQuote: 'Puesta en servicio o uso de un sistema de IA que emplee técnicas subliminales que trasciendan la conciencia de una persona con el objetivo de distorsionar apreciablemente su comportamiento...',
    },
  },
  {
    id: 'q_social_scoring',
    category: 'prohibited',
    categoryLabel: 'Prácticas Prohibidas (Art. 5)',
    prompt: '¿Evalúa o clasifica a personas físicas durante un período de tiempo basándose en su conducta social o rasgos de personalidad con perjuicio desproporcionado (puntuación social)?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_5.p1.c',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_5',
      paragraphId: 'art_5.p1',
      displayLabel: 'Art. 5.1(c) · Puntuación social (Social Scoring)',
      exactQuote: 'Puesta en servicio o uso de sistemas de IA para la evaluación o clasificación de personas físicas durante un determinado período de tiempo atendiendo a su conducta social...',
    },
  },
  {
    id: 'q_emotion_workplace',
    category: 'prohibited',
    categoryLabel: 'Prácticas Prohibidas (Art. 5)',
    prompt: '¿Infiere emociones de personas físicas en el lugar de trabajo o en instituciones educativas (sin fines exclusivamente médicos o de seguridad)?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_5.p1.f',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_5',
      paragraphId: 'art_5.p1',
      displayLabel: 'Art. 5.1(f) · Inferencia de emociones en el trabajo y aulas',
      exactQuote: 'Puesta en el mercado, comercialización o uso de sistemas de IA para inferir emociones de una persona física en los lugares de trabajo y en las instituciones educativas...',
    },
  },
  // Safety Component (Art. 6.1 + Annex I)
  {
    id: 'q_annex1_safety',
    category: 'safety_annex1',
    categoryLabel: 'Componente de Seguridad (Art. 6.1 + Anexo I)',
    prompt: '¿El sistema está destinado a ser utilizado como componente de seguridad de un producto sujeto a evaluación de conformidad por terceros bajo legislación armonizada (maquinaria, dispositivos médicos, ascensores, aviación, juguetes)?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_6.p1',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_6',
      paragraphId: 'art_6.p1',
      displayLabel: 'Art. 6.1 + Anexo I · Componentes de seguridad',
      exactQuote: 'Un sistema de IA se considerará de alto riesgo cuando esté destinado a ser utilizado como componente de seguridad de un producto contemplado en la legislación de armonización de la Unión enumerada en el anexo I...',
    },
  },
  // Annex III High Risk (Art. 6.2)
  {
    id: 'q_annex3_employment',
    category: 'highrisk_annex3',
    categoryLabel: 'Ámbitos Críticos Anexo III (Art. 6.2)',
    prompt: '¿Se utiliza en empleo, gestión de trabajadores o acceso al autoempleo (selección/reclutamiento, filtrado de candidaturas, toma de decisiones sobre ascensos, asignación de tareas o despidos)?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_6.p2_anx_III_4',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_6',
      displayLabel: 'Art. 6.2 + Anexo III.4 · Empleo y gestión laboral',
      exactQuote: 'Sistemas de IA de alto riesgo conforme al anexo III: empleo, gestión de los trabajadores y acceso al autoempleo (reclutamiento, evaluación, toma de decisiones de relación laboral)...',
    },
  },
  {
    id: 'q_annex3_services',
    category: 'highrisk_annex3',
    categoryLabel: 'Ámbitos Críticos Anexo III (Art. 6.2)',
    prompt: '¿Se utiliza para evaluar la solvencia crediticia (credit scoring), establecer primas de seguros médicos/de vida o determinar el acceso a servicios esenciales públicos o privados?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_6.p2_anx_III_5',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_6',
      displayLabel: 'Art. 6.2 + Anexo III.5 · Servicios esenciales y crédito',
      exactQuote: 'Sistemas de IA utilizados para evaluar la solvencia de personas físicas o fijar su calificación crediticia, o para tarificar riesgos en seguros de vida y salud...',
    },
  },
  {
    id: 'q_annex3_education_infra',
    category: 'highrisk_annex3',
    categoryLabel: 'Ámbitos Críticos Anexo III (Art. 6.2)',
    prompt: '¿Se utiliza en educación (admisiones, evaluación del aprendizaje) o como componente de seguridad en la gestión de infraestructuras críticas (agua, gas, electricidad, tráfico vial digital)?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_6.p2_anx_III_2',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_6',
      displayLabel: 'Art. 6.2 + Anexo III.2 y III.3 · Educación e infraestructuras',
      exactQuote: 'Sistemas de IA destinados a determinar el acceso o la admisión a centros de enseñanza y sistemas utilizados como componentes de seguridad en infraestructuras digitales críticas...',
    },
  },
  // Specific Transparency (Art. 50)
  {
    id: 'q_transparency_interaction',
    category: 'transparency',
    categoryLabel: 'Transparencia Específica (Art. 50)',
    prompt: '¿El sistema interactúa directamente con personas físicas (chatbot, agente virtual) o genera audio, imagen o vídeo sintéticos ("deepfakes") o texto publicado con fines informativos?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_50.p1',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_50',
      paragraphId: 'art_50.p1',
      displayLabel: 'Art. 50.1–50.4 · Obligaciones de transparencia e información',
      exactQuote: 'Los proveedores garantizarán que los sistemas de IA destinados a interactuar directamente con personas físicas informen de forma clara de ello, y quienes generen deepfakes revelarán que el contenido ha sido manipulado...',
    },
  },
  // GPAI (Art. 51)
  {
    id: 'q_gpai_model',
    category: 'gpai',
    categoryLabel: 'Modelos de Uso General (Arts. 51–55)',
    prompt: '¿Su empresa entrena o comercializa un modelo de IA de propósito general (LLM fundacional, modelo multimodal generativo de amplia aplicabilidad)?',
    legalCitation: {
      citationId: 'EU-2024-1689:art_51.p1',
      boeId: 'DOUE-L-2024-81079',
      eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
      targetType: 'paragraph',
      articleId: 'art_51',
      paragraphId: 'art_51.p1',
      displayLabel: 'Art. 51 · Modelos de IA de uso general (GPAI)',
      exactQuote: 'Modelos de IA de uso general que presentan capacidades de alta repercusión o cuya potencia de cálculo acumulada en el entrenamiento es superior a 10^25 FLOPs...',
    },
  },
];

export const EnterpriseGuideView: React.FC<EnterpriseGuideViewProps> = ({
  engine,
  selectedRole,
  onSelectRole,
  onNavigateCitation,
  onOpenQuizForTopic,
  selectedRoles,
  onToggleRole,
  onSetRoles,
}) => {
  const [selectedPyramidTier, setSelectedPyramidTier] = useState<RiskLevel>('high');
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, boolean>>({});

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

  // Dynamic counts from vector engine corpus
  const corpusStats = useMemo(() => {
    const totalArticles = engine.corpus.articles.length;
    const totalRecitals = engine.corpus.recitals.length;
    const totalAnnexes = engine.corpus.annexes.length;
    const totalParagraphs = engine.corpus.metadata.totalParagraphs || 450;

    const countByRisk: Record<RiskLevel, number> = {
      unacceptable: 0,
      high: 0,
      gpai: 0,
      transparency: 0,
      minimal: 0,
      governance: 0,
    };

    for (const art of engine.corpus.articles) {
      if (countByRisk[art.riskLevel] !== undefined) {
        countByRisk[art.riskLevel] += 1;
      }
    }

    return {
      totalArticles,
      totalRecitals,
      totalAnnexes,
      totalParagraphs,
      countByRisk,
    };
  }, [engine]);

  // Compute diagnosis result
  const diagnosticResult = useMemo(() => {
    const hasProhibited = Boolean(
      diagnosticAnswers['q_subliminal'] ||
      diagnosticAnswers['q_social_scoring'] ||
      diagnosticAnswers['q_emotion_workplace']
    );
    if (hasProhibited) {
      return {
        level: 'unacceptable' as RiskLevel,
        title: 'Sistema de Riesgo Inaceptable (Práctica Prohibida)',
        summary: 'Su sistema incluye funcionalidades o métodos de captura vetados expresamente por el Art. 5 del Reglamento. Su puesta en servicio o comercialización en la Unión Europea es ilegal y acarrea multas de hasta 35M€ o el 7% del volumen de negocio anual.',
        actionRoadmap: [
          'Detener inmediatamente el despliegue o comercialización del sistema en el mercado europeo (plazo máximo legal: 2 de febrero de 2025).',
          'Auditar la arquitectura técnica para eliminar cualquier técnica de manipulación subliminal, puntuación social o inferencia emocional no consentida.',
          'Consultar el protocolo de la AESIA en España para orientación sobre desmantelamiento seguro de sistemas no conformes.',
        ],
        citations: [
          {
            citationId: 'EU-2024-1689:art_5',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'article' as const,
            articleId: 'art_5',
            displayLabel: 'Art. 5 · Prácticas prohibidas',
            exactQuote: 'Quedan prohibidas las siguientes prácticas de inteligencia artificial...',
          },
          {
            citationId: 'EU-2024-1689:art_99.p3',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'paragraph' as const,
            articleId: 'art_99',
            paragraphId: 'art_99.p3',
            displayLabel: 'Art. 99.3 · Sanción máxima de hasta 35M€ / 7%',
            exactQuote: 'Las infracciones de la prohibición de las prácticas de IA contempladas en el artículo 5 se sancionarán con multas coercitivas de hasta 35 000 000 EUR o el 7 % del volumen de negocios...',
          },
        ],
      };
    }

    const hasSafetyAnnex1 = Boolean(diagnosticAnswers['q_annex1_safety']);
    const hasAnnex3 = Boolean(
      diagnosticAnswers['q_annex3_employment'] ||
      diagnosticAnswers['q_annex3_services'] ||
      diagnosticAnswers['q_annex3_education_infra']
    );

    if (hasSafetyAnnex1 || hasAnnex3) {
      return {
        level: 'high' as RiskLevel,
        title: 'Sistema de IA de Alto Riesgo (Arts. 6 a 49)',
        summary: 'Su sistema califica como de Alto Riesgo por actuar en un ámbito crítico (empleo, solvencia crediticia, infraestructuras, educación o seguridad de producto). Requiere cumplimiento estricto del Capítulo 2 del Título III antes de su puesta en mercado o uso en producción.',
        actionRoadmap: [
          'Implementar un Sistema de Gestión de Riesgos continuo e iterativo (Art. 9).',
          'Garantizar la gobernanza de datos de entrenamiento, validación y prueba con examen de sesgos (Art. 10).',
          'Elaborar la Documentación Técnica del Anexo IV y mantenerla actualizada (Art. 11).',
          'Habilitar el registro automático de eventos (logging) durante al menos 6 meses (Art. 12 y Art. 26.5).',
          'Diseñar interfaces y procedimientos para una Supervisión Humana efectiva (Art. 14).',
          'Someter el sistema a la Evaluación de Conformidad (Art. 43) e inscribirlo en la Base de Datos de la UE (Art. 49).',
          'Si es empresa desplegadora en España: realizar la Evaluación de Impacto en Derechos Fundamentales (EIDF, Art. 27).',
        ],
        citations: [
          {
            citationId: 'EU-2024-1689:art_6',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'article' as const,
            articleId: 'art_6',
            displayLabel: 'Art. 6 · Clasificación Alto Riesgo',
            exactQuote: 'Normas de clasificación para sistemas de IA de alto riesgo...',
          },
          {
            citationId: 'EU-2024-1689:art_9',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'article' as const,
            articleId: 'art_9',
            displayLabel: 'Art. 9 · Sistema de gestión de riesgos',
            exactQuote: 'Se implantará, aplicará, documentará y mantendrá un sistema de gestión de riesgos...',
          },
          {
            citationId: 'EU-2024-1689:art_27',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'article' as const,
            articleId: 'art_27',
            displayLabel: 'Art. 27 · Evaluación de Impacto en Derechos Fundamentales (EIDF)',
            exactQuote: 'Antes de poner en servicio un sistema de IA de alto riesgo, los desplegadores evaluarán el impacto en los derechos fundamentales...',
          },
        ],
      };
    }

    const isGpai = Boolean(diagnosticAnswers['q_gpai_model']);
    if (isGpai) {
      return {
        level: 'gpai' as RiskLevel,
        title: 'Modelo de IA de Uso General (GPAI - Arts. 51 a 55)',
        summary: 'Su organización desarrolla o pone a disposición un modelo fundacional de IA. Está sujeta a deberes de documentación técnica, divulgación de derechos de autor y, si el modelo tiene riesgo sistémico (>10^25 FLOPs), pruebas adversarias (red teaming).',
        actionRoadmap: [
          'Redactar y poner a disposición la documentación técnica del modelo conforme al Anexo XI (Art. 53.1(a)).',
          'Elaborar y publicar un resumen detallado sobre los contenidos utilizados para el entrenamiento (Art. 53.1(d)).',
          'Implementar una política de cumplimiento de la legislación europea de derechos de autor (Art. 53.1(c)).',
          'Evaluar si el entrenamiento superó 10^25 FLOPs o si la Comisión Europea clasifica el modelo con riesgo sistémico (Art. 51).',
        ],
        citations: [
          {
            citationId: 'EU-2024-1689:art_51',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'article' as const,
            articleId: 'art_51',
            displayLabel: 'Art. 51 · Modelos GPAI con riesgo sistémico',
            exactQuote: 'Clasificación de modelos de IA de uso general con riesgo sistémico...',
          },
          {
            citationId: 'EU-2024-1689:art_53',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'article' as const,
            articleId: 'art_53',
            displayLabel: 'Art. 53 · Obligaciones para proveedores de GPAI',
            exactQuote: 'Los proveedores de modelos de IA de uso general elaborarán y mantendrán actualizada la documentación técnica...',
          },
        ],
      };
    }

    const hasTransparency = Boolean(diagnosticAnswers['q_transparency_interaction']);
    if (hasTransparency) {
      return {
        level: 'transparency' as RiskLevel,
        title: 'Riesgo de Transparencia Específica (Art. 50)',
        summary: 'Su sistema interactúa con personas o genera contenidos sintéticos/deepfakes. No entra en el régimen severo de Alto Riesgo, pero debe cumplir estrictamente con los deberes de marcado, revelación e inteligibilidad.',
        actionRoadmap: [
          'Avisar de forma clara y visible al usuario al inicio de la interacción de que está hablando con una IA (Art. 50.1).',
          'Etiquetar de forma indeleble y en formato legible por máquina cualquier imagen, audio o vídeo sintético generado (Art. 50.2).',
          'Si genera texto para informar sobre asuntos de interés general, identificar claramente su origen automatizado (Art. 50.4).',
        ],
        citations: [
          {
            citationId: 'EU-2024-1689:art_50',
            boeId: 'DOUE-L-2024-81079',
            eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
            targetType: 'article' as const,
            articleId: 'art_50',
            displayLabel: 'Art. 50 · Obligaciones de transparencia',
            exactQuote: 'Obligaciones de transparencia para proveedores y usuarios de determinados sistemas de IA...',
          },
        ],
      };
    }

    return {
      level: 'minimal' as RiskLevel,
      title: 'Riesgo Mínimo o No Regulado Directamente (Art. 95)',
      summary: 'Su sistema no presenta los riesgos prohibidos, componentes de seguridad de armonización, casos del Anexo III, interacción no informada ni escala GPAI. Su comercialización o uso en la UE es libre de cargas regulatorias obligatorias adicionales.',
      actionRoadmap: [
        'Adherirse de forma voluntaria a Códigos de Conducta de la Unión o buenas prácticas éticas de la industria (Art. 95).',
        'Fomentar la alfabetización en materia de IA entre el personal que opera o supervisa la herramienta (Art. 4).',
        'Mantener una revisión periódica de nuevas funcionalidades para asegurar que no muten hacia casos del Anexo III.',
      ],
      citations: [
        {
          citationId: 'EU-2024-1689:art_4',
          boeId: 'DOUE-L-2024-81079',
          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
          targetType: 'article' as const,
          articleId: 'art_4',
          displayLabel: 'Art. 4 · Alfabetización en materia de IA',
          exactQuote: 'Los proveedores y desplegadores de sistemas de IA adoptarán medidas para garantizar un nivel adecuado de alfabetización en materia de IA a su personal...',
        },
        {
          citationId: 'EU-2024-1689:art_95',
          boeId: 'DOUE-L-2024-81079',
          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
          targetType: 'article' as const,
          articleId: 'art_95',
          displayLabel: 'Art. 95 · Códigos de conducta voluntarios',
          exactQuote: 'Códigos de conducta para sistemas de IA distintos de los sistemas de IA de alto riesgo...',
        },
      ],
    };
  }, [diagnosticAnswers]);

  const toggleDiagnosticAnswer = (questionId: string) => {
    setDiagnosticAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const resetDiagnostic = () => {
    setDiagnosticAnswers({});
  };

  const selectedTierData = useMemo(() => {
    return PYRAMID_TIERS.find((t) => t.id === selectedPyramidTier) ?? PYRAMID_TIERS[1];
  }, [selectedPyramidTier]);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header & KPI Summary */}
      <header className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                GUÍA EMPRESARIAL OFICIAL · OCTUBRE 2026
              </span>
              <span className="text-xs text-slate-400 font-mono">
                BOE-A-2023-18911 · DOUE-L-2024-81079
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1.5">
              Guía Ejecutiva y Matriz de Cumplimiento EU AI Act
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Arquitectura de obligaciones legales, pirámide de riesgos clasificada, clasificador diagnóstico interactivo y marco regulatorio español (AESIA).
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => onOpenQuizForTopic('enterprise_cases')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Test de Casos de Empresa</span>
            </button>
          </div>
        </div>

        {/* KPI Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <StatMetricCard
            title="Artículos Oficiales"
            value={corpusStats.totalArticles}
            subtitle="Reglamento (UE) 2024/1689"
            icon={<Scale className="w-5 h-5" />}
          />
          <StatMetricCard
            title="Sanción Máxima"
            value="35 M€"
            subtitle="O el 7% de facturación mundial"
            icon={<BadgeAlert className="w-5 h-5 text-rose-400" />}
          />
          <StatMetricCard
            title="Considerandos / Anexos"
            value={`${corpusStats.totalRecitals} / ${corpusStats.totalAnnexes}`}
            subtitle="Fundamentos y guías técnicas"
            icon={<BookOpen className="w-5 h-5 text-violet-400" />}
          />
          <StatMetricCard
            title="Autoridad España"
            value="AESIA"
            subtitle="A Coruña · Supervisión activa"
            icon={<Landmark className="w-5 h-5 text-sky-400" />}
          />
        </div>
      </header>

      {/* SECTION 1: INTERACTIVE RISK PYRAMID INFOGRAPHIC */}
      <SectionCard
        title="Pirámide Interactiva de Riesgos del EU AI Act"
        subtitle="Haga clic en cada nivel para inspeccionar artículos afectados, umbrales de multas y fundamentación legal en EUR-Lex"
        icon={<Layers className="w-5 h-5 text-amber-400" />}
        badge={
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            5 Niveles de Regulación
          </span>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Visual Pyramid Column */}
          <div className="lg:col-span-7 flex flex-col gap-2.5 justify-center">
            {PYRAMID_TIERS.map((tier, idx) => {
              const isSelected = selectedPyramidTier === tier.id;
              // Visual width hierarchy creating a pyramid
              const widthClasses = [
                'w-full max-w-[70%]',
                'w-full max-w-[78%]',
                'w-full max-w-[86%]',
                'w-full max-w-[94%]',
                'w-full max-w-[100%]',
              ][idx];

              return (
                <div key={tier.id} className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setSelectedPyramidTier(tier.id)}
                    className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 shadow-sm ${widthClasses} ${
                      isSelected
                        ? `${tier.colorBorder} ${tier.colorBg} ring-2 ring-indigo-500/40 shadow-lg scale-[1.01]`
                        : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <RiskBadge level={tier.id} size="sm" />
                        <span className="font-semibold text-xs sm:text-sm text-slate-100">
                          {tier.legalAnchor}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-200">
                        {tier.penaltyCeiling}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                      {tier.corePrinciple}
                    </p>

                    <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-mono">{tier.requirementsCount}</span>
                      <span className={`font-medium flex items-center gap-1 ${isSelected ? tier.colorText : 'text-slate-400'}`}>
                        <span>Ver detalles</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Selected Tier Inspector Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl border border-slate-800 bg-slate-900/90 shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <RiskBadge level={selectedTierData.id} size="md" />
                <span className="font-mono text-xs text-slate-400 font-semibold">
                  {selectedTierData.articlesRange}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mt-3">
                {selectedTierData.tierName}
              </h4>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {selectedTierData.corePrinciple}
              </p>

              {/* Penalties Box */}
              <div className="mt-4 p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Régimen Sancionador Aplicable:</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase block">Multa fija tope</span>
                    <span className="font-mono font-bold text-slate-200">{selectedTierData.penaltyCeiling}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase block">Tope % facturación</span>
                    <span className="font-mono font-bold text-slate-200">{selectedTierData.penaltyPct}</span>
                  </div>
                </div>
              </div>

              {/* Exact Legal Quote */}
              <div className="mt-4 space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Fundamento Jurídico (EUR-Lex / BOE):
                </span>
                <blockquote className="p-3 rounded-lg bg-slate-950/60 border-l-2 border-indigo-500 text-xs text-slate-300 italic leading-relaxed">
                  &ldquo;{selectedTierData.keyCitation.exactQuote}&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 min-w-0">
              <CitationBadge
                citation={selectedTierData.keyCitation}
                onSelect={onNavigateCitation}
                size="sm"
              />
              <button
                type="button"
                onClick={() => onNavigateCitation(selectedTierData.keyCitation)}
                className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold shrink-0"
              >
                <span>Leer artículo completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* SECTION 2: ROLE-BASED ENTERPRISE MATRIX */}
      <SectionCard
        title="¿Qué implica para mi empresa? Matriz de Roles y Deberes"
        subtitle="Selecciona uno o varios roles para ver obligaciones operativas, cadena de valor y marco nacional de la AESIA en España"
        icon={<Building2 className="w-5 h-5 text-indigo-400" />}
      >
        <div className="space-y-6 pt-2">
          {/* Multi-Role Selector */}
          <MultiRoleSelector
            selectedRoles={activeRoles}
            onToggleRole={handleToggleRole}
            onSetRoles={onSetRoles}
          />

          {/* Multi-Role Combined Banner */}
          {activeRoles.length > 1 && (
            <div className="p-3.5 rounded-xl border border-indigo-500/30 bg-indigo-950/20 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-200 leading-relaxed">
                <strong className="text-indigo-300 font-semibold block mb-0.5">
                  Matriz de Obligaciones Combinada ({activeRoles.length} roles simultáneos):
                </strong>
                Tu empresa asume responsabilidades concurrentes en la cadena de valor de la IA. A continuación se detallan las exigencias operativas y legales de cada uno de los roles seleccionados de forma acumulativa.
              </div>
            </div>
          )}

          {/* Active Roles Cards Container */}
          <div className="space-y-4">
            {activeRoles.includes('deployer') && (
              <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-4">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-indigo-500/20">
                  <span className="font-mono text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Rol: Desplegador (Empresa Usuaria / Explotador)
                  </span>
                  <span className="text-xs text-indigo-400/80 font-mono">
                    Art. 3.4 y Art. 26
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong>Desplegador (Empresa Usuaria):</strong> Toda persona física o jurídica que utiliza un sistema de IA bajo su propia autoridad en el ejercicio de una actividad profesional.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        1. Supervisión Humana Efectiva (Art. 26.2)
                      </span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Asignar la supervisión únicamente a personas naturales debidamente capacitadas y con autoridad real para detener o invalidar decisiones de la IA.
                      </p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_26.p2',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'paragraph',
                          articleId: 'art_26',
                          paragraphId: 'art_26.p2',
                          displayLabel: 'Art. 26.2 · Supervisión humana por el desplegador',
                          exactQuote: 'Los desplegadores encomendarán la supervisión humana a personas físicas que posean la competencia, la formación y la autoridad necesarias...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        2. Retención de Logs Automáticos (Art. 26.5)
                      </span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Conservar los registros generados automáticamente por el sistema de IA durante un mínimo de <strong>6 meses</strong> si están bajo control de la empresa.
                      </p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_26.p5',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'paragraph',
                          articleId: 'art_26',
                          paragraphId: 'art_26.p5',
                          displayLabel: 'Art. 26.5 · Conservación de registros de logs (6 meses)',
                          exactQuote: 'Los desplegadores conservarán los registros generados automáticamente por dicho sistema de IA de alto riesgo durante un período adecuado...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        3. Evaluación de Impacto en Derechos Fundamentales (Art. 27)
                      </span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Obligatoria antes del despliegue para entidades de derecho público y entidades privadas que presten servicios públicos esenciales (crédito, seguros de vida/salud).
                      </p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_27',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_27',
                          displayLabel: 'Art. 27 · Evaluación EIDF previa',
                          exactQuote: 'Antes de poner en servicio un sistema de IA de alto riesgo, los desplegadores evaluarán el impacto en los derechos fundamentales...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        4. Información a Trabajadores (Art. 26.11)
                      </span>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Informar previamente a los representantes de los trabajadores y a los empleados afectados antes de poner en servicio una IA en el ámbito laboral.
                      </p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_26.p11',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'paragraph',
                          articleId: 'art_26',
                          paragraphId: 'art_26.p11',
                          displayLabel: 'Art. 26.11 · Notificación a empleados y sindicatos',
                          exactQuote: 'Antes de poner en servicio o utilizar un sistema de IA de alto riesgo en el lugar de trabajo, los desplegadores informarán a los representantes de los trabajadores...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeRoles.includes('provider') && (
              <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-4">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-indigo-500/20">
                  <span className="font-mono text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Rol: Proveedor (Desarrollador o Titular de Marca)
                  </span>
                  <span className="text-xs text-indigo-400/80 font-mono">
                    Art. 3.3 y Art. 16
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong>Proveedor:</strong> Toda persona física o jurídica que desarrolla un sistema de IA (o hace que se desarrolle) y lo comercializa o pone en servicio con su propio nombre o marca comercial.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Gestión de Riesgos y Calidad de Datos (Arts. 9 y 10)</span>
                      <p className="text-slate-400 text-[11px]">Sistema continuo e iterativo de identificación de riesgos y conjuntos de datos de entrenamiento libres de sesgos perjudiciales.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_9',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_9',
                          displayLabel: 'Art. 9 · Sistema de gestión de riesgos',
                          exactQuote: 'Se implantará, aplicará, documentará y mantendrá un sistema de gestión de riesgos...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Documentación Técnica Anexo IV (Art. 11)</span>
                      <p className="text-slate-400 text-[11px]">Elaborar el dossier técnico completo antes de la comercialización y conservarlo 10 años.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_11',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_11',
                          displayLabel: 'Art. 11 · Documentación técnica',
                          exactQuote: 'La documentación técnica de un sistema de IA de alto riesgo se elaborará antes de que dicho sistema se introduzca en el mercado...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Evaluación de Conformidad y Marcado CE (Arts. 43 y 48)</span>
                      <p className="text-slate-400 text-[11px]">Control interno o intervención de organismo notificado, declaración de conformidad UE y fijación del marcado CE.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_43',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_43',
                          displayLabel: 'Art. 43 · Procedimientos de evaluación de la conformidad',
                          exactQuote: 'Antes de comercializar o poner en servicio un sistema de IA de alto riesgo, el proveedor lo someterá al procedimiento correspondiente...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Registro en la Base de Datos de la UE (Art. 49)</span>
                      <p className="text-slate-400 text-[11px]">Registro público obligatorio del sistema en el repositorio central gestionado por la Comisión Europea.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_49',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_49',
                          displayLabel: 'Art. 49 · Registro en la base de datos de la UE',
                          exactQuote: 'Antes de introducir en el mercado o poner en servicio un sistema de IA de alto riesgo, el proveedor se registrará a sí mismo y a su sistema...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeRoles.includes('gpai_provider') && (
              <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-4">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-indigo-500/20">
                  <span className="font-mono text-xs font-semibold text-violet-300 uppercase tracking-wider">
                    Rol: Proveedor de Modelos GPAI (Uso General / Fundacionales)
                  </span>
                  <span className="text-xs text-violet-400/80 font-mono">
                    Art. 3.63 y Arts. 51–55
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong>Proveedor de Modelos GPAI:</strong> Quien entrena y pone a disposición modelos de IA de propósito general con amplia competencia multimodal o de lenguaje.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-violet-300">Dossier Anexo XI e Información a Integradores (Art. 53)</span>
                      <p className="text-slate-400 text-[11px]">Facilitar a los desarrolladores terceros que integran el modelo las especificaciones de capacidades y limitaciones.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_53.p1.b',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'paragraph',
                          articleId: 'art_53',
                          displayLabel: 'Art. 53.1(b) · Información a proveedores integradores',
                          exactQuote: 'Poner a disposición información y documentación a los proveedores de sistemas de IA que tengan intención de integrar el modelo...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-violet-300">Resumen Público de Datos de Entrenamiento (Art. 53.1(d))</span>
                      <p className="text-slate-400 text-[11px]">Publicar un resumen suficientemente detallado de los datos de entrenamiento según plantilla de la Oficina de IA.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_53.p1.d',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'paragraph',
                          articleId: 'art_53',
                          displayLabel: 'Art. 53.1(d) · Transparencia de datos de entrenamiento',
                          exactQuote: 'Elaborar y hacer público un resumen suficientemente detallado sobre los contenidos utilizados para el entrenamiento...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-violet-300">Umbral Sistémico &gt;10^25 FLOPs (Art. 51 y 52)</span>
                      <p className="text-slate-400 text-[11px]">Si el entrenamiento superó 10^25 FLOPs, debe notificarlo a la Comisión en 2 semanas y aplicar red teaming.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_52.p1',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'paragraph',
                          articleId: 'art_52',
                          displayLabel: 'Art. 52.1 · Notificación obligatoria de riesgo sistémico',
                          exactQuote: 'Cuando un modelo GPAI alcance el umbral de 10^25 FLOPs, el proveedor lo notificará a la Comisión sin demora y a más tardar en dos semanas...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-violet-300">Mitigación de Riesgos Sistémicos (Art. 55)</span>
                      <p className="text-slate-400 text-[11px]">Evaluaciones de modelo continuas, pruebas adversarias (red teaming) y notificación de incidentes graves a la Oficina de IA.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_55',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_55',
                          displayLabel: 'Art. 55 · Obligaciones para modelos con riesgo sistémico',
                          exactQuote: 'Llevar a cabo evaluaciones de modelos, evaluar y mitigar posibles riesgos sistémicos a escala de la Unión...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeRoles.includes('importer') && (
              <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-4">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-indigo-500/20">
                  <span className="font-mono text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Rol: Importador Extra-UE
                  </span>
                  <span className="text-xs text-indigo-400/80 font-mono">
                    Art. 3.6 y Art. 23
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong>Importador:</strong> Persona física o jurídica establecida en la UE que introduce en el mercado de la Unión un sistema de IA procedente de un tercer país.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Verificación de Marcado CE y Documentación (Art. 23)</span>
                      <p className="text-slate-400 text-[11px]">Verificar que el proveedor extranjero ha seguido la evaluación de conformidad, redactado el Anexo IV y designado representante autorizado.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_23',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_23',
                          displayLabel: 'Art. 23 · Obligaciones de los importadores',
                          exactQuote: 'Antes de comercializar un sistema de IA de alto riesgo, los importadores se asegurarán de que el sistema cumple...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Riesgo de Conversión en Proveedor (Art. 25)</span>
                      <p className="text-slate-400 text-[11px]">
                        Si comercializa el sistema bajo su propio nombre o marca, o modifica sustancialmente su finalidad, asume automáticamente las obligaciones de Proveedor.
                      </p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_25',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_25',
                          displayLabel: 'Art. 25 · Asunción de deberes de proveedor',
                          exactQuote: 'Toda persona física o jurídica se considerará proveedor a efectos del presente Reglamento si pone su nombre o marca comercial en un sistema de IA de alto riesgo...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeRoles.includes('distributor') && (
              <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-4">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-indigo-500/20">
                  <span className="font-mono text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                    Rol: Distribuidor Comercial
                  </span>
                  <span className="text-xs text-indigo-400/80 font-mono">
                    Art. 3.7 y Art. 24
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong>Distribuidor:</strong> Persona en la cadena de suministro distinta del proveedor o del importador que comercializa un sistema de IA sin alterar sus propiedades ni marca.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Verificación de Conformidad y Marcado CE (Art. 24)</span>
                      <p className="text-slate-400 text-[11px]">Comprobar el marcado CE, la declaración UE de conformidad y que se acompaña de las instrucciones en lengua comprensible.</p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_24',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_24',
                          displayLabel: 'Art. 24 · Obligaciones de los distribuidores',
                          exactQuote: 'Antes de comercializar un sistema de IA de alto riesgo, los distribuidores verificarán que este lleva el marcado CE requerido...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                      <span className="font-semibold text-indigo-300">Marca Blanca y Cambio de Finalidad (Art. 25.1)</span>
                      <p className="text-slate-400 text-[11px]">
                        Embalar o vender un modelo con marca blanca o aplicarlo a casos de alto riesgo convierte al distribuidor en Proveedor ante la ley europea.
                      </p>
                      <CitationBadge
                        citation={{
                          citationId: 'EU-2024-1689:art_25',
                          boeId: 'DOUE-L-2024-81079',
                          eliUri: 'https://data.europa.eu/eli/reg/2024/1689/spa',
                          targetType: 'article',
                          articleId: 'art_25',
                          displayLabel: 'Art. 25 · Conversión por marca blanca',
                          exactQuote: 'Toda persona física o jurídica se considerará proveedor a efectos del presente Reglamento si pone su nombre o marca comercial...',
                        }}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Spain & AESIA Context Block */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  MARCO NACIONAL ESPAÑA
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  AESIA · Real Decreto 817/2023 · Sandbox Regulador
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                España fue el primer Estado miembro de la UE en constituir su autoridad supervisora independiente (AESIA en A Coruña) y desplegar el entorno controlado de pruebas (Sandbox) para auditar guías prácticas de cumplimiento con empresas del sector.
              </p>
            </div>

            <CitationBadge
              citation={{
                citationId: 'BOE-A-2023-18911',
                boeId: 'BOE-A-2023-18911',
                eliUri: 'https://www.boe.es/eli/es/rd/2023/08/22/729',
                targetType: 'boe_update',
                articleId: 'art_70',
                displayLabel: 'BOE-A-2023-18911 · Estatuto de la AESIA',
                exactQuote: 'Real Decreto 729/2023, de 22 de agosto, por el que se aprueba el Estatuto de la Agencia Española de Supervisión de la Inteligencia Artificial...',
              }}
              onSelect={onNavigateCitation}
              size="sm"
            />
          </div>
        </div>
      </SectionCard>

      {/* SECTION 3: INTERACTIVE AI SYSTEM RISK CLASSIFIER */}
      <SectionCard
        title="Clasificador Diagnóstico de Sistema IA para Empresas"
        subtitle="Conteste al cuestionario técnico para diagnosticar el nivel de riesgo de su caso de uso y obtener un plan de acción legal inmediato"
        icon={<Compass className="w-5 h-5 text-emerald-400" />}
        badge={
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            Algoritmo de Diagnóstico Oficial
          </span>
        }
        headerRight={
          <button
            type="button"
            onClick={resetDiagnostic}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar test</span>
          </button>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Questions Column */}
          <div className="lg:col-span-7 space-y-3">
            <p className="text-xs text-slate-400">
              Marque las casillas si alguna de las siguientes características coincide con el diseño o uso de su solución de IA:
            </p>

            <div className="space-y-2">
              {DIAGNOSTIC_QUESTIONS.map((q) => {
                const isChecked = Boolean(diagnosticAnswers[q.id]);
                return (
                  <div
                    key={q.id}
                    onClick={() => toggleDiagnosticAnswer(q.id)}
                    className={`cursor-pointer p-3.5 rounded-lg border transition-all duration-150 select-none ${
                      isChecked
                        ? 'border-indigo-500/60 bg-indigo-950/30 shadow-sm'
                        : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDiagnosticAnswer(q.id)}
                        className="mt-1 w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            {q.categoryLabel}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-snug">
                          {q.prompt}
                        </p>
                        <div className="mt-2" onClick={(e) => e.stopPropagation()}>
                          <CitationBadge
                            citation={q.legalCitation}
                            onSelect={onNavigateCitation}
                            size="xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Diagnostic Result Column */}
          <div className="lg:col-span-5 p-5 rounded-xl border border-slate-800 bg-slate-900/90 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Resultado Diagnóstico
                </span>
                <RiskBadge level={diagnosticResult.level} size="sm" />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  {diagnosticResult.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {diagnosticResult.summary}
                </p>
              </div>

              {/* Action Plan */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Roadmap de Cumplimiento Técnico y Legal:
                </span>
                <ul className="space-y-1.5">
                  {diagnosticResult.actionRoadmap.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono text-[10px] flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Legal Citations */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider block">
                  Artículos EUR-Lex vinculados:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {diagnosticResult.citations.map((c, i) => (
                    <CitationBadge
                      key={i}
                      citation={c}
                      onSelect={onNavigateCitation}
                      size="xs"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => onOpenQuizForTopic('high_risk')}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 text-xs font-semibold transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Poner a prueba este caso en el Quiz Engine</span>
              </button>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* SECTION 4: CURATED INFOGRAPHICS GALLERY */}
      {engine.corpus.infographics && engine.corpus.infographics.length > 0 && (
        <SectionCard
          title="Infografías y Esquemas Conceptuales Curados"
          subtitle="Diagramas estructurados de flujos de conformidad, categorización de modelos GPAI y gobernanza europea"
          icon={<Sparkles className="w-5 h-5 text-violet-400" />}
          badge={
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30">
              {engine.corpus.infographics.length} Módulos
            </span>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {engine.corpus.infographics.map((info) => (
              <div
                key={info.id}
                className="flex flex-col justify-between p-4 rounded-xl border border-slate-800/90 bg-slate-900/50 hover:border-slate-700/80 transition-all duration-150"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/60">
                    <RiskBadge level={info.riskLevel} size="xs" />
                    <span className="font-mono text-[10px] text-slate-400 uppercase">
                      {info.category}
                    </span>
                  </div>

                  <h4 className="font-semibold text-slate-100 text-sm mt-2.5">
                    {info.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {info.subtitle}
                  </p>

                  <div className="mt-3 space-y-2">
                    {info.keyPoints.slice(0, 3).map((kp, idx) => (
                      <div key={idx} className="p-2 rounded bg-slate-950/60 border border-slate-800/60 text-xs overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-1 min-w-0">
                          <span className="font-semibold text-slate-200">{kp.heading}</span>
                          {kp.metricOrBadge && (
                            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 shrink-0">
                              {kp.metricOrBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">{kp.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-800/70 flex flex-wrap gap-1">
                  {info.citations.slice(0, 2).map((c, i) => (
                    <CitationBadge
                      key={i}
                      citation={c}
                      onSelect={onNavigateCitation}
                      size="xs"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
};
