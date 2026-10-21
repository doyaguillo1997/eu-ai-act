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
      'Sí, siempre que los empleados firmen una cláusula de consentimiento en su contrato laboral.',
      'No, está expresamente prohibido por el artículo 5.1(f) al inferir emociones en el lugar de trabajo sin tener una finalidad médica o de seguridad física.',
      'Sí, pero se clasifica como sistema de alto riesgo del Anexo III punto 4 y requiere marcado CE.',
      'Sí, si solo se muestra un aviso de transparencia conforme al artículo 50.3.',
    ],
    correctOptionIndex: 1,
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
      'Verificar la identidad del propietario de un teléfono móvil mediante desbloqueo facial local.',
      'Crear o ampliar bases de datos de reconocimiento facial mediante la extracción no selectiva (scraping) de imágenes faciales de internet o de grabaciones de CCTV.',
      'Controlar el acceso físico a un centro de datos de alta seguridad con consentimiento de los empleados.',
      'Etiquetar fotos familiares en una galería privada almacenada en el dispositivo del usuario.',
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
      'Es un sistema de alto riesgo permitido bajo el Anexo III punto 5 si supera una FRIA.',
      'Es una práctica prohibida de puntuación ciudadana (social scoring) según el artículo 5.1(c), ya que aplica tanto al sector público como al privado.',
      'Solo está prohibida si la realiza un ayuntamiento o gobierno, pero es lícita para empresas privadas.',
      'Es un sistema de riesgo mínimo sujeto a códigos de conducta voluntarios.',
    ],
    correctOptionIndex: 1,
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
      'Los que agrupan imágenes médicas de tumores según su tamaño.',
      'Los que clasifican individualmente a personas físicas a partir de sus datos biométricos para deducir o inferir su raza, opiniones políticas, afiliación sindical, convicciones religiosas o filosóficas, vida sexual u orientación sexual.',
      'Los que verifican que el empleado que ficha en la entrada es quien dice ser.',
      'El etiquetado de registros biométricos adquiridos legalmente en el ámbito policial.',
    ],
    correctOptionIndex: 1,
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
      'Únicamente el artículo 95 sobre códigos de conducta voluntarios.',
      'El artículo 5.1(a) y 5.1(b), que prohíben técnicas deliberadamente manipuladoras/engañosas y la explotación de vulnerabilidades derivadas de la edad o discapacidad que provoquen perjuicios considerables.',
      'El artículo 51 sobre modelos GPAI con riesgo sistémico.',
      'Ninguno, porque los videojuegos están excluidos del Reglamento.',
    ],
    correctOptionIndex: 1,
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
      'Sí, si coloca un cartel informativo en la puerta del centro comercial.',
      'No: el uso en espacios de acceso público solo se contempla de forma excepcionalísima para fuerzas del orden ante 3 supuestos tasados (búsqueda de víctimas de secuestro/trata, amenaza terrorista o peligro inminente para la vida, y localización de sospechosos de delitos graves del Anexo II con pena >= 4 años) y con autorización judicial previa.',
      'Sí, siempre que los datos se borren a las 24 horas.',
      'Sí, previa comunicación a la cámara de comercio.',
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
      'Están permitidos sin restricciones para reducir la criminalidad.',
      'Quedan prohibidos cuando evalúan o predicen el riesgo de que una persona física cometa un delito basándose ÚNICAMENTE en la elaboración del perfil de la persona o en la evaluación de sus rasgos y características de personalidad, sin basarse en hechos objetivos y verificables vinculados a una actividad delictiva.',
      'Se prohíbe cualquier uso de estadística criminológica por zonas geográficas.',
      'Solo requieren el marcado CE del Anexo V.',
    ],
    correctOptionIndex: 1,
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
      'Sí, cualquier tarea preparatoria queda automáticamente exenta.',
      'No: el artículo 6.3 último párrafo establece que un sistema de IA del Anexo III se considerará SIEMPRE de alto riesgo cuando realice una elaboración de perfiles de personas físicas.',
      'Sí, si tiene menos de 50 empleados.',
      'Solo si no guarda los datos más de 24 horas.',
    ],
    correctOptionIndex: 1,
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
      'Ninguna obligación documental ni de registro.',
      'Debe documentar la evaluación antes de introducir el sistema en el mercado o ponerlo en servicio, presentarla si la autoridad competente la solicita y registrar igualmente el sistema en la base de datos de la UE (Art. 49.2).',
      'Debe obtener autorización previa del Parlamento Europeo.',
      'Debe pasar igualmente una auditoría por organismo notificado del Anexo VII.',
    ],
    correctOptionIndex: 1,
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
      'Al menos 15 días.',
      'Al menos 6 meses, salvo que el Derecho de la Unión o nacional aplicable disponga otra cosa.',
      'Exactamente 30 días naturales.',
      'Solo mientras dure la sesión activa del usuario.',
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
      'No, la FRIA del artículo 27 solo aplica a ministerios y ayuntamientos.',
      'Sí: el artículo 27.1 obliga expresamente a realizar una FRIA antes del primer uso tanto a los organismos públicos y entidades privadas que presten servicios públicos como a cualesquiera responsables del despliegue de sistemas de alto riesgo del Anexo III punto 5, letras b) (crédito/solvencia) y c) (seguros de vida y salud).',
      'Solo si el sistema ha sido desarrollado fuera de la Unión Europea.',
      'No, basta con publicar un aviso en la web del banco.',
    ],
    correctOptionIndex: 1,
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
      'Basta con una revisión estadística mensual de los resultados.',
      'El responsable del despliegue no podrá adoptar ninguna medida o decisión sobre la base de la identificación resultante del sistema, a menos que haya sido verificada y confirmada por separado por al menos DOS personas físicas con la competencia, formación y autoridad necesarias.',
      'La verificación puede delegarse en un segundo modelo de IA.',
      'Solo requiere confirmación humana cuando el índice de confianza sea inferior al 50 %.',
    ],
    correctOptionIndex: 1,
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
      'No, nunca se pueden usar datos sensibles ni siquiera para auditar sesgos.',
      'Sí, en la medida en que sea estrictamente necesario para la detección y corrección de sesgos en relación con los sistemas de IA de alto riesgo, sujeto a salvaguardias estrictas (datos sintéticos/anonimizados no suficientes, acceso restringido, no transmisión a terceros y supresión una vez corregido el sesgo).',
      'Sí, para fines de marketing directo si mejora la precisión del modelo.',
      'Sí, sin ningún requisito adicional de seguridad.',
    ],
    correctOptionIndex: 1,
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
      'Durante 2 años tras la primera venta.',
      'Durante un período de 10 años a partir de la introducción en el mercado o la puesta en servicio del sistema de IA de alto riesgo (Art. 18.1 y Art. 47.2).',
      'Durante 6 meses.',
      'Durante 50 años.',
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
      'Evaluación obligatoria por la Agencia Europea de Medicamentos.',
      'Procedimiento de evaluación de la conformidad fundamentado en un control interno (Anexo VI), que no prevé la participación de un organismo notificado.',
      'Auditoría presencial obligatoria por un organismo notificado según el Anexo VII en todos los casos.',
      'No requiere evaluación de la conformidad porque es software de recursos humanos.',
    ],
    correctOptionIndex: 1,
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
      'Superior a 10^18 FLOPs.',
      'Superior a 10^25 operaciones de coma flotante (FLOPs).',
      'Superior a 10^30 FLOPs.',
      'Cualquier modelo con más de 7.000 millones de parámetros.',
    ],
    correctOptionIndex: 1,
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
      'Queda exento de absolutamente todo el Reglamento de IA.',
      'Queda exento de la documentación técnica de los Anexos XI y XII (letras a y b del Art. 53.1), pero DEBE cumplir igualmente la política de respeto de derechos de autor (53.1.c) y publicar el resumen detallado sobre los datos de entrenamiento (53.1.d).',
      'Queda exento de derechos de autor pero debe pasar evaluación por organismo notificado.',
      'No tiene ninguna exención respecto a modelos propietarios.',
    ],
    correctOptionIndex: 1,
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
      'Cobrar una tasa por token, limitar el contexto a 4.000 palabras, usar servidores locales y prohibir el uso comercial.',
      '(a) Evaluar el modelo incluyendo pruebas con adversarios (red-teaming); (b) evaluar y mitigar posibles riesgos sistémicos; (c) hacer seguimiento e informar sin demora indebida a la Oficina de IA de los incidentes graves; y (d) garantizar un nivel adecuado de ciberseguridad para el modelo y su infraestructura física.',
      'Solicitar autorización previa a cada ayuntamiento europeo.',
      'Publicar obligatoriamente el código fuente bajo licencia GPL.',
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
      'Sin demora y, en cualquier caso, en un plazo de 2 semanas a partir del momento en que se cumpla dicho requisito o se tenga conocimiento de que se cumplirá.',
      'En el plazo de 1 año tras finalizar el entrenamiento.',
      'En un plazo de 6 meses.',
      'No existe obligación de notificarlo; la Comisión debe descubrirlo de oficio.',
    ],
    correctOptionIndex: 0,
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
      'Trasladar todos sus centros de datos a territorio europeo.',
      'Designar, mediante mandato escrito, a un representante autorizado establecido en la Unión para que cumpla las tareas del artículo 54.3 (verificar documentación técnica Anexo XI, conservarla y cooperar con la Oficina de IA).',
      'Ninguna, los proveedores extracomunitarios no tienen obligaciones.',
      'Pedir permiso a cada embajada.',
    ],
    correctOptionIndex: 1,
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
      'Son idénticas.',
      'El Anexo XI es la documentación técnica completa del modelo para ponerla a disposición de la Oficina de IA y las autoridades nacionales previa solicitud (53.1.a), mientras que el Anexo XII es la información y documentación destinada a los proveedores posteriores (integradores B2B) que integran el modelo GPAI en sus propios sistemas de IA (53.1.b), protegiendo al mismo tiempo los secretos comerciales.',
      'El Anexo XI aplica a hardware y el Anexo XII a marketing.',
      'El Anexo XII es exclusivo para consumidores finales.',
    ],
    correctOptionIndex: 1,
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
      'Solo puede leer artículos académicos publicados voluntariamente por el proveedor.',
      'Puede llevar a cabo evaluaciones del modelo GPAI (directamente o encargándolas a expertos independientes del Grupo Científico) para verificar el cumplimiento o investigar riesgos sistémicos, pudiendo solicitar acceso al modelo a través de sus interfaces de programación (APIs) o por otros medios técnicos adecuados, incluido el código fuente.',
      'No puede evaluar ningún modelo hasta transcurridos 10 años.',
      'Solo las autoridades municipales pueden evaluar modelos GPAI.',
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
      'Hacer pasar al asistente por un agente humano con nombre ficticio para generar confianza.',
      'Diseñar y desarrollar el sistema de manera que las personas físicas afectadas estén informadas de que están interactuando con un sistema de IA, a menos que resulte evidente desde el punto de vista de una persona física razonablemente informada, atenta y perspicaz.',
      'Pedir autorización judicial a cada cliente.',
      'Inscribir el chatbot de atención comercial en el Anexo I de productos sanitarios.',
    ],
    correctOptionIndex: 1,
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
      'Deben velar por que los resultados de salida del sistema estén marcados en un formato legible por máquina y sean detectables como generados o manipulados artificialmente (marcas de agua, metadatos, elementos criptográficos o huellas digitales), salvo cuando el sistema solo realice una función de apoyo para la edición estándar.',
      'Deben enviar cada imagen por correo postal a la Comisión Europea.',
      'No tienen ninguna obligación técnica; toda la responsabilidad recae en el usuario final.',
      'Está prohibido generar imágenes o audio sintético en la UE.',
    ],
    correctOptionIndex: 0,
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
      'Nunca está exento, aunque un periodista reescriba el texto.',
      'Cuando el contenido generado por la IA haya sido sometido a un proceso de revisión humana o de control editorial y una persona física o jurídica tenga la responsabilidad editorial de la publicación del contenido.',
      'Cuando el artículo tenga menos de 500 palabras.',
      'Cuando se publique en fin de semana.',
    ],
    correctOptionIndex: 1,
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
      'Queda prohibido el estreno de la película.',
      'Debe interrumpirse la película cada 5 minutos con una pantalla de advertencia a volumen máximo.',
      'La obligación de hacer público que el contenido ha sido generado o manipulado artificialmente se limita a revelar la existencia de dicho contenido de una manera adecuada que NO obstaculice la exhibición o el disfrute de la obra (por ejemplo, en los títulos de crédito).',
      'No hay obligación de informar en ningún lugar.',
    ],
    correctOptionIndex: 2,
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
      'Informar del funcionamiento del sistema a las personas físicas expuestas a él y tratar los datos personales de conformidad con los Reglamentos (UE) 2016/679 (RGPD) y 2018/1725 y la Directiva (UE) 2016/680.',
      'Nada, porque no es en el lugar de trabajo.',
      'Solo avisar a final de año en la memoria de sostenibilidad.',
      'Solicitar un certificado del Anexo I.',
    ],
    correctOptionIndex: 0,
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
      '30 días después de haber finalizado el servicio.',
      'De manera clara y distinguible, a más tardar en el momento de la primera interacción o exposición, y respetando los requisitos de accesibilidad aplicables (Art. 50.5).',
      'Solo si el usuario envía un burofax.',
      'Únicamente en inglés en los términos y condiciones generales.',
    ],
    correctOptionIndex: 1,
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
      'Hasta 20.000.000 EUR o el 4 % del volumen de negocios mundial.',
      'Hasta 35.000.000 EUR o de hasta el 7 % de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior, si esta cuantía fuera superior.',
      'Hasta 7.500.000 EUR o el 1 % del volumen de negocios.',
      'Hasta 15.000.000 EUR o el 3 % del volumen de negocios.',
    ],
    correctOptionIndex: 1,
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
      '15.000.000 €, porque siempre se aplica la cuantía mayor.',
      '60.000 € (el 3 % de 2.000.000 €), ya que para las pymes y empresas emergentes se aplica la cuantía INFERIOR entre el importe fijo y el porcentaje de facturación.',
      '35.000.000 €.',
      'Las startups están exentas de multas durante 10 años.',
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
      'En el plazo general de 15 días.',
      'Inmediatamente y, en cualquier caso, a más tardar 10 días después de la fecha en que el proveedor o el responsable del despliegue haya tenido conocimiento del incidente grave (siendo de 2 días en caso de infracción generalizada o incidente grave crítico del Art. 3.49.b).',
      'En el plazo de 90 días.',
      'En la memoria anual del ejercicio siguiente.',
    ],
    correctOptionIndex: 1,
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
      'Nunca; el código fuente es intocable.',
      'Previa solicitud motivada, cuando sea necesario para evaluar la conformidad de un sistema de IA de alto riesgo con los requisitos del Capítulo III, Sección 2, y únicamente cuando los procedimientos de prueba o auditoría y las verificaciones basados en datos y documentación hayan resultado agotados o insuficientes.',
      'Sin necesidad de motivación en cualquier sistema de riesgo mínimo.',
      'Publicándolo después en internet para cualquier ciudadano.',
    ],
    correctOptionIndex: 1,
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
      'Ninguno, salvo reclamar al proveedor del hardware.',
      'Derecho a obtener del responsable del despliegue explicaciones claras y significativas sobre el papel que el sistema de IA ha tenido en el proceso de toma de decisiones y los principales elementos de la decisión adoptada.',
      'Derecho a recibir una copia de los pesos neuronales del modelo.',
      'Derecho a que el préstamo se conceda automáticamente.',
    ],
    correctOptionIndex: 1,
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
      'Reciben una subvención automática de 1 millón de euros.',
      'Las autoridades competentes NO impondrán multas administrativas por infracciones del Reglamento siempre que respeten el plan específico y las condiciones de su participación y sigan de buena fe las orientaciones facilitadas por la autoridad nacional competente.',
      'Quedan exentos de pagar el Impuesto sobre Sociedades.',
      'Quedan exentos de responsabilidad civil por daños a terceros.',
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
      'Aprobar leyes nacionales en los Estados miembros.',
      'Emitir una "alerta cualificada" a la Oficina de IA cuando tenga motivos para sospechar que un modelo GPAI plantea un riesgo sistémico concreto a escala de la Unión o cumple los requisitos del artículo 51.',
      'Imponer penas de prisión.',
      'Conceder patentes europeas de software.',
    ],
    correctOptionIndex: 1,
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
      'El 1 de agosto de 2024.',
      'El 2 de febrero de 2025 (a los 6 meses de la entrada en vigor).',
      'El 2 de agosto de 2026.',
      'El 2 de agosto de 2027.',
    ],
    correctOptionIndex: 1,
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
      'Entró en vigor todo el Anexo I.',
      'Entraron en aplicación el Capítulo III Sección 4 (organismos notificados), el Capítulo V (modelos GPAI), el Capítulo VII (gobernanza), el artículo 78 (confidencialidad) y el Capítulo XII (sanciones), A EXCEPCIÓN del artículo 101 (multas a proveedores de modelos GPAI), que aplica desde el 2 de agosto de 2026.',
      'Solo entró en aplicación el Anexo X.',
      'No entró en aplicación ningún artículo en agosto de 2025.',
    ],
    correctOptionIndex: 1,
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
      'El 2 de febrero de 2025.',
      'El 2 de agosto de 2025.',
      'El 2 de agosto de 2027 (36 meses después de la entrada en vigor, según el Art. 113 letra c).',
      'El 31 de diciembre de 2035.',
    ],
    correctOptionIndex: 2,
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
      'Nunca, ni aunque se rediseñe por completo en 2027.',
      'Únicamente si, a partir del 2 de agosto de 2026, dicho sistema es objeto de "cambios significativos en su diseño" (salvo que esté destinado a ser utilizado por autoridades públicas, en cuyo caso debe adecuarse a más tardar el 2 de agosto de 2030 aunque no sufra cambios).',
      'Automáticamente el 3 de agosto de 2026 aunque el sistema permanezca congelado sin cambios.',
      'Solo si incurre en prácticas del artículo 95.',
    ],
    correctOptionIndex: 1,
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
      'Debían retirar el modelo el 2 de agosto de 2025.',
      'Adoptarán las medidas necesarias para cumplir las obligaciones establecidas en el Reglamento a más tardar el 2 de agosto de 2027 (24 meses adicionales de adaptación).',
      'Hasta el año 2035.',
      'Están exentos para siempre.',
    ],
    correctOptionIndex: 1,
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
      'No superarán el tiempo necesario para alcanzar sus objetivos y, en cualquier caso, un máximo de 6 meses, que podrá prorrogarse por un período adicional de 6 meses previa notificación motivada del proveedor a la autoridad de vigilancia del mercado.',
      'Un máximo de 5 años ininterrumpidos.',
      'Un máximo de 48 horas.',
      'Ilimitada mientras los usuarios no presenten reclamación.',
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
      'Sigue siendo un simple usuario doméstico sin obligaciones.',
      'Pasa a ser considerada PROVEEDOR de un sistema de IA de alto riesgo (Anexo III punto 4.a) en virtud del artículo 25.1(c) al modificar la finalidad prevista de un sistema de IA de uso general convirtiéndolo en alto riesgo, quedando sujeta a todas las obligaciones del artículo 16 (documentación Anexo IV, evaluación de conformidad, marcado CE y registro).',
      'Toda la responsabilidad recae únicamente en el fabricante del LLM base.',
      'Solo debe cumplir el artículo 98.',
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
      'No, porque sus servidores están en Canadá.',
      'Sí: según el artículo 2.1(c), el Reglamento se aplica a los proveedores y responsables del despliegue establecidos en un tercer país cuando los resultados de salida (outputs) generados por el sistema de IA se utilicen en la Unión.',
      'Solo si el CEO tiene nacionalidad europea.',
      'No, salvo que traslade sus servidores a Bruselas.',
    ],
    correctOptionIndex: 1,
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
      'Ninguna, forma parte del poder de dirección empresarial reservado.',
      'Los responsables del despliegue que sean empleadores deberán informar a los representantes de los trabajadores y a los trabajadores afectados de que estarán sujetos a la utilización del sistema de IA de alto riesgo antes de ponerlo en servicio.',
      'Publicar los salarios de toda la plantilla en el BOE.',
      'Pedir autorización a la Oficina Europea de Patentes.',
    ],
    correctOptionIndex: 1,
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
      'En la base de datos pública europea de libre acceso.',
      'A diferencia de los demás puntos del Anexo III (que se inscriben en la base de datos de la UE del Art. 71), para los sistemas de alto riesgo del punto 2 del Anexo III (infraestructuras críticas) los proveedores y responsables del despliegue se registrarán a nivel NACIONAL conforme al artículo 49.4.',
      'No se registran en ningún sitio.',
      'En el Registro Mercantil de cada provincia.',
    ],
    correctOptionIndex: 1,
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
      'No, el artículo 4 solo aplica a sistemas de alto riesgo del Anexo III.',
      'Sí: el artículo 4 aplica a TODOS los proveedores y responsables del despliegue de sistemas de IA (independientemente de su nivel de riesgo), exigiendo medidas para garantizar un nivel suficiente de alfabetización en IA de su personal y colaboradores según su contexto previsto de uso.',
      'Solo si la pyme cotiza en bolsa.',
      'No, la formación es voluntaria hasta 2032.',
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
      'Prohibir cualquier innovación no certificada.',
      'La aplicación voluntaria de todos o algunos de los requisitos de alto riesgo, así como compromisos específicos sobre sostenibilidad ambiental (diseño energéticamente eficiente), accesibilidad para personas con discapacidad, participación de las partes interesadas y diversidad de los equipos de desarrollo.',
      'Sustituir a los tribunales nacionales.',
      'Eliminar las obligaciones del artículo 50.',
    ],
    correctOptionIndex: 1,
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
      'No puede modificarse nunca.',
      'La Comisión está facultada para adoptar actos delegados con arreglo al artículo 97 a fin de modificar el Anexo III añadiendo o modificando casos de uso de sistemas de IA de alto riesgo cuando estén dentro de alguno de los 8 ámbitos ya enumerados en el Anexo III y planteen un riesgo equivalente o superior para la salud, la seguridad o los derechos fundamentales.',
      'Por decisión unilateral de cualquier empresa tecnológica.',
      'Mediante votación popular mensual.',
    ],
    correctOptionIndex: 1,
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
