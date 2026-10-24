import { makeCitation } from './legal-enrichment-data.mjs';

export const QUIZ_BANK_PART1B = [
  {
    id: 'qz_91',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_11',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un fabricante de dispositivos médicos (sujeto al Reglamento MDR 2017/745 del Anexo I, Sección A) integra un sistema de IA de alto riesgo (Art. 6.1) en su equipo de diagnóstico. Según el artículo 11.2, ¿debe elaborar dos expedientes técnicos separados (uno para el MDR y otro para el Reglamento de IA)?',
    options: [
      'Sí: el artículo 11.2 exige redactar dos expedientes técnicos separados e independientes, prohibiendo que la documentación técnica del Anexo IV se fusione con la del Reglamento sectorial del Anexo I.',
      'No: conforme al artículo 11.2, se elaborará una única documentación técnica que reúna la información del Anexo IV y la exigida por el acto legislativo sectorial aplicable del Anexo I, sección A.',
      'No: el artículo 11.2 exime íntegramente de la documentación técnica del Anexo IV a todo producto sanitario que ya cuente con un expediente de marcado CE aprobado bajo el Reglamento MDR 2017/745.',
      'Sí: el fabricante debe presentar primero el expediente técnico sectorial y, solo tras obtener la conformidad, redactar un anexo complementario voluntario bajo la supervisión de la Oficina de IA.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Para evitar duplicidades administrativas en productos regulados del Anexo I, Sección A (dispositivos médicos, maquinaria, juguetes, ascensores, etc.), el artículo 11.2 dispone que se elaborará un único conjunto de documentación técnica que integre la información del Anexo IV del Reglamento de IA y la exigida por el acto sectorial correspondiente.',
    enterpriseLesson:
      'En productos sanitarios o maquinaria industrial con IA, unifica el expediente técnico integrando los apartados del Anexo IV dentro de tu Technical File sectorial.',
    citations: [
      makeCitation({
        id: 'art_11.p2',
        targetType: 'paragraph',
        articleId: 'art_11',
        paragraphId: 'art_11.p2',
        displayLabel: 'Art. 11.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando un sistema de IA de alto riesgo relacionado con un producto al que sean aplicables los actos legislativos de armonización de la Unión enumerados en el anexo I, sección A, se introduzca en el mercado o se ponga en servicio, se elaborará una única documentación técnica que contenga toda la información establecida en el apartado 1, así como la información exigida en virtud de dichos actos legislativos.',
      }),
    ],
  },
  {
    id: 'qz_92',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_12',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Además de la capacidad general de registro automático de eventos (logs) durante toda la vida útil del sistema (Art. 12.1), ¿qué cuatro elementos específicos exige el artículo 12.3 que registren como mínimo los sistemas de identificación biométrica remota del Anexo III, punto 1, letra a)?',
    options: [
      'El artículo 12.3 exige registrar: a) identificador unívoco del sensor, b) coordenadas GPS de la cámara, c) volumen de rostros analizados sin coincidencia y d) firma del delegado de protección de datos del operador.',
      'El artículo 12.3 exige registrar: a) consumo de cómputo del servidor en nube, b) versión del modelo biométrico, c) listado de falsos negativos descartados y d) certificación de no discriminación de la autoridad de vigilancia.',
      'El artículo 12.3 exige registrar: a) duración de cada uso (inicio y fin), b) base de datos de referencia cotejada, c) datos de entrada con coincidencia y d) personas físicas que verificaron los resultados (Art. 14.5).',
      'El artículo 12.3 exige registrar: a) fabricante de la lente óptica, b) ancho de banda consumido en red, c) copias de seguridad de todos los transeúntes detectados y d) número de registro del organismo notificado.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 12.3 impone capacidades de logging reforzadas para los sistemas del Anexo III, punto 1, letra a) (identificación biométrica remota): inicio y fin de cada uso, base de datos de referencia consultada, datos de entrada que generaron coincidencia e identificación de los al menos dos supervisores humanos que verificaron el resultado según el artículo 14.5.',
    enterpriseLesson:
      'Si desarrollas software biométrico del Anexo III.1.a), el esquema de base de datos de auditoría (audit log) debe almacenar obligatoriamente la identidad de los dos operadores humanos que confirmaron cada coincidencia.',
    citations: [
      makeCitation({
        id: 'art_12.p3',
        targetType: 'paragraph',
        articleId: 'art_12',
        paragraphId: 'art_12.p3',
        displayLabel: 'Art. 12.1 y 12.3(a)-(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'En el caso de los sistemas de IA de alto riesgo a que se refiere el anexo III, punto 1, letra a), las capacidades de registro ofrecerán, como mínimo: a) el registro de la duración de cada utilización del sistema (fecha y hora de inicio y de finalización de cada utilización); b) la base de datos de referencia con la que el sistema ha cotejado los datos de entrada; c) los datos de entrada con respecto a los cuales la búsqueda ha dado lugar a una coincidencia; d) la identificación de las personas físicas que hayan participado en la verificación de los resultados, según se contempla en el artículo 14, apartado 5.',
      }),
    ],
  },
  {
    id: 'qz_93',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_13',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 13.3, ¿qué información crítica debe figurar obligatoriamente en las «instrucciones de uso» que acompañan a todo sistema de IA de alto riesgo entregadas al responsable del despliegue?',
    options: [
      'Datos del proveedor, finalidad prevista, capacidades y límites de rendimiento (precisión, solidez, ciberseguridad), especificaciones de datos de entrada, medidas de supervisión humana, vida útil prevista y recogida de registros.',
      'Código fuente del modelo, ponderación detallada de hiperparámetros de entrenamiento, directrices de precios comerciales, pactos de confidencialidad con subcontratistas y certificados ISO de todos los desarrolladores implicados.',
      'Identidad de los directivos del proveedor, balance financiero auditado de los tres últimos ejercicios, acuerdos de nivel de servicio con proveedores de nube y política retributiva del equipo de ingeniería responsable de la IA.',
      'Únicamente el marcado CE con su número de organismo notificado, el manual de instalación de hardware y una declaración de exención total de responsabilidad frente a errores algorítmicos ante las autoridades supervisoras de mercado.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 13.3 detalla de la letra a) a la letra f) el contenido mínimo exhaustivo de las instrucciones de uso en formato digital o físico: datos del proveedor, capacidades y limitaciones (precisión por colectivos, riesgos previsibles, especificaciones de datos de entrada), cambios predeterminados, medidas de supervisión humana y explicabilidad (13.3.d), recursos de cálculo necesarios, vida útil y mecanismos para que el desplegador recoja y conserve los logs (13.3.f).',
    enterpriseLesson:
      'Trata las «instrucciones de uso» del Art. 13 como un entregable técnico-jurídico vinculante: si omites especificar las limitaciones del modelo o cómo debe supervisarlo el cliente, incumples un requisito esencial de conformidad.',
    citations: [
      makeCitation({
        id: 'art_13.p3',
        targetType: 'paragraph',
        articleId: 'art_13',
        paragraphId: 'art_13.p3',
        displayLabel: 'Art. 13.1, 13.2 y 13.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los sistemas de IA de alto riesgo irán acompañados de instrucciones de uso en un formato digital adecuado o de otro tipo que incluyan información concisa, completa, correcta y clara que sea pertinente, accesible y comprensible para los responsables del despliegue.',
      }),
    ],
  },
  {
    id: 'qz_94',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_14',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Al diseñar la interfaz de supervisión humana de un sistema de IA de alto riesgo conforme al artículo 14.4, ¿qué fenómeno cognitivo exige expresamente la letra b) que las personas encargadas de la supervisión puedan prevenir, y qué facultades operativas exigen las letras d) y e)?',
    options: [
      'Prevenir la fatiga visual del operador mediante descansos forzados, poder recalibrar los pesos del modelo en tiempo real durante la inferencia y delegar la validación final en un sistema de IA secundario de respaldo institucional.',
      'Prevenir discrepancias entre supervisores mediante votación mayoritaria algorítmica, obligar a aceptar siempre la recomendación con nivel de confianza superior al 90% y apagar los registros de auditoría si se satura el almacenamiento.',
      'Fomentar la aceptación rápida de resultados para reducir costes operativos, impedir que el operador contradiga las decisiones automatizadas y limitar el botón de parada a la autorización previa expresa del organismo notificado.',
      'Prevenir el «sesgo de automatización» (confianza ciega en el sistema), poder decidir no utilizarlo o invalidar y revertir sus resultados, e intervenir o interrumpir el funcionamiento mediante un botón de parada o procedimiento seguro.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 14.4 exige que las medidas de supervisión humana permitan a los supervisores: (a) comprender capacidades y limitaciones y detectar anomalías; (b) mantenerse alerta frente al «sesgo de automatización» (automation bias), especialmente cuando el sistema proporciona recomendaciones o información para la toma de decisiones; (c) interpretar correctamente los outputs; (d) decidir no utilizar el sistema o descartar, invalidar o revertir sus resultados; y (e) detener el funcionamiento en condiciones de seguridad mediante un botón de parada.',
    enterpriseLesson:
      'En interfaces de sistemas de alto riesgo (RR.HH., crédito, triaje), evita diseños UX que induzcan a clicar "Aceptar recomendación" por inercia; exige motivación activa, permite revertir la decisión e incluye botón de parada segura.',
    citations: [
      makeCitation({
        id: 'art_14.p4',
        targetType: 'paragraph',
        articleId: 'art_14',
        paragraphId: 'art_14.p4',
        displayLabel: 'Art. 14.4(a)-(e) · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) mantenerse conscientes de la posible tendencia a confiar automáticamente o en exceso en los resultados de salida generados por un sistema de IA de alto riesgo («sesgo de automatización»)... d) decidir, en cualquier situación concreta, no utilizar el sistema de IA de alto riesgo o descartar, invalidar o revertir de otro modo los resultados de salida... e) intervenir en el funcionamiento del sistema de IA de alto riesgo o interrumpir el sistema mediante un botón de «parada» o un procedimiento similar que permita que el sistema se detenga de forma segura.',
      }),
    ],
  },
  {
    id: 'qz_95',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_15',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según los apartados 4 y 5 del artículo 15, ¿qué medidas específicas de solidez técnica y de ciberseguridad frente a vulnerabilidades propias de la IA deben incorporar los sistemas de IA de alto riesgo?',
    options: [
      'En solidez: sustitución periódica de procesadores gráficos y balanceo de carga en servidores locales. En ciberseguridad: cortafuegos perimetrales comerciales estándar, firma obligatoria de acuerdos de confidencialidad y copias semanales.',
      'En solidez: redundancia, planes de prevención de fallos y control de bucles de retroalimentación en sistemas que continúan aprendiendo. En ciberseguridad: protección frente a envenenamiento de datos y modelos, ejemplos adversarios y evasión.',
      'En solidez: limitación del entrenamiento a conjuntos con menos de cien mil registros. En ciberseguridad: cifrado simétrico de bases de datos administrativas y bloqueo de conexiones a internet sin exigir defensas frente a manipulación.',
      'En solidez: auditoría anual externa por el supervisor bancario europeo sin planes de redundancia técnica. En ciberseguridad: instalación de antivirus comercial en terminales y delegación de la seguridad algorítmica en la aseguradora.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 15.4 exige solidez técnica (redundancia, planes fail-safe y mitigación de bucles de retroalimentación sesgados en sistemas de aprendizaje continuo), mientras que el artículo 15.5 exige ciberseguridad específica de IA frente a data poisoning (envenenamiento de datos), model poisoning (envenenamiento de modelos), adversarial examples / model evasion (ejemplos adversarios o evasión) y ataques a la confidencialidad de los datos o pesos.',
    enterpriseLesson:
      'La ciberseguridad del Art. 15.5 va más allá de la seguridad IT perimetral (ISO 27001): tu equipo de seguridad debe auditar y mitigar vectores específicos de Machine Learning (data/model poisoning, prompt injection y ataques adversarios).',
    citations: [
      makeCitation({
        id: 'art_15.p5',
        targetType: 'paragraph',
        articleId: 'art_15',
        paragraphId: 'art_15.p5',
        displayLabel: 'Art. 15.4 y 15.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las soluciones técnicas encaminadas a garantizar la ciberseguridad de los sistemas de IA de alto riesgo se adaptarán a las circunstancias pertinentes y a los riesgos, e incluirán, cuando proceda, medidas para prevenir, detectar, responder, resolver y controlar los ataques que intenten manipular el conjunto de datos de entrenamiento («envenenamiento de datos»), o los componentes preentrenados utilizados en el entrenamiento («envenenamiento de modelos»), las entradas diseñadas para hacer que el modelo de IA cometa un error («ejemplos adversarios» o «evasión de modelos»), o los ataques a la confidencialidad o los defectos en el modelo.',
      }),
    ],
  },
  {
    id: 'qz_96',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_16',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 16, letras b) y l), ¿qué obligaciones de identificación y de accesibilidad tienen los proveedores de sistemas de IA de alto riesgo?',
    options: [
      'Deben publicar los datos de contacto personales de todos sus desarrolladores en el Diario Oficial de la Unión Europea y adaptar la interfaz exclusivamente a las especificaciones técnicas de la Directiva de Máquinas.',
      'Pueden mantener el anonimato comercial mediante código alfanumérico confidencial ante la Comisión, quedando eximidos de las normas de accesibilidad para personas con discapacidad si el sistema opera únicamente en la nube.',
      'Deben indicar su nombre o marca y dirección de contacto en el sistema, embalaje o documentación (letra b), y garantizar los requisitos de accesibilidad conforme a las Directivas (UE) 2016/2102 y (UE) 2019/882 (letra l).',
      'Solo se exige identificar al distribuidor local excluyendo al proveedor original, y la accesibilidad según el Acta Europea es meramente orientativa y voluntaria hasta la revisión del Reglamento prevista para el año 2030.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 16 enumera las doce obligaciones troncales del proveedor de alto riesgo (letras a a l), incluyendo en la letra b) el deber de identificación clara del proveedor y su dirección de contacto en el propio sistema, su embalaje o documentación, y en la letra l) el cumplimiento obligatorio de los requisitos de accesibilidad para personas con discapacidad de las Directivas (UE) 2016/2102 y (UE) 2019/882.',
    enterpriseLesson:
      'Todo sistema de IA de alto riesgo debe cumplir por mandato del Art. 16(l) el Acta Europea de Accesibilidad (Directiva UE 2019/882 / WCAG) y mostrar de forma inequívoca la razón social y dirección de contacto del proveedor (Art. 16.b).',
    citations: [
      makeCitation({
        id: 'art_16.p3',
        targetType: 'paragraph',
        articleId: 'art_16',
        paragraphId: 'art_16.p3',
        displayLabel: 'Art. 16(b) y 16(l) · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) indicarán en el sistema de IA de alto riesgo o, cuando no sea posible, en su embalaje o en la documentación que lo acompañe, según proceda, su nombre, su nombre comercial registrado o su marca registrada y su dirección de contacto... l) se asegurarán de que el sistema de IA de alto riesgo cumpla los requisitos de accesibilidad de conformidad con las Directivas (UE) 2016/2102 y (UE) 2019/882.',
      }),
    ],
  },
  {
    id: 'qz_97',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_17',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según los apartados 1 y 2 del artículo 17, ¿cómo se modula la aplicación del sistema de gestión de la calidad obligatorio para los proveedores de sistemas de IA de alto riesgo?',
    options: [
      'La aplicación de los aspectos del sistema de gestión de la calidad será proporcionada al tamaño de la organización del proveedor (Art. 17.2), documentándose de forma sistemática y ordenada en políticas escritas (Art. 17.1).',
      'El artículo 17.2 impone idéntica carga documental y auditorías a microempresas y multinacionales, prohibiendo adaptar los trece aspectos del sistema de gestión de la calidad a la escala o recursos operativos del proveedor.',
      'El sistema de gestión de la calidad puede sustituirse por una póliza de responsabilidad civil patronal, eximiendo de documentación escrita a proveedores con menos de doscientos cincuenta trabajadores según el artículo 17.3.',
      'Las obligaciones del artículo 17 se aplican exclusivamente a entidades financieras de crédito, quedando eximidos los proveedores industriales que ya cuenten con marcado CE sectorial conforme a la normativa del Anexo I.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 17.1 exige documentar de manera sistemática y ordenada en políticas, procedimientos e instrucciones escritos los trece pilares de gestión de la calidad (diseño, control de calidad, examen de datos, gestión de riesgos, vigilancia poscomercialización, incidentes, comunicación con autoridades, conservación documental, asignación de responsabilidades), pero el artículo 17.2 dispone que la aplicación de tales aspectos será proporcionada al tamaño de la organización del proveedor.',
    enterpriseLesson:
      'El principio de proporcionalidad del Art. 17.2 permite a pymes y startups implantar un Sistema de Gestión de Calidad ágil (integrado en su repositorio documental / ISO 42001) adaptado al tamaño real de su organización.',
    citations: [
      makeCitation({
        id: 'art_17.p2',
        targetType: 'paragraph',
        articleId: 'art_17',
        paragraphId: 'art_17.p2',
        displayLabel: 'Art. 17.1 y 17.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La aplicación de los aspectos a que se refiere el apartado 1 será proporcionada al tamaño de la organización del proveedor.',
      }),
    ],
  },
  {
    id: 'qz_98',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_18',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un proveedor de sistemas de IA de alto riesgo entra en concurso de acreedores (quiebra) o cesa su actividad tres años después de haber introducido el sistema en el mercado. Según el artículo 18.2 (y las obligaciones del Estado miembro), ¿qué ocurre con el deber de conservar la documentación durante 10 años?',
    options: [
      'La obligación de custodia decae de forma automática tras el auto judicial de liquidación concursal, ordenándose la destrucción confidencial de los expedientes técnicos para salvaguardar los secretos comerciales del fallido.',
      'Cada Estado miembro determinará las condiciones para que la documentación siga a disposición de las autoridades competentes durante el resto del período de diez años si el proveedor o su representante quiebra o cesa su actividad.',
      'El deber de conservación de diez años se transfiere forzosamente y en exclusiva a los responsables del despliegue que adquirieron licencias del sistema, debiendo reconstruir íntegramente el Anexo IV bajo apercibimiento sancionador.',
      'La Oficina Europea de IA asume de oficio el depósito fiduciario de toda la documentación técnica durante los siete años restantes, sufragando los costes de mantenimiento con cargo al presupuesto general de la Unión Europea.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 18.2 prevé expresamente la contingencia de insolvencia o cese de actividad del proveedor (o de su representante autorizado) antes de cumplirse los 10 años de conservación documental del artículo 18.1, obligando a los Estados miembros a garantizar que dicha documentación permanezca a disposición de las autoridades nacionales competentes durante todo el período restante.',
    enterpriseLesson:
      'Cuando adquieras o despliegues un sistema de IA de alto riesgo de una startup o proveedor externo, incluye una cláusula de depósito (escrow documental del Anexo IV y Declaración UE) en caso de insolvencia o cierre del proveedor.',
    citations: [
      makeCitation({
        id: 'art_18.p2',
        targetType: 'paragraph',
        articleId: 'art_18',
        paragraphId: 'art_18.p2',
        displayLabel: 'Art. 18.1 y 18.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cada Estado miembro determinará las condiciones en las que la documentación a que se refiere el apartado 1 permanezca a disposición de las autoridades nacionales competentes durante el período indicado en dicho apartado para los casos en que un proveedor o su representante autorizado establecido en su territorio se declare en quiebra o ponga fin a su actividad antes de que finalice dicho período.',
      }),
    ],
  },
  {
    id: 'qz_99',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_19',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'En el caso de los proveedores de sistemas de IA de alto riesgo que sean entidades financieras sujetas a legislación de servicios financieros de la Unión, ¿cómo deben cumplir la obligación de conservar los archivos de registro (logs) generados automáticamente según el artículo 19.2?',
    options: [
      'Deben remitir los archivos de registro diariamente al Banco Central Europeo mediante un repositorio centralizado seguro y mantener copias locales separadas durante un plazo improrrogable de quince años de custodia.',
      'Quedan eximidos de conservar registros automáticos de eventos si el sistema de IA cuenta con una auditoría externa de gobernanza prudencial realizada conforme a la Directiva de Requisitos de Capital (CRD V).',
      'Conservarán los registros generados automáticamente por sus sistemas de alto riesgo como parte de la documentación exigida por la legislación aplicable de la Unión en materia de servicios financieros (Art. 19.2).',
      'Deben alojar todos los registros en un servidor público de la Autoridad Bancaria Europea, anonimizando los datos cada cuarenta y ocho horas para prevenir infracciones de las normas sectoriales de solvencia bancaria.',
    ],
    correctOptionIndex: 2,
    explanation:
      'Al igual que el artículo 17.3 (sobre el sistema de gestión de calidad) y el artículo 26.6 párrafo segundo (para desplegadores financieros), el artículo 19.2 coordina el Reglamento de IA con la regulación prudencial bancaria y financiera disponiendo que las entidades financieras conserven los logs de sus sistemas de alto riesgo como parte de la documentación exigida por su normativa sectorial de servicios financieros.',
    enterpriseLesson:
      'En bancos, aseguradoras y sociedades de inversión, integra el almacenamiento de logs del Art. 19/26 directamente en los repositorios regulatorios de auditoría financiera y DORA.',
    citations: [
      makeCitation({
        id: 'art_19.p2',
        targetType: 'paragraph',
        articleId: 'art_19',
        paragraphId: 'art_19.p2',
        displayLabel: 'Art. 19.1 y 19.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores que sean entidades financieras sujetas a requisitos relativos a su gobernanza, sus mecanismos o sus procesos internos en virtud de la legislación de la Unión en materia de servicios financieros conservarán los archivos de registro generados automáticamente por sus sistemas de IA de alto riesgo como parte de la documentación contemplada en la legislación pertinente en materia de servicios financieros.',
      }),
    ],
  },
  {
    id: 'qz_100',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_20',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un proveedor de un sistema de IA de alto riesgo ya comercializado detecta que una actualización ha introducido un defecto que hace que el sistema deje de ser conforme con el Reglamento. Según los artículos 20.1 y 20.2, ¿qué acciones inmediatas está obligado a ejecutar?',
    options: [
      'Adoptar de inmediato las medidas correctoras para ponerlo en conformidad, retirarlo, desactivarlo o recuperarlo; avisar a distribuidores, desplegadores e importadores; y notificar a las autoridades si hay riesgo (Art. 20).',
      'Notificar la incidencia con carácter estrictamente reservado al organismo notificado en la siguiente auditoría anual, manteniendo la comercialización activa mientras no conste una reclamación motivada de algún afectado.',
      'Corregir el defecto de forma discreta exclusivamente en las versiones para nuevos clientes, manteniendo las versiones deficientes en producción hasta que expire la licencia contratada por los desplegadores sin emitir aviso técnico.',
      'Publicar un aviso en su portal corporativo y abonar una compensación económica a los distribuidores, quedando exonerado de adoptar medidas técnicas de retirada o desactivación si el sistema no ha provocado perjuicios directos.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 20 impone un deber activo de subsanación y alerta en toda la cadena de suministro: el proveedor que considere o tenga motivos para pensar que su sistema de alto riesgo no es conforme debe tomar de inmediato medidas correctoras (reparar, retirar, desactivar o recuperar), avisar a distribuidores, desplegadores, importadores y representante autorizado, e investigar las causas en colaboración con el desplegador e informar a las autoridades de vigilancia del mercado y al organismo notificado.',
    enterpriseLesson:
      'Tu plan de respuesta a no conformidades (Art. 20) debe incluir plantillas de aviso inmediato tanto a clientes (desplegadores) y canal de distribución como a la AESIA.',
    citations: [
      makeCitation({
        id: 'art_20.p1',
        targetType: 'paragraph',
        articleId: 'art_20',
        paragraphId: 'art_20.p1',
        displayLabel: 'Art. 20.1 y 20.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores de sistemas de IA de alto riesgo que consideren o tengan motivos para pensar que un sistema de IA de alto riesgo que han introducido en el mercado o puesto en servicio no es conforme con el presente Reglamento adoptarán inmediatamente las medidas correctoras necesarias para poner dicho sistema en conformidad, retirarlo del mercado, desactivarlo o recuperarlo, según proceda. Informarán de ello a los distribuidores del sistema de IA de alto riesgo de que se trate y, en su caso, a los responsables del despliegue, al representante autorizado y a los importadores.',
      }),
    ],
  },
  {
    id: 'qz_101',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_21',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Cuando una autoridad nacional competente formula una solicitud motivada al proveedor de un sistema de IA de alto riesgo conforme al artículo 21.1, ¿en qué idioma debe el proveedor facilitarle toda la información y documentación necesarias para demostrar la conformidad?',
    options: [
      'En cualquiera de las lenguas oficiales de la Unión elegida libremente por el proveedor, debiendo la autoridad asumir a su costa la traducción oficial jurada si no domina el idioma seleccionado.',
      'Exclusivamente en inglés o en la lengua oficial del tercer país donde radique la sede principal del fabricante, sin necesidad de adaptar la documentación al idioma del Estado miembro requirente.',
      'Únicamente en el idioma oficial del organismo notificado que haya emitido la certificación de conformidad del sistema, independientemente de la autoridad nacional que formalice la solicitud motivada.',
      'En una lengua fácilmente comprensible para dicha autoridad, que será una de las lenguas oficiales de las instituciones de la Unión determinada por el Estado miembro de que se trate (Art. 21.1).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 21.1 obliga a los proveedores de sistemas de IA de alto riesgo, previa solicitud motivada de una autoridad competente, a facilitarle toda la información y documentación necesarias para demostrar la conformidad en una lengua que pueda ser fácilmente comprendida por la autoridad entre las lenguas oficiales de la Unión determinadas por dicho Estado miembro.',
    enterpriseLesson:
      'Si comercializas sistemas de alto riesgo en España, asegúrate de poder entregar la documentación del Anexo IV y evidencias de conformidad en español o en la lengua oficial aceptada por la AESIA.',
    citations: [
      makeCitation({
        id: 'art_21.p1',
        targetType: 'paragraph',
        articleId: 'art_21',
        paragraphId: 'art_21.p1',
        displayLabel: 'Art. 21.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores de sistemas de IA de alto riesgo facilitarán a la autoridad competente, previa solicitud motivada de esta, toda la información y la documentación necesarias para demostrar la conformidad del sistema de IA de alto riesgo con los requisitos establecidos en la sección 2, en una lengua que pueda ser fácilmente comprendida por la autoridad en cuestión, que será una de las lenguas oficiales de las instituciones de la Unión determinada por el Estado miembro de que se trate.',
      }),
    ],
  },
  {
    id: 'qz_102',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_22',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un representante autorizado en Madrid, designado por un proveedor extracomunitario de un sistema de IA de alto riesgo conforme al artículo 22, comprueba que el proveedor extranjero está incumpliendo gravemente sus obligaciones del Reglamento y se niega a subsanarlas. Según el artículo 22.3, último párrafo, ¿qué deber jurídico tiene el representante autorizado?',
    options: [
      'Mantener la vigencia de la representación hasta el término del contrato civil, consignando una salvedad formal en su memoria anual sin dar traslado a las autoridades de supervisión del mercado de la Unión.',
      'Poner fin de inmediato al mandato e informar sin demora de la resolución y de sus motivos a la autoridad de vigilancia del mercado del Estado miembro y, cuando proceda, al organismo notificado (Art. 22.3).',
      'Subsanar por cuenta propia los defectos del sistema asumiendo las obligaciones del fabricante, sin disponer de base jurídica para revocar el mandato hasta que recaiga una resolución sancionadora ejecutiva.',
      'Suspender temporalmente las ventas conservando el mandato en vigor durante dos años de gracia, notificando la situación únicamente a los distribuidores comerciales y reteniendo el expediente sin denunciarlo.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 22.3 impone al representante autorizado un rol de garante regulatorio en la Unión: además de verificar la declaración UE de conformidad y la documentación técnica y mantenerlas 10 años a disposición de las autoridades, "El representante autorizado pondrá fin al mandato cuando considere o tenga motivos para considerar que el proveedor actúa de forma contraria a las obligaciones que le incumben en virtud del presente Reglamento. En tal caso, informará inmediatamente de la finalización del mandato y de los motivos para ello a la autoridad de vigilancia del mercado pertinente".',
    enterpriseLesson:
      'Actuar como Representante Autorizado en la UE (Art. 22) no es un mero buzón postal: conlleva responsabilidad directa y la obligación legal de rescindir el mandato y denunciar al proveedor extracomunitario ante la autoridad si incumple el Reglamento.',
    citations: [
      makeCitation({
        id: 'art_22.p4',
        targetType: 'paragraph',
        articleId: 'art_22',
        paragraphId: 'art_22.p4',
        displayLabel: 'Art. 22.1 y 22.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El representante autorizado pondrá fin al mandato cuando considere o tenga motivos para considerar que el proveedor actúa de forma contraria a las obligaciones que le incumben en virtud del presente Reglamento. En tal caso, informará inmediatamente de la finalización del mandato y de los motivos para ello a la autoridad de vigilancia del mercado pertinente del Estado miembro en el que esté establecido y, en su caso, al organismo notificado.',
      }),
    ],
  },
  {
    id: 'qz_103',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_23',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según los apartados 1, 2 y 5 del artículo 23, ¿qué comprobaciones e indicaciones debe realizar todo IMPORTADOR antes de introducir en el mercado de la Unión un sistema de IA de alto riesgo fabricado en un tercer país, y durante cuánto tiempo debe conservar copia del certificado y de la declaración UE de conformidad?',
    options: [
      'Comprobar únicamente que el proveedor extranjero posea una sociedad filial en cualquier país de la OCDE y conservar las facturas comerciales durante un período obligatorio de tres años a efectos meramente aduaneros.',
      'Exigir la entrega íntegra del código fuente original del sistema al despachar la mercancía en aduanas y remitir copia completa a la Comisión Europea, quedando dispensado de conservar la declaración UE de conformidad.',
      'Revisar exclusivamente que el precio de venta al público figure en euros y archivar la ficha descriptiva de marketing durante cinco años para su exhibición ante la secretaría técnica del Consejo Europeo de Inteligencia Artificial.',
      'Verificar la evaluación de conformidad, marcado CE, documentación técnica, representante e instrucciones; indicar sus datos en el producto y conservar certificados y declaración UE diez años (Art. 23).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 23 impone a los importadores un control de entrada riguroso (Art. 23.1), la prohibición de introducir el sistema en el mercado si consideran que no es conforme o está falsificado (Art. 23.2), la obligación de añadir sus propios datos de identificación y contacto sin ocultar los del proveedor (Art. 23.3), la garantía de condiciones de almacenamiento o transporte adecuadas (Art. 23.4) y la conservación durante 10 años de copia del certificado, instrucciones y declaración UE de conformidad (Art. 23.5).',
    enterpriseLesson:
      'Si tu empresa importa software o hardware con IA de alto riesgo desde fuera del EEE, debes auditar el dossier de conformidad antes de la primera venta y archivar la Declaración UE e instrucciones durante 10 años (Art. 23.5).',
    citations: [
      makeCitation({
        id: 'art_23.p1',
        targetType: 'paragraph',
        articleId: 'art_23',
        paragraphId: 'art_23.p1',
        displayLabel: 'Art. 23.1, 23.3 y 23.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Antes de introducir en el mercado un sistema de IA de alto riesgo, los importadores se asegurarán de que el proveedor de dicho sistema de IA haya llevado a cabo el procedimiento de evaluación de la conformidad pertinente, de que el proveedor haya elaborado la documentación técnica... de que el sistema lleve el marcado CE requerido y vaya acompañado de la declaración UE de conformidad y de las instrucciones de uso, y de que el proveedor haya designado a un representante autorizado.',
      }),
    ],
  },
  {
    id: 'qz_104',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_24',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Un distribuidor de software empresarial en España detecta que un sistema de IA de alto riesgo que tiene en catálogo carece del marcado CE o de la declaración UE de conformidad. Según los apartados 1 y 2 del artículo 24, ¿puede comercializarlo mientras el proveedor tramita los papeles?',
    options: [
      'No: el artículo 24.2 prohíbe comercializar el sistema hasta que sea conforme; además, si presenta riesgo, debe informar al proveedor o importador y a la autoridad de vigilancia del mercado correspondiente.',
      'Sí: el artículo 24.3 prevé un período de carencia de seis meses para que el distribuidor liquide el stock mientras el proveedor completa la evaluación de conformidad y registra el sistema en la base de datos de la UE.',
      'Sí: puede comercializarlo siempre que incorpore una cláusula de exoneración en las condiciones de venta y aplique una bonificación económica al responsable del despliegue hasta la obtención formal del marcado CE.',
      'No: debe asumir directamente la posición jurídica de proveedor en virtud del artículo 25 y realizar la evaluación de conformidad a su propia costa en un plazo improrrogable de treinta días naturales desde la detección.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 24.1 exige al distribuidor verificar antes de comercializar el sistema que lleva el marcado CE, va acompañado de copia de la declaración UE de conformidad y de las instrucciones de uso, y que el proveedor y el importador han cumplido sus deberes de identificación. El artículo 24.2 le prohíbe taxativamente comercializarlo si tiene motivos para considerar que no es conforme.',
    enterpriseLesson:
      'Los resellers, partners e integradores B2B deben incluir un checklist obligatorio del Art. 24.1 (marcado CE + Declaración UE Anexo V + instrucciones Art. 13) antes de dar de alta cualquier solución de alto riesgo en su catálogo comercial.',
    citations: [
      makeCitation({
        id: 'art_24.p2',
        targetType: 'paragraph',
        articleId: 'art_24',
        paragraphId: 'art_24.p2',
        displayLabel: 'Art. 24.1 y 24.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando un distribuidor considere o tenga motivos para considerar, sobre la base de la información que obre en su poder, que un sistema de IA de alto riesgo no es conforme con los requisitos establecidos en la sección 2, no comercializará el sistema de IA de alto riesgo hasta que dicho sistema haya sido puesto en conformidad.',
      }),
    ],
  },
  {
    id: 'qz_105',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_25',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Cuando un responsable del despliegue o distribuidor pasa a ser considerado nuevo PROVEEDOR de un sistema de IA de alto riesgo en virtud del artículo 25.1 (por cambio de marca, modificación sustancial o cambio a finalidad de alto riesgo), ¿qué obligaciones impone el artículo 25.2 al proveedor inicial y qué límite establece?',
    options: [
      'El proveedor inicial mantiene la condición de proveedor solidario durante tres años y debe asumir las sanciones administrativas, aun cuando prohibiese expresamente en su licencia comercial el desvío hacia usos de alto riesgo.',
      'El proveedor inicial está obligado a transferir sin coste alguno la titularidad de todas las patentes y derechos de propiedad intelectual del modelo al nuevo proveedor, quedando sin efecto las cláusulas previas sobre uso previsto.',
      'El proveedor inicial dejará de ser considerado proveedor y cooperará facilitando información y acceso técnico necesario, salvo que hubiera especificado claramente que su sistema no debía transformarse en alto riesgo (Art. 25.2).',
      'El proveedor inicial cesa de inmediato en sus obligaciones sin deber alguno de cooperación o suministro de documentación técnica al nuevo titular, debiendo este reentrenar un modelo alternativo desde cero sin asistencia técnica.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 25.2 establece dos reglas clave: (1) el proveedor inicial deja de ser considerado proveedor de ese sistema específico pero está obligado a cooperar estrechamente con el nuevo proveedor facilitándole documentación técnica y asistencia; y (2) esta obligación de cooperación NO se aplicará cuando el proveedor inicial haya especificado claramente que su sistema de IA no debe transformarse en un sistema de IA de alto riesgo y, por tanto, no entra en la obligación de entregar documentación.',
    enterpriseLesson:
      'Si eres proveedor de un sistema de IA de riesgo mínimo o general y NO quieres verte obligado por el Art. 25.2 a dar soporte regulatorio de alto riesgo a clientes que desvíen tu producto hacia el Anexo III, prohíbe expresamente en tus Términos de Uso y ficha técnica su transformación en un sistema de alto riesgo.',
    citations: [
      makeCitation({
        id: 'art_25.p5',
        targetType: 'paragraph',
        articleId: 'art_25',
        paragraphId: 'art_25.p5',
        displayLabel: 'Art. 25.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'En las circunstancias a que se refiere el apartado 1, el proveedor que haya introducido inicialmente en el mercado o puesto en servicio el sistema de IA dejará de ser considerado proveedor de ese sistema de IA específico a efectos del presente Reglamento. Dicho proveedor inicial cooperará estrechamente con los nuevos proveedores y pondrá a su disposición la información necesaria y facilitará el acceso técnico y otro tipo de asistencia que cabe esperar razonablemente... El presente apartado no se aplicará en aquellos casos en que el proveedor inicial haya especificado claramente que su sistema de IA no debe transformarse en un sistema de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_106',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_25',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'En el caso de sistemas de IA de alto riesgo que sean componentes de seguridad de productos regulados por la legislación del Anexo I, Sección A (como maquinaria o dispositivos médicos), ¿quién es considerado proveedor del sistema de IA de alto riesgo según el artículo 25.3?',
    options: [
      'El integrador de software o el importador local que distribuyó la máquina en el Estado miembro, quedando el fabricante industrial del producto completamente exento de las responsabilidades del proveedor establecidas en el artículo 16.',
      'El organismo notificado que realizó la evaluación de conformidad del producto sectorial del Anexo I, asumiendo una responsabilidad fiduciaria de proveedor sustituto mientras la máquina permanezca en servicio en la Unión Europea.',
      'El responsable del despliegue que adquiere y opera la máquina en sus instalaciones productivas, al ser quien parametriza y activa operativamente el componente de seguridad algorítmico durante la fase de producción industrial.',
      'El fabricante del producto será considerado proveedor del sistema de IA si este se introduce en el mercado o se pone en servicio con el nombre o marca comercial del fabricante del producto, asumiendo las obligaciones del Art. 16.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 25.3 concentra la responsabilidad en el fabricante final del producto regulado por el Anexo I, Sección A, cuando el sistema de IA se comercializa junto con el producto bajo el nombre o marca comercial del fabricante del producto (o se pone en servicio después bajo su marca), garantizando un único responsable frente a las autoridades.',
    enterpriseLesson:
      'Los fabricantes OEM de dispositivos médicos o maquinaria industrial que integran módulos de IA de terceros bajo la marca del fabricante OEM asumen legalmente el rol de Proveedor del sistema de IA de alto riesgo (Art. 25.3), por lo que deben exigir a su proveedor de componentes de IA acuerdos escritos de suministro técnico (Art. 25.4).',
    citations: [
      makeCitation({
        id: 'art_25.p6',
        targetType: 'paragraph',
        articleId: 'art_25',
        paragraphId: 'art_25.p6',
        displayLabel: 'Art. 25.3 y 25.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'En el caso de los sistemas de IA de alto riesgo que sean componentes de seguridad de productos a los que sean aplicables los actos legislativos de armonización de la Unión enumerados en el anexo I, sección A, el fabricante del producto será considerado proveedor del sistema de IA de alto riesgo y estará sujeto a las obligaciones a que se refiere el artículo 16 en cualquiera de las circunstancias siguientes...',
      }),
    ],
  },
  {
    id: 'qz_107',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_26',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa usuaria (responsable del despliegue) está utilizando un sistema de IA de alto riesgo y observa durante la vigilancia de su funcionamiento (Art. 26.5) que el sistema puede presentar un riesgo para la salud, la seguridad o los derechos fundamentales (en el sentido del Art. 79.1). ¿Qué debe hacer según el artículo 26.5?',
    options: [
      'Continuar utilizando el sistema registrando la anomalía en la auditoría interna anual, avisando únicamente al proveedor en la siguiente reunión comercial de mantenimiento para no interrumpir la operativa empresarial.',
      'Informar sin demora indebida al proveedor o distribuidor y a la autoridad de vigilancia del mercado competente, y suspender de forma inmediata la utilización del sistema de conformidad con el artículo 26.5.',
      'Modificar internamente los hiperparámetros o el código fuente del sistema de IA sin consultar al proveedor, comunicando los cambios a la autoridad laboral en un plazo no superior a quince días hábiles de plazo.',
      'Mantener el sistema plenamente operativo pero remitir un aviso confidencial a la Comisión Europea, quedando dispensada de avisar a la autoridad de vigilancia mientras no concurra una lesión corporal efectiva.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 26.5 obliga a los responsables del despliegue a vigilar el funcionamiento del sistema de alto riesgo sobre la base de las instrucciones de uso: si tienen motivos para considerar que su uso puede dar lugar a que presente un riesgo del artículo 79.1, informarán sin demora indebida al proveedor o distribuidor y a la autoridad de vigilancia del mercado, y suspenderán la utilización del sistema.',
    enterpriseLesson:
      'Los protocolos internos del responsable del despliegue (Art. 26.5) deben facultar al supervisor humano a suspender inmediatamente la ejecución del sistema de IA si detecta desviaciones de riesgo o incidentes graves.',
    citations: [
      makeCitation({
        id: 'art_26.p5',
        targetType: 'paragraph',
        articleId: 'art_26',
        paragraphId: 'art_26.p5',
        displayLabel: 'Art. 26.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando los responsables del despliegue tengan motivos para considerar que la utilización del sistema de IA de alto riesgo con arreglo a las instrucciones puede dar lugar a que dicho sistema presente un riesgo en el sentido del artículo 79, apartado 1, informarán sin demora indebida al proveedor o al distribuidor y a la autoridad de vigilancia del mercado pertinente, y suspenderán la utilización de ese sistema.',
      }),
    ],
  },
  {
    id: 'qz_108',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_26',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un ayuntamiento (autoridad pública) va a desplegar un sistema de IA de alto riesgo del Anexo III para evaluar solicitudes de prestaciones de asistencia social (Anexo III.5.a). Antes de utilizar el sistema, el ayuntamiento consulta la base de datos de la UE (Art. 71) y comprueba que el proveedor NO ha registrado aún el sistema. Según el artículo 26.8, ¿puede el ayuntamiento utilizarlo?',
    options: [
      'Sí: las administraciones locales gozan de una dispensa institucional de seis meses para utilizar sistemas de servicios sociales sin comprobar la base de datos de la UE si media una declaración municipal de urgencia social.',
      'Sí: el artículo 26.8 autoriza el uso provisional siempre que el contrato público se haya formalizado bajo la Ley de Contratos del Sector Público y el proveedor aporte una declaración responsable ante el registro de licitadores.',
      'No: el artículo 26.8 prohíbe utilizar el sistema si no ha sido registrado en la base de datos de la UE (Art. 71), debiendo la autoridad pública cumplir sus deberes del Art. 49 e informar de la omisión al proveedor o distribuidor.',
      'No: el ayuntamiento debe asumir la condición de organismo notificado del sistema y efectuar de oficio la auditoría del Anexo VII antes de cualquier despliegue, remitiendo el expediente sancionador a la Junta de Gobierno Local.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 26.8 impone un doble deber a los desplegadores del sector público: (1) inscribirse ellos mismos y registrar el uso del sistema en la base de datos de la UE conforme al artículo 49.3, y (2) abstenerse taxativamente de utilizar cualquier sistema de alto riesgo del Anexo III que no haya sido previamente inscrito por su proveedor en la base de datos del artículo 71, informando de ello al proveedor o distribuidor.',
    enterpriseLesson:
      'Si eres proveedor de soluciones de IA para el sector público, ten presente que ninguna administración pública podrá poner en producción tu sistema ni abonar el hito de puesta en marcha si no consta previamente tu registro del Art. 49.1 en la base de datos de la UE (Art. 26.8).',
    citations: [
      makeCitation({
        id: 'art_26.p8',
        targetType: 'paragraph',
        articleId: 'art_26',
        paragraphId: 'art_26.p8',
        displayLabel: 'Art. 26.8 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los responsables del despliegue de sistemas de IA de alto riesgo que sean autoridades públicas, o instituciones, órganos u organismos de la Unión cumplirán las obligaciones de inscripción en el registro a que se refiere el artículo 49. Si dichas autoridades, instituciones, órganos u organismos constatan que el sistema de IA de alto riesgo que prevén utilizar no ha sido inscrito en la base de datos de la UE a que se refiere el artículo 71, no utilizarán dicho sistema e informarán de ello al proveedor o al distribuidor.',
      }),
    ],
  },
  {
    id: 'qz_109',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_26',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué obligación de transparencia directa frente a los ciudadanos impone el artículo 26.11 a los responsables del despliegue de sistemas de IA de alto riesgo enumerados en el Anexo III que tomen decisiones o ayuden a tomar decisiones relacionadas con personas físicas?',
    options: [
      'Informar directamente a las personas físicas de que están sujetas a la utilización del sistema de IA de alto riesgo al adoptar o apoyar decisiones que las afecten, sin perjuicio del artículo 50 (Art. 26.11).',
      'Publicar íntegramente la arquitectura de pesos del modelo y la matriz de confusión en el boletín oficial o portal de transparencia con anterioridad a la adopción de resoluciones que afecten al ciudadano.',
      'Recabar preceptivamente el consentimiento expreso notarial de cada ciudadano afectado antes de introducir sus datos de entrada en el sistema, bajo pena de nulidad radical de todo el procedimiento decisorio.',
      'Entregar una memoria económica sobre el coste por consulta y abonar una compensación patrimonial directa a cada interesado evaluado por el sistema de IA según el baremo del Consejo General del Poder Judicial.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 26.11 establece que los responsables del despliegue de sistemas de IA de alto riesgo enumerados en el Anexo III que tomen decisiones o ayuden a tomar decisiones relacionadas con personas físicas informarán a las personas físicas de que están sujetas a la utilización del sistema de IA de alto riesgo. Esta obligación complementa el derecho posterior a obtener una explicación del artículo 86.',
    enterpriseLesson:
      'En procesos de selección de personal, admisión educativa, concesión de créditos o seguros de salud/vida, debes informar al candidato o solicitante de que su solicitud será evaluada con apoyo de un sistema de IA de alto riesgo (Art. 26.11).',
    citations: [
      makeCitation({
        id: 'art_26.p11',
        targetType: 'paragraph',
        articleId: 'art_26',
        paragraphId: 'art_26.p11',
        displayLabel: 'Art. 26.11 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Sin perjuicio de lo dispuesto en el artículo 50, los responsables del despliegue de sistemas de IA de alto riesgo enumerados en el anexo III que tomen decisiones o ayuden a tomar decisiones relacionadas con personas físicas informarán a las personas físicas de que están sujetas a la utilización del sistema de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_110',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_27',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según las letras a) a f) del artículo 27.1, ¿cuáles son los seis elementos que debe contener toda Evaluación del Impacto en los Derechos Fundamentales (FRIA), y cómo se relaciona con la Evaluación de Impacto en la Protección de Datos (EIPD del Art. 35 RGPD) según el artículo 27.4?',
    options: [
      'Consta de: auditoría salarial de desarrolladores, balance fiscal, catálogo de hardware, directrices de precios, póliza aseguradora y actas sindicales; y según el artículo 27.4 deroga y sustituye a la EIPD del artículo 35 del RGPD.',
      'Consta de: procesos de uso, período/frecuencia, colectivos afectados, riesgos de perjuicio, supervisión y gobernanza ante riesgos (Art. 27.1); y complementa a la EIPD del Art. 35 RGPD sin duplicar trámites (Art. 27.4).',
      'Consta de: desglose de hiperparámetros de red neuronal, registro continuo de temperatura de servidores, pruebas de penetración externa y márgenes comerciales; siendo incompatible y excluyente con la EIPD del RGPD.',
      'Consta únicamente de una memoria financiera y un formulario de autoevaluación firmado por el comité de empresa; eximiendo de evaluación si se cuenta con certificación de calidad ISO 9001 notificada a la autoridad de control.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 27.1 detalla los seis bloques obligatorios de la FRIA (procesos, duración/frecuencia, colectivos afectados, riesgos específicos para derechos fundamentales, supervisión humana y medidas de mitigación/reclamación), y el artículo 27.4 evita duplicidades disponiendo que la FRIA complementará la EIPD realizada en virtud del artículo 35 del RGPD.',
    enterpriseLesson:
      'No elabores la FRIA (Art. 27) y la EIPD (Art. 35 RGPD) en silos desconectados: diseña una plantilla integrada donde la FRIA amplíe la EIPD existente con los 6 elementos del Art. 27.1 y notifícala a la AESIA mediante el cuestionario automatizado (Art. 27.3 y 27.5).',
    citations: [
      makeCitation({
        id: 'art_27.p1',
        targetType: 'paragraph',
        articleId: 'art_27',
        paragraphId: 'art_27.p1',
        displayLabel: 'Art. 27.1(a)-(f) y 27.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'A tal fin, la evaluación constará de los siguientes elementos: a) una descripción de los procesos del responsable del despliegue en los que se utilizará el sistema de IA de alto riesgo... b) una descripción del período de tiempo durante el cual se prevé utilizar cada sistema de IA de alto riesgo y con qué frecuencia... c) las categorías de personas físicas y colectivos que puedan verse afectados... d) los riesgos específicos de perjuicio... e) una descripción de la aplicación de las medidas de supervisión humana... f) las medidas que se adoptarán en caso de que se materialicen dichos riesgos.',
      }),
    ],
  },
  {
    id: 'qz_111',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_28',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'En la arquitectura del Capítulo III, Sección 4 (artículos 28 a 39), ¿qué diferencia existe entre una «autoridad notificante» y un «organismo notificado»?',
    options: [
      'La «autoridad notificante» es una firma privada auditora de software comercial; mientras que el «organismo notificado» es el órgano colegiado europeo que aprueba reglamentos delegados y recomendaciones no vinculantes sobre sistemas biométricos.',
      'La «autoridad notificante» es un tribunal contencioso-administrativo competente para imponer multas del artículo 99; mientras que el «organismo notificado» es el comité ético interno designado por el proveedor del sistema de IA de alto riesgo.',
      'La «autoridad notificante» se encarga de recepcionar las declaraciones UE de conformidad de los importadores; mientras que el «organismo notificado» es el servicio aduanero que autoriza la entrada de componentes de seguridad en la frontera comunitaria.',
      'La «autoridad notificante» (Art. 28) es el organismo público estatal responsable de evaluar, designar y supervisar organismos; el «organismo notificado» (Arts. 29-31) es la entidad acreditada para auditar y certificar la conformidad por terceros.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 28 obliga a cada Estado miembro a designar o establecer al menos una autoridad notificante pública (que puede apoyarse en el organismo nacional de acreditación, como ENAC en España, según el Art. 28.2), la cual evalúa, designa y supervisa a los organismos de evaluación de la conformidad que, una vez notificados a la Comisión y demás Estados miembros sin objeciones (Art. 30), operan como «organismos notificados».',
    enterpriseLesson:
      'Distingue entre la Autoridad Notificante pública (Art. 28), el Organismo Nacional de Acreditación (ENAC) y el Organismo Notificado certificador (Art. 31) al que contratas cuando tu sistema requiere evaluación del Anexo VII.',
    citations: [
      makeCitation({
        id: 'art_28.p1',
        targetType: 'paragraph',
        articleId: 'art_28',
        paragraphId: 'art_28.p1',
        displayLabel: 'Art. 28.1 y Art. 30 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cada Estado miembro designará o establecerá al menos una autoridad notificante responsable de establecer y aplicar los procedimientos necesarios para la evaluación, designación y notificación de los organismos de evaluación de la conformidad y para su supervisión.',
      }),
    ],
  },
  {
    id: 'qz_112',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_31',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una consultora tecnológica diseñó y entrenó el sistema de IA de alto riesgo de un cliente, y ahora pretende actuar también como «organismo notificado» para emitir el certificado oficial de evaluación de la conformidad del Anexo VII sobre ese mismo sistema. ¿Lo permite el artículo 31?',
    options: [
      'No: el artículo 31 (apartados 4 a 6) impone estricta independencia, prohibiendo que el organismo notificado, sus directivos o evaluadores hayan sido diseñadores, proveedores, instaladores o propietarios del sistema evaluado.',
      'Sí: el artículo 31.7 autoriza expresamente que la entidad consultora actúe como certificadora siempre que aplique una muralla china documental y facture los honorarios técnicos y de auditoría mediante sociedades distintas.',
      'Sí: se permite de forma excepcional si el cliente formaliza una renuncia contractual a reclamaciones y el sistema de IA cuenta con un seguro de responsabilidad civil suscrito ante una entidad financiera supervisada europea.',
      'Solo se prohíbe cuando el cliente final pertenezca al sector público, permitiéndose la simultaneidad de consultoría y certificación cuando el sistema de IA se comercialice entre operadores estrictamente empresariales privados.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 31 (apartados 4, 5 y 6) impone un régimen estricto de independencia, imparcialidad y ausencia de conflictos de intereses a los organismos notificados: no pueden tener vínculos económicos con el proveedor evaluado ni con sus competidores, ni haber participado directamente en el diseño, desarrollo, comercialización o uso de los sistemas de IA que evalúan.',
    enterpriseLesson:
      'Nunca contrates como consultor de diseño o implementación del Anexo IV al mismo entidad/grupo que vaya a actuar como tu Organismo Notificado certificador bajo el Anexo VII (Art. 31.4-6).',
    citations: [
      makeCitation({
        id: 'art_31.p4',
        targetType: 'paragraph',
        articleId: 'art_31',
        paragraphId: 'art_31.p4',
        displayLabel: 'Art. 31.4, 31.5 y 31.6 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los organismos notificados serán independientes del proveedor del sistema de IA de alto riesgo en relación con el cual realicen actividades de evaluación de la conformidad. Los organismos notificados también serán independientes de cualquier otro operador que tenga un interés económico en los sistemas de IA de alto riesgo que se evalúen, así como de cualquier competidor del proveedor.',
      }),
    ],
  },
  {
    id: 'qz_113',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_33',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Cuando un organismo notificado subcontrata tareas específicas relacionadas con la evaluación de la conformidad o recurre a una filial según el artículo 33, ¿qué requisitos deben cumplirse?',
    options: [
      'Puede subcontratar libremente sin comunicar la identidad del tercero al proveedor auditado, trasladando toda la responsabilidad jurídica y aseguradora al subcontratista técnico externo designado mediante contrato privado.',
      'Debe mediar acuerdo previo con el proveedor, garantizar que la filial o subcontratista cumpla los requisitos del artículo 31 y asumir el organismo notificado la plena responsabilidad de las tareas ejecutadas (Art. 33).',
      'El artículo 33 prohíbe taxativamente cualquier subcontratación o recurso a empresas filiales, obligando a realizar todas las pruebas de verificación algorítmica exclusivamente con personal laboral propio en plantilla.',
      'Solo requiere autorización previa de la Comisión Europea, quedando el organismo notificado eximido de supervisar la competencia técnica de las filiales que radiquen fuera del territorio aduanero de la Unión Europea.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 33 regula las filiales y la subcontratación por parte de los organismos notificados: exige que el subcontratista/filial cumpla todos los requisitos de competencia, independencia y ciberseguridad del artículo 31, que medie el acuerdo previo del proveedor auditado (Art. 33.2), que las listas de subcontratistas sean públicas y que el organismo notificado mantenga la plena responsabilidad sobre todas las tareas subcontratadas (Art. 33.3).',
    enterpriseLesson:
      'Como proveedor auditado bajo el Anexo VII, tienes derecho legal a conocer y autorizar previamente (Art. 33.2) cualquier subcontratación de ensayos técnicos por parte de tu organismo notificado.',
    citations: [
      makeCitation({
        id: 'art_33.p2',
        targetType: 'paragraph',
        articleId: 'art_33',
        paragraphId: 'art_33.p2',
        displayLabel: 'Art. 33.1, 33.2 y 33.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las actividades solo podrán ser subcontratadas o realizadas por una filial previo acuerdo con el proveedor. Los organismos notificados pondrán a disposición del público una lista de sus filiales. Los organismos notificados asumirán la plena responsabilidad de las tareas realizadas por los subcontratistas o las filiales, con independencia de dónde tengan su sede.',
      }),
    ],
  },
  {
    id: 'qz_114',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_34',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 34.2, ¿cómo deben ejercer sus actividades los organismos notificados para no perjudicar la competitividad de los proveedores, especialmente de las pymes y startups?',
    options: [
      'Aplicando auditorías uniformes de duración no inferior a seis meses y exigiendo aranceles fijos homogéneos con independencia de los recursos financieros, dimensión organizativa o grado de madurez técnica del proveedor auditado.',
      'Eximiendo de toda tasa de evaluación a multinacionales tecnológicas consolidadas y repercutiendo el coste operativo en las pequeñas y medianas empresas mediante un recargo solidario obligatorio fijado por la autoridad nacional.',
      'Evitando cargas innecesarias y adaptando los trámites al tamaño, estructura y complejidad del sistema, atendiendo especialmente a los intereses de las pymes y empresas emergentes al fijar sus tasas de evaluación (Art. 34.2).',
      'Rechazando las solicitudes de certificación procedentes de empresas emergentes de reciente creación hasta que demuestren al menos tres ejercicios contables auditados con beneficios de explotación netos en el mercado europeo.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 34.2 obliga a los organismos notificados a realizar las evaluaciones de conformidad evitando cargas innecesarias y adaptándose al tamaño de la empresa, su estructura y la complejidad del sistema, teniendo en cuenta específicamente la situación de las pymes y startups al establecer las tasas y al respetar los plazos del artículo 43.',
    enterpriseLesson:
      'Las pymes y startups tienen derecho a tarifas proporcionales y reducidas en las evaluaciones de conformidad ante organismos notificados (Arts. 34.2 y 62.4).',
    citations: [
      makeCitation({
        id: 'art_34.p2',
        targetType: 'paragraph',
        articleId: 'art_34',
        paragraphId: 'art_34.p2',
        displayLabel: 'Art. 34.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los organismos notificados ejercerán sus actividades con arreglo a los procedimientos de evaluación de la conformidad establecidos en el artículo 43, evitando cargas innecesarias para los proveedores y teniendo debidamente en cuenta el tamaño de la empresa, el sector en que opera, su estructura y el grado de complejidad del sistema de IA de que se trate.',
      }),
    ],
  },
  {
    id: 'qz_115',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_40',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué efecto jurídico fundamental otorga el artículo 40.1 a los sistemas de IA de alto riesgo o modelos GPAI que sean conformes con las «normas armonizadas» europeas (CEN/CENELEC) cuyas referencias se hayan publicado en el Diario Oficial de la Unión Europea?',
    options: [
      'Quedan automáticamente dispensados de obtener el marcado CE y de elaborar la documentación técnica del Anexo IV, bastando con incorporar el logotipo de CEN/CENELEC en el manual comercial impreso de cara a los clientes.',
      'Obtienen una exención permanente frente a las prohibiciones absolutas del artículo 5 y una subvención europea directa equivalente al cincuenta por ciento de los costes computacionales soportados durante el entrenamiento.',
      'La conformidad con normas armonizadas traslada de oficio toda la responsabilidad civil y penal por fallos algorítmicos hacia los comités europeos de normalización que redactaron el texto de la especificación técnica.',
      'Se presume su conformidad con los requisitos del Capítulo III, Sección 2 (o Arts. 53 y 55 para modelos GPAI), en la medida en que dichas normas armonizadas publicadas en el DOUE abarquen tales exigencias (Art. 40.1).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 40.1 consagra el mecanismo de «presunción de conformidad» del Nuevo Marco Legislativo europeo: aplicar las normas armonizadas elaboradas por CEN/CENELEC a petición de la Comisión y publicadas en el DOUE otorga presunción legal de cumplimiento de los requisitos técnicos de los artículos 8 a 15 (y de los artículos 53 y 55 para GPAI).',
    enterpriseLesson:
      'Alinear tu ingeniería de IA con las normas armonizadas CEN/CENELEC (JTC 21) publicadas en el DOUE bajo el Art. 40 es la vía más segura y rápida para demostrar el cumplimiento técnico ante inspectores y auditores.',
    citations: [
      makeCitation({
        id: 'art_40.p1',
        targetType: 'paragraph',
        articleId: 'art_40',
        paragraphId: 'art_40.p1',
        displayLabel: 'Art. 40.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Se presumirá que los sistemas de IA de alto riesgo o los modelos de IA de uso general que sean conformes con normas armonizadas o partes de ellas cuyas referencias se hayan publicado en el Diario Oficial de la Unión Europea con arreglo al Reglamento (UE) n.º 1025/2012 son conformes con los requisitos establecidos en la sección 2 del presente capítulo o, según proceda, con las obligaciones establecidas en el capítulo V, secciones 2 y 3, en la medida en que dichas normas abarquen tales requisitos u obligaciones.',
      }),
    ],
  },
  {
    id: 'qz_116',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_41',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 41, ¿en qué supuestos puede la Comisión Europea adoptar mediante actos de ejecución «especificaciones comunes» técnicas que otorguen también presunción de conformidad, y qué ocurre si un proveedor decide no aplicar esas especificaciones comunes?',
    options: [
      'La Comisión puede adoptarlas si faltan normas armonizadas o hay retrasos indebidos; y los proveedores que no las apliquen deben justificar en su documentación técnica que sus soluciones técnicas cumplen con un nivel equivalente (Art. 41).',
      'La Comisión puede adoptarlas en cualquier momento con carácter vinculante y ejecutivo general; y los proveedores que no las sigan quedan inhabilitados automáticamente para comercializar sistemas de IA dentro del mercado interior comunitario.',
      'Solo pueden adoptarse a propuesta unánime de los parlamentos de los Estados miembros; y los proveedores no tienen obligación alguna de justificar soluciones alternativas en su documentación técnica al tratarse de guías voluntarias.',
      'Pueden adoptarse únicamente para regular precios y costes de computación; y los proveedores que opten por desobedecerlas deben abonar una tasa compensatoria anual ante la Oficina Europea de Inteligencia Artificial como compensación.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 41.1 faculta a la Comisión para adoptar especificaciones comunes como mecanismo de respaldo si las organizaciones europeas de normalización no entregan a tiempo las normas armonizadas del artículo 40. Según el artículo 41.4, si un proveedor no aplica las especificaciones comunes, debe justificar debidamente que ha adoptado soluciones técnicas de nivel al menos equivalente.',
    enterpriseLesson:
      'Si no aplicas una norma armonizada (Art. 40) o especificación común (Art. 41), la carga de la prueba recae sobre tu empresa: deberás demostrar y documentar equivalencia técnica rigurosa (Art. 41.4).',
    citations: [
      makeCitation({
        id: 'art_41.p4',
        targetType: 'paragraph',
        articleId: 'art_41',
        paragraphId: 'art_41.p4',
        displayLabel: 'Art. 41.1, 41.3 y 41.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los proveedores que no cumplan las especificaciones comunes a que se refiere el apartado 1 justificarán debidamente que han adoptado soluciones técnicas que cumplen los requisitos establecidos en la sección 2 o, según proceda, las obligaciones establecidas en el capítulo V, secciones 2 y 3, en un nivel al menos equivalente.',
      }),
    ],
  },
  {
    id: 'qz_117',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_42',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 42, ¿con qué requisito técnico específico de los sistemas de IA de alto riesgo se presume que cumple un sistema que ha sido certificado o para el que se ha expedido una declaración de conformidad en el marco de un esquema europeo de certificación de la ciberseguridad adoptado con arreglo al Reglamento (UE) 2019/881 (Cybersecurity Act)?',
    options: [
      'Con las obligaciones de gobernanza de datos y mitigación de sesgos del artículo 10, quedando eximido de auditar los conjuntos de entrenamiento, validación y prueba previstos para el modelo algorítmico.',
      'Con el requisito de explicabilidad y transparencia e instrucciones de uso regulado en el artículo 13, dispensando al proveedor de detallar los límites funcionales ante los responsables del despliegue.',
      'Con los requisitos de ciberseguridad establecidos en el artículo 15 del Reglamento, en la medida en que el certificado de ciberseguridad o declaración de conformidad abarquen dichos requisitos (Art. 42.2).',
      'Con las medidas de supervisión humana y botón de parada de emergencia previstas en el artículo 14, delegando la salvaguarda de control operativo íntegramente en los protocolos del cortafuegos de red.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 42.2 establece una sinergia directa con el Reglamento de Ciberseguridad (UE) 2019/881 (esquemas ENISA): los sistemas de IA de alto riesgo certificados bajo un esquema europeo de certificación de ciberseguridad gozan de presunción de conformidad respecto a los requisitos de ciberseguridad del artículo 15 en la medida en que el certificado los cubra. Asimismo, el artículo 42.1 presume el cumplimiento del artículo 10.4 cuando el sistema ha sido entrenado y probado con datos del espacio geográfico/funcional previsto.',
    enterpriseLesson:
      'Reutiliza las certificaciones europeas de ciberseguridad (Reglamento 2019/881 / esquemas ENISA) para acreditar por presunción legal el cumplimiento del Art. 15 en tu expediente del Anexo IV (Art. 42.2).',
    citations: [
      makeCitation({
        id: 'art_42.p2',
        targetType: 'paragraph',
        articleId: 'art_42',
        paragraphId: 'art_42.p2',
        displayLabel: 'Art. 42.1 y 42.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Se presumirá que los sistemas de IA de alto riesgo que hayan sido certificados o para los que se haya expedido una declaración de conformidad en el marco de un esquema de ciberseguridad de conformidad con el Reglamento (UE) 2019/881 del Parlamento Europeo y del Consejo y cuyas referencias se hayan publicado en el Diario Oficial de la Unión Europea cumplen los requisitos de ciberseguridad establecidos en el artículo 15 del presente Reglamento.',
      }),
    ],
  },
  {
    id: 'qz_118',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_43',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un proveedor desarrolla un sistema biométrico de alto riesgo incluido en el Anexo III, punto 1 (por ejemplo, reconocimiento de emociones fuera del ámbito laboral/educativo o identificación biométrica remota permitida). Según el artículo 43.1, ¿cuándo está OBLIGADO a acudir a un organismo notificado (Anexo VII) en lugar de realizar la evaluación por control interno (Anexo VI)?',
    options: [
      'En todos los supuestos de biometría sin excepción alguna, ya que el artículo 43.1 prohíbe de manera absoluta que los sistemas del Anexo III punto 1 acudan al procedimiento ordinario de control interno basado en el Anexo VI del Reglamento.',
      'Cuando no existan normas armonizadas ni especificaciones comunes, se hayan aplicado solo en parte, o la norma se publicase con restricciones; si aplicó normas completas, puede elegir control interno del Anexo VI (Art. 43.1).',
      'Únicamente cuando el sistema biométrico vaya a ser desplegado por autoridades policiales en espacios públicos, pudiendo acudir a la evaluación interna en el resto de casos aunque no aplique normas armonizadas europeas.',
      'Solo cuando la autoridad nacional notificante determine de forma discrecional que la empresa proveedora carece de solvencia técnica suficiente para emitir por sí misma la declaración UE de conformidad del Anexo V.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 43.1 establece un régimen dual para el punto 1 del Anexo III (biometría): si el proveedor aplica íntegramente normas armonizadas (Art. 40) o especificaciones comunes (Art. 41) que cubran todos los requisitos, puede elegir entre el control interno del Anexo VI o la evaluación por organismo notificado del Anexo VII; pero si no ha aplicado dichas normas, solo las ha aplicado parcialmente o tienen restricciones, está OBLIGADO a seguir el procedimiento del Anexo VII con un organismo notificado.',
    enterpriseLesson:
      'En sistemas biométricos del Anexo III punto 1, aplicar al 100 % las normas armonizadas CEN/CENELEC (Art. 40) te permite realizar la evaluación de conformidad por control interno (Anexo VI) sin depender de un organismo notificado (Art. 43.1).',
    citations: [
      makeCitation({
        id: 'art_43.p1',
        targetType: 'paragraph',
        articleId: 'art_43',
        paragraphId: 'art_43.p1',
        displayLabel: 'Art. 43.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Al demostrar la conformidad de un sistema de IA de alto riesgo con los requisitos establecidos en la sección 2, el proveedor seguirá el procedimiento de evaluación de la conformidad establecido en el anexo VII en cualquiera de los casos siguientes: i) cuando no existan las normas armonizadas a que se refiere el artículo 40... ii) cuando el proveedor haya aplicado solo una parte de la norma armonizada; iii) cuando no existan las especificaciones comunes a que se refiere el artículo 41; iv) cuando una o más de las normas armonizadas a que se refiere el inciso i) se hayan publicado con una restricción.',
      }),
    ],
  },
  {
    id: 'qz_119',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_43',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 43.4, ¿en qué dos situaciones un sistema de IA de alto riesgo que ya se ha sometido a un procedimiento de evaluación de la conformidad debe someterse a un NUEVO procedimiento de evaluación de la conformidad?',
    options: [
      'Únicamente cuando se produzca una rotación societaria del equipo directivo del proveedor o se modifique el domicilio fiscal dentro del mismo Estado miembro, requiriendo una nueva auditoría del Anexo VII en treinta días.',
      'De forma automática cada doce meses naturales desde la primera puesta en servicio, quedando invalidadas de pleno derecho las certificaciones previas si no se reitera íntegramente el procedimiento de evaluación ante el organismo notificado.',
      'Cada vez que el sistema registre más de cincuenta mil peticiones de inferencia algorítmica mensuales o amplíe su infraestructura de servidores en la nube a una nueva región geográfica dentro del Espacio Económico Europeo.',
      'Cuando sea objeto de una modificación sustancial (con independencia de si se distribuye o continúa en uso), sin que los cambios predeterminados en la evaluación inicial de sistemas de aprendizaje continuo tengan tal consideración.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 43.4 dispone que los sistemas de IA de alto riesgo que ya se hayan sometido a evaluación de la conformidad se someterán a un nuevo procedimiento de evaluación de la conformidad en caso de que sean objeto de una modificación sustancial (Art. 3.23), respetando la salvaguardia para cambios predeterminados en sistemas con aprendizaje continuo.',
    enterpriseLesson:
      'Integra un filtro de "Impacto en Conformidad IA (Art. 43.4)" dentro de tu comité de Control de Cambios de Ingeniería (Change Advisory Board): cualquier cambio no predeterminado que altere la arquitectura, los requisitos de los Arts. 8–15 o la finalidad prevista exige reevaluar la conformidad.',
    citations: [
      makeCitation({
        id: 'art_43.p4',
        targetType: 'paragraph',
        articleId: 'art_43',
        paragraphId: 'art_43.p4',
        displayLabel: 'Art. 43.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los sistemas de IA de alto riesgo que ya se hayan sometido a un procedimiento de evaluación de la conformidad se someterán a un nuevo procedimiento de evaluación de la conformidad en caso de que sean objeto de una modificación sustancial, con independencia de que el sistema modificado esté destinado a ser distribuido ulteriormente o continúe siendo utilizado por el actual responsable del despliegue.',
      }),
    ],
  },
  {
    id: 'qz_120',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_44',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 44.1, ¿cuál es el período máximo de validez de los certificados expedidos por los organismos notificados de conformidad con el Anexo VII antes de requerir una nueva evaluación para su prórroga?',
    options: [
      'El período indicado en el certificado, sin exceder de cuatro años para sistemas del Anexo I y de cinco años para sistemas del Anexo III, prorrogable por períodos equivalentes tras una nueva evaluación de conformidad (Art. 44.1).',
      'Un plazo único e improrrogable de diez años para todos los sistemas de IA de alto riesgo, transcurrido el cual el sistema decae en el dominio público general de la Unión y queda exento de cualquier certificación técnica posterior.',
      'Una validez indefinida y permanente desde su emisión, supeditada exclusivamente a que el proveedor mantenga el pago puntual de la tasa anual de mantenimiento corporativo fijada por la autoridad nacional notificante.',
      'Un período máximo de dos años para productos del Anexo I y de tres años para el Anexo III, prohibiéndose cualquier prórroga y debiendo tramitarse siempre un expediente de certificación completamente nuevo desde el inicio.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 44.1 fija la vigencia máxima de los certificados emitidos por organismos notificados con arreglo al Anexo VII en un máximo de 4 años para sistemas del Anexo I y de 5 años para sistemas del Anexo III, renovables por períodos equivalentes previa nueva evaluación.',
    enterpriseLesson:
      'Si tu sistema de alto riesgo requiere certificado de Organismo Notificado (Anexo VII), programa su renovación en el calendario regulatorio cada 4 años (Anexo I) o 5 años (Anexo III) según el Art. 44.1.',
    citations: [
      makeCitation({
        id: 'art_44.p1',
        targetType: 'paragraph',
        articleId: 'art_44',
        paragraphId: 'art_44.p1',
        displayLabel: 'Art. 44.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los certificados expedidos por los organismos notificados de conformidad con el anexo VII tendrán validez durante el período que en ellos se indique. Dicho período no excederá de cuatro años en el caso de los sistemas de IA regidos por el anexo I, y de cinco años en el caso de los sistemas de IA regidos por el anexo III.',
      }),
    ],
  },
  {
    id: 'qz_121',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_44',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué debe hacer un organismo notificado según el artículo 44.2 cuando comprueba que un sistema de IA de alto riesgo certificado deja de cumplir los requisitos de la Sección 2?',
    options: [
      'Imponer de forma inmediata una sanción económica directa de hasta treinta y cinco millones de euros y ordenar el precinto policial judicial de las instalaciones de computación del proveedor sin otorgar plazo alguno de subsanación.',
      'Mantener la plena validez del certificado sin alteraciones hasta el agotamiento natural de su vigencia quinquenal, limitándose a trasladar un informe confidencial no vinculante a la Comisión Europea para su examen futuro.',
      'Suspenderá, retirará o restringirá el certificado bajo el principio de proporcionalidad, salvo que el proveedor garantice el cumplimiento mediante medidas correctoras adecuadas en el plazo fijado por el organismo (Art. 44.2).',
      'Asumir de oficio la gestión técnica del sistema algorítmico y reprogramar sus pesos en un plazo perentorio de setenta y dos horas, facturando los costes operativos de ingeniería directamente al responsable del despliegue.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 44.2 faculta al organismo notificado para suspender, retirar o restringir el certificado bajo el principio de proporcionalidad si el sistema deja de cumplir los requisitos y el proveedor no aplica las medidas correctoras adecuadas en el plazo concedido. El artículo 45 garantiza que exista un procedimiento de recurso contra las decisiones de los organismos notificados.',
    enterpriseLesson:
      'Mantener el certificado del Anexo VII exige superar la vigilancia periódica del organismo notificado; ante cualquier requerimiento de subsanación (Art. 44.2), ejecuta las medidas correctoras dentro del plazo o interpon recurso motivado (Art. 45).',
    citations: [
      makeCitation({
        id: 'art_44.p2',
        targetType: 'paragraph',
        articleId: 'art_44',
        paragraphId: 'art_44.p2',
        displayLabel: 'Art. 44.2 y Art. 45 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando un organismo notificado compruebe que un sistema de IA deja de cumplir los requisitos establecidos en la sección 2, teniendo en cuenta el principio de proporcionalidad, suspenderá o retirará el certificado expedido o le impondrá restricciones, a no ser que se garantice el cumplimiento de dichos requisitos mediante medidas correctoras adecuadas que adopte el proveedor del sistema dentro de un plazo adecuado fijado por el organismo notificado.',
      }),
    ],
  },
  {
    id: 'qz_122',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_46',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Ante una emergencia sanitaria o catástrofe medioambiental urgente, ¿permite el artículo 46 que una autoridad de vigilancia del mercado autorice temporalmente la introducción en el mercado o puesta en servicio de un sistema específico de IA de alto riesgo en su territorio ANTES de haber completado el procedimiento ordinario de evaluación de la conformidad del artículo 43?',
    options: [
      'No: el artículo 46 prohíbe de forma terminante cualquier excepción de puesta en servicio provisional sin marcado CE y certificado firme, aun en supuestos de declaración formal de estado de alarma o emergencia medioambiental.',
      'Sí: cualquier empresa privada proveedora puede autodeclarar una situación de urgencia técnica comercial y desplegar libremente el sistema sin intervención ni notificación a las autoridades durante un plazo de seis meses.',
      'Solo si media una Decisión ejecutiva previa adoptada por unanimidad en el Consejo de la Unión Europea y el sistema biométrico ha sido validado formalmente por la Agencia Europea de la Guardia de Fronteras y Costas (Frontex).',
      'Sí: previa solicitud justificada, puede autorizarlo por tiempo limitado por motivos de seguridad pública, salud, medio ambiente o infraestructuras clave, mientras se tramita la evaluación de conformidad ordinaria (Art. 46).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 46 contempla una válvula de escape excepcional por razones urgentes de interés público (seguridad pública, protección de la vida y la salud, medio ambiente o infraestructuras clave): la autoridad de vigilancia del mercado puede conceder una autorización temporal en su territorio mientras se completan sin demora indebida los procedimientos del artículo 43, informando a la Comisión y a los demás Estados miembros.',
    enterpriseLesson:
      'La autorización de emergencia del Art. 46 es temporal, nacional, sujeta a control de la Comisión Europea y exige que la evaluación de conformidad del Art. 43 se complete en paralelo sin demora indebida.',
    citations: [
      makeCitation({
        id: 'art_46.p1',
        targetType: 'paragraph',
        articleId: 'art_46',
        paragraphId: 'art_46.p1',
        displayLabel: 'Art. 46.1 y 46.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'No obstante lo dispuesto en el artículo 43 y previa solicitud debidamente justificada, cualquier autoridad de vigilancia del mercado podrá autorizar que se introduzcan en el mercado o se pongan en servicio sistemas específicos de IA de alto riesgo en el territorio del Estado miembro de que se trate, por razones excepcionales de seguridad pública o de protección de la vida y la salud de las personas, la protección del medio ambiente y la protección de activos industriales y de infraestructuras clave.',
      }),
    ],
  },
  {
    id: 'qz_123',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_47',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 47 y el Anexo V, ¿qué elementos adicionales de protección de datos y propiedad intelectual debe contener la «declaración UE de conformidad» firmada por el proveedor de un sistema de IA de alto riesgo?',
    options: [
      'El Anexo V exige adjuntar una auditoría patrimonial firmada por el director financiero y una renuncia formal irrevocable a los derechos morales de autor sobre el código fuente del algoritmo ante la Oficina de Propiedad Intelectual.',
      'El Anexo V punto 5 exige que, si el sistema conlleva tratamiento de datos personales, incluya una declaración expresa de que cumple los Reglamentos (UE) 2016/679 (RGPD) y (UE) 2018/1725 y la Directiva (UE) 2016/680 (Art. 47).',
      'Se exige incorporar el desglose detallado de costes por licencia de usuario y una certificación notarial de no concurrencia desleal suscrita conjuntamente por el proveedor de IA y todos sus distribuidores en el mercado europeo.',
      'Debe incluir una cláusula de confidencialidad que prohíba a las autoridades supervisoras de mercado inspeccionar las bases de datos de entrenamiento y una exoneración total de responsabilidad por fallos de ciberseguridad.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 47 regula la declaración UE de conformidad (que debe conservarse durante 10 años y redactarse como declaración única si aplican varios actos de la Unión), y el Anexo V especifica sus 8 puntos obligatorios, destacando en el punto 5 la declaración expresa de cumplimiento del RGPD y normativa europea de protección de datos cuando el sistema de alto riesgo conlleve el tratamiento de datos personales.',
    enterpriseLesson:
      'En la Declaración UE de Conformidad (Anexo V), el proveedor certifica bajo su exclusiva responsabilidad (Art. 47.4) no solo el cumplimiento técnico del Reglamento de IA, sino también la conformidad del sistema con el RGPD (Anexo V punto 5).',
    citations: [
      makeCitation({
        id: 'art_47.p1',
        targetType: 'paragraph',
        articleId: 'art_47',
        paragraphId: 'art_47.p1',
        displayLabel: 'Art. 47 y Anexo V punto 5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El proveedor elaborará una declaración UE de conformidad escrita, legible por máquina y firmada física o electrónicamente para cada sistema de IA de alto riesgo y la mantendrá a disposición de las autoridades nacionales competentes durante diez años a partir de la introducción en el mercado o la puesta en servicio del sistema de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_124',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_48',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Un proveedor comercializa como servicio en la nube (SaaS puramente digital, sin embalaje físico) un sistema de IA de alto riesgo para selección de personal. ¿Cómo debe colocar el marcado CE según los apartados 2, 3 y 4 del artículo 48?',
    options: [
      'Mediante un marcado CE digital accesible en la interfaz de acceso o por código legible por máquina u otros medios electrónicos, seguido del número del organismo notificado solo si intervino en la evaluación (Art. 48).',
      'Queda totalmente exento de colocar el marcado CE al tratarse de software distribuido en la nube sin soporte material físico, bastando con citar el número de registro mercantil en las condiciones generales de contratación.',
      'Debe remitir obligatoriamente una placa metálica troquelada por correo postal a la sede física de cada uno de los responsables del despliegue que contraten la suscripción al servicio informático en el territorio de la Unión.',
      'Debe insertar el marcado CE exclusivamente en los comentarios internos del código fuente compilado, prohibiendo que los operadores humanos o las autoridades de vigilancia puedan visualizarlo en la interfaz de usuario.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 48.2 regula específicamente el marcado CE digital para los sistemas de IA de alto riesgo suministrados digitalmente: debe poder accederse fácilmente a él a través de la interfaz de usuario desde la que se accede al sistema o mediante un código legible por máquina u otros medios electrónicos. Cuando haya intervenido un organismo notificado, el marcado CE irá seguido de su número de identificación (Art. 48.4).',
    enterpriseLesson:
      'En productos SaaS de alto riesgo, incorpora el marcado CE digital y el enlace a la Declaración UE de Conformidad (Art. 47) tanto en la interfaz de usuario como en los metadatos legibles por máquina de la API.',
    citations: [
      makeCitation({
        id: 'art_48.p2',
        targetType: 'paragraph',
        articleId: 'art_48',
        paragraphId: 'art_48.p2',
        displayLabel: 'Art. 48.2 y 48.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando los sistemas de IA de alto riesgo se suministren digitalmente, solo se utilizará un marcado CE digital si se puede acceder fácilmente a él a través de la interfaz desde la que se accede a dicho sistema o a través de un código legible por máquina fácilmente accesible u otros medios electrónicos.',
      }),
    ],
  },
  {
    id: 'qz_125',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_49',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 49 y el Anexo VIII, ¿qué tres perfiles o supuestos distintos tienen obligación de inscribirse en la base de datos de la UE del artículo 71 en relación con los sistemas del Anexo III (con las especialidades de los apartados 4 y 5 para infraestructuras críticas y fuerzas del orden/migración)?',
    options: [
      '1) Desarrolladores individuales de software libre; 2) consumidores que formulen reclamaciones contra algoritmos de precios; y 3) auditores de ciberseguridad privada antes de emitir informes técnicos no vinculantes para empresas cotizadas en bolsa (Art. 49.1).',
      '1) Fabricantes de microchips y hardware de computación; 2) distribuidores mayoristas de servidores de procesamiento gráfico; y 3) comités de empresa de entidades financieras reguladas antes de autorizar el despliegue operativo en sus plantillas laborales (Art. 49).',
      '1) Proveedores de sistemas del Anexo III (Art. 49.1); 2) proveedores que invoquen la excepción del Art. 6.3 considerando que no es de alto riesgo (Art. 49.2); y 3) desplegadores que sean autoridades públicas o actúen en su nombre antes de utilizarlo (Art. 49.3).',
      '1) Organismos de normalización CEN/CENELEC; 2) aseguradoras que comercialicen pólizas de responsabilidad algorítmica; y 3) agencias de publicidad que difundan sistemas de recomendación comercial en plataformas digitales europeas según el artículo 49.4 del Reglamento.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 49 estructura el deber de inscripción en la base de datos de la UE en tres apartados complementarios que corresponden a las Secciones A, B y C del Anexo VIII: proveedores de alto riesgo (49.1), proveedores que invocan la excepción del artículo 6.3 (49.2) y desplegadores que sean autoridades públicas o actúen en su nombre (49.3), mientras que el punto 2 del Anexo III (infraestructuras críticas) se registra a nivel nacional (49.4) y los puntos 1, 6 y 7 (biometría/policía/migración) en una sección segura no pública de la base de datos de la UE (49.4 párrafo segundo y Art. 71.4).',
    enterpriseLesson:
      'Recuerda las tres vías del Anexo VIII: Sección A (proveedor de alto riesgo), Sección B (proveedor que se acoge a la excepción del Art. 6.3) y Sección C (desplegador público o contratista que actúa en nombre del sector público).',
    citations: [
      makeCitation({
        id: 'art_49.p1',
        targetType: 'paragraph',
        articleId: 'art_49',
        paragraphId: 'art_49.p1',
        displayLabel: 'Art. 49.1, 49.2 y 49.3 y Anexo VIII · Reglamento (UE) 2024/1689',
        exactQuote:
          'Antes de introducir en el mercado o poner en servicio un sistema de IA de alto riesgo enumerado en el anexo III, con excepción de los sistemas de IA de alto riesgo a que se refiere el punto 2 del anexo III, el proveedor o, en su caso, el representante autorizado se inscribirá y registrará su sistema en la base de datos de la UE a que se refiere el artículo 71.',
      }),
    ],
  },
  {
    id: 'qz_126',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_29',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según los artículos 29 y 30, ¿cómo solicita un organismo de evaluación de la conformidad su notificación y cuándo puede empezar a operar válidamente como organismo notificado?',
    options: [
      'Enviando una solicitud electrónica directa a la secretaría del Consejo Europeo de IA; pudiendo operar de inmediato sin esperar objeciones si abona una fianza de responsabilidad civil de cien mil euros depositada ante el Banco Central Europeo.',
      'Publicando una declaración jurada de solvencia técnica en su portal corporativo; adquiriendo la condición de organismo notificado a los quince días hábiles de la publicación sin intervención de las autoridades notificantes de los Estados miembros.',
      'Solicitándolo a la autoridad notificante de su Estado miembro; podrá operar si la Comisión y los Estados miembros no formulan objeciones en dos semanas (con certificado de acreditación) o en dos meses (sin acreditación) (Arts. 29 y 30).',
      'Mediante inscripción previa en el registro mercantil provincial y comunicación a la Agencia Tributaria; quedando habilitado para certificar sistemas de IA una vez transcurrido un período de silencio administrativo positivo de diez días naturales.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 29 regula la solicitud ante la autoridad notificante nacional y el artículo 30 establece el procedimiento de notificación electrónica a la Comisión y a los demás Estados miembros, exigiendo superar el plazo de control sin objeciones (2 semanas con certificado de acreditación nacional o 2 meses con pruebas documentales equivalentes, Art. 30.4) antes de recibir su número de identificación (Art. 32) y poder operar.',
    enterpriseLesson:
      'Verifica siempre en la base de datos europea NANDO (Art. 32.2) que el organismo notificado tiene asignado su número de identificación oficial específicamente para el Reglamento (UE) 2024/1689.',
    citations: [
      makeCitation({
        id: 'art_30.p4',
        targetType: 'paragraph',
        articleId: 'art_30',
        paragraphId: 'art_30.p4',
        displayLabel: 'Art. 29, Art. 30.4 y Art. 32 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El organismo en cuestión solo podrá realizar las actividades de un organismo notificado si ni la Comisión ni los demás Estados miembros han formulado objeciones en el plazo de dos semanas a partir de la notificación realizada por la autoridad notificante, en caso de que incluya el certificado de acreditación a que se refiere el artículo 29, apartado 2, o en el plazo de dos meses a partir de la notificación, en caso de que incluya las pruebas documentales a que se refiere el artículo 29, apartado 3.',
      }),
    ],
  },
  {
    id: 'qz_127',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_31',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué requisitos de seguro, secreto profesional y ciberseguridad impone el artículo 31 (apartados 9, 10 y 11) a todos los organismos notificados?',
    options: [
      'Contratar una póliza colectiva de seguro de accidentes laborales de oficina, publicar en acceso abierto los informes de auditoría del código fuente y delegar la ciberseguridad íntegramente en la plataforma de computación del cliente auditado.',
      'Quedar legalmente dispensados de suscribir seguros de responsabilidad al gozar de inmunidad jurisdiccional comunitaria, y remitir copias íntegras de los secretos comerciales de los proveedores a los competidores del sector que lo soliciten.',
      'Depositar un aval bancario solidario ante la Oficina de Patentes de la Unión, someter al personal a pruebas periódicas de polígrafo de seguridad y almacenar los modelos algorítmicos auditados en servidores aislados sin conexión a la red.',
      'Suscribir un seguro de responsabilidad civil adecuado (Art. 31.9), guardar secreto profesional sobre información y secretos comerciales (Art. 31.10) y aplicar procedimientos internos con un nivel adecuado de ciberseguridad (Art. 31.11).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 31 exige en sus apartados 9, 10 y 11 que los organismos notificados cuenten con seguro de responsabilidad civil, mantengan estricto secreto profesional protegiendo la propiedad industrial y los secretos comerciales del proveedor auditado, y dispongan de procedimientos y controles de ciberseguridad para custodiar la documentación técnica y el código o datos que examinan.',
    enterpriseLesson:
      'Tus secretos comerciales, arquitecturas de modelos y datasets entregados a un Organismo Notificado están protegidos por el deber legal de secreto profesional y ciberseguridad del Art. 31.10-11 y del Art. 78.',
    citations: [
      makeCitation({
        id: 'art_31.p10',
        targetType: 'paragraph',
        articleId: 'art_31',
        paragraphId: 'art_31.p10',
        displayLabel: 'Art. 31.9, 31.10 y 31.11 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El personal de los organismos notificados estará sujeto al secreto profesional con respecto a toda la información que obtenga en el ejercicio de sus funciones en virtud del presente Reglamento, excepto en relación con las autoridades notificantes del Estado miembro en que ejerza sus actividades. Se protegerán los derechos de propiedad intelectual e industrial, así como los secretos comerciales.',
      }),
    ],
  },
  {
    id: 'qz_128',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_35',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según los artículos 35, 36 y 37, ¿qué ocurre cuando una autoridad notificante constata (o cuando la Comisión investiga y confirma) que un organismo notificado ya no cumple los requisitos del artículo 31 o está incumpliendo sus obligaciones?',
    options: [
      'La autoridad notificante restringirá, suspenderá o retirará la notificación según la gravedad, avisando a la Comisión y Estados miembros; y los expedientes se transferirán a otro organismo notificado a elección del proveedor (Arts. 36 y 37).',
      'Todos los certificados de conformidad expedidos previamente por el organismo decaen de forma retroactiva e inmediata, debiendo los proveedores retirar del mercado europeo todos los sistemas de IA comercializados durante los últimos tres años.',
      'El organismo notificado dispondrá de una dispensa automática de dos años de carencia para subsanar sus deficiencias sin que la autoridad notificante ni la Comisión puedan restringir o suspender sus actividades certificadoras de mercado.',
      'La autoridad notificante nacional carece de competencias sancionadoras, debiendo elevar el caso a la Sala de lo Contencioso del Tribunal de Justicia de la Unión Europea para que dicte sentencia firme antes de suspender la notificación.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 35 obliga a las autoridades notificantes a supervisar continuamente a los organismos notificados; el artículo 36 regula la restricción, suspensión o retirada de la notificación y la transferencia ordenada de los expedientes a otro organismo notificado elegido por el proveedor; y el artículo 37 faculta a la Comisión para investigar de oficio o previa denuncia la competencia de un organismo notificado y ordenar medidas correctoras o la retirada de la notificación.',
    enterpriseLesson:
      'Si tu organismo notificado sufre una suspensión o retirada de su designación (Art. 36.3), tienes derecho como proveedor a solicitar la transferencia íntegra de tus expedientes a otro organismo notificado acreditado.',
    citations: [
      makeCitation({
        id: 'art_36.p1',
        targetType: 'paragraph',
        articleId: 'art_36',
        paragraphId: 'art_36.p1',
        displayLabel: 'Arts. 35, 36 y 37 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Cuando una autoridad notificante haya constatado o se le haya informado de que un organismo notificado ya no cumple los requisitos establecidos en el artículo 31, o de que está incumpliendo sus obligaciones, la autoridad notificante restringirá, suspenderá o retirará la notificación, según proceda, en función de la gravedad del incumplimiento de tales requisitos u obligaciones.',
      }),
    ],
  },
  {
    id: 'qz_129',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_39',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      '¿Bajo qué condición permite el artículo 39 que los organismos de evaluación de la conformidad establecidos en un TERCER PAÍS (fuera de la Unión Europea) realicen las actividades de los organismos notificados en virtud del Reglamento (UE) 2024/1689?',
    options: [
      'Cualquier entidad certificadora extranjera puede actuar libremente en la Unión si cuenta con sede social en un país miembro de la Organización Mundial del Comercio y dispone de un seguro mercantil de cobertura global.',
      'Únicamente si la Unión ha celebrado un acuerdo con ese tercer país (acuerdo de reconocimiento mutuo) y el organismo cumple los requisitos del artículo 31 o garantiza un nivel de cumplimiento equivalente (Art. 39).',
      'El artículo 39 prohíbe de forma absoluta e inderogable que cualquier entidad establecida fuera del Espacio Económico Europeo intervenga como organismo notificado, no admitiéndose excepciones mediante tratados.',
      'Basta con que el organismo del tercer país designe un representante legal en un Estado miembro y abone la tasa arancelaria comunitaria de homologación fijada anualmente por la Dirección General de Comercio de la UE.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 39 establece que los organismos de evaluación de la conformidad establecidos con arreglo a la legislación de un tercer país con el que la Unión haya celebrado un acuerdo (acuerdo de reconocimiento mutuo) podrán ser autorizados a realizar las actividades de los organismos notificados en virtud del Reglamento, siempre que cumplan los requisitos del artículo 31 o equivalentes.',
    enterpriseLesson:
      'Un certificado emitido por una entidad auditora de EE. UU., Reino Unido, Suiza o Japón NO equivale a un certificado de Organismo Notificado europeo salvo que medie un Acuerdo de Reconocimiento Mutuo (ARM) específico de la UE bajo el Art. 39.',
    citations: [
      makeCitation({
        id: 'art_39.p1',
        targetType: 'paragraph',
        articleId: 'art_39',
        paragraphId: 'art_39.p1',
        displayLabel: 'Art. 39 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los organismos de evaluación de la conformidad establecidos con arreglo a la legislación de un tercer país con el que la Unión haya celebrado un acuerdo podrán ser autorizados a realizar las actividades de los organismos notificados en virtud del presente Reglamento, siempre que cumplan los requisitos establecidos en el artículo 31 o garanticen un nivel equivalente de cumplimiento.',
      }),
    ],
  },
  {
    id: 'qz_130',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_11',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Al redactar la documentación técnica conforme al Anexo IV (Art. 11), el equipo de ingeniería pregunta qué debe incluirse en el punto 2, letra d) del Anexo IV respecto a las «hojas de datos» (datasheets) de los conjuntos de datos utilizados. ¿Qué exige dicho apartado?',
    options: [
      'Únicamente el volumen agregado en gigabytes del archivo comprimido de entrenamiento y una declaración jurada del director técnico certificando que los ficheros de datos no contienen virus ni malware informático de ningún tipo.',
      'La copia íntegra en texto plano de todos los registros individuales de datos personales sin anonimizar, debiendo integrarse en el expediente técnico para su consulta pública directa en el portal de datos abiertos de la Comisión.',
      'Hojas de datos que describan metodologías y técnicas de entrenamiento, procedencia, alcance y características de los datos, cómo se obtuvieron y seleccionaron, procedimientos de etiquetado y métodos de limpieza (Anexo IV.2.d).',
      'Exclusivamente el listado de facturas mercantiles emitidas por los proveedores de almacenamiento en nube y los acuerdos de confidencialidad de nivel de servicio suscritos con los proveedores de infraestructura informática.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Anexo IV, punto 2, letra d), exige incluir hojas de datos (datasheets for datasets) detallando metodologías de entrenamiento, procedencia, alcance y características principales de los conjuntos de datos, cómo se obtuvieron y seleccionaron, los procedimientos de etiquetado (data labeling) y las metodologías de limpieza y preprocesamiento.',
    enterpriseLesson:
      'Adopta en tu pipeline de datos el estándar de «Datasheets for Datasets» cubriendo procedencia, selección, protocolo de etiquetado y limpieza para cumplir de forma nativa el Anexo IV.2.d).',
    citations: [
      makeCitation({
        id: 'anx_IV.p7',
        targetType: 'annex',
        articleId: 'anx_IV',
        paragraphId: 'anx_IV.p7',
        displayLabel: 'Anexo IV, punto 2(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'cuando proceda, las hojas de datos que describan todas las metodologías de entrenamiento y las técnicas utilizadas, así como la información general sobre los conjuntos de datos utilizados, incluida información sobre su procedencia, su alcance y sus características principales; cómo se obtuvieron y seleccionaron los datos; los procedimientos de etiquetado (por ejemplo, para el aprendizaje supervisado) y las metodologías de limpieza de datos (por ejemplo, detección de valores atípicos);',
      }),
    ],
  },
  {
    id: 'qz_131',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_43',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el Anexo VI (Procedimiento de evaluación de la conformidad fundamentado en un control interno), ¿cuáles son los tres pasos verificables que debe realizar el propio proveedor para superar la evaluación de conformidad en los sistemas de los puntos 2 a 8 del Anexo III?',
    options: [
      '1) Abonar una tasa municipal de actividad empresarial; 2) publicar un resumen comercial en la prensa del Estado miembro; y 3) contratar una auditoría contable externa obligatoria ante el Registro Mercantil antes de la comercialización.',
      '1) Solicitar autorización preceptiva previa al Delegado de Protección de Datos; 2) congelar el entrenamiento algorítmico durante un período de prueba de seis meses; y 3) remitir el manual técnico completo a la Inspección de Trabajo.',
      '1) Obtener la convalidación del código fuente ante la Oficina de Patentes; 2) suscribir una póliza de seguro de responsabilidad civil por producto defectuoso; y 3) someter el modelo a informe vinculante del comité de empresa laboral.',
      '1) Verificar el sistema de gestión de la calidad (Art. 17); 2) examinar la documentación técnica del Anexo IV frente a los requisitos de la Sección 2; y 3) verificar la coherencia del diseño/desarrollo y vigilancia poscomercialización (Anexo VI).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El Anexo VI estructura el procedimiento de evaluación de la conformidad basado en el control interno en tres puntos precisos (puntos 2, 3 y 4 del Anexo VI): verificación del sistema de gestión de calidad (Art. 17), examen de la documentación técnica frente a los requisitos de los artículos 8 a 15, y verificación de la coherencia entre el proceso real de diseño/desarrollo y vigilancia poscomercialización (Art. 72) con la documentación técnica.',
    enterpriseLesson:
      'Para superar el control interno del Anexo VI con garantías ante una inspección posterior de la AESIA, documenta un acta interna firmada que acredite la verificación de los 3 bloques del Anexo VI (Calidad Art. 17 + Expediente Anexo IV + Coherencia MLOps y Vigilancia Art. 72).',
    citations: [
      makeCitation({
        id: 'anx_VI.p2',
        targetType: 'annex',
        articleId: 'anx_VI',
        displayLabel: 'Anexo VI, puntos 2, 3 y 4 · Reglamento (UE) 2024/1689',
        exactQuote:
          '2. El proveedor verificará que el sistema de gestión de la calidad establecido cumple los requisitos del artículo 17. 3. El proveedor examinará la información contenida en la documentación técnica a fin de evaluar la conformidad del sistema de IA con los requisitos esenciales pertinentes establecidos en el capítulo III, sección 2. 4. El proveedor también verificará que el proceso de diseño y desarrollo del sistema de IA y su vigilancia poscomercialización a que se refiere el artículo 72 son coherentes con la documentación técnica.',
      }),
    ],
  },
  {
    id: 'qz_132',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_43',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'En el procedimiento de evaluación de la conformidad con intervención de un organismo notificado regulado en el Anexo VII, ¿qué facultades de inspección técnica tiene el organismo notificado durante el examen de la documentación técnica (punto 4 del Anexo VII)?',
    options: [
      'Acceso completo a datasets de entrenamiento, validación y prueba (por APIs o acceso remoto), facultad de realizar o exigir pruebas adicionales, y acceso al código fuente previa solicitud motivada cuando otras vías sean insuficientes (Anexo VII.4).',
      'Solo puede revisar un resumen ejecutivo no confidencial de diez páginas, quedándole expresamente prohibido solicitar acceso a los conjuntos de datos de prueba o verificar los registros de entrenamiento del modelo de IA bajo sanción comunitaria.',
      'Tiene facultad de incautar físicamente los servidores del proveedor y reprogramar directamente los pesos de la red neuronal sin necesidad de justificación técnica motivada, asumiendo la condición de nuevo proveedor del sistema certificado.',
      'Puede inspeccionar únicamente los balances financieros y las pólizas de seguros del proveedor, delegando cualquier examen técnico de los algoritmos y del código fuente en una empresa auditora externa elegida por la autoridad notificante.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El Anexo VII, punto 4 (apartados 4.3, 4.4 y 4.5), dota al organismo notificado de amplias facultades de auditoría técnica: acceso completo a los conjuntos de datos de entrenamiento, validación y prueba (4.3), facultad de realizar pruebas directamente o exigir pruebas adicionales (4.4) y acceso motivado al código fuente del sistema de IA cuando las demás pruebas y verificaciones no hayan bastado para demostrar la conformidad (4.5).',
    enterpriseLesson:
      'Cuando te sometas a una evaluación de conformidad del Anexo VII ante un organismo notificado, prepara un entorno técnico seguro (clean room / API de auditoría) con acceso a los datasets de entrenamiento/prueba y, si se requiere motivadamente, al repositorio de código fuente.',
    citations: [
      makeCitation({
        id: 'anx_VII.p16',
        targetType: 'annex',
        articleId: 'anx_VII',
        paragraphId: 'anx_VII.p16',
        displayLabel: 'Anexo VII, puntos 4.3, 4.4 y 4.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Para evaluar la conformidad de un sistema de IA de alto riesgo con los requisitos establecidos en el capítulo III, sección 2, tras haber agotado todos los demás medios razonables para verificar la conformidad y cuando haya resultado ser insuficiente, se concederá al organismo notificado, previa solicitud motivada, acceso al código fuente del sistema de IA.',
      }),
    ],
  },
];

