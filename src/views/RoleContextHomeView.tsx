import React, { useState, useMemo } from 'react';
import { LegalVectorEngine, resolveOfficialExternalUrl } from '../services/vectorStore';
import { EnterpriseRole, LegalCitation, RiskLevel } from '../types/legal.types';
import { RiskBadge } from '../components/shared/RiskBadge';
import { CitationBadge } from '../components/shared/CitationBadge';
import { SectionCard } from '../components/shared/SectionCard';
import { SegmentedFilterBar, FilterOption } from '../components/shared/SegmentedFilterBar';
import { MultiRoleSelector } from '../components/shared/MultiRoleSelector';
import { ActiveAppTab } from '../hooks/useLegalStore';
import {
  Building2,
  Cpu,
  Scale,
  Sparkles,
  Landmark,
  Calculator,
  ShoppingBag,
  Briefcase,
  Users,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Layers,
  BookOpen,
  ExternalLink,
  HelpCircle,
  GitMerge,
} from 'lucide-react';

export interface RoleContextHomeViewProps {
  engine: LegalVectorEngine;
  selectedRole: EnterpriseRole;
  onSelectRole: (role: EnterpriseRole) => void;
  onNavigateCitation: (citation: LegalCitation) => void;
  onNavigateTab: (tab: ActiveAppTab) => void;
  selectedRoles?: EnterpriseRole[];
  onToggleRole?: (role: EnterpriseRole) => void;
  onSetRoles?: (roles: EnterpriseRole[]) => void;
}

function cite(
  id: string,
  targetType: LegalCitation['targetType'],
  articleId: string,
  displayLabel: string,
  exactQuote: string,
  paragraphId?: string
): LegalCitation {
  return {
    citationId: `EU-2024-1689:${id}`,
    boeId: 'DOUE-L-2024-81079',
    eliUri: resolveOfficialExternalUrl({ articleId, paragraphId, targetType }),
    targetType,
    articleId,
    ...(paragraphId ? { paragraphId } : {}),
    displayLabel,
    exactQuote,
  };
}

interface RoleContextCard {
  id: EnterpriseRole;
  title: string;
  legalBasis: string;
  badgeText: string;
  whenYouAreThis: string[];
  whatItImplies: string[];
  inHouseWarning: string;
  citations: LegalCitation[];
}

const ROLE_CONTEXT_CARDS: RoleContextCard[] = [
  {
    id: 'provider',
    title: 'Proveedor (Desarrollador o Titular de Marca)',
    legalBasis: 'Art. 3.3 y Art. 16',
    badgeText: 'Máxima carga técnica si es Alto Riesgo',
    whenYouAreThis: [
      'Desarrollas un sistema de IA o un modelo GPAI (o encargas que te lo desarrollen a medida).',
      'Lo introduces en el mercado para terceros O lo pones en servicio bajo tu propio nombre o marca para explotarlo tú mismo (a título oneroso o gratuito).',
      'También te conviertes en Proveedor (Art. 25.1) si pones tu marca a un sistema ajeno, lo modificas sustancialmente o cambias su finalidad hacia un uso de Alto Riesgo.',
    ],
    whatItImplies: [
      'Clasificar el nivel de riesgo del sistema antes de ponerlo en producción (Arts. 5, 6 y 50).',
      'Si es de Alto Riesgo (Anexo I o III): implementar gestión de riesgos (Art. 9), gobernanza de datos (Art. 10), documentación técnica Anexo IV (Art. 11), logs automáticos (Art. 12), evaluación de conformidad (Art. 43), marcado CE (Art. 48) y registro en base de datos UE (Art. 49).',
      'Si NO es de Alto Riesgo (ej. calculador de precios comercial): cumplir transparencia si aplica (Art. 50) y alfabetización de tu plantilla (Art. 4), sin necesidad de marcado CE.',
    ],
    inHouseWarning:
      '¡Clave para empresas que crean sus propios modelos! Según el Art. 3.3, "poner en servicio" bajo tu propio nombre incluye desarrollar un modelo interno para dar servicio a tus clientes o para tu operativa interna. Eres Proveedor + Desplegador a la vez.',
    citations: [
      cite(
        'art_3.p1',
        'paragraph',
        'art_3',
        'Art. 3.3 · Definición de Proveedor',
        '«proveedor»: una persona física o jurídica, autoridad pública, órgano u organismo que desarrolle un sistema de IA o un modelo de IA de uso general o para el que se desarrolle un sistema de IA o un modelo de IA de uso general y lo introduzca en el mercado o ponga en servicio el sistema de IA con su propio nombre o marca, ya sea a título oneroso o gratuito;',
        'art_3.p1'
      ),
      cite(
        'art_16',
        'article',
        'art_16',
        'Art. 16 · Obligaciones de los proveedores',
        'Los proveedores de sistemas de IA de alto riesgo velarán por que sus sistemas de IA de alto riesgo sean conformes con los requisitos establecidos en la sección 2.'
      ),
      cite(
        'art_25',
        'article',
        'art_25',
        'Art. 25 · Transformación en Proveedor en la cadena de valor',
        'Cualquier distribuidor, importador, desplegador u otro tercero será considerado proveedor de un sistema de IA de alto riesgo a efectos del presente Reglamento y estará sujeto a las obligaciones del proveedor en virtud del artículo 16, en cualquiera de las circunstancias siguientes...'
      ),
    ],
  },
  {
    id: 'deployer',
    title: 'Desplegador (Empresa Usuaria / Explotador)',
    legalBasis: 'Art. 3.4 y Art. 26',
    badgeText: 'Rol más frecuente en PYMES, Bancos y Corporaciones',
    whenYouAreThis: [
      'Utilizas un sistema de IA bajo tu propia autoridad en el curso de tu actividad profesional, empresarial o institucional.',
      'Aplica tanto si usas un software de terceros (ChatGPT Enterprise, Copilot, SaaS de RRHH) como si operas en producción tu propio modelo desarrollado in-house.',
    ],
    whatItImplies: [
      'Obligación universal desde el 2 de febrero de 2025: garantizar la alfabetización en IA de tu personal (Art. 4).',
      'Si el sistema que explotas es de Alto Riesgo (ej. scoring bancario o filtro de CVs): usarlo según las instrucciones (Art. 26.1), asignar supervisión humana con competencia real (Art. 26.2), vigilar relevancia de datos de entrada (Art. 26.4), conservar logs al menos 6 meses (Art. 26.6) e informar a los trabajadores antes de usarlo (Art. 26.7).',
      'En banca, seguros y servicios públicos: realizar Evaluación de Impacto relativa a los Derechos Fundamentales (FPIA, Art. 27) y dar explicación individual al ciudadano afectado (Art. 86).',
    ],
    inHouseWarning:
      'Si compras un sistema de IA cerrado y solo lo usas para el fin previsto por el fabricante, eres únicamente Desplegador (no tienes que hacer marcado CE ni documentación Anexo IV).',
    citations: [
      cite(
        'art_3.4',
        'paragraph',
        'art_3',
        'Art. 3.4 · Definición de Desplegador',
        '«desplegador»: una persona física o jurídica, o autoridad pública, órgano u organismo que utilice un sistema de IA bajo su propia autoridad, salvo cuando su uso se enmarque en una actividad personal de carácter no profesional;',
        'art_3.p1'
      ),
      cite(
        'art_26',
        'article',
        'art_26',
        'Art. 26 · Obligaciones de los desplegadores',
        'Los desplegadores de sistemas de IA de alto riesgo adoptarán las medidas técnicas y organizativas adecuadas para garantizar que utilizan dichos sistemas con arreglo a las instrucciones de uso que los acompañen.'
      ),
      cite(
        'art_27',
        'article',
        'art_27',
        'Art. 27 · Evaluación de impacto en derechos fundamentales',
        'Antes de poner en funcionamiento un sistema de IA de alto riesgo a que se refiere el artículo 6, apartado 2, los desplegadores que sean organismos de Derecho público o entidades privadas que presten servicios públicos, y los desplegadores de sistemas de IA de alto riesgo a que se refiere el anexo III, punto 5, letras b) y c), realizarán una evaluación del impacto en los derechos fundamentales...'
      ),
    ],
  },
  {
    id: 'gpai_provider',
    title: 'Proveedor de Modelo GPAI (Uso General / Fundacional)',
    legalBasis: 'Art. 3.63 y Arts. 51–55',
    badgeText: 'Creadores de LLMs y Modelos Base',
    whenYouAreThis: [
      'Entrenas desde cero (o realizas un reentrenamiento masivo) un modelo de IA de uso general capaz de realizar de manera competente una amplia gama de tareas distintas.',
      'Lo introduces en el mercado o lo integras en sistemas downstream (por API, pesos abiertos o servicio cloud).',
    ],
    whatItImplies: [
      'Mantener documentación técnica del modelo (Anexo XI) y facilitar información a los integradores downstream (Anexo XII) sin violar secretos comerciales (Art. 53.1.a/b).',
      'Aplicar una política de respeto a los derechos de autor de la UE y publicar un resumen suficientemente detallado de los datos de entrenamiento (Art. 53.1.c/d).',
      'Si supera 10^25 FLOPs (riesgo sistémico, Art. 51): evaluación con red-teaming adversarial, mitigación de riesgos sistémicos, notificación de incidentes y ciberseguridad reforzada (Art. 55).',
    ],
    inHouseWarning:
      'Si tu empresa solo consume la API de OpenAI/Anthropic/Mistral o hace un fine-tuning vertical acotado para su negocio, NO eres proveedor GPAI de todo el modelo base; tus deberes se limitan a tu caso de uso (o a la modificación realizada según el Considerando 97).',
    citations: [
      cite(
        'art_51',
        'article',
        'art_51',
        'Art. 51 · Clasificación de modelos GPAI',
        'Un modelo de IA de uso general se clasificará como modelo de IA de uso general con riesgo sistémico si cumple alguna de las condiciones siguientes: a) posee capacidades de gran impacto... b) potencia acumulada > 10^25 FLOPs.'
      ),
      cite(
        'art_53',
        'article',
        'art_53',
        'Art. 53 · Obligaciones de proveedores GPAI',
        'Los proveedores de modelos de IA de uso general elaborarán y mantendrán actualizada la documentación técnica del modelo, incluido su proceso de entrenamiento y prueba...'
      ),
    ],
  },
  {
    id: 'importer',
    title: 'Importador de Sistemas IA Extra-UE',
    legalBasis: 'Art. 3.6 y Art. 23',
    badgeText: 'Puerta de entrada a la UE',
    whenYouAreThis: [
      'Estás establecido en la Unión Europea e introduces en el mercado europeo un sistema de IA que lleva el nombre o marca de una empresa establecida fuera de la UE (EE.UU., Reino Unido, Asia).',
    ],
    whatItImplies: [
      'Verificar antes de comercializar un sistema de Alto Riesgo que el proveedor extranjero ha realizado la evaluación de conformidad, redactado la documentación técnica Anexo IV, colocado el marcado CE y designado representante autorizado en la UE (Art. 22 y Art. 23).',
      'Abstenerse de comercializar el sistema si existen indicios de no conformidad.',
    ],
    inHouseWarning:
      'Cuidado al revender en España/UE software de IA de proveedores estadounidenses o asiáticos en ámbitos de RRHH, salud o banca sin verificar su marcado CE y representante UE.',
    citations: [
      cite(
        'art_23',
        'article',
        'art_23',
        'Art. 23 · Obligaciones de los importadores',
        'Antes de introducir en el mercado un sistema de IA de alto riesgo, los importadores se asegurarán de que el proveedor de dicho sistema haya llevado a cabo el procedimiento de evaluación de la conformidad pertinente...'
      ),
    ],
  },
  {
    id: 'distributor',
    title: 'Distribuidor Comercial / Reseller en la Cadena',
    legalBasis: 'Art. 3.7 y Art. 24',
    badgeText: 'Comercialización sin alterar el sistema',
    whenYouAreThis: [
      'Comercializas o revendes un sistema de IA dentro de la UE sin ser el proveedor ni el importador, y sin ponerle tu propia marca ni modificar su finalidad.',
    ],
    whatItImplies: [
      'Verificar que el sistema de Alto Riesgo lleva el marcado CE requerido, va acompañado de la declaración UE de conformidad y de las instrucciones de uso en español/idioma oficial (Art. 24).',
      'Si le pones tu propia marca (white-label) o cambias su finalidad prevista a Alto Riesgo, dejas de ser mero distribuidor y pasas a ser Proveedor (Art. 25.1).',
    ],
    inHouseWarning:
      'Muchos partners tecnológicos o consultoras creen que son meros distribuidores, pero al empaquetar un modelo bajo su propia marca ("Marca Blanca") se transforman legalmente en Proveedores (Art. 25.1.a).',
    citations: [
      cite(
        'art_24',
        'article',
        'art_24',
        'Art. 24 · Obligaciones de los distribuidores',
        'Antes de comercializar un sistema de IA de alto riesgo, los distribuidores verificarán que este lleva el marcado CE requerido...'
      ),
    ],
  },
];

interface RealWorldBusinessScenario {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  assignedRoles: string;
  primaryRiskLevel: RiskLevel;
  riskSummaryBadge: string;
  whereItFitsExplanation: string;
  keyDistinctions: {
    scenarioVariant: string;
    riskTier: RiskLevel;
    legalRule: string;
    whatCompanyMustDo: string;
  }[];
  citations: LegalCitation[];
}

const REAL_WORLD_SCENARIOS: RealWorldBusinessScenario[] = [
  {
    id: 'pricing_calculator',
    title: '1. Calculador de Precios para Clientes (Motor de Pricing Propio)',
    subtitle:
      'Empresa que entrena o desarrolla su propio modelo para calcular presupuestos, tarifas dinámicas o descuentos personalizados para clientes',
    icon: <Calculator className="w-5 h-5 text-emerald-400" />,
    assignedRoles: 'Rol Dual: Proveedor (Art. 3.3) + Desplegador (Art. 3.4)',
    primaryRiskLevel: 'minimal',
    riskSummaryBadge: 'Riesgo Mínimo (95% casos) · Excepción en Seguros de Vida/Salud',
    whereItFitsExplanation:
      'Al desarrollar tu propio modelo y ponerlo en servicio bajo tu nombre o web para calcular precios a tus clientes, la ley te asigna simultáneamente el rol de Proveedor (por crearlo y ponerlo en servicio) y de Desplegador (por explotarlo bajo tu autoridad). Sin embargo, ser Proveedor NO significa automáticamente tener cargas pesadas: la ley solo impone requisitos estrictos si el caso de uso está en el Anexo III o en el Art. 5.',
    keyDistinctions: [
      {
        scenarioVariant: 'A) Calculador de precios en E-commerce, SaaS, B2B, Energía, Transporte, Inmobiliaria o Servicios profesionales',
        riskTier: 'minimal',
        legalRule: 'Riesgo Mínimo o Nulo (Art. 95) + Alfabetización (Art. 4)',
        whatCompanyMustDo:
          'NO es de Alto Riesgo. No necesita marcado CE, ni registro en la UE, ni auditoría externa. Solo debes cumplir con la Alfabetización en IA de tu equipo (Art. 4) y puedes adherirte voluntariamente a códigos de conducta (Art. 95).',
      },
      {
        scenarioVariant: 'B) Calculador de primas o evaluación de riesgos en Seguros de Vida y Seguros de Salud de personas físicas',
        riskTier: 'high',
        legalRule: 'Alto Riesgo (Anexo III, punto 5.c y Art. 6.2)',
        whatCompanyMustDo:
          'Aquí SÍ entra en Alto Riesgo porque puede excluir a personas de coberturas vitales o sanitarias. Como desarrollador y explotador del modelo, debes cumplir obligaciones de Proveedor (Arts. 9–15, documentación Anexo IV, marcado CE) y de Desplegador (Art. 26 y Evaluación de Impacto en Derechos Fundamentales Art. 27).',
      },
      {
        scenarioVariant: 'C) Pricing predatorio que explota vulnerabilidades (edad, discapacidad o situación socioeconómica extrema)',
        riskTier: 'unacceptable',
        legalRule: 'Práctica Prohibida (Art. 5.1.a y Art. 5.1.b)',
        whatCompanyMustDo:
          'Prohibido tajantemente si el algoritmo utiliza técnicas subliminales/engañosas o explota la vulnerabilidad de un colectivo específico (menores, ancianos, personas con discapacidad o pobreza) alterando su comportamiento y causándoles un perjuicio económico grave.',
      },
    ],
    citations: [
      cite(
        'art_3.3',
        'paragraph',
        'art_3',
        'Art. 3.3 · Puesta en servicio bajo nombre propio',
        '«proveedor»: una persona física o jurídica... que desarrolle un sistema de IA y lo introduzca en el mercado o ponga en servicio el sistema de IA con su propio nombre o marca...',
        'art_3.p1'
      ),
      cite(
        'anx_III.5c',
        'annex',
        'anx_III',
        'Anexo III.5.c · Seguros de vida y salud',
        'Sistemas de IA destinados a ser utilizados para evaluar riesgos y fijar precios en relación con personas físicas en el caso de los seguros de vida y de salud.'
      ),
      cite(
        'art_95',
        'article',
        'art_95',
        'Art. 95 · Sistemas de IA de riesgo mínimo',
        'La Oficina de IA y los Estados miembros fomentarán y facilitarán la elaboración de códigos de conducta destinados a fomentar la aplicación voluntaria a sistemas de IA distintos de los sistemas de IA de alto riesgo...'
      ),
    ],
  },
  {
    id: 'banks_models',
    title: '2. Modelos Propios de Bancos y Entidades Financieras',
    subtitle:
      'Bancos, cajas y fintechs que entrenan y explotan sus propios modelos de Credit Scoring, solvencia, detección de fraude o riesgo de mercado',
    icon: <Landmark className="w-5 h-5 text-amber-400" />,
    assignedRoles: 'Rol Dual: Proveedor (Art. 3.3) + Desplegador Financiero (Art. 26 y Art. 27)',
    primaryRiskLevel: 'high',
    riskSummaryBadge: 'Alto Riesgo en Solvencia/Scoring · Exento en Detección de Fraude',
    whereItFitsExplanation:
      'Los bancos son el ejemplo arquetípico de empresas que desarrollan sus propios modelos cuantitativos y de Machine Learning para explotarlos internamente. El Reglamento (UE) 2024/1689 no regula todos los modelos bancarios por igual: separa quirúrgicamente el riesgo de exclusión financiera de las personas físicas frente a la lucha contra el fraude o la operativa mayorista.',
    keyDistinctions: [
      {
        scenarioVariant: 'A) Modelos de Credit Scoring, evaluación de solvencia o calificación crediticia de personas físicas',
        riskTier: 'high',
        legalRule: 'Alto Riesgo (Anexo III, punto 5.b · Considerando 58)',
        whatCompanyMustDo:
          'Al desarrollar y explotar el modelo de scoring, el banco es Proveedor + Desplegador de Alto Riesgo. Debe garantizar gobernanza de datos sin sesgos discriminatorios (Art. 10), supervisión humana (Art. 14), realizar la Evaluación de Impacto en Derechos Fundamentales (Art. 27) y garantizar el derecho del cliente a recibir una explicación clara de la decisión (Art. 86). La evaluación de conformidad puede integrarse con la supervisión prudencial bancaria (Art. 43.2 y Art. 74.6).',
      },
      {
        scenarioVariant: 'B) Modelos de Detección de Fraude Financiero y Prevención de Blanqueo (AML)',
        riskTier: 'minimal',
        legalRule: 'Exención expresa de Alto Riesgo (Anexo III, punto 5.b in fine)',
        whatCompanyMustDo:
          'El Anexo III.5.b excluye expresamente de Alto Riesgo "los sistemas de IA utilizados con el fin de detectar fraudes financieros". Por tanto, los modelos antifraude en tarjetas, transferencias o pagos quedan en Riesgo Mínimo (sin obligaciones de Alto Riesgo).',
      },
      {
        scenarioVariant: 'C) Modelos de Trading Algorítmico, Liquidez, Tesorería o Scoring exclusivo de grandes empresas (Personas Jurídicas)',
        riskTier: 'minimal',
        legalRule: 'Riesgo Mínimo (Art. 95 · Anexo III.5.b solo cita "personas físicas")',
        whatCompanyMustDo:
          'El Anexo III.5.b se circunscribe a la solvencia de "personas físicas" (consumidores y autónomos). Los modelos de valoración de activos, derivados o solvencia puramente societaria corporativa no entran en el Anexo III.',
      },
    ],
    citations: [
      cite(
        'anx_III.5b',
        'annex',
        'anx_III',
        'Anexo III.5.b · Solvencia y exclusión de fraude',
        'Sistemas de IA destinados a ser utilizados para evaluar la solvencia de personas físicas o establecer su calificación crediticia, con excepción de los sistemas de IA utilizados con el fin de detectar fraudes financieros.'
      ),
      cite(
        'rct_58',
        'recital',
        'rct_58',
        'Considerando 58 · Fundamento en solvencia y fraude',
        'Los sistemas de IA utilizados para evaluar la puntuación o la solvencia crediticia de las personas físicas deben clasificarse como de alto riesgo, ya que determinan el acceso de dichas personas a recursos financieros...'
      ),
      cite(
        'art_27',
        'article',
        'art_27',
        'Art. 27 · FPIA obligatoria en Banca y Seguros',
        'Antes de poner en funcionamiento un sistema de IA de alto riesgo... los desplegadores de sistemas de IA de alto riesgo a que se refiere el anexo III, punto 5, letras b) y c), realizarán una evaluación del impacto en los derechos fundamentales...'
      ),
      cite(
        'art_86',
        'article',
        'art_86',
        'Art. 86 · Derecho a explicación individual',
        'Toda persona afectada sujeta a una decisión adoptada por el desplegador sobre la base de los resultados de salida de un sistema de IA de alto riesgo enumerado en el anexo III... tendrá derecho a obtener del desplegador explicaciones claras y significativas...'
      ),
    ],
  },
  {
    id: 'insurance_sector',
    title: '3. Sector Asegurador: Cálculo de Primas, Costes de Lesionados y Convenios CICOS',
    subtitle:
      'Aseguradoras, mutuas e insurtechs que desarrollan o explotan modelos de tarificación de primas, valoración de lesionados (Baremo), reservas técnicas (IBNR), foto-peritación y compensación de siniestros CICOS',
    icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
    assignedRoles: 'Rol Dual: Proveedor (Art. 3.3) + Desplegador Asegurador (Art. 26 y Art. 27)',
    primaryRiskLevel: 'high',
    riskSummaryBadge: 'Vida/Salud = Alto Riesgo · Autos/Hogar, Lesionados/Reservas y CICOS = Riesgo Mínimo',
    whereItFitsExplanation:
      'El sector asegurador utiliza modelos propios intensivos en datos (GLM, XGBoost, redes neuronales) tanto en suscripción/tarificación como en siniestros. El Reglamento (UE) 2024/1689 traza una frontera quirúrgica en el Anexo III, punto 5.c y el Considerando 58: SOLO es de Alto Riesgo la fijación de precios y evaluación de riesgos sobre personas físicas en Seguros de Vida y de Salud. El resto de ramos (Autos, Hogar, RC) y la operativa de liquidación de siniestros (CICOS, daños materiales, fraude y reservas técnicas) quedan fuera del Alto Riesgo.',
    keyDistinctions: [
      {
        scenarioVariant: 'A) Cálculo de Primas y Selección de Riesgos en Seguros de VIDA y de SALUD (Anexo III.5.c)',
        riskTier: 'high',
        legalRule: 'Alto Riesgo (Anexo III, punto 5.c · Art. 27 FPIA · Art. 86 Explicación)',
        whatCompanyMustDo:
          'Único ámbito asegurador clasificado como Alto Riesgo por el riesgo de exclusión vital o sanitaria. Si la aseguradora entrena y explota el modelo de pricing/scoring de salud o vida, es Proveedor + Desplegador de Alto Riesgo: requiere gobernanza de datos sin sesgos (Art. 10), documentación Anexo IV, supervisión humana (Art. 14), Evaluación de Impacto en Derechos Fundamentales (Art. 27) y explicación al asegurado (Art. 86), integrándose con la supervisión de la DGSFP / Solvencia II (Art. 74.6).',
      },
      {
        scenarioVariant: 'B) Cálculo de Primas en Seguros de AUTOS, HOGAR, RC, COMERCIO y resto de No-Vida',
        riskTier: 'minimal',
        legalRule: 'Riesgo Mínimo (Art. 95 · Excluido del Anexo III.5.c)',
        whatCompanyMustDo:
          'El Anexo III.5.c restringe el Alto Riesgo exclusivamente a "seguros de vida y de salud". Por tanto, los motores propios de cálculo de primas, bonus-malus, propensión de fuga o tarificación dinámica en Autos, Hogar, Multirriesgo o RC son de Riesgo Mínimo: NO requieren marcado CE ni registro UE (solo Alfabetización Art. 4 y no usar prácticas predatorias del Art. 5.1.b).',
      },
      {
        scenarioVariant: 'C) Modelos de Costes de Lesionados (Con Datos Médicos / Salud), Baremo y Reservas (IBNR)',
        riskTier: 'high',
        legalRule: 'Alerta por Datos de Salud: Art. 2.7 y Art. 10.5 EU AI Act + Arts. 9, 22 y 35 RGPD + Frontera Anexo I / III',
        whatCompanyMustDo:
          '¡Matiz crítico al tratar DATOS MÉDICOS (informes de urgencias, secuelas, rehabilitación, convenios CAS)! 1) En el EU AI Act: si el modelo hace triaje clínico o diagnóstico médico del lesionado, es Producto Sanitario de Alto Riesgo (Art. 6.1 + Anexo I); si evalúa al lesionado para denegar coberturas sanitarias o fijar primas en Salud/Vida, es Alto Riesgo (Anexo III.5.c). 2) Aunque solo estime indemnizaciones/reservas por Baremo en Autos/RC, al tratar Datos de Salud (Categoría Especial, Art. 9 RGPD, aplicable por el Art. 2.7 EU AI Act): NO puedes entrenar libremente modelos con informes médicos sin anonimización previa o base legal estricta (RDL 8/2004); requiere Evaluación de Impacto RGPD (EIPD Art. 35) y un perito médico/tramitador humano debe validar la valoración (prohibición de decisión automatizada con datos de salud, Art. 22.4 RGPD). Además, el Art. 10.5 EU AI Act restringe severamente el uso de datos de salud salvo para corregir sesgos con borrado posterior.',
      },
      {
        scenarioVariant: 'D) Convenios CICOS (Daños Materiales CIDE/ASCIDE) vs. Convenios CAS (Asistencia Sanitaria) y Fraude',
        riskTier: 'minimal',
        legalRule: 'Separación obligatoria CICOS (Materiales = Riesgo Mínimo Art. 95) vs. CAS/Lesionados (Datos de Salud)',
        whatCompanyMustDo:
          '1) CICOS puro (convenios CIDE/ASCIDE): solo liquida daños materiales entre aseguradoras (matrículas, versión de colisión, tabla de culpabilidad) sin datos médicos -> Riesgo Mínimo (Art. 95). 2) ¡Cuidado al cruzar CICOS con Lesionados / Convenios CAS (Asistencia Sanitaria)! En cuanto el modelo ingiere partes de lesiones o facturas hospitalarias, entra en categoría especial de salud (Art. 2.7 EU AI Act + Art. 9 RGPD): debes separar el pipeline de datos clínicos (anonimizando/seudonimizando antes de entrenar el estimador de costes) del pipeline material de CICOS. 3) Detección de fraude en siniestros: exenta de Alto Riesgo (Considerando 58), pero sujeta a minimización de datos médicos.',
      },
    ],
    citations: [
      cite(
        'anx_III.5c_ins',
        'annex',
        'anx_III',
        'Anexo III.5.c · Seguros de Vida y de Salud',
        'Sistemas de IA destinados a ser utilizados para evaluar riesgos y fijar precios en relación con personas físicas en el caso de los seguros de vida y de salud.'
      ),
      cite(
        'rct_58_ins',
        'recital',
        'rct_58',
        'Considerando 58 · Justificación en Seguros de Vida/Salud y Fraude',
        'Los sistemas de IA utilizados para evaluar riesgos y fijar precios en relación con personas físicas en el caso de los seguros de vida y de salud también deben clasificarse como de alto riesgo, ya que, si no están debidamente diseñados y utilizados, pueden tener graves consecuencias para la vida y la salud de las personas, incluida la exclusión financiera y la discriminación.'
      ),
      cite(
        'art_6.3_ins',
        'paragraph',
        'art_6',
        'Art. 6.3 · Exención de Alto Riesgo para tareas preparatorias o auxiliares',
        'No obstante lo dispuesto en el apartado 2, un sistema de IA a que se refiere el anexo III no se considerará de alto riesgo si no plantea un riesgo importante de daño para la salud, la seguridad o los derechos fundamentales de las personas físicas, en particular porque no influye materialmente en el resultado de la toma de decisiones (tarea preparatoria)...',
        'art_6.p3'
      ),
      cite(
        'art_10.5_ins',
        'paragraph',
        'art_10',
        'Art. 10.5 · Regla estricta sobre tratamiento de Datos de Salud (Categorías Especiales RGPD) en IA',
        'En la medida en que sea estrictamente necesario para garantizar la detección y corrección de sesgos en relación con los sistemas de IA de alto riesgo... los proveedores podrán tratar excepcionalmente categorías especiales de datos personales a que se refiere el artículo 9, apartado 1, del Reglamento (UE) 2016/679 [datos de salud], sujeto a salvaguardias estrictas y borrado...',
        'art_10.p5'
      ),
      cite(
        'art_2.7_ins',
        'paragraph',
        'art_2',
        'Art. 2.7 · Aplicación íntegra del RGPD sobre datos de salud y decisiones automatizadas',
        'El Derecho de la Unión en materia de protección de datos personales, privacidad y confidencialidad de las comunicaciones se aplicará a los datos personales tratados en relación con los derechos y obligaciones establecidos en el presente Reglamento. El presente Reglamento no afectará a los Reglamentos (UE) 2016/679 [RGPD]...',
        'art_2.p7'
      ),
      cite(
        'art_74.6_ins',
        'paragraph',
        'art_74',
        'Art. 74.6 · Integración con supervisores de servicios financieros y seguros',
        'En lo que respecta a las entidades financieras reguladas por el Derecho de la Unión en materia de servicios financieros, la autoridad de vigilancia del mercado... será la autoridad nacional pertinente responsable de la supervisión financiera de dichas entidades.',
        'art_74.p6'
      ),
    ],
  },
  {
    id: 'smes_daily_ai',
    title: '4. Pequeñas Empresas (PYMES y Autónomos) que usan IA en el Día a Día',
    subtitle:
      'Despachos, agencias, comercios y PYMES que usan ChatGPT, Copilot, generadores de contenido, traductores, CRM inteligente o automatizaciones',
    icon: <Briefcase className="w-5 h-5 text-sky-400" />,
    assignedRoles: 'Desplegador (Art. 3.4) · Con régimen de protección PYME (Art. 62 y Art. 99.6)',
    primaryRiskLevel: 'transparency',
    riskSummaryBadge: 'Riesgo Mínimo / Transparencia · Carga administrativa muy reducida',
    whereItFitsExplanation:
      'Una pequeña empresa que utiliza herramientas de IA en su operativa diaria (redacción, análisis de documentos, soporte al cliente, programación, diseño, contabilidad) actúa únicamente como Desplegador (Art. 3.4). El legislador europeo diseñó la ley para NO asfixiar a las PYMES que usan IA generalista.',
    keyDistinctions: [
      {
        scenarioVariant: 'A) Uso interno diario de asistentes de IA (ChatGPT, Claude, Copilot, resúmenes, ofimática)',
        riskTier: 'minimal',
        legalRule: 'Riesgo Mínimo + Deber de Alfabetización en IA (Art. 4)',
        whatCompanyMustDo:
          'Solo tienes una obligación directa (vigente desde el 2 de febrero de 2025): asegurar un nivel suficiente de alfabetización en IA de tus empleados (Art. 4), formándoles sobre qué es la IA, cómo verificar alucinaciones y no subir datos confidenciales sin control.',
      },
      {
        scenarioVariant: 'B) Poner un Chatbot en la web de la PYME o publicar imágenes/vídeos/textos generados por IA',
        riskTier: 'transparency',
        legalRule: 'Transparencia Específica (Art. 50.1 y Art. 50.4)',
        whatCompanyMustDo:
          'Si tienes un chatbot de atención al cliente, debes informar al usuario de que habla con una IA (Art. 50.1). Si publicas deepfakes (audio/imagen/vídeo realista) o textos generados por IA sobre asuntos de interés público sin revisión editorial humana, debes etiquetarlos como generados por IA (Art. 50.4).',
      },
      {
        scenarioVariant: 'C) ¡Ojo! Si la PYME usa una herramienta de IA para filtrar CVs o seleccionar personal',
        riskTier: 'high',
        legalRule: 'Desplegador de Alto Riesgo en Empleo (Anexo III.4 y Art. 26)',
        whatCompanyMustDo:
          'Si usas un software con IA para cribar currículums o puntuar candidatos, ese uso concreto sí es de Alto Riesgo (Anexo III.4.a). Como Desplegador (Art. 26) debes exigir que la herramienta tenga marcado CE, garantizar que un humano revise las decisiones y avisar a los candidatos/trabajadores.',
      },
      {
        scenarioVariant: 'D) Escudo de protección legal y económica para PYMES y Startups',
        riskTier: 'governance',
        legalRule: 'Ventajas Art. 62, Sandboxes Art. 57 y Tope Sancionador Art. 99.6',
        whatCompanyMustDo:
          'Las PYMES y startups tienen acceso prioritario y gratuito a los Sandboxes regulatorios (Art. 62.1.a), formularios de documentación técnica simplificados y un escudo en multas (Art. 99.6): a diferencia de las multinacionales (que pagan el máximo entre X millones o Y%), a las PYMES y startups se les aplica la cuantía que sea INFERIOR de las dos.',
      },
    ],
    citations: [
      cite(
        'art_4',
        'article',
        'art_4',
        'Art. 4 · Alfabetización en materia de IA',
        'Los proveedores y desplegadores de sistemas de IA adoptarán medidas para garantizar, en la mayor medida posible, un nivel suficiente de alfabetización en materia de IA de su personal...'
      ),
      cite(
        'art_50',
        'article',
        'art_50',
        'Art. 50 · Obligaciones de transparencia (Chatbots y Contenido Sintético)',
        'Los proveedores garantizarán que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de manera que se informe a las personas físicas interesadas de que están interactuando con un sistema de IA...'
      ),
      cite(
        'art_62',
        'article',
        'art_62',
        'Art. 62 · Medidas para proveedores y desplegadores que sean PYMES y empresas emergentes',
        'Los Estados miembros concederán a los proveedores que sean pymes, incluidas las empresas emergentes, acceso prioritario a los espacios controlados de pruebas para la IA...'
      ),
      cite(
        'art_99.6',
        'paragraph',
        'art_99',
        'Art. 99.6 · Límite reducido de multas para PYMES y Startups',
        'En el caso de las pymes, incluidas las empresas emergentes, cada multa a que se refiere el presente artículo será de hasta los porcentajes o los importes a que se refieren los apartados 3, 4 y 5, si esta cuantía fuera inferior.',
        'art_99.p6'
      ),
    ],
  },
  {
    id: 'price_comparators',
    title: '5. Comparadores de Precios, Recomendadores y Marketplaces',
    subtitle:
      'Portales que comparan tarifas de energía, telefonía, vuelos, hoteles, productos comerciales, hipotecas o seguros mediante algoritmos de ranking y recomendación',
    icon: <ShoppingBag className="w-5 h-5 text-violet-400" />,
    assignedRoles: 'Proveedor + Desplegador (si el motor es propio) o Desplegador (si es de tercero)',
    primaryRiskLevel: 'minimal',
    riskSummaryBadge: 'Riesgo Mínimo en comparación general · Atención si hace Scoring o lleva Chatbot',
    whereItFitsExplanation:
      'Los comparadores de precios y motores de recomendación comercial para el consumidor entran, por regla general, en la categoría de Riesgo Mínimo (Art. 95). Solo deben vigilar tres fronteras específicas donde el comparador toca transparencia o evaluación financiera personal.',
    keyDistinctions: [
      {
        scenarioVariant: 'A) Comparador de precios y recomendador de ofertas (viajes, luz, telefonía, compras, seguros de coche/hogar)',
        riskTier: 'minimal',
        legalRule: 'Riesgo Mínimo (Art. 95) + Alfabetización (Art. 4)',
        whatCompanyMustDo:
          'Ordenar, filtrar o recomendar productos y precios públicos según las preferencias del usuario es Riesgo Mínimo bajo el EU AI Act (sin perjuicio de las normas de transparencia de rankings de consumo/DSA).',
      },
      {
        scenarioVariant: 'B) Comparador con asistente conversacional ("Pregúntale a nuestro asesor IA qué tarifa te conviene")',
        riskTier: 'transparency',
        legalRule: 'Transparencia Específica (Art. 50.1)',
        whatCompanyMustDo:
          'El usuario debe saber de forma clara e inequívoca desde el primer mensaje que está interactuando con un sistema de IA y no con un agente humano.',
      },
      {
        scenarioVariant: 'C) Comparador financiero/asegurador que calcula internamente el Credit Scoring del usuario o tarifica su Seguro de Vida/Salud',
        riskTier: 'high',
        legalRule: 'Alto Riesgo (Anexo III.5.b y 5.c) solo si el comparador ejecuta la evaluación de solvencia/riesgo personal',
        whatCompanyMustDo:
          'Si el comparador se limita a recopilar datos del usuario y pasárselos a los bancos/aseguradoras para que ellos devuelvan sus ofertas, el modelo de alto riesgo es del banco/aseguradora. Pero si el propio comparador entrena y ejecuta un modelo de IA que puntúa la solvencia del ciudadano o fija el riesgo de su seguro de vida/salud para filtrarle o denegarle opciones, ese módulo entra en Alto Riesgo (Anexo III.5.b/c).',
      },
    ],
    citations: [
      cite(
        'art_50.1',
        'paragraph',
        'art_50',
        'Art. 50.1 · Transparencia en interacción con personas',
        'Los proveedores garantizarán que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de manera que se informe a las personas físicas interesadas de que están interactuando con un sistema de IA...',
        'art_50.p1'
      ),
      cite(
        'anx_III.5b_comp',
        'annex',
        'anx_III',
        'Anexo III.5.b y 5.c · Solvencia y seguros de vida/salud',
        'Sistemas de IA destinados a ser utilizados para evaluar la solvencia de personas físicas... y para evaluar riesgos y fijar precios en seguros de vida y de salud.'
      ),
    ],
  },
  {
    id: 'gpai_wrappers',
    title: '6. Empresas Tech / Startups que integran APIs de LLMs (GPAI) o hacen Fine-Tuning',
    subtitle:
      'Empresas que construyen productos propios conectando OpenAI, Claude, Gemini, Mistral o Llama mediante RAG, agentes o fine-tuning',
    icon: <GitMerge className="w-5 h-5 text-indigo-400" />,
    assignedRoles: 'Depende del destino del producto: Proveedor de Riesgo Mínimo/Transparencia vs. Proveedor de Alto Riesgo (Art. 25.1.c)',
    primaryRiskLevel: 'gpai',
    riskSummaryBadge: 'Efecto Cascada Art. 25.1.c según la finalidad de tu aplicación',
    whereItFitsExplanation:
      'Cuando construyes una aplicación sobre un modelo GPAI (ej. GPT-4 o Llama), el creador del modelo base cumple las obligaciones de los Arts. 53–55, pero TU empresa define la "finalidad prevista" (Art. 3.12) del sistema final que pones en manos de usuarios o clientes.',
    keyDistinctions: [
      {
        scenarioVariant: 'A) Integras un LLM para productividad, soporte al cliente, marketing, código, análisis documental o cálculo comercial',
        riskTier: 'transparency',
        legalRule: 'Riesgo de Transparencia (Art. 50) + Riesgo Mínimo (Art. 95)',
        whatCompanyMustDo:
          'No eres proveedor de Alto Riesgo. Solo debes cumplir las obligaciones de transparencia del Art. 50 (informar que es un chatbot y marcar contenido sintético con metadatos legibles por máquina) y alfabetización (Art. 4).',
      },
      {
        scenarioVariant: 'B) Conectas una API de LLM (o le haces fine-tuning) y la comercializas bajo tu marca para un caso del Anexo III (ej. criba de CVs en RRHH, admisión educativa, triaje médico o scoring crediticio)',
        riskTier: 'high',
        legalRule: 'Transformación en Proveedor de Alto Riesgo (Art. 25.1.c y Art. 6.2)',
        whatCompanyMustDo:
          'Por el Art. 25.1.c, al modificar la finalidad de un sistema/modelo de propósito general para que pase a ser un sistema de Alto Riesgo del Anexo III, TU empresa se convierte legalmente en el Proveedor de Alto Riesgo (Art. 16). El proveedor del modelo GPAI original tiene obligación legal de cooperar contigo facilitándote la documentación técnica del Anexo XII (Art. 25.2 y Art. 53.1.b).',
      },
    ],
    citations: [
      cite(
        'art_25.1c',
        'paragraph',
        'art_25',
        'Art. 25.1.c · Conversión en Proveedor al cambiar la finalidad a Alto Riesgo',
        'c) si modifican la finalidad prevista de un sistema de IA, incluido un sistema de IA de uso general, que no haya sido clasificado como de alto riesgo y ya se haya introducido en el mercado o puesto en servicio, de tal manera que el sistema de IA en cuestión se convierta en un sistema de IA de alto riesgo con arreglo al artículo 6.',
        'art_25.p1'
      ),
      cite(
        'art_53.1b',
        'paragraph',
        'art_53',
        'Art. 53.1.b · Deber del proveedor GPAI de entregar documentación a integradores',
        'b) elaborarán, mantendrán actualizada y pondrán a disposición de los proveedores de sistemas de IA que tengan previsto integrar el modelo de IA de uso general en sus sistemas de IA la información y la documentación...',
        'art_53.p1'
      ),
    ],
  },
  {
    id: 'hr_workplace',
    title: '7. Recursos Humanos, Selección de Personal y Gestión de Empleados',
    subtitle:
      'Cualquier empresa (grande o pequeña) que utilice o desarrolle IA para publicar ofertas focalizadas, filtrar CVs, evaluar entrevistas, decidir ascensos o monitorizar rendimiento',
    icon: <Users className="w-5 h-5 text-rose-400" />,
    assignedRoles: 'Alto Riesgo (Anexo III.4) para Proveedor y Desplegador · Prohibición de emociones (Art. 5.1.f)',
    primaryRiskLevel: 'high',
    riskSummaryBadge: 'Siempre Alto Riesgo (Anexo III.4) · Emociones Prohibidas (Art. 5.1.f)',
    whereItFitsExplanation:
      'El ámbito laboral es uno de los más protegidos por el Reglamento. Incluso si una empresa solo usa un software externo de RRHH (Desplegador), tiene deberes estrictos de transparencia con los representantes de los trabajadores y de supervisión humana.',
    keyDistinctions: [
      {
        scenarioVariant: 'A) Criba de CVs, filtrado de candidatos, análisis de vídeo-entrevistas o asignación/evaluación de tareas y promociones',
        riskTier: 'high',
        legalRule: 'Alto Riesgo (Anexo III, punto 4.a y 4.b)',
        whatCompanyMustDo:
          'Si desarrollas la herramienta internamente eres Proveedor + Desplegador de Alto Riesgo. Si usas un SaaS externo eres Desplegador de Alto Riesgo (Art. 26): debes informar a los trabajadores y a sus representantes antes de ponerlo en marcha (Art. 26.7), asegurar supervisión humana real (Art. 26.2) y conservar logs.',
      },
      {
        scenarioVariant: 'B) Detectar emociones, fatiga emocional o estado de ánimo de los empleados por cámara, voz o biometría',
        riskTier: 'unacceptable',
        legalRule: 'Práctica Prohibida (Art. 5.1.f) desde el 2 de febrero de 2025',
        whatCompanyMustDo:
          'Prohibido en la UE inferir las emociones de una persona física en los lugares de trabajo y en los centros educativos, salvo que sea estrictamente por motivos médicos o de seguridad (ej. detectar que un conductor o piloto se queda dormido al volante).',
      },
    ],
    citations: [
      cite(
        'anx_III.4',
        'annex',
        'anx_III',
        'Anexo III.4 · Empleo, gestión de los trabajadores y acceso al autoempleo',
        'a) Sistemas de IA destinados a ser utilizados para la contratación o la selección de personas físicas, en particular para publicar anuncios de empleo específicos, analizar y filtrar las solicitudes de empleo y evaluar a los candidatos; b) Sistemas de IA destinados a ser utilizados para tomar decisiones que afecten a las condiciones de las relaciones laborales...'
      ),
      cite(
        'art_5.1f',
        'paragraph',
        'art_5',
        'Art. 5.1.f · Prohibición de reconocimiento de emociones en el trabajo',
        'f) la introducción en el mercado, la puesta en servicio para este fin específico o el uso de sistemas de IA para inferir las emociones de una persona física en los lugares de trabajo y en los centros educativos, excepto cuando el uso del sistema de IA esté destinado a ser instalado o introducido en el mercado por motivos médicos o de seguridad;',
        'art_5.p1'
      ),
      cite(
        'art_26.7',
        'paragraph',
        'art_26',
        'Art. 26.7 · Deber de informar a los trabajadores y sus representantes',
        'Antes de poner en servicio o utilizar un sistema de IA de alto riesgo en el lugar de trabajo, los desplegadores que sean empleadores informarán a los representantes de los trabajadores y a los trabajadores afectados de que estarán sujetos al uso del sistema de IA de alto riesgo.',
        'art_26.p7'
      ),
    ],
  },
];

type ModelOriginOption = 'in_house' | 'gpai_api' | 'third_party_saas';
type UseCaseDomainOption =
  | 'pricing_commercial'
  | 'bank_scoring'
  | 'bank_fraud'
  | 'insurance_life_health'
  | 'insurance_claims_cicos'
  | 'price_comparator'
  | 'sme_daily'
  | 'hr_selection';

export const RoleContextHomeView: React.FC<RoleContextHomeViewProps> = ({
  selectedRole,
  onSelectRole,
  onNavigateCitation,
  onNavigateTab,
  selectedRoles,
  onToggleRole,
  onSetRoles,
}) => {
  const [simOrigin, setSimOrigin] = useState<ModelOriginOption>('in_house');
  const [simDomain, setSimDomain] = useState<UseCaseDomainOption>('pricing_commercial');

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

  const activeRoleCards = useMemo(() => {
    return activeRoles
      .map((roleId) => ROLE_CONTEXT_CARDS.find((r) => r.id === roleId))
      .filter((card): card is RoleContextCard => Boolean(card));
  }, [activeRoles]);

  const allActiveCitations = useMemo(() => {
    const list: LegalCitation[] = [];
    activeRoleCards.forEach((c) => list.push(...c.citations));
    return list;
  }, [activeRoleCards]);

  const roleFilterOptions: FilterOption<EnterpriseRole>[] = [
    { id: 'provider', label: 'Proveedor (Art. 3.3)' },
    { id: 'deployer', label: 'Desplegador (Art. 3.4)' },
    { id: 'gpai_provider', label: 'Proveedor GPAI (Art. 53)' },
    { id: 'importer', label: 'Importador (Art. 23)' },
    { id: 'distributor', label: 'Distribuidor (Art. 24)' },
  ];

  const activeRoleCard = useMemo(
    () => ROLE_CONTEXT_CARDS.find((r) => r.id === activeRoles[0]) ?? ROLE_CONTEXT_CARDS[0],
    [activeRoles]
  );

  const simulationVerdict = useMemo(() => {
    const isHighRiskDomain =
      simDomain === 'bank_scoring' ||
      simDomain === 'insurance_life_health' ||
      simDomain === 'hr_selection';

    let legalRoleTitle = '';
    let roleExplanation = '';
    if (simOrigin === 'in_house') {
      legalRoleTitle = 'Rol Dual: PROVEEDOR (Art. 3.3) + DESPLEGADOR (Art. 3.4)';
      roleExplanation =
        'Al desarrollar o entrenar el modelo internamente y ponerlo en servicio bajo tu propio nombre o marca para explotarlo con clientes o internamente, el Art. 3.3 te define como Proveedor y el Art. 3.4 como Desplegador.';
    } else if (simOrigin === 'gpai_api') {
      if (isHighRiskDomain) {
        legalRoleTitle = 'PROVEEDOR DE ALTO RIESGO POR CAMBIO DE FINALIDAD (Art. 25.1.c) + DESPLEGADOR';
        roleExplanation =
          'Aunque uses un modelo GPAI de terceros (ej. OpenAI, Claude, Llama), al adaptarlo y ponerlo en servicio bajo tu marca para un caso de Alto Riesgo del Anexo III (scoring bancario o selección de RRHH), el Art. 25.1.c te convierte legalmente en Proveedor de Alto Riesgo.';
      } else {
        legalRoleTitle = 'INTEGRADOR / PROVEEDOR DE RIESGO MÍNIMO O TRANSPARENCIA (Arts. 50 y 95) + DESPLEGADOR';
        roleExplanation =
          'Integras un modelo GPAI para una finalidad que NO está en el Anexo III. No te conviertes en proveedor de alto riesgo; solo asumes deberes de transparencia (Art. 50) y alfabetización (Art. 4).';
      }
    } else {
      legalRoleTitle = 'DESPLEGADOR / USUARIO PROFESIONAL (Art. 3.4 y Art. 26)';
      roleExplanation =
        'Utilizas bajo tu autoridad un sistema de IA comercializado por un tercero sin modificarlo sustancialmente ni ponerle tu marca. El fabricante externo es el Proveedor; tú eres el Desplegador.';
    }

    const domainDetails: Record<
      UseCaseDomainOption,
      {
        riskLevel: RiskLevel;
        verdictTitle: string;
        obligationsSummary: string[];
        citations: LegalCitation[];
      }
    > = {
      pricing_commercial: {
        riskLevel: 'minimal',
        verdictTitle: 'Riesgo Mínimo (Art. 95) — Explotación libre sin Marcado CE (salvo Seguros de Vida/Salud)',
        obligationsSummary: [
          'Aunque seas Proveedor + Desplegador de tu propio calculador de precios, el Reglamento solo exige Marcado CE y evaluación de conformidad a los sistemas de Alto Riesgo (Art. 6).',
          'Tu única obligación vinculante es garantizar la alfabetización en IA del equipo (Art. 4) y no incurrir en manipulación subliminal o explotación de vulnerabilidades (Art. 5.1.a/b).',
          'Excepción: Si el calculador fija primas o evalúa riesgos en Seguros de Vida o Salud de personas físicas, pasa a ser Alto Riesgo (Anexo III.5.c).',
        ],
        citations: REAL_WORLD_SCENARIOS[0].citations,
      },
      bank_scoring: {
        riskLevel: 'high',
        verdictTitle: 'Alto Riesgo Regulado (Anexo III.5.b) — Solvencia y Calificación Crediticia de Personas Físicas',
        obligationsSummary: [
          simOrigin === 'third_party_saas'
            ? 'Como Desplegador bancario (Art. 26 y Art. 27): debes exigir marcado CE al proveedor, garantizar supervisión humana (Art. 26.2), conservar logs >= 6 meses (Art. 26.6), realizar la Evaluación de Impacto en Derechos Fundamentales (FPIA, Art. 27) y dar explicación clara al cliente (Art. 86).'
            : 'Como Proveedor + Desplegador bancario (Art. 16, Art. 26 y Art. 27): debes cumplir gestión de riesgos (Art. 9), gobernanza de datos sin sesgos (Art. 10), documentación técnica Anexo IV (Art. 11), supervisión humana (Art. 14), Evaluación de Impacto en Derechos Fundamentales (Art. 27) y derecho a explicación (Art. 86).',
        ],
        citations: REAL_WORLD_SCENARIOS[1].citations,
      },
      bank_fraud: {
        riskLevel: 'minimal',
        verdictTitle: 'Exento de Alto Riesgo (Anexo III.5.b in fine) — Detección de Fraude Financiero',
        obligationsSummary: [
          'El Anexo III, punto 5.b excluye expresamente de la categoría de Alto Riesgo "los sistemas de IA utilizados con el fin de detectar fraudes financieros".',
          'Por tanto, aunque el banco desarrolle y explote internamente su propio motor de IA antifraude, NO está sujeto a las obligaciones de Alto Riesgo ni a la FPIA del Art. 27.',
        ],
        citations: [REAL_WORLD_SCENARIOS[1].citations[0], REAL_WORLD_SCENARIOS[1].citations[1]],
      },
      insurance_life_health: {
        riskLevel: 'high',
        verdictTitle:
          'Alto Riesgo Asegurador (Anexo III.5.c) — Cálculo de Primas y Evaluación de Riesgos en Seguros de Vida y Salud',
        obligationsSummary: [
          simOrigin === 'third_party_saas'
            ? 'Como Aseguradora Desplegadora (Art. 26 y Art. 27): debes exigir marcado CE al proveedor, garantizar supervisión humana (Art. 26.2), realizar la Evaluación de Impacto en Derechos Fundamentales (FPIA, Art. 27) y garantizar el derecho a explicación del asegurado (Art. 86).'
            : 'Como Aseguradora Proveedora + Desplegadora de su propio modelo de tarificación en Vida o Salud (Art. 16, Art. 26 y Art. 27): debes cumplir gestión de riesgos (Art. 9), gobernanza de datos actuariales sin sesgos prohibidos (Art. 10), documentación técnica Anexo IV (Art. 11), supervisión humana (Art. 14), FPIA (Art. 27) y explicación individual (Art. 86), bajo supervisión sectorial (DGSFP / Solvencia II, Art. 74.6).',
        ],
        citations: REAL_WORLD_SCENARIOS[2].citations,
      },
      insurance_claims_cicos: {
        riskLevel: 'high',
        verdictTitle:
          'Doble Régimen: CICOS Material (Riesgo Mínimo Art. 95) vs. Modelos de Lesionados con Datos Médicos (Art. 2.7 y 10.5 EU AI Act + Art. 9 y 22 RGPD + Frontera Anexo I/III)',
        obligationsSummary: [
          '1) Modelos de Lesionados (informes médicos, secuelas Baremo, convenios CAS): al tratar DATOS DE SALUD (Art. 9 RGPD, exigible por el Art. 2.7 EU AI Act), NO puedes entrenar el modelo con historias clínicas sin anonimización robusta o base legal estricta; exige Evaluación de Impacto (EIPD Art. 35 RGPD) y validación humana obligatoria por perito médico/tramitador (prohibición de decisión automatizada con datos de salud, Art. 22.4 RGPD). Si además hace triaje/diagnóstico clínico entra en Alto Riesgo por Anexo I (Producto Sanitario) y si deniega coberturas de Salud entra en Alto Riesgo por Anexo III.5.c.',
          '2) CICOS puro (convenios CIDE/ASCIDE de daños materiales) y Primas de Autos/Hogar: liquidan daños materiales entre aseguradoras sin datos médicos -> Riesgo Mínimo (Art. 95). Es obligatorio aislar el pipeline de datos médicos de lesionados respecto del pipeline material de CICOS.',
          '3) Detección de fraude en siniestros: exenta de Alto Riesgo (Considerando 58), pero sujeta a minimización y seudonimización cuando analiza bajas o partes médicos.',
        ],
        citations: REAL_WORLD_SCENARIOS[2].citations,
      },
      price_comparator: {
        riskLevel: 'minimal',
        verdictTitle: 'Riesgo Mínimo (Art. 95) / Transparencia (Art. 50.1 si incluye Chatbot)',
        obligationsSummary: [
          'Comparar y ordenar precios de productos, energía, vuelos, hoteles o tarifas comerciales es Riesgo Mínimo (Art. 95).',
          'Si el comparador incluye un chatbot o asistente virtual, debes informar al usuario de que interactúa con una IA (Art. 50.1).',
          'Solo entraría en Alto Riesgo (Anexo III.5.b/c) si el propio comparador ejecutase un modelo de scoring de solvencia crediticia personal o tarificación de seguro de vida/salud.',
        ],
        citations: REAL_WORLD_SCENARIOS[4].citations,
      },
      sme_daily: {
        riskLevel: 'transparency',
        verdictTitle: 'Riesgo Mínimo / Transparencia (Art. 4 y Art. 50) con Protección PYME (Art. 62 y Art. 99.6)',
        obligationsSummary: [
          'Cumplir el deber de alfabetización en IA de los empleados que usan las herramientas (Art. 4).',
          'Informar si hay chatbots de cara al cliente (Art. 50.1) y etiquetar contenido sintético/deepfakes (Art. 50.4).',
          'Beneficio legal PYME: acceso prioritario y gratuito a Sandboxes (Art. 62) y límite reducido de sanciones (Art. 99.6: se aplica el importe o % que sea INFERIOR).',
        ],
        citations: REAL_WORLD_SCENARIOS[3].citations,
      },
      hr_selection: {
        riskLevel: 'high',
        verdictTitle: 'Alto Riesgo Laboral (Anexo III.4.a/b) — Selección de Personal y Evaluación de Trabajadores',
        obligationsSummary: [
          simOrigin === 'third_party_saas'
            ? 'Como Desplegador empleador (Art. 26): debes verificar que el software tiene marcado CE, garantizar supervisión humana efectiva (Art. 26.2), informar previamente a los trabajadores y a sus representantes (Art. 26.7) y responder a solicitudes de explicación (Art. 86).'
            : 'Como Proveedor + Desplegador de un sistema propio de criba de CVs o evaluación de plantilla: asumes todas las obligaciones técnicas de Proveedor de Alto Riesgo (Arts. 9–15, Anexo IV, marcado CE) además de informar a los representantes de los trabajadores (Art. 26.7).',
          'Recuerda: usar IA para inferir emociones de los empleados en el puesto de trabajo está PROHIBIDO (Art. 5.1.f).',
        ],
        citations: REAL_WORLD_SCENARIOS[6].citations,
      },
    };

    return {
      legalRoleTitle,
      roleExplanation,
      ...domainDetails[simDomain],
    };
  }, [simOrigin, simDomain]);

  return (
    <div className="p-3.5 sm:p-5 md:p-6 pb-20 lg:pb-8 max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in duration-200">
      {/* 1. HERO: EL CONTEXTO DEL REGLAMENTO EN LENGUAJE CLARO */}
      <header className="p-4 sm:p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-indigo-950/30 shadow-xl space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              PÁGINA INICIAL · GUÍA DE CONTEXTO, ROLES Y CASOS REALES
            </span>
            <span className="font-mono text-xs text-slate-400">
              Reglamento (UE) 2024/1689 · DOUE-L-2024-81079
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigateTab('law_reader')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Abrir Lector Interactivo (113 Arts.)</span>
            </button>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            ¿Cómo funciona el EU AI Act y dónde entra exactamente cada empresa?
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            La Ley de Inteligencia Artificial europea <strong>no regula la tecnología de IA en abstracto</strong> (un algoritmo de Machine Learning o una red neuronal no son ilegales ni de alto riesgo por sí mismos). El Reglamento cruza siempre <strong>dos ejes</strong>: <strong>1) ¿Qué ROL desempeñas en la cadena de valor?</strong> (Art. 3) y <strong>2) ¿Para qué CASO DE USO concreto se utiliza el sistema?</strong> (Arts. 5, 6, 50 y 95).
          </p>
        </div>

        {/* Key Golden Rule Banner for In-House Developers */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs leading-relaxed">
              <strong className="text-amber-300 font-semibold block text-sm">
                La regla de oro para empresas que desarrollan sus propios modelos para explotarlos (Art. 3.3 + Art. 3.4):
              </strong>
              <p className="text-slate-200">
                Si tu empresa entrena o programa su propio modelo de IA y lo pone en producción bajo su nombre o marca (por ejemplo, un <strong>calculador de precios para clientes</strong>, un <strong>modelo propio de un banco</strong> o un <strong>comparador inteligente</strong>), la ley te considera simultáneamente <strong>PROVEEDOR</strong> (por ponerlo en servicio bajo tu nombre, Art. 3.3) y <strong>DESPLEGADOR</strong> (por operarlo bajo tu autoridad, Art. 3.4). Pero <strong>solo tendrás obligaciones pesadas de Proveedor si ese caso de uso entra en Alto Riesgo (Anexo III)</strong>.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex flex-wrap gap-1.5">
            <CitationBadge
              citation={ROLE_CONTEXT_CARDS[0].citations[0]}
              onSelect={onNavigateCitation}
              size="xs"
            />
            <CitationBadge
              citation={ROLE_CONTEXT_CARDS[1].citations[0]}
              onSelect={onNavigateCitation}
              size="xs"
            />
          </div>
        </div>
      </header>

      {/* 2. SIMULADOR RÁPIDO: ¿DÓNDE ENTRA MI EMPRESA? */}
      <SectionCard
        title="Simulador Rápido: ¿Dónde entra mi empresa y qué me exige la ley?"
        subtitle="Combina cómo obtienes el modelo de IA con el caso de uso real para ver al instante tu rol legal exacto y tus obligaciones"
        icon={<Scale className="w-5 h-5 text-indigo-400" />}
        badge={<RiskBadge level={simulationVerdict.riskLevel} size="sm" />}
        citations={simulationVerdict.citations}
        onSelectCitation={onNavigateCitation}
      >
        <div className="space-y-5 pt-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Step 1: Origin */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
                Paso 1 · ¿De dónde sale el modelo de IA?
              </span>
              <div className="space-y-2">
                {[
                  {
                    id: 'in_house',
                    label: '1. Desarrollamos o entrenamos nuestro propio modelo in-house para explotarlo',
                    desc: 'Ej: Equipo propio de Data Science / IA que crea un algoritmo bajo nuestra marca',
                  },
                  {
                    id: 'gpai_api',
                    label: '2. Conectamos una API de un modelo GPAI (OpenAI, Claude, Llama) o le hacemos Fine-Tuning',
                    desc: 'Ej: Construimos una solución propia encima de un modelo fundacional existente',
                  },
                  {
                    id: 'third_party_saas',
                    label: '3. Usamos o compramos un software / herramienta de IA ya hecha por un proveedor externo',
                    desc: 'Ej: Usamos ChatGPT, Copilot o un SaaS comercial llave en mano en nuestra empresa',
                  },
                ].map((opt) => {
                  const active = simOrigin === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSimOrigin(opt.id as ModelOriginOption)}
                      className={`w-full text-left p-3 rounded-lg border transition-all text-xs ${
                        active
                          ? 'border-indigo-500 bg-indigo-950/40 text-white ring-1 ring-indigo-500/40'
                          : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-semibold">{opt.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Business Use Case */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
                Paso 2 · ¿En qué escenario empresarial lo explotas?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  {
                    id: 'pricing_commercial',
                    label: 'Calculador de Precios / Presupuestos para clientes',
                    tag: 'Comercio / SaaS / B2B',
                  },
                  {
                    id: 'bank_scoring',
                    label: 'Banco / Fintech: Modelo de Credit Scoring o Solvencia',
                    tag: 'Anexo III.5.b',
                  },
                  {
                    id: 'bank_fraud',
                    label: 'Banco / Pagos: Modelo de Detección de Fraude',
                    tag: 'Exento Anexo III.5.b',
                  },
                  {
                    id: 'insurance_life_health',
                    label: 'Aseguradora: Cálculo de Primas en Seguros de Vida o Salud',
                    tag: 'Alto Riesgo · Anexo III.5.c',
                  },
                  {
                    id: 'insurance_claims_cicos',
                    label: 'Aseguradora: Primas Autos/Hogar, Coste Lesionados y CICOS',
                    tag: 'Riesgo Mínimo · Art. 95 / 6.3',
                  },
                  {
                    id: 'price_comparator',
                    label: 'Comparador de Precios / Recomendador / Marketplace',
                    tag: 'Consumo / Web',
                  },
                  {
                    id: 'sme_daily',
                    label: 'PYME usando IA en el día a día (textos, soporte, ofimática)',
                    tag: 'Art. 4 y Art. 50',
                  },
                  {
                    id: 'hr_selection',
                    label: 'Selección de Personal (criba de CVs) o Evaluación RRHH',
                    tag: 'Anexo III.4',
                  },
                ].map((dom) => {
                  const active = simDomain === dom.id;
                  return (
                    <button
                      key={dom.id}
                      type="button"
                      onClick={() => setSimDomain(dom.id as UseCaseDomainOption)}
                      className={`text-left p-2.5 rounded-lg border transition-all text-xs flex flex-col justify-between ${
                        active
                          ? 'border-indigo-500 bg-indigo-950/40 text-white ring-1 ring-indigo-500/40'
                          : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-semibold leading-snug">{dom.label}</span>
                      <span className="font-mono text-[10px] text-indigo-400 mt-1.5 block">
                        {dom.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Verdict Box */}
          <div className="p-4 rounded-xl border border-indigo-500/40 bg-slate-950/90 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 block">
                  Dictamen Jurídico según el Reglamento (UE) 2024/1689:
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {simulationVerdict.legalRoleTitle}
                </h4>
              </div>
              <RiskBadge level={simulationVerdict.riskLevel} size="md" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {simulationVerdict.roleExplanation}
            </p>

            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="text-xs font-semibold text-amber-300">
                Clasificación del Caso de Uso: {simulationVerdict.verdictTitle}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {simulationVerdict.obligationsSummary.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 3. LOS ROLES DE LA CADENA DE VALOR EN DETALLE */}
      <SectionCard
        title="Los Roles del EU AI Act: ¿Cuándo se desempeñan y qué implican?"
        subtitle="Selecciona uno o varios roles para ver cuándo tu empresa entra en cada categoría, qué obligaciones conlleva y cómo combinarlas"
        icon={<Building2 className="w-5 h-5 text-indigo-400" />}
        citations={allActiveCitations}
        onSelectCitation={onNavigateCitation}
      >
        <div className="space-y-4 pt-1">
          <MultiRoleSelector
            selectedRoles={activeRoles}
            onToggleRole={handleToggleRole}
            onSetRoles={onSetRoles}
          />

          {activeRoles.length > 1 && (
            <div className="p-3.5 rounded-xl border border-indigo-500/30 bg-indigo-950/20 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-200 leading-relaxed">
                <strong className="text-indigo-300 font-semibold block mb-0.5">
                  Vista Combinada Multi-Rol ({activeRoles.length} roles simultáneos activos):
                </strong>
                Tu empresa desempeña varios roles a la vez en la cadena de valor europea. Las obligaciones son <strong>acumulativas</strong>: debes verificar tanto las cargas técnicas de diseño/marca (si eres Proveedor) como los deberes de uso, supervisión humana y registro de eventos (como Desplegador).
              </div>
            </div>
          )}

          <div className={activeRoleCards.length > 1 ? 'grid grid-cols-1 xl:grid-cols-2 gap-4' : 'space-y-4'}>
            {activeRoleCards.map((card) => (
              <div
                key={card.id}
                className="p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div>
                      <span className="font-mono text-xs text-indigo-400 font-semibold">
                        {card.legalBasis}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">{card.title}</h3>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {card.badgeText}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                        ¿Cuándo desempeñas este rol?
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {card.whenYouAreThis.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        ¿Qué implica en la práctica?
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {card.whatItImplies.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/30 text-xs text-slate-200 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-indigo-300 font-semibold">Matiz clave de negocio: </strong>
                      {card.inHouseWarning}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {card.citations.map((c, cIdx) => (
                    <CitationBadge key={cIdx} citation={c} onSelect={onNavigateCitation} size="xs" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* 4. CASOS REALES DE EMPRESA: CALCULADOR DE PRECIOS, BANCOS, ASEGURADORAS, PYMES, COMPARADORES... */}
      <SectionCard
        title="Casos Reales de Empresa: Modelos Propios, Bancos, Aseguradoras (Primas, Lesionados y CICOS), PYMES y Comparadores"
        subtitle="Despliega cada caso práctico (acordeón accesible e indexable mediante búsqueda Cmd+F) para ver sus matices legales y artículos exactos"
        icon={<Layers className="w-5 h-5 text-indigo-400" />}
      >
        <div className="space-y-3 pt-1">
          {REAL_WORLD_SCENARIOS.map((scenario, idx) => (
            <details
              key={scenario.id}
              name="casos-reales-empresa"
              open={idx === 0}
              className="group rounded-xl border border-slate-800 bg-slate-950/60 open:border-indigo-500/50 open:bg-slate-900/90 transition-all"
            >
              <summary className="cursor-pointer list-none p-4 flex flex-wrap items-center justify-between gap-3 select-none">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/70 shrink-0 mt-0.5">
                    {scenario.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-white group-open:text-indigo-300 transition-colors">
                      {scenario.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{scenario.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden md:inline font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {scenario.riskSummaryBadge}
                  </span>
                  <RiskBadge level={scenario.primaryRiskLevel} size="xs" />
                </div>
              </summary>

              <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 space-y-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/90 space-y-1">
                  <span className="font-mono text-[11px] text-indigo-400 font-semibold block">
                    Encaje Jurídico ({scenario.assignedRoles}):
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {scenario.whereItFitsExplanation}
                  </p>
                </div>

                <div
                  className={`grid grid-cols-1 ${
                    scenario.keyDistinctions.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
                  } gap-3`}
                >
                  {scenario.keyDistinctions.map((dist, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-lg border border-slate-800 bg-slate-950/60 flex flex-col justify-between space-y-2.5"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <RiskBadge level={dist.riskTier} size="xs" />
                        </div>
                        <h5 className="font-bold text-slate-100 leading-snug">
                          {dist.scenarioVariant}
                        </h5>
                        <span className="font-mono text-[11px] text-indigo-400 block">
                          {dist.legalRule}
                        </span>
                        <p className="text-slate-300 leading-relaxed pt-1">
                          {dist.whatCompanyMustDo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase mr-1">
                      Referencias Oficiales (Lector interno + EUR-Lex directo):
                    </span>
                    {scenario.citations.map((c, cIdx) => (
                      <CitationBadge
                        key={cIdx}
                        citation={c}
                        onSelect={onNavigateCitation}
                        size="xs"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </SectionCard>

      {/* 5. QUICK NAVIGATION FOOTER TO OTHER MODULES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          type="button"
          onClick={() => onNavigateTab('guide')}
          className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/50 hover:bg-slate-900 transition-all text-left flex items-center justify-between group"
        >
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase text-indigo-400 block">
              Siguiente paso recomendado
            </span>
            <h4 className="text-sm font-bold text-white group-hover:text-indigo-300">
              Pirámide de Riesgos e Infografías →
            </h4>
            <p className="text-xs text-slate-400">
              Clasificador diagnóstico paso a paso y multas del Art. 99.
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab('law_reader')}
          className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/50 hover:bg-slate-900 transition-all text-left flex items-center justify-between group"
        >
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase text-emerald-400 block">
              Texto oficial con "Vuelta de Tuerca"
            </span>
            <h4 className="text-sm font-bold text-white group-hover:text-emerald-300">
              Lector Interactivo (113 Artículos) →
            </h4>
            <p className="text-xs text-slate-400">
              Haz clic en cualquier párrafo para leer qué implica para tu empresa.
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab('timeline')}
          className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/50 hover:bg-slate-900 transition-all text-left flex items-center justify-between group"
        >
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase text-amber-400 block">
              Calendario 2024–2030
            </span>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-300">
              Línea de Tiempo y Deadlines →
            </h4>
            <p className="text-xs text-slate-400">
              Checklist de cómo debe estar la empresa en cada fecha clave.
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0" />
        </button>
      </div>
    </div>
  );
};
