// Curated legal & enterprise intelligence, timeline milestones, infographics, and 48-question quiz bank
// Every item includes verified LegalCitation objects referencing Reglamento (UE) 2024/1689 (DOUE-L-2024-81079).

export const OFFICIAL_BOE_ID = 'DOUE-L-2024-81079';
export const OFFICIAL_ELI_URI =
  'https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:02024R1689-20260727';
export const OFFICIAL_OJ_HTML_URI =
  'https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202401689';

export function buildOfficialAnchoredUri({ targetType, articleId, paragraphId, boeId = OFFICIAL_BOE_ID }) {
  if (
    targetType === 'boe_update' ||
    (boeId !== OFFICIAL_BOE_ID &&
      !String(articleId || '').startsWith('art_') &&
      !String(articleId || '').startsWith('anx_') &&
      !String(articleId || '').startsWith('rct_'))
  ) {
    return `https://www.boe.es/buscar/doc.php?id=${encodeURIComponent(boeId)}`;
  }
  const raw = String(articleId || paragraphId || '');
  const base = raw.split('.')[0].trim();
  if (base.startsWith('anx_') || base.startsWith('art_') || base.startsWith('tit_')) {
    return `${OFFICIAL_ELI_URI}#${base}`;
  }
  if (base.startsWith('rct_')) {
    return `${OFFICIAL_OJ_HTML_URI}#${base}`;
  }
  return OFFICIAL_ELI_URI;
}

export function makeCitation({
  id,
  targetType = 'article',
  articleId,
  paragraphId,
  displayLabel,
  exactQuote,
  boeId = OFFICIAL_BOE_ID,
  eliUri,
}) {
  const resolvedEliUri =
    eliUri && eliUri.includes('#')
      ? eliUri
      : buildOfficialAnchoredUri({ targetType, articleId, paragraphId, boeId });
  return {
    citationId: `EU-2024-1689:${id}`,
    boeId,
    eliUri: resolvedEliUri,
    targetType,
    articleId,
    ...(paragraphId ? { paragraphId } : {}),
    displayLabel,
    exactQuote,
  };
}

export const PENALTY_TIERS = {
  prohibited: {
    maxFineEuros: '35.000.000 €',
    maxTurnoverPct: '7 % del volumen de negocios mundial total',
    citation: makeCitation({
      id: 'art_99.p3',
      targetType: 'paragraph',
      articleId: 'art_99',
      paragraphId: 'art_99.p3',
      displayLabel: 'Art. 99.3 · Reglamento (UE) 2024/1689',
      exactQuote:
        'El incumplimiento de la prohibición de las prácticas de IA a que se refiere el artículo 5 estará sujeto a multas administrativas de hasta 35 000 000 EUR o, si el infractor es una empresa, de hasta el 7 % de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior, si esta cuantía fuera superior.',
    }),
  },
  obligations: {
    maxFineEuros: '15.000.000 €',
    maxTurnoverPct: '3 % del volumen de negocios mundial total',
    citation: makeCitation({
      id: 'art_99.p4',
      targetType: 'paragraph',
      articleId: 'art_99',
      paragraphId: 'art_99.p4',
      displayLabel: 'Art. 99.4 · Reglamento (UE) 2024/1689',
      exactQuote:
        'El incumplimiento de cualquier disposición relativa a los operadores o a los organismos notificados, distinta de las contempladas en el artículo 5, estará sujeto a multas administrativas de hasta 15 000 000 EUR o, si el infractor es una empresa, de hasta el 3 % de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior.',
    }),
  },
  misinformation: {
    maxFineEuros: '7.500.000 €',
    maxTurnoverPct: '1 % del volumen de negocios mundial total',
    citation: makeCitation({
      id: 'art_99.p5',
      targetType: 'paragraph',
      articleId: 'art_99',
      paragraphId: 'art_99.p5',
      displayLabel: 'Art. 99.5 · Reglamento (UE) 2024/1689',
      exactQuote:
        'La presentación de información inexacta, incompleta o engañosa a los organismos notificados o a las autoridades nacionales competentes en respuesta a una solicitud estará sujeta a multas administrativas de hasta 7 500 000 EUR o, si el infractor es una empresa, de hasta el 1 % de su volumen de negocios mundial total.',
    }),
  },
  gpai: {
    maxFineEuros: '15.000.000 €',
    maxTurnoverPct: '3 % del volumen de negocios mundial total',
    citation: makeCitation({
      id: 'art_101.p1',
      targetType: 'paragraph',
      articleId: 'art_101',
      paragraphId: 'art_101.p1',
      displayLabel: 'Art. 101.1 · Reglamento (UE) 2024/1689',
      exactQuote:
        'La Comisión podrá imponer a los proveedores de modelos de IA de uso general multas que no superen el 3 % de su volumen de negocios mundial total en el ejercicio financiero anterior o 15 000 000 EUR, si esta cuantía fuera superior.',
    }),
  },
};

export const TITLE_DEFINITIONS = [
  {
    id: 'tit_I',
    roman: 'I',
    name: 'TÍTULO I (CAPÍTULO I) — DISPOSICIONES GENERALES',
    summary:
      'Define el objeto del Reglamento (mercado único e IA centrada en el ser humano), su ámbito de aplicación extraterritorial, las 68 definiciones legales vinculantes y la obligación transversal de alfabetización en IA para todas las empresas.',
    minArt: 1,
    maxArt: 4,
  },
  {
    id: 'tit_II',
    roman: 'II',
    name: 'TÍTULO II (CAPÍTULO II) — PRÁCTICAS DE IA PROHIBIDAS',
    summary:
      'Prohíbe de forma taxativa los sistemas de IA de riesgo inaceptable: manipulación subliminal o engañosa, explotación de vulnerabilidades, puntuación ciudadana (social scoring), predicción policial individual sin hechos objetivos, raspado masivo facial, inferencia emocional laboral/educativa, categorización biométrica sensible e identificación biométrica remota en tiempo real salvo excepciones estrictas.',
    minArt: 5,
    maxArt: 5,
  },
  {
    id: 'tit_III',
    roman: 'III',
    name: 'TÍTULO III (CAPÍTULO III) — SISTEMAS DE IA DE ALTO RIESGO',
    summary:
      'Núcleo regulatorio para sistemas de alto riesgo (Anexo I productos regulados y Anexo III casos de uso críticos): establece requisitos técnicos (gestión de riesgos, gobernanza de datos, documentación técnica, registros automáticos, transparencia, supervisión humana y ciberseguridad), obligaciones por rol (proveedor, importador, distribuidor, desplegador y FRIA) y evaluación de conformidad con marcado CE.',
    minArt: 6,
    maxArt: 49,
  },
  {
    id: 'tit_IV',
    roman: 'IV',
    name: 'TÍTULO IV (CAPÍTULO IV) — OBLIGACIONES DE TRANSPARENCIA PARA DETERMINADOS SISTEMAS DE IA',
    summary:
      'Regula las obligaciones de transparencia frente al usuario final: aviso de interacción con chatbots/asistentes de IA, marcado legible por máquina (watermarking/C2PA) de contenidos sintéticos de audio/imagen/vídeo/texto, aviso en sistemas de reconocimiento de emociones/categorización biométrica y etiquetado visible de ultrafalsificaciones (deepfakes).',
    minArt: 50,
    maxArt: 50,
  },
  {
    id: 'tit_V',
    roman: 'V',
    name: 'TÍTULO V (CAPÍTULO V) — MODELOS DE IA DE USO GENERAL (GPAI)',
    summary:
      'Regula los modelos fundacionales y de uso general (GPAI): distingue entre modelos GPAI estándar (documentación Anexo XI/XII, respeto de derechos de autor y resumen público de datos de entrenamiento) y modelos GPAI con riesgo sistémico (>10^25 FLOPs, sujetos a evaluación con adversarios / red-teaming, mitigación sistémica, notificación de incidentes y ciberseguridad reforzada).',
    minArt: 51,
    maxArt: 56,
  },
  {
    id: 'tit_VI',
    roman: 'VI',
    name: 'TÍTULO VI (CAPÍTULO VI) — MEDIDAS DE APOYO A LA INNOVACIÓN',
    summary:
      'Obliga a cada Estado miembro a establecer al menos un espacio controlado de pruebas (sandbox regulatorio de IA) antes del 2 de agosto de 2026, regula las pruebas de sistemas de alto riesgo en condiciones reales fuera de laboratorio y prevé medidas de alivio y acceso prioritario para pymes y empresas emergentes (startups).',
    minArt: 57,
    maxArt: 63,
  },
  {
    id: 'tit_VII',
    roman: 'VII',
    name: 'TÍTULO VII (CAPÍTULO VII) — GOBERNANZA',
    summary:
      'Configura la arquitectura institucional europea y nacional: la Oficina de IA de la Comisión Europea, el Comité Europeo de Inteligencia Artificial, el Foro Consultivo, el Grupo Científico de Expertos Independientes y las autoridades nacionales competentes de supervisión de mercado (en España, la AESIA).',
    minArt: 64,
    maxArt: 70,
  },
  {
    id: 'tit_VIII',
    roman: 'VIII',
    name: 'TÍTULO VIII (CAPÍTULO VIII) — BASE DE DATOS DE LA UE PARA SISTEMAS DE IA DE ALTO RIESGO',
    summary:
      'Establece el registro público europeo gestionado por la Comisión donde proveedores y desplegadores públicos deben inscribir los sistemas de IA de alto riesgo del Anexo III antes de su introducción en el mercado o puesta en servicio.',
    minArt: 71,
    maxArt: 71,
  },
  {
    id: 'tit_IX',
    roman: 'IX',
    name: 'TÍTULO IX (CAPÍTULO IX) — VIGILANCIA POSCOMERCIALIZACIÓN, INCIDENTES Y VIGILANCIA DEL MERCADO',
    summary:
      'Regula el seguimiento continuo tras la puesta en producción, la notificación obligatoria de incidentes graves (plazos de 2, 10 o 15 días), las facultades de inspección y acceso a código fuente de las autoridades de vigilancia del mercado, las vías de recurso de los ciudadanos (derecho a explicación de decisiones) y la supervisión de GPAI por la Comisión.',
    minArt: 72,
    maxArt: 94,
  },
  {
    id: 'tit_X',
    roman: 'X',
    name: 'TÍTULO X (CAPÍTULO X) — CÓDIGOS DE CONDUCTA Y DIRECTRICES',
    summary:
      'Fomenta la adopción voluntaria de códigos de conducta para sistemas de IA de riesgo mínimo (sostenibilidad ambiental, accesibilidad, diversidad de equipos) y encomienda a la Comisión la publicación de directrices prácticas sobre aplicación del Reglamento (Art. 5, Art. 6, Art. 50, modificación sustancial).',
    minArt: 95,
    maxArt: 96,
  },
  {
    id: 'tit_XI',
    roman: 'XI',
    name: 'TÍTULO XI (CAPÍTULO XI) — DELEGACIÓN DE PODERES Y PROCEDIMIENTO DE COMITÉ',
    summary:
      'Regula el ejercicio de poderes delegados por la Comisión Europea para actualizar anexos técnicos y criterios de clasificación conforme evolucione el estado de la técnica, bajo control del Parlamento Europeo y del Consejo.',
    minArt: 97,
    maxArt: 98,
  },
  {
    id: 'tit_XII',
    roman: 'XII',
    name: 'TÍTULO XII (CAPÍTULO XII) — SANCIONES',
    summary:
      'Establece el régimen sancionador de multas administrativas: hasta 35 M€ o 7 % de facturación global por prácticas prohibidas (Art. 5), hasta 15 M€ o 3 % por vulneración de obligaciones de operadores y proveedores GPAI (Arts. 99.4 y 101), hasta 7,5 M€ o 1 % por información engañosa, y topes proporcionales para pymes y startups.',
    minArt: 99,
    maxArt: 101,
  },
  {
    id: 'tit_XIII',
    roman: 'XIII',
    name: 'TÍTULO XIII (CAPÍTULO XIII) — DISPOSICIONES FINALES',
    summary:
      'Modifica reglamentos sectoriales de armonización de la UE, regula los regímenes transitorios para sistemas ya comercializados e infraestructuras de gran escala (Anexo X), establece las evaluaciones periódicas de la Comisión y fija el calendario escalonado de entrada en vigor y aplicación (Art. 113).',
    minArt: 102,
    maxArt: 113,
  },
];

export const BOE_UPDATES_DATA = [
  {
    boeId: 'DOUE-L-2026-81147',
    date: '2026-07-08',
    relationship: 'SE MODIFICA Y AÑADE PRECEPTOS',
    title:
      'Reglamento (UE) 2026/1744, de 8 de julio de 2026: modifica determinados preceptos y añade los artículos 4 bis, 60 bis, 75 bis, 75 ter, 75 quater, 75 quinquies y el Anexo XIV al Reglamento (UE) 2024/1689.',
    enterpriseImplication:
      'Amplía las facilidades de pruebas transfronterizas en condiciones reales (Art. 60 bis), refuerza la coordinación de vigilancia del mercado entre autoridades nacionales y la Oficina de IA (Arts. 75 bis a 75 quinquies) y detalla directrices de alfabetización sectorial (Art. 4 bis y Anexo XIV). Las empresas que operan en varios Estados miembros pueden acogerse a protocolos unificados de supervisión.',
    citation: makeCitation({
      id: 'boe_DOUE-L-2026-81147',
      targetType: 'boe_update',
      articleId: 'art_60',
      boeId: 'DOUE-L-2026-81147',
      displayLabel: 'DOUE-L-2026-81147 · Reglamento (UE) 2026/1744',
      exactQuote:
        'SE MODIFICA determinados preceptos y SE AÑADE los arts. 4bis, 60bis, 75bis, 75ter, 75quarter y 75quinquies y el anexo XIV, por Reglamento 2026/1744, de 8 de julio.',
    }),
  },
  {
    boeId: 'DOUE-L-2026-81109',
    date: '2026-07-20',
    relationship: 'SE DICTA DE CONFORMIDAD (ART. 92)',
    title:
      'Reglamento (UE) 2026/1755, de 20 de julio de 2026: dictado de conformidad con el artículo 92 sobre evaluaciones de modelos de IA de uso general (GPAI).',
    enterpriseImplication:
      'Establece el procedimiento vinculante mediante el cual la Oficina de IA y el Grupo Científico evalúan modelos GPAI (incluyendo acceso a pesos, APIs y benchmarks de seguridad). Los proveedores de modelos fundacionales deben habilitar entornos seguros de auditoría técnica cuando sean requeridos bajo el Art. 92.',
    citation: makeCitation({
      id: 'boe_DOUE-L-2026-81109',
      targetType: 'boe_update',
      articleId: 'art_92',
      boeId: 'DOUE-L-2026-81109',
      displayLabel: 'DOUE-L-2026-81109 · Reglamento (UE) 2026/1755 (Art. 92)',
      exactQuote:
        'SE DICTA DE CONFORMIDAD con el art. 92, sobre evaluaciones de modelos de IA de uso general: Reglamento 2026/1755, de 20 de julio.',
    }),
  },
  {
    boeId: 'DOUE-L-2026-80650',
    date: '2026-05-04',
    relationship: 'CORRECCIÓN DE ERRORES',
    title:
      'Corrección de errores del Reglamento (UE) 2024/1689 publicada en el DOUE L 90343 de 4 de mayo de 2026.',
    enterpriseImplication:
      'Depura referencias cruzadas internas y precisión terminológica en versión española respecto a procedimientos de evaluación de conformidad y registros técnicos, garantizando seguridad jurídica antes de la plena aplicación del 2 de agosto de 2026.',
    citation: makeCitation({
      id: 'boe_DOUE-L-2026-80650',
      targetType: 'boe_update',
      articleId: 'art_43',
      boeId: 'DOUE-L-2026-80650',
      displayLabel: 'DOUE-L-2026-80650 · Corrección de errores (04/05/2026)',
      exactQuote: 'CORRECCIÓN de errores en DOUE L 90343 de 4 de mayo de 2026.',
    }),
  },
  {
    boeId: 'DOUE-L-2025-81474',
    date: '2025-10-09',
    relationship: 'CORRECCIÓN DE ERRORES',
    title:
      'Corrección de errores del Reglamento (UE) 2024/1689 publicada en el DOUE L 90802 de 9 de octubre de 2025.',
    enterpriseImplication:
      'Alinea términos técnicos entre versiones lingüísticas de la UE en relación con las definiciones de operadores y documentación técnica de los Anexos IV y XI.',
    citation: makeCitation({
      id: 'boe_DOUE-L-2025-81474',
      targetType: 'boe_update',
      articleId: 'art_11',
      boeId: 'DOUE-L-2025-81474',
      displayLabel: 'DOUE-L-2025-81474 · Corrección de errores (09/10/2025)',
      exactQuote: 'CORRECCIÓN de errores en DOUE L 90802, de 9 de octubre de 2025.',
    }),
  },
  {
    boeId: 'BOE-A-2023-18911',
    date: '2023-09-02',
    relationship: 'MARCO NACIONAL ESPAÑA — AUTORIDAD SUPERVISORA',
    title:
      'Real Decreto 729/2023, de 22 de agosto, por el que se aprueba el Estatuto de la Agencia Española de Supervisión de Inteligencia Artificial (AESIA).',
    enterpriseImplication:
      'Designa a la AESIA (con sede en A Coruña) como la autoridad nacional competente de vigilancia del mercado en España a efectos del artículo 70 del Reglamento (UE) 2024/1689. Es el órgano ante el cual las empresas españolas notifican incidentes graves (Art. 73) y afrontan inspecciones o expedientes sancionadores.',
    citation: makeCitation({
      id: 'boe_BOE-A-2023-18911',
      targetType: 'boe_update',
      articleId: 'art_70',
      boeId: 'BOE-A-2023-18911',
      eliUri: 'https://www.boe.es/eli/es/rd/2023/08/22/729',
      displayLabel: 'BOE-A-2023-18911 · Real Decreto 729/2023 (Estatuto AESIA)',
      exactQuote:
        'Creación y aprobación del Estatuto de la Agencia Española de Supervisión de Inteligencia Artificial (AESIA), adscrita al Ministerio para la Transformación Digital y de la Función Pública, como autoridad nacional de supervisión de IA.',
    }),
  },
  {
    boeId: 'BOE-A-2023-22984',
    date: '2023-11-09',
    relationship: 'MARCO NACIONAL ESPAÑA — SANDBOX REGULATORIO',
    title:
      'Real Decreto 817/2023, de 8 de noviembre, que establece un entorno controlado de pruebas para el ensayo del cumplimiento de la propuesta de Reglamento de Inteligencia Artificial.',
    enterpriseImplication:
      'Pionero en Europa: articula en España el espacio controlado de pruebas (sandbox regulatorio previsto en el Art. 57 del Reglamento UE 2024/1689), permitiendo a proveedores y desplegadores validar sistemas de alto riesgo junto a la AESIA sin imposición de multas administrativas cuando actúen de buena fe conforme al plan de pruebas (Art. 57.12).',
    citation: makeCitation({
      id: 'boe_BOE-A-2023-22984',
      targetType: 'boe_update',
      articleId: 'art_57',
      boeId: 'BOE-A-2023-22984',
      eliUri: 'https://www.boe.es/eli/es/rd/2023/11/08/817',
      displayLabel: 'BOE-A-2023-22984 · Real Decreto 817/2023 (Sandbox IA España)',
      exactQuote:
        'Establece el primer entorno controlado de pruebas (sandbox regulatorio de inteligencia artificial) en España para ensayar la aplicación práctica de los requisitos de sistemas de IA de alto riesgo.',
    }),
  },
];

export const TIMELINE_MILESTONES = [
  {
    id: 'ms_2024_08_entry',
    dateIso: '2024-08-01',
    dateLabel: '1 de agosto de 2024',
    monthsFromEntry: 0,
    title: 'Entrada en vigor del Reglamento de IA',
    subtitle: 'Publicación en el DOUE (12 de julio de 2024) + 20 días vacatio legis (Art. 113)',
    statusInOct2026: 'enforced',
    riskLevel: 'governance',
    whatApplies: [
      'Entrada en vigor formal del Reglamento (UE) 2024/1689 en los 27 Estados miembros.',
      'Inicio del cómputo de los plazos transitorios de 6, 12, 24 y 36 meses para las distintas categorías de obligaciones.',
      'Activación de los trabajos preparatorios de la Oficina Europea de IA y códigos de buenas prácticas.',
    ],
    howCompanyShouldBe:
      'La organización debe haber constituido un Comité transversal de Gobernanza de IA (Legal, Seguridad, Datos, Ingeniería y RR.HH.), completado el inventario inicial ("Shadow AI Discovery") de todos los sistemas y modelos de IA propios o de terceros, y asignado el rol jurídico de la empresa (Proveedor vs. Desplegador) en cada caso de uso.',
    readinessChecklist: [
      {
        id: 'chk_2024_1',
        category: 'Gobernanza',
        requirement: 'Inventario corporativo centralizado de sistemas y modelos de IA',
        expectedStateDescription:
          'Registro vivo de todos los sistemas de IA en desarrollo, producción o contratados a terceros (SaaS/APIs), especificando su finalidad prevista conforme al Art. 3.12.',
        targetRoles: ['provider', 'deployer', 'importer', 'distributor', 'gpai_provider'],
        citation: makeCitation({
          id: 'art_3.p1',
          targetType: 'paragraph',
          articleId: 'art_3',
          paragraphId: 'art_3.p1',
          displayLabel: 'Art. 3.1 y 3.12 · Reglamento (UE) 2024/1689',
          exactQuote:
            '«sistema de IA»: un sistema basado en una máquina que está diseñado para funcionar con distintos niveles de autonomía y que puede mostrar capacidad de adaptación tras el despliegue, y que, para objetivos explícitos o implícitos, infiere de la información de entrada que recibe la manera de generar resultados de salida, como predicciones, contenidos, recomendaciones o decisiones.',
        }),
      },
      {
        id: 'chk_2024_2',
        category: 'Legal',
        requirement: 'Determinación del rol en la cadena de valor (Proveedor vs. Desplegador)',
        expectedStateDescription:
          'Matriz jurídica por cada sistema determinando si la empresa actúa como proveedor (Art. 3.3), responsable del despliegue (Art. 3.4) o si incurre en conversión a proveedor de alto riesgo por cambio de marca o modificación sustancial (Art. 25).',
        targetRoles: ['provider', 'deployer', 'distributor', 'importer'],
        citation: makeCitation({
          id: 'art_25.p1',
          targetType: 'paragraph',
          articleId: 'art_25',
          paragraphId: 'art_25.p1',
          displayLabel: 'Art. 25.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Cualquier distribuidor, importador, responsable del despliegue u otro tercero será considerado proveedor de un sistema de IA de alto riesgo a efectos del presente Reglamento y estará sujeto a las obligaciones del proveedor en virtud del artículo 16 en cualquiera de las circunstancias siguientes: a) si pone su nombre o marca comercial en un sistema de IA de alto riesgo ya introducido en el mercado o puesto en servicio; b) si realiza una modificación sustancial.',
        }),
      },
      {
        id: 'chk_2024_3',
        category: 'Legal',
        requirement: 'Verificación de alcance extraterritorial (Art. 2.1)',
        expectedStateDescription:
          'Evaluación de todos los sistemas cuyos resultados de salida (outputs) se utilicen dentro de la Unión Europea, incluso si el proveedor o servidor reside fuera del EEE.',
        targetRoles: ['provider', 'deployer', 'gpai_provider'],
        citation: makeCitation({
          id: 'art_2.p1',
          targetType: 'paragraph',
          articleId: 'art_2',
          paragraphId: 'art_2.p1',
          displayLabel: 'Art. 2.1(c) · Reglamento (UE) 2024/1689',
          exactQuote:
            'El presente Reglamento se aplica a: c) los proveedores y responsables del despliegue de sistemas de IA que tengan su lugar de establecimiento o estén situados en un tercer país, cuando los resultados de salida generados por el sistema de IA se utilicen en la Unión.',
        }),
      },
      {
        id: 'chk_2024_4',
        category: 'Gobernanza',
        requirement: 'Política interna de uso aceptable de IA y control de Shadow AI',
        expectedStateDescription:
          'Normativa corporativa aprobada que regule la contratación y el uso de herramientas de IA por empleados, evitando despliegues no autorizados.',
        targetRoles: ['deployer', 'provider'],
        citation: makeCitation({
          id: 'art_1.p1',
          targetType: 'paragraph',
          articleId: 'art_1',
          paragraphId: 'art_1.p1',
          displayLabel: 'Art. 1.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'El objetivo del presente Reglamento es mejorar el funcionamiento del mercado interior y promover la adopción de una inteligencia artificial (IA) centrada en el ser humano y fiable, garantizando al mismo tiempo un elevado nivel de protección de la salud, la seguridad y los derechos fundamentales.',
        }),
      },
      {
        id: 'chk_2024_5',
        category: 'Técnico',
        requirement: 'Hoja de ruta de adecuación escalonada 2025–2027',
        expectedStateDescription:
          'Plan presupuestado alineado con el artículo 113 priorizando el apagado de prácticas prohibidas antes de febrero de 2025 y la adecuación de alto riesgo antes de agosto de 2026.',
        targetRoles: ['provider', 'deployer', 'gpai_provider'],
        citation: makeCitation({
          id: 'art_113.p1',
          targetType: 'paragraph',
          articleId: 'art_113',
          paragraphId: 'art_113.p1',
          displayLabel: 'Art. 113 · Reglamento (UE) 2024/1689',
          exactQuote:
            'El presente Reglamento entrará en vigor a los veinte días de su publicación en el Diario Oficial de la Unión Europea. Será aplicable a partir del 2 de agosto de 2026.',
        }),
      },
    ],
    affectedArticles: ['art_1', 'art_2', 'art_3', 'art_113'],
    citations: [
      makeCitation({
        id: 'art_113',
        targetType: 'article',
        articleId: 'art_113',
        displayLabel: 'Art. 113 · Entrada en vigor y aplicación',
        exactQuote:
          'El presente Reglamento entrará en vigor a los veinte días de su publicación en el Diario Oficial de la Unión Europea.',
      }),
    ],
  },
  {
    id: 'ms_2025_02_prohibitions',
    dateIso: '2025-02-02',
    dateLabel: '2 de febrero de 2025',
    monthsFromEntry: 6,
    title: 'Prohibiciones (Art. 5) y Alfabetización en IA (Art. 4)',
    subtitle: 'Aplicación obligatoria de los Capítulos I y II (6 meses desde la entrada en vigor)',
    statusInOct2026: 'enforced',
    riskLevel: 'unacceptable',
    whatApplies: [
      'Prohibición absoluta de las 8 prácticas de IA de riesgo inaceptable del Artículo 5 (manipulación subliminal, explotación de vulnerabilidades, social scoring, predicción policial individual, scraping facial masivo, inferencia de emociones en el trabajo y educación, categorización biométrica sensible e identificación biométrica remota en tiempo real salvo excepciones judiciales).',
      'Obligación de alfabetización en materia de IA (Art. 4) exigible a TODOS los proveedores y responsables del despliegue, sin importar el nivel de riesgo del sistema.',
      'Aplicación de las definiciones vinculantes y ámbito territorial del Capítulo I (Arts. 1 a 4).',
    ],
    howCompanyShouldBe:
      'Ningún sistema en producción o piloto puede incurrir en las conductas del Art. 5 (especialmente vigilancia emocional de empleados en videollamadas o call centers, o scoring social de clientes). Además, la empresa debe contar con un programa acreditable y continuo de formación y alfabetización en IA adaptado por perfiles técnicos, de negocio y legales.',
    readinessChecklist: [
      {
        id: 'chk_2025_02_1',
        category: 'Legal',
        requirement: 'Auditoría de descarte de prácticas prohibidas del Artículo 5',
        expectedStateDescription:
          'Dictamen vinculante de cumplimiento certificando la ausencia de sistemas con técnicas subliminales/manipulativas (Art. 5.1.a), explotación de vulnerabilidades socioeconómicas o por edad (Art. 5.1.b) o social scoring (Art. 5.1.c).',
        targetRoles: ['provider', 'deployer', 'importer', 'distributor'],
        citation: makeCitation({
          id: 'art_5.p1',
          targetType: 'paragraph',
          articleId: 'art_5',
          paragraphId: 'art_5.p1',
          displayLabel: 'Art. 5.1(a)-(c) · Reglamento (UE) 2024/1689',
          exactQuote:
            'Quedan prohibidas las siguientes prácticas de IA: a) la introducción en el mercado, la puesta en servicio o la utilización de un sistema de IA que se sirva de técnicas subliminales que trasciendan la conciencia de una persona o de técnicas deliberadamente manipuladoras o engañosas.',
        }),
      },
      {
        id: 'chk_2025_02_2',
        category: 'Gobernanza',
        requirement: 'Desactivación de inferencia de emociones en el entorno laboral y educativo',
        expectedStateDescription:
          'Eliminación de módulos de análisis de sentimiento acústico, microexpresiones faciales o inferencia emocional sobre empleados o candidatos, salvo que tengan finalidad estrictamente médica o de seguridad física (Art. 5.1.f).',
        targetRoles: ['deployer', 'provider'],
        citation: makeCitation({
          id: 'art_5.p7',
          targetType: 'paragraph',
          articleId: 'art_5',
          paragraphId: 'art_5.p7',
          displayLabel: 'Art. 5.1(f) · Reglamento (UE) 2024/1689',
          exactQuote:
            'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de sistemas de IA para inferir las emociones de una persona física en los lugares de trabajo y en los centros educativos, excepto cuando el uso del sistema de IA esté destinado a ser instalado o introducido en el mercado por motivos médicos o de seguridad;',
        }),
      },
      {
        id: 'chk_2025_02_3',
        category: 'Datos',
        requirement: 'Prohibición de bases de datos faciales por raspado no selectivo (scraping)',
        expectedStateDescription:
          'Verificación de que ningún modelo biométrico propio o de proveedor haya sido entrenado mediante extracción masiva no selectiva de imágenes faciales de internet o CCTV (Art. 5.1.e).',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_5.p6',
          targetType: 'paragraph',
          articleId: 'art_5',
          paragraphId: 'art_5.p6',
          displayLabel: 'Art. 5.1(e) · Reglamento (UE) 2024/1689',
          exactQuote:
            'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de sistemas de IA que creen o amplíen bases de datos de reconocimiento facial mediante la extracción no selectiva de imágenes faciales de internet o de circuitos cerrados de televisión;',
        }),
      },
      {
        id: 'chk_2025_02_4',
        category: 'Formación',
        requirement: 'Programa corporativo de Alfabetización en IA (Art. 4)',
        expectedStateDescription:
          'Itinerarios formativos obligatorios y evaluables para empleados y contratistas que operan o desarrollan sistemas de IA, cubriendo capacidades técnicas, sesgos, alucinaciones, riesgos y supervisión humana.',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_4.p1',
          targetType: 'paragraph',
          articleId: 'art_4',
          paragraphId: 'art_4.p1',
          displayLabel: 'Art. 4 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores y responsables del despliegue de sistemas de IA adoptarán medidas para garantizar, en la mayor medida posible, un nivel suficiente de alfabetización en materia de IA de su personal y de las demás personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA.',
        }),
      },
      {
        id: 'chk_2025_02_5',
        category: 'Datos',
        requirement: 'Bloqueo de categorización biométrica por atributos protegidos (Art. 5.1.g)',
        expectedStateDescription:
          'Garantía técnica de que ningún sistema deduce raza, opiniones políticas, afiliación sindical, convicciones religiosas u orientación sexual a partir de datos biométricos.',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_5.p8',
          targetType: 'paragraph',
          articleId: 'art_5',
          paragraphId: 'art_5.p8',
          displayLabel: 'Art. 5.1(g) · Reglamento (UE) 2024/1689',
          exactQuote:
            'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de sistemas de categorización biométrica que clasifiquen individualmente a las personas físicas sobre la base de sus datos biométricos para deducir o inferir su raza, sus opiniones políticas, su afiliación sindical, sus convicciones religiosas o filosóficas, su vida sexual o su orientación sexual;',
        }),
      },
    ],
    affectedArticles: ['art_1', 'art_2', 'art_3', 'art_4', 'art_5', 'art_113'],
    citations: [
      makeCitation({
        id: 'art_113.p4',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p4',
        displayLabel: 'Art. 113(a) · Reglamento (UE) 2024/1689',
        exactQuote: 'los capítulos I y II serán aplicables a partir del 2 de febrero de 2025;',
      }),
      makeCitation({
        id: 'art_5',
        targetType: 'article',
        articleId: 'art_5',
        displayLabel: 'Art. 5 · Prácticas de IA prohibidas',
        exactQuote: 'Quedan prohibidas las siguientes prácticas de IA...',
      }),
    ],
  },
  {
    id: 'ms_2025_08_gpai_gov',
    dateIso: '2025-08-02',
    dateLabel: '2 de agosto de 2025',
    monthsFromEntry: 12,
    title: 'Modelos GPAI (Cap. V), Gobernanza (Cap. VII) y Régimen Sancionador (Cap. XII)',
    subtitle: 'Aplicación a los 12 meses conforme al Artículo 113, letra b)',
    statusInOct2026: 'enforced',
    riskLevel: 'gpai',
    whatApplies: [
      'Obligaciones de los proveedores de modelos de IA de uso general (GPAI) del Capítulo V (Arts. 51 a 56): documentación técnica (Anexo XI), información para integradores posteriores (Anexo XII), política de respeto de derechos de autor (Directiva 2019/790 Art. 4.3 opt-out de TDM) y resumen público de datos de entrenamiento.',
      'Obligaciones reforzadas para modelos GPAI con riesgo sistémico (>10^25 FLOPs, Art. 51 y 55): evaluación del modelo con pruebas con adversarios (red-teaming), mitigación de riesgos sistémicos, notificación de incidentes graves a la Oficina de IA y ciberseguridad del modelo y sus pesos.',
      'Designación de autoridades nacionales competentes (Cap. VII, en España la AESIA), organismos notificados (Cap. III Sec. 4), confidencialidad (Art. 78) y entrada en aplicación del marco de multas administrativas (Cap. XII, salvo Art. 101).',
    ],
    howCompanyShouldBe:
      'Si la empresa desarrolla o ajusta (fine-tuning relevante) modelos GPAI, debe publicar el resumen de entrenamiento, respetar reservas de derechos de autor (robots.txt / TDM opt-out) y entregar la ficha técnica del Anexo XII a sus clientes B2B. Si la empresa integra modelos GPAI de terceros (OpenAI, Anthropic, Google, Meta, Mistral), debe exigir contractualmente el paquete documental del Art. 53.1.b (Anexo XII) para poder construir encima sus propios sistemas.',
    readinessChecklist: [
      {
        id: 'chk_2025_08_1',
        category: 'Técnico',
        requirement: 'Documentación técnica GPAI (Anexos XI y XII) y transferencia al integrador',
        expectedStateDescription:
          'Los proveedores de modelos GPAI mantienen actualizada la documentación del Anexo XI para la Oficina de IA y entregan el paquete del Anexo XII a las empresas que integran el modelo en sus aplicaciones.',
        targetRoles: ['gpai_provider', 'provider'],
        citation: makeCitation({
          id: 'art_53.p1',
          targetType: 'paragraph',
          articleId: 'art_53',
          paragraphId: 'art_53.p1',
          displayLabel: 'Art. 53.1(a)-(b) · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores de modelos de IA de uso general: a) elaborarán y mantendrán actualizada la documentación técnica del modelo, incluidos su proceso de entrenamiento y prueba y los resultados de su evaluación, que contendrá, como mínimo, la información indicada en el anexo XI; b) elaborarán, mantendrán actualizada y pondrán a disposición información y documentación para los proveedores de sistemas de IA que tengan previsto integrar el modelo de IA de uso general en sus sistemas de IA.',
        }),
      },
      {
        id: 'chk_2025_08_2',
        category: 'Legal',
        requirement: 'Política de cumplimiento de Derechos de Autor y reserva TDM (Art. 53.1.c)',
        expectedStateDescription:
          'Política implementada para identificar y respetar mediante tecnologías punteras las reservas de derechos de minería de textos y datos (TDM opt-out) conforme al Art. 4.3 de la Directiva (UE) 2019/790.',
        targetRoles: ['gpai_provider'],
        citation: makeCitation({
          id: 'art_53.p4',
          targetType: 'paragraph',
          articleId: 'art_53',
          paragraphId: 'art_53.p4',
          displayLabel: 'Art. 53.1(c) · Reglamento (UE) 2024/1689',
          exactQuote:
            'establecerán una política para cumplir el Derecho de la Unión en materia de derechos de autor y derechos afines, y en particular para detectar y respetar, también mediante tecnologías punteras, una reserva de derechos expresada de conformidad con el artículo 4, apartado 3, de la Directiva (UE) 2019/790;',
        }),
      },
      {
        id: 'chk_2025_08_3',
        category: 'Datos',
        requirement: 'Resumen público suficientemente detallado de datos de entrenamiento (Art. 53.1.d)',
        expectedStateDescription:
          'Publicación conforme a la plantilla de la Oficina Europea de IA del resumen de los conjuntos de datos utilizados en el preentrenamiento del modelo GPAI.',
        targetRoles: ['gpai_provider'],
        citation: makeCitation({
          id: 'art_53.p5',
          targetType: 'paragraph',
          articleId: 'art_53',
          paragraphId: 'art_53.p5',
          displayLabel: 'Art. 53.1(d) · Reglamento (UE) 2024/1689',
          exactQuote:
            'elaborarán y pondrán a disposición del público un resumen suficientemente detallado sobre el contenido utilizado para el entrenamiento del modelo de IA de uso general, con arreglo a una plantilla facilitada por la Oficina de IA.',
        }),
      },
      {
        id: 'chk_2025_08_4',
        category: 'Técnico',
        requirement: 'Red-teaming y seguridad de pesos para modelos con riesgo sistémico (>10^25 FLOPs)',
        expectedStateDescription:
          'Notificación a la Comisión en plazo de 2 semanas desde que se alcance el umbral de 10^25 FLOPs (Art. 52.1) y ejecución de pruebas con adversarios, mitigación sistémica y ciberseguridad conforme al Art. 55.',
        targetRoles: ['gpai_provider'],
        citation: makeCitation({
          id: 'art_55.p1',
          targetType: 'paragraph',
          articleId: 'art_55',
          paragraphId: 'art_55.p1',
          displayLabel: 'Art. 55.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Además de las obligaciones enumeradas en los artículos 53 y 54, los proveedores de modelos de IA de uso general con riesgo sistémico: a) realizarán una evaluación de los modelos con arreglo a protocolos y herramientas normalizados que reflejen el estado de la técnica, en particular llevando a cabo y documentando pruebas con adversarios para detectar y mitigar los riesgos sistémicos;',
        }),
      },
      {
        id: 'chk_2025_08_5',
        category: 'Gobernanza',
        requirement: 'Protocolo de interlocución con la AESIA y exposición sancionadora (Art. 99)',
        expectedStateDescription:
          'Canal jurídico de respuesta ante requerimientos de autoridades nacionales competentes (Art. 70) y control interno para evitar multas de hasta 35 M€ / 7 %.',
        targetRoles: ['provider', 'deployer', 'gpai_provider', 'importer', 'distributor'],
        citation: makeCitation({
          id: 'art_99.p1',
          targetType: 'paragraph',
          articleId: 'art_99',
          paragraphId: 'art_99.p1',
          displayLabel: 'Art. 99.1 y 113(b) · Reglamento (UE) 2024/1689',
          exactQuote:
            'el capítulo III, sección 4, el capítulo V, el capítulo VII y el capítulo XII y el artículo 78 serán aplicables a partir del 2 de agosto de 2025, a excepción del artículo 101;',
        }),
      },
    ],
    affectedArticles: [
      'art_28', 'art_29', 'art_30', 'art_31', 'art_32', 'art_33', 'art_34', 'art_35', 'art_36', 'art_37', 'art_38', 'art_39',
      'art_51', 'art_52', 'art_53', 'art_54', 'art_55', 'art_56',
      'art_64', 'art_65', 'art_66', 'art_67', 'art_68', 'art_69', 'art_70',
      'art_78', 'art_99', 'art_100', 'art_113',
    ],
    citations: [
      makeCitation({
        id: 'art_113.p5',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p5',
        displayLabel: 'Art. 113(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'el capítulo III, sección 4, el capítulo V, el capítulo VII y el capítulo XII y el artículo 78 serán aplicables a partir del 2 de agosto de 2025, a excepción del artículo 101;',
      }),
    ],
  },
  {
    id: 'ms_2026_08_general',
    dateIso: '2026-08-02',
    dateLabel: '2 de agosto de 2026',
    monthsFromEntry: 24,
    title: 'Aplicación General: Alto Riesgo (Anexo III), Transparencia (Art. 50) y Sandboxes (Art. 57)',
    subtitle: 'Plena aplicabilidad general del Reglamento a los 24 meses (Art. 113 párrafo segundo)',
    statusInOct2026: 'recently_enforced',
    riskLevel: 'high',
    whatApplies: [
      'Todas las obligaciones para sistemas de IA de Alto Riesgo del Anexo III (biometría, infraestructuras críticas, educación, selección de personal y RR.HH., scoring crediticio y seguros, servicios esenciales, fuerzas del orden, migración y justicia): gestión de riesgos (Art. 9), gobernanza de datos (Art. 10), documentación técnica Anexo IV (Art. 11), logs automáticos (Art. 12), transparencia e instrucciones de uso (Art. 13), supervisión humana (Art. 14), precisión/solidez/ciberseguridad (Art. 15).',
      'Obligaciones de proveedores (Art. 16), sistema de gestión de calidad (Art. 17), evaluación de conformidad (Art. 43), declaración UE de conformidad (Art. 47), marcado CE (Art. 48) e inscripción en la base de datos de la UE (Art. 49 y 71).',
      'Obligaciones de los responsables del despliegue (Art. 26: supervisión humana cualificada, conservación de logs al menos 6 meses, información a trabajadores) y Evaluación de Impacto relativa a los Derechos Fundamentales (FRIA, Art. 27).',
      'Obligaciones de transparencia específica del Artículo 50 (chatbots, marcado legible por máquina de contenidos sintéticos, deepfakes), Sandboxes regulatorios operativos en cada Estado miembro (Art. 57) y multas a proveedores GPAI (Art. 101).',
    ],
    howCompanyShouldBe:
      'En octubre de 2026, este hito ya es plenamente exigible: todo sistema de alto riesgo del Anexo III comercializado o puesto en servicio debe contar con expediente técnico del Anexo IV, evaluación de conformidad superada, declaración UE firmada, marcado CE visible y registro en la base de datos de la UE. Las empresas usuarias (desplegadores) de IA en RR.HH., banca o seguros deben tener completada su FRIA (si aplica Art. 27), informados a los representantes de los trabajadores y conservados los logs por un mínimo de 6 meses.',
    readinessChecklist: [
      {
        id: 'chk_2026_08_1',
        category: 'Técnico',
        requirement: 'Expediente técnico Anexo IV, Marcado CE y Registro UE para sistemas Anexo III',
        expectedStateDescription:
          'Sistemas de alto riesgo (RR.HH., crédito, educación, biometría, infraestructuras) con sistema de gestión de riesgos (Art. 9), documentación del Anexo IV (Art. 11), declaración UE de conformidad (Art. 47) e inscripción en el registro del Art. 71.',
        targetRoles: ['provider'],
        citation: makeCitation({
          id: 'art_16.p1',
          targetType: 'paragraph',
          articleId: 'art_16',
          paragraphId: 'art_16.p1',
          displayLabel: 'Art. 16 y Art. 43 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores de sistemas de IA de alto riesgo: a) velarán por que sus sistemas de IA de alto riesgo cumplan los requisitos establecidos en la sección 2; f) velarán por que el sistema de IA de alto riesgo se someta al procedimiento de evaluación de la conformidad pertinente antes de su introducción en el mercado o puesta en servicio.',
        }),
      },
      {
        id: 'chk_2026_08_2',
        category: 'Gobernanza',
        requirement: 'Controles del Desplegador (Art. 26): Supervisión humana, logs >= 6 meses y aviso laboral',
        expectedStateDescription:
          'Designación de personas físicas con competencia y autoridad para supervisar el sistema (Art. 26.2), retención automática de archivos de registro durante al menos 6 meses (Art. 26.6) e información previa a los trabajadores y sus representantes antes de usar IA de alto riesgo en el trabajo (Art. 26.7).',
        targetRoles: ['deployer'],
        citation: makeCitation({
          id: 'art_26.p6',
          targetType: 'paragraph',
          articleId: 'art_26',
          paragraphId: 'art_26.p6',
          displayLabel: 'Art. 26.2, 26.6 y 26.7 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los responsables del despliegue de sistemas de IA de alto riesgo conservarán los archivos de registro generados automáticamente por dicho sistema de IA de alto riesgo en la medida en que dichos archivos estén bajo su control, durante un período adecuado a la finalidad prevista del sistema de IA de alto riesgo, de al menos seis meses.',
        }),
      },
      {
        id: 'chk_2026_08_3',
        category: 'Legal',
        requirement: 'Evaluación de Impacto en los Derechos Fundamentales (FRIA - Art. 27)',
        expectedStateDescription:
          'Realizada y notificada a la autoridad de vigilancia del mercado (AESIA) antes del primer uso por entidades públicas, prestadores de servicios públicos y entidades que evalúan solvencia crediticia o seguros de vida y salud (Anexo III puntos 5.b y 5.c).',
        targetRoles: ['deployer'],
        citation: makeCitation({
          id: 'art_27.p1',
          targetType: 'paragraph',
          articleId: 'art_27',
          paragraphId: 'art_27.p1',
          displayLabel: 'Art. 27.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Antes de poner en funcionamiento un sistema de IA de alto riesgo a que se refiere el artículo 6, apartado 2, con excepción de los sistemas de IA de alto riesgo destinados a ser utilizados en el ámbito que figura en el anexo III, punto 2, los responsables del despliegue que sean organismos de Derecho público, o entidades privadas que presten servicios públicos, y los responsables del despliegue de sistemas de IA de alto riesgo a que se refiere el anexo III, punto 5, letras b) y c), realizarán una evaluación del impacto en los derechos fundamentales.',
        }),
      },
      {
        id: 'chk_2026_08_4',
        category: 'Técnico',
        requirement: 'Marcado de contenido sintético y transparencia de chatbots / deepfakes (Art. 50)',
        expectedStateDescription:
          'Aviso claro al usuario de que interactúa con una IA (Art. 50.1), marcado en formato legible por máquina (metadatos criptográficos / marcas de agua) de audio, imagen, vídeo o texto sintético por el proveedor (Art. 50.2) y aviso visible en deepfakes o textos de interés público por el desplegador (Art. 50.4).',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_50.p2',
          targetType: 'paragraph',
          articleId: 'art_50',
          paragraphId: 'art_50.p2',
          displayLabel: 'Art. 50.1, 50.2 y 50.4 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores de sistemas de IA, incluidos los sistemas de IA de uso general, que generen contenido sintético de audio, imagen, vídeo o texto velarán por que los resultados de salida del sistema de IA estén marcados en un formato legible por máquina y sean detectables como generados o manipulados artificialmente.',
        }),
      },
      {
        id: 'chk_2026_08_5',
        category: 'Gobernanza',
        requirement: 'Vigilancia poscomercialización y notificación de incidentes graves (2/10/15 días)',
        expectedStateDescription:
          'Plan de vigilancia poscomercialización activo (Art. 72) y procedimiento de respuesta a incidentes graves capaz de notificar a la autoridad nacional en <=15 días (<=2 días para infracción generalizada o incidente crítico e <=10 días en caso de fallecimiento, Art. 73).',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_73.p2',
          targetType: 'paragraph',
          articleId: 'art_73',
          paragraphId: 'art_73.p2',
          displayLabel: 'Art. 73.2–73.4 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Dicha notificación se efectuará inmediatamente después de que el proveedor haya establecido un vínculo causal entre el sistema de IA y el incidente grave o la posibilidad razonable de que exista dicho vínculo, y, en cualquier caso, a más tardar quince días después de que el proveedor o, en su caso, el responsable del despliegue, tenga conocimiento del incidente grave.',
        }),
      },
      {
        id: 'chk_2026_08_6',
        category: 'Legal',
        requirement: 'Atención al derecho a una explicación de las personas afectadas (Art. 86)',
        expectedStateDescription:
          'Procedimiento de atención al ciudadano/cliente para proporcionar explicaciones claras y significativas sobre el papel del sistema de IA de alto riesgo en la toma de decisiones y los principales elementos de la decisión adoptada.',
        targetRoles: ['deployer'],
        citation: makeCitation({
          id: 'art_86.p1',
          targetType: 'paragraph',
          articleId: 'art_86',
          paragraphId: 'art_86.p1',
          displayLabel: 'Art. 86.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Toda persona afectada que esté sujeta a una decisión que adopte el responsable del despliegue sobre la base de los resultados de salida de un sistema de IA de alto riesgo enumerado en el anexo III... tendrá derecho a obtener del responsable del despliegue explicaciones claras y significativas sobre el papel que el sistema de IA ha tenido en el proceso de toma de decisiones.',
        }),
      },
    ],
    affectedArticles: [
      'art_6', 'art_7', 'art_8', 'art_9', 'art_10', 'art_11', 'art_12', 'art_13', 'art_14', 'art_15',
      'art_16', 'art_17', 'art_18', 'art_19', 'art_20', 'art_21', 'art_22', 'art_23', 'art_24', 'art_25', 'art_26', 'art_27',
      'art_40', 'art_41', 'art_42', 'art_43', 'art_44', 'art_45', 'art_46', 'art_47', 'art_48', 'art_49',
      'art_50', 'art_57', 'art_58', 'art_59', 'art_60', 'art_61', 'art_62', 'art_63',
      'art_71', 'art_72', 'art_73', 'art_74', 'art_75', 'art_76', 'art_77', 'art_79', 'art_80', 'art_81', 'art_82', 'art_83', 'art_84', 'art_85', 'art_86', 'art_87', 'art_88', 'art_89', 'art_90', 'art_91', 'art_92', 'art_93', 'art_94',
      'art_95', 'art_96', 'art_97', 'art_98', 'art_101', 'art_102', 'art_103', 'art_104', 'art_105', 'art_106', 'art_107', 'art_108', 'art_109', 'art_110', 'art_112', 'art_113',
    ],
    citations: [
      makeCitation({
        id: 'art_113.p2',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p2',
        displayLabel: 'Art. 113 párrafo 2 · Reglamento (UE) 2024/1689',
        exactQuote: 'Será aplicable a partir del 2 de agosto de 2026.',
      }),
    ],
  },
  {
    id: 'ms_2027_08_annex1',
    dateIso: '2027-08-02',
    dateLabel: '2 de agosto de 2027',
    monthsFromEntry: 36,
    title: 'Alto Riesgo en Productos Regulados del Anexo I (Art. 6.1)',
    subtitle: 'Aplicación a los 36 meses para sistemas de IA integrados en productos con legislación de armonización UE (Art. 113.c)',
    statusInOct2026: 'upcoming',
    riskLevel: 'high',
    whatApplies: [
      'Obligaciones de alto riesgo bajo el Artículo 6, apartado 1: sistemas de IA que sean componentes de seguridad de productos (o sean ellos mismos productos) regulados por la legislación de armonización de la Unión enumerada en el Anexo I y que requieran evaluación de la conformidad por terceros.',
      'Abarca sectores industriales regulados del Anexo I: productos sanitarios (Reglamento MDR 2017/745), diagnóstico in vitro (IVDR 2017/746), maquinaria (Reglamento 2023/1230), seguridad de los juguetes, ascensores, equipos radioeléctricos, equipos a presión, aviación civil, ferrocarriles y vehículos de motor.',
    ],
    howCompanyShouldBe:
      'Los fabricantes de dispositivos médicos, maquinaria industrial, automoción o aviación que incorporen IA como componente de seguridad deben integrar el expediente técnico del Reglamento de IA (Anexo IV) dentro de su procedimiento sectorial de evaluación de conformidad con su organismo notificado antes de agosto de 2027.',
    readinessChecklist: [
      {
        id: 'chk_2027_08_1',
        category: 'Técnico',
        requirement: 'Integración de requisitos de IA (Arts. 8–15) en el expediente técnico sectorial (MDR/IVDR/Maquinaria)',
        expectedStateDescription:
          'Documentación técnica unificada que combina los requisitos del Anexo IV del Reglamento de IA con la documentación exigida por el acto legislativo del Anexo I correspondiente (Art. 11.2).',
        targetRoles: ['provider'],
        citation: makeCitation({
          id: 'art_6.p1',
          targetType: 'paragraph',
          articleId: 'art_6',
          paragraphId: 'art_6.p1',
          displayLabel: 'Art. 6.1 y Anexo I · Reglamento (UE) 2024/1689',
          exactQuote:
            'Independientemente de si un sistema de IA se introduce en el mercado o se pone en servicio de forma independiente respecto de los productos a que se refieren las letras a) y b), dicho sistema de IA se considerará de alto riesgo cuando cumpla las dos condiciones siguientes: a) el sistema de IA está destinado a ser utilizado como componente de seguridad de un producto, o el sistema de IA es en sí mismo un producto, regulado por los actos legislativos de armonización de la Unión enumerados en el anexo I; b) el producto cuyo componente de seguridad con arreglo a la letra a) es el sistema de IA, o el propio sistema de IA como producto, debe someterse a una evaluación de la conformidad de terceros.',
        }),
      },
      {
        id: 'chk_2027_08_2',
        category: 'Legal',
        requirement: 'Coordinación con el Organismo Notificado sectorial (Art. 43.3)',
        expectedStateDescription:
          'Auditoría conjunta de evaluación de la conformidad con el organismo notificado acreditado bajo el acto legislativo del Anexo I.',
        targetRoles: ['provider'],
        citation: makeCitation({
          id: 'art_43.p3',
          targetType: 'paragraph',
          articleId: 'art_43',
          paragraphId: 'art_43.p3',
          displayLabel: 'Art. 43.3 · Reglamento (UE) 2024/1689',
          exactQuote:
            'En el caso de los sistemas de IA de alto riesgo a los que sean aplicables los actos legislativos de armonización de la Unión enumerados en el anexo I, sección A, el proveedor seguirá el procedimiento de evaluación de la conformidad pertinente según lo requerido en dichos actos legislativos.',
        }),
      },
      {
        id: 'chk_2027_08_3',
        category: 'Gobernanza',
        requirement: 'Control de modificaciones sustanciales de sistemas preexistentes (Art. 111.2)',
        expectedStateDescription:
          'Protocolo de control de cambios de ingeniería: los sistemas de alto riesgo introducidos antes del 2 de agosto de 2026 solo quedan sujetos si sufren "cambios significativos en su diseño" tras dicha fecha.',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_111.p2',
          targetType: 'paragraph',
          articleId: 'art_111',
          paragraphId: 'art_111.p2',
          displayLabel: 'Art. 111.2 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Sin perjuicio de la aplicación del artículo 5 a que se refiere el artículo 113, párrafo tercero, letra a), el presente Reglamento se aplicará a los operadores de sistemas de IA de alto riesgo, distintos de los sistemas a que se refiere el apartado 1 del presente artículo, que se hayan introducido en el mercado o puesto en servicio antes del 2 de agosto de 2026, únicamente si, a partir de esa fecha, dichos sistemas son objeto de cambios significativos en su diseño.',
        }),
      },
      {
        id: 'chk_2027_08_4',
        category: 'Legal',
        requirement: 'Adecuación de modelos GPAI comercializados antes del 2 de agosto de 2025 (Art. 111.3)',
        expectedStateDescription:
          'Los proveedores de modelos de IA de uso general introducidos en el mercado antes del 2 de agosto de 2025 habrán adoptado las medidas necesarias para cumplir el Capítulo V a más tardar el 2 de agosto de 2027.',
        targetRoles: ['gpai_provider'],
        citation: makeCitation({
          id: 'art_111.p3',
          targetType: 'paragraph',
          articleId: 'art_111',
          paragraphId: 'art_111.p3',
          displayLabel: 'Art. 111.3 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores de modelos de IA de uso general que se hayan introducido en el mercado antes del 2 de agosto de 2025 adoptarán las medidas necesarias para cumplir las obligaciones establecidas en el presente Reglamento a más tardar el 2 de agosto de 2027.',
        }),
      },
      {
        id: 'chk_2027_08_5',
        category: 'Técnico',
        requirement: 'Validación de ciberseguridad y tolerancia a fallos físicos (Art. 15)',
        expectedStateDescription:
          'Pruebas de redundancia técnica (fail-safe plans) e inmunidad frente a envenenamiento de datos o ataques adversarios en componentes de seguridad físicos.',
        targetRoles: ['provider', 'importer'],
        citation: makeCitation({
          id: 'art_15.p1',
          targetType: 'paragraph',
          articleId: 'art_15',
          paragraphId: 'art_15.p1',
          displayLabel: 'Art. 15.1 y 15.4 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los sistemas de IA de alto riesgo se diseñarán y desarrollarán de manera que alcancen un nivel adecuado de precisión, solidez y ciberseguridad, y funcionen de manera coherente en esos aspectos durante todo su ciclo de vida.',
        }),
      },
    ],
    affectedArticles: ['art_6', 'art_11', 'art_43', 'art_102', 'art_103', 'art_104', 'art_105', 'art_106', 'art_107', 'art_108', 'art_109', 'art_111', 'art_113'],
    citations: [
      makeCitation({
        id: 'art_113.p6',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p6',
        displayLabel: 'Art. 113(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'el artículo 6, apartado 1, y las obligaciones correspondientes del presente Reglamento serán aplicables a partir del 2 de agosto de 2027.',
      }),
    ],
  },
  {
    id: 'ms_2030_08_largescale',
    dateIso: '2030-08-02',
    dateLabel: '2 de agosto de 2030',
    monthsFromEntry: 72,
    title: 'Sistemas Informáticos de Gran Magnitud (Anexo X) y Administraciones Públicas (Art. 111)',
    subtitle: 'Plazo límite de adecuación de infraestructuras públicas e IT de gran escala (Art. 111.1 y 111.2)',
    statusInOct2026: 'upcoming',
    riskLevel: 'governance',
    whatApplies: [
      'Adecuación obligatoria antes del 31 de diciembre de 2030 de los sistemas de IA que sean componentes de los sistemas informáticos de gran magnitud del Anexo X (Espacio de Libertad, Seguridad y Justicia: SIS II, VIS, Eurodac, Sistema de Entradas y Salidas EES, ETIAS, ECRIS-TCN e interoperabilidad eu-LISA) puestos en servicio antes del 2 de agosto de 2027 (Art. 111.1).',
      'Plazo máximo hasta el 2 de agosto de 2030 para que los proveedores y responsables del despliegue de sistemas de IA de alto riesgo destinados a ser utilizados por autoridades públicas (e introducidos antes de agosto de 2026) adopten todas las medidas necesarias para cumplir el Reglamento (Art. 111.2 párrafo segundo).',
    ],
    howCompanyShouldBe:
      'Los contratistas tecnológicos, integradores de defensa/fronteras y adjudicatarios de contratos del sector público que mantengan sistemas legacy de alto riesgo desplegados antes de agosto de 2026 deben completar la migración y certificación plena antes de agosto/diciembre de 2030.',
    readinessChecklist: [
      {
        id: 'chk_2030_08_1',
        category: 'Técnico',
        requirement: 'Adecuación de sistemas legacy de alto riesgo utilizados por autoridades públicas',
        expectedStateDescription:
          'Todos los sistemas de alto riesgo desplegados en administraciones públicas antes del 2 de agosto de 2026 cumplen íntegramente los requisitos del Capítulo III antes del 2 de agosto de 2030, aun sin haber sufrido modificaciones de diseño (Art. 111.2).',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_111.p2b',
          targetType: 'paragraph',
          articleId: 'art_111',
          paragraphId: 'art_111.p2',
          displayLabel: 'Art. 111.2 párrafo 2 · Reglamento (UE) 2024/1689',
          exactQuote:
            'No obstante, los proveedores y responsables del despliegue de sistemas de IA de alto riesgo destinados a ser utilizados por autoridades públicas adoptarán las medidas necesarias para cumplir los requisitos y obligaciones del presente Reglamento a más tardar el 2 de agosto de 2030.',
        }),
      },
      {
        id: 'chk_2030_08_2',
        category: 'Técnico',
        requirement: 'Conformidad de componentes de IA en sistemas IT de gran magnitud del Anexo X',
        expectedStateDescription:
          'Los sistemas de IA integrados en Schengen (SIS II), VIS, Eurodac, EES y ETIAS cumplen plenamente el Reglamento antes del 31 de diciembre de 2030 (Art. 111.1).',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_111.p1',
          targetType: 'paragraph',
          articleId: 'art_111',
          paragraphId: 'art_111.p1',
          displayLabel: 'Art. 111.1 y Anexo X · Reglamento (UE) 2024/1689',
          exactQuote:
            'Sin perjuicio de la aplicación del artículo 5 a que se refiere el artículo 113, párrafo tercero, letra a), los sistemas de IA que sean componentes de los sistemas informáticos de gran magnitud establecidos por los actos jurídicos enumerados en el anexo X que se hayan introducido en el mercado o puesto en servicio antes del 2 de agosto de 2027 se pondrán en conformidad con el presente Reglamento a más tardar el 31 de diciembre de 2030.',
        }),
      },
      {
        id: 'chk_2030_08_3',
        category: 'Legal',
        requirement: 'Cláusulas de renovación de licitaciones públicas de IA',
        expectedStateDescription:
          'Pliegos de contratación pública actualizados exigiendo declaración UE de conformidad, registro en base de datos de la UE (Art. 71) y auditoría FRIA (Art. 27).',
        targetRoles: ['deployer', 'provider'],
        citation: makeCitation({
          id: 'art_49.p3',
          targetType: 'paragraph',
          articleId: 'art_49',
          paragraphId: 'art_49.p3',
          displayLabel: 'Art. 49.3 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Antes de poner en servicio o utilizar un sistema de IA de alto riesgo enumerado en el anexo III, con excepción de los sistemas de IA de alto riesgo enumerados en el punto 2 del anexo III, los responsables del despliegue que sean autoridades u organismos públicos o personas que actúen en su nombre se inscribirán en la base de datos de la UE.',
        }),
      },
      {
        id: 'chk_2030_08_4',
        category: 'Datos',
        requirement: 'Auditoría de trazabilidad y gobernanza de datos en sistemas fronterizos y judiciales',
        expectedStateDescription:
          'Verificación de no discriminación, trazabilidad de logs y supervisión humana reforzada por al menos dos personas físicas en sistemas de migración y control fronterizo (Art. 14.5).',
        targetRoles: ['provider', 'deployer'],
        citation: makeCitation({
          id: 'art_14.p5',
          targetType: 'paragraph',
          articleId: 'art_14',
          paragraphId: 'art_14.p5',
          displayLabel: 'Art. 14.5 · Reglamento (UE) 2024/1689',
          exactQuote:
            'En el caso de los sistemas de IA de alto riesgo a que se refiere el anexo III, punto 1, letra a), las medidas a que se refiere el apartado 4 serán tales que aseguren que, además, el responsable del despliegue no adopte ninguna medida o decisión sobre la base de la identificación resultante del sistema, a menos que dicha identificación haya sido verificada y confirmada por separado por al menos dos personas físicas con la competencia, la formación y la autoridad necesarias.',
        }),
      },
      {
        id: 'chk_2030_08_5',
        category: 'Gobernanza',
        requirement: 'Revisión estratégica quinquenal de la Comisión Europea (Art. 112)',
        expectedStateDescription:
          'Monitorización de las revisiones de la Comisión sobre la lista del Anexo III, sistemas con obligación de transparencia y eficacia del régimen sancionador.',
        targetRoles: ['provider', 'deployer', 'gpai_provider'],
        citation: makeCitation({
          id: 'art_112.p1',
          targetType: 'paragraph',
          articleId: 'art_112',
          paragraphId: 'art_112.p1',
          displayLabel: 'Art. 112 · Reglamento (UE) 2024/1689',
          exactQuote:
            'La Comisión evaluará la necesidad de modificar la lista que figura en el anexo III y la lista de sistemas de IA con medidas de transparencia adicionales establecida en el artículo 50, una vez al año tras la entrada en vigor del presente Reglamento.',
        }),
      },
    ],
    affectedArticles: ['art_14', 'art_49', 'art_111', 'art_112'],
    citations: [
      makeCitation({
        id: 'art_111',
        targetType: 'article',
        articleId: 'art_111',
        displayLabel: 'Art. 111 · Sistemas de IA ya introducidos en el mercado o puestos en servicio',
        exactQuote:
          'los proveedores y responsables del despliegue de sistemas de IA de alto riesgo destinados a ser utilizados por autoridades públicas adoptarán las medidas necesarias para cumplir los requisitos y obligaciones del presente Reglamento a más tardar el 2 de agosto de 2030.',
      }),
    ],
  },
];

export const INFOGRAPHIC_MODULES = [
  {
    id: 'info_risk_pyramid',
    title: 'Pirámide de Riesgos del Reglamento de IA',
    subtitle: 'Enfoque regulatorio basado en el riesgo (Arts. 5, 6, 50, 51 y 95)',
    category: 'risk_pyramid',
    riskLevel: 'high',
    keyPoints: [
      {
        heading: 'Nivel 1 — Riesgo Inaceptable (Prácticas Prohibidas · Art. 5)',
        explanation:
          'Sistemas prohibidos por vulnerar los derechos fundamentales y valores de la Unión: técnicas subliminales o engañosas dañinas (5.1.a), explotación de vulnerabilidades por edad/discapacidad/situación socioeconómica (5.1.b), social scoring (5.1.c), predicción policial individual basada solo en perfilado (5.1.d), scraping facial no selectivo (5.1.e), inferencia emocional en trabajo y educación (5.1.f), categorización biométrica sensible (5.1.g) e identificación biométrica remota en tiempo real en espacios públicos salvo excepciones tasadas (5.1.h).',
        enterpriseConsequence:
          'Prohibición total desde el 2 de febrero de 2025. Multa máxima de hasta 35.000.000 € o el 7 % de la facturación mundial (Art. 99.3).',
        metricOrBadge: 'PROHIBIDO · 35 M€ / 7 %',
        citation: makeCitation({
          id: 'art_5.p1',
          targetType: 'paragraph',
          articleId: 'art_5',
          paragraphId: 'art_5.p1',
          displayLabel: 'Art. 5.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Quedan prohibidas las siguientes prácticas de IA: a) la introducción en el mercado, la puesta en servicio o la utilización de un sistema de IA que se sirva de técnicas subliminales...',
        }),
      },
      {
        heading: 'Nivel 2A — Alto Riesgo en Productos Regulados (Art. 6.1 y Anexo I)',
        explanation:
          'Sistemas de IA que actúan como componentes de seguridad de productos (o son en sí mismos productos) cubiertos por legislación de armonización de la UE del Anexo I (dispositivos médicos MDR/IVDR, maquinaria, juguetes, aviación, automoción) y sujetos a evaluación de conformidad por un organismo notificado tercero.',
        enterpriseConsequence:
          'Aplicable desde el 2 de agosto de 2027 (Art. 113.c). Exige integrar la documentación del Anexo IV en la certificación sectorial del producto.',
        metricOrBadge: 'ALTO RIESGO ANEXO I · Ago 2027',
        citation: makeCitation({
          id: 'art_6.p1',
          targetType: 'paragraph',
          articleId: 'art_6',
          paragraphId: 'art_6.p1',
          displayLabel: 'Art. 6.1 y Anexo I · Reglamento (UE) 2024/1689',
          exactQuote:
            'el sistema de IA está destinado a ser utilizado como componente de seguridad de un producto, o el sistema de IA es en sí mismo un producto, regulado por los actos legislativos de armonización de la Unión enumerados en el anexo I.',
        }),
      },
      {
        heading: 'Nivel 2B — Alto Riesgo por Caso de Uso Crítico (Art. 6.2 y Anexo III)',
        explanation:
          'Sistemas en los 8 ámbitos críticos del Anexo III: (1) Biometría permitida, (2) Infraestructuras críticas (agua, gas, electricidad, tráfico, digital), (3) Educación y formación profesional, (4) Empleo, selección de personal y gestión de trabajadores, (5) Acceso a servicios esenciales públicos y privados (scoring crediticio, seguros de vida y salud, triaje de emergencias), (6) Fuerzas del orden, (7) Migración, asilo y control fronterizo, y (8) Administración de justicia y procesos democráticos.',
        enterpriseConsequence:
          'Exige cumplir los Arts. 8 a 15, evaluación de conformidad (Art. 43), marcado CE (Art. 48), registro UE (Art. 49) y deberes del desplegador + FRIA (Arts. 26 y 27).',
        metricOrBadge: 'ALTO RIESGO ANEXO III · 15 M€ / 3 %',
        citation: makeCitation({
          id: 'art_6.p2',
          targetType: 'paragraph',
          articleId: 'art_6',
          paragraphId: 'art_6.p2',
          displayLabel: 'Art. 6.2 y Anexo III · Reglamento (UE) 2024/1689',
          exactQuote:
            'Además de los sistemas de IA de alto riesgo a que se refiere el apartado 1, los sistemas de IA a que se refiere el anexo III también se considerarán de alto riesgo.',
        }),
      },
      {
        heading: 'Excepción de Filtro del Art. 6.3 (No Alto Riesgo si es tarea accesoria, salvo Perfilado)',
        explanation:
          'Un sistema listado en el Anexo III NO se considera de alto riesgo si no plantea un riesgo significativo para la salud, seguridad o derechos fundamentales por limitarse a: (a) realizar una tarea procedimental acotada, (b) mejorar el resultado de una actividad humana previamente completada, (c) detectar patrones sin sustituir la valoración humana previa, o (d) realizar una tarea preparatoria. ¡Cuidado!: SIEMPRE será de alto riesgo si realiza elaboración de perfiles de personas físicas.',
        enterpriseConsequence:
          'El proveedor que invoque la excepción del Art. 6.3 debe documentar la evaluación antes de comercializarlo y, aun así, inscribirlo en el Registro de la UE (Art. 49.2).',
        metricOrBadge: 'EXCEPCIÓN DOCUMENTADA · Art. 6.3',
        citation: makeCitation({
          id: 'art_6.p3',
          targetType: 'paragraph',
          articleId: 'art_6',
          paragraphId: 'art_6.p3',
          displayLabel: 'Art. 6.3 y 6.4 · Reglamento (UE) 2024/1689',
          exactQuote:
            'No obstante lo dispuesto en el apartado 2, un sistema de IA a que se refiere el anexo III no se considerará de alto riesgo si no plantea un riesgo significativo de daño para la salud, la seguridad o los derechos fundamentales de las personas físicas... Un sistema de IA a que se refiere el anexo III se considerará siempre de alto riesgo cuando el sistema de IA realice una elaboración de perfiles de personas físicas.',
        }),
      },
      {
        heading: 'Nivel Transversal — Modelos de IA de Uso General (GPAI · Arts. 51–55)',
        explanation:
          'Regula el modelo subyacente entrenado con gran volumen de datos capaz de realizar de manera competente una amplia gama de tareas distintas. Distingue entre modelos GPAI estándar (Art. 53) y modelos GPAI con riesgo sistémico cuando la capacidad de cálculo acumulada supera 10^25 FLOPs (Art. 51.2 y 55).',
        enterpriseConsequence:
          'Aplicable desde el 2 de agosto de 2025. Multas de la Comisión de hasta 15 M€ o 3 % de facturación mundial (Art. 101).',
        metricOrBadge: 'GPAI / SISTÉMICO >10^25 FLOPs',
        citation: makeCitation({
          id: 'art_51.p2',
          targetType: 'paragraph',
          articleId: 'art_51',
          paragraphId: 'art_51.p2',
          displayLabel: 'Art. 51.2 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Se presumirá que un modelo de IA de uso general tiene capacidades de gran impacto con arreglo al apartado 1, letra a), cuando la cantidad acumulada de cálculo utilizada para su entrenamiento, medida en operaciones de coma flotante, sea superior a 10^25.',
        }),
      },
      {
        heading: 'Nivel 3 y 4 — Transparencia Específica (Art. 50) y Riesgo Mínimo (Art. 95)',
        explanation:
          'El Art. 50 impone deberes de información y marcado digital en chatbots, generación de contenido sintético (audio, imagen, vídeo, texto), sistemas de reconocimiento emocional/biométrico permitidos y deepfakes. El resto de sistemas (filtros de spam, videojuegos, optimización logística interna) son de riesgo mínimo (Art. 95) pero siguen sujetos a la obligación de alfabetización en IA del Art. 4.',
        enterpriseConsequence:
          'Todo sistema generativo o conversacional debe implementar avisos de interfaz y metadatos legibles por máquina (estándar C2PA / watermarking).',
        metricOrBadge: 'TRANSPARENCIA ART. 50 + ALFABETIZACIÓN ART. 4',
        citation: makeCitation({
          id: 'art_50.p1',
          targetType: 'paragraph',
          articleId: 'art_50',
          paragraphId: 'art_50.p1',
          displayLabel: 'Art. 50.1 y Art. 95 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores velarán por que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de manera que las personas físicas afectadas estén informadas de que están interactuando con un sistema de IA.',
        }),
      },
    ],
    citations: [
      makeCitation({
        id: 'art_5',
        targetType: 'article',
        articleId: 'art_5',
        displayLabel: 'Art. 5 · Prácticas prohibidas',
        exactQuote: 'Quedan prohibidas las siguientes prácticas de IA...',
      }),
      makeCitation({
        id: 'art_6',
        targetType: 'article',
        articleId: 'art_6',
        displayLabel: 'Art. 6 · Reglas de clasificación de sistemas de IA de alto riesgo',
        exactQuote: 'Reglas de clasificación de los sistemas de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'info_role_obligations',
    title: 'Obligaciones por Rol en la Cadena de Valor de IA',
    subtitle: 'Reparto de responsabilidades entre Proveedor, Desplegador, Importador, Distribuidor y Proveedor GPAI',
    category: 'role_obligations',
    riskLevel: 'high',
    keyPoints: [
      {
        heading: 'Proveedor de Alto Riesgo (Arts. 16 a 22)',
        explanation:
          'Desarrolla un sistema de IA o encarga su desarrollo y lo introduce en el mercado o lo pone en servicio con su propio nombre o marca. Debe garantizar el cumplimiento de los Arts. 8 a 15, implantar un sistema de gestión de la calidad (Art. 17), redactar la documentación técnica (Anexo IV), conservar la documentación durante 10 años (Art. 18), superar la evaluación de la conformidad (Art. 43), colocar el marcado CE (Art. 48) y registrarlo en la UE (Art. 49).',
        enterpriseConsequence:
          'Asume la carga regulatoria principal. Si un proveedor está fuera de la UE, debe designar por mandato escrito un representante autorizado en la Unión (Art. 22).',
        metricOrBadge: 'PROVEEDOR · Arts. 16–22',
        citation: makeCitation({
          id: 'art_16',
          targetType: 'article',
          articleId: 'art_16',
          displayLabel: 'Art. 16 · Obligaciones de los proveedores de sistemas de IA de alto riesgo',
          exactQuote:
            'Los proveedores de sistemas de IA de alto riesgo: a) velarán por que sus sistemas de IA de alto riesgo cumplan los requisitos establecidos en la sección 2; b) indicarán su nombre, su nombre comercial registrado o su marca registrada y su dirección de contacto;',
        }),
      },
      {
        heading: 'Responsable del Despliegue / Empresa Usuaria (Arts. 26 y 27)',
        explanation:
          'Toda persona física o jurídica o autoridad pública que utiliza un sistema de IA bajo su propia autoridad. En alto riesgo debe: usar el sistema conforme a las instrucciones de uso (26.1), encomendar la supervisión humana a personas con competencia y autoridad (26.2), asegurar que los datos de entrada sean pertinentes y representativos (26.4), vigilar el funcionamiento y notificar incidentes (26.5), conservar los logs al menos 6 meses (26.6), informar previamente a los trabajadores (26.7) y realizar la FRIA cuando aplique el Art. 27.',
        enterpriseConsequence:
          'Usar un SaaS de terceros en selección de personal o banca NO exime a la empresa cliente: le convierte en responsable del despliegue con obligaciones propias directas.',
        metricOrBadge: 'DESPLEGADOR · Arts. 26–27',
        citation: makeCitation({
          id: 'art_26.p1',
          targetType: 'paragraph',
          articleId: 'art_26',
          paragraphId: 'art_26.p1',
          displayLabel: 'Art. 26 · Obligaciones de los responsables del despliegue',
          exactQuote:
            'Los responsables del despliegue de sistemas de IA de alto riesgo adoptarán medidas técnicas y organizativas adecuadas para garantizar que utilizan dichos sistemas con arreglo a las instrucciones de uso que los acompañen.',
        }),
      },
      {
        heading: 'Conversión en Proveedor ("Trampa del Art. 25")',
        explanation:
          'Cualquier desplegador, distribuidor, importador o tercero pasa automáticamente a ser considerado PROVEEDOR de alto riesgo (asumiendo todas las cargas del Art. 16) si: (a) pone su nombre o marca comercial en un sistema de alto riesgo ya comercializado (marca blanca), (b) realiza una modificación sustancial en él, o (c) modifica la finalidad prevista de un sistema (incluyendo un GPAI) convirtiéndolo en un sistema de alto riesgo.',
        enterpriseConsequence:
          'Conectar un LLM generalista mediante API o fine-tuning para cribar currículums o evaluar solvencia crediticia convierte a la empresa usuaria en Proveedor de Alto Riesgo bajo el Art. 25.1(c).',
        metricOrBadge: 'CONVERSIÓN DE ROL · Art. 25',
        citation: makeCitation({
          id: 'art_25.p1',
          targetType: 'paragraph',
          articleId: 'art_25',
          paragraphId: 'art_25.p1',
          displayLabel: 'Art. 25.1 · Responsabilidades a lo largo de la cadena de valor de la IA',
          exactQuote:
            'Cualquier distribuidor, importador, responsable del despliegue u otro tercero será considerado proveedor de un sistema de IA de alto riesgo a efectos del presente Reglamento y estará sujeto a las obligaciones del proveedor en virtud del artículo 16 en cualquiera de las circunstancias siguientes...',
        }),
      },
      {
        heading: 'Importador y Distribuidor (Arts. 23 y 24)',
        explanation:
          'Antes de introducir o comercializar un sistema de alto riesgo en la UE, el importador (Art. 23) y el distribuidor (Art. 24) deben verificar que lleva el marcado CE, va acompañado de la declaración UE de conformidad e instrucciones de uso, y que el proveedor ha cumplido sus obligaciones de registro. No deben comercializarlo si consideran que no es conforme.',
        enterpriseConsequence:
          'Los integradores, resellers y marketplaces de software B2B en España deben auditar el marcado CE y documentación del fabricante extracomunitario antes de revender.',
        metricOrBadge: 'IMPORTADOR / DISTRIBUIDOR · Arts. 23–24',
        citation: makeCitation({
          id: 'art_23.p1',
          targetType: 'paragraph',
          articleId: 'art_23',
          paragraphId: 'art_23.p1',
          displayLabel: 'Art. 23.1 y Art. 24.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Antes de introducir en el mercado un sistema de IA de alto riesgo, los importadores se asegurarán de que el proveedor de dicho sistema de IA haya llevado a cabo el procedimiento de evaluación de la conformidad pertinente.',
        }),
      },
      {
        heading: 'Proveedor de Modelo GPAI (Arts. 53 a 55)',
        explanation:
          'Desarrolla modelos de IA de uso general comercializados o liberados en el mercado de la Unión. Debe mantener documentación técnica (Anexo XI), entregar información a los proveedores posteriores que integran el modelo (Anexo XII), cumplir la normativa de copyright y publicar el resumen de entrenamiento. Los modelos open-source sin riesgo sistémico están exentos del Anexo XI y XII (Art. 53.2), pero NUNCA de copyright ni del resumen de datos de entrenamiento.',
        enterpriseConsequence:
          'Publicar un modelo GPAI con licencia de código abierto no exime de respetar los derechos de autor ni de publicar el resumen de los datos de entrenamiento.',
        metricOrBadge: 'PROVEEDOR GPAI · Arts. 53–55',
        citation: makeCitation({
          id: 'art_53.p2',
          targetType: 'paragraph',
          articleId: 'art_53',
          paragraphId: 'art_53.p2',
          displayLabel: 'Art. 53.2 · Exención parcial Open-Source GPAI',
          exactQuote:
            'Las obligaciones establecidas en el apartado 1, letras a) y b), no se aplicarán a los proveedores de modelos de IA de uso general que se publiquen con una licencia libre y de código abierto que permita acceder a los parámetros, incluidos los pesos, la información sobre la arquitectura del modelo y la información sobre el uso del modelo, así como utilizarlos, modificarlos y distribuirlos.',
        }),
      },
    ],
    citations: [
      makeCitation({
        id: 'art_16',
        targetType: 'article',
        articleId: 'art_16',
        displayLabel: 'Art. 16 · Obligaciones de los proveedores',
        exactQuote: 'Obligaciones de los proveedores de sistemas de IA de alto riesgo.',
      }),
      makeCitation({
        id: 'art_26',
        targetType: 'article',
        articleId: 'art_26',
        displayLabel: 'Art. 26 · Obligaciones de los responsables del despliegue',
        exactQuote: 'Obligaciones de los responsables del despliegue de sistemas de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'info_conformity_flow',
    title: 'Flujo de Evaluación de Conformidad y Marcado CE',
    subtitle: 'Del diseño técnico (Arts. 8–15) al registro en la Base de Datos de la UE (Arts. 43, 47, 48 y 49)',
    category: 'conformity_flow',
    riskLevel: 'high',
    keyPoints: [
      {
        heading: 'Paso 1 — Cumplimiento de los 7 Requisitos Técnicos (Arts. 8 a 15)',
        explanation:
          'Todo sistema de alto riesgo debe acreditar: (1) Sistema continuo e iterativo de gestión de riesgos (Art. 9); (2) Gobernanza y calidad de datos de entrenamiento, validación y prueba sin sesgos (Art. 10); (3) Documentación técnica completa antes de comercializar según el Anexo IV (Art. 11); (4) Capacidad técnica de registro automático de eventos/logs (Art. 12); (5) Transparencia e instrucciones de uso claras para el desplegador (Art. 13); (6) Diseño con medidas de supervisión humana efectiva e botón de parada (Art. 14); y (7) Precisión, solidez y ciberseguridad frente a data poisoning o ataques adversarios (Art. 15).',
        enterpriseConsequence:
          'La documentación del Anexo IV debe generarse ANTES de poner el sistema en producción. Para pymes y startups se admite un formulario simplificado (Art. 11.1).',
        metricOrBadge: 'PASO 1 · Arts. 8–15 y Anexo IV',
        citation: makeCitation({
          id: 'art_11.p1',
          targetType: 'paragraph',
          articleId: 'art_11',
          paragraphId: 'art_11.p1',
          displayLabel: 'Art. 11.1 y Anexo IV · Reglamento (UE) 2024/1689',
          exactQuote:
            'La documentación técnica de un sistema de IA de alto riesgo se elaborará antes de que dicho sistema se introduzca en el mercado o se ponga en servicio y se mantendrá actualizada. La documentación técnica se elaborará de tal manera que demuestre que el sistema de IA de alto riesgo cumple los requisitos establecidos en la presente sección y proporcione a las autoridades nacionales competentes y a los organismos notificados la información necesaria.',
        }),
      },
      {
        heading: 'Paso 2 — Sistema de Gestión de la Calidad (Art. 17)',
        explanation:
          'El proveedor debe contar con un sistema de gestión de la calidad documentado en políticas y procedimientos escritos que cubra la estrategia de cumplimiento normativo, control de diseño, examen y validación de datos, gestión de modificaciones, vigilancia poscomercialización (Art. 72) y notificación de incidentes graves (Art. 73).',
        enterpriseConsequence:
          'Puede integrarse con normas armonizadas (como ISO/IEC 42001 o CEN/CENELEC del Art. 40) que otorgan presunción de conformidad.',
        metricOrBadge: 'PASO 2 · Sistema Calidad Art. 17',
        citation: makeCitation({
          id: 'art_17.p1',
          targetType: 'paragraph',
          articleId: 'art_17',
          paragraphId: 'art_17.p1',
          displayLabel: 'Art. 17.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores de sistemas de IA de alto riesgo establecerán un sistema de gestión de la calidad que garantice el cumplimiento del presente Reglamento. Dicho sistema estará documentado de manera sistemática y ordenada en forma de políticas, procedimientos e instrucciones escritos.',
        }),
      },
      {
        heading: 'Paso 3 — Evaluación de la Conformidad: Control Interno (Anexo VI) vs. Organismo Notificado (Anexo VII)',
        explanation:
          'Para los sistemas de los puntos 2 a 8 del Anexo III (RR.HH., crédito, educación, infraestructuras, justicia, etc.), el proveedor aplica el procedimiento de evaluación basado en el CONTROL INTERNO del Anexo VI (sin intervención de organismo notificado). Para los sistemas biométricos del punto 1 del Anexo III (si no aplican normas armonizadas completas) y los productos regulados del Anexo I, puede requerirse la intervención de un Organismo Notificado bajo el Anexo VII (Art. 43).',
        enterpriseConsequence:
          'La inmensa mayoría de empresas de software B2B (Anexo III puntos 2 a 8) pueden realizar la evaluación de conformidad por control interno (Anexo VI).',
        metricOrBadge: 'PASO 3 · Art. 43 (Anexo VI vs VII)',
        citation: makeCitation({
          id: 'art_43.p2',
          targetType: 'paragraph',
          articleId: 'art_43',
          paragraphId: 'art_43.p2',
          displayLabel: 'Art. 43.2 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Para los sistemas de IA de alto riesgo a que se refieren los puntos 2 a 8 del anexo III, los proveedores seguirán el procedimiento de evaluación de la conformidad fundamentado en un control interno a que se refiere el anexo VI, que no prevé la participación de un organismo notificado.',
        }),
      },
      {
        heading: 'Paso 4 — Declaración UE de Conformidad (Art. 47) y Marcado CE (Art. 48)',
        explanation:
          'Superada la evaluación, el proveedor redacta una declaración UE de conformidad escrita y firmada con el contenido del Anexo V (conservándola 10 años) y coloca el marcado CE de manera visible, legible e indeleble. En sistemas de IA puramente digitales, se coloca un marcado CE digital accesible a través de la interfaz de usuario o código legible por máquina (Art. 48.2).',
        enterpriseConsequence:
          'El software SaaS de alto riesgo debe mostrar el marcado CE digital en su pantalla de información legal / "Acerca de" o documentación electrónica.',
        metricOrBadge: 'PASO 4 · Declaración Anexo V + Marcado CE',
        citation: makeCitation({
          id: 'art_48.p2',
          targetType: 'paragraph',
          articleId: 'art_48',
          paragraphId: 'art_48.p2',
          displayLabel: 'Art. 47 y Art. 48.2 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Cuando los sistemas de IA de alto riesgo se suministren digitalmente, solo se utilizará un marcado CE digital si se puede acceder fácilmente a él a través de la interfaz desde la que se accede a dicho sistema o a través de un código legible por máquina fácilmente accesible u otros medios electrónicos.',
        }),
      },
      {
        heading: 'Paso 5 — Inscripción en la Base de Datos de la UE (Arts. 49 y 71) y Conservación por 10 años (Art. 18)',
        explanation:
          'Antes de introducir en el mercado o poner en servicio un sistema del Anexo III, el proveedor (y el desplegador público) debe inscribirse e inscribir el sistema en la base de datos de la UE del Art. 71 aportando la información del Anexo VIII. Toda la documentación técnica, del sistema de calidad y declaraciones deben conservarse durante 10 años a partir de la introducción en el mercado (Art. 18).',
        enterpriseConsequence:
          'Comercializar un sistema del Anexo III sin inscripción previa en la base de datos del Art. 71 constituye infracción sancionable bajo el Art. 99.4.',
        metricOrBadge: 'PASO 5 · Registro Art. 71 + 10 años Art. 18',
        citation: makeCitation({
          id: 'art_49.p1',
          targetType: 'paragraph',
          articleId: 'art_49',
          paragraphId: 'art_49.p1',
          displayLabel: 'Art. 49.1 y Art. 18.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Antes de introducir en el mercado o poner en servicio un sistema de IA de alto riesgo enumerado en el anexo III, con excepción de los sistemas de IA de alto riesgo a que se refiere el punto 2 del anexo III, el proveedor o, en su caso, el representante autorizado se inscribirá y registrará su sistema en la base de datos de la UE a que se refiere el artículo 71.',
        }),
      },
    ],
    citations: [
      makeCitation({
        id: 'art_43',
        targetType: 'article',
        articleId: 'art_43',
        displayLabel: 'Art. 43 · Evaluación de la conformidad',
        exactQuote: 'Evaluación de la conformidad.',
      }),
      makeCitation({
        id: 'art_49',
        targetType: 'article',
        articleId: 'art_49',
        displayLabel: 'Art. 49 · Registro',
        exactQuote: 'Registro en la base de datos de la UE.',
      }),
    ],
  },
  {
    id: 'info_sanctions',
    title: 'Régimen Sancionador y Escala de Multas (Arts. 99, 100 y 101)',
    subtitle: 'Cuantías máximas, regla especial de proporcionalidad para PYMEs/Startups y multas a instituciones UE',
    category: 'sanctions',
    riskLevel: 'unacceptable',
    keyPoints: [
      {
        heading: 'Escala 1 (Máxima) — Incumplimiento de Prácticas Prohibidas del Art. 5 (Art. 99.3)',
        explanation:
          'La vulneración de cualquiera de las prohibiciones del artículo 5 está sujeta a multas administrativas de hasta 35.000.000 EUR o, si el infractor es una empresa, de hasta el 7 % de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior, optándose por la cuantía más elevada (salvo para pymes y empresas emergentes).',
        enterpriseConsequence:
          'Supera incluso el techo sancionador del RGPD (que es de 20 M€ / 4 %). Afecta tanto al proveedor como al responsable del despliegue que utilice un sistema prohibido.',
        metricOrBadge: '35.000.000 € ó 7 % facturación mundial',
        citation: makeCitation({
          id: 'art_99.p3',
          targetType: 'paragraph',
          articleId: 'art_99',
          paragraphId: 'art_99.p3',
          displayLabel: 'Art. 99.3 · Reglamento (UE) 2024/1689',
          exactQuote:
            'El incumplimiento de la prohibición de las prácticas de IA a que se refiere el artículo 5 estará sujeto a multas administrativas de hasta 35 000 000 EUR o, si el infractor es una empresa, de hasta el 7 % de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior, si esta cuantía fuera superior.',
        }),
      },
      {
        heading: 'Escala 2 — Incumplimiento de Obligaciones de Operadores y Transparencia (Art. 99.4)',
        explanation:
          'El incumplimiento de las obligaciones de proveedores (Art. 16), representantes autorizados (Art. 22), importadores (Art. 23), distribuidores (Art. 24), responsables del despliegue (Arts. 26 y 27), organismos notificados o de las obligaciones de transparencia del artículo 50 conlleva multas de hasta 15.000.000 EUR o de hasta el 3 % del volumen de negocios mundial total.',
        enterpriseConsequence:
          'No realizar la FRIA (Art. 27), no conservar logs durante 6 meses (Art. 26.6) o no etiquetar contenido sintético/deepfakes (Art. 50) entra en este tramo de hasta 15 M€ / 3 %.',
        metricOrBadge: '15.000.000 € ó 3 % facturación mundial',
        citation: makeCitation({
          id: 'art_99.p4',
          targetType: 'paragraph',
          articleId: 'art_99',
          paragraphId: 'art_99.p4',
          displayLabel: 'Art. 99.4 · Reglamento (UE) 2024/1689',
          exactQuote:
            'El incumplimiento de cualquier disposición relativa a los operadores o a los organismos notificados, distinta de las contempladas en el artículo 5, estará sujeto a multas administrativas de hasta 15 000 000 EUR o, si el infractor es una empresa, de hasta el 3 % de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior, si esta cuantía fuera superior.',
        }),
      },
      {
        heading: 'Escala 3 — Suministro de Información Inexacta, Incompleta o Engañosa (Art. 99.5)',
        explanation:
          'La presentación de información inexacta, incompleta o engañosa a los organismos notificados o a las autoridades nacionales competentes en respuesta a una solicitud está sujeta a multas administrativas de hasta 7.500.000 EUR o de hasta el 1 % del volumen de negocios mundial total.',
        enterpriseConsequence:
          'Exige riguroso control legal y técnico antes de contestar cualquier requerimiento de información de la AESIA o de un organismo notificado.',
        metricOrBadge: '7.500.000 € ó 1 % facturación mundial',
        citation: makeCitation({
          id: 'art_99.p5',
          targetType: 'paragraph',
          articleId: 'art_99',
          paragraphId: 'art_99.p5',
          displayLabel: 'Art. 99.5 · Reglamento (UE) 2024/1689',
          exactQuote:
            'La presentación de información inexacta, incompleta o engañosa a los organismos notificados o a las autoridades nacionales competentes en respuesta a una solicitud estará sujeta a multas administrativas de hasta 7 500 000 EUR o, si el infractor es una empresa, de hasta el 1 % de su volumen de negocios mundial total.',
        }),
      },
      {
        heading: 'Regla Especial de Protección para PYMEs y Startups: "La Cuantía INFERIOR" (Art. 99.6)',
        explanation:
          'A diferencia de las grandes empresas (donde se aplica la cuantía superior entre el importe fijo en euros y el porcentaje de facturación), en el caso de las pymes, incluidas las empresas emergentes (startups), cada multa administrativa llegará hasta los porcentajes o los importes señalados en los apartados 3, 4 y 5, aplicándose LA CUANTÍA INFERIOR de las dos.',
        enterpriseConsequence:
          'Protege la viabilidad financiera de pymes y startups: una startup que facture 1 M€ tiene como tope máximo el 7 %, 3 % o 1 % de su facturación (70.000 €, 30.000 € o 10.000 €), y no los millones fijos.',
        metricOrBadge: 'PYMEs / STARTUPS · Se aplica la MENOR cuantía',
        citation: makeCitation({
          id: 'art_99.p6',
          targetType: 'paragraph',
          articleId: 'art_99',
          paragraphId: 'art_99.p6',
          displayLabel: 'Art. 99.6 · Reglamento (UE) 2024/1689',
          exactQuote:
            'En el caso de las pymes, incluidas las empresas emergentes, cada multa a que se refiere el presente artículo llegará hasta los porcentajes o los importes señalados en los apartados 3, 4 y 5, si esta cuantía fuera inferior.',
        }),
      },
      {
        heading: 'Multas de la Comisión a Proveedores de Modelos GPAI (Art. 101) e Instituciones UE (Art. 100)',
        explanation:
          'La Comisión Europea (a través de la Oficina de IA) puede imponer a los proveedores de modelos GPAI multas de hasta el 3 % de su volumen de negocios mundial o 15.000.000 EUR cuando infrinjan los Arts. 53 o 55, no presenten información solicitada o no den acceso para evaluación del modelo (Art. 101, aplicable desde el 2 de agosto de 2026). Por su parte, el SEPD puede imponer hasta 1.500.000 EUR (Art. 5) o 750.000 EUR (resto) a instituciones y agencias de la UE (Art. 100).',
        enterpriseConsequence:
          'La supervisión sancionadora de los modelos fundacionales (GPAI) está centralizada en la Comisión Europea, no en las agencias nacionales.',
        metricOrBadge: 'GPAI COMISIÓN · 15 M€ / 3 % (Art. 101)',
        citation: makeCitation({
          id: 'art_101.p1',
          targetType: 'paragraph',
          articleId: 'art_101',
          paragraphId: 'art_101.p1',
          displayLabel: 'Art. 101.1 y Art. 100 · Reglamento (UE) 2024/1689',
          exactQuote:
            'La Comisión podrá imponer a los proveedores de modelos de IA de uso general multas que no superen el 3 % de su volumen de negocios mundial total en el ejercicio financiero anterior o 15 000 000 EUR, si esta cuantía fuera superior.',
        }),
      },
    ],
    citations: [
      makeCitation({
        id: 'art_99',
        targetType: 'article',
        articleId: 'art_99',
        displayLabel: 'Art. 99 · Sanciones',
        exactQuote: 'Sanciones y multas administrativas.',
      }),
      makeCitation({
        id: 'art_101',
        targetType: 'article',
        articleId: 'art_101',
        displayLabel: 'Art. 101 · Multas a proveedores de modelos de IA de uso general',
        exactQuote: 'Multas a proveedores de modelos de IA de uso general.',
      }),
    ],
  },
  {
    id: 'info_gpai',
    title: 'Modelos de IA de Uso General (GPAI) y Riesgo Sistémico',
    subtitle: 'Obligaciones de transparencia, copyright, exención Open-Source y umbral de 10^25 FLOPs (Arts. 51–56)',
    category: 'gpai',
    riskLevel: 'gpai',
    keyPoints: [
      {
        heading: 'Obligaciones Base para TODOS los Modelos GPAI (Art. 53.1)',
        explanation:
          'Todo proveedor de un modelo GPAI debe cumplir 4 pilares: (1) elaborar y actualizar la documentación técnica del Anexo XI para la Oficina de IA (53.1.a); (2) facilitar la documentación e información técnica del Anexo XII a los proveedores posteriores que integren el modelo en sus sistemas (53.1.b); (3) establecer una política para cumplir el Derecho de la UE sobre derechos de autor y respetar reservas de derechos TDM opt-out (53.1.c); y (4) publicar un resumen suficientemente detallado de los datos de entrenamiento según la plantilla de la Oficina de IA (53.1.d).',
        enterpriseConsequence:
          'Los integradores B2B tienen derecho legal a recibir la documentación del Anexo XII de su proveedor de modelos GPAI para poder evaluar sus propios riesgos.',
        metricOrBadge: '4 PILARES GPAI · Art. 53.1 (Anexos XI y XII)',
        citation: makeCitation({
          id: 'art_53.p1',
          targetType: 'paragraph',
          articleId: 'art_53',
          paragraphId: 'art_53.p1',
          displayLabel: 'Art. 53.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Los proveedores de modelos de IA de uso general: a) elaborarán y mantendrán actualizada la documentación técnica del modelo... b) elaborarán, mantendrán actualizada y pondrán a disposición información y documentación para los proveedores de sistemas de IA que tengan previsto integrar el modelo.',
        }),
      },
      {
        heading: 'Umbral de Clasificación de Riesgo Sistémico: > 10^25 FLOPs (Art. 51 y Anexo XIII)',
        explanation:
          'Un modelo GPAI se clasifica como modelo con riesgo sistémico si tiene capacidades de gran impacto evaluadas mediante herramientas técnicas o decisión de la Comisión conforme a los criterios del Anexo XIII, y se presume iuris tantum que las tiene cuando el cómputo acumulado de entrenamiento supera 10^25 operaciones de coma flotante (FLOPs). El proveedor debe notificarlo a la Comisión en el plazo de 2 semanas desde que se cumpla el requisito (Art. 52.1).',
        enterpriseConsequence:
          'Los modelos frontier que superen 10^25 FLOPs quedan bajo supervisión directa reforzada de la Oficina Europea de IA y del Grupo Científico.',
        metricOrBadge: 'UMBRAL > 10^25 FLOPs · Notificación 2 semanas',
        citation: makeCitation({
          id: 'art_51.p2',
          targetType: 'paragraph',
          articleId: 'art_51',
          paragraphId: 'art_51.p2',
          displayLabel: 'Art. 51.2 y Art. 52.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Se presumirá que un modelo de IA de uso general tiene capacidades de gran impacto con arreglo al apartado 1, letra a), cuando la cantidad acumulada de cálculo utilizada para su entrenamiento, medida en operaciones de coma flotante, sea superior a 10^25.',
        }),
      },
      {
        heading: 'Obligaciones Adicionales por Riesgo Sistémico (Art. 55)',
        explanation:
          'Además del Art. 53, los proveedores de modelos GPAI con riesgo sistémico deben: (a) evaluar el modelo realizando y documentando pruebas con adversarios (red-teaming); (b) evaluar y mitigar posibles riesgos sistémicos a escala de la Unión; (c) hacer seguimiento, documentar e informar sin demora indebida a la Oficina de IA de los incidentes graves y medidas correctoras; y (d) garantizar un nivel adecuado de protección de ciberseguridad para el modelo y su infraestructura física.',
        enterpriseConsequence:
          'Incluso los modelos de código abierto (open-weights) están sujetos a TODAS las obligaciones del Art. 53 y del Art. 55 si presentan riesgo sistémico.',
        metricOrBadge: 'RED-TEAMING + INCIDENTES + CIBERSEGURIDAD · Art. 55',
        citation: makeCitation({
          id: 'art_55.p1',
          targetType: 'paragraph',
          articleId: 'art_55',
          paragraphId: 'art_55.p1',
          displayLabel: 'Art. 55.1 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Además de las obligaciones enumeradas en los artículos 53 y 54, los proveedores de modelos de IA de uso general con riesgo sistémico: a) realizarán una evaluación de los modelos con arreglo a protocolos y herramientas normalizados que reflejen el estado de la técnica, en particular llevando a cabo y documentando pruebas con adversarios para detectar y mitigar los riesgos sistémicos;',
        }),
      },
      {
        heading: 'Régimen de Modelos GPAI de Código Abierto / Open-Weights (Art. 53.2)',
        explanation:
          'Los modelos GPAI publicados bajo licencia libre y de código abierto (que permita acceder a pesos, arquitectura y uso, modificación y distribución sin monetización) están exentos de elaborar la documentación técnica de los Anexos XI y XII (Art. 53.1.a y b), SALVO que sean modelos con riesgo sistémico. Sin embargo, SIEMPRE deben cumplir la política de derechos de autor (53.1.c) y publicar el resumen de datos de entrenamiento (53.1.d).',
        enterpriseConsequence:
          'Liberar pesos en HuggingFace o GitHub bajo licencia Apache-2.0 o MIT dispensa del Anexo XI/XII (si <10^25 FLOPs), pero obliga igualmente a publicar el resumen de entrenamiento y respetar el copyright.',
        metricOrBadge: 'OPEN-SOURCE · Exento Anexo XI/XII, NO exento Copyright/Resumen',
        citation: makeCitation({
          id: 'art_53.p2',
          targetType: 'paragraph',
          articleId: 'art_53',
          paragraphId: 'art_53.p2',
          displayLabel: 'Art. 53.2 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Las obligaciones establecidas en el apartado 1, letras a) y b), no se aplicarán a los proveedores de modelos de IA de uso general que se publiquen con una licencia libre y de código abierto que permita acceder a los parámetros, incluidos los pesos, la información sobre la arquitectura del modelo y la información sobre el uso del modelo... Esta excepción no se aplicará a los modelos de IA de uso general con riesgo sistémico.',
        }),
      },
      {
        heading: 'Códigos de Buenas Prácticas GPAI (Art. 56) y Evaluaciones Oficiales (Art. 92 / Reg. 2026/1755)',
        explanation:
          'Los proveedores de modelos GPAI pueden demostrar el cumplimiento de los artículos 53 y 55 adhiriéndose a los Códigos de Buenas Prácticas elaborados con la Oficina de IA (Art. 56) o a normas armonizadas europeas. Asimismo, bajo el Art. 92 (desarrollado por el Reglamento UE 2026/1755), la Comisión puede ordenar evaluaciones técnicas independientes del modelo y exigir acceso a sus interfaces y parámetros.',
        enterpriseConsequence:
          'Adherirse al Código de Buenas Prácticas GPAI de la Oficina Europea de IA otorga una vía rápida de presunción de conformidad antes de la aprobación de normas armonizadas CEN/CENELEC.',
        metricOrBadge: 'CÓDIGOS DE BUENAS PRÁCTICAS · Art. 56 y Art. 92',
        citation: makeCitation({
          id: 'art_56.p1',
          targetType: 'paragraph',
          articleId: 'art_56',
          paragraphId: 'art_56.p1',
          displayLabel: 'Art. 56.1 y Art. 92 · Reglamento (UE) 2024/1689',
          exactQuote:
            'La Oficina de IA fomentará y facilitará la elaboración de códigos de buenas prácticas a escala de la Unión a fin de contribuir a la correcta aplicación del presente Reglamento.',
        }),
      },
    ],
    citations: [
      makeCitation({
        id: 'art_53',
        targetType: 'article',
        articleId: 'art_53',
        displayLabel: 'Art. 53 · Obligaciones de los proveedores de modelos GPAI',
        exactQuote: 'Obligaciones de los proveedores de modelos de IA de uso general.',
      }),
      makeCitation({
        id: 'art_55',
        targetType: 'article',
        articleId: 'art_55',
        displayLabel: 'Art. 55 · Obligaciones para modelos GPAI con riesgo sistémico',
        exactQuote: 'Obligaciones de los proveedores de modelos de IA de uso general con riesgo sistémico.',
      }),
    ],
  },
  {
    id: 'info_spain_aesia',
    title: 'Supervisión en España: AESIA, Sandbox Regulatorio y Actualizaciones BOE 2026',
    subtitle: 'Arquitectura supervisora nacional (Art. 70), entorno controlado de pruebas (Art. 57) y reformas DOUE 2026',
    category: 'spain_aesia',
    riskLevel: 'governance',
    keyPoints: [
      {
        heading: 'AESIA: Autoridad Nacional Competente en España (Art. 70 y BOE-A-2023-18911)',
        explanation:
          'España fue el primer Estado miembro en constituir su agencia supervisora mediante el Real Decreto 729/2023 (BOE-A-2023-18911), que aprueba el Estatuto de la Agencia Española de Supervisión de Inteligencia Artificial (AESIA), con sede en A Coruña. Actúa como autoridad de vigilancia del mercado conforme al Art. 70 del Reglamento (UE) 2024/1689, coordinándose con la AEPD cuando los sistemas afecten a protección de datos personales.',
        enterpriseConsequence:
          'Las empresas que operan en España tienen en la AESIA su punto de contacto único para consultas, registro de incidentes graves (Art. 73) y notificación de evaluaciones FRIA (Art. 27).',
        metricOrBadge: 'AESIA (A Coruña) · BOE-A-2023-18911 · Art. 70',
        citation: makeCitation({
          id: 'art_70.p1',
          targetType: 'paragraph',
          articleId: 'art_70',
          paragraphId: 'art_70.p1',
          displayLabel: 'Art. 70.1 · Reglamento (UE) 2024/1689 y BOE-A-2023-18911',
          exactQuote:
            'Cada Estado miembro establecerá o designará como autoridades nacionales competentes al menos una autoridad notificante y al menos una autoridad de vigilancia del mercado a efectos del presente Reglamento.',
        }),
      },
      {
        heading: 'Sandbox Regulatorio Español y Escudo frente a Multas (Art. 57 y BOE-A-2023-22984)',
        explanation:
          'El artículo 57 obliga a cada Estado miembro a disponer de al menos un espacio controlado de pruebas para la IA antes del 2 de agosto de 2026, articulado en España desde el Real Decreto 817/2023 (BOE-A-2023-22984). Según el Art. 57.12, las autoridades NO impondrán multas administrativas por infracciones del Reglamento a los proveedores participantes siempre que respeten el plan específico y las condiciones de participación y sigan de buena fe las orientaciones de la autoridad.',
        enterpriseConsequence:
          'Participar en el Sandbox de la AESIA proporciona un informe oficial de salida ("exit report", Art. 57.7) que acelera la evaluación de conformidad y ofrece inmunidad frente a multas durante las pruebas.',
        metricOrBadge: 'SANDBOX SIN MULTAS · Art. 57.12 y RD 817/2023',
        citation: makeCitation({
          id: 'art_57.p12',
          targetType: 'paragraph',
          articleId: 'art_57',
          paragraphId: 'art_57.p12',
          displayLabel: 'Art. 57.1 y 57.12 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Las autoridades competentes no impondrán multas administrativas por infracciones del presente Reglamento cuando los futuros proveedores que participen en el espacio controlado de pruebas para la IA respeten el plan específico y las condiciones de su participación y sigan de buena fe las orientaciones facilitadas por la autoridad nacional competente.',
        }),
      },
      {
        heading: 'Pruebas en Condiciones Reales fuera del Sandbox (Art. 60 y Art. 60 bis DOUE-L-2026-81147)',
        explanation:
          'Los proveedores de sistemas de alto riesgo del Anexo III pueden realizar pruebas en condiciones reales fuera del sandbox si presentan un plan de pruebas a la autoridad de vigilancia del mercado, inscriben la prueba en la sección reservada de la base de datos de la UE (Anexo IX), limitan su duración a un máximo de 6 meses (prorrogable otros 6) y obtienen el consentimiento informado de los sujetos participantes (Art. 61). El Reglamento 2026/1744 (DOUE-L-2026-81147) añadió el Art. 60 bis para facilitar pruebas transfronterizas coordinadas.',
        enterpriseConsequence:
          'Permite realizar pilotos reales con usuarios en España y otros países de la UE antes de completar el marcado CE, siempre que medie aprobación del plan y consentimiento informado.',
        metricOrBadge: 'PRUEBAS REALES <= 6+6 MESES · Art. 60 y 60 bis',
        citation: makeCitation({
          id: 'art_60.p1',
          targetType: 'paragraph',
          articleId: 'art_60',
          paragraphId: 'art_60.p1',
          displayLabel: 'Art. 60 y DOUE-L-2026-81147 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Las pruebas de sistemas de IA de alto riesgo en condiciones reales fuera de los espacios controlados de pruebas para la IA podrán ser realizadas por proveedores o futuros proveedores de sistemas de IA de alto riesgo enumerados en el anexo III.',
        }),
      },
      {
        heading: 'Facultades de Inspección de la Autoridad: Acceso a Datos, Documentación y Código Fuente (Art. 74)',
        explanation:
          'Las autoridades de vigilancia del mercado tienen plenos poderes conforme al Reglamento (UE) 2019/1020 y al Art. 74 del Reglamento de IA: pueden exigir acceso completo a los conjuntos de datos de entrenamiento, validación y prueba, a la documentación técnica y, cuando sea necesario para evaluar la conformidad de un sistema de alto riesgo tras agotar otros procedimientos de prueba, se les concederá acceso al CÓDIGO FUENTE del sistema de IA previa solicitud motivada (Art. 74.13).',
        enterpriseConsequence:
          'Los contratos entre empresas españolas y proveedores tecnológicos deben garantizar que el proveedor colaborará ante requerimientos de auditoría técnica o código fuente por parte de la AESIA.',
        metricOrBadge: 'ACCESO A DATOS Y CÓDIGO FUENTE · Art. 74.12 y 74.13',
        citation: makeCitation({
          id: 'art_74.p13',
          targetType: 'paragraph',
          articleId: 'art_74',
          paragraphId: 'art_74.p13',
          displayLabel: 'Art. 74.12 y 74.13 · Reglamento (UE) 2024/1689',
          exactQuote:
            'Cuando sea necesario para evaluar la conformidad de un sistema de IA de alto riesgo con los requisitos establecidos en el capítulo III, sección 2, se concederá a las autoridades de vigilancia del mercado, previa solicitud motivada, acceso al código fuente del sistema de IA.',
        }),
      },
      {
        heading: 'Reformas Posteriores BOE / DOUE 2025–2026 (Reglamentos 2026/1744 y 2026/1755)',
        explanation:
          'El análisis consolidado del BOE para DOUE-L-2024-81079 recoge cuatro actualizaciones clave: (1) DOUE-L-2026-81147 (Reglamento 2026/1744, de 8 de julio de 2026, que añade los arts. 4 bis, 60 bis, 75 bis a 75 quinquies y el Anexo XIV); (2) DOUE-L-2026-81109 (Reglamento 2026/1755, de 20 de julio de 2026, dictado de conformidad con el Art. 92 sobre evaluaciones de modelos GPAI); y (3) las correcciones de errores DOUE-L-2025-81474 y DOUE-L-2026-80650.',
        enterpriseConsequence:
          'Los equipos de cumplimiento deben trabajar siempre sobre el texto consolidado con las disposiciones de ejecución de julio de 2026 sobre evaluaciones GPAI y asistencia mutua transfronteriza.',
        metricOrBadge: 'ACTUALIZADO BOE JULIO 2026 · Reg. 2026/1744 y 2026/1755',
        citation: makeCitation({
          id: 'boe_DOUE-L-2026-81147',
          targetType: 'boe_update',
          articleId: 'art_75',
          boeId: 'DOUE-L-2026-81147',
          displayLabel: 'DOUE-L-2026-81147 y DOUE-L-2026-81109 · BOE',
          exactQuote:
            'SE MODIFICA determinados preceptos y SE AÑADE los arts. 4bis, 60bis, 75bis, 75ter, 75quarter y 75quinquies y el anexo XIV, por Reglamento 2026/1744, de 8 de julio.',
        }),
      },
    ],
    citations: [
      makeCitation({
        id: 'art_57',
        targetType: 'article',
        articleId: 'art_57',
        displayLabel: 'Art. 57 · Espacios controlados de pruebas para la IA',
        exactQuote: 'Espacios controlados de pruebas para la IA.',
      }),
      makeCitation({
        id: 'art_70',
        targetType: 'article',
        articleId: 'art_70',
        displayLabel: 'Art. 70 · Designación de autoridades nacionales competentes',
        exactQuote: 'Designación de las autoridades nacionales competentes y de los puntos de contacto únicos.',
      }),
    ],
  },
];
