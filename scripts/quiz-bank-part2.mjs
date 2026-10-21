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
      'No, porque el artículo 50.1 exime de la obligación de informar cuando resulte evidente desde el punto de vista de una persona física razonablemente informada, atenta y perspicaz, teniendo en cuenta las circunstancias y el contexto de uso.',
      'Sí, todo algoritmo informático requiere un banner emergente bloqueante con firma digital del usuario.',
      'No, porque el artículo 50.1 solo se aplica a robots humanoides físicos y nunca a interfaces de software.',
      'Sí, y además debe registrarse como sistema de alto riesgo en el Anexo III punto 8.',
    ],
    correctOptionIndex: 0,
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
      'Cuando el sistema sea utilizado por una gran superficie comercial en campaña de rebajas.',
      'Cuando se trate de sistemas de IA autorizados por ley para detectar, prevenir, investigar o perseguir delitos, con sujeción a las salvaguardias adecuadas para los derechos y las libertades de terceros, a menos que dichos sistemas estén a disposición del público para denunciar un delito.',
      'Cuando el proveedor sea una microempresa con menos de diez empleados.',
      'Cuando la interacción dure menos de tres minutos por sesión.',
    ],
    correctOptionIndex: 1,
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
      'Sí, cualquier procesamiento que utilice redes neuronales obliga a insertar marcas de agua de contenido sintético.',
      'Solo si el archivo supera los 100 megabytes.',
      'No, porque la obligación de marcado legible por máquina del artículo 50.2 no se aplica en la medida en que los sistemas de IA desempeñen una función de asistencia para la edición estándar o no alteren sustancialmente los datos de entrada facilitados por el responsable del despliegue o su semántica.',
      'Sí, salvo que el usuario pague una licencia profesional.',
    ],
    correctOptionIndex: 2,
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
      'Únicamente el coste de los servidores en terceros países.',
      'Que las soluciones sean secretas e incompatibles con los estándares de otros fabricantes.',
      'Que el marcado sea visible a simple vista ocupando el 30 % de la imagen.',
      'Que sus soluciones técnicas sean eficaces, interoperables, sólidas y fiables en la medida en que sea técnicamente viable, teniendo en cuenta las especificidades y limitaciones de los diversos tipos de contenido, los costes de aplicación y el estado de la técnica generalmente reconocido, según pueda reflejarse en las normas técnicas pertinentes.',
    ],
    correctOptionIndex: 3,
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
      'Informar del funcionamiento del sistema a las personas físicas expuestas a él y tratar los datos personales de conformidad con el RGPD —Reglamento (UE) 2016/679— (además de cumplir las obligaciones de alto riesgo si aplica el Anexo I o Anexo III.1).',
      'Publicar los vídeos de los pacientes en la web corporativa de la clínica.',
      'Solicitar autorización previa al Parlamento Europeo por cada paciente.',
      'Ninguna, porque al ser un uso médico está exento del artículo 50.3 y del RGPD.',
    ],
    correctOptionIndex: 0,
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
      'Cuando el responsable del despliegue sea una agencia de publicidad exterior.',
      'Cuando se trate de sistemas de IA utilizados para la categorización biométrica y el reconocimiento de emociones que hayan sido autorizados por ley para detectar, prevenir e investigar delitos, con sujeción a las salvaguardias adecuadas para los derechos y las libertades de terceros y de conformidad con el Derecho de la Unión.',
      'Cuando los datos se eliminen en menos de 72 horas.',
      'Cuando el sistema funcione sin conexión a internet.',
    ],
    correctOptionIndex: 1,
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
      'Cualquier fotografía digital retocada con brillo o contraste.',
      'Un texto generado por un traductor automático.',
      'Una imagen o un contenido de audio o vídeo generado o manipulado por la IA que se asemeja a personas, objetos, lugares, entidades o sucesos existentes y que puede inducir a una persona a pensar erróneamente que son auténticos o verídicos.',
      'Un virus informático diseñado mediante aprendizaje por refuerzo.',
    ],
    correctOptionIndex: 2,
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
      'Ninguna, porque las empresas energéticas solo regulan su hardware.',
      'Está prohibido usar IA para redactar textos informativos.',
      'Solo debe informar si el texto contiene más de diez cifras estadísticas.',
      'Debe declarar de forma clara y distinguible que el texto se ha generado o manipulado artificialmente, ya que al no haber existido revisión humana o control editorial ni asunción de responsabilidad editorial por una persona física o jurídica, no puede acogerse a la exención del artículo 50.4.',
    ],
    correctOptionIndex: 3,
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
      'La información de transparencia facilitada a las personas físicas afectadas deberá ajustarse a los requisitos de accesibilidad aplicables (lectores de pantalla, contraste, canales alternativos sensoriales).',
      'Queda exento de informar a personas con discapacidad para simplificar la interfaz.',
      'Solo debe ofrecer el aviso mediante una imagen estática sin texto alternativo.',
      'Debe enviar el aviso por carta certificada en papel.',
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
      'Sí, cumplir el Capítulo III exime automáticamente de aplicar el artículo 50.',
      'No: el artículo 50.6 establece expresamente que los apartados 1 a 4 se entienden sin perjuicio de los requisitos y obligaciones establecidos en el Capítulo III, por lo que ambos regímenes se aplican de forma cumulativa.',
      'El artículo 50 sustituye a la evaluación de conformidad del Capítulo III.',
      'Solo se aplica el artículo 50 y decae el Anexo III.',
    ],
    correctOptionIndex: 1,
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
      'La imposición de un impuesto por cada imagen generada.',
      'La creación de un cuerpo policial de diseñadores gráficos.',
      'La Oficina de IA fomentará y facilitará la elaboración de códigos de buenas prácticas a escala de la Unión, que la Comisión podrá aprobar mediante actos de ejecución para conferirles validez general si los considera adecuados.',
      'La prohibición de exportar contenido multimedia fuera de la UE.',
    ],
    correctOptionIndex: 2,
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
      'Sí, si la persona cuya imagen se recrea ha firmado un contrato de cesión de derechos de imagen, no hay que informar al público.',
      'Sí, porque los anuncios publicitarios nunca se consideran ultrafalsificaciones.',
      'Solo hay que informar si el anuncio se emite después de las 22:00 horas.',
      'No: el artículo 50.4 protege a los destinatarios frente al engaño sobre la autenticidad del contenido audiovisual, por lo que el responsable del despliegue debe hacer público igualmente que el vídeo ha sido generado o manipulado artificialmente.',
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
      'El proveedor debe diseñar el sistema para informar de la interacción humana-IA (50.1) e insertar el marcado técnico legible por máquina en los outputs sintéticos (50.2), mientras que el responsable del despliegue debe informar a los expuestos a reconocimiento emocional/categorización biométrica (50.3) y declarar públicamente los deepfakes y textos de interés público no revisados (50.4).',
      'Tanto el artículo 50.1 como el 50.4 recaen exclusivamente sobre el proveedor del hardware.',
      'El responsable del despliegue debe programar los algoritmos criptográficos del modelo fundacional, y el proveedor debe revisar editorialmente cada noticia de los periódicos.',
      'Todas las obligaciones del artículo 50 recaen únicamente en el ciudadano consumidor final.',
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
      'Sí, el aviso debe tapar al menos la mitad de la imagen durante toda la emisión.',
      'No: al formar parte de una obra o programa manifiestamente satírico, artístico, creativo o de ficción, el artículo 50.4 limita la obligación a revelar la existencia del contenido generado o manipulado de una manera adecuada que no obstaculice la exhibición o el disfrute de la obra.',
      'Sí, porque el humor político con IA está prohibido en el artículo 5.',
      'No, porque la televisión está exenta de cualquier ley europea.',
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
      'El artículo 50 queda derogado indefinidamente.',
      'Cada empresa puede decidir libremente no marcar ningún contenido.',
      'La Comisión podrá adoptar actos de ejecución en los que se especifiquen normas comunes para la aplicación de las obligaciones establecidas en los apartados 2 y 4, incluidas las cuestiones detalladas relativas al marcado y etiquetado.',
      'La competencia pasa a los ayuntamientos de menos de 5.000 habitantes.',
    ],
    correctOptionIndex: 2,
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
      'Por tener más de 100 empleados o cotizar en el Nasdaq.',
      'Por usar lenguaje Python o por entrenarse con tarjetas gráficas.',
      'Por ofrecer una versión gratuita al público o por traducir más de tres idiomas.',
      'Cuando posea capacidades de gran impacto evaluadas a partir de herramientas y metodologías técnicas adecuadas (Art. 51.1.a), o cuando la Comisión adopte una decisión, de oficio o a raíz de una alerta cualificada del grupo científico, por considerar que tiene capacidades o impacto equivalentes habida cuenta de los criterios del Anexo XIII (Art. 51.1.b).',
    ],
    correctOptionIndex: 3,
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
      'Cuando supere los 10^15 FLOPs en una sola hora de inferencia.',
      'Cuando el tamaño del archivo de pesos en disco supere los 500 gigabytes.',
      'Cuando consuma más de 100 kilovatios-hora al mes.',
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
      'No puede modificarse nunca sin reformar los Tratados de la Unión Europea.',
      'La Comisión adoptará actos delegados con arreglo al artículo 97 para modificar los umbrales de los apartados 1 y 2 y completar los parámetros de referencia e indicadores a la luz de la evolución tecnológica, como las mejoras algorítmicas o la mayor eficiencia del hardware.',
      'Lo decide por sorteo el Comité Económico y Social.',
      'Cada Estado miembro fija su propio umbral de FLOPs por decreto nacional.',
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
      'Al menos 50 usuarios empresariales.',
      'Al menos 500 usuarios empresariales.',
      'Al menos 10.000 usuarios empresariales registrados establecidos en la Unión.',
      'Al menos 10 millones de empresas cotizadas.',
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
      'Ocultar el entrenamiento a la Comisión y no presentar notificación.',
      'Autodeclararse exento sin comunicarlo a ninguna autoridad.',
      'Pedir a un juzgado municipal que anule el artículo 51.',
      'Presentar, junto con su notificación, argumentos suficientemente fundamentados para demostrar que, excepcionalmente, a pesar de cumplir el requisito cuantitativo del artículo 51.1(a), el modelo no presenta riesgos sistémicos debido a sus características específicas.',
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
      'A partir de los 6 meses siguientes a la decisión de designación de la Comisión; y si la Comisión rechaza la solicitud tras la reevaluación, el proveedor no podrá presentar una nueva solicitud hasta que hayan transcurrido otros 6 meses.',
      'Al día siguiente de la decisión, pudiendo presentar una solicitud diaria.',
      'Solo pasados 10 años desde la designación.',
      'Nunca; la designación como riesgo sistémico es perpetua e irreversible.',
    ],
    correctOptionIndex: 0,
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
      'Mantener la lista en secreto militar absoluto.',
      'Velar por que se publique y se mantenga actualizada una lista de los modelos de IA de uso general con riesgo sistémico, sin perjuicio de la necesidad de respetar y proteger los derechos de propiedad intelectual e industrial y la información empresarial confidencial o los secretos comerciales.',
      'Publicar los pesos completos de todos los modelos comerciales en el DOUE.',
      'Comunicar la lista únicamente a los bancos centrales.',
    ],
    correctOptionIndex: 1,
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
      'El nombre y apellidos de todos los usuarios finales del modelo.',
      'Las facturas de alquiler de las oficinas comerciales del proveedor.',
      'La descripción detallada de las estrategias de evaluación, los resultados de las pruebas con adversarios (red-teaming), la arquitectura del sistema de cómputo y las medidas aplicadas para evaluar y mitigar los riesgos sistémicos y garantizar la ciberseguridad física y lógica (Anexo XI, Sección 2).',
      'El código fuente del sistema operativo de los ordenadores de los clientes.',
    ],
    correctOptionIndex: 2,
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
      'El número de árboles plantados alrededor de su sede social.',
      'La marca de los vehículos de los directivos.',
      'El consumo de agua potable de las cafeterías del centro de datos.',
      'Los recursos de cálculo utilizados para entrenar el modelo (en FLOPs), el tiempo de entrenamiento y el consumo de energía conocido o estimado del entrenamiento (pudiendo estimarse a partir de los recursos computacionales utilizados si se desconoce el dato exacto).',
    ],
    correctOptionIndex: 3,
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
      'Debe facilitar la información y documentación del Anexo XII necesaria para que el proveedor posterior comprenda las capacidades y limitaciones del modelo y cumpla sus obligaciones del Reglamento, pero respetando y protegiendo los derechos de propiedad intelectual e industrial y la información empresarial confidencial o los secretos comerciales.',
      'Debe entregar gratuitamente el código fuente íntegro y todos los contratos con sus clientes.',
      'Puede negarse a entregar cualquier documento alegando que el Anexo XII es opcional.',
      'Solo debe entregar el Anexo XII si el integrador compra el 51 % de sus acciones.',
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
      'No infringe nada si los servidores de entrenamiento estaban fuera de la UE.',
      'Porque el artículo 53.1(c) (en relación con el Considerando 106) obliga a todo proveedor que introduzca un modelo GPAI en el mercado de la Unión a establecer una política para cumplir el Derecho de la Unión en materia de derechos de autor y derechos afines, y en particular para detectar y respetar, mediante tecnologías de vanguardia, la reserva de derechos del artículo 4.3 de la Directiva (UE) 2019/790, con independencia de la jurisdicción donde se haya realizado el entrenamiento.',
      'Porque está prohibido usar textos en español para entrenar IA.',
      'Solo infringe la ley si el modelo tiene más de 10^25 FLOPs.',
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
      'Publicar íntegramente en internet cada libro, artículo y fotografía utilizados en el dataset.',
      'Destruir los registros de datos de entrenamiento inmediatamente después de compilar el modelo.',
      'Elaborar y poner a disposición del público un resumen suficientemente detallado sobre el contenido utilizado para el entrenamiento del modelo de IA de uso general, con arreglo a una plantilla facilitada por la Oficina de IA.',
      'Entregar el resumen únicamente bajo orden judicial penal.',
    ],
    correctOptionIndex: 2,
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
      'Sí, cualquier modelo open-source está exento aunque tenga riesgo sistémico.',
      'Sí, pero solo durante los primeros 3 años.',
      'Queda exento del Anexo XI pero no del Anexo XII.',
      'No: el artículo 53.2 establece expresamente que la excepción para modelos con licencia libre y de código abierto NO se aplicará a los modelos de IA de uso general con riesgo sistémico.',
    ],
    correctOptionIndex: 3,
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
      'No: para acogerse a la exención del artículo 53.2, la licencia debe ser verdaderamente libre y de código abierto (permitiendo acceso, uso, modificación y distribución sin monetización ni restricciones comerciales condicionales) y deben hacerse públicos los parámetros, incluidos los pesos, la arquitectura y la información sobre el uso.',
      'Sí, basta con que la palabra "Open" aparezca en el nombre comercial del modelo.',
      'Sí, siempre que el canon sea inferior a 10.000 euros anuales.',
      'Sí, si solo publica la arquitectura en un artículo científico sin publicar los pesos.',
    ],
    correctOptionIndex: 0,
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
      'Mediante una declaración jurada ante notario.',
      'Adhiriéndose a los códigos de buenas prácticas elaborados conforme al artículo 56, cuya adhesión les permite demostrar el cumplimiento hasta que se publique una norma armonizada (o demostrando por otros medios adecuados el cumplimiento si no se adhieren).',
      'Pagando una fianza en el Banco Central Europeo.',
      'Esperando sin hacer nada hasta el año 2032.',
    ],
    correctOptionIndex: 1,
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
      'Sí, todo creador de software fuera de la UE debe contratar un representante autorizado.',
      'Solo si el modelo procesa textos en francés o alemán.',
      'No: el artículo 54.6 exime de la obligación de designar representante autorizado en la Unión a los proveedores de modelos de IA de uso general que se publiquen con una licencia libre y de código abierto (con pesos y arquitectura públicos), a menos que presenten riesgo sistémico.',
      'Sí, salvo que tenga menos de 1 millón de parámetros.',
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
      'Ocultar el incumplimiento para proteger a su cliente.',
      'Pagar la multa de su propio bolsillo sin avisar a nadie.',
      'Esperar tres años a que venza el contrato mercantil.',
      'Pondrá fin inmediatamente al mandato e informará de dicha rescisión, y de los motivos de la misma, a la Oficina de IA.',
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
      'Hará seguimiento, documentará e informará, sin demora indebida, a la Oficina de IA y, según proceda, a las autoridades nacionales competentes, de la información pertinente sobre los incidentes graves y las posibles medidas correctoras para resolverlos.',
      'Informará únicamente a sus accionistas en la junta general anual.',
      'Solo debe informar si el incidente dura más de 30 días consecutivos.',
      'Informará exclusivamente a la prensa internacional.',
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
      'Solo la página web comercial de marketing.',
      'Tanto el propio modelo de IA de uso general con riesgo sistémico (frente a exfiltración de pesos, envenenamiento o jailbreaks sistémicos) como su infraestructura física.',
      'Únicamente los teléfonos móviles personales de los clientes finales.',
      'Solo el cortafuegos de la cafetería corporativa.',
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
      'Exclusivamente empresas estadounidenses sin intervención académica ni civil.',
      'Únicamente funcionarios de aduanas.',
      'Todos los proveedores de modelos GPAI y las autoridades nacionales competentes pueden participar, y la Oficina de IA puede invitar a proveedores de sistemas de IA posteriores, organizaciones de la sociedad civil, la industria, el mundo académico, titulares de derechos y expertos independientes.',
      'Solo los bancos centrales de la zona del euro.',
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
      'Queda exenta de cumplir los artículos 53 y 55 por no haber firmado el código.',
      'Se le prohíbe automáticamente operar en toda Europa sin posibilidad de acreditar cumplimiento alternativo.',
      'Solo tiene que pagar una tasa anual de 500 euros.',
      'Los proveedores que no se adhieran a un código de buenas prácticas aprobado deberán demostrar que cumplen las obligaciones de los artículos 53.1 (y 55.1 si tienen riesgo sistémico) por otros medios adecuados y alternativos, que estarán sujetos a la evaluación y aprobación de la Comisión.',
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
      'Los Estados miembros velarán por que sus autoridades competentes establezcan al menos un espacio controlado de pruebas para la IA a nivel nacional, que estará operativo a más tardar el 2 de agosto de 2026 (pudiendo establecerse también conjuntamente con otros Estados miembros).',
      'Es totalmente voluntario y ningún Estado miembro está obligado a crear uno antes de 2035.',
      'Solo pueden crearlos los municipios con más de un millón de habitantes.',
      'Solo existe un único sandbox ubicado fuera de la Unión Europea.',
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
      'Un cheque al portador por el valor de su capital social.',
      'Una prueba escrita de las actividades realizadas con éxito en el espacio controlado de pruebas, así como un informe de salida en el que se detallarán las actividades y los resultados; documentación que los organismos notificados o autoridades tendrán positivamente en cuenta para acelerar los procedimientos de evaluación de la conformidad en una medida razonable.',
      'Una patente mundial automática durante 50 años.',
      'Una exención vitalicia del RGPD.',
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
      'Para cualquier campaña de telemarketing comercial sin restricciones.',
      'Para crear perfiles ideológicos de votantes.',
      'Exclusivamente para desarrollar determinados sistemas de IA en aras del interés público en ámbitos como salud pública y asistencia sanitaria, transición ecológica/energética, seguridad pública o administración pública, siempre que no baste con datos sintéticos o anonimizados, exista supervisión y aislamiento técnico, no se transmitan a terceros y se supriman al finalizar la participación en el sandbox.',
      'Está prohibido tratar cualquier dato en un sandbox regulatorio.',
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
      'Ninguno, basta con lanzar el sistema en producción como "versión Beta".',
      'Solo avisar por teléfono al responsable del despliegue.',
      'Publicar los datos personales de los sujetos de prueba en un periódico.',
      'Elaborar un plan de pruebas en condiciones reales y presentarlo a la autoridad de vigilancia del mercado del Estado miembro donde vayan a realizarse, obtener su aprobación (o que transcurran 30 días sin objeción cuando la ley nacional prevea aprobación tácita), e inscribir las pruebas en la sección no pública de la base de datos de la UE con la información del Anexo IX.',
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
      'Deben otorgar su consentimiento informado libremente antes de participar, pueden retirarse de las pruebas en cualquier momento revocando su consentimiento y solicitar la supresión inmediata y permanente de sus datos personales sin sufrir ningún perjuicio ni tener que justificar su decisión.',
      'No pueden retirarse una vez iniciada la prueba hasta que transcurran 6 meses.',
      'Pierden el derecho de supresión de sus datos personales.',
      'Deben pagar los costes de computación si deciden abandonar la prueba.',
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
      'Les permite incumplir las prohibiciones del artículo 5.',
      'Acceso prioritario y gratuito a los espacios controlados de pruebas para la IA (sandboxes), actividades específicas de sensibilización y formación, canales dedicados de comunicación y asesoramiento de las autoridades, reducción proporcional de las tasas de evaluación de conformidad por organismos notificados y exención de determinados costes de mantenimiento del sistema de gestión de la calidad para microempresas (Art. 63).',
      'Subvención del 100 % de la plantilla salarial durante diez años.',
      'Exención de presentar documentación técnica del Anexo IV.',
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
      'Son tres nombres distintos para la misma agencia municipal.',
      'El Foro Consultivo impone multas, el Comité entrena modelos y la Oficina de IA es un sindicato.',
      'La Oficina de IA (integrada en la Comisión, Art. 64) ejerce las competencias exclusivas de supervisión y ejecución sobre los modelos GPAI; el Comité Europeo de IA (compuesto por un representante por Estado miembro, Art. 65) garantiza la coordinación y aplicación coherente entre autoridades nacionales; y el Foro Consultivo (Art. 66) aporta conocimientos técnicos de las partes interesadas (industria, pymes, academia y sociedad civil).',
      'La Oficina de IA depende de las Naciones Unidas y el Comité depende de la OTAN.',
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
      'Solo una autoridad tributaria.',
      'Ninguna, porque todo se gestiona desde Estrasburgo.',
      'Solo colegios profesionales privados.',
      'Cada Estado miembro debe establecer o designar como autoridades nacionales competentes al menos una autoridad notificante y al menos una autoridad de vigilancia del mercado (designando además un punto de contacto único), asumiendo en España la Agencia Española de Supervisión de la Inteligencia Artificial (AESIA), con sede en A Coruña, las funciones centrales de supervisión, coordinada con autoridades como la AEPD, el Banco de España o la DGSFP.',
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
      'Para los sistemas de IA de alto riesgo enumerados en el Anexo III puntos 1, 6 y 7 (biometría, aplicación de la ley/policial y migración, asilo y control fronterizo), así como para las pruebas en condiciones reales fuera de sandbox del artículo 60.',
      'Para todos los sistemas de selección de personal de empresas privadas.',
      'Toda la base de datos es 100 % secreta para cualquier ciudadano.',
      'Solo para los sistemas de recomendación de películas.',
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
  {
    id: 'qz_178',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_72',
    titleId: 'tit_IX',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué obligación impone el artículo 72 a los proveedores de sistemas de IA de alto riesgo una vez que el sistema ya ha sido comercializado o puesto en servicio?',
    options: [
      'Olvidarse del sistema una vez cobrada la licencia inicial.',
      'Establecer y documentar un sistema de vigilancia poscomercialización proporcionado a la naturaleza de las tecnologías de IA y a los riesgos del sistema, que recoja, documente y analice activa y sistemáticamente los datos pertinentes facilitados por los responsables del despliegue u otras fuentes sobre su funcionamiento durante toda su vida útil, basándose en un plan de vigilancia poscomercialización que forma parte de la documentación técnica del Anexo IV.',
      'Desactivar el sistema cada seis meses para obligar al cliente a comprar otro.',
      'Entregar los servidores físicos al Ministerio de Industria.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 72 exige a los proveedores de alto riesgo establecer y documentar un sistema de vigilancia poscomercialización activo y sistemático durante toda la vida útil del sistema para evaluar el cumplimiento continuo de los requisitos del Capítulo III Sección 2, sustentado en un plan de vigilancia poscomercialización integrado en la documentación técnica del Anexo IV (punto 9).',
    enterpriseLesson:
      'La conformidad en alto riesgo no termina con el marcado CE inicial: debes mantener telemetría y canales de retroalimentación con tus clientes (deployers) bajo un Plan de Vigilancia Poscomercialización activo (Art. 72).',
    citations: [
      makeCitation({
        id: 'art_72.p1',
        targetType: 'paragraph',
        articleId: 'art_72',
        paragraphId: 'art_72.p1',
        displayLabel: 'Art. 72.1 a 72.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores establecerán y documentarán un sistema de vigilancia poscomercialización de un modo que sea proporcionado a la naturaleza de las tecnologías de IA y a los riesgos del sistema de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_179',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_73',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un proveedor de un sistema de IA de alto riesgo detecta un incidente grave (que no implica fallecimiento ni alteración crítica de infraestructuras). Para cumplir el plazo legal general de notificación del artículo 73.2 (máximo 15 días), aún no tiene todos los datos forenses sobre la causa raíz en el día 14. Según el artículo 73.5, ¿cómo debe proceder?',
    options: [
      'Esperar dos meses hasta tener el informe forense definitivo antes de enviar nada.',
      'No notificar nunca el incidente.',
      'Para garantizar una notificación oportuna dentro de plazo (15 días en el régimen general, 2 días en infracción generalizada/infraestructura crítica o 10 días en caso de fallecimiento), el proveedor podrá presentar una notificación inicial que esté incompleta, seguida de una notificación completa una vez disponga de toda la información.',
      'Borrar los archivos de registro (logs) para reiniciar el sistema desde cero.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 73.5 prevé expresamente que, para garantizar el cumplimiento estricto de los plazos perentorios de los apartados 2 (15 días), 3 (2 días) y 4 (10 días), el proveedor (o en su caso el responsable del despliegue) podrá presentar un informe inicial incompleto dentro del plazo legal, seguido de un informe completo tras concluir la investigación.',
    enterpriseLesson:
      'Nunca incumplas los plazos de 2, 10 o 15 días del Art. 73 esperando a que ingeniería termine el análisis de causa raíz: envía siempre la notificación inicial preliminar dentro de plazo al amparo del Art. 73.5.',
    citations: [
      makeCitation({
        id: 'art_73.p5',
        targetType: 'paragraph',
        articleId: 'art_73',
        paragraphId: 'art_73.p5',
        displayLabel: 'Art. 73.2 y 73.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Para garantizar una notificación oportuna, el proveedor o, en su caso, el responsable del despliegue podrá presentar un informe inicial que esté incompleto, seguido de un informe completo.',
      }),
    ],
  },
  {
    id: 'qz_180',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_73',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Durante la investigación de un incidente grave ocurrido con un sistema de IA de alto riesgo, el equipo técnico del proveedor propone aplicar de inmediato un parche que sobreescribe los pesos y purga la base de datos de logs donde se produjo el fallo, antes de haber informado a la autoridad de vigilancia del mercado. ¿Qué prohíbe taxativamente el artículo 73.6?',
    options: [
      'El artículo 73.6 permite destruir cualquier prueba antes de notificar.',
      'Solo prohíbe apagar el monitor.',
      'Obliga a formatear el servidor inmediatamente.',
      'Tras la notificación de un incidente grave, el proveedor realizará sin demora las investigaciones necesarias en relación con el incidente y el sistema afectado, y NO llevará a cabo ninguna investigación que implique alterar el sistema de IA de un modo que pueda afectar a cualquier evaluación posterior de las causas del incidente antes de haber informado a las autoridades competentes de dicha acción.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 73.6 establece una regla de preservación forense obligatoria: el proveedor debe investigar sin demora el incidente grave y cooperar con las autoridades, pero tiene prohibido realizar cualquier actuación o investigación que implique alterar el sistema de IA de forma que pueda afectar a la evaluación posterior de las causas del incidente sin haber informado previamente a las autoridades competentes.',
    enterpriseLesson:
      'En tu protocolo de respuesta a incidentes de IA (Art. 73.6), el paso 1 es congelar una imagen forense inmutable (snapshot de pesos, contenedores y logs del Art. 12) antes de desplegar cualquier hotfix o reentrenamiento.',
    citations: [
      makeCitation({
        id: 'art_73.p6',
        targetType: 'paragraph',
        articleId: 'art_73',
        paragraphId: 'art_73.p6',
        displayLabel: 'Art. 73.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El proveedor no llevará a cabo ninguna investigación que implique alterar el sistema de IA en cuestión de un modo que pueda afectar a cualquier evaluación posterior de las causas del incidente, antes de haber informado a las autoridades competentes de dicha acción.',
      }),
    ],
  },
  {
    id: 'qz_181',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_77',
    titleId: 'tit_IX',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'La Agencia Española de Protección de Datos (AEPD) o el Defensor del Pueblo investigan una presunta vulneración de derechos fundamentales (discriminación por razón de sexo o edad) derivada del uso de un sistema de IA de alto riesgo de selección de personal en España. ¿Qué facultad les otorga el artículo 77 del Reglamento de IA?',
    options: [
      'Tienen la facultad de solicitar y acceder a cualquier documentación creada o conservada con arreglo al Reglamento de IA en un lenguaje y formato accesibles cuando sea necesario para el ejercicio efectivo de su mandato, e informar a la autoridad de vigilancia del mercado (AESIA), pudiendo solicitarle que organice pruebas técnicas del sistema con su participación.',
      'No tienen ninguna competencia porque el Reglamento de IA deroga las leyes de derechos fundamentales.',
      'Solo pueden intervenir si el sistema está alojado fuera de Europa.',
      'Solo pueden pedir un folleto publicitario de la empresa.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 77 dota de poderes específicos a las autoridades u organismos públicos nacionales que supervisan o garantizan el respeto de los derechos fundamentales (incluidos los organismos de igualdad, protección de datos y defensores del pueblo): pueden exigir acceso a toda la documentación generada bajo el Reglamento de IA y requerir a la autoridad de vigilancia del mercado que realice pruebas técnicas sobre el sistema.',
    enterpriseLesson:
      'La documentación técnica (Anexo IV), los registros de eventos (Art. 12) y la FRIA (Art. 27) no solo los puede pedir la AESIA: también pueden exigirlos la AEPD, la Inspección de Trabajo o autoridades de igualdad en virtud del Art. 77.',
    citations: [
      makeCitation({
        id: 'art_77.p1',
        targetType: 'paragraph',
        articleId: 'art_77',
        paragraphId: 'art_77.p1',
        displayLabel: 'Art. 77.1 y 77.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las autoridades u organismos públicos nacionales que supervisen o garanticen el respeto de las obligaciones derivadas del Derecho de la Unión que protejan los derechos fundamentales, incluido el derecho a la no discriminación, en relación con la utilización de los sistemas de IA de alto riesgo a que se refiere el anexo III tendrán la facultad de solicitar y acceder a cualquier documentación creada o conservada con arreglo al presente Reglamento...',
      }),
    ],
  },
  {
    id: 'qz_182',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_79',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una autoridad de vigilancia del mercado constata que un sistema de IA presenta un riesgo para la salud, la seguridad o los derechos fundamentales de las personas y ordena al operador adoptar medidas correctoras, pero el proveedor se niega o las medidas resultan insuficientes. Según el artículo 79.2 y 79.5, ¿qué medidas coercitivas puede adoptar la autoridad nacional?',
    options: [
      'Solo enviar una carta de recomendación no vinculante.',
      'Adoptar todas las medidas provisionales adecuadas para prohibir o restringir la comercialización o puesta en servicio del sistema de IA en su mercado nacional, retirarlo del mercado o recuperarlo (recall) en un plazo razonable, informando sin demora a la Comisión y a los demás Estados miembros.',
      'Cerrar todas las empresas del mismo sector industrial.',
      'Ninguna sin un referéndum nacional.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 79 regula el procedimiento a escala nacional para los sistemas de IA que presentan un riesgo: si el operador no adopta medidas correctoras eficaces en el plazo prescrito, la autoridad de vigilancia del mercado adoptará todas las medidas provisionales adecuadas para prohibir o restringir la comercialización del sistema, retirarlo del mercado o recuperarlo (recall), activando el procedimiento de salvaguardia de la Unión (Art. 81).',
    enterpriseLesson:
      'Más allá de las multas económicas del Art. 99, el mayor riesgo operativo del Art. 79 es la orden de retirada inmediata del mercado ("market withdrawal / recall") y la paralización del servicio en toda la UE.',
    citations: [
      makeCitation({
        id: 'art_79.p5',
        targetType: 'paragraph',
        articleId: 'art_79',
        paragraphId: 'art_79.p5',
        displayLabel: 'Art. 79.2 y 79.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Si el operador de que se trate no adopta medidas correctoras adecuadas dentro del plazo a que se refiere el apartado 2, la autoridad de vigilancia del mercado adoptará todas las medidas provisionales adecuadas para prohibir o restringir la comercialización o puesta en servicio del sistema de IA en su mercado nacional, retirarlo de ese mercado o recuperarlo.',
      }),
    ],
  },
  {
    id: 'qz_183',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_80',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un proveedor registra en la base de datos de la UE (Art. 49.2) una autoevaluación con arreglo al artículo 6.3 afirmando que su sistema del Anexo III NO es de alto riesgo por ser meramente accesorio. Sin embargo, tras investigar conforme al artículo 80, la autoridad de vigilancia del mercado determina que el proveedor clasificó erróneamente el sistema para eludir la aplicación de los requisitos de alto riesgo. ¿Qué consecuencias establece el artículo 80.2 y 80.7?',
    options: [
      'La autoridad debe aceptar siempre la autoevaluación del proveedor sin poder discutirla.',
      'El proveedor solo debe cambiar el nombre del software.',
      'La autoridad exigirá al proveedor que adapte el sistema a los requisitos de alto riesgo y lo someta a evaluación de conformidad en un plazo determinado; y si detecta que clasificó erróneamente el sistema por motivos falsos con el fin de eludir la aplicación del Reglamento, el proveedor estará sujeto a las multas administrativas del artículo 99.',
      'El sistema pasa automáticamente a ser de código abierto.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 80 regula el procedimiento específico aplicable a los sistemas clasificados por el proveedor como no de alto riesgo en aplicación del artículo 6.3: la autoridad de vigilancia puede revisar la evaluación, obligar a cumplir el Capítulo III si fue mal clasificado y, en caso de falsedad o intento de elusión (Art. 80.7), imponer las multas del artículo 99.',
    enterpriseLesson:
      'Nunca utilices la excepción del Art. 6.3 como atajo fraudulento para esquivar el Anexo III: el artículo 80 faculta a la AESIA para auditar todas las declaraciones del Art. 49.2 y sancionar las clasificaciones abusivas.',
    citations: [
      makeCitation({
        id: 'art_80.p1',
        targetType: 'paragraph',
        articleId: 'art_80',
        paragraphId: 'art_80.p1',
        displayLabel: 'Art. 80.1, 80.2 y 80.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando una autoridad de vigilancia del mercado tenga motivos suficientes para considerar que un sistema de IA clasificado por el proveedor como no de alto riesgo en aplicación del artículo 6, apartado 3, es en realidad de alto riesgo, dicha autoridad llevará a cabo una evaluación del sistema de IA en cuestión...',
      }),
    ],
  },
  {
    id: 'qz_184',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_82',
    titleId: 'tit_IX',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Es posible que un sistema de IA de alto riesgo que CUMPLE formalmente todos los requisitos del Reglamento (documentación, marcado CE, declaración de conformidad) sea objeto de medidas restrictivas o de retirada por parte de una autoridad de vigilancia del mercado según el artículo 82?',
    options: [
      'No, una vez puesto el marcado CE es imposible que ninguna autoridad intervenga.',
      'Solo si el proveedor declara la quiebra.',
      'Solo pasados 25 años desde su comercialización.',
      'Sí: conforme al artículo 82 ("Sistemas de IA conformes que presentan un riesgo"), cuando una autoridad compruebe tras una evaluación que, aunque un sistema de IA de alto riesgo cumple el Reglamento, aun así presenta un riesgo para la salud o la seguridad de las personas, los derechos fundamentales u otros aspectos de protección del interés público, exigirá al operador que adopte todas las medidas adecuadas para que deje de presentar ese riesgo, lo retire del mercado o lo recupere.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 82 consagra la cláusula de seguridad material sobre los "sistemas de IA conformes que presentan un riesgo": el cumplimiento formal del Reglamento no blinda un sistema si en la práctica genera un riesgo imprevisto para la salud, la seguridad o los derechos fundamentales; la autoridad exigirá medidas mitigadoras o la retirada del mercado.',
    enterpriseLesson:
      'El cumplimiento del EU AI Act es sustantivo y continuo, no meramente burocrático: incluso con marcado CE en vigor, un daño emergente a derechos fundamentales en producción activa el Art. 82.',
    citations: [
      makeCitation({
        id: 'art_82.p1',
        targetType: 'paragraph',
        articleId: 'art_82',
        paragraphId: 'art_82.p1',
        displayLabel: 'Art. 82.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando, tras haber realizado una evaluación con arreglo al artículo 79, una autoridad de vigilancia del mercado de un Estado miembro compruebe que, aunque un sistema de IA de alto riesgo cumple el presente Reglamento, aun así presenta un riesgo para la salud o la seguridad de las personas, para los derechos fundamentales o para otros aspectos de la protección del interés público, exigirá al operador pertinente que adopte todas las medidas adecuadas...',
      }),
    ],
  },
  {
    id: 'qz_185',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_85',
    titleId: 'tit_IX',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una asociación de consumidores o un ciudadano particular considera que una empresa está utilizando un sistema de IA infringiendo las disposiciones del Reglamento (UE) 2024/1689. Según el artículo 85, ¿qué derecho procesal tiene?',
    options: [
      'Cualquier persona física o jurídica que tenga motivos para considerar que se ha producido una infracción de las disposiciones del Reglamento podrá presentar reclamaciones motivadas a la autoridad de vigilancia del mercado pertinente (como la AESIA en España), sin perjuicio de otros recursos administrativos o judiciales.',
      'Ninguno; solo los gobiernos pueden denunciar infracciones del Reglamento de IA.',
      'Solo puede reclamar si contrata previamente una auditoría privada de 50.000 euros.',
      'Solo puede reclamar ante el Tribunal Internacional de La Haya.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 85 (en el Capítulo IX, Sección 4 — Vías de recurso) reconoce a cualquier persona física o jurídica que tenga motivos para considerar que se ha infringido el Reglamento el derecho a presentar reclamaciones motivadas ante la autoridad de vigilancia del mercado pertinente, las cuales se tendrán en cuenta para realizar actividades de vigilancia del mercado.',
    enterpriseLesson:
      'Cualquier cliente, candidato descartado, sindicato o competidor (persona física o jurídica) tiene legitimación activa directa bajo el Art. 85 para presentar una reclamación ante la AESIA.',
    citations: [
      makeCitation({
        id: 'art_85.p1',
        targetType: 'paragraph',
        articleId: 'art_85',
        paragraphId: 'art_85.p1',
        displayLabel: 'Art. 85 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Sin perjuicio de otros recursos administrativos o judiciales, cualquier persona física o jurídica que tenga motivos para considerar que se ha producido una infracción de las disposiciones del presente Reglamento podrá presentar reclamaciones motivadas a la autoridad de vigilancia del mercado pertinente.',
      }),
    ],
  },
  {
    id: 'qz_186',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_86',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Respecto al derecho a una explicación de las decisiones individuales del artículo 86, ¿a qué sistemas se aplica y cómo se articula con otros derechos de explicación ya previstos en el Derecho de la Unión (como el artículo 22 del RGPD)?',
    options: [
      'Se aplica a cualquier calculadora de bolsillo y deroga el RGPD.',
      'Se aplica a las decisiones adoptadas por el responsable del despliegue sobre la base de los resultados de salida de un sistema de IA de alto riesgo enumerado en el Anexo III (con excepción del punto 2, infraestructuras críticas) que produzcan efectos jurídicos o afecten significativamente a la persona; y el artículo 86.3 precisa que solo se aplica en la medida en que dicho derecho no esté ya previsto en el Derecho de la Unión.',
      'Solo se aplica a los sistemas del Anexo I de juguetes y ascensores.',
      'Obliga al banco a entregar el código fuente en C++ a cada cliente.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 86.1 circunscribe el derecho a obtener explicaciones claras y significativas a las decisiones basadas en los resultados de sistemas de alto riesgo del Anexo III (excepto punto 2) que produzcan efectos jurídicos o afecten significativamente a la salud, seguridad o derechos fundamentales. El apartado 3 aclara su carácter complementario respecto a derechos ya existentes en el Derecho de la Unión (como los Arts. 13-15 y 22 del RGPD).',
    enterpriseLesson:
      'El Art. 86 cierra la brecha del Art. 22 RGPD: aunque en la decisión intervenga un humano (por lo que no sería una decisión "únicamente automatizada" del Art. 22 RGPD), si el humano decide basándose en el output de un sistema de alto riesgo del Anexo III, el afectado sigue teniendo derecho a explicación bajo el Art. 86.',
    citations: [
      makeCitation({
        id: 'art_86.p1',
        targetType: 'paragraph',
        articleId: 'art_86',
        paragraphId: 'art_86.p1',
        displayLabel: 'Art. 86.1 y 86.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          '1. Toda persona afectada que esté sujeta a una decisión que adopte el responsable del despliegue sobre la base de los resultados de salida de un sistema de IA de alto riesgo enumerado en el anexo III, con excepción de los sistemas enumerados en su punto 2... tendrá derecho a obtener del responsable del despliegue explicaciones claras y significativas... 3. El presente artículo solo se aplicará en la medida en que el derecho a que se refiere el apartado 1 no esté ya previsto en el Derecho de la Unión.',
      }),
    ],
  },
  {
    id: 'qz_187',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_87',
    titleId: 'tit_IX',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Un ingeniero de datos de una empresa descubre que su compañía está ocultando sesgos discriminatorios graves en un sistema de IA de alto riesgo y decide denunciar la infracción ante la AESIA. Según el artículo 87 del Reglamento (UE) 2024/1689, ¿qué marco legal protege a este denunciante frente a represalias laborales?',
    options: [
      'No tiene ninguna protección y puede ser despedido disciplinariamente.',
      'Solo está protegido si lleva más de 20 años de antigüedad en la empresa.',
      'La Directiva (UE) 2019/1937 (transpuesta en España por la Ley 2/2023 de protección del informante) se aplicará a la denuncia de infracciones del Reglamento de IA y a la protección de las personas que informen sobre dichas infracciones.',
      'Solo se protege a denunciantes del sector agrícola.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 87 extiende expresamente el ámbito de aplicación de la Directiva (UE) 2019/1937 (relativa a la protección de las personas que informen sobre infracciones del Derecho de la Unión —Whistleblowing—, transpuesta en España mediante la Ley 2/2023) a la denuncia de infracciones del Reglamento de IA.',
    enterpriseLesson:
      'Actualiza el Canal Ético / Sistema Interno de Información de tu empresa (Ley 2/2023) para incluir expresamente las infracciones del Reglamento (UE) 2024/1689 como materia protegida bajo el Art. 87.',
    citations: [
      makeCitation({
        id: 'art_87.p1',
        targetType: 'paragraph',
        articleId: 'art_87',
        paragraphId: 'art_87.p1',
        displayLabel: 'Art. 87 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Directiva (UE) 2019/1937 se aplicará a la denuncia de infracciones del presente Reglamento y a la protección de las personas que informen sobre dichas infracciones.',
      }),
    ],
  },
  {
    id: 'qz_188',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_93',
    titleId: 'tit_IX',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Dentro de las competencias de ejecución sobre proveedores de modelos GPAI (Artículos 88 a 94), ¿qué medidas puede exigir la Comisión a un proveedor de un modelo GPAI con arreglo al artículo 93 cuando sea necesario y adecuado?',
    options: [
      'Únicamente publicar una nota de disculpa en redes sociales.',
      'Expropiar las acciones de los socios fundadores.',
      'Prohibir el uso de ordenadores en toda la empresa.',
      'Exigir al proveedor que adopte las medidas adecuadas para cumplir las obligaciones de los artículos 53 y 54, que aplique medidas para mitigar el riesgo sistémico si la evaluación del artículo 92 suscita preocupación grave y fundamentada, o que restrinja la comercialización del modelo, lo retire o lo recupere (recall).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 93 faculta a la Comisión para requerir a los proveedores de modelos GPAI: (a) adoptar medidas adecuadas para cumplir los artículos 53 y 54; (b) aplicar medidas de mitigación cuando la evaluación del Art. 92 revele un riesgo sistémico grave y fundamentado; o (c) restringir la comercialización del modelo, retirarlo del mercado o recuperarlo.',
    enterpriseLesson:
      'La Comisión Europea (a través de la Oficina de IA) no solo puede multar a un proveedor GPAI (Art. 101), sino también ordenar la restricción o retirada del modelo del mercado europeo (Art. 93.1.c).',
    citations: [
      makeCitation({
        id: 'art_93.p1',
        targetType: 'paragraph',
        articleId: 'art_93',
        paragraphId: 'art_93.p1',
        displayLabel: 'Art. 93.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando sea necesario y adecuado para garantizar la aplicación adecuada del presente Reglamento, la Comisión podrá solicitar a los proveedores de modelos de IA de uso general que: a) adopten las medidas adecuadas para cumplir las obligaciones establecidas en los artículos 53 y 54; b) apliquen medidas de mitigación... c) restrinjan la comercialización del modelo, lo retiren o lo recuperen.',
      }),
    ],
  },
  {
    id: 'qz_189',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_99',
    titleId: 'tit_XII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según los apartados 4 y 5 del artículo 99, ¿cuáles son los tramos sancionadores segundo y tercero del Reglamento (UE) 2024/1689 (para infracciones distintas de las prohibiciones del artículo 5)?',
    options: [
      'Hasta 15.000.000 EUR o el 3 % del volumen de negocios mundial por el incumplimiento de las obligaciones de proveedores, representantes, importadores, distribuidores, responsables del despliegue, organismos notificados o transparencia del Art. 50 (Art. 99.4); y hasta 7.500.000 EUR o el 1 % por presentar información inexacta, incompleta o engañosa a los organismos notificados o autoridades nacionales en respuesta a una solicitud (Art. 99.5).',
      'Hasta 100.000 EUR por cualquier infracción.',
      'Hasta 50.000.000 EUR por errores tipográficos en el manual.',
      'Solo existen amonestaciones verbales sin cuantía económica.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 99 articula tres escalones de multas: (1) 35 M€ o 7 % por infringir el Art. 5 (Art. 99.3); (2) 15 M€ o 3 % por incumplir las obligaciones de operadores (Arts. 16, 22, 23, 24, 26), organismos notificados (Arts. 31, 33, 34) o transparencia (Art. 50) (Art. 99.4); y (3) 7,5 M€ o 1 % por suministrar información inexacta, incompleta o engañosa a organismos notificados o autoridades nacionales en respuesta a una solicitud (Art. 99.5).',
    enterpriseLesson:
      'Ten en cuenta que mentir u ocultar datos en un requerimiento de información de la AESIA o de un organismo notificado constituye una infracción autónoma sancionada con hasta 7,5 M€ o el 1 % de la facturación mundial (Art. 99.5).',
    citations: [
      makeCitation({
        id: 'art_99.p4',
        targetType: 'paragraph',
        articleId: 'art_99',
        paragraphId: 'art_99.p4',
        displayLabel: 'Art. 99.4 y 99.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          '4. El incumplimiento de cualquier disposición relacionada con los operadores o los organismos notificados del presente Reglamento, distinta de las establecidas en el artículo 5, estará sujeto a multas administrativas de hasta 15 000 000 EUR o, si el infractor es una empresa, de hasta el 3 %... 5. La presentación de información inexacta, incompleta o engañosa... hasta 7 500 000 EUR o... el 1 %...',
      }),
    ],
  },
  {
    id: 'qz_190',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_99',
    titleId: 'tit_XII',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'En relación con las administraciones y organismos públicos nacionales (por ejemplo, un ayuntamiento o una consejería autonómica), ¿qué dispone el artículo 99.8 del Reglamento (UE) 2024/1689 sobre la imposición de multas administrativas?',
    options: [
      'Las administraciones públicas nunca están obligadas a cumplir el Reglamento de IA.',
      'Cada Estado miembro establecerá normas sobre si se pueden imponer multas administrativas a las autoridades y organismos públicos establecidos en dicho Estado miembro y en qué medida, sin perjuicio de los poderes correctivos de las autoridades de vigilancia.',
      'Solo el Tribunal Penal Internacional puede multar a un ayuntamiento.',
      'Los funcionarios responden siempre con su vivienda habitual.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Al igual que el artículo 83.7 del RGPD, el artículo 99.8 del Reglamento de IA permite que cada Estado miembro regule en su legislación nacional si se imponen multas pecuniarias a las autoridades y organismos públicos establecidos en su territorio y en qué medida (mientras que los poderes correctivos de prohibición o retirada del servicio aplican siempre).',
    enterpriseLesson:
      'Aunque en España el régimen sancionador pecuniario a entes públicos tiene modulaciones legales (Art. 99.8), las medidas correctivas (suspensión inmediata del sistema de IA público no conforme y exigencia de responsabilidades) se aplican con total rigor.',
    citations: [
      makeCitation({
        id: 'art_99.p8',
        targetType: 'paragraph',
        articleId: 'art_99',
        paragraphId: 'art_99.p8',
        displayLabel: 'Art. 99.8 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cada Estado miembro establecerá normas sobre si se pueden imponer multas administrativas a las autoridades y organismos públicos establecidos en dicho Estado miembro y en qué medida.',
      }),
    ],
  },
  {
    id: 'qz_191',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_100',
    titleId: 'tit_XII',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Qué autoridad supervisa y qué multas administrativas puede imponer a las instituciones, órganos y organismos de la propia Unión Europea cuando infrinjan el Reglamento de IA, según el artículo 100?',
    options: [
      'Las instituciones de la UE son inmunes y nadie las supervisa.',
      'Las supervisa el Ayuntamiento de Bruselas con multas de 100 euros.',
      'El Supervisor Europeo de Protección de Datos (SEPD) puede imponerles multas administrativas de hasta 1.500.000 EUR por el incumplimiento de las prohibiciones del artículo 5, y de hasta 500.000 EUR por el incumplimiento de cualquier otro requisito u obligación del Reglamento.',
      'El Banco Mundial puede imponerles multas del 20 % del presupuesto comunitario.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 100 designa al Supervisor Europeo de Protección de Datos (SEPD) como autoridad competente para supervisar a las instituciones, órganos y organismos de la Unión, facultándole para imponer multas administrativas de hasta 1.500.000 EUR por infracción del artículo 5 (Art. 100.2) y de hasta 500.000 EUR por otras infracciones del Reglamento (Art. 100.3).',
    enterpriseLesson:
      'Cuando licites o proveas sistemas de IA para agencias o instituciones de la Unión Europea, recuerda que su autoridad de vigilancia y registro es el SEPD (Art. 70.9 y Art. 100).',
    citations: [
      makeCitation({
        id: 'art_100.p2',
        targetType: 'paragraph',
        articleId: 'art_100',
        paragraphId: 'art_100.p2',
        displayLabel: 'Art. 100.1, 100.2 y 100.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. El incumplimiento de la prohibición de las prácticas de IA a que se refiere el artículo 5 estará sujeto a multas administrativas de hasta 1 500 000 EUR. 3. El incumplimiento por el sistema de IA de cualquier requisito u obligación del presente Reglamento, distinto de los establecidos en el artículo 5, estará sujeto a multas administrativas de hasta 500 000 EUR.',
      }),
    ],
  },
  {
    id: 'qz_192',
    topicId: 'governance_sanctions',
    topicLabel: 'Innovación, Gobernanza, Vigilancia y Sanciones (Arts. 57-101)',
    articleId: 'art_101',
    titleId: 'tit_XII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué cuantía máxima alcanzan las multas que la Comisión Europea puede imponer a los proveedores de modelos de IA de uso general (GPAI) con arreglo al artículo 101.1, y ante qué órgano jurisdiccional están sujetas a control de plena jurisdicción?',
    options: [
      'Hasta 50.000 EUR, revisables por un árbitro privado.',
      'Hasta 100.000.000 EUR, sin posibilidad de recurso judicial.',
      'Hasta el 10 % de los beneficios netos, revisables por tribunales nacionales.',
      'Multas de hasta el 3 % de su volumen de negocios mundial total en el ejercicio financiero anterior o 15.000.000 EUR (si esta cuantía fuera superior), cuando de forma intencionada o por negligencia infrinjan las disposiciones pertinentes o no atiendan requerimientos/medidas de los artículos 91 a 93; estando las decisiones sujetas al control jurisdiccional pleno del Tribunal de Justicia de la Unión Europea (Art. 101.5).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 101.1 faculta a la Comisión para imponer a los proveedores de modelos GPAI multas no superiores al 3 % de su volumen de negocios mundial total o 15.000.000 EUR (el importe superior) por infringir el Reglamento, suministrar información inexacta o incumplir medidas de los artículos 91 a 93. Conforme al Art. 101.5, el TJUE goza de competencia jurisdiccional plena para anular, reducir o incrementar la multa.',
    enterpriseLesson:
      'Desde el 2 de agosto de 2026 (fecha en que entró en aplicación el Art. 101 según el Art. 113.b), la Comisión Europea puede imponer directamente multas de hasta 15 M€ / 3 % a los proveedores de modelos GPAI.',
    citations: [
      makeCitation({
        id: 'art_101.p1',
        targetType: 'paragraph',
        articleId: 'art_101',
        paragraphId: 'art_101.p1',
        displayLabel: 'Art. 101.1 y 101.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Comisión podrá imponer a los proveedores de modelos de IA de uso general multas no superiores al 3 % de su volumen de negocios mundial total en el ejercicio financiero anterior o a 15 000 000 EUR, si esta cuantía fuera superior, cuando considere que el proveedor, de forma intencionada o por negligencia: a) ha infringido las disposiciones pertinentes del presente Reglamento...',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE F. PLAZOS Y RÉGIMEN TRANSITORIO (topicId: 'deadlines') — 10 preguntas (qz_193 a qz_202)
  // =========================================================================
  {
    id: 'qz_193',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_111',
    titleId: 'tit_XIII',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 111.1, ¿cuál es la fecha límite máxima para que los sistemas de IA que sean componentes de los sistemas informáticos de gran magnitud establecidos por los actos jurídicos enumerados en el Anexo X (como el Sistema de Información de Schengen SIS II, VIS, Eurodac, EES o ETIAS) y hayan sido introducidos en el mercado o puestos en servicio antes del 2 de agosto de 2027 cumplan el Reglamento?',
    options: [
      'A más tardar el 31 de diciembre de 2030.',
      'El 2 de febrero de 2025.',
      'El 1 de enero de 2026.',
      'No tienen que cumplir nunca el Reglamento.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 111.1 establece que los sistemas de IA que sean componentes de los sistemas informáticos de gran magnitud establecidos por los actos jurídicos enumerados en el Anexo X (espacio de libertad, seguridad y justicia: Schengen, VIS, Eurodac, EES, ETIAS, ECRIS-TCN) que se hayan introducido en el mercado o puesto en servicio antes del 2 de agosto de 2027 se pondrán en conformidad con el Reglamento a más tardar el 31 de diciembre de 2030.',
    enterpriseLesson:
      'El hito del 31 de diciembre de 2030 (Art. 111.1) es el último gran horizonte transitorio del Reglamento y aplica específicamente a contratistas y agencias de sistemas IT de gran magnitud de la UE del Anexo X.',
    citations: [
      makeCitation({
        id: 'art_111.p1',
        targetType: 'paragraph',
        articleId: 'art_111',
        paragraphId: 'art_111.p1',
        displayLabel: 'Art. 111.1 y Anexo X · Reglamento (UE) 2024/1689',
        exactQuote:
          'Sin perjuicio de la aplicación del artículo 5 a que se refiere el artículo 113, párrafo tercero, letra a), los sistemas de IA que sean componentes de los sistemas informáticos de gran magnitud establecidos por los actos jurídicos enumerados en el anexo X que se hayan introducido en el mercado o puesto en servicio antes del 2 de agosto de 2027 se pondrán en conformidad con el presente Reglamento a más tardar el 31 de diciembre de 2030.',
      }),
    ],
  },
  {
    id: 'qz_194',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_111',
    titleId: 'tit_XIII',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un ministerio o ayuntamiento español puso en servicio en enero de 2026 (antes del 2 de agosto de 2026) un sistema de IA de alto riesgo para evaluar el acceso a prestaciones públicas (Anexo III punto 5.a) y decide mantenerlo en funcionamiento sin realizar ningún cambio significativo en su diseño. Según el artículo 111.2 in fine, ¿cuál es la fecha límite improrrogable en que los proveedores y responsables del despliegue de dicho sistema destinado a ser utilizado por autoridades públicas deben adoptar las medidas necesarias para cumplir el Reglamento?',
    options: [
      'Están exentos para siempre mientras no modifiquen el código.',
      'A más tardar el 2 de agosto de 2030 (a diferencia de los sistemas privados previos a agosto de 2026, que solo quedan sujetos si sufren cambios significativos en su diseño).',
      'El 2 de febrero de 2025.',
      'El 31 de diciembre de 2040.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 111.2 introduce una distinción fundamental entre sector privado y sector público para sistemas legacy previos al 2 de agosto de 2026: mientras que en general solo quedan sujetos al Reglamento si sufren cambios significativos en su diseño a partir de esa fecha, "no obstante, los proveedores y responsables del despliegue de sistemas de IA de alto riesgo destinados a ser utilizados por autoridades públicas adoptarán las medidas necesarias para cumplir los requisitos y obligaciones del presente Reglamento a más tardar el 2 de agosto de 2030".',
    enterpriseLesson:
      'Si eres proveedor tecnológico del sector público con contratos en vigor anteriores a agosto de 2026, tus sistemas de alto riesgo tienen fecha de caducidad regulatoria absoluta el 2 de agosto de 2030 aunque no se modifique su diseño (Art. 111.2).',
    citations: [
      makeCitation({
        id: 'art_111.p2',
        targetType: 'paragraph',
        articleId: 'art_111',
        paragraphId: 'art_111.p2',
        displayLabel: 'Art. 111.2 in fine · Reglamento (UE) 2024/1689',
        exactQuote:
          'No obstante, los proveedores y responsables del despliegue de sistemas de IA de alto riesgo destinados a ser utilizados por autoridades públicas adoptarán las medidas necesarias para cumplir los requisitos y obligaciones del presente Reglamento a más tardar el 2 de agosto de 2030.',
      }),
    ],
  },
  {
    id: 'qz_195',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_101',
    titleId: 'tit_XII',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un proveedor de un modelo GPAI introdujo su modelo en el mercado en marzo de 2025 (antes del 2 de agosto de 2025). Sabemos por el artículo 111.3 que dispone hasta el 2 de agosto de 2027 para cumplir las obligaciones sustantivas del Reglamento. Y respecto a las multas de la Comisión del artículo 101, ¿por qué los artículos 101.6 y 113.b retrasaron el inicio de la potestad sancionadora del artículo 101 hasta el 2 de agosto de 2026?',
    options: [
      'Por un error de imprenta en el Diario Oficial.',
      'Porque el artículo 101 solo se aplica en años pares.',
      'Para conceder un margen de adaptación de un año entre el inicio de las obligaciones de los modelos GPAI (2 de agosto de 2025) y la aplicabilidad del régimen de multas de la Comisión sobre proveedores GPAI (2 de agosto de 2026), respetando además para los modelos previos a agosto de 2025 su plazo transitorio del artículo 111.3.',
      'Porque la Oficina de IA no existía antes de 2028.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 113, párrafo tercero, letra b) dispuso que el Capítulo V (GPAI) y el Capítulo XII (Sanciones) entraran en aplicación el 2 de agosto de 2025 "a excepción del artículo 101", el cual entró en aplicación en la fecha general del 2 de agosto de 2026 (24 meses), otorgando así un año de rodaje con los códigos de buenas prácticas antes de activar las multas de la Comisión.',
    enterpriseLesson:
      'Ten presente la sincronización temporal GPAI: obligaciones vigentes desde el 2 de agosto de 2025, multas del Art. 101 aplicables desde el 2 de agosto de 2026 para modelos posteriores a ago-2025, y fin del periodo transitorio para modelos legacy el 2 de agosto de 2027 (Art. 111.3).',
    citations: [
      makeCitation({
        id: 'art_113.p5',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p5',
        displayLabel: 'Art. 113 párrafo 3(b) y Art. 111.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'el capítulo III, sección 4, el capítulo V, el capítulo VII y el capítulo XII y el artículo 78 serán aplicables a partir del 2 de agosto de 2025, a excepción del artículo 101;',
      }),
    ],
  },
  {
    id: 'qz_196',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_112',
    titleId: 'tit_XIII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 112.1 y 112.2, ¿con qué periodicidad debe la Comisión Europea evaluar la necesidad de modificar la lista de prácticas prohibidas del artículo 5 y los ámbitos de alto riesgo del Anexo III?',
    options: [
      'Una vez cada 25 años.',
      'Solo una única vez en el año 2035.',
      'Nunca; el artículo 112 prohíbe evaluar el Reglamento.',
      'Una vez al año tras la entrada en vigor del Reglamento (presentando los resultados de dicha evaluación al Parlamento Europeo y al Consejo), además del informe general de evaluación y revisión del Reglamento a más tardar el 2 de agosto de 2029 y cada cuatro años a partir de entonces.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 112.1 establece una cláusula de revisión ágil: la Comisión evaluará la necesidad de modificar la lista que figura en el Anexo III y la lista de prácticas de IA prohibidas establecida en el artículo 5 una vez al año tras la entrada en vigor del Reglamento, además del informe cuatrienal de evaluación general que arranca el 2 de agosto de 2029 (Art. 112.2).',
    enterpriseLesson:
      'Programa una revisión anual de cumplimiento normativo en tu comité de gobernanza de IA alineada con el ciclo anual de evaluación de la Comisión del Art. 112.1.',
    citations: [
      makeCitation({
        id: 'art_112.p1',
        targetType: 'paragraph',
        articleId: 'art_112',
        paragraphId: 'art_112.p1',
        displayLabel: 'Art. 112.1 y 112.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Comisión evaluará la necesidad de modificar la lista que figura en el anexo III y la lista de prácticas de IA prohibidas establecida en el artículo 5 una vez al año tras la entrada en vigor del presente Reglamento y hasta el final del período de delegación de poderes establecido en el artículo 97.',
      }),
    ],
  },
  {
    id: 'qz_197',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_102',
    titleId: 'tit_XIII',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Qué finalidad cumplen los artículos 102 a 110 del Título XIII del Reglamento (UE) 2024/1689 al modificar diversos reglamentos y directivas de la Unión sobre seguridad de productos (aviación civil, vehículos de motor, equipamiento marino, ferrocarriles, maquinaria, etc.)?',
    options: [
      'Garantizar que, cuando la Comisión adopte actos delegados o de ejecución en el marco de la legislación de armonización de la Unión enumerada en el Anexo I, Sección B (como aviación civil Reg. 2018/1139 o vehículos Reg. 2019/2144), se tengan en cuenta los requisitos obligatorios para los sistemas de IA de alto riesgo establecidos en el Capítulo III, Sección 2 del Reglamento de IA.',
      'Derogar todas las normas de seguridad aérea y automovilística de la Unión Europea.',
      'Prohibir el uso de software en aviones y trenes.',
      'Transferir las competencias de aviación al Ministerio de Agricultura.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Los artículos 102 a 110 modifican los actos legislativos de la Sección B del Anexo I (Reglamentos 300/2008, 167/2013, 168/2013, Directiva 2014/90/UE, Directiva 2016/797, Reglamento 2018/858, Reglamento 2018/1139 y Reglamento 2019/2144) para asegurar que los requisitos técnicos de alto riesgo del Capítulo III Sección 2 del Reglamento de IA se integren directamente dentro de las normas sectoriales de homologación de aviación, automoción y transporte ferroviario/marítimo (en consonancia con el Art. 2.2).',
    enterpriseLesson:
      'En los sectores del Anexo I Sección B (aviación civil, automoción, ferrocarriles, marino), los requisitos de alto riesgo de IA no se auditan por separado, sino integrados en tus reglamentos de homologación sectorial gracias a las reformas de los Arts. 102–110.',
    citations: [
      makeCitation({
        id: 'art_102.p1',
        targetType: 'paragraph',
        articleId: 'art_102',
        paragraphId: 'art_102.p1',
        displayLabel: 'Arts. 102 a 110 y Art. 2.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Al adoptar actos delegados o de ejecución en relación con sistemas de IA que sean componentes de seguridad en el sentido del Reglamento (UE) 2024/1689, se tendrán en cuenta los requisitos establecidos en el capítulo III, sección 2, de dicho Reglamento.',
      }),
    ],
  },
  {
    id: 'qz_198',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_113',
    titleId: 'tit_XIII',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cuándo se publicó el Reglamento (UE) 2024/1689 en el Diario Oficial de la Unión Europea (DOUE-L-2024-81079) y en qué fecha exacta entró en vigor conforme al artículo 113 párrafo primero?',
    options: [
      'Se publicó el 1 de enero de 2024 y entró en vigor el mismo día.',
      'Se publicó en el DOUE el 12 de julio de 2024 y entró en vigor el 1 de agosto de 2024 (a los veinte días de su publicación en el Diario Oficial de la Unión Europea).',
      'Se publicó en diciembre de 2025 y entró en vigor en 2026.',
      'Aún no se ha publicado en el DOUE.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El Reglamento (UE) 2024/1689 fue firmado el 13 de junio de 2024, publicado en el Diario Oficial de la Unión Europea (Serie L, 2024/1689, referencia BOE DOUE-L-2024-81079) el 12 de julio de 2024, y entró en vigor a los veinte días de su publicación, esto es, el 1 de agosto de 2024 (Art. 113 párrafo primero).',
    enterpriseLesson:
      'Todos los plazos de 6, 12, 24 y 36 meses del Reglamento se computan a partir de la fecha de entrada en vigor del 1 de agosto de 2024 (dando lugar a los hitos del 2 de febrero de 2025, 2 de agosto de 2025, 2 de agosto de 2026 y 2 de agosto de 2027).',
    citations: [
      makeCitation({
        id: 'art_113.p1',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p1',
        displayLabel: 'Art. 113 párrafo 1 · Reglamento (UE) 2024/1689 (DOUE-L-2024-81079)',
        exactQuote:
          'El presente Reglamento entrará en vigor a los veinte días de su publicación en el Diario Oficial de la Unión Europea.',
      }),
    ],
  },
  {
    id: 'qz_199',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_113',
    titleId: 'tit_XIII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué sucedió el 2 de agosto de 2026 según el artículo 113 párrafo segundo del Reglamento (UE) 2024/1689?',
    options: [
      'Solo entraron en vigor las definiciones del artículo 3.',
      'Derogó el Reglamento General de Protección de Datos.',
      'Comenzó la aplicación general del Reglamento (24 meses tras su entrada en vigor), haciéndose exigibles las obligaciones para los sistemas de IA de alto riesgo del Anexo III (Capítulo III), las obligaciones de transparencia del artículo 50 (Capítulo IV), los sandboxes nacionales obligatorios (Art. 57), la vigilancia poscomercialización y el artículo 101.',
      'Finalizó la vigencia del Reglamento.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 113 párrafo segundo establece la fecha general de aplicación del Reglamento: "Será aplicable a partir del 2 de agosto de 2026". En esa fecha entraron en aplicación todas las disposiciones no adelantadas a 2025 ni diferidas a 2027, incluyendo los sistemas de alto riesgo del Anexo III, el artículo 50 de transparencia específica, los espacios controlados de pruebas y el artículo 101.',
    enterpriseLesson:
      'Desde el 2 de agosto de 2026, el grueso del Reglamento (Anexo III, FRIA Art. 27, Transparencia Art. 50, Registro Art. 49 y Sanciones GPAI Art. 101) es plenamente exigible en toda la Unión Europea.',
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
    id: 'qz_200',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_111',
    titleId: 'tit_XIII',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un fabricante de equipos médicos de diagnóstico por imagen (producto regulado bajo el Reglamento MDR 2017/745 del Anexo I Sección A) comercializó en 2025 un escáner con un sistema de IA integrado (alto riesgo bajo el Art. 6.1). Teniendo en cuenta que el artículo 6.1 aplica a partir del 2 de agosto de 2027 (Art. 113.c), ¿qué pasa si el fabricante introduce un "cambio significativo en el diseño" de su algoritmo de IA en noviembre de 2026 vs. en septiembre de 2027?',
    options: [
      'Nunca le aplica el Reglamento porque es un dispositivo médico.',
      'Tenía que cumplir el 2 de febrero de 2025.',
      'Solo le aplica si vende más de 100.000 unidades.',
      'Para los sistemas de alto riesgo del artículo 6.1 (Anexo I), sus obligaciones son aplicables a partir del 2 de agosto de 2027 conforme al artículo 113 letra c), quedando sujetos al Reglamento los sistemas puestos en el mercado antes si sufren cambios significativos en su diseño tras la fecha de aplicabilidad correspondiente (sin perjuicio del Art. 5, aplicable desde febrero de 2025).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 113 letra c) difiere al 2 de agosto de 2027 la aplicación del artículo 6.1 y sus obligaciones correspondientes (sistemas de alto riesgo cubiertos por la legislación de armonización del Anexo I, como productos sanitarios MDR/IVDR o maquinaria), permitiendo sincronizar las auditorías de los organismos notificados sectoriales.',
    enterpriseLesson:
      'Si fabricas dispositivos médicos con IA (MDR/IVDR, Anexo I), tu fecha límite de plena conformidad con el Art. 6.1 es el 2 de agosto de 2027, coordinando tu organismo notificado sanitario con los requisitos del Capítulo III Sección 2.',
    citations: [
      makeCitation({
        id: 'art_113.p6',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p6',
        displayLabel: 'Art. 113 párrafo 3(c) y Art. 111.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'el artículo 6, apartado 1, y las obligaciones correspondientes del presente Reglamento serán aplicables a partir del 2 de agosto de 2027.',
      }),
    ],
  },
  {
    id: 'qz_201',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_112',
    titleId: 'tit_XIII',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 112.7, ¿en qué fecha debía la Comisión evaluar la necesidad de modificar la lista de sistemas de IA de alto riesgo del Anexo III y presentar por primera vez el informe sobre el funcionamiento de la Oficina de IA y el desarrollo de códigos de conducta sobre sostenibilidad energética?',
    options: [
      'Dentro del ciclo de evaluación y revisión periódica del artículo 112, en el que la Comisión evalúa anualmente la lista del Anexo III y el artículo 5 (Art. 112.1) y a más tardar el 2 de agosto de 2028 evalúa el funcionamiento de la Oficina de IA y los avances en normalización sobre consumo de energía y recursos de los sistemas de IA (Art. 112.6 y 112.7).',
      'En el año 1995.',
      'En el año 2050.',
      'El artículo 112 no menciona el consumo de energía.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 112 escalona los informes de revisión de la Comisión: evaluación anual del Art. 5 y Anexo III (112.1); evaluación para el 2 de agosto de 2028 sobre el funcionamiento de la Oficina de IA y los avances en normas de diseño energéticamente eficiente y medición de consumo de recursos (112.6 y 112.7); e informe general de revisión del Reglamento para el 2 de agosto de 2029 y cada cuatro años después (112.2).',
    enterpriseLesson:
      'El hito del 2 de agosto de 2028 (Art. 112.7) prepara el terreno para posibles obligaciones reforzadas de reporte medioambiental y eficiencia energética en sistemas de IA.',
    citations: [
      makeCitation({
        id: 'art_112.p6',
        targetType: 'paragraph',
        articleId: 'art_112',
        paragraphId: 'art_112.p6',
        displayLabel: 'Art. 112.1, 112.6 y 112.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'A más tardar el 2 de agosto de 2028, la Comisión evaluará el funcionamiento de la Oficina de IA, determinará si se le han atribuido competencias y recursos suficientes para cumplir sus tareas y si sería conveniente e indispensable mejorar dicho mecanismo...',
      }),
    ],
  },
  {
    id: 'qz_202',
    topicId: 'deadlines',
    topicLabel: 'Plazos y Régimen Transitorio (Arts. 102-113)',
    articleId: 'art_113',
    titleId: 'tit_XIII',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Cuál es la secuencia cronológica exacta y completa de los 6 grandes hitos de entrada en vigor y aplicación del Reglamento (UE) 2024/1689?',
    options: [
      'Todos los artículos entraron en aplicación el 1 de enero de 2025.',
      '(1) 1 de agosto de 2024: entrada en vigor; (2) 2 de febrero de 2025: Capítulos I (Art. 4 alfabetización) y II (Art. 5 prohibiciones); (3) 2 de agosto de 2025: Organismos notificados, GPAI (Cap. V), Gobernanza (Cap. VII) y Sanciones salvo Art. 101; (4) 2 de agosto de 2026: Aplicación general (Alto riesgo Anexo III, Art. 50 transparencia, Sandboxes Art. 57, Art. 101); (5) 2 de agosto de 2027: Alto riesgo del Anexo I (Art. 6.1) y fin del transitorio GPAI legacy (Art. 111.3); (6) 2 de agosto de 2030 / 31 de diciembre de 2030: Sistemas legacy de autoridades públicas (111.2) y sistemas de gran magnitud del Anexo X (111.1).',
      'Primero aplica el Anexo I en 2024 y por último el artículo 5 en 2030.',
      'Solo existen dos fechas: 2024 y 2030.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Los artículos 111 y 113 configuran exactamente este calendario en 6 etapas escalonadas entre el 1 de agosto de 2024 y el 31 de diciembre de 2030.',
    enterpriseLesson:
      'Usa este mapa de 6 hitos (ago-24, feb-25, ago-25, ago-26, ago-27, ago/dic-30) como hoja de ruta maestra para las auditorías internas de cumplimiento de tu organización.',
    citations: [
      makeCitation({
        id: 'art_113.p1',
        targetType: 'paragraph',
        articleId: 'art_113',
        paragraphId: 'art_113.p1',
        displayLabel: 'Arts. 111 y 113 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento entrará en vigor a los veinte días de su publicación en el Diario Oficial de la Unión Europea. Será aplicable a partir del 2 de agosto de 2026. No obstante: a) los capítulos I y II serán aplicables a partir del 2 de febrero de 2025; b) el capítulo III, sección 4, el capítulo V, el capítulo VII y el capítulo XII y el artículo 78 serán aplicables a partir del 2 de agosto de 2025, a excepción del artículo 101; c) el artículo 6, apartado 1... a partir del 2 de agosto de 2027.',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE G. CASOS PRÁCTICOS SECTORIALES Y MULTI-ROL (topicId: 'enterprise_cases') — 20 preguntas (qz_203 a qz_222)
  // =========================================================================
  {
    id: 'qz_203',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una compañía aseguradora en España desarrolla internamente dos modelos de IA para evaluación de riesgos y fijación de primas (tarificación): el Modelo A calcula primas y decide la aceptación de pólizas en SEGUROS DE VIDA Y DE SALUD; el Modelo B calcula primas en SEGUROS DE AUTOMÓVILES, HOGAR Y MULTIRRIESGO INDUSTRIAL. Según el Anexo III punto 5(c) y los artículos 6.2, 27 y 86, ¿cuál es la diferencia regulatoria exacta entre ambos modelos?',
    options: [
      'Ambos son sistemas de alto riesgo del Anexo III porque cualquier cálculo actuarial en seguros es de alto riesgo.',
      'Ninguno es de alto riesgo porque el sector asegurador está excluido del Reglamento de IA.',
      'El Modelo A (evaluación de riesgos y fijación de precios para personas físicas en seguros de vida y de salud) es un sistema de IA de ALTO RIESGO del Anexo III punto 5(c) —exigiendo a la aseguradora cumplir obligaciones de proveedor (Art. 16), desplegador (Art. 26), evaluación de impacto en derechos fundamentales FRIA (Art. 27) y derecho a explicación (Art. 86)—; mientras que el Modelo B (autos, hogar y multirriesgo) queda FUERA del Anexo III (riesgo mínimo, sujeto a alfabetización Art. 4 y RGPD).',
      'El Modelo B es de alto riesgo y el Modelo A es de riesgo mínimo.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Anexo III punto 5(c) circunscribe taxativamente la clasificación de alto riesgo en el sector asegurador a "los sistemas de IA destinados a ser utilizados para la evaluación de riesgos y la fijación de precios en relación con las personas físicas en el caso de los seguros de vida y de salud". Los seguros de daños patrimoniales o responsabilidad civil (autos, hogar, comercio, industria) fueron excluidos deliberadamente del Anexo III (Considerando 58), porque no comprometen el acceso vital a la salud o subsistencia personal del mismo modo que vida y salud.',
    enterpriseLesson:
      'En una aseguradora multirramo, segrega la gobernanza técnica de tus modelos actuariales: los motores de suscripción y tarificación de Vida y Salud requieren conformidad completa de Alto Riesgo + FRIA (Art. 27), mientras que los de Autos y Hogar operan bajo régimen de riesgo mínimo.',
    citations: [
      makeCitation({
        id: 'anx_III.p1',
        targetType: 'annex',
        articleId: 'anx_III',
        displayLabel: 'Anexo III punto 5(c), Art. 27 y Art. 86 · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) los sistemas de IA destinados a ser utilizados para la evaluación de riesgos y la fijación de precios en relación con las personas físicas en el caso de los seguros de vida y de salud.',
      }),
    ],
  },
  {
    id: 'qz_204',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'El departamento de siniestros de una aseguradora de automóviles implanta un sistema de IA que lee informes médicos de urgencias, historias clínicas, pruebas diagnósticas de rehabilitación y partes de lesiones de víctimas de accidentes de circulación para calcular automáticamente los puntos de secuelas y la oferta motivada de indemnización conforme al Baremo de Tráfico (Ley 35/2015). Aunque la liquidación de siniestros de autos no figura en el Anexo III.5(c), ¿qué obligaciones legales estrictas se activan por el artículo 2.7 del Reglamento (UE) 2024/1689 y el RGPD al procesar datos médicos?',
    options: [
      'Ninguna; al ser un seguro de automóviles se pueden procesar informes médicos con IA en la nube sin base legal ni intervención médica humana.',
      'El sistema queda prohibido por el artículo 5.1(a).',
      'Solo hay que enviar el Baremo al Ministerio de Transportes.',
      'En virtud del artículo 2.7 del Reglamento de IA, se aplica íntegramente el RGPD (Reglamento UE 2016/679) y la LOPDGDD: al tratar categorías especiales de datos personales ("datos relativos a la salud", Art. 9 RGPD), es obligatoria una Evaluación de Impacto en Protección de Datos (EIPD, Art. 35 RGPD), base habilitante expresa del Art. 9.2 RGPD y Ley de Contrato de Seguro, y la prohibición de decisiones automatizadas basadas en categorías especiales del Art. 22.4 RGPD sin intervención y validación real de un perito médico humano.',
    ],
    correctOptionIndex: 3,
    explanation:
      'Este es un caso crítico en el sector asegurador español: aunque la valoración de siniestros del Baremo de autos (Ley 35/2015) no es suscripción/tarificación de vida o salud (Anexo III.5.c), sí procesa masivamente datos de salud (Art. 9 RGPD). El artículo 2.7 del Reglamento de IA deja intacto el RGPD: tratar informes clínicos de lesionados mediante IA exige EIPD previa (Art. 35 RGPD), medidas reforzadas de confidencialidad médica, alfabetización en IA de los tramitadores/peritos (Art. 4 EU AI Act) y supervisión humana efectiva (Art. 22.4 RGPD y Art. 37 LRCSCVM) para que la oferta motivada esté avalada por informe médico pericial.',
    enterpriseLesson:
      'En tramitación de lesionados y Baremo de tráfico con IA: que un sistema no esté en el Anexo III del EU AI Act NUNCA significa "barra libre" con datos médicos; el Art. 2.7 activa todo el peso de los Arts. 9, 22.4 y 35 del RGPD, exigiendo siempre validación por perito médico humano.',
    citations: [
      makeCitation({
        id: 'art_2.p7',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p7',
        displayLabel: 'Art. 2.7 · Reglamento (UE) 2024/1689 y Arts. 9, 22.4 y 35 RGPD',
        exactQuote:
          'El Derecho de la Unión en materia de protección de datos personales, la privacidad y la confidencialidad de las comunicaciones se aplicará a los datos personales tratados en relación con los derechos y obligaciones establecidos en el presente Reglamento. El presente Reglamento no afectará a los Reglamentos (UE) 2016/679 o (UE) 2018/1725...',
      }),
    ],
  },
  {
    id: 'qz_205',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_10',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una aseguradora de salud que desarrolla su propio sistema de IA de alto riesgo (Anexo III.5.c) necesita tratar excepcionalmente historiales médicos reales (datos relativos a la salud del Art. 9.1 RGPD) con el único fin de detectar y corregir sesgos discriminatorios contra pacientes con enfermedades crónicas. Según el artículo 10.5 del Reglamento (UE) 2024/1689, ¿bajo qué condiciones acumulativas es lícito este tratamiento?',
    options: [
      'En la medida en que sea estrictamente necesario para detectar y corregir sesgos en los sistemas de IA de alto riesgo y siempre que: (a) no pueda lograrse eficazmente tratando otros datos, incluidos datos sintéticos o anonimizados; (b) estén sujetos a limitaciones técnicas de reutilización y medidas de seguridad y preservación de la privacidad de vanguardia, incluida la seudonimización; (c) exista acceso estrictamente controlado y documentado; (d) no se transmitan ni transfieran a otros terceros; y (e) se supriman una vez corregido el sesgo o al finalizar el período de conservación.',
      'Puede usarlos libremente y vender el dataset médico resultante a empresas farmacéuticas.',
      'Está prohibido en todos los casos detectar sesgos con datos de salud.',
      'Basta con publicar los historiales médicos en un repositorio público.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 10.5 crea una habilitación legal tasada y excepcional para que los proveedores de sistemas de alto riesgo puedan tratar categorías especiales de datos personales (Art. 9.1 RGPD, como datos de salud, biométricos o de origen étnico) exclusivamente para garantizar la detección y corrección de sesgos, pero sujetándola al cumplimiento estricto de las seis salvaguardias acumulativas de las letras a) a f), incluyendo la imposibilidad de usar datos sintéticos/anonimizados, seudonimización, prohibición absoluta de cesión a terceros y borrado tras corregir el sesgo.',
    enterpriseLesson:
      'Si tu equipo de ciencia de datos necesita auditar sesgos usando datos de salud (Art. 10.5), debe documentar por qué no bastan datos sintéticos/anonimizados, aislarlos con seudonimización y borrarlos inmediatamente tras completar el debiasing.',
    citations: [
      makeCitation({
        id: 'art_10.p5',
        targetType: 'paragraph',
        articleId: 'art_10',
        paragraphId: 'art_10.p5',
        displayLabel: 'Art. 10.5(a)-(f) · Reglamento (UE) 2024/1689',
        exactQuote:
          'En la medida en que sea estrictamente necesario para garantizar la detección y corrección de sesgos en relación con los sistemas de IA de alto riesgo... los proveedores de dichos sistemas podrán tratar excepcionalmente categorías especiales de datos personales... con sujeción a salvaguardias adecuadas para los derechos y libertades fundamentales de las personas físicas. Además de las disposiciones de los Reglamentos (UE) 2016/679... deberán cumplirse todas las condiciones siguientes...',
      }),
    ],
  },
  {
    id: 'qz_206',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'En el sector asegurador español operan dos grandes ecosistemas de convenios sectoriales: (1) el Convenio CICOS / CIDE-ASCIDE para compensación automatizada de daños materiales entre aseguradoras de automóviles según tabla de siniestros, y (2) los Convenios de Asistencia Sanitaria a lesionados de tráfico (CAS) donde se emplean algoritmos de IA para autorizar o denegar tratamientos médicos de rehabilitación o auditar prestaciones sanitarias a personas físicas. ¿Cómo se califican ambos casos de uso ante el Reglamento (UE) 2024/1689?',
    options: [
      'Ambos son prácticas prohibidas del artículo 5.',
      'El sistema de IA que automatiza la liquidación inter-compañías de daños materiales en el Convenio CICOS (sin evaluar riesgos de vida/salud ni denegar servicios sanitarios a personas físicas) es de RIESGO MÍNIMO; en cambio, si un sistema de IA se utiliza para evaluar la elegibilidad o denegar prestaciones y servicios esenciales de asistencia sanitaria o si es un software de triaje/diagnóstico clínico bajo el Reglamento MDR (Anexo I / Anexo III punto 5), entra en el ámbito de ALTO RIESGO y protección reforzada de datos de salud (Art. 9 RGPD).',
      'El Convenio CICOS de daños en chapa y pintura es de alto riesgo del Anexo I, y el triaje médico es de riesgo mínimo.',
      'Ninguno requiere cumplir el artículo 4 de alfabetización en IA.',
    ],
    correctOptionIndex: 1,
    explanation:
      'La liquidación automatizada B2B de saldos por daños materiales entre entidades aseguradoras (Convenio CICOS/CIDE-ASCIDE) resuelve relaciones patrimoniales entre compañías sin afectar al acceso a seguros de vida/salud ni a prestaciones esenciales de las personas físicas, por lo que es un sistema de riesgo mínimo. Por el contrario, cuando la IA interviene en el triaje clínico (producto sanitario MDR del Anexo I) o decide la elegibilidad/acceso a prestaciones de asistencia sanitaria o cobertura de salud de personas físicas (Anexo III punto 5), se sitúa en el perímetro de alto riesgo y de protección de datos de salud del Art. 9 RGPD.',
    enterpriseLesson:
      'Automatizar CICOS y peritación fotográfica de daños materiales en chapa/lunas es un caso de uso de bajo riesgo ideal para escalar IA en aseguradoras; en cambio, cualquier algoritmo que deniegue tratamientos médicos o rehabilite lesionados exige gobernanza de alto impacto y supervisión médica.',
    citations: [
      makeCitation({
        id: 'anx_III.p1',
        targetType: 'annex',
        articleId: 'anx_III',
        displayLabel: 'Anexo III punto 5, Anexo I y Art. 2.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          '5. Acceso a servicios privados esenciales y a servicios y prestaciones públicos esenciales y disfrute de estos servicios y prestaciones...',
      }),
    ],
  },
  {
    id: 'qz_207',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una entidad aseguradora de salud utiliza dos sistemas de IA distintos: el primero evalúa el riesgo médico del solicitante para fijar el precio de su póliza de salud o rechazar su contratación; el segundo analiza facturas y partes de siniestros exclusivamente con el fin de detectar tramas de fraude económico organizado. Según el Considerando 58 y el Anexo III punto 5(b)-(c), ¿cuál de los dos sistemas NO se considera de alto riesgo?',
    options: [
      'El primero (fijación de precios y evaluación de riesgos en seguro de salud) no es de alto riesgo.',
      'Ambos son de alto riesgo sin excepción.',
      'El sistema destinado exclusivamente a la detección del fraude en servicios financieros/aseguradores no se clasifica como de alto riesgo bajo el Anexo III punto 5, a diferencia del sistema de evaluación de riesgos y fijación de precios para personas físicas en seguros de salud y vida, que sí es de alto riesgo.',
      'El fraude no puede investigarse con herramientas informáticas.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Anexo III punto 5 y el Considerando 58 distinguen claramente los sistemas que determinan el acceso, elegibilidad y fijación de precios de seguros de vida y salud o calificación crediticia (que son de alto riesgo) de los sistemas de IA puestos en servicio con el fin de detectar el fraude en la prestación de servicios financieros y prudenciales, los cuales quedan excluidos de la categoría de alto riesgo.',
    enterpriseLesson:
      'No mezcles en el mismo modelo el scoring de suscripción/tarificación de salud (Alto Riesgo, Anexo III.5.c) con la detección antifraude (exenta de Alto Riesgo): mantenlos como sistemas separados con finalidades previstas diferenciadas.',
    citations: [
      makeCitation({
        id: 'anx_III.p1',
        targetType: 'annex',
        articleId: 'anx_III',
        displayLabel: 'Anexo III punto 5(b)-(c) y Considerando 58 · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) los sistemas de IA destinados a ser utilizados para evaluar la solvencia de las personas físicas o establecer su calificación crediticia, con excepción de los sistemas de IA utilizados con el fin de detectar el fraude financiero; c) los sistemas de IA destinados a ser utilizados para la evaluación de riesgos y la fijación de precios en relación con las personas físicas en el caso de los seguros de vida y de salud;',
      }),
    ],
  },
  {
    id: 'qz_208',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_50',
    titleId: 'tit_IV',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una aseguradora despliega un agente telefónico de voz sintética (voicebot con IA conversacional) para atender los partes de asistencia en carretera 24/7 y abrir expedientes de siniestros de hogar. ¿Qué obligaciones del Reglamento (UE) 2024/1689 debe cumplir este sistema de atención telefónica?',
    options: [
      'Es un sistema prohibido del artículo 5.',
      'Debe pasar por un organismo notificado de productos sanitarios.',
      'No tiene ninguna obligación si habla en castellano.',
      'Debe cumplir la obligación de transparencia del artículo 50.1 y 50.5 (informar de forma clara, distinguible y accesible al asegurado, a más tardar al inicio de la llamada, de que está interactuando con un sistema de IA), además de la obligación de alfabetización en IA del personal encargado de su supervisión (Art. 4).',
    ],
    correctOptionIndex: 3,
    explanation:
      'Un voicebot de apertura de partes y asistencia en carretera no decide la suscripción de seguros de vida/salud ni el triaje de urgencias vitales (Anexo III.5.d), por lo que se encuadra en la categoría de riesgo de transparencia específica del artículo 50.1 (debiendo informar al asegurado al inicio de la conversación de que habla con un sistema de IA, cumpliendo requisitos de accesibilidad del Art. 50.5) más alfabetización del Art. 4.',
    enterpriseLesson:
      'Revisa las locuciones iniciales (IVR) de todos tus agentes de voz en atención a siniestros: el saludo inicial debe indicar expresamente que el interlocutor es un asistente de inteligencia artificial (Art. 50.1 y 50.5).',
    citations: [
      makeCitation({
        id: 'art_50.p1',
        targetType: 'paragraph',
        articleId: 'art_50',
        paragraphId: 'art_50.p1',
        displayLabel: 'Art. 50.1 y 50.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores velarán por que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de manera que las personas físicas afectadas estén informadas de que están interactuando con un sistema de IA... a más tardar en el momento de la primera interacción o exposición.',
      }),
    ],
  },
  {
    id: 'qz_209',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_16',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'El equipo interno de ciencia de datos de un banco español entrena y desarrolla su propio modelo de aprendizaje automático ("in-house") para evaluar la solvencia y asignar la puntuación crediticia (credit scoring) de personas físicas que solicitan hipotecas y préstamos al consumo en sus sucursales y banca móvil. Según los artículos 3.3, 3.4, 16, 26, 27 y el Anexo III punto 5(b), ¿qué rol o roles asume el banco y cómo se articula con su supervisión prudencial?',
    options: [
      'El banco asume simultáneamente el DOBLE ROL de PROVEEDOR (al desarrollar un sistema de IA de alto riesgo y ponerlo en servicio bajo su propio nombre para su propio uso, debiendo cumplir el Art. 16: gestión de riesgos Art. 9, gobernanza de datos Art. 10, documentación Anexo IV, declaración UE Art. 47, marcado CE Art. 48 y registro Art. 49) y de RESPONSABLE DEL DESPLIEGUE (Art. 26: supervisión humana, FRIA obligatoria del Art. 27 y explicación del Art. 86), integrando además el sistema de gestión de calidad y vigilancia poscomercialización en su gobernanza prudencial bancaria (Arts. 17.4, 26.5 y 72.4).',
      'Al ser un desarrollo interno ("in-house") que no se vende a otros bancos, está exento de las obligaciones de proveedor del artículo 16.',
      'Solo tiene obligaciones de importador del artículo 23.',
      'Los bancos están exentos del Anexo III punto 5(b).',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 3.3 define como "proveedor" no solo a quien introduce un sistema en el mercado para terceros, sino también a quien "desarrolla un sistema de IA... y lo pone en servicio bajo su propio nombre o marca", es decir, para su propio uso interno (Art. 3.11). Por tanto, un banco que crea su propio modelo de credit scoring de personas físicas (Anexo III.5.b) es simultáneamente PROVEEDOR (Art. 16) y RESPONSABLE DEL DESPLIEGUE (Art. 26 y FRIA Art. 27). El Reglamento evita duplicidades permitiendo a las entidades financieras sujetas a la Directiva 2013/36/UE (CRD IV) integrar la gestión de calidad (Art. 17.4), el monitoreo (Art. 26.5) y la vigilancia poscomercialización (Art. 72.4) dentro de sus marcos de gobernanza de riesgo financiero supervisados por el Banco de España / BCE.',
    enterpriseLesson:
      'El mito más peligroso en empresas es creer que "como el modelo lo hemos hecho nosotros para uso interno y no lo vendemos, no somos proveedores": bajo el Art. 3.3 y 3.11, desarrollar y poner en servicio internamente un sistema de alto riesgo te convierte en Proveedor + Desplegador.',
    citations: [
      makeCitation({
        id: 'art_17.p4',
        targetType: 'paragraph',
        articleId: 'art_17',
        paragraphId: 'art_17.p4',
        displayLabel: 'Art. 3.3, Art. 16, Art. 17.4, Art. 26.5, Art. 27 y Anexo III.5(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'En el caso de los proveedores que sean entidades financieras sujetas a requisitos relativos a su gobernanza, sus mecanismos o sus procesos internos establecidos en virtud del Derecho de la Unión en materia de servicios financieros, la obligación de implantar un sistema de gestión de la calidad... se cumplirá mediante el cumplimiento de las normas relativas a los mecanismos o procesos de gobernanza interna de conformidad con el Derecho pertinente de la Unión en materia de servicios financieros.',
      }),
    ],
  },
  {
    id: 'qz_210',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un banco y una pasarela de pagos despliegan un motor de IA en tiempo real que analiza patrones transaccionales para detectar pagos con tarjetas robadas, suplantación de identidad y operaciones sospechosas de blanqueo de capitales (AML). Según el Anexo III punto 5(b), ¿es este sistema de IA de alto riesgo?',
    options: [
      'Sí, todo sistema utilizado por un banco es automáticamente de alto riesgo.',
      'No: el Anexo III punto 5(b) excluye expresamente a "los sistemas de IA utilizados con el fin de detectar el fraude financiero", por lo que no se clasifica como de alto riesgo.',
      'Está prohibido por el artículo 5.1(d) sobre predicción policial de delitos.',
      'Solo es de alto riesgo si analiza pagos superiores a 500 euros.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El Anexo III punto 5(b) clasifica como de alto riesgo los sistemas destinados a evaluar la solvencia o calificación crediticia de personas físicas, "con excepción de los sistemas de IA utilizados con el fin de detectar el fraude financiero". De igual modo, los sistemas de prevención de blanqueo de capitales por entidades obligadas (Considerando 58) no son sistemas de alto riesgo del Anexo III.5(b).',
    enterpriseLesson:
      'Los modelos de prevención de fraude en medios de pago, phishing bancario y AML están expresamente excluidos del Anexo III.5(b), facilitando la innovación rápida en ciberseguridad financiera.',
    citations: [
      makeCitation({
        id: 'anx_III.p1',
        targetType: 'annex',
        articleId: 'anx_III',
        displayLabel: 'Anexo III punto 5(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) los sistemas de IA destinados a ser utilizados para evaluar la solvencia de las personas físicas o establecer su calificación crediticia, con excepción de los sistemas de IA utilizados con el fin de detectar el fraude financiero;',
      }),
    ],
  },
  {
    id: 'qz_211',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_25',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una entidad financiera adquiere un sistema de IA de alto riesgo para scoring hipotecario ya certificado con marcado CE por un proveedor tecnológico externo. Seis meses después, el equipo de ingeniería del banco modifica la arquitectura algorítmica del modelo y lo reentrena por su cuenta con nuevas variables no previstas en las instrucciones de uso del proveedor original (modificación sustancial del artículo 3.23). Según el artículo 25.1(b) y 25.2, ¿qué consecuencias jurídicas se producen?',
    options: [
      'El proveedor original sigue siendo el único responsable de las modificaciones que haga el banco.',
      'El sistema deja de ser de alto riesgo.',
      'El banco pasa a ser considerado PROVEEDOR del sistema de IA de alto riesgo a efectos del Reglamento y queda sujeto a las obligaciones del artículo 16, mientras que el proveedor inicial deja de ser considerado proveedor de ese sistema modificado (aunque debe cooperar facilitando la documentación necesaria salvo que hubiese prohibido expresamente convertir o modificar así su sistema).',
      'El banco solo debe avisar por correo electrónico a sus clientes.',
    ],
    correctOptionIndex: 2,
    explanation:
      'Conforme al artículo 25.1(b), cualquier distribuidor, importador, responsable del despliegue u otro tercero será considerado PROVEEDOR de un sistema de IA de alto riesgo y estará sujeto al artículo 16 si realiza una "modificación sustancial" en un sistema de IA de alto riesgo que ya se haya introducido en el mercado o puesto en servicio. El artículo 3.23 precisa que en sistemas que continúan aprendiendo tras su puesta en servicio, los cambios predeterminados por el proveedor inicial y evaluados en la conformidad inicial no constituyen modificación sustancial, pero un cambio de arquitectura o reentrenamiento no previsto sí transfiere el rol de proveedor al banco.',
    enterpriseLesson:
      'Antes de hacer fine-tuning o modificar hiperparámetros/variables de un sistema de alto riesgo de un tercero, verifica si el ajuste está cubierto dentro de los "cambios predeterminados" de las instrucciones de uso del proveedor original (Art. 3.23 y Art. 15.4); si te sales de ellos, absorbes toda la responsabilidad de Proveedor (Art. 25.1.b).',
    citations: [
      makeCitation({
        id: 'art_25.p1',
        targetType: 'paragraph',
        articleId: 'art_25',
        paragraphId: 'art_25.p1',
        displayLabel: 'Art. 25.1(b), Art. 25.2 y Art. 3.23 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cualquier distribuidor, importador, responsable del despliegue u otro tercero será considerado proveedor de un sistema de IA de alto riesgo a efectos del presente Reglamento y estará sujeto a las obligaciones del proveedor en virtud del artículo 16, en cualquiera de las circunstancias siguientes:... b) cuando realice una modificación sustancial en un sistema de IA de alto riesgo que ya se haya introducido en el mercado o se haya puesto en servicio, de tal manera que siga siendo un sistema de IA de alto riesgo con arreglo al artículo 6;',
      }),
    ],
  },
  {
    id: 'qz_212',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una fintech de préstamos rápidos diseña un modelo de scoring que, además de analizar ingresos y deudas, penaliza y deniega el crédito a los solicitantes en función de las opiniones políticas de sus contactos en redes sociales, sus hábitos de reciclaje municipal y las asociaciones culturales a las que pertenecen. ¿Por qué esta práctica no es simplemente de alto riesgo (Anexo III.5.b), sino una práctica PROHIBIDA del artículo 5.1(c)?',
    options: [
      'Es totalmente legal si el interés TAE es inferior al 10 %.',
      'Solo es de alto riesgo y se soluciona con una FRIA.',
      'Solo está prohibida si la fintech es propiedad del Estado.',
      'Porque incurre en la prohibición de puntuación ciudadana (social scoring) del artículo 5.1(c), que aplica tanto al sector público como al privado cuando evalúa o clasifica a personas físicas atendiendo a su comportamiento social o características de personalidad y provoca un trato perjudicial o desfavorable en contextos sociales que no guardan relación con los contextos en los que se generaron o recogieron originalmente los datos.',
    ],
    correctOptionIndex: 3,
    explanation:
      'Mientras que la evaluación legítima de la solvencia financiera con variables económicas pertinentes al riesgo de crédito es un caso de uso permitido de alto riesgo (Anexo III.5.b), el cruce de comportamiento social o características personales generados en contextos completamente ajenos al financiero para denegar crédito constituye un trato perjudicial desvinculado del contexto de origen, prohibido de forma absoluta por el artículo 5.1(c)(i) y sancionado con hasta 35 M€ o el 7 % de facturación.',
    enterpriseLesson:
      'Audita el diccionario de variables ("feature store") de tus modelos de crédito y seguros: cualquier variable de comportamiento social o personalidad extraída de un contexto ajeno al contrato financiero cruza la línea del Anexo III.5 hacia la prohibición del Art. 5.1(c).',
    citations: [
      makeCitation({
        id: 'art_5.p4',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p4',
        displayLabel: 'Art. 5.1(c)(i) · Reglamento (UE) 2024/1689',
        exactQuote:
          'i) un trato perjudicial o desfavorable hacia determinadas personas físicas o colectivos de personas en contextos sociales que no guarden relación con los contextos en los que se generaron o recogieron originalmente los datos;',
      }),
    ],
  },
  {
    id: 'qz_213',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una empresa de comercio electrónico y servicios B2C entrena e implanta su propio modelo de cálculo dinámico de precios ("dynamic pricing") para ajustar tarifas según oferta, demanda, estacionalidad y stock. ¿Cómo se clasifica en general un calculador comercial de precios y en qué caso extremo cruzaría la línea roja del artículo 5.1(b)?',
    options: [
      'Un motor de cálculo dinámico de precios para bienes de consumo o servicios generales (distintos de seguros de vida y salud del Anexo III.5.c) es en general un sistema de RIESGO MÍNIMO; pero cruzaría la prohibición del artículo 5.1(b) si se diseñara para explotar las vulnerabilidades de una persona física o grupo debido a su edad, discapacidad o situación social o económica específica, con el objetivo o el efecto de alterar de manera sustancial su comportamiento causándole o pudiendo causarle razonablemente un perjuicio significativo.',
      'Cualquier algoritmo que calcule precios o descuentos en una tienda online es siempre de alto riesgo del Anexo I.',
      'Todos los calculadores de precios están prohibidos en la Unión Europea.',
      'Nunca le aplica el artículo 5 aunque explote la demencia senil de personas vulnerables para vaciar sus cuentas.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Los sistemas propios de cálculo de precios ("pricing engines") en retail, viajes, logística o servicios B2B/B2C son de riesgo mínimo (salvo tarificación de seguros de vida y salud de personas físicas del Anexo III.5.c). No obstante, como todo sistema de IA, deben respetar los límites del artículo 5: no pueden emplear técnicas subliminales/engañosas (5.1.a) ni explotar vulnerabilidades por edad, discapacidad o precariedad socioeconómica extrema causando un perjuicio significativo (5.1.b).',
    enterpriseLesson:
      'Si tu empresa tiene un modelo propio de cálculo de precios para clientes (fuera de seguros de vida/salud), clasifícalo como riesgo mínimo en tu inventario, pero incluye un test de ética y no explotación de colectivos vulnerables (Art. 5.1.b) en su validación.',
    citations: [
      makeCitation({
        id: 'art_5.p3',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p3',
        displayLabel: 'Art. 5.1(b) y Anexo III.5(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio o la utilización de un sistema de IA que explote alguna de las vulnerabilidades de una persona física o de un colectivo específico de personas debido a su edad, discapacidad o a una situación social o económica específica, con el objetivo o el efecto de alterar de manera sustancial el comportamiento de dicha persona... de un modo que provoque, o sea razonablemente probable que provoque, un perjuicio significativo...',
      }),
    ],
  },
  {
    id: 'qz_214',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una empresa tecnológica opera un portal web comparador de precios de seguros y préstamos en España. ¿En qué caso su motor de IA es de riesgo mínimo y en qué caso pasa a ser un sistema de IA de alto riesgo del Anexo III punto 5(b) o 5(c)?',
    options: [
      'Un comparador web nunca está sujeto a ninguna ley.',
      'Si el portal se limita a agregar y ordenar tarifas públicas enviadas por las entidades según filtros objetivos elegidos por el usuario (precio, franquicia, plazo), no es de alto riesgo; pero si el propio comparador ejecuta un modelo de IA que realiza perfilado personal (Art. 6.3 in fine), calcula un scoring de solvencia crediticia o evalúa el riesgo médico/vital del usuario para filtrar su elegibilidad o fijar su precio en préstamos o seguros de vida/salud, actúa sobre casos de uso de ALTO RIESGO del Anexo III punto 5(b)-(c).',
      'Solo depende del color del logotipo del comparador.',
      'Los comparadores de vuelos y hoteles son de alto riesgo del Anexo I.',
    ],
    correctOptionIndex: 1,
    explanation:
      'La clave reside en la función sustantiva del modelo y la regla de perfilado del artículo 6.3 in fine ("Se considerará siempre que un sistema de IA de los enumerados en el anexo III es de alto riesgo si elabora perfiles de personas físicas"): un agregador que ordena ofertas comerciales por precio es de riesgo mínimo, pero un motor que elabora perfiles de personas físicas para evaluar su solvencia crediticia (Anexo III.5.b) o su riesgo/precio en seguros de vida y salud (Anexo III.5.c) entra de lleno en alto riesgo.',
    enterpriseLesson:
      'En plataformas de intermediación o comparadores fintech/insurtech, audita si tu algoritmo hace simple ordenación de catálogo o si realiza "profiling" (Art. 4.4 RGPD) de solvencia o salud del usuario antes de mostrarle ofertas.',
    citations: [
      makeCitation({
        id: 'art_6.p4',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p4',
        displayLabel: 'Art. 6.3 in fine y Anexo III punto 5(b)-(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'Se considerará siempre que un sistema de IA de los enumerados en el anexo III es de alto riesgo si elabora perfiles de personas físicas.',
      }),
    ],
  },
  {
    id: 'qz_215',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_16',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una gran empresa de distribución en Valencia no compra software externo de selección de personal, sino que su propio departamento de ingeniería entrena desde cero un modelo de IA propio ("in-house") para cribar currículums, puntuar candidatos y decidir a quién se convoca a entrevista para sus tiendas, poniéndolo en servicio únicamente para su propio departamento de RR.HH. ¿Por qué esta empresa acumula las obligaciones de los artículos 16 y 26?',
    options: [
      'No tiene ninguna obligación porque el modelo se ha programado en sus propios servidores y no se vende a terceros.',
      'Solo tiene que cumplir el artículo 95 de códigos voluntarios.',
      'Porque el concepto de "puesta en servicio" (Art. 3.11) incluye el suministro de un sistema de IA "para su propio uso" en la Unión por primera vez para su finalidad prevista: al desarrollar internamente un sistema de alto riesgo del Anexo III punto 4(a) y ponerlo en servicio para sí misma, la empresa es a la vez PROVEEDOR (Art. 16: gestión de riesgos, datos, documentación Anexo IV, evaluación de conformidad interna Anexo VI, declaración UE Art. 47, marcado CE Art. 48 y registro Art. 49) y RESPONSABLE DEL DESPLIEGUE (Art. 26: supervisión humana, conservación de logs e información previa a los representantes de los trabajadores del Art. 26.7).',
      'Solo debe pedir permiso al colegio de ingenieros.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 3.11 define la "puesta en servicio" como "el suministro de un sistema de IA para su primer uso directamente al responsable del despliegue o para su propio uso en la Unión para su finalidad prevista". En consecuencia, el desarrollo in-house de un sistema de alto riesgo del Anexo III punto 4(a) (contratación y selección de personal) convierte a la empresa en Proveedor (Art. 3.3 y Art. 16) y en Responsable del Despliegue (Art. 3.4 y Art. 26) simultáneamente.',
    enterpriseLesson:
      'Desarrollar un modelo de alto riesgo in-house exige asumir los dos sombreros regulatorios (Proveedor Art. 16 + Desplegador Art. 26), incluyendo la elaboración del expediente técnico del Anexo IV y la declaración UE de conformidad del Art. 47 antes de ponerlo en producción interna.',
    citations: [
      makeCitation({
        id: 'art_3.p11',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p11',
        displayLabel: 'Art. 3.3, Art. 3.11, Art. 16, Art. 26 y Anexo III.4(a) · Reglamento (UE) 2024/1689',
        exactQuote:
          '«puesta en servicio»: el suministro de un sistema de IA para su primer uso directamente al responsable del despliegue o para su propio uso en la Unión para su finalidad prevista;',
      }),
    ],
  },
  {
    id: 'qz_216',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_25',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Compara la situación de dos empresas que utilizan el mismo modelo GPAI mediante API o pesos descargados: la Empresa 1 lo utiliza internamente para resumir actas de reuniones y traducir correos comerciales; la Empresa 2 lo integra en una plataforma SaaS propia que comercializa bajo su marca a universidades para evaluar los resultados del aprendizaje y dirigir el proceso de admisión de estudiantes (Anexo III punto 3). ¿Cuál es el estatus jurídico de cada una?',
    options: [
      'Ambas son proveedores de modelos GPAI con riesgo sistémico.',
      'La Empresa 1 es proveedora de alto riesgo y la Empresa 2 es desplegadora de riesgo mínimo.',
      'Ninguna tiene obligaciones bajo el Reglamento.',
      'La Empresa 1 es responsable del despliegue de un sistema de riesgo mínimo (sujeta a alfabetización del Art. 4); mientras que la Empresa 2, en virtud del artículo 25.1(c) y del Anexo III punto 3(a)-(b), se convierte en PROVEEDOR de un sistema de IA de ALTO RIESGO (debiendo cumplir el Art. 16 y apoyarse en la documentación para integradores del Anexo XII que el proveedor del modelo GPAI debe facilitarle según el Art. 53.1.b).',
    ],
    correctOptionIndex: 3,
    explanation:
      'En el Reglamento de IA, el riesgo de un sistema viene determinado por su finalidad prevista (Art. 6), no por la tecnología subyacente: usar un LLM para ofimática interna es riesgo mínimo, pero integrar ese mismo LLM y comercializarlo bajo marca propia para admisión o evaluación educativa (Anexo III punto 3) activa el artículo 25.1(a) y (c), convirtiendo al integrador en proveedor de un sistema de alto riesgo.',
    enterpriseLesson:
      'El mismo LLM base puede generar obligaciones casi nulas (resúmenes internos) o máximas (selección educativa, laboral o crediticia): evalúa siempre el caso de uso concreto frente a los 8 puntos del Anexo III antes de construir sobre una API de IA.',
    citations: [
      makeCitation({
        id: 'art_25.p1',
        targetType: 'paragraph',
        articleId: 'art_25',
        paragraphId: 'art_25.p1',
        displayLabel: 'Art. 25.1(c), Art. 53.1(b) y Anexo III punto 3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) cuando modifique la finalidad prevista de un sistema de IA, incluido un sistema de IA de uso general, que no haya sido clasificado como de alto riesgo y ya se haya introducido en el mercado o se haya puesto en servicio, de tal manera que el sistema de IA en cuestión se convierta en un sistema de IA de alto riesgo con arreglo al artículo 6.',
      }),
    ],
  },
  {
    id: 'qz_217',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una empresa española contrata a una consultora ubicada en un tercer país fuera de la UE para que procese los datos de rendimiento de la plantilla española con un sistema de IA alojado en los servidores extracomunitarios de dicha consultora, pero cuyos resultados de salida (informes de evaluación y propuestas de despido o promoción) se envían y utilizan en España para tomar decisiones laborales. Según el artículo 2.1(c), ¿es aplicable el Reglamento (UE) 2024/1689 tanto a la consultora extracomunitaria como a la empresa española?',
    options: [
      'Sí: el artículo 2.1(b) sujeta a la empresa española como responsable del despliegue establecido en la Unión, y el artículo 2.1(c) sujeta expresamente a los proveedores y responsables del despliegue establecidos o ubicados en un tercer país cuando los resultados de salida generados por el sistema de IA se utilicen en la Unión.',
      'No, al procesarse los datos en servidores fuera de la Unión Europea se elude por completo el Reglamento de IA.',
      'Solo aplica si la consultora extracomunitaria abre una oficina física en Madrid.',
      'Solo aplica el derecho laboral del país donde estén los servidores.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 2.1(c) fue redactado específicamente para impedir la elusión por externalización ("outsourcing") a terceros países: basta con que los resultados de salida (outputs) generados por el sistema de IA se utilicen en la Unión para que tanto el proveedor como el responsable del despliegue ubicados en el tercer país queden sujetos al Reglamento de IA.',
    enterpriseLesson:
      'Externalizar a un proveedor SaaS o BPO extracomunitario el filtrado de CVs, el scoring crediticio o la evaluación de plantilla NO evita el EU AI Act si los resultados se utilizan en España (Art. 2.1.c).',
    citations: [
      makeCitation({
        id: 'art_2.p1',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p1',
        displayLabel: 'Art. 2.1(b) y 2.1(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) los proveedores y responsables del despliegue de sistemas de IA que tengan su lugar de establecimiento o estén ubicados en un tercer país, cuando los resultados de salida generados por el sistema de IA se utilicen en la Unión.',
      }),
    ],
  },
  {
    id: 'qz_218',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una cadena de centros comerciales en España pretende instalar en los accesos de sus tiendas un sistema de IA sobre sus cámaras de videovigilancia (CCTV) con dos funciones: (1) identificar biométricamente en tiempo real a todos los visitantes cotejando sus rostros contra una base de datos de clientes VIP y de presuntos hurtadores habituales, y (2) alimentar una base de datos facial extrayendo de forma no selectiva todas las caras grabadas en el CCTV. ¿Cuál es el análisis jurídico correcto bajo el artículo 5 y el Anexo III?',
    options: [
      'Ambas funciones son perfectamente legales con un cartel informativo en la puerta.',
      'La extracción no selectiva de imágenes faciales de CCTV para crear o ampliar bases de datos de reconocimiento facial está PROHIBIDA de forma absoluta por el artículo 5.1(e); la identificación biométrica remota en tiempo real en espacios de acceso público con fines de aplicación de la ley está prohibida salvo los supuestos tasados con autorización judicial del artículo 5.1(h); y la identificación biométrica remota privada en espacios comerciales carece de base legítima en el RGPD y constituye un sistema de alto riesgo crítico del Anexo III punto 1(a) sujeto a evaluación por organismo notificado (Art. 43.1).',
      'Es un sistema de riesgo mínimo del artículo 95.',
      'Solo requiere avisar al ayuntamiento.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Este caso combina tres barreras legales infranqueables para el retail: (1) el artículo 5.1(e) prohíbe de forma absoluta crear o ampliar bases de datos de reconocimiento facial mediante extracción no selectiva de imágenes de CCTV; (2) el artículo 5.1(h) prohíbe la identificación biométrica remota en tiempo real en espacios de acceso público con fines policiales salvo excepciones gravísimas con autorización judicial; y (3) para usos no policiales, el Anexo III punto 1(a) califica la identificación biométrica remota como el único ámbito del Anexo III que exige evaluación de conformidad con posible intervención de organismo notificado (Art. 43.1) y cumplimiento estricto del Art. 9 RGPD (donde la AEPD ya ha sancionado reiteradamente el reconocimiento facial en comercios por falta de proporcionalidad e idoneidad).',
    enterpriseLesson:
      'En retail y centros comerciales, descarta de raíz los proyectos de identificación biométrica facial sobre cámaras CCTV: vulneran el Art. 5.1(e) si hacen captura no selectiva y chocan frontalmente con el Art. 9 RGPD y el Anexo III.1(a).',
    citations: [
      makeCitation({
        id: 'art_5.p6',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p6',
        displayLabel: 'Art. 5.1(e), Art. 5.1(h) y Anexo III punto 1(a) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio para esta finalidad específica o la utilización de sistemas de IA que creen o amplíen bases de datos de reconocimiento facial mediante la extracción no selectiva de imágenes faciales de internet o de circuitos cerrados de televisión;',
      }),
    ],
  },
  {
    id: 'qz_219',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa tecnológica desea implantar una herramienta de IA para gestionar a sus empleados en régimen de teletrabajo. El módulo 1 mide por webcam el estado de ánimo, aburrimiento o frustración del teletrabajador; el módulo 2 asigna automáticamente tareas diarias y supervisa y evalúa el rendimiento y el comportamiento de los empleados para decidir sus bonus anuales y renovaciones de contrato. ¿Cómo califica el Reglamento (UE) 2024/1689 cada uno de los dos módulos?',
    options: [
      'Ambos módulos son de riesgo mínimo.',
      'El módulo 1 es de alto riesgo y el módulo 2 está prohibido.',
      'El módulo 1 (inferir emociones en el lugar de trabajo sin finalidad médica ni de seguridad) está PROHIBIDO por el artículo 5.1(f); mientras que el módulo 2 (asignar tareas basadas en el comportamiento individual y supervisar/evaluar el rendimiento y comportamiento de los trabajadores) es un sistema de ALTO RIESGO del Anexo III punto 4(b) que requiere cumplir el artículo 26 (incluida la información previa a los representantes de los trabajadores del Art. 26.7).',
      'Ambos módulos están permitidos sin ninguna obligación si el empleado trabaja desde su domicilio.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El concepto de "lugar de trabajo" incluye el teletrabajo: el módulo 1 infringe la prohibición absoluta del artículo 5.1(f) (inferencia de emociones en el ámbito laboral sin motivos médicos o de seguridad). El módulo 2 encaja literalmente en el Anexo III punto 4(b): "sistemas de IA destinados a ser utilizados para tomar decisiones que afecten a las condiciones de las relaciones de índole laboral... para asignar tareas a partir del comportamiento individual o los rasgos o características personales, o para supervisar y evaluar el rendimiento y el comportamiento de las personas en el marco de dichas relaciones", siendo un sistema de alto riesgo sujeto al artículo 26.',
    enterpriseLesson:
      'En herramientas de productividad y teletrabajo: bloquea cualquier inferencia emocional (prohibida, Art. 5.1.f) y trata cualquier módulo algorítmico de asignación de tareas o evaluación de desempeño como Alto Riesgo (Anexo III.4.b + Art. 26.7).',
    citations: [
      makeCitation({
        id: 'anx_III.p1',
        targetType: 'annex',
        articleId: 'anx_III',
        displayLabel: 'Art. 5.1(f), Anexo III punto 4(b) y Art. 26.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) los sistemas de IA destinados a ser utilizados para tomar decisiones que afecten a las condiciones de las relaciones de índole laboral, la promoción y la rescisión de relaciones contractuales de índole laboral, para asignar tareas a partir del comportamiento individual o los rasgos o características personales, o para supervisar y evaluar el rendimiento y el comportamiento de las personas en el marco de dichas relaciones.',
      }),
    ],
  },
  {
    id: 'qz_220',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_26',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una empresa española utiliza como responsable del despliegue un sistema de IA de alto riesgo en su departamento de selección de personal (Anexo III punto 4). ¿Qué obligación mínima de conservación documental le impone el artículo 26.6 sobre los archivos de registro (logs) generados automáticamente por el sistema cuando están bajo su control?',
    options: [
      'Puede borrarlos cada noche a las 00:00 horas.',
      'Solo debe conservarlos durante 24 horas.',
      'Debe conservarlos durante 99 años en microfilme.',
      'Conservará los archivos de registro generados automáticamente por dicho sistema de IA de alto riesgo en la medida en que estén bajo su control, durante un período adecuado a la finalidad prevista del sistema de IA de alto riesgo y de al menos seis meses, salvo que el Derecho de la Unión o nacional aplicable, en particular sobre protección de datos personales, disponga otra cosa.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 26.6(1) (al igual que el artículo 19.1 para los proveedores) establece que los responsables del despliegue conservarán los archivos de registro (logs del Art. 12) generados automáticamente por el sistema de IA de alto riesgo que estén bajo su control durante un período adecuado a la finalidad prevista y de al menos 6 meses, respetando las normas de protección de datos.',
    enterpriseLesson:
      'Configura tus políticas de retención de logs de auditoría de sistemas de alto riesgo (Art. 19 y Art. 26.6) con un suelo mínimo de 6 meses inalterables.',
    citations: [
      makeCitation({
        id: 'art_26.p6',
        targetType: 'paragraph',
        articleId: 'art_26',
        paragraphId: 'art_26.p6',
        displayLabel: 'Art. 26.6 y Art. 19.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue conservarán los archivos de registro generados automáticamente por dicho sistema de IA de alto riesgo en la medida en que dichos archivos estén bajo su control, durante un período adecuado a la finalidad prevista del sistema de IA de alto riesgo, de al menos seis meses, salvo que se disponga otra cosa en el Derecho de la Unión o nacional aplicable, en particular en el Derecho de la Unión en materia de protección de datos personales.',
      }),
    ],
  },
  {
    id: 'qz_221',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_11',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una microempresa española de 7 empleados desarrolla un sistema de IA de alto riesgo para evaluación educativa (Anexo III punto 3). Preocupada por la carga burocrática de los artículos 11 (documentación técnica del Anexo IV) y 17 (sistema de gestión de la calidad), consulta qué facilidades le otorga el Reglamento (UE) 2024/1689. ¿Cuál es la respuesta jurídicamente exacta según los artículos 11.1 y 63.1?',
    options: [
      'Las pymes, incluidas las empresas emergentes, pueden facilitar los elementos de la documentación técnica del Anexo IV de manera simplificada utilizando el formulario simplificado que establezca la Comisión (que será aceptado por los organismos notificados, Art. 11.1); y los proveedores que sean microempresas pueden cumplir determinados elementos del sistema de gestión de la calidad del artículo 17 de manera simplificada conforme a las directrices específicas de la Comisión, sin quedar exentos de la evaluación de la conformidad (Art. 63.1 y 63.2).',
      'Las microempresas no tienen que redactar ningún documento ni cumplir los requisitos de precisión y ciberseguridad.',
      'Las microempresas tienen prohibido desarrollar sistemas de alto riesgo.',
      'Solo tienen facilidades si su facturación supera los 50 millones de euros.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El Reglamento reduce los costes administrativos de cumplimiento para las empresas de menor tamaño sin rebajar los estándares de seguridad y derechos fundamentales: el artículo 11.1 permite a todas las PYMEs y startups presentar la documentación técnica del Anexo IV mediante un formulario oficial simplificado (obligatorio de aceptar para los organismos notificados), y el artículo 63 permite a las microempresas cumplir de forma simplificada determinados elementos del sistema de gestión de la calidad del artículo 17.',
    enterpriseLesson:
      'Si eres una PYME o microempresa proveedora de alto riesgo, acógete al formulario simplificado del Anexo IV (Art. 11.1) y al régimen simplificado de gestión de calidad (Art. 63) junto con las tarifas reducidas de organismos notificados (Art. 62.4).',
    citations: [
      makeCitation({
        id: 'art_11.p1',
        targetType: 'paragraph',
        articleId: 'art_11',
        paragraphId: 'art_11.p1',
        displayLabel: 'Art. 11.1 y Art. 63.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las pymes, incluidas las empresas emergentes, podrán facilitar los elementos de la documentación técnica especificados en el anexo IV de manera simplificada. A tal efecto, la Comisión establecerá un formulario de documentación técnica simplificado orientado a las necesidades de las empresas pequeñas y las microempresas.',
      }),
    ],
  },
  {
    id: 'qz_222',
    topicId: 'enterprise_cases',
    topicLabel: 'Casos Prácticos Sectoriales y Multi-Rol',
    articleId: 'art_28',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una empresa integradora desarrolla un sistema de IA de alto riesgo del Anexo III punto 5(c) (tarificación de seguros de salud) combinando librerías y componentes de IA suministrados por terceros proveedores (distintos de modelos GPAI). Según el artículo 25.4, ¿qué obligación tienen esos terceros proveedores de herramientas, servicios, componentes o procesos frente al proveedor del sistema de IA de alto riesgo?',
    options: [
      'No tienen ninguna obligación de colaborar ni de entregar información técnica.',
      'El proveedor del sistema de IA de alto riesgo y el tercero que suministre un sistema de IA o herramientas, servicios, componentes o procesos que se utilicen o integren en un sistema de IA de alto riesgo especificarán, mediante acuerdo escrito, la información, las capacidades, el acceso técnico y demás asistencia necesarios, sobre la base del estado de la técnica generalmente reconocido, a fin de que el proveedor del sistema de IA de alto riesgo pueda cumplir plenamente las obligaciones establecidas en el Reglamento (sin que esta obligación se aplique a terceros que pongan a disposición del público herramientas o componentes con licencia libre y de código abierto).',
      'El tercero proveedor de librerías open-source gratuitas asume automáticamente todas las multas del cliente.',
      'Está prohibido utilizar componentes de terceros en sistemas de alto riesgo.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 25.4 regula las responsabilidades a lo largo de la cadena de valor de la IA para componentes distintos de los modelos GPAI (estos últimos se rigen por el Art. 53): exige que el proveedor del sistema de alto riesgo y el proveedor tercero de herramientas, servicios, componentes o procesos suscriban un acuerdo escrito que garantice la entrega de la información, capacidades, acceso técnico y asistencia necesarios para cumplir el Reglamento. El propio Art. 25.4 exime de esta obligación a los terceros que pongan a disposición del público herramientas, servicios, procesos o componentes (distintos de modelos GPAI) bajo una licencia libre y de código abierto.',
    enterpriseLesson:
      'En todos tus contratos de compra de componentes, datasets o APIs comerciales que se integren en un sistema de alto riesgo, incluye la cláusula obligatoria del Art. 25.4 exigiendo asistencia y documentación técnica para tu expediente del Anexo IV.',
    citations: [
      makeCitation({
        id: 'art_25.p4',
        targetType: 'paragraph',
        articleId: 'art_25',
        paragraphId: 'art_25.p4',
        displayLabel: 'Art. 25.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El proveedor de un sistema de IA de alto riesgo y el tercero que suministre un sistema de IA, herramientas, servicios, componentes o procesos que se utilicen o integren en un sistema de IA de alto riesgo especificarán, mediante acuerdo escrito, la información, las capacidades, el acceso técnico y demás asistencia necesarios... El presente apartado no se aplicará a los terceros que pongan a disposición del público herramientas, servicios, procesos o componentes de IA, distintos de los modelos de IA de uso general, con una licencia libre y de código abierto.',
      }),
    ],
  },
];

