import { makeCitation } from './legal-enrichment-data.mjs';

export const QUIZ_BANK_DATA = [
  // =========================================================================
  // 1. PRÁCTICAS PROHIBIDAS (topicId: 'prohibited') — 7 preguntas
  // =========================================================================
  {
    id: 'qz_01',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa de contact center en Madrid instala un software de IA que analiza en tiempo real el tono de voz y las microexpresiones en cámara de sus teleoperadores para medir su nivel de estrés, enfado o empatía durante las llamadas comerciales. ¿Es legal según el Reglamento (UE) 2024/1689?',
    options: [
      'No, está prohibido por el artículo 5.1(f) al inferir emociones en el lugar de trabajo sin responder a motivos médicos o de seguridad física de los empleados.',
      'Sí, es conforme si los teleoperadores otorgan consentimiento expreso por escrito y se inscribe formalmente el sistema en el registro europeo del artículo 71.',
      'Sí, pero al tratarse de biometría laboral se clasifica como sistema de alto riesgo del Anexo III punto 4(b) y precisa evaluación de conformidad externa.',
      'Sí, siempre que la empresa cumpla únicamente los deberes de transparencia e información al trabajador del artículo 50.3 para sistemas biométricos.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 5.1(f) prohíbe taxativamente la introducción en el mercado, puesta en servicio o utilización de sistemas de IA para inferir las emociones de una persona física en los lugares de trabajo y en los centros educativos, salvo que esté destinado a ser instalado por motivos estrictamente médicos o de seguridad (por ejemplo, detectar fatiga o sueño de un piloto o conductor profesional).',
    enterpriseLesson:
      'Desactiva cualquier módulo de análisis emocional o de sentimiento biométrico sobre empleados o candidatos en videollamadas o call centers: el consentimiento del trabajador no subsana una prohibición absoluta del Art. 5.',
    citations: [
      makeCitation({
        id: 'art_5.p7',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p7',
        displayLabel: 'Art. 5.1(f) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de sistemas de IA para inferir las emociones de una persona física en los lugares de trabajo y en los centros educativos, excepto cuando el uso del sistema de IA esté destinado a ser instalado o introducido en el mercado por motivos médicos o de seguridad;',
      }),
    ],
  },
  {
    id: 'qz_02',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cuál de las siguientes prácticas relativas a bases de datos de reconocimiento facial está prohibida de forma absoluta en el artículo 5.1(e)?',
    options: [
      'Verificar la identidad del titular en controles de accesos físicos mediante comparación biométrica uno a uno almacenada exclusivamente en el soporte del usuario.',
      'Crear o ampliar bases de datos de reconocimiento facial mediante la extracción no selectiva (scraping) de imágenes faciales de internet o de grabaciones de CCTV.',
      'Indexar registros biométricos procedentes de diligencias judiciales previas con el único fin de ejecutar órdenes europeas de detención bajo el artículo 26.',
      'Almacenar plantillas biométricas cifradas en servidores empresariales cerrados para gestionar el fichaje laboral autorizado por la representación sindical.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 5.1(e) prohíbe los sistemas de IA que creen o amplíen bases de datos de reconocimiento facial mediante la extracción no selectiva (untargeted scraping) de imágenes faciales de internet o de circuitos cerrados de televisión (CCTV), como respuesta directa a casos tipo Clearview AI.',
    enterpriseLesson:
      'Los equipos de datos e ingeniería no pueden entrenar ni contratar modelos biométricos alimentados con raspado masivo de redes sociales o cámaras de vigilancia.',
    citations: [
      makeCitation({
        id: 'art_5.p6',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p6',
        displayLabel: 'Art. 5.1(e) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de sistemas de IA que creen o amplíen bases de datos de reconocimiento facial mediante la extracción no selectiva de imágenes faciales de internet o de circuitos cerrados de televisión;',
      }),
    ],
  },
  {
    id: 'qz_03',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una plataforma privada de servicios urbanos agrega datos del comportamiento cívico de sus usuarios en redes sociales y su historial de multas de tráfico para asignarles una "puntuación de ciudadano ejemplar" que determina si pueden contratar un seguro de hogar o una línea móvil. ¿Cómo califica el Reglamento esta práctica?',
    options: [
      'Es un sistema de alto riesgo admisible bajo el Anexo III punto 5 si la entidad efectúa una evaluación de impacto en derechos fundamentales (FRIA).',
      'Es una actividad lícita y sujeta a riesgo mínimo conforme al artículo 95, al limitarse al ámbito contractual privado de prestación de servicios urbanos.',
      'Es una práctica prohibida de puntuación ciudadana (social scoring) según el artículo 5.1(c), aplicable plenamente tanto al sector público como al privado.',
      'Solo resulta prohibida cuando la desarrolla una autoridad pública, quedando autorizada para empresas privadas que ofrezcan mecanismos de recurso al usuario.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 5.1(c) prohíbe el "social scoring" tanto por autoridades públicas como por entidades privadas cuando evalúa o clasifica personas atendiendo a su comportamiento social o características personales y provoca un trato perjudicial en contextos sociales desvinculados del contexto donde se generaron los datos, o un trato desproporcionado.',
    enterpriseLesson:
      'En modelos de riesgo o fraude, utiliza únicamente variables objetivas y directamente vinculadas al contexto del servicio; nunca cruces comportamiento social ajeno para denegar servicios en otro contexto.',
    citations: [
      makeCitation({
        id: 'art_5.p4',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p4',
        displayLabel: 'Art. 5.1(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio o la utilización de sistemas de IA para evaluar o clasificar a personas físicas o a colectivos de personas durante un período determinado de tiempo atendiendo a su comportamiento social o a características personales o de su personalidad conocidas, inferidas o predichas, de forma que la puntuación ciudadana resultante provoque una o varias de las situaciones siguientes...',
      }),
    ],
  },
  {
    id: 'qz_04',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 5.1(g), ¿qué tipo de sistemas de categorización biométrica están terminantemente prohibidos?',
    options: [
      'Los que agrupan y analizan imágenes radiológicas de pacientes para clasificar patologías oncológicas complejas o predecir respuestas a tratamientos inmunológicos en el marco de la investigación médica hospitalaria.',
      'Los utilizados en controles de fronteras exteriores de la Unión para verificar de forma individualizada la autenticidad de documentos de viaje cotejando plantillas faciales del chip con los rasgos físicos reales del titular en el paso.',
      'Los que etiquetan o filtran conjuntos de datos biométricos adquiridos legítimamente en investigaciones policiales para cotejar sospechosos ya identificados en causas penales con arreglo al Derecho procesal penal aplicable.',
      'Los que clasifican individualmente a personas físicas a partir de sus datos biométricos para deducir o inferir su raza, opiniones políticas, afiliación sindical, convicciones religiosas o filosóficas, vida sexual u orientación sexual.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 5.1(g) prohíbe la categorización biométrica individual encaminada a deducir o inferir categorías especialmente protegidas (raza, opiniones políticas, afiliación sindical, religión, vida u orientación sexual), excluyendo únicamente el filtrado legítimo de conjuntos de datos biométricos adquiridos conforme a Derecho en el ámbito policial.',
    enterpriseLesson:
      'Cualquier sistema de visión artificial o análisis de audio en retail o marketing debe tener bloqueada por diseño la inferencia de atributos sensibles protegidos.',
    citations: [
      makeCitation({
        id: 'art_5.p8',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p8',
        displayLabel: 'Art. 5.1(g) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de sistemas de categorización biométrica que clasifiquen individualmente a las personas físicas sobre la base de sus datos biométricos para deducir o inferir su raza, sus opiniones políticas, su afiliación sindical, sus convicciones religiosas o filosóficas, su vida sexual o su orientación sexual;',
      }),
    ],
  },
  {
    id: 'qz_05',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un estudio de videojuegos lanza una aplicación dirigida a menores de 10 años que utiliza un agente de IA entrenado para detectar la vulnerabilidad cognitiva por edad e inducir compras compulsivas con dinero real mediante patrones engañosos personalizados. ¿Qué precepto vulnera?',
    options: [
      'El artículo 5.1(a) y 5.1(b), que prohíben técnicas deliberadamente manipuladoras y la explotación de vulnerabilidades derivadas de la edad o discapacidad que provoquen perjuicios considerables.',
      'Únicamente el artículo 50.2 sobre deberes de transparencia e información en contenidos generados por IA, siempre que la plataforma advierta claramente a los tutores legales en las condiciones de uso.',
      'El artículo 51 relativo a modelos de IA para fines generales con riesgo sistémico, al superar la capacidad computacional de evaluación establecida para servicios digitales interactivos.',
      'Ningún precepto del Reglamento, al quedar las creaciones de software de ocio y videojuegos expresamente fuera del ámbito de aplicación material conforme a las excepciones del artículo 2.4.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 5.1(b) prohíbe los sistemas de IA que exploten vulnerabilidades de una persona o colectivo derivadas de su edad, discapacidad o situación social o económica específica para alterar sustancialmente su comportamiento causando perjuicios considerables (físicos, psicológicos o financieros).',
    enterpriseLesson:
      'Los sistemas de recomendación y personalización comercial nunca deben optimizar métricas de conversión explotando vulnerabilidades de menores, personas mayores o colectivos en precariedad económica.',
    citations: [
      makeCitation({
        id: 'art_5.p3',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p3',
        displayLabel: 'Art. 5.1(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio o la utilización de un sistema de IA que explote alguna de las vulnerabilidades de una persona física o un determinado colectivo de personas derivadas de su edad o discapacidad, o de una situación social o económica específica, con la finalidad o el efecto de alterar de manera sustancial el comportamiento de dicha persona...',
      }),
    ],
  },
  {
    id: 'qz_06',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Puede un centro comercial privado instalar cámaras con identificación biométrica remota "en tiempo real" en sus pasillos de acceso público para detectar hurtos menores?',
    options: [
      'Sí: cualquier entidad mercantil puede implantarlo para salvaguardar sus bienes privados siempre que coloque carteles informativos en las entradas según el artículo 50.3 y limite la conservación de datos biométricos a cuarenta y ocho horas.',
      'No: el uso en tiempo real en espacios de acceso público se reserva en exclusiva a fuerzas de seguridad ante tres supuestos tasados de extrema gravedad (víctimas, amenazas terroristas o delitos graves del Anexo II) y exige autorización judicial previa conforme al artículo 5.',
      'Sí: la identificación biométrica remota en tiempo real se califica como sistema de alto riesgo del Anexo III punto 1, por lo que basta con superar una evaluación de impacto en derechos fundamentales y registrar el algoritmo en la base de la UE.',
      'No: la prohibición del artículo 5.1(h) es absoluta para cualquier actor público o privado, no admitiendo excepción alguna ni siquiera para la prevención de atentados terroristas o rescate urgente de víctimas de secuestro en territorio europeo.',
    ],
    correctOptionIndex: 1,
    explanation:
      'La identificación biométrica remota en tiempo real en espacios de acceso público está prohibida en el artículo 5.1(h), reservándose sus únicas excepciones a las fuerzas del orden bajo estrictos requisitos materiales (Anexo II, amenaza vital/terrorista o búsqueda de víctimas), evaluación de impacto e intervención judicial o administrativa independiente previa (Art. 5.2 y 5.3).',
    enterpriseLesson:
      'La seguridad privada de comercios, estadios u oficinas abiertas al público no puede acogerse a las excepciones policiales del Art. 5.1(h) para hacer reconocimiento facial en tiempo real.',
    citations: [
      makeCitation({
        id: 'art_5.p9',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p9',
        displayLabel: 'Art. 5.1(h) y Anexo II · Reglamento (UE) 2024/1689',
        exactQuote:
          'el uso de sistemas de identificación biométrica remota «en tiempo real» en espacios de acceso público con fines de garantía del cumplimiento del Derecho, salvo y en la medida en que dicho uso sea estrictamente necesario para alcanzar uno o varios de los objetivos siguientes...',
      }),
    ],
  },
  {
    id: 'qz_07',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas (Art. 5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué establece el artículo 5.1(d) respecto a los sistemas de IA de predicción de delitos ("predictive policing") sobre personas físicas?',
    options: [
      'Se autorizan para cualquier cuerpo de seguridad pública de los Estados miembros siempre que el software cuente con marcado CE de conformidad y haya superado una auditoría previa por un organismo notificado según el Anexo VII.',
      'Prohíbe con carácter absoluto cualquier herramienta informática de asignación territorial de patrullas o análisis estadístico de mapas de calor delictivo basadas en series temporales históricas de infracciones penales.',
      'Quedan prohibidos si evalúan o predicen que una persona cometerá delitos basándose únicamente en su perfilado o rasgos de personalidad, sin apoyarse en hechos objetivos y verificables directamente vinculados a una actividad delictiva.',
      'Permite predecir individualmente la reincidencia delictiva mediante perfiles psicográficos si la autoridad judicial competente valida el informe algorítmico en un plazo no superior a setenta y dos horas tras la detención policial cautelar.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 5.1(d) prohíbe predecir el riesgo de comisión de delitos por una persona física basándose exclusivamente en su perfilado o rasgos de personalidad. Solo se excluyen los sistemas que apoyen la valoración humana de la implicación de una persona basada ya en hechos objetivos y verificables directamente vinculados a una actividad delictiva.',
    enterpriseLesson:
      'Los proveedores de software para sector público o seguridad ciudadana no pueden ofrecer módulos de scoring predictivo penal basados meramente en rasgos psicográficos o demográficos.',
    citations: [
      makeCitation({
        id: 'art_5.p5',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p5',
        displayLabel: 'Art. 5.1(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de un sistema de IA para realizar evaluaciones de riesgos sobre personas físicas a fin de evaluar o predecir el riesgo de que una persona física cometa un delito, basándose únicamente en la elaboración del perfil de una persona física o en la evaluación de sus rasgos y características de la personalidad;',
      }),
    ],
  },

  // =========================================================================
  // 2. ALTO RIESGO (topicId: 'high_risk') — 8 preguntas
  // =========================================================================
  {
    id: 'qz_08',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa desarrolla un sistema de IA encuadrado en el Anexo III punto 4 (empleo) pero alega que se acoge a la excepción del artículo 6.3 porque "solo realiza una tarea preparatoria". Sin embargo, el sistema elabora perfiles automatizados de los candidatos para ordenarlos. ¿Puede acogerse a la excepción de no alto riesgo del artículo 6.3?',
    options: [
      'Sí, porque cualquier tarea preparatoria o de preselección curricular preliminar queda exenta de pleno derecho con arreglo al artículo 6.3 letra b), con independencia del perfilado.',
      'Sí, siempre que la empresa proveedora acredite la condición de microempresa o pyme y limite el procesamiento a menos de cincuenta mil candidatos al año conforme a las exenciones del artículo 28.',
      'Sí, a condición de que la compañía destruya todos los registros de perfiles y decisiones automatizadas en un plazo máximo de veinticuatro horas tras la cobertura de la vacante.',
      'No: el artículo 6.3 último párrafo establece que un sistema de IA del Anexo III se considerará siempre de alto riesgo cuando el sistema realice una elaboración de perfiles de personas físicas.',
    ],
    correctOptionIndex: 3,
    explanation:
      'Aunque el artículo 6.3 permite excluir del alto riesgo ciertos sistemas del Anexo III que realicen tareas procedimentales acotadas o preparatorias sin riesgo significativo, su último párrafo contiene una regla absoluta: "Un sistema de IA a que se refiere el anexo III se considerará siempre de alto riesgo cuando el sistema de IA realice una elaboración de perfiles de personas físicas".',
    enterpriseLesson:
      'Nunca invoques la excepción del Art. 6.3 si tu sistema del Anexo III realiza perfilado (profiling) de personas físicas en el sentido del Art. 4.4 del RGPD.',
    citations: [
      makeCitation({
        id: 'art_6.p3',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p3',
        displayLabel: 'Art. 6.3 último párrafo · Reglamento (UE) 2024/1689',
        exactQuote:
          'Un sistema de IA a que se refiere el anexo III se considerará siempre de alto riesgo cuando el sistema de IA realice una elaboración de perfiles de personas físicas.',
      }),
    ],
  },
  {
    id: 'qz_09',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Cuando un proveedor concluye válidamente que su sistema incluido en el Anexo III NO es de alto riesgo aplicando los criterios del artículo 6.3, ¿qué obligaciones formales sigue teniendo según los artículos 6.4 y 49.2?',
    options: [
      'Debe documentar la evaluación antes de comercializarlo o ponerlo en servicio, facilitarla a las autoridades previa solicitud y registrar preceptivamente el sistema en la base de datos de la UE según el artículo 49.2.',
      'Queda exonerado de cualquier deber documental, bastando con conservar una declaración de conformidad firmada por el representante legal durante tres años sin necesidad de registro alguno ante la Comisión Europea.',
      'Debe remitir la documentación técnica completa a la Oficina de IA en Bruselas para obtener una resolución de autorización previa en el plazo improrrogable de un mes antes de iniciar su despliegue comercial en la Unión.',
      'Debe someter el sistema a una auditoría externa obligatoria por un organismo notificado con arreglo al Anexo VII para certificar formalmente la inaplicabilidad de los requisitos de alto riesgo en el mercado único.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Según el artículo 6.4, el proveedor que considere que un sistema del Anexo III no es de alto riesgo debe documentar dicha evaluación antes de comercializarlo o ponerlo en servicio. Además, el artículo 49.2 le obliga a inscribirse y registrar dicho sistema en la base de datos de la UE.',
    enterpriseLesson:
      'Acogerse al filtro del Art. 6.3 no es "cero papeleo": exige memoria justificativa previa firmada e inscripción en la base de datos europea conforme al Anexo VIII sección B.',
    citations: [
      makeCitation({
        id: 'art_6.p4',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p4',
        displayLabel: 'Art. 6.4 y Art. 49.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El proveedor que considere que un sistema de IA a que se refiere el anexo III no es de alto riesgo documentará su evaluación antes de introducir dicho sistema en el mercado o de ponerlo en servicio. Presentará dicha documentación a petición de las autoridades nacionales competentes.',
      }),
    ],
  },
  {
    id: 'qz_10',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_26',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 26.6 ( y el artículo 19.1 para proveedores ), ¿durante cuánto tiempo mínimo deben conservarse los archivos de registro (logs) generados automáticamente por un sistema de IA de alto riesgo?',
    options: [
      'Al menos 30 días naturales a partir de la finalización de cada sesión de inferencia.',
      'Al menos 6 meses, salvo que el Derecho de la Unión o nacional aplicable disponga otra cosa.',
      'Un período improrrogable de 2 años desde la introducción del sistema de IA en el mercado.',
      'Durante un plazo máximo de 90 días naturales conforme a los límites de la Directiva ePrivacy.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Tanto el artículo 19.1 (para proveedores cuando los logs están bajo su control) como el artículo 26.6 (para responsables del despliegue) exigen conservar los archivos de registro generados automáticamente durante un período adecuado a la finalidad prevista de al menos seis meses.',
    enterpriseLesson:
      'Configura tus pipelines de observabilidad y almacenamiento inmutable de logs de inferencia en sistemas de alto riesgo con una política de retención mínima de 180 días (6 meses).',
    citations: [
      makeCitation({
        id: 'art_26.p6',
        targetType: 'paragraph',
        articleId: 'art_26',
        paragraphId: 'art_26.p6',
        displayLabel: 'Art. 26.6 y Art. 19.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue de sistemas de IA de alto riesgo conservarán los archivos de registro generados automáticamente por dicho sistema de IA de alto riesgo en la medida en que dichos archivos estén bajo su control, durante un período adecuado a la finalidad prevista del sistema de IA de alto riesgo, de al menos seis meses.',
      }),
    ],
  },
  {
    id: 'qz_11',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_27',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una entidad bancaria española y una aseguradora van a desplegar dos sistemas de IA: uno para evaluar la solvencia crediticia de particulares (Anexo III.5.b) y otro para evaluar riesgos y fijar precios en seguros de salud y de vida (Anexo III.5.c). ¿Deben realizar una Evaluación del Impacto en los Derechos Fundamentales (FRIA) según el artículo 27?',
    options: [
      'No: la FRIA regulada en el artículo 27.1 vincula de manera exclusiva a las administraciones públicas y entidades de Derecho público, quedando el sector financiero plenamente exento al someterse a supervisión del Banco Central Europeo.',
      'Solo la entidad bancaria está sujeta a la FRIA por manejar solvencia crediticia (Anexo III.5.b), mientras que las aseguradoras de salud y vida gozan de exención legal general con arreglo al artículo 27.4 por razones de solvencia prudencial.',
      'Sí: el artículo 27.1 extiende expresamente el deber de realizar una FRIA previa al uso a entidades privadas que desplieguen sistemas del Anexo III punto 5, letras b) (evaluación crediticia) y c) (riesgos y fijación de precios en seguros de vida y salud).',
      'No: las entidades privadas de crédito y de seguros solo precisan remitir una declaración responsable de gobernanza a la autoridad nacional competente y publicar un extracto informativo plenamente accesible en su web corporativa con arreglo al artículo 26.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 27.1 impone la Evaluación del Impacto en los Derechos Fundamentales (FRIA) no solo al sector público y concesionarios de servicios públicos, sino también a cualquier entidad privada que despliegue sistemas de IA de alto riesgo del Anexo III punto 5, letras b) (evaluación de solvencia o calificación crediticia) y c) (evaluación de riesgos y fijación de precios en seguros de vida y salud), debiendo notificar sus resultados a la autoridad de vigilancia del mercado.',
    enterpriseLesson:
      'Banca, fintechs de crédito al consumo y aseguradoras de salud/vida están obligadas por ley a ejecutar la FRIA y notificarla a la AESIA antes de poner sus modelos de scoring en producción.',
    citations: [
      makeCitation({
        id: 'art_27.p1',
        targetType: 'paragraph',
        articleId: 'art_27',
        paragraphId: 'art_27.p1',
        displayLabel: 'Art. 27.1 y 27.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'los responsables del despliegue que sean organismos de Derecho público, o entidades privadas que presten servicios públicos, y los responsables del despliegue de sistemas de IA de alto riesgo a que se refiere el anexo III, punto 5, letras b) y c), realizarán una evaluación del impacto en los derechos fundamentales que pueda producir el uso de dicho sistema.',
      }),
    ],
  },
  {
    id: 'qz_12',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_14',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'En los sistemas de identificación biométrica remota de alto riesgo (Anexo III punto 1.a), ¿qué regla especial de supervisión humana ("regla de los cuatro ojos") exige el artículo 14.5?',
    options: [
      'Basta con que un único supervisor técnico cualificado revise muestreos estadísticos de al menos el 10 % de las identificaciones y registre cualquier desviación en el sistema de gestión de la calidad exigido por el artículo 17.',
      'La supervisión humana directa puede sustituirse de forma válida por un segundo modelo de IA independiente que audite en paralelo el resultado para certificar la consistencia técnica y la no discriminación del algoritmo.',
      'El operador humano solo interviene de forma preceptiva cuando el nivel de confianza algorítmica se sitúe por debajo del umbral del 85 %, permitiendo en caso contrario la toma de decisiones automatizadas en tiempo real.',
      'No podrá adoptarse ninguna medida ni decisión sobre la base de la identificación resultante a menos que haya sido verificada y confirmada por separado por al menos dos personas físicas cualificadas conforme al artículo 14.5.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 14.5 refuerza la supervisión humana en sistemas de identificación biométrica remota exigiendo que ninguna acción o decisión se tome basándose en el resultado del sistema sin que haya sido verificada y confirmada por separado por al menos dos personas físicas cualificadas (salvo excepción legal desproporcionada en el ámbito policial/fronterizo).',
    enterpriseLesson:
      'En sistemas biométricos de alto riesgo, la interfaz operativa debe exigir validación independiente de dos operadores humanos antes de ejecutar cualquier medida.',
    citations: [
      makeCitation({
        id: 'art_14.p5',
        targetType: 'paragraph',
        articleId: 'art_14',
        paragraphId: 'art_14.p5',
        displayLabel: 'Art. 14.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'el responsable del despliegue no adopte ninguna medida o decisión sobre la base de la identificación resultante del sistema, a menos que dicha identificación haya sido verificada y confirmada por separado por al menos dos personas físicas con la competencia, la formación y la autoridad necesarias.',
      }),
    ],
  },
  {
    id: 'qz_13',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_10',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Permite el artículo 10.5 tratar excepcionalmente categorías especiales de datos personales (Art. 9 RGPD, como origen étnico o salud) en un sistema de IA de alto riesgo?',
    options: [
      'Sí, estrictamente para detectar y corregir sesgos en sistemas de alto riesgo cuando datos sintéticos no basten, con acceso restringido, sin cesión a terceros y suprimiéndolos tras la corrección conforme al artículo 10.5.',
      'No: el principio general de minimización del RGPD impide terminantemente tratar categorías especiales en cualquier fase de desarrollo de sistemas de IA, debiendo sustituirse siempre por conjuntos sintéticos generativos.',
      'Sí, con carácter general para optimizar la precisión estadística de las predicciones comerciales en sistemas del Anexo III, bastando con recabar el consentimiento explícito de los titulares bajo el artículo 9.2(a) del RGPD.',
      'Sí, pero únicamente si el tratamiento se efectúa en un espacio controlado de pruebas (sandbox) regulatorio autorizado por la autoridad nacional competente y previa validación vinculante por el Supervisor Europeo de Protección de Datos.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 10.5 habilita una base específica y tasada para tratar categorías especiales de datos personales exclusivamente cuando sea estrictamente necesario para detectar y corregir sesgos en sistemas de IA de alto riesgo, exigiendo seis salvaguardias acumulativas (incluyendo el borrado de los datos al concluir la corrección del sesgo).',
    enterpriseLesson:
      'Los equipos de Data Science pueden auditar equidad algorítmica (fairness) con atributos protegidos bajo el Art. 10.5 siempre que documenten por qué no bastan datos sintéticos, aíslen el entorno y eliminen esos atributos tras el test de sesgo.',
    citations: [
      makeCitation({
        id: 'art_10.p5',
        targetType: 'paragraph',
        articleId: 'art_10',
        paragraphId: 'art_10.p5',
        displayLabel: 'Art. 10.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'En la medida en que sea estrictamente necesario para garantizar la detección y corrección de sesgos en relación con los sistemas de IA de alto riesgo... los proveedores de dichos sistemas podrán tratar excepcionalmente categorías especiales de datos personales.',
      }),
    ],
  },
  {
    id: 'qz_14',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_18',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Durante cuánto tiempo debe el proveedor de un sistema de IA de alto riesgo conservar a disposición de las autoridades nacionales la documentación técnica (Anexo IV), la documentación del sistema de gestión de la calidad y la declaración UE de conformidad?',
    options: [
      'Durante un plazo preceptivo de 2 años a partir de la primera comercialización efectiva del sistema de alto riesgo en el mercado interior de la Unión Europea.',
      'Durante un período de 10 años a partir de la introducción en el mercado o la puesta en servicio del sistema de IA de alto riesgo (Art. 18.1 y Art. 47.2).',
      'Durante un período de 5 años a partir de la retirada formal del sistema del mercado de la Unión o tras el cese total de actualizaciones de software.',
      'Durante un plazo de 6 meses, coincidiendo de forma expresa con el período mínimo fijado para los registros de inferencia en el artículo 19.1.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Los artículos 18.1 y 47.2 obligan al proveedor a mantener a disposición de las autoridades nacionales competentes toda la documentación técnica, del sistema de calidad, certificados de organismos notificados y la declaración UE de conformidad durante 10 años a partir de la introducción en el mercado o puesta en servicio del sistema.',
    enterpriseLesson:
      'Mientras que los logs operativos tienen un mínimo de 6 meses (Art. 19/26), el expediente técnico del Anexo IV y la declaración UE de conformidad deben archivarse durante 10 años.',
    citations: [
      makeCitation({
        id: 'art_18.p1',
        targetType: 'paragraph',
        articleId: 'art_18',
        paragraphId: 'art_18.p1',
        displayLabel: 'Art. 18.1 y Art. 47.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El proveedor mantendrá a disposición de las autoridades nacionales competentes, durante un período de diez años a partir de la introducción en el mercado o la puesta en servicio del sistema de IA de alto riesgo: a) la documentación técnica a que se refiere el artículo 11...',
      }),
    ],
  },
  {
    id: 'qz_15',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Cap. III)',
    articleId: 'art_43',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Una empresa desarrolla un software de IA para cribar currículums y evaluar candidatos en procesos de selección (Anexo III punto 4). ¿Qué procedimiento de evaluación de la conformidad le corresponde según el artículo 43.2?',
    options: [
      'Evaluación de la conformidad mediante auditoría preceptiva de un organismo notificado con arreglo al Anexo VII previa introducción en el mercado.',
      'Autorización administrativa previa expedida por la autoridad laboral nacional competente tras auditar las métricas del modelo en noventa días.',
      'Procedimiento de evaluación de la conformidad fundamentado en el control interno del Anexo VI, que no prevé la intervención de un organismo notificado.',
      'Exención general del procedimiento de evaluación de conformidad al catalogarse el software de selección como herramienta auxiliar de gestión de recursos humanos.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 43.2 establece que para los sistemas de IA de alto riesgo de los puntos 2 a 8 del Anexo III (infraestructuras, educación, empleo/RR.HH., servicios esenciales/crédito, fuerzas del orden, migración y justicia), los proveedores seguirán el procedimiento de evaluación de la conformidad basado en el control interno del Anexo VI.',
    enterpriseLesson:
      'Para los sistemas de los puntos 2 a 8 del Anexo III, el propio proveedor ejecuta y documenta la evaluación de conformidad por control interno (Anexo VI) sin depender de colas en organismos notificados.',
    citations: [
      makeCitation({
        id: 'art_43.p2',
        targetType: 'paragraph',
        articleId: 'art_43',
        paragraphId: 'art_43.p2',
        displayLabel: 'Art. 43.2 y Anexo VI · Reglamento (UE) 2024/1689',
        exactQuote:
          'Para los sistemas de IA de alto riesgo a que se refieren los puntos 2 a 8 del anexo III, los proveedores seguirán el procedimiento de evaluación de la conformidad fundamentado en un control interno a que se refiere el anexo VI, que no prevé la participación de un organismo notificado.',
      }),
    ],
  },

  // =========================================================================
  // 3. MODELOS GPAI Y RIESGO SISTÉMICO (topicId: 'gpai') — 7 preguntas
  // =========================================================================
  {
    id: 'qz_16',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI y Riesgo Sistémico (Cap. V)',
    articleId: 'art_51',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 51.2, ¿a partir de qué umbral acumulado de capacidad de cálculo (cómputo de entrenamiento) se presume que un modelo de IA de uso general (GPAI) tiene capacidades de gran impacto y, por tanto, presenta riesgo sistémico?',
    options: [
      'Superior a 10^20 operaciones de coma flotante (FLOPs).',
      'Superior a 10^30 operaciones de coma flotante (FLOPs).',
      'Cualquier modelo que supere 100.000 millones de parámetros.',
      'Superior a 10^25 operaciones de coma flotante (FLOPs).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 51.2 establece la presunción de capacidades de gran impacto (riesgo sistémico) cuando la cantidad acumulada de cálculo utilizada para el entrenamiento del modelo GPAI, medida en operaciones de coma flotante, sea superior a 10^25 FLOPs.',
    enterpriseLesson:
      'Monitoriza el presupuesto total de cómputo (preentrenamiento + mejoras posteriores): si se prevé alcanzar 10^25 FLOPs, hay obligación de notificar a la Comisión en un plazo de 2 semanas (Art. 52.1).',
    citations: [
      makeCitation({
        id: 'art_51.p2',
        targetType: 'paragraph',
        articleId: 'art_51',
        paragraphId: 'art_51.p2',
        displayLabel: 'Art. 51.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Se presumirá que un modelo de IA de uso general tiene capacidades de gran impacto con arreglo al apartado 1, letra a), cuando la cantidad acumulada de cálculo utilizada para su entrenamiento, medida en operaciones de coma flotante, sea superior a 10^25.',
      }),
    ],
  },
  {
    id: 'qz_17',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI y Riesgo Sistémico (Cap. V)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un laboratorio europeo de IA publica en HuggingFace los pesos y arquitectura de un nuevo modelo fundacional de lenguaje (7B parámetros, <10^25 FLOPs, sin riesgo sistémico) bajo licencia abierta Apache 2.0. ¿De qué obligaciones del artículo 53.1 queda exento y cuáles DEBE cumplir igualmente?',
    options: [
      'Queda exento de la documentación técnica de los Anexos XI y XII (letras a y b del Art. 53.1), pero debe implantar la política de derechos de autor (Art. 53.1.c) y publicar el resumen de datos de entrenamiento (Art. 53.1.d).',
      'Queda plenamente exento de todas las obligaciones del Reglamento en virtud del régimen general del software de código abierto del considerando 102, sin deber cumplir normativas de copyright ni transparencia de datos.',
      'Debe remitir la documentación técnica del Anexo XI a la Oficina de IA pero queda exonerado de respetar la Directiva (UE) 2019/790 de derechos de autor al distribuirse bajo una licencia comunitaria de código abierto.',
      'No goza de ninguna exención legal respecto a modelos propietarios, debiendo presentar la documentación técnica completa del Anexo XI y superar preceptivamente una auditoría externa realizada por un organismo notificado del Anexo VII.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 53.2 exime a los modelos GPAI publicados bajo licencia libre y de código abierto (cuando no tengan riesgo sistémico) únicamente de las obligaciones del apartado 1, letras a) y b) (documentación Anexo XI y XII). Sin embargo, mantienen íntegras las obligaciones de las letras c) (política de derechos de autor y TDM opt-out) y d) (resumen público de datos de entrenamiento).',
    enterpriseLesson:
      'El código abierto (open-weights) alivia la carga documental técnica si no hay riesgo sistémico, pero jamás exime de cumplir el copyright ni de publicar el resumen de entrenamiento según la plantilla de la Oficina de IA.',
    citations: [
      makeCitation({
        id: 'art_53.p2',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p2',
        displayLabel: 'Art. 53.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las obligaciones establecidas en el apartado 1, letras a) y b), no se aplicarán a los proveedores de modelos de IA de uso general que se publiquen con una licencia libre y de código abierto que permita acceder a los parámetros, incluidos los pesos, la información sobre la arquitectura del modelo y la información sobre el uso del modelo...',
      }),
    ],
  },
  {
    id: 'qz_18',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI y Riesgo Sistémico (Cap. V)',
    articleId: 'art_55',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Cuáles son las cuatro obligaciones adicionales que el artículo 55.1 impone específicamente a los proveedores de modelos de IA de uso general con riesgo sistémico?',
    options: [
      'a) Someter el código fuente a escrutinio público obligatorio; b) limitar el entrenamiento a un máximo de 10^24 FLOPs; c) transferir la titularidad de los pesos a la Comisión Europea; y d) contratar una póliza de seguro de responsabilidad civil por daños medioambientales derivados del centro de datos.',
      'a) Realizar evaluaciones del modelo con pruebas con adversarios (red-teaming); b) evaluar y mitigar posibles riesgos sistémicos a escala de la Unión; c) comunicar sin demora indebida incidentes graves a la Oficina de IA; y d) garantizar un nivel adecuado de ciberseguridad para el modelo y su infraestructura física.',
      'a) Obtener certificación previa de un organismo notificado del Anexo VII; b) restringir el acceso a clientes empresariales con sede en la UE; c) auditar anualmente las emisiones de carbono del cómputo; y d) depositar una fianza económica ante el Banco Central Europeo para responder de eventuales sanciones.',
      'a) Abonar un canon digital a la Oficina de IA por cada parámetro del modelo; b) publicar mensualmente todas las consultas de los usuarios; c) restringir la longitud máxima de contexto a 4.000 tokens; y d) alojar obligatoriamente los servidores del modelo en instalaciones públicas de un Estado miembro.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 55.1 exige a los proveedores de modelos GPAI con riesgo sistémico: evaluación con pruebas con adversarios (red-teaming), evaluación y mitigación de riesgos sistémicos, notificación sin demora indebida de incidentes graves a la Oficina de IA (y en su caso autoridades nacionales) y ciberseguridad adecuada del modelo y su infraestructura física.',
    enterpriseLesson:
      'Si tu empresa entrena o despliega un modelo GPAI de frontera (>10^25 FLOPs), el red-teaming documentado y la protección física/lógica de los pesos del modelo son obligaciones legales exigibles.',
    citations: [
      makeCitation({
        id: 'art_55.p1',
        targetType: 'paragraph',
        articleId: 'art_55',
        paragraphId: 'art_55.p1',
        displayLabel: 'Art. 55.1(a)-(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'Además de las obligaciones enumeradas en los artículos 53 y 54, los proveedores de modelos de IA de uso general con riesgo sistémico: a) realizarán una evaluación de los modelos... llevando a cabo y documentando pruebas con adversarios; b) evaluarán y mitigarán los posibles riesgos sistémicos; c) harán seguimiento, documentarán e informarán, sin demora indebida, a la Oficina de IA... de la información pertinente sobre incidentes graves; d) garantizarán un nivel adecuado de protección de la ciberseguridad.',
      }),
    ],
  },
  {
    id: 'qz_19',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI y Riesgo Sistémico (Cap. V)',
    articleId: 'art_52',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Cuando un modelo de IA de uso general cumple la condición de riesgo sistémico del artículo 51.1(a) (o se prevé que la cumplirá), ¿en qué plazo debe el proveedor notificarlo a la Comisión Europea según el artículo 52.1?',
    options: [
      'En el plazo no superior a cuarenta días naturales a contar desde la finalización de todas las fases de entrenamiento y validación técnica del modelo de IA.',
      'En un plazo improrrogable de seis meses a partir de la introducción del modelo en el mercado de la Unión mediante escrito formal a la Oficina de IA.',
      'Sin demora y, en cualquier caso, en un plazo de 2 semanas a partir del momento en que se cumpla dicho requisito o se tenga conocimiento de que se cumplirá.',
      'No existe obligación de notificación previa para el proveedor, correspondiendo a la Comisión Europea incoar de oficio las investigaciones oportunas.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 52.1 obliga al proveedor a notificar a la Comisión sin demora y, en cualquier caso, en un plazo de dos semanas desde que se cumpla el requisito de capacidad de gran impacto (>10^25 FLOPs) o desde que se tenga conocimiento de que se cumplirá.',
    enterpriseLesson:
      'La notificación a la Comisión se activa incluso antes de terminar el entrenamiento si la planificación de cómputo confirma que se superará el umbral de 10^25 FLOPs.',
    citations: [
      makeCitation({
        id: 'art_52.p1',
        targetType: 'paragraph',
        articleId: 'art_52',
        paragraphId: 'art_52.p1',
        displayLabel: 'Art. 52.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando un modelo de IA de uso general cumpla la condición a que se refiere el artículo 51, apartado 1, letra a), el proveedor pertinente lo notificará a la Comisión sin demora y, en cualquier caso, en un plazo de dos semanas a partir del momento en que se cumpla dicho requisito o se tenga conocimiento de que se cumplirá.',
      }),
    ],
  },
  {
    id: 'qz_20',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI y Riesgo Sistémico (Cap. V)',
    articleId: 'art_54',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un proveedor estadounidense de un modelo GPAI ofrece su API a empresas en España y el resto de la UE sin contar con una filial establecida en la Unión. ¿Qué obligación le impone el artículo 54 antes de introducir su modelo en el mercado de la Unión?',
    options: [
      'Trasladar preceptivamente su infraestructura central de centros de datos y cómputo a territorio de un Estado miembro de la Unión para garantizar la soberanía de los datos procesados conforme al artículo 54.',
      'Queda plenamente exonerado de obligaciones previas en la Unión, recayendo en exclusiva sobre las empresas clientes europeas la carga de homologar el modelo GPAI ante la Oficina Europea de Inteligencia Artificial.',
      'Constituir una fianza dineraria de garantía ante el Banco Europeo de Inversiones por un importe equivalente al 3 % del volumen global de negocio anual para responder de eventuales sanciones bajo el artículo 101.',
      'Designar mediante mandato escrito a un representante autorizado establecido en la Unión con las facultades del artículo 54.3 para custodiar la documentación técnica del Anexo XI y cooperar con la Oficina de IA.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 54.1 exige a los proveedores de modelos GPAI establecidos en terceros países que designen por mandato escrito a un representante autorizado establecido en la Unión antes de introducir el modelo en el mercado de la UE (salvo modelos open-source sin riesgo sistémico según el Art. 54.6).',
    enterpriseLesson:
      'Cuando contrates APIs de modelos GPAI extracomunitarios, verifica que el proveedor cuenta con representante autorizado designado en la Unión Europea conforme al Art. 54.',
    citations: [
      makeCitation({
        id: 'art_54.p1',
        targetType: 'paragraph',
        articleId: 'art_54',
        paragraphId: 'art_54.p1',
        displayLabel: 'Art. 54.1 y 54.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Antes de introducir un modelo de IA de uso general en el mercado de la Unión, los proveedores establecidos en terceros países designarán, mediante mandato escrito, a un representante autorizado que esté establecido en la Unión.',
      }),
    ],
  },
  {
    id: 'qz_21',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI y Riesgo Sistémico (Cap. V)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Qué diferencia existe entre la documentación del Anexo XI y la del Anexo XII que debe elaborar el proveedor de un modelo GPAI conforme al artículo 53.1?',
    options: [
      'El Anexo XI contiene la documentación técnica completa para la Oficina de IA y autoridades nacionales (Art. 53.1.a), mientras que el Anexo XII recoge la información técnica y limitaciones destinada a proveedores posteriores que integren el modelo (Art. 53.1.b).',
      'El Anexo XI regula de forma exclusiva las especificaciones físicas de hardware de los servidores de cómputo, mientras que el Anexo XII establece las cláusulas de confidencialidad comercial y licencias de propiedad intelectual exigibles a usuarios corporativos.',
      'El Anexo XI recoge la información pública de transparencia orientada a los consumidores finales del producto, mientras que el Anexo XII contiene el código fuente completo del modelo auditado por un organismo notificado con arreglo a las directrices del Anexo VII.',
      'Ambos anexos comparten idéntico alcance técnico y destinatarios institucionales, diferenciándose únicamente en que el Anexo XI se redacta en la lengua propia del Estado miembro de origen y el Anexo XII en una lengua oficial de trabajo de la Comisión Europea.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 53.1 distingue entre la documentación regulatoria profunda del Anexo XI (para la Oficina de IA y autoridades nacionales) y el paquete documental de transparencia B2B del Anexo XII (para que los proveedores posteriores comprendan las capacidades y limitaciones del modelo y puedan cumplir sus propias obligaciones del Reglamento).',
    enterpriseLesson:
      'Como empresa integradora (downstream provider), exige siempre a tu proveedor de LLM el paquete documental del Anexo XII (Art. 53.1.b): es tu insumo legal imprescindible para documentar tu sistema.',
    citations: [
      makeCitation({
        id: 'art_53.p1',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p1',
        displayLabel: 'Art. 53.1(a)-(b) y Anexos XI-XII · Reglamento (UE) 2024/1689',
        exactQuote:
          'a) elaborarán y mantendrán actualizada la documentación técnica del modelo... que contendrá, como mínimo, la información indicada en el anexo XI... b) elaborarán, mantendrán actualizada y pondrán a disposición información y documentación para los proveedores de sistemas de IA que tengan previsto integrar el modelo... que contendrá, como mínimo, los elementos indicados en el anexo XII.',
      }),
    ],
  },
  {
    id: 'qz_22',
    topicId: 'gpai',
    topicLabel: 'Modelos GPAI y Riesgo Sistémico (Cap. V)',
    articleId: 'art_92',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 92 y el Reglamento de ejecución (UE) 2026/1755 (DOUE-L-2026-81109), ¿qué facultades tiene la Oficina de IA respecto a la evaluación técnica de un modelo GPAI?',
    options: [
      'Carece de facultades para realizar exámenes técnicos directos, limitándose a recopilar los informes y auditorías que el proveedor decida publicar de forma voluntaria en repositorios científicos internacionales de acceso abierto.',
      'Puede efectuar evaluaciones técnicas directamente o mediante el Grupo Científico para auditar el cumplimiento o investigar riesgos sistémicos, pudiendo recabar acceso al modelo mediante APIs o herramientas adecuadas según el artículo 92.',
      'Las facultades inspectoras de la Oficina de IA quedan subordinadas a la autorización judicial previa del Tribunal de Justicia de la Unión Europea y solo pueden incoarse una vez transcurridos diez años desde el entrenamiento.',
      'La evaluación técnica de modelos fundacionales se atribuye de manera exclusiva a las agencias nacionales de vigilancia del mercado de cada Estado miembro, careciendo la Comisión Europea de acceso directo a las APIs del modelo.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 92 faculta a la Oficina de IA para realizar evaluaciones de modelos GPAI (con apoyo del Grupo Científico de expertos independientes del Art. 68) y exigir acceso técnico al modelo mediante APIs u otros medios técnicos, régimen desarrollado por el Reglamento (UE) 2026/1755 (DOUE-L-2026-81109).',
    enterpriseLesson:
      'Los proveedores de modelos GPAI deben disponer de entornos de evaluación aislados y APIs de auditoría para responder a requerimientos de la Oficina Europea de IA bajo el Art. 92.',
    citations: [
      makeCitation({
        id: 'art_92.p1',
        targetType: 'paragraph',
        articleId: 'art_92',
        paragraphId: 'art_92.p1',
        displayLabel: 'Art. 92 y DOUE-L-2026-81109 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Oficina de IA podrá llevar a cabo evaluaciones del modelo de IA de uso general en cuestión para: a) evaluar el cumplimiento por parte del proveedor de las obligaciones establecidas en el presente Reglamento... b) investigar los riesgos sistémicos.',
      }),
    ],
  },

  // =========================================================================
  // 4. TRANSPARENCIA ESPECÍFICA (topicId: 'transparency') — 6 preguntas
  // =========================================================================
  {
    id: 'qz_23',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una tienda online despliega un asistente conversacional basado en un LLM para atender reclamaciones de clientes por chat y voz. Según el artículo 50.1, ¿qué obligación tiene?',
    options: [
      'Configurar el asistente para que simule la identidad de un teleoperador humano con nombre ficticio con el fin de optimizar los índices de conversión comercial y la empatía percibida por el consumidor en la plataforma.',
      'Inscribir el agente conversacional en el registro europeo de sistemas de alto riesgo del Anexo VIII y recabar una autorización administrativa previa expedida por la autoridad nacional de protección de datos competente.',
      'Diseñar el sistema para informar a las personas de que interactúan con una IA, salvo que resulte evidente para una persona razonablemente informada, atenta y perspicaz conforme al artículo 50.1 del Reglamento.',
      'Someter cada diálogo generado por el asistente a una revisión humana retrospectiva en un plazo de veinticuatro horas y conservar las grabaciones de voz íntegras durante diez años bajo el régimen del artículo 12.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 50.1 exige que todo sistema de IA destinado a interactuar directamente con personas físicas informe de forma clara y distinguible al usuario de que está interactuando con un sistema de IA (salvo cuando sea evidente por el contexto).',
    enterpriseLesson:
      'En todo chatbot, voicebot o agente de atención al cliente, incluye en el primer mensaje o saludo de voz un aviso explícito de que el usuario interactúa con un sistema de IA.',
    citations: [
      makeCitation({
        id: 'art_50.p1',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p1',
        displayLabel: 'Art. 50.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores velarán por que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de manera que las personas físicas afectadas estén informadas de que están interactuando con un sistema de IA.',
      }),
    ],
  },
  {
    id: 'qz_24',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 50.2, ¿qué obligación técnica recae sobre los PROVEEDORES de sistemas de IA (incluidos los GPAI) que generan contenido sintético de audio, imagen, vídeo o texto?',
    options: [
      'Deben depositar una copia idéntica de cada archivo multimedia generado en el repositorio central de la Comisión Europea en un plazo máximo de cuarenta y ocho horas para su cotejo preventivo contra delitos de desinformación.',
      'Quedan eximidos de cualquier deber técnico de marcado o etiquetado en origen, trasladándose íntegramente la obligación de advertencia al usuario final que descargue o difunda públicamente el material en redes sociales.',
      'Tienen prohibido de manera absoluta generar imágenes fotorrealistas de personas o clonación de voces humanas en la Unión Europea, salvo habilitación legal expresa para productoras cinematográficas con marcado CE previo.',
      'Deben velar por que los resultados de salida estén marcados en formato legible por máquina y sean detectables como generados artificialmente (marcas de agua o metadatos), salvo si cumplen una función auxiliar de edición estándar.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 50.2 obliga a los proveedores de sistemas generativos de audio, imagen, vídeo o texto a implantar soluciones técnicas eficaces, interoperables, sólidas y fiables (metadatos, marcas de agua, criptografía tipo C2PA) para que los outputs estén marcados en formato legible por máquina como generados artificialmente.',
    enterpriseLesson:
      'Si tu plataforma SaaS genera imágenes, audio, vídeo o texto mediante IA, integra marcado criptográfico / metadatos C2PA y watermarking en el pipeline de salida antes de entregar el archivo al usuario.',
    citations: [
      makeCitation({
        id: 'art_50.p2',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p2',
        displayLabel: 'Art. 50.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores de sistemas de IA, incluidos los sistemas de IA de uso general, que generen contenido sintético de audio, imagen, vídeo o texto velarán por que los resultados de salida del sistema de IA estén marcados en un formato legible por máquina y sean detectables como generados o manipulados artificialmente.',
      }),
    ],
  },
  {
    id: 'qz_25',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un medio digital publica un artículo informativo sobre economía (asunto de interés público) generado íntegramente por un LLM. ¿En qué caso queda EXENTO el responsable del despliegue de la obligación de informar de que el texto ha sido generado artificialmente según el artículo 50.4 párrafo segundo?',
    options: [
      'Cuando el texto generado haya sido sometido a revisión humana o control editorial y una persona física o jurídica asuma de forma expresa la responsabilidad editorial de la publicación (Art. 50.4 párrafo 2).',
      'Cuando el artículo se catalogue como columna de opinión o pieza de análisis macroeconómico con una extensión no superior a ochocientas palabras según las normas deontológicas de la prensa periódica de la Unión.',
      'En ningún supuesto fáctico o legal, imponiendo el artículo 50.4 una obligación imperativa de advertencia al lector que no admite excepciones ni siquiera ante procesos de filtrado y supervisión periodística.',
      'Únicamente cuando el modelo fundacional empleado para redactar la pieza cuente con marcado CE de conformidad y no haya sido entrenado con fuentes protegidas por derechos de autor con arreglo al Anexo XI.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 50.4 párrafo segundo obliga a los desplegadores de sistemas de IA que generen o manipulen textos publicados con el fin de informar al público sobre asuntos de interés público a declarar que el texto se ha generado o manipulado artificialmente, EXCEPTO cuando el contenido haya pasado por un proceso de revisión humana o control editorial y exista una persona física o jurídica que asuma la responsabilidad editorial.',
    enterpriseLesson:
      'En comunicación corporativa o medios, si publicas textos sobre asuntos de interés público generados por IA sin aviso, debes acreditar un flujo real de revisión humana y un responsable editorial identificado.',
    citations: [
      makeCitation({
        id: 'art_50.p4',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p4',
        displayLabel: 'Art. 50.4 párrafo 2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue de un sistema de IA que genere o manipule texto publicado con el fin de informar al público sobre asuntos de interés público declararán que el texto se ha generado o manipulado artificialmente. Esta obligación no se aplicará cuando el contenido generado por la IA haya sido sometido a un proceso de revisión humana o de control editorial y cuando una persona física o jurídica tenga la responsabilidad editorial de la publicación del contenido.',
      }),
    ],
  },
  {
    id: 'qz_26',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una productora de cine utiliza un sistema de IA generativa para rejuvenecer digitalmente a un actor en una película manifiestamente artística o satírica (ultrafalsificación / deepfake). Según el artículo 50.4 párrafo primero, ¿cómo debe cumplirse la obligación de transparencia?',
    options: [
      'Mediante una advertencia sobreimpresa permanente en la parte inferior de la pantalla y la interrupción obligatoria del metraje cinematográfico cada quince minutos para informar al espectador de la manipulación biométrica.',
      'La obligación de transparencia se limita a revelar la existencia de dicho contenido de manera adecuada que no obstaculice la exhibición ni el disfrute de la obra artística, como por ejemplo en los títulos de crédito.',
      'La producción queda eximida de cualquier deber de información al catalogarse las obras cinematográficas de ficción como creaciones expresamente excluidas del ámbito material del Reglamento según el artículo 2.3.',
      'Debe remitir el metraje íntegro a la agencia nacional de supervisión audiovisual con treinta días de antelación al estreno comercial para obtener la preceptiva autorización de difusión cultural en salas públicas.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 50.4 exige a los desplegadores que generen o manipulen imágenes, audio o vídeo que constituyan una ultrafalsificación (deepfake) hacer público que han sido generados artificialmente; pero cuando forme parte de una obra o programa manifiestamente artístico, creativo, satírico o de ficción, la obligación se limita a revelarlo de manera adecuada que no obstaculice la exhibición o el disfrute de la obra.',
    enterpriseLesson:
      'En publicidad creativa, cine o entretenimiento con avatares sintéticos o deepfakes, incluye un aviso claro pero no intrusivo (créditos o leyenda visible) para cumplir el Art. 50.4.',
    citations: [
      makeCitation({
        id: 'art_50.p4',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p4',
        displayLabel: 'Art. 50.4 párrafo 1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando el contenido forme parte de una obra o un programa manifiestamente artísticos, creativos, satíricos o de ficción, o de una obra o un programa análogos, las obligaciones de transparencia establecidas en el presente apartado se limitarán a la obligación de revelar la existencia de dicho contenido generado o manipulado de una manera adecuada que no obstaculice la exhibición o el disfrute de la obra.',
      }),
    ],
  },
  {
    id: 'qz_27',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'En un caso de uso permitido de reconocimiento de emociones o categorización biométrica (fuera del trabajo y de centros educativos, donde está prohibido por el Art. 5.1.f), ¿qué exige el artículo 50.3 al responsable del despliegue?',
    options: [
      'No impone ninguna obligación específica de transparencia previa a los afectados, bastando con incorporar una mención genérica del tratamiento en la memoria anual de sostenibilidad corporativa de la entidad.',
      'Exige solicitar preceptivamente una autorización administrativa previa ante la autoridad nacional de protección de datos y depositar el código fuente del algoritmo en el registro oficial de la Oficina de IA.',
      'Informar del funcionamiento del sistema a las personas expuestas a él y tratar los datos personales de conformidad con los Reglamentos (UE) 2016/679 (RGPD) y 2018/1725 según el artículo 50.3 del Reglamento.',
      'Obliga a someter el sistema a una auditoría por organismo notificado del Anexo VII y obtener una certificación de conformidad CE para productos sanitarios antes de cualquier despliegue con particulares.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 50.3 obliga a los responsables del despliegue de sistemas de reconocimiento de emociones o de categorización biométrica (en los ámbitos no prohibidos por el Art. 5) a informar del funcionamiento del sistema a las personas físicas expuestas a él y a tratar sus datos conforme al RGPD.',
    enterpriseLesson:
      'Si utilizas análisis emocional o biométrico permitido (p. ej. estudios de mercado en laboratorio con voluntarios), debes informar previamente a las personas expuestas y contar con base legítima bajo el RGPD y realizar evaluación de alto riesgo del Anexo III.1.',
    citations: [
      makeCitation({
        id: 'art_50.p3',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p3',
        displayLabel: 'Art. 50.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue de un sistema de reconocimiento de emociones o de un sistema de categorización biométrica informarán del funcionamiento del sistema a las personas físicas expuestas a él, y tratarán los datos personales de conformidad con los Reglamentos (UE) 2016/679 y (UE) 2018/1725.',
      }),
    ],
  },
  {
    id: 'qz_28',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cuándo debe facilitarse a las personas físicas afectadas la información de transparencia exigida por los apartados 1 a 4 del artículo 50?',
    options: [
      'En el plazo de treinta días naturales posteriores a la finalización completa de la prestación del servicio automatizado o de la inferencia algorítmica.',
      'Únicamente cuando la persona física formule una reclamación formal por escrito o ejerza sus derechos de acceso reconocidos en el artículo 85 del Reglamento.',
      'Exclusivamente en los términos y condiciones de contratación redactados en una de las lenguas oficiales de trabajo de la Unión Europea previo registro.',
      'De forma clara y distinguible, a más tardar en el momento de la primera interacción o exposición, respetando los requisitos de accesibilidad aplicables (Art. 50.5).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 50.5 dispone que la información a que se refieren los apartados 1 a 4 se facilitará a las personas físicas afectadas de manera clara y distinguible, a más tardar en el momento de la primera interacción o exposición, y se ajustará a los requisitos de accesibilidad aplicables.',
    enterpriseLesson:
      'No escondas el aviso de IA en la cláusula 42 de los Términos de Uso: debe mostrarse de forma clara, accesible y a más tardar en la primera interacción o exposición.',
    citations: [
      makeCitation({
        id: 'art_50.p5',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p5',
        displayLabel: 'Art. 50.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La información a que se refieren los apartados 1 a 4 se facilitará a las personas físicas afectadas de manera clara y distinguible, a más tardar en el momento de la primera interacción o exposición. Dicha información se ajustará a los requisitos de accesibilidad aplicables.',
      }),
    ],
  },

  // =========================================================================
  // 5. GOBERNANZA Y SANCIONES (topicId: 'governance_sanctions') — 7 preguntas
  // =========================================================================
  {
    id: 'qz_29',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones (Caps. VII, IX y XII)',
    articleId: 'art_99',
    titleId: 'tit_XII',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cuál es la sanción administrativa máxima prevista en el artículo 99.3 por el incumplimiento de la prohibición de las prácticas de IA del artículo 5 para una gran empresa?',
    options: [
      'Hasta 35.000.000 EUR o hasta el 7 % del volumen de negocios mundial total del ejercicio financiero anterior, aplicándose el importe que resulte superior (Art. 99.3).',
      'Hasta 20.000.000 EUR o hasta el 4 % del volumen de negocios mundial anual, equiparándose formalmente al régimen sancionador de infracciones muy graves del artículo 83 del RGPD.',
      'Hasta 15.000.000 EUR o hasta el 3 % del volumen de negocios mundial total, coincidiendo con el tramo aplicable al incumplimiento de requisitos de alto riesgo.',
      'Hasta 7.500.000 EUR o hasta el 1,5 % del volumen de negocios mundial total para supuestos de falsedad o falta de cooperación con las autoridades nacionales.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 99.3 fija el tramo sancionador más alto del Reglamento: hasta 35.000.000 EUR o hasta el 7 % del volumen de negocios mundial total del ejercicio anterior (aplicándose la cuantía superior para grandes empresas, y la inferior para pymes y startups según el Art. 99.6).',
    enterpriseLesson:
      'El incumplimiento del Artículo 5 conlleva un riesgo sancionador de hasta el 7 % de la facturación consolidada global del grupo empresarial (casi el doble que el RGPD).',
    citations: [
      makeCitation({
        id: 'art_99.p3',
        targetType: 'paragraph',
        articleId: 'art_99',
        paragraphId: 'art_99.p3',
        displayLabel: 'Art. 99.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El incumplimiento de la prohibición de las prácticas de IA a que se refiere el artículo 5 estará sujeto a multas administrativas de hasta 35 000 000 EUR o, si el infractor es una empresa, de hasta el 7 % de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior, si esta cuantía fuera superior.',
      }),
    ],
  },
  {
    id: 'qz_30',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones (Caps. VII, IX y XII)',
    articleId: 'art_99',
    titleId: 'tit_XII',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una startup española (pyme) con una facturación anual mundial de 2.000.000 € comete una infracción de las obligaciones de proveedor de alto riesgo (sujeta al tramo de 15.000.000 € o 3 % del artículo 99.4). Según la regla especial del artículo 99.6 para pymes y startups, ¿cuál es el techo máximo de la multa que se le puede imponer?',
    options: [
      '15.000.000 €, ya que el régimen sancionador imperativo del artículo 99.4 impone siempre la aplicación del importe más elevado con independencia de la forma jurídica.',
      '60.000 € (el 3 % de 2.000.000 €), al aplicarse para pymes y empresas emergentes la cuantía inferior entre el importe fijo y el porcentaje según el artículo 99.6.',
      '140.000 € (el 7 % de 2.000.000 €), al considerarse las obligaciones de alto riesgo como vulneraciones equivalentes a las prácticas prohibidas del artículo 5.',
      'Queda totalmente exenta de multas dinerarias durante sus tres primeros ejercicios fiscales en virtud del régimen de fomento de startups recogido en el artículo 99.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 99.6 establece una regla de proporcionalidad crucial: "En el caso de las pymes, incluidas las empresas emergentes, cada multa a que se refiere el presente artículo llegará hasta los porcentajes o los importes señalados en los apartados 3, 4 y 5, si esta cuantía fuera inferior". El 3 % de 2 M€ son 60.000 €, muy inferior a 15 M€.',
    enterpriseLesson:
      'Para pymes y startups, el techo sancionador real está limitado por el porcentaje de su facturación anual (7 %, 3 % o 1 %), evitando multas fijas multimillonarias confiscatorias.',
    citations: [
      makeCitation({
        id: 'art_99.p6',
        targetType: 'paragraph',
        articleId: 'art_99',
        paragraphId: 'art_99.p6',
        displayLabel: 'Art. 99.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'En el caso de las pymes, incluidas las empresas emergentes, cada multa a que se refiere el presente artículo llegará hasta los porcentajes o los importes señalados en los apartados 3, 4 y 5, si esta cuantía fuera inferior.',
      }),
    ],
  },
  {
    id: 'qz_31',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones (Caps. VII, IX y XII)',
    articleId: 'art_73',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un sistema de IA de alto riesgo desplegado en un hospital sufre un incidente grave que provoca el fallecimiento de una persona. Según el artículo 73.4, ¿en qué plazo máximo debe el proveedor notificarlo a la autoridad de vigilancia del mercado tras establecer (o sospechar razonablemente) el vínculo causal?',
    options: [
      'En el plazo general improrrogable de quince días naturales previsto en el artículo 73.2, aplicable indistintamente a cualquier categoría de incidente grave sin distinción de daños corporales.',
      'A más tardar dos días naturales tras el suceso, al equipararse el fallecimiento de una persona con la alteración crítica irreversible de infraestructuras sanitarias del artículo 73.3 del Reglamento.',
      'Inmediatamente después de establecer el vínculo causal y, en cualquier caso, a más tardar diez días después de la fecha en que tuvo conocimiento del incidente grave con resultado de muerte (Art. 73.4).',
      'En un plazo no superior a setenta y dos horas hábiles, remitiendo simultáneamente un informe forense preliminar al Supervisor Europeo de Protección de Datos bajo los protocolos de urgencia del artículo 75.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 73 establece tres plazos de notificación de incidentes graves: (1) regla general: hasta 15 días (Art. 73.2); (2) infracción generalizada o alteración grave e irreversible de infraestructuras críticas: hasta 2 días (Art. 73.3); y (3) fallecimiento de una persona: hasta 10 días (Art. 73.4). Si es necesario para garantizar la notificación oportuna, el proveedor puede presentar una notificación inicial incompleta seguida de una completa (Art. 73.5).',
    enterpriseLesson:
      'Configura tus playbooks de respuesta a incidentes de IA con los tres relojes legales del Art. 73: 2 días (infraestructura crítica / infracción masiva), 10 días (fallecimiento) y 15 días (resto de incidentes graves).',
    citations: [
      makeCitation({
        id: 'art_73.p4',
        targetType: 'paragraph',
        articleId: 'art_73',
        paragraphId: 'art_73.p4',
        displayLabel: 'Art. 73.2, 73.3 y 73.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'No obstante lo dispuesto en el apartado 2, en caso de fallecimiento de una persona, la notificación se efectuará inmediatamente después de que el proveedor o el responsable del despliegue haya establecido un vínculo causal entre el sistema de IA de alto riesgo y el incidente grave, o tan pronto como haya establecido la posibilidad razonable de que exista dicho vínculo, y, en cualquier caso, a más tardar diez días después de la fecha en que el proveedor o, en su caso, el responsable del despliegue haya tenido conocimiento del incidente grave.',
      }),
    ],
  },
  {
    id: 'qz_32',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones (Caps. VII, IX y XII)',
    articleId: 'art_74',
    titleId: 'tit_IX',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿En qué condiciones pueden las autoridades de vigilancia del mercado (como la AESIA en España) exigir acceso al CÓDIGO FUENTE de un sistema de IA de alto riesgo según el artículo 74.13?',
    options: [
      'En cualquier momento y sin necesidad de motivación técnica especial, bastando una resolución ordinaria de inicio de inspección sobre cualquier sistema de IA comercializado en el mercado por el proveedor investigado.',
      'Únicamente mediante mandamiento judicial previo dictado por el tribunal penal competente y siempre que exista sospecha fundada de infracción grave de las prácticas prohibidas tipificadas en el artículo 5 del Reglamento.',
      'En ningún supuesto fáctico o jurídico, al gozar el código fuente de protección absoluta como secreto comercial e industrial de la empresa conforme a la Directiva (UE) 2016/943 frente a cualquier autoridad pública.',
      'Previa solicitud motivada, cuando sea estrictamente necesario para evaluar la conformidad del sistema de alto riesgo y tras agotar o resultar insuficientes las auditorías sobre datos y documentación técnica (Art. 74.13).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 74.13 permite a las autoridades de vigilancia del mercado acceder al código fuente previa solicitud motivada cuando se cumplan dos condiciones acumulativas: que sea necesario para evaluar la conformidad con los requisitos de alto riesgo, y que las pruebas/auditorías sobre datos y documentación se hayan agotado o hayan resultado insuficientes. El código fuente recibido se trata como información confidencial y secreto comercial (Art. 78).',
    enterpriseLesson:
      'Incluye en los contratos de desarrollo o licenciamiento de IA de alto riesgo una cláusula de depósito o colaboración técnica que permita cumplir requerimientos motivados de código fuente bajo el Art. 74.13.',
    citations: [
      makeCitation({
        id: 'art_74.p13',
        targetType: 'paragraph',
        articleId: 'art_74',
        paragraphId: 'art_74.p13',
        displayLabel: 'Art. 74.13 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando sea necesario para evaluar la conformidad de un sistema de IA de alto riesgo con los requisitos establecidos en el capítulo III, sección 2, se concederá a las autoridades de vigilancia del mercado, previa solicitud motivada, acceso al código fuente del sistema de IA, únicamente cuando se cumplan las dos condiciones siguientes...',
      }),
    ],
  },
  {
    id: 'qz_33',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones (Caps. VII, IX y XII)',
    articleId: 'art_86',
    titleId: 'tit_IX',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un ciudadano ve denegada su solicitud de préstamo hipotecario por una decisión adoptada por el banco sobre la base de los resultados de salida de un sistema de IA de alto riesgo (Anexo III.5.b), produciendo efectos jurídicos o afectándole significativamente. ¿Qué derecho le reconoce el artículo 86.1 frente al responsable del despliegue?',
    options: [
      'Derecho a obtener del responsable del despliegue explicaciones claras y significativas sobre el papel que la IA tuvo en el proceso de decisión y los elementos principales del resultado adoptado (Art. 86.1).',
      'Derecho a exigir la anulación cautelar automática de la denegación del préstamo hipotecario y la concesión forzosa del crédito solicitando una indemnización supervisada por el Banco de España bajo el artículo 86.',
      'Derecho a recibir una copia íntegra descargable de los pesos numéricos y la arquitectura de la red neuronal del modelo de scoring conforme al principio de transparencia de datos del Anexo IV.',
      'Ningún derecho directo de explicación individual frente a entidades bancarias privadas, debiendo dirigir sus reclamaciones exclusivamente a la Oficina de IA en Bruselas o al Defensor del Pueblo.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 86.1 consagra el derecho a una explicación de las decisiones individuales: toda persona afectada sujeta a una decisión adoptada por el responsable del despliegue basándose en el resultado de un sistema de alto riesgo del Anexo III que produzca efectos jurídicos o le afecte de manera similarmente significativa en su salud, seguridad o derechos fundamentales tiene derecho a obtener explicaciones claras y significativas sobre el papel de la IA y los elementos principales de la decisión.',
    enterpriseLesson:
      'Tus sistemas de alto riesgo en banca, seguros, RR.HH. o educación deben contar con explicabilidad (XAI / motivos principales de la decisión) lista para ser entregada al afectado que ejercite su derecho del Art. 86.',
    citations: [
      makeCitation({
        id: 'art_86.p1',
        targetType: 'paragraph',
        articleId: 'art_86',
        paragraphId: 'art_86.p1',
        displayLabel: 'Art. 86.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Toda persona afectada que esté sujeta a una decisión que adopte el responsable del despliegue sobre la base de los resultados de salida de un sistema de IA de alto riesgo enumerado en el anexo III... tendrá derecho a obtener del responsable del despliegue explicaciones claras y significativas sobre el papel que el sistema de IA ha tenido en el proceso de toma de decisiones y los principales elementos de la decisión adoptada.',
      }),
    ],
  },
  {
    id: 'qz_34',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones (Caps. VII, IX y XII)',
    articleId: 'art_57',
    titleId: 'tit_VI',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 57.12, ¿qué beneficio sancionador obtienen los futuros proveedores que participan de buena fe en un espacio controlado de pruebas para la IA (sandbox regulatorio, como el de la AESIA en España)?',
    options: [
      'Perciben de forma automática una subvención comunitaria a fondo perdido por importe de un millón de euros y quedan plenamente exentos de tributación durante los primeros cuatro ejercicios fiscales del proyecto.',
      'Las autoridades competentes no impondrán multas administrativas por infracciones del Reglamento siempre que cumplan el plan específico y sigan de buena fe las orientaciones de la autoridad supervisora (Art. 57.12).',
      'Obtienen una dispensa total y permanente de responsabilidad civil extracontractual por los daños corporales o patrimoniales que el prototipo algorítmico pudiera ocasionar a terceros durante la fase de ensayo.',
      'Quedan exonerados de tramitar la evaluación de la conformidad ante un organismo notificado durante toda la vida útil comercial del sistema una vez superado favorablemente el período de pruebas en el sandbox regulatorio.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 57.12 establece un puerto seguro frente a multas administrativas del Reglamento de IA para los participantes en el sandbox regulatorio que cumplan el plan de pruebas y sigan de buena fe las orientaciones de la autoridad (sin perjuicio de la responsabilidad civil por daños a terceros del Art. 57.12 in fine).',
    enterpriseLesson:
      'El Sandbox de la AESIA (Art. 57 y RD 817/2023) es la vía idónea para validar sistemas innovadores de alto riesgo con acompañamiento regulatorio y sin riesgo de multas administrativas durante el ensayo.',
    citations: [
      makeCitation({
        id: 'art_57.p12',
        targetType: 'paragraph',
        articleId: 'art_57',
        paragraphId: 'art_57.p12',
        displayLabel: 'Art. 57.12 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las autoridades competentes no impondrán multas administrativas por infracciones del presente Reglamento cuando los futuros proveedores que participen en el espacio controlado de pruebas para la IA respeten el plan específico y las condiciones de su participación y sigan de buena fe las orientaciones facilitadas por la autoridad nacional competente.',
      }),
    ],
  },
  {
    id: 'qz_35',
    topicId: 'governance_sanctions',
    topicLabel: 'Gobernanza y Sanciones (Caps. VII, IX y XII)',
    articleId: 'art_68',
    titleId: 'tit_VII',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Qué competencia especial otorga el artículo 90 al Grupo Científico de Expertos Independientes creado conforme al artículo 68?',
    options: [
      'Acordar la clausura cautelar directa y el bloqueo de servidores de cualquier proveedor de modelos de IA en territorio de la Unión sin intervención ni autorización previa de la Comisión Europea.',
      'Imponer sanciones económicas coercitivas de hasta diez millones de euros a las empresas proveedoras que omitan remitir la documentación técnica del Anexo XI en el plazo de quince días hábiles.',
      'Emitir una alerta cualificada a la Oficina de IA cuando sospeche fundadamente que un modelo GPAI plantea un riesgo sistémico a escala de la Unión o reúne las condiciones del artículo 51 del Reglamento.',
      'Expedir títulos comunitarios de propiedad industrial y patentes de exclusividad sobre invenciones generadas por modelos de IA que carezcan de autoría humana conforme al Convenio sobre la Patente Europea.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 90 faculta al Grupo Científico de expertos independientes (Art. 68) para emitir alertas cualificadas a la Oficina de IA si sospecha razonablemente que un modelo GPAI plantea un riesgo sistémico concreto o supera los umbrales del Art. 51, activando los poderes de solicitud de información y evaluación de los Arts. 91 y 92.',
    enterpriseLesson:
      'La vigilancia sobre modelos GPAI no depende solo de la autodeclaración del proveedor: el Grupo Científico puede activar de oficio una investigación mediante alerta cualificada (Art. 90).',
    citations: [
      makeCitation({
        id: 'art_90.p1',
        targetType: 'paragraph',
        articleId: 'art_90',
        paragraphId: 'art_90.p1',
        displayLabel: 'Art. 90.1 y Art. 68 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El grupo científico podrá emitir una alerta cualificada a la Oficina de IA cuando tenga motivos para sospechar que: a) un modelo de IA de uso general plantea un riesgo sistémico concreto a escala de la Unión; o b) un modelo de IA de uso general cumple los requisitos establecidos en el artículo 51.',
      }),
    ],
  },

  // =========================================================================
  // 6. PLAZOS Y APLICACIÓN TRANSITORIA (topicId: 'deadlines') — 6 preguntas
  // =========================================================================
  {
    id: 'qz_36',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 111–113)',
    articleId: 'art_113',
    titleId: 'tit_XIII',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 113 del Reglamento (UE) 2024/1689, ¿en qué fecha exacta comenzaron a ser aplicables las prohibiciones del Capítulo II (Artículo 5) y la obligación de alfabetización en IA del Capítulo I (Artículo 4)?',
    options: [
      'El 1 de agosto de 2024 (a los 20 días de su publicación en el DOUE).',
      'El 2 de agosto de 2026 (a los 24 meses de la entrada en vigor general).',
      'El 2 de agosto de 2027 (a los 36 meses para sistemas de alto riesgo).',
      'El 2 de febrero de 2025 (a los 6 meses de la entrada en vigor oficial).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 113, párrafo tercero, letra a) establece que los capítulos I (Disposiciones generales, incluido el Art. 4 sobre alfabetización en IA) y II (Prácticas de IA prohibidas del Art. 5) son aplicables a partir del 2 de febrero de 2025.',
    enterpriseLesson:
      'Las prohibiciones del Art. 5 y la alfabetización en IA del Art. 4 fueron las primeras obligaciones en entrar en aplicación el 2 de febrero de 2025.',
    citations: [
      makeCitation({
        id: 'art_113.p4',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p4',
        displayLabel: 'Art. 113 párrafo 3(a) · Reglamento (UE) 2024/1689',
        exactQuote: 'los capítulos I y II serán aplicables a partir del 2 de febrero de 2025;',
      }),
    ],
  },
  {
    id: 'qz_37',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 111–113)',
    articleId: 'art_113',
    titleId: 'tit_XIII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué bloques del Reglamento entraron en aplicación el 2 de agosto de 2025 (12 meses), y qué artículo concreto de sanciones quedó pospuesto hasta el 2 de agosto de 2026 según el artículo 113, letra b)?',
    options: [
      'Capítulo III Sección 4 (organismos notificados), Capítulo V (modelos GPAI), Capítulo VII (gobernanza), artículo 78 (confidencialidad) y Capítulo XII (sanciones), a excepción expresa del artículo 101 que aplica desde el 2 de agosto de 2026.',
      'Únicamente el régimen general de marcado CE del Anexo V y las obligaciones para sistemas de alto riesgo del Anexo III, posponiéndose las facultades de supervisión de la Oficina de IA y el régimen sancionador hasta el 2 de agosto del año 2027.',
      'La totalidad de los requisitos técnicos de ciberseguridad del artículo 15 y la evaluación del impacto en derechos fundamentales del artículo 27, aplazándose las multas del artículo 99 hasta el mes de agosto del año 2028.',
      'Exclusivamente los códigos de conducta voluntarios del artículo 95 para pymes y el registro comunitario de sistemas de IA, posponiéndose la constitución formal de la Oficina Europea de IA hasta el 2 de agosto de 2027.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 113, párrafo tercero, letra b) fija el 2 de agosto de 2025 para organismos notificados, modelos GPAI (Cap. V), gobernanza (Cap. VII), confidencialidad (Art. 78) y sanciones (Cap. XII), exceptuando expresamente el artículo 101 (multas de la Comisión a proveedores GPAI), que pasó a aplicar en la fecha general del 2 de agosto de 2026.',
    enterpriseLesson:
      'En octubre de 2026, tanto las obligaciones GPAI (desde ago 2025) como las multas de la Comisión del Art. 101 (desde ago 2026) están ya plenamente vigentes.',
    citations: [
      makeCitation({
        id: 'art_113.p5',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p5',
        displayLabel: 'Art. 113 párrafo 3(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'el capítulo III, sección 4, el capítulo V, el capítulo VII y el capítulo XII y el artículo 78 serán aplicables a partir del 2 de agosto de 2025, a excepción del artículo 101;',
      }),
    ],
  },
  {
    id: 'qz_38',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 111–113)',
    articleId: 'art_113',
    titleId: 'tit_XIII',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿En qué fecha será aplicable el artículo 6, apartado 1, relativo a los sistemas de IA de alto riesgo que son componentes de seguridad de productos regulados en el Anexo I (como dispositivos médicos MDR o maquinaria)?',
    options: [
      'El 2 de febrero de 2025 (a los 6 meses de la entrada en vigor, junto con el artículo 5).',
      'El 2 de agosto de 2027 (a los 36 meses de la entrada en vigor, según el Art. 113 letra c).',
      'El 2 de agosto de 2025 (a los 12 meses de la entrada en vigor, junto con los modelos GPAI).',
      'El 2 de agosto de 2026 (a los 24 meses de la entrada en vigor, junto con los del Anexo III).',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 113, párrafo tercero, letra c) concede un plazo de 36 meses (hasta el 2 de agosto de 2027) para los sistemas de IA de alto riesgo clasificados bajo el artículo 6, apartado 1 (productos cubiertos por la legislación de armonización del Anexo I), mientras que los del artículo 6, apartado 2 (Anexo III) aplican desde el 2 de agosto de 2026.',
    enterpriseLesson:
      'Distingue siempre entre alto riesgo del Anexo III (aplicable desde el 2 de agosto de 2026) y alto riesgo en productos regulados del Anexo I (aplicable desde el 2 de agosto de 2027).',
    citations: [
      makeCitation({
        id: 'art_113.p6',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p6',
        displayLabel: 'Art. 113 párrafo 3(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'el artículo 6, apartado 1, y las obligaciones correspondientes del presente Reglamento serán aplicables a partir del 2 de agosto de 2027.',
      }),
    ],
  },
  {
    id: 'qz_39',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 111–113)',
    articleId: 'art_111',
    titleId: 'tit_XIII',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una empresa privada introdujo en el mercado y puso en servicio un sistema de IA de alto riesgo del Anexo III en mayo de 2025 (antes del 2 de agosto de 2026). Según la cláusula de "grandfathering" del artículo 111.2, ¿cuándo queda sujeto dicho sistema a las obligaciones de alto riesgo del Reglamento?',
    options: [
      'Queda plenamente exento de por vida por aplicación del principio de irretroactividad, sin que eventuales reentrenamientos algorítmicos o rediseños posteriores puedan alterar su condición jurídica consolidada.',
      'Pasa a quedar sujeto de forma automática e inmediata el 3 de agosto de 2026, debiendo paralizar su funcionamiento en producción si no dispone para esa fecha del correspondiente marcado CE y registro europeo.',
      'Únicamente si a partir del 2 de agosto de 2026 sufre cambios significativos en su diseño, salvo si es utilizado por autoridades públicas, cuya adecuación límite es el 2 de agosto de 2030 conforme al artículo 111.2.',
      'Solo queda sujeto si la entidad supera un volumen de facturación anual de cincuenta millones de euros o si el sistema de IA llega a causar incidentes graves notificados a la autoridad competente bajo el artículo 73.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 111.2 establece un régimen transitorio clave para sistemas de alto riesgo introducidos en el mercado o puestos en servicio antes del 2 de agosto de 2026: solo quedan sujetos al Reglamento si a partir de esa fecha sufren "cambios significativos en su diseño" (sin perjuicio del Art. 5, que aplica siempre). Si son utilizados por autoridades públicas, tienen como fecha tope absoluta el 2 de agosto de 2030.',
    enterpriseLesson:
      'Para sistemas legacy puestos en producción antes del 2 de agosto de 2026, documenta rigurosamente el control de versiones: un cambio significativo de diseño o finalidad posterior a agosto de 2026 activa todas las obligaciones de alto riesgo.',
    citations: [
      makeCitation({
        id: 'art_111.p2',
        targetType: 'paragraph',
        articleId: 'art_111',
        paragraphId: 'art_111.p2',
        displayLabel: 'Art. 111.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Sin perjuicio de la aplicación del artículo 5... el presente Reglamento se aplicará a los operadores de sistemas de IA de alto riesgo, distintos de los sistemas a que se refiere el apartado 1 del presente artículo, que se hayan introducido en el mercado o puesto en servicio antes del 2 de agosto de 2026, únicamente si, a partir de esa fecha, dichos sistemas son objeto de cambios significativos en su diseño.',
      }),
    ],
  },
  {
    id: 'qz_40',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 111–113)',
    articleId: 'art_111',
    titleId: 'tit_XIII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 111.3, ¿de qué plazo disponen los proveedores de modelos de IA de uso general (GPAI) que ya habían sido introducidos en el mercado ANTES del 2 de agosto de 2025 (por ejemplo, modelos lanzados en 2023 o 2024) para cumplir las obligaciones del Reglamento?',
    options: [
      'Debían cesar de inmediato su distribución comercial en el mercado de la Unión a más tardar el 2 de agosto de 2025 al no contemplarse prórrogas temporales.',
      'Disponen de un período de adaptación extraordinario que se extiende hasta el 2 de agosto de 2030 para modelos fundacionales desarrollados por empresas emergentes.',
      'Quedan exonerados de cumplir las obligaciones del Capítulo V de forma indefinida, rigiendo únicamente para las versiones entrenadas a partir de agosto de 2026.',
      'Deben adoptar las medidas necesarias para cumplir las obligaciones del Reglamento a más tardar el 2 de agosto de 2027 (24 meses de adaptación según el Art. 111.3).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 111.3 concede un período transitorio hasta el 2 de agosto de 2027 para que los proveedores de modelos GPAI introducidos en el mercado antes del 2 de agosto de 2025 adopten las medidas necesarias para cumplir el Capítulo V.',
    enterpriseLesson:
      'Los modelos GPAI lanzados a partir del 2 de agosto de 2025 debían cumplir desde su día 1; los lanzados antes de esa fecha tienen como fecha límite de regularización el 2 de agosto de 2027 (Art. 111.3).',
    citations: [
      makeCitation({
        id: 'art_111.p3',
        targetType: 'paragraph',
        articleId: 'art_111',
        paragraphId: 'art_111.p3',
        displayLabel: 'Art. 111.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores de modelos de IA de uso general que se hayan introducido en el mercado antes del 2 de agosto de 2025 adoptarán las medidas necesarias para cumplir las obligaciones establecidas en el presente Reglamento a más tardar el 2 de agosto de 2027.',
      }),
    ],
  },
  {
    id: 'qz_41',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 111–113)',
    articleId: 'art_60',
    titleId: 'tit_VI',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 60.4(e), cuando un proveedor realiza pruebas de un sistema de IA de alto riesgo en condiciones reales fuera de un sandbox regulatorio, ¿cuál es la duración máxima permitida para dichas pruebas?',
    options: [
      'No superarán el tiempo necesario para alcanzar sus objetivos y, como máximo, 6 meses, prorrogables por otros 6 meses adicionales previa notificación motivada a la autoridad de vigilancia del mercado (Art. 60.4.e).',
      'Un plazo improrrogable de 30 días naturales a contar desde la notificación a la autoridad de vigilancia, debiendo cesar toda prueba real si no se obtiene la certificación de conformidad en dicho plazo.',
      'Un plazo de hasta 24 meses ininterrumpidos para consolidar la maduración técnica de la solución, sin requerir autorización administrativa previa cuando el ensayo se limite a empresas colaboradoras.',
      'La duración de las pruebas es jurídicamente indefinida en el tiempo, quedando supeditada de manera exclusiva a que ninguna persona física afectada formule una reclamación formal ante la autoridad nacional competente.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 60.4(e) limita temporalmente las pruebas en condiciones reales fuera de un sandbox al tiempo estrictamente necesario y, como máximo, a 6 meses, prorrogables por otros 6 meses adicionales previa notificación motivada del proveedor a la autoridad de vigilancia del mercado.',
    enterpriseLesson:
      'Las pruebas en condiciones reales fuera de sandbox (Art. 60) no pueden usarse para comercializar indefinidamente sin marcado CE: tienen un límite estricto de 6 meses (+6 de prórroga).',
    citations: [
      makeCitation({
        id: 'art_60.p4',
        targetType: 'paragraph',
        articleId: 'art_60',
        paragraphId: 'art_60.p4',
        displayLabel: 'Art. 60.4(e) · Reglamento (UE) 2024/1689',
        exactQuote:
          'las pruebas en condiciones reales no durarán más tiempo del necesario para alcanzar sus objetivos y, en cualquier caso, no más de seis meses, que podrán prorrogarse por un período adicional de seis meses, previa notificación del proveedor a la autoridad de vigilancia del mercado, acompañada de una explicación de la necesidad de tal prórroga;',
      }),
    ],
  },

  // =========================================================================
  // 7. CASOS PRÁCTICOS EMPRESARIALES Y TRANSVERSALES (topicId: 'enterprise_cases') — 7 preguntas
  // =========================================================================
  {
    id: 'qz_42',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Empresariales (Arts. 2, 4, 25, 26, 95, 97)',
    articleId: 'art_25',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una consultora de RR.HH. contrata la API de un modelo GPAI de uso general (que originalmente no tenía finalidad de alto riesgo) y le añade prompts de sistema, RAG e interfaz propia para comercializarlo a empresas bajo su propia marca como "Sistema automatizado de filtrado y descarte de candidatos en entrevistas de selección". Según el artículo 25.1, ¿qué ocurre con el rol jurídico de la consultora?',
    options: [
      'Conserva plenamente su condición de mero responsable del despliegue profesional, recayendo la totalidad de las obligaciones de proveedor del artículo 16 y el marcado CE en la multinacional tecnológica originaria del modelo GPAI subyacente.',
      'Pasa a ser considerada proveedora de alto riesgo (Anexo III.4) según el artículo 25.1(c) al alterar la finalidad prevista hacia un uso de alto riesgo, asumiendo las obligaciones del artículo 16 (marcado CE, registro y Anexo IV).',
      'Queda plenamente exonerada de las exigencias de alto riesgo siempre que comercialice la solución como distribuidora bajo marca comercial propia y facture menos de diez millones de euros con arreglo a las exenciones para pymes del artículo 24.',
      'Pasa a catalogarse exclusivamente como importadora autorizada en virtud del artículo 23, bastando con comprobar que el modelo GPAI de origen dispone de ficha técnica del Anexo XII y absteniéndose de asumir las cargas de marcado CE.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 25.1(c) establece que cualquier responsable del despliegue, distribuidor, importador o tercero será considerado proveedor de un sistema de IA de alto riesgo (y sujeto al Art. 16) si modifica la finalidad prevista de un sistema de IA, incluido un sistema de IA de uso general, que no haya sido clasificado como de alto riesgo, de tal modo que se convierta en un sistema de IA de alto riesgo. Además, el proveedor inicial debe cooperar estrechamente facilitando la información necesaria (Art. 25.2).',
    enterpriseLesson:
      'Este es el caso más frecuente en empresas de software e integradores: construir un caso de uso del Anexo III (RR.HH., crédito, educación, triaje) encima de una API de LLM convierte a tu empresa en Proveedor de Alto Riesgo.',
    citations: [
      makeCitation({
        id: 'art_25.p1',
        targetType: 'paragraph',
        articleId: 'art_25',
        paragraphId: 'art_25.p1',
        displayLabel: 'Art. 25.1(c) y 25.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) si modifica la finalidad prevista de un sistema de IA, incluido un sistema de IA de uso general, que no haya sido clasificado como de alto riesgo y ya se haya introducido en el mercado o puesto en servicio, de tal modo que el sistema de IA en cuestión se convierta en un sistema de IA de alto riesgo de conformidad con el artículo 6.',
      }),
    ],
  },
  {
    id: 'qz_43',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Empresariales (Arts. 2, 4, 25, 26, 95, 97)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una corporación canadiense sin oficinas en la UE presta servicios de análisis automatizado de currículums a una empresa española. Los servidores del modelo están en Toronto, pero el informe de puntuación de los candidatos (output) se envía y utiliza en Madrid para decidir a quién contratar. ¿Le aplica el Reglamento (UE) 2024/1689 a la corporación canadiense?',
    options: [
      'No: el principio de territorialidad exime a los proveedores extranjeros que alojen sus servidores fuera del espacio comunitario, respondiendo exclusivamente la empresa española bajo la normativa laboral interna.',
      'Solo resultaría aplicable si la corporación canadiense mantuviese una sucursal física permanente en la Unión o si los servidores de inferencia fuesen trasladados de forma obligatoria a territorio comunitario.',
      'Sí: según el artículo 2.1(c), el Reglamento se aplica a proveedores y responsables del despliegue de terceros países cuando los resultados de salida generados por el sistema de IA se utilicen en la Unión.',
      'No: el suministro de software transfronterizo entre Canadá y la Unión Europea se rige de manera exclusiva por los acuerdos comerciales bilaterales, quedando exonerado de los requisitos técnicos del Anexo III.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 2.1(c) consagra el efecto extraterritorial de protección del mercado interior: el Reglamento aplica a proveedores y desplegadores de terceros países siempre que los resultados de salida (outputs) generados por el sistema de IA se utilicen dentro de la Unión Europea, evitando la externalización del procesamiento para eludir la ley.',
    enterpriseLesson:
      'Externalizar la ejecución de un modelo de alto riesgo a una nube o proveedor fuera de la UE no exime del Reglamento si el output se consume en decisiones dentro de la UE.',
    citations: [
      makeCitation({
        id: 'art_2.p1',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p1',
        displayLabel: 'Art. 2.1(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento se aplica a: c) los proveedores y responsables del despliegue de sistemas de IA que tengan su lugar de establecimiento o estén situados en un tercer país, cuando los resultados de salida generados por el sistema de IA se utilicen en la Unión.',
      }),
    ],
  },
  {
    id: 'qz_44',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Empresariales (Arts. 2, 4, 25, 26, 95, 97)',
    articleId: 'art_26',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa industrial en Bilbao va a poner en servicio un sistema de IA de alto riesgo para asignar turnos, evaluar el rendimiento y decidir promociones de su plantilla en fábrica. Antes de ponerlo en funcionamiento, ¿qué obligación laboral específica le impone el artículo 26.7?',
    options: [
      'No impone ninguna obligación de consulta ni información previa, integrándose la implantación de algoritmos laborales en el ejercicio exclusivo y privativo del poder de dirección empresarial reconocido en la ley.',
      'Exige someter el algoritmo a la aprobación vinculante del comité de empresa en un plazo de treinta días hábiles, facultando a la representación sindical para vetar de manera definitiva la implantación del sistema.',
      'Obliga al empleador a remitir el código fuente íntegro del sistema a la Inspección de Trabajo y Seguridad Social junto con una memoria de impacto laboral visada por la autoridad laboral con sesenta días de antelación.',
      'Los empleadores que sean responsables del despliegue deben informar a los representantes de los trabajadores y al personal afectado de que estarán sujetos al uso del sistema de IA de alto riesgo antes de activarlo (Art. 26.7).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 26.7 establece que antes de poner en servicio o utilizar un sistema de IA de alto riesgo en el lugar de trabajo, los responsables del despliegue que sean empleadores informarán a los representantes de los trabajadores y a los trabajadores afectados de que estarán sujetos a la utilización del sistema de IA de alto riesgo, de conformidad con las normas de la Unión y nacionales sobre información y consulta de los trabajadores.',
    enterpriseLesson:
      'En España, esta obligación del Art. 26.7 se engarza directamente con el Art. 64.4.d) del Estatuto de los Trabajadores (Ley Rider): informa siempre al comité de empresa y a la plantilla antes de activar IA de alto riesgo laboral.',
    citations: [
      makeCitation({
        id: 'art_26.p7',
        targetType: 'paragraph',
        articleId: 'art_26',
        paragraphId: 'art_26.p7',
        displayLabel: 'Art. 26.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Antes de poner en servicio o utilizar un sistema de IA de alto riesgo en el lugar de trabajo, los responsables del despliegue que sean empleadores informarán a los representantes de los trabajadores y a los trabajadores afectados de que estarán sujetos a la utilización del sistema de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_45',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Empresariales (Arts. 2, 4, 25, 26, 95, 97)',
    articleId: 'art_49',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un operador eléctrico va a desplegar un sistema de IA de alto riesgo como componente de seguridad en la gestión y el funcionamiento del suministro de electricidad (Anexo III, punto 2: infraestructuras críticas). Según el artículo 49.4 y el artículo 71, ¿dónde debe registrarse dicho sistema?',
    options: [
      'A diferencia de otros sistemas del Anexo III inscritos en la base de datos de la UE (Art. 71), los sistemas de infraestructuras críticas del punto 2 se registran preceptivamente a nivel nacional conforme al artículo 49.4.',
      'En el portal público y de libre acceso de la base de datos comunitaria de la Unión Europea del artículo 71, detallando las especificaciones técnicas completas y las vulnerabilidades identificadas de la red de transporte eléctrico.',
      'Quedan plenamente eximidos de cualquier deber de inscripción o registro administrativo por tratarse de activos estratégicos amparados bajo el secreto de Estado y la salvaguardia de la seguridad nacional de los Estados.',
      'Exclusivamente en el registro mercantil del domicilio social del operador y en el directorio central de la Agencia de la Unión Europea para la Ciberseguridad (ENISA) en un plazo no superior a treinta días naturales.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Por razones de seguridad nacional y protección frente a sabotajes, los artículos 49.1, 49.3 y 49.4 excluyen los sistemas de infraestructuras críticas (punto 2 del Anexo III) de la base de datos central de la UE del Art. 71, disponiendo que para los sistemas del punto 2 del Anexo III el registro se realizará a nivel nacional ante la autoridad competente.',
    enterpriseLesson:
      'Si tu empresa opera infraestructuras críticas (agua, gas, calefacción, electricidad, tráfico o infraestructura digital), la inscripción de tus sistemas de alto riesgo se realiza en el registro nacional seguro (Art. 49.4), no en el portal público europeo.',
    citations: [
      makeCitation({
        id: 'art_49.p4',
        targetType: 'paragraph',
        articleId: 'art_49',
        paragraphId: 'art_49.p4',
        displayLabel: 'Art. 49.1 y 49.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'En el caso de los sistemas de IA de alto riesgo a que se refiere el anexo III, punto 2, los Estados miembros exigirán a los proveedores y a los responsables del despliegue que se inscriban a sí mismos y que registren el sistema a nivel nacional.',
      }),
    ],
  },
  {
    id: 'qz_46',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Empresariales (Arts. 2, 4, 25, 26, 95, 97)',
    articleId: 'art_4',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una pyme de diseño gráfico solo utiliza herramientas de IA de riesgo mínimo y de transparencia (generación de imágenes publicitarias y copilot de ofimática), sin ningún sistema de alto riesgo. ¿Le aplica la obligación de alfabetización en materia de IA del artículo 4?',
    options: [
      'No: la exigencia de capacitación y alfabetización técnica del artículo 4 se restringe de manera exclusiva a entidades que desarrollen o implanten sistemas de alto riesgo catalogados en los Anexos I y III del Reglamento.',
      'Sí: el artículo 4 vincula a todos los proveedores y responsables del despliegue con independencia del nivel de riesgo, exigiendo medidas para garantizar la alfabetización en IA del personal según su contexto de uso.',
      'Solo resulta de obligado cumplimiento para empresas que coticen en mercados regulados o superen una plantilla de cincuenta trabajadores fijos con arreglo a los umbrales de proporcionalidad fijados en el artículo 28.',
      'No: el marco formativo de competencias digitales posee naturaleza estrictamente voluntaria hasta el año 2030, fecha fijada por la Comisión para revisar la adopción de programas formativos en el tejido empresarial.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 4 está ubicado en el Capítulo I (Disposiciones Generales) y se aplica a todos los proveedores y responsables del despliegue de sistemas de IA, sin restringirse al alto riesgo. Exige garantizar en la mayor medida posible un nivel suficiente de alfabetización en IA del personal teniendo en cuenta sus conocimientos técnicos, experiencia y el contexto de uso.',
    enterpriseLesson:
      'Incluso si tu empresa solo usa herramientas ofimáticas con IA generativa, debes acreditar formación en alfabetización de IA (sesgos, alucinaciones, confidencialidad y derechos de autor) desde el 2 de febrero de 2025.',
    citations: [
      makeCitation({
        id: 'art_4.p1',
        targetType: 'paragraph',
        articleId: 'art_4',
        paragraphId: 'art_4.p1',
        displayLabel: 'Art. 4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores y responsables del despliegue de sistemas de IA adoptarán medidas para garantizar, en la mayor medida posible, un nivel suficiente de alfabetización en materia de IA de su personal y de las demás personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA.',
      }),
    ],
  },
  {
    id: 'qz_47',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Empresariales (Arts. 2, 4, 25, 26, 95, 97)',
    articleId: 'art_95',
    titleId: 'tit_X',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Para los sistemas de IA distintos de los de alto riesgo (riesgo mínimo, Título X), ¿qué promueve el artículo 95 a través de los códigos de conducta voluntarios?',
    options: [
      'La prohibición preventiva de comercializar cualquier software de IA en el mercado único que no disponga de una certificación técnica previa emitida por un organismo notificado con arreglo al régimen del Anexo VII.',
      'La constitución de tribunales arbitrales privados que sustituyan con carácter vinculante la competencia de los tribunales de justicia ordinarios en controversias derivadas del uso de algoritmos de riesgo mínimo.',
      'La aplicación voluntaria de requisitos de alto riesgo y compromisos sobre sostenibilidad medioambiental, accesibilidad para personas con discapacidad, gobernanza ética y diversidad en los equipos según el artículo 95.',
      'La inaplicación formal de los deberes de transparencia y marcado algorítmico previstos en el artículo 50 para aquellas compañías tecnológicas que acrediten fehacientemente su adhesión a un código de conducta europeo homologado.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 95 fomenta que proveedores y desplegadores de sistemas de IA que no sean de alto riesgo elaboren y apliquen códigos de conducta voluntarios que incorporen requisitos del Capítulo III Sección 2, sostenibilidad medioambiental, alfabetización, diseño inclusivo y diversidad en los equipos de desarrollo.',
    enterpriseLesson:
      'Adherirse a un código de conducta del Art. 95 en sistemas de riesgo mínimo demuestra diligencia corporativa (ESG y gobernanza responsable de IA) ante clientes e inversores.',
    citations: [
      makeCitation({
        id: 'art_95.p2',
        targetType: 'paragraph',
        articleId: 'art_95',
        paragraphId: 'art_95.p2',
        displayLabel: 'Art. 95.1 y 95.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Oficina de IA y los Estados miembros fomentarán y facilitarán la elaboración de códigos de conducta, incluida la gobernanza conexa, destinados a fomentar la aplicación voluntaria a sistemas de IA distintos de los sistemas de IA de alto riesgo de todos o algunos de los requisitos establecidos en el capítulo III, sección 2.',
      }),
    ],
  },
  {
    id: 'qz_48',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Empresariales (Arts. 2, 4, 25, 26, 95, 97)',
    articleId: 'art_97',
    titleId: 'tit_XI',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según los artículos 7 y 97 (Título XI — Delegación de poderes), ¿cómo puede actualizarse en el futuro la lista de casos de uso de alto riesgo del Anexo III sin necesidad de tramitar un nuevo Reglamento completo?',
    options: [
      'La enumeración de supuestos de alto riesgo del Anexo III tiene carácter pétreo y cerrado, exigiendo una reforma legislativa formal aprobada conjuntamente por el Parlamento Europeo y el Consejo mediante el procedimiento legislativo ordinario.',
      'Mediante resolución administrativa vinculante de la Oficina de IA a propuesta de los Estados miembros, sin sujeción a plazos de objeción por parte del Parlamento Europeo ni control político del Consejo de la Unión Europea.',
      'A través de acuerdos sectoriales de autorregulación promovidos por la industria tecnológica europea, adquiriendo eficacia jurídica vinculante tras su inscripción formal en el registro público de la Oficina de IA.',
      'Mediante actos delegados de la Comisión conforme al artículo 97 para añadir o modificar casos de uso dentro de los 8 ámbitos del Anexo III que planteen un riesgo equivalente o superior para la salud, seguridad o derechos fundamentales.',
    ],
    correctOptionIndex: 3,
    explanation:
      'Los artículos 7 y 97 otorgan a la Comisión Europea poderes delegados (por períodos renovables de cinco años y bajo control de objeción del Parlamento Europeo y del Consejo) para modificar el Anexo III añadiendo, modificando o suprimiendo casos de uso dentro de los 8 ámbitos del Anexo III conforme evolucione la tecnología.',
    enterpriseLesson:
      'El Anexo III es una lista viva: monitoriza los actos delegados anuales de la Comisión (Arts. 7, 97 y 112) porque un caso de uso hoy no listado dentro de los 8 sectores puede incorporarse por acto delegado.',
    citations: [
      makeCitation({
        id: 'art_7.p1',
        targetType: 'paragraph',
        articleId: 'art_7',
        paragraphId: 'art_7.p1',
        displayLabel: 'Art. 7.1 y Art. 97 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Comisión estará facultada para adoptar actos delegados con arreglo al artículo 97 a fin de modificar el anexo III añadiendo o modificando casos de uso de sistemas de IA de alto riesgo cuando se cumplan las dos condiciones siguientes...',
      }),
    ],
  },
];
