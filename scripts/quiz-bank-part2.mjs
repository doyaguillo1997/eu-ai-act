import { makeCitation } from './legal-enrichment-data.mjs';

export const QUIZ_BANK_PART2 = [
  // =========================================================================
  // BLOQUE C. TRANSPARENCIA ESPECÍFICA (topicId: 'transparency') — 15 preguntas (qz_133 a qz_147)
  // =========================================================================
  {
    id: 'qz_133',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa desarrolla un motor de búsqueda web cuyo cuadro de texto autocompleta consultas mediante un modelo de IA y ordena resultados de productos, sin simular una conversación humana. Según el artículo 50.1, ¿está obligado el proveedor a mostrar un aviso adicional de que el usuario interactúa con un sistema de IA si ya presenta la interfaz expresamente como "Buscador Inteligente con IA"?',
    options: [
      'Sí, porque el artículo 50.1 exige en todo caso una advertencia emergente previa antes de la primera interacción, independientemente de la interfaz o del contexto de uso.',
      'No, porque los proveedores quedan legalmente exentos de las obligaciones del artículo 50.1 siempre que el sistema opere exclusivamente en motores de búsqueda web y no trate categorías especiales de datos personales conforme al RGPD.',
      'No, porque el artículo 50.1 exime de la obligación de informar cuando resulte evidente para una persona física razonablemente informada, atenta y perspicaz, teniendo en cuenta las circunstancias y el contexto de uso.',
      'Sí, salvo que el proveedor haya obtenido una dispensa expresa de la autoridad de vigilancia del mercado conforme al artículo 50.1 in fine tras superar una auditoría técnica de usabilidad.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 50.1 exige que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen de modo que estas sepan que interactúan con una IA, salvo que ello resulte evidente para una persona física razonablemente informada, atenta y perspicaz atendiendo a las circunstancias y al contexto de uso.',
    enterpriseLesson:
      'Evalúa la interfaz de tus funcionalidades de IA con el test de la "persona razonablemente informada, atenta y perspicaz": si el producto se presenta inequívocamente como herramienta de IA, el contexto ya cumple la evidencia; si imita a un agente humano (chat/voz), el aviso expreso es obligatorio.',
    citations: [
      makeCitation({
        id: 'art_50.p1',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p1',
        displayLabel: 'Art. 50.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores velarán por que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de manera que las personas físicas afectadas estén informadas de que están interactuando con un sistema de IA, a menos que ello resulte evidente desde el punto de vista de una persona física razonablemente informada, atenta y perspicaz, teniendo en cuenta las circunstancias y el contexto de uso.',
      }),
    ],
  },
  {
    id: 'qz_134',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿En qué supuesto queda excluida la obligación de transparencia del artículo 50.1 (informar a la persona física de que interactúa directamente con un sistema de IA) por razones de interés público?',
    options: [
      'En sistemas de IA autorizados por ley para detectar, prevenir, investigar o perseguir delitos, con salvaguardias para los derechos de terceros, salvo que estén a disposición del público para denunciar delitos.',
      'En sistemas de IA empleados por entidades de crédito y aseguradoras para prevenir el fraude financiero en transacciones electrónicas, siempre que cuenten con auditoría externa bajo el artículo 50.1.',
      'En sistemas de IA utilizados por las administraciones públicas tributarias para verificar declaraciones fiscales, siempre que las actuaciones automatizadas no deriven en sanciones administrativas directas.',
      'En sistemas de IA destinados a la gestión de emergencias y protección civil durante catástrofes naturales de gravedad extrema, a condición de que la interacción directa con los afectados no se prolongue durante más de veinticuatro horas.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 50.1 in fine excluye la obligación de revelar que se interactúa con una IA en los sistemas autorizados por ley para detectar, prevenir, investigar o perseguir delitos (por ejemplo, señuelos policiales encubiertos contra ciberdelincuencia), salvo cuando el sistema esté abierto al público general para presentar denuncias policiales.',
    enterpriseLesson:
      'Incluso en el sector público policial, los asistentes conversacionales de atención ciudadana para presentar denuncias sí deben informar de que son un sistema de IA conforme al Art. 50.1.',
    citations: [
      makeCitation({
        id: 'art_50.p1',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p1',
        displayLabel: 'Art. 50.1 in fine · Reglamento (UE) 2024/1689',
        exactQuote:
          'Esta obligación no se aplicará a los sistemas de IA autorizados por ley para detectar, prevenir, investigar o perseguir delitos, con sujeción a las salvaguardias adecuadas para los derechos y las libertades de terceros, a menos que dichos sistemas estén a disposición del público para denunciar un delito.',
      }),
    ],
  },
  {
    id: 'qz_135',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un estudio de fotografía y vídeo comercializa una aplicación con filtros de IA que únicamente corrigen el balance de blancos, reducen el ruido acústico y corrigen faltas ortográficas en subtítulos sin añadir ni alterar objetos ni el significado de la grabación original. Según el artículo 50.2, ¿debe marcar cada archivo exportado como contenido sintético generado por IA?',
    options: [
      'Sí, porque el artículo 50.2 impone el marcado preceptivo y legible por máquina a todo tratamiento de archivos multimedia mediante modelos de IA, con independencia del alcance concreto de la alteración técnica efectuada.',
      'No, porque el artículo 50.2 solo obliga al marcado técnico cuando la obra audiovisual editada sea distribuida en plataformas en línea con más de cuarenta y cinco millones de usuarios activos.',
      'Sí, salvo que el proveedor deposite el código fuente del filtro de reducción de ruido ante la Oficina de IA y obtenga una certificación de neutralidad semántica conforme al artículo 50.7.',
      'No, porque el artículo 50.2 exime del marcado a los sistemas que desempeñen una función de asistencia para la edición estándar o no alteren sustancialmente los datos de entrada ni su semántica.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 50.2 excluye expresamente del deber de marcado técnico de contenido sintético a los sistemas de IA que solo desempeñan una función de asistencia para la edición estándar (corrección de color, reducción de ruido, revisión ortográfica o de estilo) o que no alteran sustancialmente los datos de entrada ni su semántica.',
    enterpriseLesson:
      'Separa en tu arquitectura de producto las funciones de "asistencia de edición estándar" (exentas del Art. 50.2) de las funciones de "generación o manipulación sustancial" (sujetas a watermarking/metadatos C2PA).',
    citations: [
      makeCitation({
        id: 'art_50.p2',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p2',
        displayLabel: 'Art. 50.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Esta obligación no se aplicará en la medida en que los sistemas de IA desempeñen una función de asistencia para la edición estándar o no alteren sustancialmente los datos de entrada facilitados por el responsable del despliegue o su semántica.',
      }),
    ],
  },
  {
    id: 'qz_136',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Qué criterios debe ponderar un proveedor de IA generativa al elegir e implantar las soluciones técnicas de marcado legible por máquina (marcas de agua, metadatos, huellas digitales o criptografía) según el artículo 50.2?',
    options: [
      'Que utilicen obligatoriamente algoritmos criptográficos basados en cadenas de bloques públicas y garanticen una redundancia técnica de marcado resistente a cualquier manipulación física o digital del soporte.',
      'Que sean eficaces, interoperables, sólidas y fiables en la medida técnica viable, atendiendo a las especificidades del contenido, los costes de aplicación y el estado de la técnica de las normas pertinentes.',
      'Que implanten exclusivamente marcas de agua visibles que ocupen de forma permanente al menos el quince por ciento de la superficie del contenido audiovisual, garantizando su reconocimiento por cualquier usuario.',
      'Que apliquen técnicas patentadas de cifrado asimétrico homologadas individualmente por la Oficina de IA, con independencia de los costes de implantación o las limitaciones del formato multimedia analizado.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 50.2 exige que los proveedores garanticen que las soluciones técnicas de marcado y detección sean eficaces, interoperables, sólidas y fiables dentro de la viabilidad técnica, atendiendo a las particularidades de cada modalidad (texto, audio, imagen, vídeo), costes de implementación y el estado de la técnica reflejado en estándares internacionales.',
    enterpriseLesson:
      'Adopta estándares abiertos e interoperables (como C2PA para imagen/vídeo/audio) en lugar de formatos propietarios cerrados, cumpliendo así el requisito de interoperabilidad del Art. 50.2.',
    citations: [
      makeCitation({
        id: 'art_50.p2',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p2',
        displayLabel: 'Art. 50.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores se asegurarán de que sus soluciones técnicas sean eficaces, interoperables, sólidas y fiables en la medida en que sea técnicamente viable, teniendo en cuenta las especificidades y limitaciones de los diversos tipos de contenido, los costes de aplicación y el estado de la técnica generalmente reconocido, según pueda reflejarse en las normas técnicas pertinentes.',
      }),
    ],
  },
  {
    id: 'qz_137',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una clínica médica utiliza un sistema de IA para detectar el nivel de dolor y ansiedad de pacientes hospitalizados mediante análisis facial (uso médico permitido por la excepción del Art. 5.1.f). Según el artículo 50.3, ¿qué dos obligaciones acumulativas tiene la clínica como responsable del despliegue?',
    options: [
      'Obtener autorización judicial previa de la jurisdicción civil y depositar los modelos de visión artificial en el registro público de sistemas biométricos de la Comisión con carácter previo a cualquier uso.',
      'Publicar la lista anonimizada de diagnósticos en el portal de transparencia hospitalario y conservar las grabaciones de las expresiones faciales durante un plazo mínimo legal de cinco años conforme al RGPD.',
      'Informar de su funcionamiento a las personas físicas expuestas y tratar los datos personales con arreglo al Reglamento (UE) 2016/679 (sin perjuicio de los requisitos de alto riesgo si resultan aplicables).',
      'Notificar individualmente a la autoridad de protección de datos en un plazo de setenta y dos horas y someter cada análisis facial al consentimiento notarial preceptivo del paciente o de su representante legal.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El hecho de que un sistema de reconocimiento de emociones sea lícito por tener finalidad médica (escapando a la prohibición laboral/educativa del Art. 5.1.f) no lo exime del artículo 50.3: el responsable del despliegue debe informar a las personas físicas expuestas del funcionamiento del sistema y tratar sus datos biométricos/emocionales conforme al RGPD.',
    enterpriseLesson:
      'En entornos sanitarios o de seguridad vial donde el reconocimiento de emociones es legal (excepción del Art. 5.1.f), el deber de informar al afectado (Art. 50.3) y la base jurídica reforzada del Art. 9 RGPD siguen siendo obligatorios.',
    citations: [
      makeCitation({
        id: 'art_50.p3',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p3',
        displayLabel: 'Art. 50.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue de un sistema de reconocimiento de emociones o de un sistema de categorización biométrica informarán del funcionamiento del sistema a las personas físicas expuestas a él, y tratarán los datos personales de conformidad con los Reglamentos (UE) 2016/679 y (UE) 2018/1725 y la Directiva (UE) 2016/680, según corresponda.',
      }),
    ],
  },
  {
    id: 'qz_138',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿En qué supuesto prevé el artículo 50.3 párrafo segundo una excepción a la obligación de informar a las personas físicas expuestas a un sistema de categorización biométrica o de reconocimiento de emociones?',
    options: [
      'Cuando los sistemas estén autorizados por ley para detectar, prevenir e investigar delitos, con las salvaguardias adecuadas para los derechos y libertades de terceros y conforme al Derecho de la Unión.',
      'Cuando el despliegue se efectúe en espacios comerciales privados con el objetivo de prevenir pérdidas y fraudes en cajas de cobro, previa evaluación de impacto en la protección de datos bajo el RGPD.',
      'Cuando el tratamiento biométrico se realice en el ámbito laboral para evaluar el nivel de estrés térmico o cansancio de los trabajadores en sectores críticos regulados por convenios colectivos sectoriales.',
      'Cuando se trate de sistemas que traten datos estrictamente seudonimizados y almacenen los vectores de extracción biométrica durante un período no superior a setenta y dos horas en servidores seguros.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 50.3 párrafo segundo exceptúa del deber de información previa a los sistemas de categorización biométrica y reconocimiento de emociones que estén expresamente autorizados por ley para detectar, prevenir e investigar delitos, siempre con salvaguardias adecuadas y respeto al Derecho de la Unión.',
    enterpriseLesson:
      'Ninguna empresa privada puede invocar la excepción policial del Art. 50.3 párrafo segundo: en el sector privado, todo uso permitido de categorización biométrica o reconocimiento emocional exige información previa.',
    citations: [
      makeCitation({
        id: 'art_50.p3',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p3',
        displayLabel: 'Art. 50.3 párrafo 2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Esta obligación no se aplicará a los sistemas de IA utilizados para la categorización biométrica y el reconocimiento de emociones que hayan sido autorizados por ley para detectar, prevenir e investigar delitos, con sujeción a las salvaguardias adecuadas para los derechos y las libertades de terceros y de conformidad con el Derecho de la Unión.',
      }),
    ],
  },
  {
    id: 'qz_139',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cómo define el Reglamento (UE) 2024/1689 en su artículo 3.60 (en relación con el artículo 50.4) el concepto de "ultrafalsificación" (deepfake)?',
    options: [
      'Toda representación digital o simulación sintética tridimensional orientada al entretenimiento o videojuegos que reproduzca la voz humana sin contar con una licencia de marca registrada o de propiedad intelectual.',
      'Cualquier contenido multimedia automatizado que difunda afirmaciones falsas sobre figuras públicas o instituciones, con independencia de la técnica de aprendizaje automático empleada en su elaboración técnica.',
      'Un archivo de texto, audio o vídeo protegido por derechos de autor que haya sido alterado mediante redes generativas sin el consentimiento explícito de su titular registral bajo la Directiva (UE) 2019/790.',
      'Imagen o contenido de audio o vídeo generado o manipulado por IA que se asemeja a personas, objetos, lugares o sucesos existentes y puede inducir a pensar erróneamente que son auténticos o verídicos.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 3, punto 60, define la "ultrafalsificación" (deepfake) como una imagen o un contenido de audio o vídeo generado o manipulado por la IA que se asemeja a personas, objetos, lugares, entidades o sucesos existentes y que puede inducir a una persona a pensar erróneamente que son auténticos o verídicos. El artículo 50.4 impone al responsable del despliegue el deber de hacer público este carácter artificial.',
    enterpriseLesson:
      'Observa que la definición legal de deepfake (Art. 3.60) no se limita a rostros de personas: abarca también objetos, lugares, entidades o sucesos existentes recreados de forma hiperrealista en imagen, audio o vídeo.',
    citations: [
      makeCitation({
        id: 'art_50.p4',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p4',
        displayLabel: 'Art. 3.60 y Art. 50.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue de un sistema de IA que genere o manipule imágenes o contenidos de audio o vídeo que constituyan una ultrafalsificación harán público que la imagen o el contenido de audio o vídeo ha sido generado o manipulado artificialmente.',
      }),
    ],
  },
  {
    id: 'qz_140',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa cotizada utiliza un sistema de IA generativa para redactar y publicar automáticamente en su sala de prensa web comunicados para informar al público sobre el impacto ambiental de sus plantas energéticas (asunto de interés público), sin que ningún periodista ni directivo revise el borrador antes de su publicación automática. Según el artículo 50.4 párrafo segundo, ¿qué obligación tiene?',
    options: [
      'Notificar la publicación al registro de la Comisión Europea en un plazo de cuarenta y ocho horas y aportar una copia firmada digitalmente por el responsable de cumplimiento de la entidad cotizada.',
      'Declarar de forma clara y distinguible que el texto se ha generado artificialmente, pues carece de revisión humana o control editorial con asunción de responsabilidad editorial requeridos por el artículo 50.4.',
      'Insertar una marca de agua criptográfica en el código HTML de la noticia que vincule el artículo con la base de datos de modelos generativos de la Oficina de IA con arreglo al artículo 50.2.',
      'Suspender la difusión pública del comunicado hasta obtener la aprobación formal previa de la autoridad nacional de supervisión competente en materia de comunicación y mercados de valores.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 50.4 párrafo segundo obliga a declarar que el texto publicado para informar al público sobre asuntos de interés público ha sido generado o manipulado artificialmente. La exención exige dos requisitos cumulativos: (1) proceso de revisión humana o control editorial, y (2) que una persona física o jurídica asuma la responsabilidad editorial.',
    enterpriseLesson:
      'Nunca conectes un LLM directamente a la publicación automática de notas de prensa o informes públicos sin etiqueta de IA; si quieres publicar sin etiqueta, implanta un paso obligatorio de aprobación editorial humana con registro de quién asume la responsabilidad editorial.',
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
    id: 'qz_141',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un banco lanza un asistente virtual por voz y chat para clientes con discapacidad visual o auditiva. Además de informar de que es un sistema de IA a más tardar en la primera interacción, ¿qué exigencia adicional impone el artículo 50.5 en relación con la Directiva (UE) 2019/882 (Acta Europea de Accesibilidad)?',
    options: [
      'La información de transparencia facilitada a las personas afectadas deberá ajustarse a los requisitos de accesibilidad aplicables, garantizando canales sensoriales y formatos alternativos efectivos.',
      'El asistente virtual deberá estar exento del deber de información previa si la persona física manifiesta tener dificultades de comprensión lectora o sensorial en su primer acceso al servicio bancario.',
      'La entidad bancaria deberá someter la interfaz del asistente a la validación previa de la autoridad de supervisión financiera antes de desplegar cualquier función de interacción por voz o por texto.',
      'La comunicación de transparencia deberá remitirse obligatoriamente por correo postal certificado en soporte papel legible a todos los clientes bancarios inscritos en el registro de discapacidad.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 50.5 exige que la información de los apartados 1 a 4 se facilite de manera clara y distinguible a más tardar en la primera interacción o exposición y que "se ajustará a los requisitos de accesibilidad aplicables" (como los de la Directiva UE 2019/882 sobre requisitos de accesibilidad de los productos y servicios).',
    enterpriseLesson:
      'Las etiquetas de "Generado por IA" o avisos de chatbot no pueden ser meros iconos visuales inaccesibles: deben incluir atributos ARIA (`aria-label`) y locución en interfaces de voz para cumplir el Art. 50.5.',
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
  {
    id: 'qz_142',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Si un sistema de IA de alto riesgo del Capítulo III (por ejemplo, un sistema de entrevistas automatizadas de selección de personal del Anexo III punto 4) interactúa directamente con los candidatos por vídeo y voz, ¿desplazan las obligaciones de alto riesgo del Capítulo III a las obligaciones de transparencia del artículo 50?',
    options: [
      'Sí: el artículo 50.6 establece una cláusula de exclusión expresa para los sistemas del Anexo III, de modo que la evaluación de conformidad técnica sustituye íntegramente al deber de transparencia.',
      'Sí: las obligaciones de transparencia solo rigen supletoriamente cuando el proveedor no haya obtenido la certificación del marcado CE otorgada por un organismo notificado con arreglo al artículo 42.',
      'No: el artículo 50.6 dispone que los apartados 1 a 4 se entienden sin perjuicio de los requisitos del Capítulo III, por lo que ambos regímenes de obligaciones se aplican de forma cumulativa.',
      'No: pero el proveedor puede optar libremente por aplicar uno u otro régimen en función de los costes de cumplimiento normativo y de la naturaleza de los destinatarios finales de la evaluación laboral.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 50.6 dispone que lo previsto en los apartados 1 a 4 se entiende sin perjuicio de los requisitos y obligaciones establecidos en el Capítulo III (sistemas de alto riesgo) y tampoco afecta a otras obligaciones de transparencia del Derecho de la Unión o nacional.',
    enterpriseLesson:
      'La transparencia del Art. 50 es transversal y acumulativa: un chatbot de triaje médico o de selección de RR.HH. debe cumplir tanto el Capítulo III (alto riesgo) como el Art. 50.1 (aviso de interacción con IA).',
    citations: [
      makeCitation({
        id: 'art_50.p6',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p6',
        displayLabel: 'Art. 50.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los apartados 1 a 4 se entenderán sin perjuicio de los requisitos y obligaciones establecidos en el capítulo III y no afectarán a otras obligaciones de transparencia establecidas en el Derecho de la Unión o nacional para los responsables del despliegue de sistemas de IA.',
      }),
    ],
  },
  {
    id: 'qz_143',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué instrumento regula el artículo 50.7 para facilitar la aplicación efectiva de las obligaciones de marcado y detección de contenidos sintéticos y ultrafalsificaciones de los apartados 2 y 4?',
    options: [
      'La publicación preceptiva de directrices técnicas vinculantes dictadas por las autoridades de vigilancia del mercado sobre los protocolos de cifrado y metadatos aplicables en redes de difusión.',
      'La elaboración de códigos de buenas prácticas impulsados por la Oficina de IA a escala de la Unión, que la Comisión podrá aprobar mediante actos de ejecución para otorgarles validez general.',
      'Un sistema de licencias obligatorias previas gestionado por los organismos notificados que exige auditar cada conjunto de entrenamiento antes de exportar archivos multimedia al mercado interior.',
      'Un mecanismo sancionador de bloqueo automático en frontera gestionado por la Comisión para cualquier servicio de alojamiento que distribuya contenido sintético sin certificado técnico previo.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 50.7 encomienda a la Oficina de IA fomentar y facilitar la elaboración de códigos de buenas prácticas a escala de la Unión para la aplicación efectiva de las obligaciones sobre detección y etiquetado de contenidos generados o manipulados artificialmente, facultando a la Comisión para dotarlos de validez general mediante actos de ejecución.',
    enterpriseLesson:
      'Sigue los Códigos de Buenas Prácticas de la Oficina Europea de IA sobre marcado de contenido sintético (Art. 50.7): adherirse a ellos ofrece presunción práctica de idoneidad técnica en el etiquetado C2PA/watermarking.',
    citations: [
      makeCitation({
        id: 'art_50.p7',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p7',
        displayLabel: 'Art. 50.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Oficina de IA fomentará y facilitará la elaboración de códigos de buenas prácticas a escala de la Unión para facilitar la aplicación efectiva de las obligaciones relativas a la detección y el etiquetado de contenidos generados o manipulados artificialmente.',
      }),
    ],
  },
  {
    id: 'qz_144',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una agencia de marketing en Barcelona utiliza un generador de vídeo por IA para crear un anuncio comercial en el que un clon digital hiperrealista de un presentador famoso recomienda un producto financiero (con el consentimiento contractual de dicho presentador). ¿Exime el consentimiento del presentador a la agencia de revelar al público que el vídeo es una ultrafalsificación generada por IA bajo el artículo 50.4?',
    options: [
      'Sí: el artículo 50.4 supedita la obligación de advertencia al consentimiento del titular de los derechos de imagen, quedando extinguido el deber de transparencia si existe acuerdo contractual.',
      'Sí: la normativa comunitaria exime de cualquier revelación pública a los contenidos audiovisuales comerciales que cuenten con autorización previa de la entidad supervisora del sector financiero.',
      'No: pero la obligación se limita a registrar el contrato de cesión de imagen en el repositorio de la Oficina de IA en un plazo de treinta días desde la primera difusión publicitaria del anuncio publicitario.',
      'No: el artículo 50.4 protege al público frente al engaño audiovisual, por lo que el responsable del despliegue debe hacer público igualmente que el contenido ha sido generado o manipulado con IA.',
    ],
    correctOptionIndex: 3,
    explanation:
      'La obligación de transparencia del artículo 50.4 tiene como bien jurídico protegido la veracidad informativa y la percepción del público receptor frente a contenidos hiperrealistas generados por IA. El consentimiento de la persona clonada resuelve los derechos de imagen y protección de datos, pero no exime del deber de informar al público conforme al Art. 50.4.',
    enterpriseLesson:
      'En campañas con avatares o gemelos digitales de embajadores de marca, el contrato de derechos de imagen y el etiquetado de transparencia de IA (Art. 50.4) son dos requisitos independientes y ambos obligatorios.',
    citations: [
      makeCitation({
        id: 'art_50.p4',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p4',
        displayLabel: 'Art. 50.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue de un sistema de IA que genere o manipule imágenes o contenidos de audio o vídeo que constituyan una ultrafalsificación harán público que la imagen o el contenido de audio o vídeo ha sido generado o manipulado artificialmente.',
      }),
    ],
  },
  {
    id: 'qz_145',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'En la cadena de valor de la IA generativa, el artículo 50 reparte las obligaciones entre PROVEEDORES y RESPONSABLES DEL DESPLIEGUE. ¿Cuál de las siguientes asignaciones de responsabilidad es la jurídicamente exacta?',
    options: [
      'El proveedor asume el aviso de interacción (50.1) y el marcado técnico legible por máquina (50.2), mientras que el responsable del despliegue informa sobre biometría (50.3) y declara deepfakes y textos públicos (50.4).',
      'El responsable del despliegue debe insertar las marcas de agua técnicas e interoperables en los outputs (50.2), mientras que el proveedor asume exclusivamente la declaración pública de los deepfakes en redes sociales (50.4).',
      'El proveedor responde de todas las obligaciones de los apartados 1 a 4, quedando el responsable del despliegue eximido de cualquier deber de transparencia siempre que adquiera el sistema bajo una licencia comercial de software.',
      'El importador y el distribuidor asumen conjuntamente el marcado técnico y la advertencia de interacción (50.1 y 50.2), subrogándose en las responsabilidades del proveedor y del responsable del despliegue en territorio de la Unión.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 50 estructura con precisión quién responde de cada apartado: los apartados 1 y 2 imponen obligaciones de diseño y marcado técnico a los PROVEEDORES; los apartados 3 y 4 imponen obligaciones de información y declaración pública a los RESPONSABLES DEL DESPLIEGUE (deployers).',
    enterpriseLesson:
      'Ten clara tu posición en el Art. 50: si compras/usas herramientas generativas (deployer), respondes del etiquetado visible de deepfakes y textos de interés público (50.4); si desarrollas la herramienta (provider), respondes del watermarking legible por máquina (50.2) y del aviso de interacción (50.1).',
    citations: [
      makeCitation({
        id: 'art_50.p1',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p1',
        displayLabel: 'Art. 50.1 a 50.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Los proveedores velarán por que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen... 2. Los proveedores de sistemas de IA... velarán por que los resultados de salida... estén marcados en un formato legible por máquina... 3. Los responsables del despliegue de un sistema de reconocimiento de emociones... informarán... 4. Los responsables del despliegue de un sistema de IA que genere o manipule imágenes... harán público...',
      }),
    ],
  },
  {
    id: 'qz_146',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un programa de televisión de humor político emite un sketch claramente paródico utilizando clonación de voz y vídeo por IA de varios líderes internacionales. Un espectador denuncia a la cadena alegando que el aviso "Contenido satírico generado con IA" solo apareció al inicio del bloque y en los créditos finales, sin ocupar el centro de la pantalla durante todo el sketch. Según el artículo 50.4, ¿tiene razón el denunciante?',
    options: [
      'Sí: el artículo 50.4 exige una sobreimpresión permanente en pantalla completa con un contraste cromático normalizado durante toda la duración de la pieza satírica para evitar el engaño público.',
      'No: en obras manifiestamente satíricas o artísticas, el artículo 50.4 permite revelar la presencia de IA de manera adecuada sin obstaculizar la exhibición ni el disfrute de la obra audiovisual.',
      'No: porque los medios de comunicación y emisiones televisivas están plenamente exentos de las exigencias del Reglamento en virtud de las salvaguardias generales sobre libertad de prensa e imprenta.',
      'Sí: las excepciones del artículo 50.4 solo aplican a la prensa escrita satírica, prohibiendo taxativamente el uso de voces sintéticas de dirigentes políticos vivos en el sector de la radiodifusión comercial.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Para salvaguardar la libertad de expresión y de creación artística (Art. 11 y 13 de la Carta de los Derechos Fundamentales de la UE), el artículo 50.4 párrafo primero establece que en obras o programas manifiestamente artísticos, creativos, satíricos o de ficción, la transparencia se limita a revelar la existencia del contenido sintético de forma adecuada sin obstaculizar la exhibición o el disfrute de la obra.',
    enterpriseLesson:
      'En contenidos audiovisuales de ficción o sátira, una cartela informativa al inicio o en los créditos cumple el Art. 50.4 sin arruinar la experiencia del espectador.',
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
    id: 'qz_147',
    topicId: 'transparency',
    topicLabel: 'Transparencia Específica (Art. 50)',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué prevé el artículo 50.7 in fine en caso de que el proceso de elaboración de los códigos de buenas prácticas sobre detección y etiquetado de contenido sintético no concluya o la Comisión considere que el código no es adecuado antes de la entrada en aplicación del artículo 50?',
    options: [
      'Las obligaciones de marcado de los apartados 2 y 4 quedarán suspendidas de pleno derecho hasta que el Comité Europeo de Inteligencia Artificial apruebe por consenso un estándar técnico voluntario.',
      'Cada autoridad nacional de supervisión establecerá de forma provisional sus propios criterios técnicos sancionadores, aplicables exclusivamente a los proveedores domiciliados en su territorio.',
      'Se aplicará subsidiariamente la Directiva de Comercio Electrónico, asumiendo los prestadores de servicios intermediarios la responsabilidad directa del etiquetado visual de todo archivo digital.',
      'La Comisión podrá adoptar actos de ejecución que especifiquen normas comunes para la aplicación de las obligaciones de los apartados 2 y 4, incluidas las cuestiones detalladas de marcado y etiquetado.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 50.7 faculta a la Comisión para adoptar actos de ejecución (conforme al procedimiento de examen del Art. 98.2) estableciendo normas comunes de aplicación para los apartados 2 y 4 si los códigos de buenas prácticas no están listos o no resultan adecuados.',
    enterpriseLesson:
      'El artículo 50 cuenta con un mecanismo de respaldo regulatorio (actos de ejecución de la Comisión del Art. 50.7), por lo que la ausencia o retraso de estándares voluntarios nunca paraliza la exigibilidad del marcado.',
    citations: [
      makeCitation({
        id: 'art_50.p7',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p7',
        displayLabel: 'Art. 50.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Si considera que el código no es adecuado, la Comisión podrá adoptar actos de ejecución en los que se especifiquen normas comunes para la aplicación de las obligaciones establecidas en los apartados 2 y 4, incluidas las cuestiones detalladas a que se refiere el presente apartado.',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE D. MODELOS DE IA DE USO GENERAL — GPAI (topicId: 'gpai') — 21 preguntas (qz_148 a qz_168)
  // =========================================================================
  {
    id: 'qz_148',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_51',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 51.1, ¿cuáles son las dos vías jurídicas por las que un modelo de IA de uso general (GPAI) se clasifica como modelo con riesgo sistémico?',
    options: [
      'Superar una facturación anual comunitaria de cien millones de euros (51.1.a), o figurar inscrito en el catálogo de empresas dominantes del mercado digital conforme a la Ley de Mercados Digitales (51.1.b).',
      'Ser entrenado con conjuntos de datos que superen un billón de parámetros (51.1.a), o haber recibido un dictamen desfavorable de la autoridad nacional de supervisión del Estado de establecimiento (51.1.b).',
      'Tener capacidades de gran impacto evaluadas con metodologías adecuadas (51.1.a), o por decisión de la Comisión, de oficio o por alerta cualificada del grupo científico, según los criterios del Anexo XIII (51.1.b).',
      'Distribuirse mediante licencia de código abierto con pesos libres (51.1.a), o estar integrado en al menos tres sistemas de alto riesgo enumerados en el Anexo III por decisión vinculante de ENISA (51.1.b).',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 51.1 establece dos vías de clasificación de un modelo GPAI con riesgo sistémico: (a) poseer capacidades de gran impacto (que se presumen al alcanzar el umbral cuantitativo de 10^25 FLOPs del Art. 51.2), o (b) decisión individual de la Comisión —de oficio o tras alerta cualificada del grupo científico— basada en los criterios cualitativos y cuantitativos del Anexo XIII.',
    enterpriseLesson:
      'Un modelo GPAI con menos de 10^25 FLOPs pero altísima eficiencia algorítmica o gran alcance empresarial en la UE puede ser designado igualmente como modelo con riesgo sistémico por decisión de la Comisión bajo el Art. 51.1(b).',
    citations: [
      makeCitation({
        id: 'art_51.p1',
        targetType: 'paragraph',
        articleId: 'art_51',
        paragraphId: 'art_51.p1',
        displayLabel: 'Art. 51.1(a)-(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'Un modelo de IA de uso general se clasificará como modelo de IA de uso general con riesgo sistémico si cumple alguna de las condiciones siguientes: a) posee capacidades de gran impacto... b) sobre la base de una decisión de la Comisión, de oficio o a raíz de una alerta cualificada del grupo científico, se considera que tiene capacidades o un impacto equivalentes a los establecidos en la letra a), habida cuenta de los criterios establecidos en el anexo XIII.',
      }),
    ],
  },
  {
    id: 'qz_149',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_51',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué umbral cuantitativo de potencia de cálculo acumulada establece el artículo 51.2 para presumir que un modelo de IA de uso general posee "capacidades de gran impacto" y, por tanto, presenta riesgo sistémico?',
    options: [
      'Cuando la cantidad acumulada de cálculo utilizada para su entrenamiento, medida en operaciones de coma flotante (FLOP), sea superior a 10^25.',
      'Cuando la cantidad acumulada de cálculo utilizada para su entrenamiento preliminar en centros de datos comunitarios supere en cómputo agregado los 10^22 FLOPs.',
      'Cuando el procesamiento concurrente necesario para su ajuste fino supere un umbral constante de 10^28 FLOPs por ciclo operativo.',
      'Cuando el consumo energético registrado durante la fase de optimización algorítmica exceda el equivalente teórico a 10^20 FLOPs.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 51.2 dispone que se presumirá que un modelo de IA de uso general posee capacidades de gran impacto con arreglo al apartado 1, letra a), cuando la cantidad acumulada de cálculo utilizada para su entrenamiento, medida en operaciones de coma flotante, sea superior a 10^25 FLOPs.',
    enterpriseLesson:
      'Registra en la telemetría de entrenamiento (Anexo XI) el cómputo acumulado exacto en FLOPs de todas las fases de preentrenamiento y ajuste del modelo para acreditar si te encuentras por debajo o por encima de 10^25 FLOPs.',
    citations: [
      makeCitation({
        id: 'art_51.p2',
        targetType: 'paragraph',
        articleId: 'art_51',
        paragraphId: 'art_51.p2',
        displayLabel: 'Art. 51.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Se presumirá que un modelo de IA de uso general posee capacidades de gran impacto con arreglo al apartado 1, letra a), cuando la cantidad acumulada de cálculo utilizada para su entrenamiento, medida en operaciones de coma flotante, sea superior a 10^25.',
      }),
    ],
  },
  {
    id: 'qz_150',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_51',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 51.3, ¿cómo puede actualizarse el umbral de 10^25 FLOPs del artículo 51.2 o completarse con otros parámetros a medida que evolucione la eficiencia de los algoritmos?',
    options: [
      'Mediante directivas comunitarias aprobadas conjuntamente por el Consejo y el Parlamento Europeo, previa audiencia preceptiva de las principales empresas desarrolladoras de software en la Unión.',
      'Mediante actos delegados de la Comisión conforme al artículo 97, que modificarán los umbrales e incorporarán nuevos parámetros de referencia a la luz de la evolución tecnológica y algorítmica.',
      'Mediante resoluciones anuales vinculantes de la Junta Europea de Inteligencia Artificial aprobadas por mayoría cualificada de tres cuartos de los Estados miembros representados en el pleno.',
      'Mediante reglamentos técnicos de ejecución propuestos por los organismos europeos de normalización (CEN-CENELEC) tras realizar consultas públicas sectoriales en los veintisiete Estados miembros.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 51.3 faculta a la Comisión para adoptar actos delegados conforme al artículo 97 a fin de modificar los umbrales de los apartados 1 y 2 y añadir parámetros de referencia o indicadores cuando sea necesario para reflejar avances tecnológicos (mejoras algorítmicas o de eficiencia del hardware).',
    enterpriseLesson:
      'El umbral de 10^25 FLOPs es dinámico: la Comisión puede ajustarlo mediante acto delegado (Art. 51.3) conforme los nuevos algoritmos logren capacidades de frontera con menor cómputo bruto.',
    citations: [
      makeCitation({
        id: 'art_51.p3',
        targetType: 'paragraph',
        articleId: 'art_51',
        paragraphId: 'art_51.p3',
        displayLabel: 'Art. 51.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Comisión adoptará actos delegados con arreglo al artículo 97 para modificar los umbrales enumerados en los apartados 1 y 2 del presente artículo, así como para completar los parámetros de referencia e indicadores a la luz de la evolución tecnológica, por ejemplo, las mejoras algorítmicas o la mayor eficiencia del hardware, cuando sea necesario para que estos umbrales reflejen el estado de la técnica.',
      }),
    ],
  },
  {
    id: 'qz_151',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_51',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'De acuerdo con el Anexo XIII letra f) (Criterios para la designación de modelos de IA de uso general con riesgo sistémico a que se refiere el artículo 51), ¿a partir de qué volumen de usuarios empresariales registrados se presume que un modelo GPAI tiene "capacidades de gran impacto" por su elevado alcance en el mercado interior?',
    options: [
      'Al menos 50.000 usuarios finales o consumidores directos dentro de la Unión.',
      'Al menos 5.000 proveedores independientes de software integrados en su API.',
      'Al menos 10.000 usuarios empresariales registrados establecidos en la Unión.',
      'Al menos 100.000 cuentas de desarrollador activas en plataformas comunitarias.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Anexo XIII letra f) incluye como criterio el elevado alcance en el mercado interior, debido a su accesibilidad para un gran número de usuarios finales o de usuarios empresariales que lo utilicen para desarrollar sistemas de IA posteriores, precisando que "se presumirá que un modelo de IA de uso general tiene capacidades de gran impacto si cuenta con al menos 10 000 usuarios empresariales registrados establecidos en la Unión".',
    enterpriseLesson:
      'La adopción masiva B2B en Europa (≥ 10.000 empresas integradoras en la UE registradas en tu plataforma de API) es un indicador directo del Anexo XIII que la Comisión valora para designar riesgo sistémico.',
    citations: [
      makeCitation({
        id: 'anx_XIII.p1',
        targetType: 'annex',
        articleId: 'anx_XIII',
        displayLabel: 'Anexo XIII letra f) y Art. 51.1(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'f) que tenga un elevado impacto en el mercado interior debido a su alcance, lo que se presumirá cuando se haya puesto a disposición de al menos 10 000 usuarios empresariales registrados establecidos en la Unión;',
      }),
    ],
  },
  {
    id: 'qz_152',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_52',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un laboratorio entrena un modelo especializado cuyo cómputo supera los 10^25 FLOPs, pero considera que por sus características específicas (por ejemplo, arquitectura acotada sin capacidades de agencia ni riesgos de ciberseguridad o CBRN) no presenta riesgos sistémicos. Según el artículo 52.2, ¿qué puede hacer el proveedor junto con su notificación a la Comisión?',
    options: [
      'Solicitar una moratoria provisional de cumplimiento de tres años ante la Oficina de IA mientras acredita que el modelo carece de fines comerciales o de distribución masiva en el mercado comunitario.',
      'Depositar una fianza cautelar ante el Banco Europeo de Inversiones que garantice la cobertura económica de cualquier contingencia sistémica que pudiera materializarse en los Estados miembros.',
      'Recurrir de forma directa en vía contenciosa ante el Tribunal de Justicia de la Unión Europea para obtener la nulidad del Anexo XIII antes de someter el modelo al mercado comunitario de la Unión.',
      'Presentar, junto con su notificación, argumentos suficientemente fundamentados para demostrar que, excepcionalmente por sus características específicas, el modelo no presenta riesgos sistémicos.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 52.2 permite que la presunción de riesgo sistémico por cómputo (>10^25 FLOPs) admita prueba en contrario (iuris tantum): el proveedor puede acompañar su notificación de las 2 semanas con argumentos suficientemente fundamentados demostrando que, excepcionalmente, el modelo no presenta riesgos sistémicos. Si la Comisión desestima los argumentos (52.3), el modelo queda sujeto al artículo 55.',
    enterpriseLesson:
      'La notificación del Art. 52.1 es siempre obligatoria al superar 10^25 FLOPs, pero puedes adjuntar un dossier técnico-científico bajo el Art. 52.2 para rebatir la presunción de riesgo sistémico.',
    citations: [
      makeCitation({
        id: 'art_52.p2',
        targetType: 'paragraph',
        articleId: 'art_52',
        paragraphId: 'art_52.p2',
        displayLabel: 'Art. 52.2 y 52.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El proveedor podrá presentar, junto con su notificación, argumentos suficientemente fundamentados para demostrar que, excepcionalmente, a pesar de cumplir los requisitos establecidos en el artículo 51, apartado 1, letra a), el modelo de IA de uso general no presenta riesgos sistémicos debido a sus características específicas.',
      }),
    ],
  },
  {
    id: 'qz_153',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_52',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Cuando la Comisión ha designado un modelo GPAI como modelo con riesgo sistémico con arreglo al artículo 51.1(b), ¿cuándo puede el proveedor presentar una solicitud motivada de reevaluación según el artículo 52.5, y qué ocurre si se rechaza?',
    options: [
      'A los doce meses de la designación formal; en caso de desestimación expresa, el proveedor deberá aguardar un período improrrogable de dos años antes de instar un nuevo expediente de revisión técnica.',
      'Al transcurrir al menos seis meses desde la designación; si la Comisión mantiene la designación tras la reevaluación, deberá esperar otros seis meses para presentar una nueva solicitud motivada.',
      'En cualquier momento posterior a la notificación inicial; si se deniega la petición, el proveedor podrá recurrir en alzada ante la Junta de IA en un plazo perentorio de quince días hábiles.',
      'Únicamente dentro de los treinta días siguientes a la publicación en el DOUE; si la Comisión rechaza los argumentos, la calificación como modelo con riesgo sistémico adquiere firmeza perpetua.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 52.5 establece que, previa solicitud motivada de un proveedor cuyo modelo haya sido designado con arreglo al artículo 51.1(b), la Comisión tendrá en cuenta nuevos argumentos y podrá realizar una reevaluación. Dicha solicitud solo puede presentarse a partir de los 6 meses siguientes a la decisión de designación (y otros 6 meses si es desestimada).',
    enterpriseLesson:
      'A medida que un modelo envejece y el estado del arte avanza, el proveedor puede solicitar cada 6 meses la desclasificación del riesgo sistémico aportando métricas objetivas conforme al Art. 52.5.',
    citations: [
      makeCitation({
        id: 'art_52.p5',
        targetType: 'paragraph',
        articleId: 'art_52',
        paragraphId: 'art_52.p5',
        displayLabel: 'Art. 52.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Dicha solicitud solo podrá presentarse cuando hayan transcurrido al menos seis meses desde la decisión de designación de la Comisión. Cuando, a raíz de una reevaluación, la Comisión decida mantener la designación como modelo de IA de uso general con riesgo sistémico, el proveedor podrá presentar una nueva solicitud cuando hayan transcurrido al menos otros seis meses.',
      }),
    ],
  },
  {
    id: 'qz_154',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_52',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 52.6, ¿qué obligación de publicidad tiene la Comisión Europea respecto a los modelos de IA de uso general con riesgo sistémico?',
    options: [
      'Publicar y mantener actualizada una lista de los modelos GPAI con riesgo sistémico, protegiendo los derechos de propiedad intelectual, información confidencial y secretos comerciales.',
      'Publicar semestralmente en el portal de acceso abierto de la Unión Europea el código fuente íntegro, los hiperparámetros y los registros de entrenamiento de todos los modelos algorítmicos designados.',
      'Mantener un registro de acceso restringido disponible exclusivamente para los servicios de inteligencia y las autoridades policiales de los Estados miembros bajo secreto de Estado.',
      'Remitir una notificación reservada a los comités de ciberseguridad parlamentarios, prohibiendo cualquier difusión pública del catálogo para evitar ataques de adversarios del exterior.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 52.6 ordena a la Comisión publicar y mantener actualizada una lista pública de los modelos GPAI con riesgo sistémico, salvaguardando al mismo tiempo la propiedad intelectual, la información empresarial confidencial y los secretos comerciales.',
    enterpriseLesson:
      'Antes de integrar un modelo fundacional externo en tu arquitectura empresarial, consulta la lista oficial de la Comisión (Art. 52.6) para saber si el modelo base está clasificado con riesgo sistémico.',
    citations: [
      makeCitation({
        id: 'art_52.p6',
        targetType: 'paragraph',
        articleId: 'art_52',
        paragraphId: 'art_52.p6',
        displayLabel: 'Art. 52.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Comisión velará por que se publique y se mantenga actualizada una lista de los modelos de IA de uso general con riesgo sistémico, sin perjuicio de la necesidad de respetar y proteger los derechos de propiedad intelectual e industrial y la información empresarial confidencial o los secretos comerciales de conformidad con el Derecho de la Unión y nacional.',
      }),
    ],
  },
  {
    id: 'qz_155',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Conforme al Anexo XI (Sección 1 y Sección 2) en relación con los artículos 53.1(a) y 55.1, ¿qué información adicional debe incluir la documentación técnica de un modelo GPAI CON riesgo sistémico que NO se exige a un modelo GPAI estándar sin riesgo sistémico?',
    options: [
      'El inventario exhaustivo de las direcciones IP de los usuarios empresariales y el registro pormenorizado de la telemetría de inferencias concurrentes procesadas durante el último año fiscal (Anexo XI, Sección 2).',
      'Las pólizas de seguro de responsabilidad civil suscritos con entidades comunitarias y las actas de inspección laboral de los centros de procesamiento de datos en la Unión (Anexo XI, Sección 2).',
      'El desglose pormenorizado de los márgenes comerciales de venta de licencias de software y los costes salariales del personal de investigación adscrito al modelo fundacional (Anexo XI, Sección 2).',
      'Estrategias de evaluación, resultados de pruebas con adversarios (red-teaming), mitigación de riesgos sistémicos y medidas de ciberseguridad física y lógica de la infraestructura (Anexo XI, Sección 2).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El Anexo XI se divide en dos secciones: la Sección 1 enumera la información técnica obligatoria para TODOS los proveedores de modelos GPAI (arquitectura, parámetros, modalidades, datos de entrenamiento, consumo energético y cómputo en FLOPs), mientras que la Sección 2 detalla la información adicional que deben aportar exclusivamente los proveedores de modelos GPAI con riesgo sistémico (evaluaciones, red-teaming, mitigación sistémica y ciberseguridad).',
    enterpriseLesson:
      'Si tu modelo GPAI no tiene riesgo sistémico, solo debes completar la Sección 1 del Anexo XI; la Sección 2 del Anexo XI es exclusiva para modelos sujetos al artículo 55.',
    citations: [
      makeCitation({
        id: 'anx_XI.p1',
        targetType: 'annex',
        articleId: 'anx_XI',
        displayLabel: 'Anexo XI Secciones 1 y 2 y Art. 53.1(a) · Reglamento (UE) 2024/1689',
        exactQuote:
          'SECCIÓN 1. Información que deben facilitar todos los proveedores de modelos de IA de uso general... SECCIÓN 2. Información adicional que deben facilitar los proveedores de modelos de IA de uso general con riesgo sistémico...',
      }),
    ],
  },
  {
    id: 'qz_156',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el Anexo XI, Sección 1, punto 2, letra d), ¿qué dato medioambiental y de recursos debe documentar todo proveedor de un modelo GPAI respecto a su entrenamiento?',
    options: [
      'El balance medioambiental auditado de emisiones de gases de efecto invernadero y la adquisición formal de derechos de emisión en el mercado regulado comunitario conforme a las exigencias de la Directiva 2003/87/CE.',
      'El consumo volumétrico de agua potable de los circuitos de refrigeración líquida de los servidores y el certificado de gestión ambiental ISO 14001 expedido por una entidad de certificación.',
      'Los recursos de cálculo utilizados (en FLOPs), el tiempo de entrenamiento y el consumo de energía conocido o estimado, derivable de los recursos computacionales si se desconoce el consumo exacto.',
      'El porcentaje mínimo legal del setenta por ciento de suministro eléctrico procedente de fuentes renovables verificado por la autoridad energética del Estado donde se ubiquen los clusters.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Anexo XI, Sección 1, punto 2, letras d) y e) exige documentar los recursos de cálculo utilizados para entrenar el modelo, el tiempo de entrenamiento y el consumo energético conocido o estimado del proceso de entrenamiento.',
    enterpriseLesson:
      'La huella energética del entrenamiento de modelos GPAI no es un mero indicador voluntario de RSC: es un campo obligatorio de la documentación técnica del Anexo XI exigible por la Oficina de IA.',
    citations: [
      makeCitation({
        id: 'anx_XI.p1',
        targetType: 'annex',
        articleId: 'anx_XI',
        displayLabel: 'Anexo XI Sección 1.2(d)-(e) · Reglamento (UE) 2024/1689',
        exactQuote:
          'd) los recursos de cálculo utilizados para entrenar el modelo... el tiempo de entrenamiento y otros detalles pertinentes del proceso; e) el consumo de energía conocido o estimado del modelo; si se desconoce el consumo de energía del modelo, podrá basarse en información sobre los recursos computacionales utilizados;',
      }),
    ],
  },
  {
    id: 'qz_157',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa tecnológica desarrolla un sistema de IA para diagnóstico clínico integrando el modelo GPAI de un proveedor fundacional externo. Cuando la empresa integradora solicita al proveedor del modelo GPAI la documentación del Anexo XII (Art. 53.1.b), ¿hasta dónde alcanza la obligación de entrega del proveedor GPAI?',
    options: [
      'Debe facilitar la información del Anexo XII necesaria para comprender capacidades y limitaciones y cumplir el Reglamento, respetando secretos comerciales y derechos de propiedad intelectual.',
      'Debe suministrar el código fuente completo del preentrenamiento y la clave criptográfica de descifrado de los pesos del modelo, sin ampararse en excepciones de confidencialidad comercial.',
      'Queda facultado para denegar unilateralmente cualquier información técnica invocando la protección de software propietario, bastando con entregar un resumen comercial de dos páginas de extensión.',
      'Solo está obligado a remitir la documentación técnica del Anexo XII si la empresa integradora abona una tasa compensatoria previamente aprobada por el organismo notificado de referencia en la UE.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 53.1(b) y el artículo 53.7 equilibran la transparencia en la cadena de valor B2B con la protección de activos intangibles: el proveedor GPAI debe entregar la documentación del Anexo XII para permitir al integrador cumplir el Reglamento, sin que ello le obligue a revelar secretos comerciales ni vulnerar su propiedad intelectual.',
    enterpriseLesson:
      'Como proveedor de modelos o APIs, prepara un "Downstream Compliance Pack" estandarizado con todos los ítems del Anexo XII redactado de forma que habilite la conformidad de tus clientes B2B sin exponer tus secretos industriales.',
    citations: [
      makeCitation({
        id: 'art_53.p1',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p1',
        displayLabel: 'Art. 53.1(b) y Anexo XII · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) elaborarán, mantendrán actualizada y pondrán a disposición información y documentación para los proveedores de sistemas de IA que tengan previsto integrar el modelo de IA de uso general en sus sistemas de IA. Sin perjuicio de la necesidad de respetar y proteger los derechos de propiedad intelectual e industrial y la información empresarial confidencial o los secretos comerciales...',
      }),
    ],
  },
  {
    id: 'qz_158',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un proveedor de un modelo GPAI entrena su modelo en servidores ubicados fuera de la Unión Europea utilizando textos extraídos de webs europeas, ignorando las reservas expresas de derechos (opt-out de minería de textos y datos / TDM en `robots.txt` y metadatos legibles por máquina) de los editores. ¿Por qué infringe el artículo 53.1(c) si comercializa el modelo en la Unión?',
    options: [
      'Porque la legislación comunitaria prohíbe taxativamente la comercialización en la Unión de modelos entrenados fuera del Espacio Económico Europeo si no cuentan con una filial tecnológica establecida en la UE.',
      'Porque el artículo 53.1(c) obliga a respetar el Derecho de la Unión sobre propiedad intelectual y el opt-out del artículo 4.3 de la Directiva 2019/790, con independencia de dónde se haya realizado el entrenamiento.',
      'Porque la minería de textos y datos en línea requiere siempre autorización notarial previa e individualizada de cada titular de derechos, careciendo de validez técnica el marcado automático de exclusión en robots.txt.',
      'Porque las obligaciones de propiedad intelectual solo se aplican a modelos de código cerrado, debiendo el proveedor liberar los pesos algorítmicos para acogerse a la exención general de minería de la Directiva.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 53.1(c) exige a todos los proveedores de modelos GPAI establecer una política para cumplir el Derecho de la Unión sobre derechos de autor y derechos afines, y en particular detectar y respetar mediante tecnologías de vanguardia las reservas de derechos de TDM del Art. 4.3 de la Directiva (UE) 2019/790 (transpuesta en España por el RDL 24/2021, Art. 67). El Considerando 106 aclara que esta obligación aplica con independencia del lugar donde tengan lugar los actos pertinentes al entrenamiento si el modelo se introduce en el mercado de la Unión.',
    enterpriseLesson:
      'No existe "paraíso regulatorio de entrenamiento": si vas a comercializar tu modelo GPAI en la UE, tu pipeline de ingesta de datos debe respetar los opt-outs legibles por máquina (Art. 4.3 Directiva 2019/790) aunque entrenes fuera de Europa.',
    citations: [
      makeCitation({
        id: 'art_53.p1',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p1',
        displayLabel: 'Art. 53.1(c) y Considerando 106 · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) establecerán una política para cumplir el Derecho de la Unión en materia de derechos de autor y derechos afines, y en particular para detectar y respetar, incluso mediante tecnologías de vanguardia, una reserva de derechos expresada con arreglo al artículo 4, apartado 3, de la Directiva (UE) 2019/790;',
      }),
    ],
  },
  {
    id: 'qz_159',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Qué exige el artículo 53.1(d) a TODOS los proveedores de modelos de IA de uso general (incluidos los de código abierto) respecto a los datos utilizados en su entrenamiento?',
    options: [
      'Publicar en un repositorio de libre acceso la totalidad de los archivos de texto, audio e imagen empleados en el preentrenamiento para permitir auditorías ciudadanas de derechos de autor.',
      'Someter cada base de datos de entrenamiento a la autorización previa y vinculante de las entidades de gestión colectiva de derechos de propiedad intelectual antes de compilar el modelo.',
      'Destruir los metadatos y registros de las fuentes web utilizadas en el entrenamiento en un plazo de treinta días desde la primera comercialización para salvaguardar el secreto comercial.',
      'Elaborar y poner a disposición del público un resumen suficientemente detallado sobre el contenido utilizado para el entrenamiento, con arreglo a la plantilla facilitada por la Oficina de IA.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 53.1(d) obliga a todo proveedor GPAI a elaborar y hacer público un resumen suficientemente detallado del contenido utilizado para el entrenamiento del modelo siguiendo la plantilla oficial de la Oficina Europea de IA (para facilitar que titulares de derechos de autor e interesados conozcan las fuentes y colecciones empleadas sin comprometer secretos comerciales).',
    enterpriseLesson:
      'Mantén un inventario trazable de tus fuentes de entrenamiento (grandes datasets públicos, acuerdos de licencia, dominios raspados y datos sintéticos) siguiendo la plantilla pública de la Oficina de IA del Art. 53.1(d).',
    citations: [
      makeCitation({
        id: 'art_53.p1',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p1',
        displayLabel: 'Art. 53.1(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'd) elaborarán y pondrán a disposición del público un resumen suficientemente detallado sobre el contenido utilizado para el entrenamiento del modelo de IA de uso general, con arreglo a una plantilla facilitada por la Oficina de IA.',
      }),
    ],
  },
  {
    id: 'qz_160',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una empresa publica un modelo GPAI cuyos pesos, arquitectura e información de uso son descargables públicamente bajo una licencia de código abierto que permite el acceso, uso, modificación y distribución. Sin embargo, dicho modelo supera los 10^25 FLOPs y está clasificado como modelo GPAI CON riesgo sistémico. Según el artículo 53.2 in fine, ¿se beneficia de la exención open-source para los Anexos XI y XII?',
    options: [
      'Sí: el régimen de licencias abiertas prevalece sobre cualquier umbral técnico de cómputo, eximiendo al proveedor de aportar documentación técnica ante la Oficina de IA.',
      'Sí: la exención se mantiene plenamente si el proveedor no comercializa servicios de computación en la nube asociados al modelo y no cobra comisiones por su descarga directa.',
      'No: el artículo 53.2 establece expresamente que la excepción para modelos con licencia libre y de código abierto no se aplicará a los modelos GPAI con riesgo sistémico.',
      'No: pero la obligación se suspende durante un periodo transitorio de cuatro años previsto en el artículo 111 para facilitar la adopción científica en centros universitarios.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 53.2 in fine dispone de forma taxativa: "Esta excepción no se aplicará a los modelos de IA de uso general con riesgo sistémico". Por tanto, un modelo open-source con riesgo sistémico debe cumplir íntegramente los artículos 53 (incluidos Anexos XI y XII), 54 y 55.',
    enterpriseLesson:
      'Recuerda la doble frontera del open-source en GPAI (Art. 53.2): (1) nunca exime de copyright (53.1.c) ni del resumen público de datos (53.1.d); y (2) si el modelo tiene riesgo sistémico, pierde toda exención y debe cumplir el 100 % de las obligaciones.',
    citations: [
      makeCitation({
        id: 'art_53.p2',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p2',
        displayLabel: 'Art. 53.2 in fine · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las obligaciones establecidas en el apartado 1, letras a) y b), no se aplicarán a los proveedores de modelos de IA de uso general que se publiquen con una licencia libre y de código abierto... Esta excepción no se aplicará a los modelos de IA de uso general con riesgo sistémico.',
      }),
    ],
  },
  {
    id: 'qz_161',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una compañía ofrece un modelo GPAI "open-weights" para descarga, pero su licencia exige el pago de un canon monetario o prohíbe usar el modelo con fines comerciales salvo que se contrate la plataforma en la nube del propio proveedor. Según el Considerando 102 y el artículo 53.2, ¿puede acogerse a la exención de modelo con licencia libre y de código abierto?',
    options: [
      'Sí: cualquier restricción contractual sobre usos comerciales es válida bajo el artículo 53.2 si se publica la arquitectura técnica y el proveedor tiene su domicilio social en la Unión.',
      'No: para acogerse a la exención del artículo 53.2 la licencia debe permitir acceso, uso, modificación y distribución abierta de parámetros, pesos y arquitectura sin restricciones comerciales.',
      'Sí: la exención legal se aplica a cualquier modelo de IA con pesos libremente descargables, bastando con que el proveedor autorice su uso académico y de investigación científica sin cobrar contraprestación.',
      'No: pero únicamente si la autoridad de competencia de la Comisión incoa un procedimiento formal por prácticas restrictivas de la libre competencia en el mercado interior de modelos GPAI.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 53.2 y los Considerandos 102 y 103 precisan que un modelo solo califica como de licencia libre y de código abierto cuando permite el acceso, uso, modificación y redistribución del modelo y sus parámetros (incluidos pesos, arquitectura e información de uso) de forma abierta y sin contraprestación monetaria ni obligación de contratar servicios del proveedor.',
    enterpriseLesson:
      'Las licencias "source-available" con restricciones de facturación o uso comercial (frecuentes en la industria) NO califican como código abierto bajo el Art. 53.2 y deben cumplir los Anexos XI y XII.',
    citations: [
      makeCitation({
        id: 'art_53.p2',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p2',
        displayLabel: 'Art. 53.2 y Considerandos 102-103 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las obligaciones establecidas en el apartado 1, letras a) y b), no se aplicarán a los proveedores de modelos de IA de uso general que se publiquen con una licencia libre y de código abierto que permita acceder a los parámetros, incluidos los pesos, la información sobre la arquitectura del modelo y la información sobre el uso del modelo, y utilizarlos, modificarlos y distribuirlos.',
      }),
    ],
  },
  {
    id: 'qz_162',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_53',
    titleId: 'tit_V',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cómo pueden los proveedores de modelos de IA de uso general demostrar el cumplimiento de las obligaciones del artículo 53.1 (y del artículo 55.1 en caso de riesgo sistémico) mientras no se hayan publicado normas armonizadas europeas?',
    options: [
      'Basándose en los códigos de buenas prácticas del artículo 56 hasta que se publique una norma armonizada, o demostrando por otros medios adecuados el cumplimiento de las obligaciones.',
      'Obteniendo una certificación provisional de un organismo notificado nacional tras superar una auditoría anual sobre el código fuente de los algoritmos de entrenamiento de los modelos.',
      'Remitiendo una autodeclaración notarial de conformidad a la autoridad de vigilancia del mercado acompañada del resguardo del depósito de una fianza de responsabilidad civil en la UE.',
      'Aplicando de forma vinculante los estándares técnicos que apruebe unilateralmente la Organización Internacional de Normalización (ISO) previa ratificación del Comité de IA.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Los artículos 53.4 y 55.2 establecen que los proveedores de modelos GPAI pueden basarse en los códigos de buenas prácticas en el sentido del artículo 56 para demostrar el cumplimiento de las obligaciones de los artículos 53.1 y 55.1 hasta que se publique una norma armonizada.',
    enterpriseLesson:
      'El Código de Buenas Prácticas GPAI del Art. 56 es la vía rápida de conformidad ("safe harbour" técnico) frente a la Oficina Europea de IA.',
    citations: [
      makeCitation({
        id: 'art_53.p4',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p4',
        displayLabel: 'Art. 53.4 y Art. 55.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores de modelos de IA de uso general podrán basarse en códigos de buenas prácticas en el sentido del artículo 56 para demostrar el cumplimiento de las obligaciones establecidas en el apartado 1 del presente artículo, hasta que se publique una norma armonizada.',
      }),
    ],
  },
  {
    id: 'qz_163',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_54',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una fundación de investigación con sede en Canadá publica un modelo GPAI de 8.000 millones de parámetros bajo licencia MIT (libre y de código abierto, con pesos y arquitectura públicos) y sin riesgo sistémico. Según el artículo 54.6, ¿está obligada a designar un representante autorizado establecido en la Unión Europea?',
    options: [
      'Sí: todo proveedor establecido fuera de la Unión que distribuya modelos algorítmicos debe nombrar preceptivamente a una persona jurídica radicada en un Estado miembro bajo el artículo 54.1.',
      'No: porque las fundaciones sin ánimo de lucro gozan de inmunidad jurisdiccional general y quedan excluidas del ámbito de aplicación subjetivo del Reglamento conforme a su artículo 2.3.',
      'No: el artículo 54.6 exime de designar representante autorizado a los proveedores de modelos GPAI bajo licencia libre y de código abierto, salvo que el modelo presente riesgos sistémicos.',
      'Sí: la exención de código abierto solo rige si la entidad canadiense suscribe un convenio bilateral de interoperabilidad con la Comisión Europea en un plazo no superior a sesenta días.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 54.6 replica para el representante autorizado la exención de código abierto: la obligación de designar un representante autorizado en la UE (Art. 54.1) no se aplica a los proveedores extracomunitarios de modelos GPAI publicados bajo licencia libre y de código abierto cuyos pesos y arquitectura sean públicos, salvo que el modelo presente riesgo sistémico.',
    enterpriseLesson:
      'Los laboratorios e investigadores extracomunitarios que liberan modelos GPAI verdaderamente open-source sin riesgo sistémico no necesitan constituir representante autorizado en la UE (Art. 54.6).',
    citations: [
      makeCitation({
        id: 'art_54.p6',
        targetType: 'paragraph',
        articleId: 'art_54',
        paragraphId: 'art_54.p6',
        displayLabel: 'Art. 54.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La obligación establecida en el presente artículo no se aplicará a los proveedores de modelos de IA de uso general que se publiquen con una licencia libre y de código abierto que permita acceder a los parámetros, incluidos los pesos, la información sobre la arquitectura del modelo y la información sobre el uso del modelo, y utilizarlos, modificarlos y distribuirlos, a menos que los modelos de IA de uso general presenten riesgos sistémicos.',
      }),
    ],
  },
  {
    id: 'qz_164',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_54',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Qué debe hacer el representante autorizado en la UE de un proveedor de modelos GPAI de un tercer país si considera o tiene motivos para considerar que dicho proveedor actúa en contra de las obligaciones que le impone el Reglamento, según el artículo 54.4?',
    options: [
      'Asumirá solidariamente la responsabilidad patrimonial y abonará las sanciones pecuniarias de la Comisión.',
      'Suspenderá la comercialización del modelo en la Unión previa autorización de la autoridad de vigilancia.',
      'Presentará una denuncia confidencial ante el tribunal mercantil del Estado miembro donde tenga su sede.',
      'Pondrá fin inmediatamente al mandato e informará de la rescisión y de sus motivos a la Oficina de IA.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 54.4 impone un deber de garante al representante autorizado: si considera o tiene motivos para considerar que el proveedor actúa en contra de sus obligaciones del Reglamento, pondrá fin inmediatamente al mandato e informará de dicha rescisión y de sus motivos a la Oficina de IA.',
    enterpriseLesson:
      'El rol de representante autorizado GPAI (Art. 54) no es una simple dirección postal: conlleva deberes de verificación documental (Anexo XI), conservación durante 10 años y rescisión con notificación a la Oficina de IA ante incumplimientos.',
    citations: [
      makeCitation({
        id: 'art_54.p4',
        targetType: 'paragraph',
        articleId: 'art_54',
        paragraphId: 'art_54.p4',
        displayLabel: 'Art. 54.3 y 54.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El mandato permitirá al representante autorizado ponerle fin si considera o tiene motivos para considerar que el proveedor actúa en contra de las obligaciones que le impone el presente Reglamento. En tal caso, informará también inmediatamente a la Oficina de IA de la rescisión del mandato y de los motivos de la misma.',
      }),
    ],
  },
  {
    id: 'qz_165',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_55',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un proveedor de un modelo GPAI con riesgo sistémico detecta durante sus pruebas un incidente grave derivado del desarrollo o la utilización del modelo. Según el artículo 55.1(c), ¿a quién y con qué celeridad debe informar?',
    options: [
      'Hará seguimiento, documentará e informará sin demora indebida a la Oficina de IA y autoridades competentes sobre los incidentes graves y las posibles medidas correctoras para resolverlos.',
      'Notificará en un plazo máximo e improrrogable de setenta y dos horas a la Agencia de Ciberseguridad de la Unión Europea (ENISA) y al Centro Europeo de Delincuencia Económica de Europol.',
      'Remitirá un informe pericial en un plazo de diez días hábiles a la autoridad judicial penal del Estado miembro en cuyo territorio se hayan originado las perturbaciones operativas del sistema.',
      'Publicará un comunicado urgente en su portal web corporativo dentro de las veinticuatro horas siguientes, notificando el suceso únicamente si afecta a más de cincuenta mil usuarios finales.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 55.1(c) exige a los proveedores de modelos GPAI con riesgo sistémico hacer seguimiento, documentar e informar, sin demora indebida, a la Oficina de IA y, según proceda, a las autoridades nacionales competentes, de la información pertinente sobre incidentes graves y las medidas correctoras adoptadas.',
    enterpriseLesson:
      'Distingue los canales de notificación de incidentes graves: en sistemas de alto riesgo del Anexo III se notifica a la autoridad nacional de vigilancia del mercado con plazos de 2/10/15 días (Art. 73); en modelos GPAI con riesgo sistémico se notifica sin demora indebida a la Oficina Europea de IA (Art. 55.1.c).',
    citations: [
      makeCitation({
        id: 'art_55.p1',
        targetType: 'paragraph',
        articleId: 'art_55',
        paragraphId: 'art_55.p1',
        displayLabel: 'Art. 55.1(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) harán seguimiento, documentarán e informarán, sin demora indebida, a la Oficina de IA y, según proceda, a las autoridades nacionales competentes, de la información pertinente sobre incidentes graves y las posibles medidas correctoras para resolverlos;',
      }),
    ],
  },
  {
    id: 'qz_166',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_55',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'En relación con la obligación de ciberseguridad de los modelos GPAI con riesgo sistémico del artículo 55.1(d) (y Considerando 115), ¿qué dos ámbitos debe abarcar el nivel adecuado de protección?',
    options: [
      'Únicamente el software de cifrado en reposo de los servidores, quedando excluida la seguridad física de los centros de datos.',
      'Tanto el modelo GPAI con riesgo sistémico (frente a exfiltración de pesos, ataques o manipulación) como su infraestructura física.',
      'Exclusivamente los interfaces de programación de aplicaciones (API) seguras y las conexiones de red de los usuarios empresariales en la Unión.',
      'Tanto el hardware de los terminales de usuario final como las redes troncales de telecomunicaciones de los operadores europeos.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 55.1(d) obliga a los proveedores de modelos GPAI con riesgo sistémico a garantizar "un nivel adecuado de protección de la ciberseguridad para el modelo de IA de uso general con riesgo sistémico y su infraestructura física", con el fin de evitar el robo o filtración de los pesos del modelo, ciberataques o manipulación maliciosa.',
    enterpriseLesson:
      'En modelos GPAI de frontera, la seguridad física de los clústeres de entrenamiento y el control criptográfico de acceso a los pesos ("model weights security") forman parte expresa del Art. 55.1(d).',
    citations: [
      makeCitation({
        id: 'art_55.p1',
        targetType: 'paragraph',
        articleId: 'art_55',
        paragraphId: 'art_55.p1',
        displayLabel: 'Art. 55.1(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'd) garantizarán un nivel adecuado de protección de la ciberseguridad para el modelo de IA de uso general con riesgo sistémico y su infraestructura física.',
      }),
    ],
  },
  {
    id: 'qz_167',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_56',
    titleId: 'tit_V',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 56.1 y 56.3, ¿quiénes participan en la elaboración de los códigos de buenas prácticas para modelos GPAI coordinados por la Oficina de IA?',
    options: [
      'Exclusivamente los proveedores de modelos GPAI con riesgo sistémico y los miembros del Comité Europeo de Protección de Datos, con exclusión taxativa de entidades privadas con ánimo de lucro.',
      'Únicamente los comités técnicos designados por los organismos europeos de normalización (CEN-CENELEC) y los delegados de ciberseguridad acreditados ante la Comisión Europea bajo NIS 2.',
      'Todos los proveedores GPAI y autoridades competentes pueden participar, pudiendo invitarse a proveedores posteriores, sociedad civil, industria, academia, titulares de derechos y expertos.',
      'Solo los representantes acreditados de los Estados miembros y los auditores de conformidad pertenecientes a los organismos notificados reconocidos en el marco de evaluación del Anexo VII.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 56.3 prevé un proceso inclusivo y multipartito coordinado por la Oficina de IA y el Comité de IA: todos los proveedores GPAI y autoridades nacionales pueden participar, y se invita a proveedores posteriores (downstream), sociedad civil, titulares de derechos de autor, mundo académico y expertos independientes.',
    enterpriseLesson:
      'Los proveedores posteriores (integradores B2B) y los titulares de derechos tienen voz reconocida en el Art. 56.3 para exigir que los códigos GPAI garanticen la calidad de la documentación del Anexo XII y el respeto del copyright.',
    citations: [
      makeCitation({
        id: 'art_56.p3',
        targetType: 'paragraph',
        articleId: 'art_56',
        paragraphId: 'art_56.p3',
        displayLabel: 'Art. 56.1 y 56.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Todos los proveedores de modelos de IA de uso general podrán participar en el proceso de elaboración de los códigos de buenas prácticas. La Oficina de IA podrá invitar a participar en el proceso a los proveedores de sistemas de IA, a las autoridades nacionales competentes pertinentes, así como a organizaciones de la sociedad civil, la industria, el mundo académico y otras partes interesadas pertinentes, como los titulares de derechos, y a expertos independientes.',
      }),
    ],
  },
  {
    id: 'qz_168',
    topicId: 'gpai',
    topicLabel: 'Modelos de IA de Uso General — GPAI (Arts. 51-56)',
    articleId: 'art_56',
    titleId: 'tit_V',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Si una empresa proveedora de un modelo GPAI decide NO adherirse al Código de Buenas Prácticas aprobado conforme al artículo 56 (y todavía no existe una norma armonizada europea publicada), ¿cuál es su situación jurídica según los artículos 53.4 y 55.2?',
    options: [
      'Incurrirá en infracción grave sancionada de forma automática con la retirada del mercado y la imposición de una multa coercitiva diaria fijada por la Junta Europea de Inteligencia Artificial.',
      'Quedará exenta de toda supervisión técnica hasta la adopción definitiva de una norma armonizada por el Comité Europeo de Normalización conforme al mandato del artículo 40 del Reglamento.',
      'Deberá someter obligatoriamente su modelo a la auditoría técnica de tres organismos notificados independientes radicados en diferentes Estados miembros de la Unión en un plazo de seis meses.',
      'Deberá demostrar que cumple las obligaciones de los artículos 53.1 y 55.1 por medios alternativos adecuados, los cuales estarán sujetos a la evaluación y aprobación expresa de la Comisión.',
    ],
    correctOptionIndex: 3,
    explanation:
      'Los artículos 53.4 y 55.2 disponen que los proveedores que no se adhieran a un código de buenas prácticas aprobado o no apliquen una norma armonizada deberán demostrar por "medios alternativos adecuados" que cumplen sus obligaciones legales, quedando sometidos a una evaluación más escrutadora y a la aprobación de la Comisión.',
    enterpriseLesson:
      'No adherirse al Código de Buenas Prácticas GPAI (Art. 56) es legal pero desplaza toda la carga probatoria hacia el proveedor, que deberá acreditar "medios alternativos adecuados" ante la Comisión.',
    citations: [
      makeCitation({
        id: 'art_53.p4',
        targetType: 'paragraph',
        articleId: 'art_53',
        paragraphId: 'art_53.p4',
        displayLabel: 'Art. 53.4, 55.2 y 56.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores que no se adhieran a un código de buenas prácticas aprobado o no cumplan una norma armonizada demostrarán que disponen de medios alternativos adecuados de cumplimiento para la aprobación de la Comisión.',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE E. INNOVACIÓN, GOBERNANZA, VIGILANCIA Y SANCIONES (topicId: 'governance_sanctions') — 24 preguntas (qz_169 a qz_192)
  // =========================================================================
  {
    id: 'qz_169',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_57',
    titleId: 'tit_VI',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 57.1, ¿qué obligación tienen todos los Estados miembros respecto a la creación de espacios controlados de pruebas para la IA (sandboxes regulatorios) y en qué fecha límite?',
    options: [
      'Establecer al menos un espacio controlado de pruebas de IA a nivel nacional, que estará operativo a más tardar el 2 de agosto de 2026 (pudiendo crearse conjuntamente con otros Estados miembros).',
      'Crear una red obligatoria de al menos tres espacios de pruebas provinciales operativos a más tardar el 2 de agosto de 2025, gestionados por las universidades públicas de cada demarcación.',
      'Facilitar la apertura obligatoria de un entorno virtual de ensayos antes del 2 de febrero de 2027, con carácter meramente facultativo si el Estado miembro no cuenta con empresas desarrolladoras de software.',
      'Habilitar un único laboratorio de pruebas centralizado coordinado por la Oficina de IA en Bruselas, asumiendo los presupuestos nacionales su financiación a partir del 2 de agosto de 2028.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 57.1 obliga a todos los Estados miembros a garantizar que sus autoridades competentes establezcan al menos un espacio controlado de pruebas para la IA a nivel nacional, plenamente operativo a más tardar el 2 de agosto de 2026. España se adelantó como país pionero mediante el Real Decreto 817/2023.',
    enterpriseLesson:
      'Desde el 2 de agosto de 2026, cualquier empresa establecida en la UE tiene garantizado por ley el acceso a al menos un sandbox regulatorio nacional de IA (Art. 57.1).',
    citations: [
      makeCitation({
        id: 'art_57.p1',
        targetType: 'paragraph',
        articleId: 'art_57',
        paragraphId: 'art_57.p1',
        displayLabel: 'Art. 57.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los Estados miembros velarán por que sus autoridades competentes establezcan al menos un espacio controlado de pruebas para la IA a nivel nacional, que estará operativo a más tardar el 2 de agosto de 2026.',
      }),
    ],
  },
  {
    id: 'qz_170',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_57',
    titleId: 'tit_VI',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una startup finaliza con éxito su participación en el espacio controlado de pruebas para la IA (sandbox regulatorio) de la AESIA. Según el artículo 57.7, ¿qué documentos le entregará la autoridad competente previa solicitud y para qué sirven?',
    options: [
      'Un certificado de marcado CE de validez definitiva y una dispensa de responsabilidad civil frente a eventuales reclamaciones de daños durante los tres primeros años de comercialización.',
      'Una prueba escrita de actividades e informe de salida con resultados y conclusiones, que las autoridades y organismos notificados tendrán en cuenta para acelerar la evaluación de conformidad.',
      'Una subvención directa a fondo perdido con cargo a los fondos europeos de cohesión y la convalidación automática de todos los requisitos de ciberseguridad exigidos por la Directiva NIS 2.',
      'Una resolución administrativa de homologación técnica previa que exime al sistema de someterse a la supervisión posterior del mercado y le concede preferencia reglamentaria en licitaciones del sector público.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 57.7 establece que las autoridades nacionales competentes facilitarán, previa solicitud del proveedor participante, una prueba escrita de las actividades realizadas con éxito en el sandbox y un informe de salida detallado, los cuales serán tenidos en cuenta positivamente por las autoridades y organismos notificados para acelerar la evaluación de la conformidad antes de salir al mercado.',
    enterpriseLesson:
      'Solicita siempre el "Informe de Salida" y la prueba escrita del Art. 57.7 al concluir un sandbox regulatorio: reducen tiempos y costes ante el organismo notificado y ante inversores.',
    citations: [
      makeCitation({
        id: 'art_57.p7',
        targetType: 'paragraph',
        articleId: 'art_57',
        paragraphId: 'art_57.p7',
        displayLabel: 'Art. 57.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las autoridades nacionales competentes facilitarán, previa solicitud del proveedor o futuro proveedor de IA, una prueba escrita de las actividades realizadas con éxito en el espacio controlado de pruebas. Las autoridades nacionales competentes también facilitarán un informe de salida en el que se detallarán las actividades realizadas en el espacio controlado de pruebas y los resultados y conclusiones conexos.',
      }),
    ],
  },
  {
    id: 'qz_171',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_59',
    titleId: 'tit_VI',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Dentro de un espacio controlado de pruebas para la IA (sandbox regulatorio), una entidad desea reutilizar datos personales que fueron recogidos legalmente con otros fines para desarrollar y entrenar un sistema de IA innovador. Según el artículo 59.1, ¿en qué ámbitos de interés público y bajo qué condiciones estrictas se permite este tratamiento ulterior?',
    options: [
      'En cualquier ámbito de actividad comercial o publicitaria privada, siempre que los interesados hayan prestado un consentimiento informado genérico y la entidad abone una tasa compensatoria a la AEPD.',
      'Únicamente para sistemas biométricos en espacios de acceso público con fines policiales graves, requiriéndose una autorización judicial previa emitida en las veinticuatro horas anteriores al inicio de la prueba.',
      'Para fines de interés público tasados (salud, clima, seguridad, servicios públicos) si no bastan datos sintéticos, con aislamiento técnico, sin cesión a terceros y suprimiéndolos al finalizar el sandbox.',
      'Exclusivamente para modelos de IA destinados a la optimización de procesos fiscales internos de las entidades financieras, siempre que los datos personales procedan de fuentes de acceso público.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 59 habilita una base regulatoria específica dentro del sandbox para el tratamiento ulterior de datos personales recogidos legalmente con otros fines, pero la circunscribe estrictamente a ámbitos tasados de interés público (salud, clima/energía, seguridad y servicios públicos) y al cumplimiento de diez salvaguardias acumulativas (necesidad, imposibilidad con datos anonimizados/sintéticos, entorno aislado, prohibición de afectar a los interesados y borrado al salir del sandbox).',
    enterpriseLesson:
      'Si tu proyecto de IA sanitaria, climática o de servicios públicos necesita reutilizar datasets históricos con datos personales, la entrada en el sandbox regulatorio te permite invocar el marco habilitante del Art. 59.',
    citations: [
      makeCitation({
        id: 'art_59.p1',
        targetType: 'paragraph',
        articleId: 'art_59',
        paragraphId: 'art_59.p1',
        displayLabel: 'Art. 59.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'En el espacio controlado de pruebas para la IA, los datos personales recogidos legalmente con otros fines podrán tratarse únicamente con el fin de desarrollar, entrenar y probar determinados sistemas de IA en el espacio controlado de pruebas cuando se cumplan todas las condiciones siguientes...',
      }),
    ],
  },
  {
    id: 'qz_172',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_60',
    titleId: 'tit_VI',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un proveedor de un sistema de IA de alto riesgo del Anexo III desea realizar pruebas en condiciones reales FUERA de un sandbox regulatorio antes de introducir el sistema en el mercado. Según el artículo 60.4 y el Anexo IX, ¿qué requisitos previos debe cumplir antes de iniciar las pruebas?',
    options: [
      'Remitir una comunicación informativa previa a la Comisión Europea con diez días de antelación y publicar los datos de contacto del delegado de protección de datos en el boletín oficial del Estado miembro.',
      'Depositar el código fuente del sistema en un repositorio notarial seguro y contratar un seguro de caución específico por un importe mínimo legal de quinientos mil euros para responder ante los afectados.',
      'Obtener un dictamen favorable vinculante de un organismo notificado acreditado y realizar una consulta pública previa no vinculante entre los consumidores potencialmente expuestos al sistema de IA.',
      'Elaborar un plan de pruebas, presentarlo a la autoridad de vigilancia para su aprobación (o transcurso de 30 días si rige aprobación tácita) e inscribirlo en la sección no pública de la base de datos comunitaria.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 60.4 exige, para probar sistemas de alto riesgo del Anexo III en condiciones reales fuera de un sandbox: elaborar el plan de pruebas y someterlo a la autoridad de vigilancia del mercado (que dispone de 30 días), registrar la prueba con los elementos del Anexo IX, garantizar que los datos no se transfieran a terceros países sin garantías, limitar la duración (máximo 6+6 meses), proteger a grupos vulnerables y recabar el consentimiento informado del Art. 61.',
    enterpriseLesson:
      'En sistemas de alto riesgo del Anexo III, no existe el lanzamiento libre en producción bajo etiqueta "Beta": toda prueba en el mundo real fuera de sandbox requiere plan aprobado, registro conforme al Anexo IX y consentimiento informado (Arts. 60 y 61).',
    citations: [
      makeCitation({
        id: 'art_60.p4',
        targetType: 'paragraph',
        articleId: 'art_60',
        paragraphId: 'art_60.p4',
        displayLabel: 'Art. 60.4 y Anexo IX · Reglamento (UE) 2024/1689',
        exactQuote:
          'a) el proveedor o futuro proveedor ha elaborado un plan de pruebas en condiciones reales y lo ha presentado a la autoridad de vigilancia del mercado del Estado miembro en el que vayan a realizarse las pruebas... b) la autoridad de vigilancia del mercado... ha aprobado las pruebas... c) el proveedor o futuro proveedor, con excepción de los proveedores o futuros proveedores de los sistemas de IA de alto riesgo a que se refiere el anexo III, puntos 1, 6 y 7... ha registrado las pruebas en condiciones reales...',
      }),
    ],
  },
  {
    id: 'qz_173',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_61',
    titleId: 'tit_VI',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué derechos garantiza el artículo 61 a los sujetos que participan en pruebas en condiciones reales de sistemas de IA de alto riesgo fuera de un sandbox regulatorio?',
    options: [
      'Otorgar consentimiento informado libre, retirarse en cualquier momento revocándolo y solicitar la supresión inmediata y permanente de sus datos personales sin sufrir perjuicio ni justificar la decisión.',
      'Percibir una compensación económica regulada por cada hora de exposición al sistema y exigir una copia certificada ante notario de los registros técnicos de inferencia generados durante las pruebas.',
      'Mantener obligatoriamente su participación durante un plazo mínimo legal de noventa días desde la firma inicial, pudiendo solicitar la cancelación de sus datos únicamente tras la finalización del ensayo en campo.',
      'Exigir la presencia presencial permanente de un notario público durante las sesiones de prueba y disponer de una copia autenticada de los algoritmos y pesos computacionales del modelo evaluado.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 61 exige el consentimiento informado libre de los sujetos de las pruebas en condiciones reales, informándoles de la naturaleza y objetivos de la prueba, las posibles inconveniencias, sus derechos y las modalidades para solicitar la inversión o ignorar las predicciones del sistema, así como su derecho a retirarse en cualquier momento y exigir el borrado inmediato y permanente de sus datos personales sin sufrir perjuicio alguno.',
    enterpriseLesson:
      'Diseña tu flujo de pruebas en condiciones reales (Art. 61) con un botón o mecanismo inmediato de revocación de consentimiento, reversión de decisiones de la IA y borrado permanente de datos del participante.',
    citations: [
      makeCitation({
        id: 'art_61.p1',
        targetType: 'paragraph',
        articleId: 'art_61',
        paragraphId: 'art_61.p1',
        displayLabel: 'Art. 61.1 y 61.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los sujetos de las pruebas en condiciones reales, o su representante legalmente designado, podrán, sin sufrir por ello perjuicio alguno y sin tener que justificar su decisión, retirarse de las pruebas en cualquier momento mediante la revocación de su consentimiento informado y solicitar la supresión inmediata y permanente de sus datos personales.',
      }),
    ],
  },
  {
    id: 'qz_174',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_62',
    titleId: 'tit_VI',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      '¿Qué ventajas específicas reconoce el artículo 62 a los proveedores y responsables del despliegue que sean PYMEs, incluidas las empresas emergentes (startups) y las microempresas, establecidas en la Unión?',
    options: [
      'Exención total del cumplimiento de los requisitos de calidad de datos del artículo 10 y dispensa de la obligación de disponer de un sistema de gestión de riesgos durante los primeros cinco años.',
      'Acceso prioritario y gratuito a sandboxes, formación específica, canales de comunicación dedicados, reducción proporcional de tasas de evaluación por organismos notificados y simplificaciones del Art. 63.',
      'Subvención comunitaria no reembolsable del cien por cien de los costes de cómputo en centros de datos de la Unión y autorización para comercializar sistemas de alto riesgo sin marcado CE.',
      'Inmunidad sancionadora indefinida frente a las multas de la autoridad de vigilancia del mercado siempre que su facturación anual global consolidada sea inferior a dos millones de euros.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Los artículos 62 y 63 establecen un paquete integral de apoyo a PYMEs, startups y microempresas establecidas en la Unión: acceso prioritario y gratuito a los sandboxes regulatorios, formación y canales de consulta dedicados, plantillas simplificadas de documentación técnica, reducción proporcional de tarifas de organismos notificados atendiendo a su tamaño y cumplimiento simplificado del sistema de gestión de la calidad (Art. 17) para microempresas.',
    enterpriseLesson:
      'Si eres una PYME o startup en España, solicita acceso prioritario y gratuito al sandbox de la AESIA y utiliza los formularios simplificados de documentación técnica y de gestión de calidad previstos en los Arts. 11, 62 y 63.',
    citations: [
      makeCitation({
        id: 'art_62.p1',
        targetType: 'paragraph',
        articleId: 'art_62',
        paragraphId: 'art_62.p1',
        displayLabel: 'Art. 62.1 y Art. 63 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los Estados miembros emprenderán las siguientes acciones: a) concederán a las pymes, incluidas las empresas emergentes, que tengan su domicilio social o una sucursal en la Unión, acceso prioritario a los espacios controlados de pruebas para la IA, en la medida en que cumplan las condiciones de admisibilidad y los criterios de selección; el acceso a los espacios controlados de pruebas será gratuito para las pymes, incluidas las empresas emergentes...',
      }),
    ],
  },
  {
    id: 'qz_175',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_64',
    titleId: 'tit_VII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Dentro de la arquitectura de gobernanza europea del Capítulo VII (Artículos 64 a 68), ¿cuál es la diferencia funcional entre la Oficina de IA, el Comité Europeo de IA y el Foro Consultivo?',
    options: [
      'El Comité Europeo de IA tramita directamente las sanciones a los proveedores GPAI (Art. 64), la Oficina de IA redacta normas ISO (Art. 65) y el Foro Consultivo aprueba los actos de ejecución comunitarios (Art. 66).',
      'La Oficina de IA actúa como tribunal judicial de apelación (Art. 64), el Comité de IA representa a las asociaciones de consumidores (Art. 65) y el Foro Consultivo supervisa los presupuestos aduaneros (Art. 66).',
      'La Oficina de IA supervisa modelos GPAI (Art. 64), el Comité de IA coordina a las autoridades nacionales de los Estados (Art. 65) y el Foro Consultivo aporta la pericia de las partes interesadas (Art. 66).',
      'El Foro Consultivo gestiona la base de datos de la UE (Art. 64), la Oficina de IA inspecciona únicamente productos sanitarios (Art. 65) y el Comité de IA evalúa en exclusiva la ciberseguridad militar (Art. 66).',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Capítulo VII diseña una gobernanza a dos niveles coordinados: la Oficina de IA (Art. 64, creada en el seno de la Comisión por Decisión C(2024) 390) supervisa de forma centralizada los modelos GPAI; el Comité Europeo de IA (Art. 65, un representante por Estado miembro, con el SEPD como observador) coordina la aplicación coherente en la Unión; el Foro Consultivo (Art. 66) representa de forma equilibrada a la industria, startups, sociedad civil y academia; y el Grupo Científico (Art. 68) aporta pericia científica independiente.',
    enterpriseLesson:
      'Para cuestiones sobre modelos GPAI tu regulador directo es la Oficina Europea de IA en Bruselas (Art. 64 y 88); para sistemas de alto riesgo o prácticas prohibidas en España tu autoridad de vigilancia es la AESIA (Art. 70) y las autoridades sectoriales.',
    citations: [
      makeCitation({
        id: 'art_64.p1',
        targetType: 'paragraph',
        articleId: 'art_64',
        paragraphId: 'art_64.p1',
        displayLabel: 'Arts. 64, 65 y 66 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Comisión desarrollará los conocimientos especializados y las capacidades de la Unión en el ámbito de la IA por medio de la Oficina de IA. Los Estados miembros facilitarán las tareas encomendadas a la Oficina de IA, según se refleja en el presente Reglamento.',
      }),
    ],
  },
  {
    id: 'qz_176',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_70',
    titleId: 'tit_VII',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Según el artículo 70 del Reglamento (UE) 2024/1689 y el marco normativo español (Real Decreto 729/2023, BOE-A-2023-18911), ¿qué tipos de autoridades nacionales competentes debe designar cada Estado miembro y qué organismo asume el rol central de supervisión de IA en España?',
    options: [
      'Designar una autoridad tributaria y un tribunal mercantil de arbitraje digital, encomendando en España la supervisión exclusiva del Reglamento al Instituto Nacional de Ciberseguridad (INCIBE) en coordinación con el CNI.',
      'Establecer un consejo interministerial de innovación tecnológica sin potestades inspectoras, delegando en España la instrucción de expedientes sancionadores en las direcciones generales de consumo autonómicas.',
      'Nombrar a una entidad privada de auditoría como organismo supervisor de control único, asumiendo en España la Entidad Nacional de Acreditación (ENAC) la imposición de multas y la emisión de directrices vinculantes.',
      'Designar al menos una autoridad notificante y una de vigilancia del mercado con un punto de contacto único, asumiendo en España la AESIA las funciones centrales, coordinada con supervisores como la AEPD o el Banco de España.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 70.1 y 70.2 exige a cada Estado miembro designar al menos una autoridad notificante y al menos una autoridad de vigilancia del mercado, así como un punto de contacto único público. En España, la AESIA (creada por RD 729/2023, BOE-A-2023-18911) actúa como agencia supervisora de referencia, en coordinación con la AEPD y los supervisores sectoriales (Banco de España, CNMV, DGSFP, AEMPS).',
    enterpriseLesson:
      'Identifica en tu matriz de cumplimiento tanto a la AESIA como a tu supervisor sectorial competente (AEPD si hay datos personales, Banco de España en banca, DGSFP en seguros, AEMPS en producto sanitario).',
    citations: [
      makeCitation({
        id: 'art_70.p1',
        targetType: 'paragraph',
        articleId: 'art_70',
        paragraphId: 'art_70.p1',
        displayLabel: 'Art. 70.1 y 70.2 · Reglamento (UE) 2024/1689 y RD 729/2023 (BOE-A-2023-18911)',
        exactQuote:
          'Cada Estado miembro establecerá o designará como autoridades nacionales competentes al menos una autoridad notificante y al menos una autoridad de vigilancia del mercado a efectos del presente Reglamento.',
      }),
    ],
  },
  {
    id: 'qz_177',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_71',
    titleId: 'tit_VIII',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'En relación con la base de datos de la UE para sistemas de IA de alto riesgo del artículo 71 (y artículo 49), ¿en qué casos la información registrada NO es accesible al público general, sino que queda restringida en una sección segura solo para la Comisión y las autoridades de vigilancia del mercado?',
    options: [
      'Para sistemas de alto riesgo del Anexo III puntos 1, 6 y 7 (biometría, policía, migración y asilo) y las pruebas en condiciones reales fuera de sandbox del artículo 60.',
      'Para todos los sistemas de alto riesgo desarrollados por microempresas y entidades académicas de investigación que facturen menos de diez millones de euros en la Unión.',
      'Para los sistemas de IA destinados a la evaluación de solvencia crediticia y tarificación de seguros de vida y salud enumerados en el punto 5 del Anexo III del Reglamento.',
      'Para aquellos sistemas respecto de los cuales el proveedor haya presentado una solicitud formal de reserva de secretos comerciales ante la Oficina Europea de Patentes.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 49.4 y el artículo 71.4 dividen la base de datos de la UE en dos secciones: una sección pública y gratuita para la mayoría de los sistemas del Anexo III (puntos 3, 4, 5 y 8), y una sección restringida y segura (no pública) para los sistemas de alto riesgo en los ámbitos de biometría (punto 1), fuerzas y cuerpos de seguridad (punto 6) y migración/asilo/fronteras (punto 7), así como para el registro de pruebas en condiciones reales (Art. 60). Además, los de infraestructuras críticas (punto 2) se registran a nivel nacional.',
    enterpriseLesson:
      'Si registras un sistema de alto riesgo de RR.HH. (punto 4) o crédito/seguros (punto 5), ten en cuenta que los metadatos del Anexo VIII serán públicos en la base de datos de la UE (Art. 71.4); redacta los campos sin incluir secretos industriales.',
    citations: [
      makeCitation({
        id: 'art_71.p4',
        targetType: 'paragraph',
        articleId: 'art_71',
        paragraphId: 'art_71.p4',
        displayLabel: 'Art. 71.4 y Art. 49.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Con excepción de la sección a que se refieren el artículo 49, apartado 4, y el artículo 60, apartado 4, letra c), la información contenida en la base de datos de la UE registrada de conformidad con el artículo 49 estará a disposición del público de manera fácil de usar.',
      }),
    ],
  },
];
