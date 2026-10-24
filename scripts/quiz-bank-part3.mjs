import { makeCitation } from './legal-enrichment-data.mjs';

// Preguntas de respuesta corta (fechas, cifras, artículos, roles) — anti-sesgo de longitud.
export const QUIZ_BANK_PART3 = [
  // =========================================================================
  // BLOQUE 1: ÁMBITO, DEFINICIONES, ALFABETIZACIÓN Y PROHIBICIONES (Arts. 1 a 5)
  // IDs: qz_223 a qz_238 (16 preguntas)
  // =========================================================================
  {
    id: 'qz_223',
    topicId: 'prohibited',
    topicLabel: 'Ámbito de Aplicación (Art. 2)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿A qué actividad excluye expresamente el artículo 2.6 del ámbito de aplicación del Reglamento?',
    options: [
      'A la investigación científica pura',
      'A la contratación laboral pública',
      'A la distribución de videojuegos',
      'A la gestión tributaria municipal',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 2.6 excluye expresamente del ámbito de aplicación del Reglamento a los sistemas o modelos de IA, incluidos sus resultados de salida, desarrollados y puestos en servicio específicamente con la investigación y el desarrollo científicos como única finalidad.',
    enterpriseLesson:
      'Los proyectos de I+D pura en laboratorios no requieren marcado CE ni cumplimiento previo del Reglamento hasta que se orienten al mercado.',
    citations: [
      makeCitation({
        id: 'art_2.p15',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p15',
        displayLabel: 'Art. 2.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          '6. El presente Reglamento no se aplicará a los sistemas o modelos de IA, incluidos sus resultados de salida, desarrollados y puestos en servicio específicamente con la investigación y el desarrollo científicos como única finalidad.',
      }),
    ],
  },
  {
    id: 'qz_224',
    topicId: 'high_risk',
    topicLabel: 'Definiciones Clave (Art. 3)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 3, punto 1, ¿qué elemento caracteriza a un sistema de IA frente al software tradicional?',
    options: [
      'Un alojamiento local obligatorio',
      'Diferentes niveles de autonomía',
      'Su codificación en código abierto',
      'Una arquitectura cliente-servidor',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 3, punto 1, define el sistema de IA como un sistema basado en una máquina diseñado para funcionar con distintos niveles de autonomía y capaz de inferir cómo generar salidas a partir de las entradas recibidas.',
    enterpriseLesson:
      'La autonomía en la inferencia es el elemento jurídico delimitador que distingue a la IA de los sistemas algorítmicos deterministas basados en reglas fijas.',
    citations: [
      makeCitation({
        id: 'art_3.p2',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p2',
        displayLabel: 'Art. 3, punto 1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1) «sistema de IA»: un sistema basado en una máquina que está diseñado para funcionar con distintos niveles de autonomía y que puede mostrar capacidad de adaptación tras el despliegue, y que, para objetivos explícitos o implícitos, infiere de la información de entrada que recibe el modo de generar resultados de salida tales como predicciones, contenidos, recomendaciones o decisiones que pueden influir en entornos físicos o virtuales;',
      }),
    ],
  },
  {
    id: 'qz_225',
    topicId: 'high_risk',
    topicLabel: 'Definiciones Clave (Art. 3)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 3, punto 3, ¿qué operador introduce en el mercado un sistema de IA con su propio nombre o marca?',
    options: [
      'El representante comercial',
      'El distribuidor autorizado',
      'El proveedor del software',
      'El usuario profesional final',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 3, punto 3, define al proveedor como toda persona física o jurídica, autoridad o entidad que desarrolla o encarga desarrollar un sistema de IA o GPAI y lo introduce en el mercado bajo su propio nombre o marca comercial.',
    enterpriseLesson:
      'Poner la marca comercial propia sobre un software de IA desarrollado por terceros traslada automáticamente toda la responsabilidad del rol de proveedor.',
    citations: [
      makeCitation({
        id: 'art_3.p4',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p4',
        displayLabel: 'Art. 3, punto 3 · Reglamento (UE) 2024/1689',
        exactQuote:
          '3) «proveedor»: una persona física o jurídica, autoridad pública, órgano u organismo que desarrolle un sistema de IA o un modelo de IA de uso general o que haga que se desarrolle un sistema de IA o un modelo de IA de uso general y lo introduzca en el mercado o ponga en servicio el sistema de IA con su propio nombre o marca comercial, ya sea a título oneroso o gratuito;',
      }),
    ],
  },
  {
    id: 'qz_226',
    topicId: 'high_risk',
    topicLabel: 'Definiciones Clave (Art. 3)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cómo define el artículo 3, punto 4, a la entidad que utiliza un sistema de IA bajo su propia autoridad?',
    options: [
      'Representante en el territorio',
      'Distribuidor comercial directo',
      'Organismo evaluador de control',
      'Responsable del despliegue',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 3, punto 4, define al responsable del despliegue como toda persona física o jurídica, autoridad u organismo que utilice un sistema de IA bajo su propia autoridad, salvo uso personal no profesional.',
    enterpriseLesson:
      'La empresa que implanta internamente una solución de IA para sus procesos asume el rol y las obligaciones del responsable del despliegue.',
    citations: [
      makeCitation({
        id: 'art_3.p5',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p5',
        displayLabel: 'Art. 3, punto 4 · Reglamento (UE) 2024/1689',
        exactQuote:
          '4) «responsable del despliegue»: una persona física o jurídica, o autoridad pública, órgano u organismo que utilice un sistema de IA bajo su propia autoridad, salvo si la utilización se realiza en el marco de una actividad personal de carácter no profesional;',
      }),
    ],
  },
  {
    id: 'qz_227',
    topicId: 'high_risk',
    topicLabel: 'Definiciones Clave (Art. 3)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Cómo denomina el artículo 3, punto 9, a la primera comercialización de un sistema de IA en el mercado de la Unión?',
    options: [
      'Introducción en el mercado',
      'Puesta en funcionamiento',
      'Despliegue operativo real',
      'Distribución comunitaria',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 3, punto 9, define la introducción en el mercado como la primera comercialización en el mercado de la Unión de un sistema de IA o de un modelo de IA de uso general.',
    enterpriseLesson:
      'El momento exacto de la primera introducción en el mercado activa el cómputo de los plazos de conformidad y registro de la documentación técnica.',
    citations: [
      makeCitation({
        id: 'art_3.p10',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p10',
        displayLabel: 'Art. 3, punto 9 · Reglamento (UE) 2024/1689',
        exactQuote:
          '9) «introducción en el mercado»: la primera comercialización en el mercado de la Unión de un sistema de IA o de un modelo de IA de uso general;',
      }),
    ],
  },
  {
    id: 'qz_228',
    topicId: 'high_risk',
    topicLabel: 'Definiciones Clave (Art. 3)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué concepto jurídico define el artículo 3, punto 11, como el suministro para su primer uso directamente al responsable del despliegue?',
    options: [
      'Comercialización inicial',
      'Puesta en servicio legal',
      'Retirada cautelar común',
      'Evaluación de seguridad',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 3, punto 11, define la «puesta en servicio» como el suministro de un sistema de IA para su primer uso directamente al responsable del despliegue o para uso propio en la Unión para su finalidad prevista.',
    enterpriseLesson:
      'El desarrollo interno de una IA para uso corporativo propio constituye una puesta en servicio sujeta a las exigencias regulatorias.',
    citations: [
      makeCitation({
        id: 'art_3.p12',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p12',
        displayLabel: 'Art. 3, punto 11 · Reglamento (UE) 2024/1689',
        exactQuote:
          '11) «puesta en servicio»: el suministro de un sistema de IA para su primer uso directamente al responsable del despliegue o para uso propio en la Unión para su finalidad prevista;',
      }),
    ],
  },
  {
    id: 'qz_229',
    topicId: 'gpai',
    topicLabel: 'Modelos de Uso General (Arts. 51-56)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué término define el artículo 3, punto 63, como un modelo que presenta una generalidad significativa y realiza competentemente una amplia gama de tareas?',
    options: [
      'Sistema de predicción numérica',
      'Agente biométrico autónomo',
      'Modelo de IA de uso general',
      'Software embebido de control',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 3, punto 63, define el modelo de IA de uso general (GPAI) por su generalidad significativa y capacidad para realizar competentemente una amplia gama de tareas distintas e integrarse en sistemas posteriores.',
    enterpriseLesson:
      'Los modelos base caen en la categoría GPAI y deben suministrar documentación técnica a los integradores posteriores.',
    citations: [
      makeCitation({
        id: 'art_3.p75',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p75',
        displayLabel: 'Art. 3, punto 63 · Reglamento (UE) 2024/1689',
        exactQuote:
          '63) «modelo de IA de uso general»: un modelo de IA, también uno entrenado con un gran volumen de datos utilizando autosupervisión a gran escala, que presenta una generalidad significativa y es capaz de realizar competentemente una amplia gama de tareas distintas con independencia de la forma en que se introduzca en el mercado el modelo y que se puede integrar en una serie de sistemas o aplicaciones posteriores, a excepción de los modelos de IA que se utilizan para actividades de investigación, desarrollo o creación de prototipos antes de su introducción en el mercado;',
      }),
    ],
  },
  {
    id: 'qz_230',
    topicId: 'enterprise_cases',
    topicLabel: 'Alfabetización en IA (Art. 4)',
    articleId: 'art_4',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Conforme al artículo 4, ¿a quiénes deben garantizar un nivel suficiente de alfabetización en IA los proveedores y desplegadores?',
    options: [
      'A los clientes comerciales',
      'A los auditores externos',
      'A los accionistas del grupo',
      'A su personal y operadores',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 4 obliga a los proveedores y responsables del despliegue a garantizar que su personal y quienes operen sistemas de IA en su nombre cuenten con un nivel suficiente de alfabetización técnica.',
    enterpriseLesson:
      'La empresa debe incluir planes formativos periódicos en IA en sus políticas de recursos humanos y cumplimiento normativo.',
    citations: [
      makeCitation({
        id: 'art_4.p1',
        targetType: 'paragraph',
        articleId: 'art_4',
        paragraphId: 'art_4.p1',
        displayLabel: 'Art. 4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores y responsables del despliegue de sistemas de IA adoptarán medidas para garantizar que, en la mayor medida posible, su personal y demás personas encargadas del funcionamiento y la utilización de los sistemas de IA en su nombre cuenten con un nivel suficiente de alfabetización en materia de IA, teniendo en cuenta sus conocimientos técnicos, su experiencia, su educación y su formación, y el contexto en el que se van a utilizar los sistemas de IA, y considerando las personas o grupos de personas sobre los que se van a utilizar los sistemas de IA.',
      }),
    ],
  },
  {
    id: 'qz_231',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una app deportiva usa impulsos inaudibles para inducir al usuario a un sobreesfuerzo que provoca un infarto. ¿Qué letra del artículo 5.1 prohíbe esta práctica?',
    options: [
      'Artículo 5.1, letra a)',
      'Artículo 5.1, letra c)',
      'Artículo 5.1, letra e)',
      'Artículo 5.1, letra g)',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 5.1, letra a), prohíbe los sistemas de IA que empleen técnicas subliminales que trasciendan la conciencia o técnicas engañosas para distorsionar sustancialmente el comportamiento provocando perjuicio grave.',
    enterpriseLesson:
      'El uso de estímulos no conscientes o engañosos para modificar conductas supone una infracción máxima castigada con multas de hasta 35 M€ o el 7 % del volumen de negocio mundial.',
    citations: [
      makeCitation({
        id: 'art_5.p2',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p2',
        displayLabel: 'Art. 5.1(a) · Reglamento (UE) 2024/1689',
        exactQuote:
          'a) la introducción en el mercado, la puesta en servicio o la utilización de un sistema de IA que se sirva de técnicas subliminales que trasciendan la conciencia de una persona o de técnicas deliberadamente manipuladoras o engañosas con el objetivo o el efecto de distorsionar sustancialmente el comportamiento de una persona o de un colectivo de personas mermando de manera apreciable su capacidad para tomar una decisión con el conocimiento de causa necesario...',
      }),
    ],
  },
  {
    id: 'qz_232',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 5.1, letra b), ¿qué factor de vulnerabilidad personal está expresamente tipificado junto a la edad y la discapacidad?',
    options: [
      'El historial bancario de pagos',
      'La situación social o económica',
      'El nivel de titulación escolar',
      'La residencia en zonas rurales',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 5.1, letra b), prohíbe explotar vulnerabilidades debidas a la edad, la discapacidad o una situación social o económica concreta para alterar de forma apreciable el comportamiento provocando daños graves.',
    enterpriseLesson:
      'Las soluciones de IA dirigidas a colectivos vulnerables o en precariedad económica deben someterse a revisiones estrictas para descartar patrones abusivos.',
    citations: [
      makeCitation({
        id: 'art_5.p3',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p3',
        displayLabel: 'Art. 5.1(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) la introducción en el mercado, la puesta en servicio o la utilización de un sistema de IA que explote alguna de las vulnerabilidades de una persona física o de un colectivo concreto de personas debidas a su edad, discapacidad o a una situación social o económica específica, con el objetivo o el efecto de distorsionar sustancialmente el comportamiento de esa persona o de una persona que pertenezca a dicho colectivo...',
      }),
    ],
  },
  {
    id: 'qz_233',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Qué práctica prohíbe taxativamente el artículo 5.1, letra c), tanto a entidades públicas como a actores privados en la Unión?',
    options: [
      'Auditoría comercial anual',
      'Publicidad comportamental',
      'Puntuación social ciudadana',
      'Evaluación laboral interna',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 5.1, letra c), prohíbe evaluar o clasificar a personas en función de su comportamiento social o personalidad durante un tiempo determinado («puntuación social»).',
    enterpriseLesson:
      'Está tajantemente prohibido implantar sistemas de reputación social que produzcan tratos desfavorables desproporcionados o fuera del contexto original.',
    citations: [
      makeCitation({
        id: 'art_5.p4',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p4',
        displayLabel: 'Art. 5.1(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) la introducción en el mercado, la puesta en servicio o la utilización de sistemas de IA para evaluar o clasificar a personas físicas o a colectivos de personas durante un período de tiempo determinado en función de su comportamiento social o de características personales o de su personalidad conocidas, inferidas o predichas (en lo sucesivo, «puntuación social»)...',
      }),
    ],
  },
  {
    id: 'qz_234',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Conforme al artículo 5.1, letra d), ¿en qué circunstancia queda prohibido evaluar el riesgo individual de comisión de un delito?',
    options: [
      'Si usa bases de datos abiertas',
      'Si analiza delitos tributarios',
      'Si interviene un agente policial',
      'Si se basa solo en perfiles de IA',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 5.1, letra d), prohíbe evaluar el riesgo de que una persona física cometa un delito basándose únicamente en la elaboración de perfiles o características de la personalidad.',
    enterpriseLesson:
      'Los algoritmos de seguridad privada nunca pueden imputar sospechas criminales basadas en meros perfiles probabilísticos desvinculados de hechos objetivos.',
    citations: [
      makeCitation({
        id: 'art_5.p7',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p7',
        displayLabel: 'Art. 5.1(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'd) la introducción en el mercado, la puesta en servicio para este fin específico o el uso de un sistema de IA para realizar evaluaciones de riesgos de personas físicas con el fin de valorar o predecir la probabilidad de que cometan un delito, basadas únicamente en la elaboración de perfiles de una persona física o en la evaluación de los rasgos y características de la personalidad...',
      }),
    ],
  },
  {
    id: 'qz_235',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué método de alimentación de bases de datos de reconocimiento facial prohíbe el artículo 5.1, letra e)?',
    options: [
      'El raspado no selectivo de fotos',
      'El registro civil descentralizado',
      'El control en aduanas y fronteras',
      'La expedición de visados de viaje',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 5.1, letra e), prohíbe crear o ampliar bases de datos de reconocimiento facial mediante el raspado no selectivo de imágenes faciales de internet o circuitos cerrados de televisión.',
    enterpriseLesson:
      'Comprar o alimentar modelos con datasets extraídos mediante web scraping masivo de fotos personales de redes sociales constituye una práctica prohibida de riesgo inaceptable.',
    citations: [
      makeCitation({
        id: 'art_5.p8',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p8',
        displayLabel: 'Art. 5.1(e) · Reglamento (UE) 2024/1689',
        exactQuote:
          'e) la introducción en el mercado, la puesta en servicio para este fin específico o el uso de sistemas de IA que creen o amplíen bases de datos de reconocimiento facial mediante el raspado no selectivo de imágenes faciales de internet o de circuitos cerrados de televisión;',
      }),
    ],
  },
  {
    id: 'qz_236',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿En qué entornos prohíbe el artículo 5.1, letra f), el uso de sistemas de IA para inferir emociones, salvo motivos médicos o de seguridad?',
    options: [
      'En cines y teatros públicos',
      'En el trabajo y la educación',
      'En hoteles y centros termales',
      'En comercios y supermercados',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 5.1, letra f), prohíbe inferir emociones de una persona física en los lugares de trabajo y en las instituciones educativas, salvo motivos médicos o de seguridad previstos.',
    enterpriseLesson:
      'Los departamentos de recursos humanos no pueden utilizar software con IA para medir el cansancio, enfado o estado emocional de los trabajadores.',
    citations: [
      makeCitation({
        id: 'art_5.p9',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p9',
        displayLabel: 'Art. 5.1(f) · Reglamento (UE) 2024/1689',
        exactQuote:
          'f) la introducción en el mercado, la puesta en servicio para este fin específico o el uso de sistemas de IA para inferir las emociones de una persona física en los lugares de trabajo y en las instituciones educativas, excepto si el uso del sistema de IA está previsto por motivos médicos o de seguridad;',
      }),
    ],
  },
  {
    id: 'qz_237',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Qué operación con datos biométricos adquiridos legítimamente exceptúa de prohibición el artículo 5.1, letra g)?',
    options: [
      'La venta con fines publicitarios',
      'El cálculo de tarifas bancarias',
      'El filtrado o etiquetado lícito',
      'El control de acceso comercial',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 5.1, letra g), prohíbe la categorización biométrica para inferir raza, opiniones políticas o convicciones, pero aclara que no afecta al filtrado o etiquetado lícito de datos biométricos adquiridos legítimamente.',
    enterpriseLesson:
      'El etiquetado técnico de imágenes en investigaciones judiciales legítimas es lícito; clasificar ideológica o sexualmente a usuarios mediante biometría está prohibido.',
    citations: [
      makeCitation({
        id: 'art_5.p10',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p10',
        displayLabel: 'Art. 5.1(g) · Reglamento (UE) 2024/1689',
        exactQuote:
          'g) la introducción en el mercado, la puesta en servicio para este fin específico o el uso de sistemas de categorización biométrica que clasifiquen individualmente a personas físicas sobre la base de sus datos biométricos para deducir o inferir su raza, opiniones políticas, afiliación sindical, convicciones religiosas o filosóficas, vida sexual u orientación sexual; esta prohibición no se aplica a ningún etiquetado o filtrado lícito de conjuntos de datos biométricos adquiridos legítimamente...',
      }),
    ],
  },
  {
    id: 'qz_238',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 5.1, letra h), ¿dónde está prohibido el uso policial de identificación biométrica remota en tiempo real salvo excepciones tasadas?',
    options: [
      'En recintos consulares del país',
      'En sedes de partidos políticos',
      'En oficinas bancarias privadas',
      'En espacios de acceso público',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 5.1, letra h), prohíbe el uso policial de sistemas de identificación biométrica remota «en tiempo real» en espacios de acceso público, salvo excepciones tasadas sujetas a autorización judicial previa.',
    enterpriseLesson:
      'Las empresas privadas que gestionan espacios públicos no pueden realizar escaneo facial en tiempo real para las fuerzas de seguridad sin habilitación judicial expresa.',
    citations: [
      makeCitation({
        id: 'art_5.p11',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p11',
        displayLabel: 'Art. 5.1(h) · Reglamento (UE) 2024/1689',
        exactQuote:
          'h) el uso de sistemas de identificación biométrica remota «en tiempo real» en espacios de acceso público con fines de garantía del cumplimiento del Derecho, salvo y en la medida en que dicho uso sea estrictamente necesario para uno de los siguientes objetivos...',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE 2: SISTEMAS DE ALTO RIESGO, REQUISITOS Y OBLIGACIONES (Arts. 6 a 49)
  // IDs: qz_239 a qz_255 (17 preguntas)
  // =========================================================================
  {
    id: 'qz_239',
    topicId: 'high_risk',
    topicLabel: 'Clasificación de Alto Riesgo (Art. 6)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Conforme al artículo 6.1, ¿a qué anexo del Reglamento remite la clasificación de alto riesgo de productos sujetos a legislación armonizada de la Unión?',
    options: [
      'Al Anexo I del texto europeo',
      'Al Anexo III del texto común',
      'Al Anexo V del marco general',
      'Al Anexo VII de la directiva',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 6.1 clasifica como alto riesgo los sistemas de IA destinados a ser componentes de seguridad de productos regulados por los actos legislativos de armonización de la Unión enumerados en el Anexo I.',
    enterpriseLesson:
      'Los fabricantes de maquinaria industrial o productos sanitarios que integren IA deben coordinar el marcado CE del producto con las exigencias del Anexo I del Reglamento de IA.',
    citations: [
      makeCitation({
        id: 'art_6.p1',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p1',
        displayLabel: 'Art. 6.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Con independencia de si se ha introducido en el mercado o se ha puesto en servicio sin estar integrado en los productos que se mencionan en las letras a) y b) de este apartado, un sistema de IA se considerará de alto riesgo cuando se cumplan las dos condiciones siguientes: a) que el sistema de IA esté destinado a ser utilizado como componente de seguridad de un producto, o que el propio sistema de IA sea un producto, regulado por los actos legislativos de armonización de la Unión que se enumeran en el anexo I...',
      }),
    ],
  },
  {
    id: 'qz_240',
    topicId: 'high_risk',
    topicLabel: 'Clasificación de Alto Riesgo (Art. 6)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Qué anexo del Reglamento enumera las 8 áreas específicas de sistemas de IA de alto riesgo que no dependen de la legislación sectorial de productos?',
    options: [
      'Anexo II del Reglamento',
      'Anexo III del Reglamento',
      'Anexo IV del Reglamento',
      'Anexo VI del Reglamento',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 6.2 remite al Anexo III, que lista los 8 ámbitos autónomos de alto riesgo: biometría, infraestructuras críticas, educación, empleo, servicios esenciales, garantía del cumplimiento del Derecho, migración y justicia.',
    enterpriseLesson:
      'Cualquier software empresarial aplicado en recursos humanos, solvencia financiera o control de acceso laboral debe contrastarse frente a los supuestos del Anexo III.',
    citations: [
      makeCitation({
        id: 'art_6.p4',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p4',
        displayLabel: 'Art. 6.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. Además de los sistemas de IA de alto riesgo a que se refiere el apartado 1, los sistemas de IA a que se refiere el anexo III también se considerarán de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_241',
    topicId: 'high_risk',
    topicLabel: 'Clasificación de Alto Riesgo (Art. 6)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 6.3, ¿cuándo NO se considerará de alto riesgo un sistema comprendido en el Anexo III?',
    options: [
      'Si su código es de libre acceso',
      'Si opera con microprocesadores',
      'Si no plantea riesgo relevante',
      'Si factura menos de diez mil €',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 6.3 introduce una excepción: un sistema del Anexo III no es de alto riesgo si no plantea un riesgo significativo de daño para la salud, la seguridad o los derechos fundamentales.',
    enterpriseLesson:
      'Para acogerse a la excepción del Art. 6.3, el proveedor debe documentar formalmente su evaluación de riesgo antes de introducir el sistema en el mercado.',
    citations: [
      makeCitation({
        id: 'art_6.p5',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p5',
        displayLabel: 'Art. 6.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          '3. No obstante lo dispuesto en el apartado 2, un sistema de IA a que se refiere el anexo III no se considerará de alto riesgo cuando no plantee un riesgo significativo de daño para la salud, la seguridad o los derechos fundamentales de las personas físicas...',
      }),
    ],
  },
  {
    id: 'qz_242',
    topicId: 'high_risk',
    topicLabel: 'Gestión de Riesgos (Art. 9)',
    articleId: 'art_9',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 9.2, ¿cómo debe entenderse y ejecutarse el sistema de gestión de riesgos de una IA de alto riesgo?',
    options: [
      'Como una auditoría puntual única',
      'Como un trámite formal semestral',
      'Como un ensayo técnico de ventas',
      'Como un proceso iterativo continuo',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 9.2 define el sistema de gestión de riesgos como un proceso iterativo continuo planificado y ejecutado a lo largo de todo el ciclo de vida del sistema de IA de alto riesgo.',
    enterpriseLesson:
      'La gestión de riesgos de IA no concluye con la comercialización; exige monitorización constante durante la fase operativa poscomercialización.',
    citations: [
      makeCitation({
        id: 'art_9.p2',
        targetType: 'paragraph',
        articleId: 'art_9',
        paragraphId: 'art_9.p2',
        displayLabel: 'Art. 9.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. El sistema de gestión de riesgos se entenderá como un proceso iterativo continuo planificado y ejecutado a lo largo de todo el ciclo de vida de un sistema de IA de alto riesgo, que requiere una actualización periódica periódica y sistemática.',
      }),
    ],
  },
  {
    id: 'qz_243',
    topicId: 'high_risk',
    topicLabel: 'Gobernanza de Datos (Art. 10)',
    articleId: 'art_10',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Conforme al artículo 10.2, letra g), ¿qué medida deben incluir las prácticas de gobernanza de datos para sistemas de alto riesgo?',
    options: [
      'Detectar y mitigar los sesgos',
      'Monetizar las bases de datos',
      'Cifrar de forma cuántica todo',
      'Suprimir los datos históricos',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 10.2, letra g), exige medidas adecuadas para detectar, prevenir y mitigar posibles sesgos en los conjuntos de datos utilizados para entrenamiento, validación y prueba.',
    enterpriseLesson:
      'Las empresas deben auditar los datos de entrenamiento para evitar discriminaciones indirectas contrarias a la normativa comunitaria.',
    citations: [
      makeCitation({
        id: 'art_10.p9',
        targetType: 'paragraph',
        articleId: 'art_10',
        paragraphId: 'art_10.p9',
        displayLabel: 'Art. 10.2(g) · Reglamento (UE) 2024/1689',
        exactQuote:
          'g) medidas adecuadas para detectar, prevenir y mitigar posibles sesgos detectados con arreglo a la letra f);',
      }),
    ],
  },
  {
    id: 'qz_244',
    topicId: 'deadlines',
    topicLabel: 'Documentación Técnica (Art. 18)',
    articleId: 'art_18',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Durante cuántos años debe el proveedor conservar la documentación técnica a disposición de las autoridades según el artículo 18.1?',
    options: [
      'Durante cuatro años',
      'Durante diez años',
      'Durante ocho años',
      'Durante doce años',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 18.1 impone al proveedor la obligación de mantener a disposición de las autoridades nacionales competentes la documentación técnica durante un período de diez años tras la introducción en el mercado o puesta en servicio.',
    enterpriseLesson:
      'La custodia digital y el archivo seguro de la documentación técnica y versiones del modelo deben planificarse con un horizonte mínimo de una década.',
    citations: [
      makeCitation({
        id: 'art_18.p1',
        targetType: 'paragraph',
        articleId: 'art_18',
        paragraphId: 'art_18.p1',
        displayLabel: 'Art. 18.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Durante un período de diez años a contar desde la introducción en el mercado o la puesta en servicio del sistema de IA de alto riesgo, el proveedor mantendrá a disposición de las autoridades nacionales competentes: a) la documentación técnica a que se refiere el artículo 11...',
      }),
    ],
  },
  {
    id: 'qz_245',
    topicId: 'deadlines',
    topicLabel: 'Registro de Eventos y Logs (Art. 19)',
    articleId: 'art_19',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Conforme al artículo 19.1, ¿cuál es el plazo mínimo de conservación de los registros automáticos (logs) bajo control del proveedor?',
    options: [
      'Al menos tres meses',
      'Al menos doce meses',
      'Al menos seis meses',
      'Al menos nueve meses',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 19.1 establece que los archivos de registro bajo control del proveedor se conservarán durante un período adecuado para la finalidad prevista, de al menos seis meses.',
    enterpriseLesson:
      'Las políticas de retención de registros de auditoría y logs de infraestructura deben prever una retención mínima inalterable de seis meses.',
    citations: [
      makeCitation({
        id: 'art_19.p1',
        targetType: 'paragraph',
        articleId: 'art_19',
        paragraphId: 'art_19.p1',
        displayLabel: 'Art. 19.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Los proveedores de sistemas de IA de alto riesgo conservarán los archivos de registro a que se refiere el artículo 12, apartado 1, que los sistemas de IA de alto riesgo generen automáticamente en la medida en que dichos archivos estén bajo su control. Sin perjuicio del Derecho aplicable de la Unión o nacional, los archivos de registro se conservarán durante un período de tiempo adecuado para la finalidad prevista del sistema de IA de alto riesgo, de al menos seis meses...',
      }),
    ],
  },
  {
    id: 'qz_246',
    topicId: 'high_risk',
    topicLabel: 'Transparencia e Instrucciones de Uso (Art. 13)',
    articleId: 'art_13',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Qué documento técnico obligatorio debe acompañar a todo sistema de IA de alto riesgo según el artículo 13.2?',
    options: [
      'Un contrato de garantía civil',
      'Una póliza de seguro previa',
      'Un folleto de venta comercial',
      'Las instrucciones de uso claras',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 13.2 exige que los sistemas de IA de alto riesgo vayan acompañados de las correspondientes instrucciones de uso con información clara, concisa y accesible para los desplegadores.',
    enterpriseLesson:
      'Las instrucciones de uso no son meros manuales de usuario; son un requisito legal de conformidad que delimita la responsabilidad del proveedor.',
    citations: [
      makeCitation({
        id: 'art_13.p2',
        targetType: 'paragraph',
        articleId: 'art_13',
        paragraphId: 'art_13.p2',
        displayLabel: 'Art. 13.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. Los sistemas de IA de alto riesgo irán acompañados de las instrucciones de uso correspondientes en un formato digital o de otro tipo adecuado que incluyan información concisa, completa, correcta y clara que sea pertinente, accesible y comprensible para los responsables del despliegue.',
      }),
    ],
  },
  {
    id: 'qz_247',
    topicId: 'high_risk',
    topicLabel: 'Supervisión Humana (Art. 14)',
    articleId: 'art_14',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 14.4, letra e), ¿qué mecanismo operativo debe permitir la supervisión humana de un sistema de alto riesgo?',
    options: [
      'Pulsar un botón de parada',
      'Emitir un recibo contable',
      'Validar la clave de acceso',
      'Fijar el precio del abono',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 14.4, letra e), exige que la supervisión humana permita intervenir o interrumpir el sistema de IA pulsando un botón de parada o mediante un procedimiento equivalente de parada segura.',
    enterpriseLesson:
      'Todo diseño de interfaz de IA de alto riesgo debe incluir controles de interrupción inmediata (human-in-the-loop / kill switch) operativos y accesibles.',
    citations: [
      makeCitation({
        id: 'art_14.p11',
        targetType: 'paragraph',
        articleId: 'art_14',
        paragraphId: 'art_14.p11',
        displayLabel: 'Art. 14.4(e) · Reglamento (UE) 2024/1689',
        exactQuote:
          'e) intervenir en el funcionamiento del sistema de IA de alto riesgo o interrumpir el sistema pulsando un botón de parada o mediante un procedimiento similar que permita que el sistema se detenga de forma segura.',
      }),
    ],
  },
  {
    id: 'qz_248',
    topicId: 'high_risk',
    topicLabel: 'Precisión y Ciberseguridad (Art. 15)',
    articleId: 'art_15',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Conforme al artículo 15.5, ¿frente a qué ciberataque específico de IA deben protegerse especialmente los sistemas de alto riesgo?',
    options: [
      'La saturación de peticiones DNS',
      'El envenenamiento de los datos',
      'El robo físico de discos duros',
      'La caída del suministro térmico',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 15.5 prescribe medidas técnicas específicas para prevenir y controlar los ataques dirigidos a manipular los datos de entrenamiento («envenenamiento de datos»).',
    enterpriseLesson:
      'La ciberseguridad en IA abarca la integridad criptográfica y trazabilidad del pipeline de datos frente a ataques adversarios.',
    citations: [
      makeCitation({
        id: 'art_15.p9',
        targetType: 'paragraph',
        articleId: 'art_15',
        paragraphId: 'art_15.p9',
        displayLabel: 'Art. 15.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Entre las soluciones técnicas destinadas a subsanar vulnerabilidades específicas de la IA figurarán, según corresponda, medidas para prevenir, detectar, responder, resolver y controlar ataques dirigidos a manipular el conjunto de datos de entrenamiento («envenenamiento de datos»)...',
      }),
    ],
  },
  {
    id: 'qz_249',
    topicId: 'high_risk',
    topicLabel: 'Obligaciones del Proveedor (Art. 16)',
    articleId: 'art_16',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿A qué operador impone el artículo 16 la obligación de elaborar la documentación técnica y someter el sistema a evaluación de la conformidad?',
    options: [
      'Al distribuidor final',
      'Al usuario consumidor',
      'Al proveedor del bien',
      'Al organismo aduanero',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 16 impone al proveedor la responsabilidad primaria de asegurar el cumplimiento de los requisitos del sistema, elaborar la documentación técnica y someterlo a evaluación de conformidad.',
    enterpriseLesson:
      'El proveedor es el garante legal de la conformidad del sistema antes de su introducción en el mercado o puesta en servicio.',
    citations: [
      makeCitation({
        id: 'art_16.p1',
        targetType: 'paragraph',
        articleId: 'art_16',
        paragraphId: 'art_16.p1',
        displayLabel: 'Art. 16 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores de sistemas de IA de alto riesgo: a) garantizarán que sus sistemas de IA de alto riesgo cumplan los requisitos establecidos en la sección 2; b) indicarán en el sistema de IA de alto riesgo o, cuando no sea posible, en su embalaje o en los documentos que lo acompañen, según proceda, su nombre, su nombre comercial registrado o marca registrada, y su dirección de contacto...',
      }),
    ],
  },
  {
    id: 'qz_250',
    topicId: 'high_risk',
    topicLabel: 'Modificación Sustancial (Art. 25)',
    articleId: 'art_25',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué hecho convierte a un distribuidor, importador o desplegador en proveedor ex artículo 25.1?',
    options: [
      'Traducir las instrucciones de uso',
      'Renovar la licencia anual de uso',
      'Reinstalar el antivirus de fábrica',
      'Introducir modificación sustancial',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 25.1 dispone que cualquier distribuidor, importador o desplegador será considerado proveedor si introduce una modificación sustancial en un sistema de IA de alto riesgo.',
    enterpriseLesson:
      'Modificar la arquitectura o finalidad de un sistema de IA de terceros puede acarrear asumir todas las obligaciones del proveedor original.',
    citations: [
      makeCitation({
        id: 'art_25.p1',
        targetType: 'paragraph',
        articleId: 'art_25',
        paragraphId: 'art_25.p1',
        displayLabel: 'Art. 25.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Cualquier distribuidor, importador, responsable del despliegue o tercero será considerado proveedor de un sistema de IA de alto riesgo a los efectos del presente Reglamento y estará sujeto a las obligaciones que corresponden a dicho proveedor en virtud del artículo 16 en cualquiera de las siguientes circunstancias: ... b) cuando introduzcan una modificación sustancial en un sistema de IA de alto riesgo...',
      }),
    ],
  },
  {
    id: 'qz_251',
    topicId: 'deadlines',
    topicLabel: 'Conservación de Logs por Desplegador (Art. 26)',
    articleId: 'art_26',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 26.6, ¿durante qué plazo mínimo debe el desplegador conservar los registros generados automáticamente por su IA de alto riesgo?',
    options: [
      'Al menos seis meses',
      'Al menos diez meses',
      'Al menos ocho meses',
      'Al menos doce meses',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 26.6 establece que los responsables del despliegue conservarán los archivos de registro generados automáticamente bajo su control durante un período de al menos seis meses.',
    enterpriseLesson:
      'Las empresas usuarias de IA de alto riesgo deben configurar sus bases de datos para retener logs operativos durante un semestre como mínimo.',
    citations: [
      makeCitation({
        id: 'art_26.p7',
        targetType: 'paragraph',
        articleId: 'art_26',
        paragraphId: 'art_26.p7',
        displayLabel: 'Art. 26.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          '6. Los responsables del despliegue de sistemas de IA de alto riesgo conservarán los archivos de registro que los sistemas de IA de alto riesgo generen automáticamente en la medida en que dichos archivos estén bajo su control, durante un período de tiempo adecuado para la finalidad prevista del sistema de IA de alto riesgo, de al menos seis meses, salvo que se disponga otra cosa en el Derecho de la Unión o nacional aplicable, en particular en el Derecho de la Unión en materia de protección de datos personales.',
      }),
    ],
  },
  {
    id: 'qz_252',
    topicId: 'enterprise_cases',
    topicLabel: 'Evaluación de Impacto FRIA (Art. 27)',
    articleId: 'art_27',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un banco privado despliega una IA para calificar la solvencia crediticia de clientes. ¿Qué obligación previa le impone el artículo 27.1?',
    options: [
      'Hacer auditoría fiscal del código',
      'Hacer evaluación de impacto FRIA',
      'Pedir licencia bancaria especial',
      'Pagar un canon a la Comisión UE',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 27.1 exige a los desplegadores de sistemas de IA del Anexo III, punto 5(b) (solvencia crediticia) realizar una evaluación del impacto en los derechos fundamentales (FRIA) antes del despliegue.',
    enterpriseLesson:
      'Las entidades financieras que evalúan solvencia con IA deben documentar previamente el impacto sobre no discriminación y derechos de los clientes.',
    citations: [
      makeCitation({
        id: 'art_27.p1',
        targetType: 'paragraph',
        articleId: 'art_27',
        paragraphId: 'art_27.p1',
        displayLabel: 'Art. 27.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Antes de desplegar uno de los sistemas de IA de alto riesgo a que se refiere el artículo 6, apartado 2, con excepción de los sistemas de IA de alto riesgo destinados a ser utilizados en el ámbito enumerado en el anexo III, punto 2, los responsables del despliegue que sean organismos de Derecho público, o entidades privadas que prestan servicios públicos, y los responsable del despliegue de sistemas de IA de alto riesgo a que se refiere el anexo III, punto 5, letras b) y c), llevarán a cabo una evaluación del impacto que la utilización de dichos sistemas puede tener en los derechos fundamentales.',
      }),
    ],
  },
  {
    id: 'qz_253',
    topicId: 'high_risk',
    topicLabel: 'Evaluación de Conformidad (Art. 43)',
    articleId: 'art_43',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Para sistemas de IA de alto riesgo del Anexo III, ¿cuál es el procedimiento general de evaluación de la conformidad previsto en el artículo 43.1?',
    options: [
      'Arbitraje judicial europeo',
      'Visado consular de aduanas',
      'El control interno Anexo VI',
      'Examen de patentes en OMPI',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 43.1 establece que, para los sistemas del Anexo III, el proveedor optará habitualmente por el procedimiento basado en el control interno a que se refiere el Anexo VI.',
    enterpriseLesson:
      'En la gran mayoría de sistemas de IA de alto riesgo no biométricos, la evaluación de conformidad puede realizarse internamente sin organismo notificado externo.',
    citations: [
      makeCitation({
        id: 'art_43.p1',
        targetType: 'paragraph',
        articleId: 'art_43',
        paragraphId: 'art_43.p1',
        displayLabel: 'Art. 43.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. En el caso de los sistemas de IA de alto riesgo enumerados en el anexo III, punto 1, cuando, al demostrar el cumplimiento de los requisitos establecidos en la sección 2 por parte de un sistema de IA de alto riesgo, el proveedor haya aplicado las normas armonizadas a que se refiere el artículo 40... el proveedor optará por uno de los procedimientos siguientes: a) el fundamentado en el control interno, mencionado en el anexo VI...',
      }),
    ],
  },
  {
    id: 'qz_254',
    topicId: 'high_risk',
    topicLabel: 'Marcado CE de Conformidad (Art. 48)',
    articleId: 'art_48',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 48.3, ¿de qué tres maneras debe colocarse el marcado CE en los sistemas de IA de alto riesgo?',
    options: [
      'Temporal, cifrada y discreta',
      'Parcial, rotativa y codificada',
      'Externa, protegida y opcional',
      'Visible, legible e indeleble',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 48.3 exige que el marcado CE se coloque de manera visible, legible e indeleble en los sistemas de IA de alto riesgo, su embalaje o documentación.',
    enterpriseLesson:
      'El marcado CE digital o físico es indispensable para la libre comercialización en los 27 Estados miembros de la UE.',
    citations: [
      makeCitation({
        id: 'art_48.p3',
        targetType: 'paragraph',
        articleId: 'art_48',
        paragraphId: 'art_48.p3',
        displayLabel: 'Art. 48.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          '3. El marcado CE se colocará de manera visible, legible e indeleble en los sistemas de IA de alto riesgo. Cuando esto no sea posible o no pueda garantizarse debido a la naturaleza del sistema de IA de alto riesgo, se colocará en el embalaje o en los documentos que lo acompañen, según proceda.',
      }),
    ],
  },
  {
    id: 'qz_255',
    topicId: 'high_risk',
    topicLabel: 'Registro en Base de Datos UE (Art. 49)',
    articleId: 'art_49',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Antes de comercializar o poner en servicio un sistema de alto riesgo del Anexo III, ¿en qué registro debe inscribirlo el proveedor ex artículo 49.1?',
    options: [
      'En la base de datos de la UE',
      'En el registro fiscal estatal',
      'En la cámara mercantil local',
      'En el boletín oficial del país',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 49.1 exige registrarse y registrar el sistema de IA de alto riesgo en la base de datos central de la UE antes de su introducción en el mercado o puesta en servicio.',
    enterpriseLesson:
      'El alta en la base de datos pública europea de la Comisión es una condición previa de legalidad ineludible para operar en la Unión.',
    citations: [
      makeCitation({
        id: 'art_49.p1',
        targetType: 'paragraph',
        articleId: 'art_49',
        paragraphId: 'art_49.p1',
        displayLabel: 'Art. 49.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Antes de introducir en el mercado o de poner en servicio un sistema de IA de alto riesgo enumerado en el anexo III, con excepción de los sistemas de IA de alto riesgo a que se refiere el anexo III, punto 2, el proveedor o, en su caso, el representante autorizado se registrará a sí mismo y registrará su sistema en la base de datos de la UE a que se refiere el artículo 71.',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE 3: OBLIGACIONES DE TRANSPARENCIA ESPECÍFICA (Art. 50)
  // IDs: qz_256 a qz_258 (3 preguntas)
  // =========================================================================
  {
    id: 'qz_256',
    topicId: 'transparency',
    topicLabel: 'Transparencia de Chatbots (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 50.1, ¿qué deber tienen los proveedores de sistemas de IA destinados a interactuar con personas físicas como chatbots?',
    options: [
      'Cobrar una tasa de conexión',
      'Informar de que es una IA',
      'Exigir el DNI para chatear',
      'Grabar el audio de llamada',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 50.1 obliga a diseñar los sistemas de interacción directa (chatbots) para informar a las personas de que interactúan con una IA, salvo que resulte obvio por el contexto.',
    enterpriseLesson:
      'Cualquier agente conversacional de atención al cliente web debe avisar explícitamente desde el primer mensaje de su naturaleza artificial.',
    citations: [
      makeCitation({
        id: 'art_50.p1',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p1',
        displayLabel: 'Art. 50.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Los proveedores garantizarán que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de forma que se informe a las personas físicas correspondientes de que están interactuando con un sistema de IA, a menos que esto resulte obvio a partir del punto de vista de una persona física razonablemente bien informada, observadora y perspicaz, teniendo en cuenta las circunstancias y el contexto de uso.',
      }),
    ],
  },
  {
    id: 'qz_257',
    topicId: 'transparency',
    topicLabel: 'Marcado de Contenido Sintético (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Conforme al artículo 50.2, ¿cómo deben marcar los proveedores los contenidos sintéticos de audio, imagen, vídeo o texto generados por IA?',
    options: [
      'Con firma manuscrita digital',
      'Con una marca de agua visible',
      'En formato legible por máquina',
      'En un archivo comprimido ZIP',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 50.2 prescribe que los contenidos generados o manipulados por IA deben marcarse en un formato legible por máquina y ser detectables como tales.',
    enterpriseLesson:
      'Los generadores de contenido y herramientas de IA generativa deben integrar metadatos técnicos y marcas de agua invisibles detectables.',
    citations: [
      makeCitation({
        id: 'art_50.p2',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p2',
        displayLabel: 'Art. 50.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. Los proveedores de sistemas de IA, entre los que se incluyen los sistemas de IA de uso general, que generen contenido sintético de audio, imagen, vídeo o texto garantizarán que los resultados del sistema de IA estén marcados en un formato legible por máquina y sean detectables como generados o manipulados artificialmente.',
      }),
    ],
  },
  {
    id: 'qz_258',
    topicId: 'transparency',
    topicLabel: 'Transparencia de Deepfakes (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué deber impone el artículo 50.4 a los desplegadores que generen o manipulen contenidos que constituyan una ultrafalsificación (deepfake)?',
    options: [
      'Pagar un tributo a la SGAE',
      'Depositar copia ante notario',
      'Bloquear el acceso de menores',
      'Revelar que han sido creados',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 50.4 obliga a los desplegadores de ultrafalsificaciones (deepfakes) a revelar de forma transparente que las imágenes, audios o vídeos han sido generados o manipulados artificialmente.',
    enterpriseLesson:
      'Las campañas publicitarias o creaciones audiovisuales con deepfakes deben incluir una advertencia visible y clara sobre su origen sintético.',
    citations: [
      makeCitation({
        id: 'art_50.p4',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p4',
        displayLabel: 'Art. 50.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          '4. Los responsables del despliegue de un sistema de IA que genere o manipule imágenes o contenidos de audio o vídeo que constituyan una ultrasuplantación revelarán que los contenidos se han generado o manipulado artificialmente.',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE 4: MODELOS GPAI Y RIESGO SISTÉMICO (Arts. 51 a 56)
  // IDs: qz_259 a qz_261 (3 preguntas)
  // =========================================================================
  {
    id: 'qz_259',
    topicId: 'gpai',
    topicLabel: 'Umbral Sistémico de GPAI (Art. 51)',
    articleId: 'art_51',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 51.2, ¿qué umbral cuantitativo de cálculo acumulado en FLOPs presume capacidades de gran impacto y riesgo sistémico en un GPAI?',
    options: [
      'Superior a 10^25 FLOPs',
      'Superior a 10^20 FLOPs',
      'Superior a 10^15 FLOPs',
      'Superior a 10^30 FLOPs',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 51.2 presume que un modelo GPAI tiene capacidades de gran impacto y riesgo sistémico cuando la cantidad acumulada de cálculo en su entrenamiento supera 10^25 FLOPs.',
    enterpriseLesson:
      'Entrenar o encargar modelos fundacionales con más de 10^25 FLOPs desencadena la supervisión directa de la Oficina de IA de la Comisión Europea.',
    citations: [
      makeCitation({
        id: 'art_51.p4',
        targetType: 'paragraph',
        articleId: 'art_51',
        paragraphId: 'art_51.p4',
        displayLabel: 'Art. 51.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. Se presumirá que un modelo de IA de uso general tiene capacidades de gran impacto con arreglo al apartado 1, letra a), cuando la cantidad acumulada de cálculo utilizada para su entrenamiento, medida en operaciones de coma flotante, sea superior a 10 25 .',
      }),
    ],
  },
  {
    id: 'qz_260',
    topicId: 'deadlines',
    topicLabel: 'Plazo de Notificación GPAI (Art. 52)',
    articleId: 'art_52',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿De qué plazo dispone el proveedor de un GPAI sistémico para notificar a la Comisión que ha superado el umbral ex artículo 52.1?',
    options: [
      'Antes de cuatro semanas',
      'Antes de dos semanas',
      'Antes de seis semanas',
      'Antes de ocho semanas',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 52.1 exige al proveedor notificar a la Comisión sin demora y, en todo caso, antes de transcurridas dos semanas desde que se cumpla o se sepa que va a cumplirse el umbral de riesgo sistémico.',
    enterpriseLesson:
      'Los laboratorios de IA que entrenan modelos frontera deben tener protocolos de preaviso para notificar a la Comisión en el plazo perentorio de 14 días.',
    citations: [
      makeCitation({
        id: 'art_52.p1',
        targetType: 'paragraph',
        articleId: 'art_52',
        paragraphId: 'art_52.p1',
        displayLabel: 'Art. 52.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Cuando un modelo de IA de uso general cumpla la condition a que se refiere el artículo 51, apartado 1, letra a), el proveedor pertinente lo notificará a la Comisión sin demora y, en cualquier caso, antes de transcurridas dos semanas desde que se cumpla dicho requisito o desde que se sepa que va a cumplirse.',
      }),
    ],
  },
  {
    id: 'qz_261',
    topicId: 'gpai',
    topicLabel: 'Excepción Open Source en GPAI (Art. 53)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 53.2, ¿qué obligaciones técnicas del GPAI NO se aplican a modelos bajo licencia libre y abierta sin riesgo sistémico?',
    options: [
      'Las del artículo 53.1(c) y (d)',
      'Las de propiedad intelectual',
      'Las del artículo 53.1(a) y (b)',
      'Las sanciones de la Oficina IA',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 53.2 exime a los proveedores de modelos GPAI de código abierto sin riesgo sistémico de las obligaciones del artículo 53.1, letras a) y b) (documentación técnica y puesta a disposición de terceros).',
    enterpriseLesson:
      'Liberar modelos fundacionales bajo licencias abiertas exime de ciertas cargas burocráticas técnicas, pero mantiene intacto el respeto a los derechos de autor.',
    citations: [
      makeCitation({
        id: 'art_53.p8',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p8',
        displayLabel: 'Art. 53.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. Las obligaciones establecidas en el apartado 1, letras a) y b), no se aplicarán a los proveedores de modelos de IA que se divulguen con arreglo a una licencia libre y de código abierto que permita el acceso, el uso, la modificación y la distribución del modelo, y cuyos parámetros, incluidos las ponderaciones, la información sobre la arquitectura del modelo y la información sobre el uso del modelo, se pongan a disposición del público, a menos que los modelos de IA de uso general presenten riesgos sistémicos.',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE 5: ESPACIOS CONTROLADOS DE PRUEBAS (SANDBOXES) (Art. 57)
  // ID: qz_262 (1 pregunta)
  // =========================================================================
  {
    id: 'qz_262',
    topicId: 'deadlines',
    topicLabel: 'Plazo de Sandboxes Nacionales (Art. 57)',
    articleId: 'art_57',
    titleId: 'tit_VI',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Cuál es la fecha límite fijada en el artículo 57.1 para que cada Estado miembro tenga operativo al menos un sandbox de IA a escala nacional?',
    options: [
      'A más tardar el 2 de agosto de 2025',
      'A más tardar el 2 de febrero de 2026',
      'A más tardar el 2 de agosto de 2027',
      'A más tardar el 2 de agosto de 2026',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 57.1 obliga a los Estados miembros a garantizar que sus autoridades competentes establezcan al menos un espacio controlado de pruebas (sandbox) para la IA a escala nacional, operativo a más tardar el 2 de agosto de 2026.',
    enterpriseLesson:
      'Las empresas emergentes y PYMEs podrán solicitar la admisión en el sandbox nacional antes de agosto de 2026 para probar sistemas innovadores con supervisión regulatoria directa.',
    citations: [
      makeCitation({
        id: 'art_57.p1',
        targetType: 'paragraph',
        articleId: 'art_57',
        paragraphId: 'art_57.p1',
        displayLabel: 'Art. 57.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Los Estados miembros velarán por que sus autoridades competentes establezcan al menos un espacio controlado de pruebas para la IA a escala nacional, que estará operativo a más tardar el 2 de agosto de 2026. Dicho espacio controlado de pruebas también podrá establecerse conjuntamente con las autoridades competentes de otros Estados miembros. La Comisión podrá proporcionar apoyo técnico, asesoramiento y herramientas para el establecimiento y el funcionamiento de los espacios controlados de pruebas para la IA.',
      }),
    ],
  },
];
