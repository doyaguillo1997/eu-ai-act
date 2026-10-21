import { makeCitation } from './legal-enrichment-data.mjs';

export const QUIZ_BANK_PART1 = [
  // =========================================================================
  // BLOQUE A: PRÁCTICAS PROHIBIDAS Y ALCANCE (Arts. 1-5, Títulos I y II)
  // IDs: qz_49 a qz_74 (26 preguntas)
  // =========================================================================
  {
    id: 'qz_49',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_1',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 1.1 y el Considerando 1 del Reglamento (UE) 2024/1689, ¿pueden los Estados miembros imponer de forma unilateral restricciones nacionales adicionales al desarrollo, la comercialización o la utilización de sistemas de IA por considerarlos arriesgados?',
    options: [
      'No: el Reglamento garantiza la libre circulación transfronteriza de mercancías y servicios basados en la IA en el mercado interior, impidiendo que los Estados miembros impongan restricciones salvo que el propio Reglamento lo autorice expresamente.',
      'Sí, cualquier municipio o comunidad autónoma puede prohibir libremente cualquier sistema de IA comercializado con marcado CE.',
      'Sí, porque se trata de una directiva de mínimos que cada parlamento nacional debe transponer libremente.',
      'Solo pueden hacerlo respecto a sistemas de IA desarrollados dentro de su propio territorio nacional.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 1.1, interpretado junto con el Considerando 1, establece un marco jurídico uniforme basado en el artículo 114 del TFUE (mercado interior) que impide a los Estados miembros imponer restricciones al desarrollo, la comercialización o la utilización de sistemas de IA, a menos que el Reglamento lo autorice expresamente (como ocurre en el Art. 2.11 para normas laborales más favorables o el Art. 5.5 para restringir aún más la identificación biométrica remota).',
    enterpriseLesson:
      'Un sistema de IA conforme con el Reglamento (UE) 2024/1689 goza de pasaporte regulatorio en los 27 Estados miembros sin que puedan exigírsele homologaciones nacionales adicionales.',
    citations: [
      makeCitation({
        id: 'art_1.p1',
        targetType: 'paragraph',
        articleId: 'art_1',
        paragraphId: 'art_1.p1',
        displayLabel: 'Art. 1.1 y Considerando 1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El objetivo del presente Reglamento es mejorar el funcionamiento del mercado interior y promover la adopción de una inteligencia artificial (IA) centrada en el ser humano y fiable, garantizando al mismo tiempo un elevado nivel de protección de la salud, la seguridad y los derechos fundamentales consagrados en la Carta.',
      }),
    ],
  },
  {
    id: 'qz_50',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Aunque el artículo 2.1(c) extiende el Reglamento a proveedores y desplegadores de terceros países cuando los resultados de salida (outputs) se utilizan en la Unión, ¿qué excepción contempla el artículo 2.4 respecto a autoridades públicas de terceros países y organizaciones internacionales?',
    options: [
      'Aplica a cualquier empresa privada extranjera que facture menos de 10 millones de euros.',
      'Excluye únicamente a las agencias tributarias extranjeras.',
      'El Reglamento no se aplica a las autoridades públicas de un tercer país ni a las organizaciones internacionales cuando actúen en el marco de acuerdos de cooperación o tratados internacionales celebrados con la Unión o con sus Estados miembros en el ámbito de la garantía del cumplimiento del Derecho y la cooperación judicial, siempre que ofrezcan garantías adecuadas de protección de los derechos fundamentales.',
      'Excluye a todas las autoridades públicas extranjeras aunque vendan software comercial en el mercado europeo.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 2.4 exceptúa de la regla extraterritorial del artículo 2.1(c) a las autoridades públicas de terceros países y organizaciones internacionales (como Interpol) cuando operen bajo acuerdos de cooperación policial o judicial con la UE o sus Estados miembros, siempre que dichos acuerdos incluyan garantías adecuadas para los derechos fundamentales y las libertades de las personas.',
    enterpriseLesson:
      'Esta excepción del Art. 2.4 es exclusiva para autoridades públicas extranjeras en cooperación policial/judicial; los proveedores privados de terceros países cuyos outputs se usen en la UE siguen plenamente sujetos al Art. 2.1(c).',
    citations: [
      makeCitation({
        id: 'art_2.p4',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p4',
        displayLabel: 'Art. 2.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento no se aplica a las autoridades públicas de un tercer país ni a las organizaciones internacionales cuando entren en el ámbito de aplicación del presente Reglamento con arreglo al apartado 1, siempre que dichas autoridades u organizaciones utilicen sistemas de IA en el marco de acuerdos o tratados internacionales celebrados con la Unión o con uno o varios Estados miembros en el ámbito de la garantía del cumplimiento del Derecho y la cooperación judicial.',
      }),
    ],
  },
  {
    id: 'qz_51',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un contratista tecnológico español desarrolla un sistema de IA de visión por computador inicialmente concebido para defensa militar (excluido por el Art. 2.3), pero posteriormente lo comercializa para vigilancia policial civil y control de accesos en puertos comerciales. ¿Cómo se le aplica el Reglamento según el artículo 2.3 y el Considerando 24?',
    options: [
      'Sigue exento para siempre por haber nacido en un proyecto militar.',
      'Queda exento si el Ministerio de Defensa posee al menos el 10 % del capital del contratista.',
      'Solo se le aplica el artículo 95 de códigos voluntarios.',
      'Queda plenamente sujeto al Reglamento: la exclusión del artículo 2.3 solo ampara sistemas introducidos o utilizados EXCLUSIVAMENTE con fines militares, de defensa o de seguridad nacional; si se comercializa o utiliza para fines civiles, humanitarios o de garantía del cumplimiento del Derecho, se le aplica íntegramente.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 2.3 dispone que el Reglamento no se aplica a los sistemas de IA cuando y en la medida en que se introduzcan en el mercado, se pongan en servicio o se utilicen con o sin modificaciones EXCLUSIVAMENTE con fines militares, de defensa o de seguridad nacional. En cuanto un sistema de doble uso (dual-use) se destina o utiliza para fines civiles o policiales fuera de dichos ámbitos exclusivos, queda sometido al Reglamento.',
    enterpriseLesson:
      'En proyectos de tecnología dual (defensa/civil), separa estrictamente las líneas de producto: cualquier despliegue civil, aeroportuario o policial ordinario activa todas las obligaciones del Reglamento.',
    citations: [
      makeCitation({
        id: 'art_2.p3',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p3',
        displayLabel: 'Art. 2.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento no se aplica a ámbitos que queden fuera del ámbito de aplicación del Derecho de la Unión y no afectará, en ningún caso, a las competencias de los Estados miembros en materia de seguridad nacional... El presente Reglamento no se aplica a los sistemas de IA cuando y en la medida en que se introduzcan en el mercado, se pongan en servicio o se utilicen, con o sin modificaciones, exclusivamente con fines militares, de defensa o de seguridad nacional.',
      }),
    ],
  },
  {
    id: 'qz_52',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'El equipo de I+D de una empresa biotecnológica está entrenando y probando en su laboratorio interno un nuevo modelo de diagnóstico de alto riesgo aún no comercializado. Para validarlo, decide probarlo directamente con pacientes reales en una clínica privada fuera de cualquier sandbox. Según los apartados 6 y 8 del artículo 2, ¿está exenta esa prueba con pacientes reales?',
    options: [
      'No: aunque el artículo 2.8 excluye las actividades de investigación, prueba o desarrollo previas a la introducción en el mercado o puesta en servicio, establece expresamente que "Las pruebas en condiciones reales no estarán cubiertas por dicha exclusión" y deben cumplir el régimen del artículo 60.',
      'Sí, cualquier prueba previa a la emisión de la primera factura comercial está exenta.',
      'Sí, porque el artículo 2.6 exime cualquier actividad realizada por ingenieros con doctorado.',
      'Solo está sujeta si el paciente paga por la consulta.',
    ],
    correctOptionIndex: 0,
    explanation:
      'Mientras que el artículo 2.6 excluye los sistemas/modelos desarrollados y puestos en servicio específicamente con el único fin de la investigación y el desarrollo científicos, el artículo 2.8 excluye las actividades de I+D y prueba de sistemas antes de su comercialización, pero añade una salvedad crítica: "Las pruebas en condiciones reales no estarán cubiertas por dicha exclusión", quedando sujetas al artículo 60 y 61.',
    enterpriseLesson:
      'Los ensayos en laboratorio cerrado están exentos (Art. 2.8), pero en el instante en que pruebas un sistema de alto riesgo con personas reales en condiciones reales fuera de laboratorio, debes cumplir el Art. 60 (plan de pruebas, registro Anexo IX y consentimiento informado).',
    citations: [
      makeCitation({
        id: 'art_2.p8',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p8',
        displayLabel: 'Art. 2.6 y 2.8 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento no se aplica a las actividades de investigación, prueba o desarrollo relativas a sistemas de IA o modelos de IA antes de su introducción en el mercado o su puesta en servicio. Tales actividades se llevarán a cabo con arreglo al Derecho de la Unión aplicable. Las pruebas en condiciones reales no estarán cubiertas por dicha exclusión.',
      }),
    ],
  },
  {
    id: 'qz_53',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué dispone el artículo 2.11 respecto a la facultad de la Unión o de los Estados miembros para regular el uso de sistemas de IA en el ámbito laboral?',
    options: [
      'Prohíbe que los convenios colectivos o leyes laborales nacionales regulen el uso de algoritmos en las empresas.',
      'El Reglamento no impide que la Unión o los Estados miembros mantengan o introduzcan disposiciones legales, reglamentarias o administrativas más favorables para los trabajadores en lo que respecta a la protección de sus derechos en relación con el uso de sistemas de IA por parte de los empleadores, ni que fomenten o permitan convenios colectivos más favorables.',
      'Deroga automáticamente el artículo 64.4.d) del Estatuto de los Trabajadores español sobre información algorítmica.',
      'Solo permite negociar condiciones laborales sobre IA en empresas de más de 5.000 trabajadores.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 2.11 consagra una cláusula expresa de salvaguardia laboral: la armonización del Reglamento no impide que los Estados miembros mantengan o introduzcan normas laborales más protectoras para los trabajadores frente al uso de IA por los empleadores, ni que se pacten convenios colectivos más favorables.',
    enterpriseLesson:
      'En España debes cumplir acumulativamente el Reglamento de IA (Art. 26.7), el RGPD y el Art. 64.4.d) del Estatuto de los Trabajadores (derecho del comité de empresa a ser informado de los parámetros, reglas e instrucciones de los algoritmos laborales).',
    citations: [
      makeCitation({
        id: 'art_2.p11',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p11',
        displayLabel: 'Art. 2.11 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento no impide que la Unión o los Estados miembros mantengan o introduzcan disposiciones legales, reglamentarias o administrativas que sean más favorables para los trabajadores en lo que respecta a la protección de sus derechos en relación con el uso de sistemas de IA por parte de los empleadores, o que fomenten o permitan la aplicación de convenios colectivos que sean más favorables para los trabajadores.',
      }),
    ],
  },
  {
    id: 'qz_54',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Un fotógrafo aficionado utiliza en su domicilio un generador de imágenes por IA para editar fotos de sus vacaciones familiares sin ninguna actividad comercial, profesional ni empresarial. Según el artículo 2.10, ¿qué obligaciones tiene como responsable del despliegue?',
    options: [
      'Debe inscribirse en la base de datos de la UE del artículo 71.',
      'Debe realizar una Evaluación de Impacto en los Derechos Fundamentales (FRIA).',
      'Ninguna obligación como responsable del despliegue: el artículo 2.10 excluye de las obligaciones de los responsables del despliegue a las personas físicas que utilicen sistemas de IA en el ejercicio de una actividad puramente personal de carácter no profesional.',
      'Debe conservar los logs durante 10 años.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 2.10 establece que el Reglamento no se aplica a las obligaciones de los responsables del despliegue que sean personas físicas que utilicen sistemas de IA en el ejercicio de una actividad puramente personal de carácter no profesional (exención doméstica), aunque los proveedores del sistema sí siguen obligados.',
    enterpriseLesson:
      'En cuanto una persona física (autónomo, freelancer o empleado) utiliza un sistema de IA dentro de su actividad económica o profesional, pierde la exención del Art. 2.10 y actúa como responsable del despliegue.',
    citations: [
      makeCitation({
        id: 'art_2.p10',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p10',
        displayLabel: 'Art. 2.10 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento no se aplica a las obligaciones de los responsables del despliegue que sean personas físicas que utilicen sistemas de IA en el ejercicio de una actividad puramente personal de carácter no profesional.',
      }),
    ],
  },
  {
    id: 'qz_55',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_2',
    titleId: 'tit_I',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una comunidad de desarrolladores publica en GitHub un sistema completo de IA bajo licencia libre y de código abierto (MIT) sin monetización. Según el artículo 2.12, ¿en qué tres supuestos NO se aplica la exención para sistemas de IA de código abierto y el sistema queda plenamente sujeto al Reglamento?',
    options: [
      'Cuando esté escrito en Python, cuando supere 10.000 descargas o cuando tenga interfaz gráfica.',
      'Solo cuando el repositorio esté alojado fuera de la Unión Europea.',
      'Únicamente cuando sea utilizado por bancos centrales.',
      'Cuando se introduzca en el mercado o se ponga en servicio como sistema de IA de alto riesgo, o como un sistema de IA al que sea aplicable el artículo 5 (prácticas prohibidas) o el artículo 50 (obligaciones de transparencia específica).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 2.12 exime del Reglamento a los sistemas de IA (distintos de los modelos GPAI, que se rigen por el Art. 53.2) publicados con licencias libres y de código abierto, A MENOS que se introduzcan en el mercado o se pongan en servicio como sistemas de IA de alto riesgo (Cap. III), incurran en prácticas prohibidas del artículo 5, o estén sujetos a las obligaciones de transparencia del artículo 50 (chatbots, generación de contenido sintético, deepfakes, reconocimiento emocional).',
    enterpriseLesson:
      'Distribuir un sistema de IA completo como software libre (open-source) NO te exime si sirve para selección de personal/crédito (alto riesgo), si genera contenido sintético/chatbots (Art. 50) o si incurre en el Art. 5.',
    citations: [
      makeCitation({
        id: 'art_2.p12',
        targetType: 'paragraph',
        articleId: 'art_2',
        paragraphId: 'art_2.p12',
        displayLabel: 'Art. 2.12 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El presente Reglamento no se aplica a los sistemas de IA publicados con licencias libres y de código abierto, a menos que se introduzcan en el mercado o se pongan en servicio como sistemas de IA de alto riesgo o como un sistema de IA al que sean aplicables el artículo 5 o el artículo 50.',
      }),
    ],
  },
  {
    id: 'qz_56',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un banco utiliza una hoja de cálculo y un motor determinista de reglas condicionales ("SI ingresos > 30.000 € Y antigüedad > 2 años ENTONCES aprobar") programado íntegramente por analistas humanos sin aprendizaje automático ni inferencia estadística avanzada. Según el artículo 3.1 y el Considerando 12, ¿es un «sistema de IA»?',
    options: [
      'No: el elemento diferencial de un «sistema de IA» (Art. 3.1) es su capacidad de inferir a partir de la información de entrada cómo generar predicciones, contenidos, recomendaciones o decisiones, quedando excluidos la programación tradicional y los sistemas basados únicamente en reglas definidas por personas físicas para ejecutar operaciones de forma automática.',
      'Sí, cualquier programa informático que procese números financieros es un sistema de IA.',
      'Sí, siempre que se ejecute en servidores en la nube.',
      'Depende de si está programado en Java o en C++.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 3.1 define «sistema de IA» exigiendo capacidad de inferencia y autonomía, y el Considerando 12 aclara expresamente que la definición no debe abarcar los sistemas de software más sencillos ni la programación tradicional, como los sistemas que se basan únicamente en las reglas definidas por personas físicas para ejecutar operaciones de forma automática.',
    enterpriseLesson:
      'En tu inventario corporativo del Reglamento de IA, depura las automatizaciones RPA deterministas y motores de reglas fijas (if-then-else): no son sistemas de IA bajo el Art. 3.1.',
    citations: [
      makeCitation({
        id: 'art_3.p1',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p1',
        displayLabel: 'Art. 3.1 y Considerando 12 · Reglamento (UE) 2024/1689',
        exactQuote:
          '«sistema de IA»: un sistema basado en una máquina que está diseñado para funcionar con distintos niveles de autonomía y que puede mostrar capacidad de adaptación tras el despliegue, y que, para objetivos explícitos o implícitos, infiere de la información de entrada que recibe la manera de generar resultados de salida, como predicciones, contenidos, recomendaciones o decisiones.',
      }),
    ],
  },
  {
    id: 'qz_57',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 3.8 del Reglamento (UE) 2024/1689, ¿quiénes quedan englobados bajo el término jurídico «operador»?',
    options: [
      'Exclusivamente los teleoperadores que atienden llamadas telefónicas.',
      'El proveedor, el fabricante del producto, el responsable del despliegue, el representante autorizado, el importador o el distribuidor.',
      'Únicamente las empresas de telecomunicaciones con licencia 5G.',
      'Solo los organismos notificados y las agencias públicas.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 3.8 define «operador» como el concepto paraguas que comprende a los seis sujetos de la cadena de valor: proveedor, fabricante del producto, responsable del despliegue, representante autorizado, importador o distribuidor. Cuando el artículo 99.4 sanciona con hasta 15 M€ / 3 % el incumplimiento de disposiciones relativas a "los operadores", abarca a cualquiera de ellos.',
    enterpriseLesson:
      'Tanto si desarrollas (proveedor), como si importas, distribuyes o simplemente utilizas (responsable del despliegue) un sistema de IA en tu negocio, eres un «operador» sujeto al Reglamento.',
    citations: [
      makeCitation({
        id: 'art_3.p9',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p9',
        displayLabel: 'Art. 3.8 · Reglamento (UE) 2024/1689',
        exactQuote:
          '«operador»: un proveedor, un fabricante del producto, un responsable del despliegue, un representante autorizado, un importador o un distribuidor;',
      }),
    ],
  },
  {
    id: 'qz_58',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué diferencia establece el artículo 3, puntos 12 y 13, entre «finalidad prevista» y «uso indebido razonablemente previsible»?',
    options: [
      'Son sinónimos exactos.',
      'La finalidad prevista la decide el cliente final y el uso indebido lo decide la policía.',
      'La «finalidad prevista» es el uso para el que un proveedor concibe un sistema de IA (según sus instrucciones, documentación y material promocional), mientras que el «uso indebido razonablemente previsible» es la utilización de un modo que no se ajusta a su finalidad prevista pero que puede resultar de un comportamiento humano razonablemente previsible o de la interacción con otros sistemas.',
      'El uso indebido razonablemente previsible solo incluye ataques informáticos de estados extranjeros.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 3.12 define la «finalidad prevista» por lo declarado por el proveedor en las instrucciones de uso, documentación y declaraciones promocionales, mientras que el artículo 3.13 define el «uso indebido razonablemente previsible» como el uso fuera de dicha finalidad derivado de un comportamiento humano previsible. El artículo 9 obliga al proveedor de alto riesgo a gestionar riesgos tanto de la finalidad prevista como del uso indebido razonablemente previsible.',
    enterpriseLesson:
      'No basta con poner un descargo de responsabilidad en letra pequeña: el sistema de gestión de riesgos (Art. 9) debe anticipar y mitigar los usos indebidos razonablemente previsibles por parte de los usuarios.',
    citations: [
      makeCitation({
        id: 'art_3.p13',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p13',
        displayLabel: 'Art. 3.12 y 3.13 · Reglamento (UE) 2024/1689',
        exactQuote:
          '«uso indebido razonablemente previsible»: la utilización de un sistema de IA de un modo que no se ajuste a su finalidad prevista, pero que pueda resultar de un comportamiento humano razonablemente previsible o de una interacción razonablemente previsible con otros sistemas, incluidos otros sistemas de IA;',
      }),
    ],
  },
  {
    id: 'qz_59',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Un sistema de IA de alto riesgo con capacidad de aprendizaje continuo tras su despliegue actualiza periódicamente sus parámetros en producción. Según el artículo 3.23 (y el artículo 43.4), ¿cuándo NO constituye ese cambio una «modificación sustancial» que obligue a repetir la evaluación de la conformidad?',
    options: [
      'Siempre constituye una modificación sustancial cada vez que cambia un peso neuronal.',
      'Cuando el cambio ocurre en horario nocturno.',
      'Cuando el cambio solo afecta a usuarios de fuera de la capital.',
      'Cuando dichos cambios y su rendimiento hayan sido predeterminados por el proveedor en el momento de la evaluación inicial de la conformidad y figuren dentro de la información contenida en la documentación técnica a que se refiere el punto 2, letra f), del Anexo IV.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 3.23 define «modificación sustancial» como todo cambio tras la comercialización no previsto o planeado en la evaluación inicial que afecte al cumplimiento de los requisitos de alto riesgo o modifique la finalidad prevista; y añade que en los sistemas de IA que continúen aprendiendo tras su introducción en el mercado, los cambios y su rendimiento que hayan sido predeterminados por el proveedor en la evaluación inicial y documentados en el Anexo IV.2.f) NO constituirán una modificación sustancial.',
    enterpriseLesson:
      'Si tu sistema de alto riesgo se reentrena o adapta en producción, define y acota la ventana predeterminada de evolución y sus umbrales de validación en el Anexo IV.2.f) para no tener que recertificar el sistema en cada actualización.',
    citations: [
      makeCitation({
        id: 'art_3.p24',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p24',
        displayLabel: 'Art. 3.23 y Art. 43.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'en el caso de los sistemas de IA que continúen aprendiendo tras su introducción en el mercado o puesta en servicio, los cambios en el sistema de IA y su rendimiento que hayan sido predeterminados por el proveedor en el momento de la evaluación inicial de la conformidad y formen parte de la información contenida en la documentación técnica a que se refiere el anexo IV, punto 2, letra f), no constituirán una modificación sustancial;',
      }),
    ],
  },
  {
    id: 'qz_60',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 3.49, ¿cuál de los siguientes sucesos provocados directa o indirectamente por el funcionamiento o mal funcionamiento de un sistema de IA constituye legalmente un «incidente grave» de notificación obligatoria (Art. 73)?',
    options: [
      'Cualquiera de los cuatro siguientes: (a) el fallecimiento de una persona o un daño grave para su salud; (b) una alteración grave e irreversible de la gestión o el funcionamiento de infraestructuras críticas; (c) el incumplimiento de las obligaciones establecidas en el Derecho de la Unión destinadas a proteger los derechos fundamentales; o (d) daños graves a los bienes o al medio ambiente.',
      'Únicamente los incidentes que provoquen la caída de un servidor durante más de 5 minutos sin afectar a personas, derechos ni bienes.',
      'Exclusivamente cuando fallecen más de 10 personas simultáneamente.',
      'Una errata ortográfica sin relevancia en un chatbot interno de pruebas.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 3.49 define «incidente grave» incluyendo expresamente no solo el fallecimiento o daño grave a la salud (letra a) y la alteración grave e irreversible de infraestructuras críticas (letra b), sino también el incumplimiento de obligaciones del Derecho de la Unión destinadas a proteger los derechos fundamentales (letra c, por ejemplo una discriminación masiva ilegal en contratación o crédito) y los daños graves a los bienes o al medio ambiente (letra d).',
    enterpriseLesson:
      'Un fallo algorítmico que vulnere derechos fundamentales (como discriminación sistemática por sexo o etnia en selección de personal o crédito) es un «incidente grave» bajo el Art. 3.49(c) y debe notificarse a la autoridad según el Art. 73.',
    citations: [
      makeCitation({
        id: 'art_3.p50',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p50',
        displayLabel: 'Art. 3.49 · Reglamento (UE) 2024/1689',
        exactQuote:
          '«incidente grave»: todo incidente o mal funcionamiento de un sistema de IA que, directa o indirectamente, provoque alguna de las siguientes consecuencias, pueda haberla provocado o pueda provocarla: a) el fallecimiento de una persona o un daño grave para su salud; b) una alteración grave e irreversible de la gestión o el funcionamiento de infraestructuras críticas; c) el incumplimiento de las obligaciones establecidas en el Derecho de la Unión destinadas a proteger los derechos fundamentales; d) daños graves a los bienes o al medio ambiente;',
      }),
    ],
  },
  {
    id: 'qz_61',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el artículo 3.39 y el Considerando 18, ¿incluye la definición de «sistema de reconocimiento de emociones» la detección de estados puramente físicos como el dolor, la fatiga o las sonrisas/gestos aparentes sin deducir emociones internas?',
    options: [
      'Sí, cualquier cámara que detecte que una persona lleva los ojos cerrados es un sistema de reconocimiento de emociones.',
      'No: el concepto se refiere a distinguir o deducir emociones o intenciones (como felicidad, tristeza, indignación, sorpresa, asco, miedo) a partir de datos biométricos, y no incluye estados físicos como el dolor o la fatiga ni el mero movimiento físico de expresiones faciales aparentes salvo que se usen para deducir una emoción.',
      'Solo incluye la lectura de ondas cerebrales mediante implantes quirúrgicos.',
      'El Reglamento no define los sistemas de reconocimiento de emociones.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 3.39 define «sistema de reconocimiento de emociones» como aquel destinado a distinguir o deducir las emociones o intenciones de las personas físicas a partir de sus datos biométricos, y el Considerando 18 precisa que no incluye los estados físicos como el dolor o la fatiga (por ejemplo, sistemas para detectar la fatiga de pilotos o conductores profesionales con el fin de evitar accidentes).',
    enterpriseLesson:
      'Los sistemas ADAS en flotas de transporte que detectan somnolencia física o parpadeo por fatiga del conductor son sistemas de seguridad física (no reconocimiento emocional prohibido) y están expresamente amparados por el Considerando 18 y la excepción de seguridad del Art. 5.1(f).',
    citations: [
      makeCitation({
        id: 'art_3.p40',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p40',
        displayLabel: 'Art. 3.39 y Considerando 18 · Reglamento (UE) 2024/1689',
        exactQuote:
          '«sistema de reconocimiento de emociones»: un sistema de IA destinado a distinguir o deducir las emociones o las intenciones de las personas físicas a partir de sus datos biométricos;',
      }),
    ],
  },
  {
    id: 'qz_62',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_3',
    titleId: 'tit_I',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Qué diferencia conceptual establece el artículo 3, puntos 63 y 66, entre un «modelo de IA de uso general» (GPAI model) y un «sistema de IA de uso general» (GPAI system)?',
    options: [
      'No existe ninguna diferencia: modelo y sistema significan lo mismo.',
      'Un modelo tiene interfaz de usuario y un sistema son solo los pesos matemáticos.',
      'El «modelo de IA de uso general» (Art. 3.63) es el componente entrenado con un gran volumen de datos capaz de realizar una amplia gama de tareas pero que requiere que se le añadan otros componentes (como una interfaz de usuario) para convertirse en un sistema; mientras que el «sistema de IA de uso general» (Art. 3.66) es el sistema de IA completo basado en un modelo de uso general que puede servir para diversos usos, tanto directamente como integrado en otros sistemas.',
      'Los modelos de uso general solo procesan texto y los sistemas solo procesan vídeo.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 3.63 y el Considerando 97 aclaran que los modelos de IA de uso general son componentes esenciales pero no constituyen por sí mismos sistemas de IA completos hasta que se les integran interfaces o capas de aplicación. Cuando un modelo GPAI se integra en un sistema capaz de servir para diversos fines, ese conjunto es un «sistema de IA de uso general» (Art. 3.66).',
    enterpriseLesson:
      'Distingue siempre en tus contratos si estás licenciando los pesos/API de un modelo GPAI (Cap. V, Arts. 51–56) o desplegando un sistema de IA completo (sujeto además al Art. 50 o al Cap. III si se usa en casos de alto riesgo).',
    citations: [
      makeCitation({
        id: 'art_3.p64',
        targetType: 'paragraph',
        articleId: 'art_3',
        paragraphId: 'art_3.p64',
        displayLabel: 'Art. 3.63 y 3.66 · Reglamento (UE) 2024/1689',
        exactQuote:
          '«modelo de IA de uso general»: un modelo de IA —también cuando dicho modelo de IA se entrene con un gran volumen de datos utilizando supervisión a gran escala— que presenta un grado considerable de generalidad y es capaz de realizar de manera competente una amplia gama de tareas distintas... y que puede integrarse en diversos sistemas o aplicaciones posteriores.',
      }),
    ],
  },
  {
    id: 'qz_63',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_4',
    titleId: 'tit_I',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una empresa contrata a una consultora externa cuyos empleados operan en nombre de la empresa un sistema de IA de atención y clasificación de clientes. Según el artículo 4, ¿a quiénes debe alcanzar la obligación de alfabetización en materia de IA?',
    options: [
      'Únicamente a los miembros del consejo de administración.',
      'Solo a los ingenieros en plantilla con contrato indefinido.',
      'Solo a los clientes finales que visitan la página web.',
      'Tanto a su propio personal como a las demás personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA, teniendo en cuenta sus conocimientos técnicos, experiencia, educación, contexto previsto de uso y los colectivos de personas en que se van a utilizar.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 4 obliga a los proveedores y responsables del despliegue a adoptar medidas para garantizar un nivel suficiente de alfabetización en materia de IA no solo de su personal en plantilla, sino también "de las demás personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA" (contratistas, BPOs, operadores externos).',
    enterpriseLesson:
      'Incluye en los pliegos de subcontratación y outsourcing (BPOs, consultoras, agencias) la exigencia de acreditar la formación en alfabetización de IA (Art. 4) del personal externo que opere sistemas de IA en nombre de tu empresa.',
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
    id: 'qz_64',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 5.1(a) y el Considerando 29, ¿cuándo queda prohibido un sistema de IA que emplea técnicas subliminales, deliberadamente manipuladoras o engañosas?',
    options: [
      'Cuando tiene el objetivo o el efecto de alterar de manera sustancial el comportamiento de una persona o colectivo, mermando de manera apreciable su capacidad para tomar una decisión informada y haciendo que tomen una decisión que de otro modo no habrían tomado, de un modo que provoque, o sea razonablemente probable que provoque, perjuicios considerables (físicos, psicológicos o financieros).',
      'En cualquier anuncio publicitario legítimo y transparente que ofrezca un descuento comercial.',
      'Solo cuando se utiliza en televisión analógica.',
      'Únicamente si el proveedor reconoce por escrito ante notario su intención de hacer daño.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 5.1(a) no prohíbe la persuasión comercial lícita y transparente (Considerando 29), sino las técnicas subliminales, manipuladoras o engañosas que subvierten la autonomía de la persona (mermando apreciablemente su decisión informada) y tienen el objetivo O EL EFECTO de provocar (o ser razonablemente probable que provoquen) perjuicios considerables.',
    enterpriseLesson:
      'Observa que el Art. 5.1(a) castiga "el objetivo O EL EFECTO": aunque el equipo de producto no tuviera intención dolosa de dañar, si un agente de IA auto-optimizado aprende patrones manipuladores que causan perjuicios considerables, incurre igualmente en la prohibición.',
    citations: [
      makeCitation({
        id: 'art_5.p2',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p2',
        displayLabel: 'Art. 5.1(a) · Reglamento (UE) 2024/1689',
        exactQuote:
          'la introducción en el mercado, la puesta en servicio o la utilización de un sistema de IA que se sirva de técnicas subliminales que trasciendan la conciencia de una persona o de técnicas deliberadamente manipuladoras o engañosas con el objetivo o el efecto de alterar de manera sustancial el comportamiento de una persona o un colectivo de personas, mermando de manera apreciable su capacidad para tomar una decisión informada y haciendo que tomen una decisión que de otro modo no habrían tomado, de un modo que provoque, o sea razonablemente probable que provoque, perjuicios considerables...',
      }),
    ],
  },
  {
    id: 'qz_65',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una plataforma de microcréditos instantáneos entrena un sistema de IA para detectar usuarios adultos sin discapacidad pero en situación de extrema precariedad económica o insolvencia inminente, dirigiéndoles ofertas predatorias personalizadas en los momentos de mayor angustia financiera para hacerles contratar productos ruinosos. ¿Vulnera el artículo 5.1(b)?',
    options: [
      'No, porque el artículo 5.1(b) solo protege a menores de edad y personas con discapacidad.',
      'Sí: el artículo 5.1(b) prohíbe expresamente explotar las vulnerabilidades de una persona física o colectivo derivadas no solo de su edad o discapacidad, sino también "de una situación social o económica específica", causando perjuicios considerables.',
      'No, porque las finanzas están excluidas del Reglamento.',
      'Solo vulnera el artículo 95 de códigos de conducta.',
    ],
    correctOptionIndex: 1,
    explanation:
      'En el texto definitivo aprobado por el Parlamento Europeo y el Consejo, el artículo 5.1(b) amplió la protección frente a la explotación de vulnerabilidades para incluir explícitamente las derivadas "de una situación social o económica específica" (como personas que viven en la pobreza extrema o minorías étnicas o religiosas vulnerables, según el Considerando 29).',
    enterpriseLesson:
      'En modelos de propensión comercial o recobro, audita que ninguna variable socioeconómica de vulnerabilidad se utilice para explotar situaciones de angustia financiera causando perjuicios considerables.',
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
    id: 'qz_66',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según los incisos i) e ii) del artículo 5.1(c), ¿cuáles son las dos situaciones alternativas que hacen que un sistema de evaluación o clasificación por comportamiento social o características de personalidad constituya una «puntuación ciudadana» (social scoring) prohibida?',
    options: [
      'Que utilice más de tres bases de datos relacionales o que tarde menos de un segundo en calcular la nota.',
      'Que se aplique solo a personas jurídicas o que sea gratuito.',
      '(i) Que provoque un trato perjudicial o desfavorable en contextos sociales que no guarden relación con los contextos donde se generaron o recabaron los datos originalmente, O (ii) que provoque un trato perjudicial o desfavorable que sea injustificado o desproporcionado con respecto a su comportamiento social o la gravedad de este.',
      'Que el algoritmo no haya sido publicado en el Diario Oficial de la Unión Europea.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 5.1(c) define el resultado prohibido de la puntuación ciudadana mediante dos supuestos alternativos ("una o varias de las situaciones siguientes"): la transferencia de consecuencias negativas a contextos sociales desvinculados del origen de los datos (inciso i), o el trato desfavorable injustificado o desproporcionado respecto a la gravedad de la conducta social (inciso ii).',
    enterpriseLesson:
      'Incluso dentro del mismo contexto de servicio, si un sistema de scoring de comportamiento social impone un castigo automatizado manifiestamente desproporcionado (inciso ii), cae en la prohibición del Art. 5.1(c).',
    citations: [
      makeCitation({
        id: 'art_5.p4',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p4',
        displayLabel: 'Art. 5.1(c)(i)-(ii) · Reglamento (UE) 2024/1689',
        exactQuote:
          'i) un trato perjudicial o desfavorable hacia determinadas personas físicas o colectivos de personas en contextos sociales que no guarden relación con los contextos donde se generaron o recabaron los datos originalmente, ii) un trato perjudicial o desfavorable hacia determinadas personas físicas o colectivos de personas que sea injustificado o desproporcionado con respecto a su comportamiento social o la gravedad de este;',
      }),
    ],
  },
  {
    id: 'qz_67',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una unidad de investigación de delitos financieros utiliza un sistema de IA para apoyar a los inspectores humanos al analizar transferencias bancarias sospechosas vinculadas a un delito concreto de blanqueo de capitales sobre el que ya existen indicios objetivos y verificables. Según el último inciso del artículo 5.1(d), ¿está prohibido este sistema?',
    options: [
      'Sí, cualquier sistema de IA utilizado por la policía o inspectores está prohibido.',
      'Sí, porque el artículo 5.1(d) prohíbe cualquier análisis de datos en investigaciones penales.',
      'Solo es legal si no intervienen inspectores humanos.',
      'No está prohibido por el artículo 5.1(d) (aunque sí es de alto riesgo según el Anexo III punto 6): el propio artículo 5.1(d) establece que esta prohibición NO se aplicará a los sistemas de IA utilizados para apoyar la valoración humana de la implicación de una persona en una actividad delictiva, que ya se base en hechos objetivos y verificables directamente vinculados a una actividad delictiva.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 5.1(d) prohíbe evaluar o predecir el riesgo de que una persona cometa un delito basándose ÚNICAMENTE en su perfilado o rasgos de personalidad; pero excluye expresamente de la prohibición los sistemas que apoyen la valoración humana de la implicación de una persona cuando dicha valoración ya se base en hechos objetivos y verificables directamente vinculados a una actividad delictiva (pasando en tal caso a regularse como alto riesgo bajo el Anexo III.6).',
    enterpriseLesson:
      'En soluciones de inteligencia policial o prevención de delitos, la arquitectura debe exigir como entrada obligatoria hechos objetivos y verificables de una investigación abierta, nunca rasgos meramente demográficos o de personalidad.',
    citations: [
      makeCitation({
        id: 'art_5.p5',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p5',
        displayLabel: 'Art. 5.1(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'esta prohibición no se aplicará a los sistemas de IA utilizados para apoyar la valoración humana de la implicación de una persona en una actividad delictiva, que ya se base en hechos objetivos y verificables directamente vinculados a una actividad delictiva;',
      }),
    ],
  },
  {
    id: 'qz_68',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una compañía ferroviaria instala en la cabina de sus maquinistas un sistema de IA que monitoriza signos biométricos y oculares para detectar episodios de microsueño o crisis médicas agudas durante la conducción del tren. Por otro lado, una universidad instala cámaras con IA en sus aulas para medir el grado de aburrimiento o entusiasmo emocional de los estudiantes durante las clases. Según el artículo 5.1(f), ¿cuál de los dos usos es legal?',
    options: [
      'El sistema de la compañía ferroviaria es legal por estar destinado a motivos médicos o de seguridad en el trabajo (aunque sujeto a alto riesgo/protección de datos), mientras que el sistema de la universidad está prohibido por inferir emociones en un centro educativo sin finalidad médica ni de seguridad.',
      'Ambos están prohibidos sin excepción.',
      'Ambos son legales si se informa por megafonía.',
      'El de la universidad es legal y el de la compañía ferroviaria está prohibido.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 5.1(f) prohíbe inferir emociones en los lugares de trabajo y en los centros educativos, "excepto cuando el uso del sistema de IA esté destinado a ser instalado o introducido en el mercado por motivos médicos o de seguridad". Prevenir accidentes ferroviarios por microsueño o crisis médica encaja en la excepción de seguridad/médica; medir el interés o aburrimiento de los alumnos en clase está taxativamente prohibido.',
    enterpriseLesson:
      'En entornos laborales o educativos, solo los sistemas con finalidad estrictamente médica o de seguridad física superan el filtro del Art. 5.1(f); cualquier uso para medir productividad, compromiso o atención emocional es ilegal.',
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
    id: 'qz_69',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'El artículo 5.1(g) prohíbe los sistemas de categorización biométrica que clasifiquen individualmente a personas físicas para deducir su raza, opiniones políticas, afiliación sindical, religión u orientación sexual. ¿Qué excepción técnica puntual contempla la segunda frase de esa misma letra g)?',
    options: [
      'Permite deducir la afiliación sindical durante procesos de huelga.',
      'Esta prohibición no abarca el etiquetado o filtrado de conjuntos de datos biométricos adquiridos legalmente, como imágenes, basados en datos biométricos o en la categorización de datos biométricos en el ámbito de la garantía del cumplimiento del Derecho.',
      'Permite a las redes sociales inferir la orientación sexual a partir de selfies para segmentar anuncios.',
      'Permite clasificar votantes por ideología política en colegios electorales.',
    ],
    correctOptionIndex: 1,
    explanation:
      'La segunda frase del artículo 5.1(g) aclara que la prohibición no abarca el etiquetado o filtrado de conjuntos de datos biométricos adquiridos legalmente (por ejemplo, ordenar imágenes según el color del pelo o de los ojos para buscar un sospechoso en grabaciones obtenidas legalmente en el ámbito policial, o auditar el equilibrio demográfico de un dataset adquirido legalmente conforme al Considerando 30).',
    enterpriseLesson:
      'Distingue entre clasificar biométricamente a un individuo para inferir atributos sensibles protegidos (prohibido) y el mero etiquetado técnico de datasets adquiridos legalmente para garantizar su representatividad y ausencia de sesgos (Art. 10.5).',
    citations: [
      makeCitation({
        id: 'art_5.p8',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p8',
        displayLabel: 'Art. 5.1(g) · Reglamento (UE) 2024/1689',
        exactQuote:
          'esta prohibición no abarca el etiquetado o filtrado de conjuntos de datos biométricos adquiridos legalmente, como imágenes, basados en datos biométricos o en la categorización de datos biométricos en el ámbito de la garantía del cumplimiento del Derecho;',
      }),
    ],
  },
  {
    id: 'qz_70',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Para que las fuerzas del orden puedan utilizar excepcionalmente la identificación biométrica remota «en tiempo real» en espacios de acceso público con el fin de localizar o identificar a un sospechoso de un delito del Anexo II (Art. 5.1.h.iii), ¿qué requisito punitivo mínimo debe tener dicho delito en el Estado miembro correspondiente?',
    options: [
      'Cualquier falta administrativa o multa de aparcamiento.',
      'Pena privativa de libertad de al menos 6 meses.',
      'Estar castigado en el Estado miembro de que se trate con una pena privativa de libertad o una medida de seguridad privativa de libertad de una duración máxima de al menos cuatro años.',
      'Exclusivamente delitos castigados con cadena perpetua.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 5.1(h), inciso iii), exige acumulativamente que se trate de uno de los 16 delitos graves listados en el Anexo II (terrorismo, trata, explotación infantil, narcotráfico, tráfico de armas, asesinato, secuestro, sabotaje, etc.) Y que esté castigado en el Estado miembro en cuestión con una pena o medida privativa de libertad de una duración máxima de al menos cuatro años.',
    enterpriseLesson:
      'El umbral del Art. 5.1(h)(iii) es doblemente restrictivo: lista cerrada del Anexo II + pena máxima >= 4 años de prisión.',
    citations: [
      makeCitation({
        id: 'art_5.p12',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p12',
        displayLabel: 'Art. 5.1(h)(iii) y Anexo II · Reglamento (UE) 2024/1689',
        exactQuote:
          'la localización o identificación de una persona sospechosa de haber cometido un delito, a efectos de llevar a cabo una investigación penal, o de perseguir o ejecutar una sanción penal por alguno de los delitos a que se refiere el anexo II y que estén castigados en el Estado miembro de que se trate con una pena privativa de libertad o una medida de seguridad privativa de libertad de una duración máxima de al menos cuatro años.',
      }),
    ],
  },
  {
    id: 'qz_71',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 5.2, antes de desplegar un sistema de identificación biométrica remota «en tiempo real» en espacios de acceso público para alguno de los tres objetivos excepcionales del artículo 5.1(h), ¿qué dos trámites obligatorios debe haber completado la autoridad policial?',
    options: [
      'Publicar la ubicación exacta de las cámaras en redes sociales y pedir permiso al alcalde.',
      'Solo realizar una encuesta ciudadana.',
      'Contratar un seguro de responsabilidad civil y pagar una tasa municipal.',
      'Haber realizado una evaluación del impacto en los derechos fundamentales de conformidad con el artículo 27 y haber registrado el sistema en la base de datos de la UE de conformidad con el artículo 49 (si bien en casos de urgencia debidamente justificados podrá iniciarse el uso sin el registro previo siempre que se complete sin demora indebida).',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 5.2 exige que el despliegue de identificación biométrica remota en tiempo real solo se realice si la autoridad policial ha completado previamente la evaluación del impacto en los derechos fundamentales (FRIA, Art. 27) y ha registrado el sistema en la base de datos de la UE (Art. 49.4 en sección segura nacional/no pública), permitiendo únicamente en urgencia justificada iniciar el uso y completar el registro sin demora indebida.',
    enterpriseLesson:
      'Incluso cuando concurre una excepción policial legítima del Art. 5.1(h), la ley impone controles técnicos y formales previos (FRIA + registro + autorización judicial).',
    citations: [
      makeCitation({
        id: 'art_5.p15',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p15',
        displayLabel: 'Art. 5.2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Además, el uso de sistemas de identificación biométrica remota «en tiempo real» en espacios de acceso público con fines de garantía del cumplimiento del Derecho para cualquiera de los objetivos a que se refiere el apartado 1, párrafo primero, letra h), solo se desplegará si la autoridad de garantía del cumplimiento del Derecho ha completado una evaluación del impacto en los derechos fundamentales de conformidad con el artículo 27 y ha registrado el sistema en la base de datos de la UE de conformidad con el artículo 49.',
      }),
    ],
  },
  {
    id: 'qz_72',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Ante una amenaza terrorista inminente (caso de urgencia debidamente justificado), una autoridad policial inicia el uso de identificación biométrica remota «en tiempo real» sin autorización judicial previa. Según el artículo 5.3, ¿en qué plazo máximo debe solicitarse dicha autorización judicial y qué ocurre si finalmente el juez la deniega?',
    options: [
      'Debe solicitarse sin demora indebida y a más tardar en un plazo de 24 horas; si la autorización es rechazada, el uso se detendrá con efecto inmediato y todos los datos, así como los resultados y los resultados de salida de dicho uso, serán inmediatamente descartados y suprimidos.',
      'Dispone de 15 días hábiles para pedirla y, si se deniega, puede conservar los datos durante 6 meses.',
      'Dispone de 72 horas y no es necesario borrar las identificaciones ya realizadas.',
      'En caso de urgencia no hace falta solicitar autorización judicial posterior.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 5.3 exige autorización previa de una autoridad judicial o administrativa independiente cuya decisión sea vinculante. Solo en caso de urgencia debidamente justificada puede comenzarse a usar el sistema sin autorización previa, siempre que esta se solicite sin demora indebida y a más tardar en 24 horas; si es rechazada, se detiene inmediatamente el uso y se suprimen todos los datos, resultados y salidas generados.',
    enterpriseLesson:
      'Los proveedores de sistemas biométricos para fuerzas de seguridad deben incorporar en el software una función técnica de borrado criptográfico inmediato ("kill & purge switch") para cumplir el Art. 5.3 si se deniega la convalidación en 24h.',
    citations: [
      makeCitation({
        id: 'art_5.p16',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p16',
        displayLabel: 'Art. 5.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'No obstante, en caso de urgencia debidamente justificado, se podrá comenzar a utilizar dicho sistema sin la autorización prevista siempre que esta se solicite sin demora indebida, a más tardar en un plazo de veinticuatro horas. Si dicha autorización es rechazada, su uso se detendrá con efecto inmediato y todos los datos, así como los resultados y los resultados de salida de dicho uso, serán inmediatamente descartados y suprimidos.',
      }),
    ],
  },
  {
    id: 'qz_73',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según los apartados 4 y 5 del artículo 5, ¿basta con el Reglamento europeo para que la policía de un Estado miembro utilice identificación biométrica remota «en tiempo real» en espacios públicos bajo los supuestos del artículo 5.1(h)?',
    options: [
      'Sí, es directamente aplicable sin necesidad de ley nacional y ningún Estado miembro puede limitarlo.',
      'No: el artículo 5.5 establece que un Estado miembro podrá decidir prever la posibilidad de autorizar total o parcialmente dicho uso dentro de los límites del Reglamento y deberá establecer en su Derecho nacional las normas detalladas necesarias para la solicitud, concesión y supervisión de las autorizaciones; además, cada uso debe notificarse a la autoridad de vigilancia del mercado y a la autoridad nacional de protección de datos (Art. 5.4).',
      'Basta con una circular interna de la comisaría local.',
      'Solo requiere autorización de la empresa proveedora de las cámaras.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 5.5 establece que las excepciones del artículo 5.1(h) NO son de activación automática: cada Estado miembro puede decidir si autoriza total, parcialmente o en ningún caso el uso de identificación biométrica remota en tiempo real, siendo imprescindible una ley nacional que regule el procedimiento detallado de autorización y supervisión.',
    enterpriseLesson:
      'Ningún cuerpo policial en un Estado miembro puede adquirir y activar identificación biométrica en tiempo real en la vía pública si su parlamento nacional no ha aprobado previamente la ley habilitante del Art. 5.5.',
    citations: [
      makeCitation({
        id: 'art_5.p19',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p19',
        displayLabel: 'Art. 5.4 y 5.5 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Un Estado miembro podrá decidir prever la posibilidad de autorizar total o parcialmente el uso de sistemas de identificación biométrica remota «en tiempo real» en espacios de acceso público con fines de garantía del cumplimiento del Derecho dentro de los límites y en las condiciones enumerados en el apartado 1, párrafo primero, letra h), y los apartados 2 y 3.',
      }),
    ],
  },
  {
    id: 'qz_74',
    topicId: 'prohibited',
    topicLabel: 'Prácticas Prohibidas y Alcance (Arts. 1-5)',
    articleId: 'art_5',
    titleId: 'tit_II',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      '¿Qué obligación de transparencia institucional imponen los apartados 6 y 7 del artículo 5 respecto al uso excepcional de sistemas de identificación biométrica remota «en tiempo real» en los Estados miembros?',
    options: [
      'Mantener en secreto perpetuo el número de autorizaciones concedidas.',
      'Publicar los nombres y fotografías de todas las personas investigadas.',
      'Las autoridades nacionales de vigilancia del mercado y las autoridades nacionales de protección de datos deben presentar informes anuales a la Comisión sobre dicho uso (sin datos personales sensibles), y la Comisión publicará informes anuales agregados basados en esos datos.',
      'Enviar los vídeos originales al Parlamento Europeo cada semana.',
    ],
    correctOptionIndex: 2,
    explanation:
      'Los apartados 6 y 7 del artículo 5 garantizan el control democrático exigiendo que las autoridades nacionales de vigilancia del mercado y de protección de datos de los Estados miembros que hayan autorizado estos sistemas remitan informes anuales a la Comisión Europea, la cual publica un informe anual consolidado.',
    enterpriseLesson:
      'El uso policial de identificación biométrica está sometido a escrutinio estadístico público anual ante la Comisión Europea (Art. 5.6 y 5.7).',
    citations: [
      makeCitation({
        id: 'art_5.p21',
        targetType: 'paragraph',
        articleId: 'art_5',
        paragraphId: 'art_5.p21',
        displayLabel: 'Art. 5.6 y 5.7 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las autoridades nacionales de vigilancia del mercado y las autoridades nacionales de protección de datos de los Estados miembros a las que se hayan notificado usos de sistemas de identificación biométrica remota «en tiempo real»... presentarán a la Comisión informes anuales sobre dicho uso.',
      }),
    ],
  },

  // =========================================================================
  // BLOQUE B: SISTEMAS DE ALTO RIESGO (Arts. 6-49, Título III)
  // IDs: qz_75 a qz_132 (58 preguntas)
  // =========================================================================
  {
    id: 'qz_75',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Un fabricante de equipamiento industrial integra un módulo de IA como componente de seguridad de una máquina regulada por el Reglamento de Máquinas (Anexo I, Sección A). Según el artículo 6.1, ¿basta con que el producto esté listado en el Anexo I para que el sistema de IA sea automáticamente de alto riesgo?',
    options: [
      'Sí, cualquier software instalado en una máquina o juguete es automáticamente de alto riesgo.',
      'No, solo es de alto riesgo si la máquina pesa más de 5 toneladas.',
      'Solo si la máquina se exporta fuera de la Unión Europea.',
      'No: el artículo 6.1 exige DOS condiciones acumulativas: (a) que el sistema de IA sea componente de seguridad de un producto (o sea él mismo un producto) regulado por un acto del Anexo I, Y (b) que dicho producto deba someterse a una evaluación de la conformidad de terceros con arreglo a ese acto legislativo del Anexo I.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 6.1 exige el cumplimiento conjunto de las letras a) y b): si un producto regulado por la legislación de armonización del Anexo I se certifica por simple autocontrol interno bajo su normativa sectorial (sin requerir evaluación de la conformidad por un organismo notificado tercero), su componente de IA no entra por la vía del artículo 6.1.',
    enterpriseLesson:
      'Para clasificar un producto industrial o médico bajo el Art. 6.1, verifica primero con tu equipo de ingeniería regulatoria si el producto requiere intervención de Organismo Notificado bajo su directiva/reglamento del Anexo I.',
    citations: [
      makeCitation({
        id: 'art_6.p1',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p1',
        displayLabel: 'Art. 6.1(a)-(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'dicho sistema de IA se considerará de alto riesgo cuando cumpla las dos condiciones siguientes: a) el sistema de IA está destinado a ser utilizado como componente de seguridad de un producto, o el sistema de IA es en sí mismo un producto, regulado por los actos legislativos de armonización de la Unión enumerados en el anexo I; b) el producto cuyo componente de seguridad con arreglo a la letra a) es el sistema de IA, o el propio sistema de IA como producto, debe someterse a una evaluación de la conformidad de terceros.',
      }),
    ],
  },
  {
    id: 'qz_76',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una aplicación bancaria utiliza reconocimiento facial (1-a-1) en el móvil del cliente con la única finalidad de confirmar que la persona que intenta iniciar sesión o autorizar una transferencia es efectivamente el titular registrado de la cuenta. Según el Anexo III, punto 1, letra a), ¿es este sistema de verificación biométrica un sistema de IA de alto riesgo?',
    options: [
      'No: el Anexo III, punto 1, letra a), excluye expresamente de los sistemas biométricos de alto riesgo aquellos destinados a ser utilizados con fines de verificación biométrica cuya única finalidad sea confirmar que una persona física concreta es la persona que afirma ser.',
      'Sí, cualquier uso de biometría facial o dactilar es siempre de alto riesgo.',
      'Está prohibido por el artículo 5.1(h).',
      'Solo está exento si utiliza huella dactilar en lugar de rostro.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El Anexo III, punto 1, letra a), clasifica como de alto riesgo los sistemas de identificación biométrica remota (1-a-N), pero establece de forma expresa: "Quedan excluidos los sistemas de IA destinados a ser utilizados con fines de verificación biométrica cuya única finalidad sea confirmar que una persona física concreta es la persona que afirma ser" (autenticación 1-a-1, como desbloquear un dispositivo o validar acceso).',
    enterpriseLesson:
      'Los sistemas de autenticación biométrica 1-a-1 (FaceID, huella para fichar o confirmar identidad de un usuario que se identifica previamente) están expresamente excluidos del alto riesgo del Anexo III.1.a).',
    citations: [
      makeCitation({
        id: 'anx_III.p2',
        targetType: 'annex',
        articleId: 'anx_III',
        paragraphId: 'anx_III.p2',
        displayLabel: 'Anexo III, punto 1(a) · Reglamento (UE) 2024/1689',
        exactQuote:
          'Quedan excluidos los sistemas de IA destinados a ser utilizados con fines de verificación biométrica cuya única finalidad sea confirmar que una persona física concreta es la persona que afirma ser.',
      }),
    ],
  },
  {
    id: 'qz_77',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: false,
    question:
      'Según el Anexo III, punto 2, ¿en qué cinco sectores se consideran de alto riesgo los sistemas de IA destinados a ser utilizados como componentes de seguridad en la gestión y el funcionamiento de infraestructuras críticas?',
    options: [
      'Hostelería, comercio minorista, cines, gimnasios y peluquerías.',
      'La infraestructura digital crítica, el tráfico vial y el suministro de agua, gas, calefacción y electricidad.',
      'Únicamente las centrales nucleares militares.',
      'Las bibliotecas municipales y los parques públicos.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El Anexo III, punto 2, clasifica como de alto riesgo los sistemas de IA destinados a ser utilizados como componentes de seguridad en la gestión y el funcionamiento de la infraestructura digital crítica, del tráfico vial y del suministro de agua, gas, calefacción y electricidad.',
    enterpriseLesson:
      'En utilities (energía, agua, gas), gestión de tráfico y centros de datos/redes críticas, los modelos de IA que actúan como componentes de seguridad operativa son de alto riesgo y se registran a nivel nacional (Art. 49.4).',
    citations: [
      makeCitation({
        id: 'anx_III.p5',
        targetType: 'annex',
        articleId: 'anx_III',
        paragraphId: 'anx_III.p5',
        displayLabel: 'Anexo III, punto 2 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Infraestructuras críticas: sistemas de IA destinados a ser utilizados como componentes de seguridad en la gestión y el funcionamiento de la infraestructura digital crítica, del tráfico vial y del suministro de agua, gas, calefacción y electricidad.',
      }),
    ],
  },
  {
    id: 'qz_78',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una plataforma de formación online incorpora un sistema de IA de "proctoring" que vigila y detecta comportamientos sospechosos o prohibidos de los estudiantes durante la realización de exámenes a distancia. Según el Anexo III, punto 3, letra d), ¿cómo se clasifica este sistema?',
    options: [
      'Es un sistema prohibido por el artículo 5.',
      'Es un sistema de riesgo mínimo porque solo vigila exámenes.',
      'Es un sistema de IA de alto riesgo expresamente incluido en el Anexo III, punto 3, letra d) ("sistemas de IA destinados a ser utilizados para vigilar y detectar comportamientos prohibidos de los estudiantes durante las pruebas").',
      'Solo se regula si el examen es para obtener el permiso de conducir.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Anexo III, punto 3, abarca cuatro supuestos de alto riesgo en educación y formación profesional: (a) determinar el acceso o admisión, (b) evaluar los resultados del aprendizaje, (c) evaluar el nivel adecuado de educación que recibirá una persona, y (d) vigilar y detectar comportamientos prohibidos de los estudiantes durante las pruebas (proctoring algorítmico).',
    enterpriseLesson:
      'Las empresas EdTech y universidades que desplieguen software de supervisión automatizada de exámenes (e-proctoring con IA) operan un sistema de Alto Riesgo del Anexo III.3.d) (y además no pueden inferir emociones, prohibido por el Art. 5.1.f).',
    citations: [
      makeCitation({
        id: 'anx_III.p6',
        targetType: 'annex',
        articleId: 'anx_III',
        paragraphId: 'anx_III.p6',
        displayLabel: 'Anexo III, punto 3(a)-(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'd) sistemas de IA destinados a ser utilizados para vigilar y detectar comportamientos prohibidos de los estudiantes durante las pruebas en el contexto de los centros educativos y de formación, o dentro de ellos.',
      }),
    ],
  },
  {
    id: 'qz_79',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una empresa de reparto utiliza un algoritmo de gestión algorítmica que asigna tareas de forma individualizada a sus repartidores basándose en sus rasgos de personalidad y comportamiento previo, y además evalúa su rendimiento para decidir qué contratos se renuevan. ¿En qué apartado del Anexo III encaja?',
    options: [
      'No encaja en el Anexo III porque los repartidores trabajan en la vía pública.',
      'En el punto 1 sobre biometría.',
      'En el punto 8 sobre administración de justicia.',
      'En el Anexo III, punto 4, letra b): sistemas de IA destinados a tomar decisiones que afecten a las condiciones de las relaciones laborales, la promoción o la rescisión de relaciones contractuales de índole laboral, para asignar tareas a partir de comportamientos individuales o rasgos y características personales, o para supervisar y evaluar el rendimiento y el comportamiento.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El Anexo III, punto 4, divide el alto riesgo laboral en dos grandes bloques: letra a) selección y contratación (publicar anuncios de empleo selectivos, analizar y filtrar solicitudes y evaluar candidatos), y letra b) gestión de trabajadores y acceso al trabajo por cuenta propia (condiciones laborales, promoción, despido, asignación algorítmica de tareas por comportamiento/rasgos personales y evaluación del rendimiento).',
    enterpriseLesson:
      'La gestión algorítmica de turnos/tareas basada en el comportamiento individual y el scoring de desempeño laboral son de Alto Riesgo bajo el Anexo III.4.b), aplicando tanto a asalariados como al acceso al trabajo por cuenta propia.',
    citations: [
      makeCitation({
        id: 'anx_III.p11',
        targetType: 'annex',
        articleId: 'anx_III',
        paragraphId: 'anx_III.p11',
        displayLabel: 'Anexo III, punto 4(a)-(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) sistemas de IA destinados a ser utilizados para tomar decisiones que afecten a las condiciones de las relaciones laborales, la promoción o la rescisión de relaciones contractuales de índole laboral, para asignar tareas a partir de comportamientos individuales o rasgos y características personales, o para supervisar y evaluar el rendimiento y el comportamiento de las personas en el marco de dichas relaciones.',
      }),
    ],
  },
  {
    id: 'qz_80',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Una entidad financiera utiliza dos sistemas de IA distintos: el Sistema A calcula la calificación de solvencia crediticia de los clientes para conceder préstamos (credit scoring), y el Sistema B analiza transacciones con tarjeta con el único fin de detectar fraudes financieros y suplantaciones. Según el Anexo III, punto 5, letra b), ¿cuál de los dos es de alto riesgo?',
    options: [
      'El Sistema A (evaluación de la solvencia o calificación crediticia de personas físicas) es de alto riesgo, mientras que el Sistema B está expresamente EXCLUIDO del alto riesgo porque el Anexo III.5.b) exceptúa los sistemas de IA utilizados con el fin de detectar fraudes financieros.',
      'Ambos son de alto riesgo sin excepción.',
      'El Sistema B es de alto riesgo y el Sistema A es de riesgo mínimo.',
      'Ninguno de los dos es de alto riesgo.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El Anexo III, punto 5, letra b), clasifica como de alto riesgo los sistemas de IA destinados a evaluar la solvencia de las personas físicas o establecer su calificación crediticia, pero añade expresamente: "con excepción de los sistemas de IA utilizados con el fin de detectar fraudes financieros".',
    enterpriseLesson:
      'En banca y pagos, separa arquitectónicamente tus modelos de riesgo de crédito/solvencia (Alto Riesgo + FRIA obligatoria) de tus modelos antifraude/AML (expresamente excluidos del Anexo III.5.b).',
    citations: [
      makeCitation({
        id: 'anx_III.p14',
        targetType: 'annex',
        articleId: 'anx_III',
        paragraphId: 'anx_III.p14',
        displayLabel: 'Anexo III, punto 5(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'b) sistemas de IA destinados a ser utilizados para evaluar la solvencia de las personas físicas o establecer su calificación crediticia, con excepción de los sistemas de IA utilizados con el fin de detectar fraudes financieros;',
      }),
    ],
  },
  {
    id: 'qz_81',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: true,
    question:
      'Una compañía aseguradora utiliza IA para fijar precios y evaluar riesgos en tres ramos: (1) seguro de automóvil, (2) seguro de hogar y (3) seguros de vida y de salud para personas físicas. Según el Anexo III, punto 5, letra c), ¿cuál de estos sistemas tiene la consideración de alto riesgo?',
    options: [
      'Los tres ramos de seguro son de alto riesgo.',
      'Únicamente los sistemas de IA destinados a ser utilizados para la evaluación de riesgos y la fijación de precios en relación con las personas físicas en el caso de los seguros de VIDA y de SALUD (quedando fuera de este punto los seguros de daños materiales como hogar o automóvil).',
      'Solo el seguro de automóvil.',
      'Ningún seguro privado está incluido en el Anexo III.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El Anexo III, punto 5, letra c), circunscribe la clasificación de alto riesgo en el sector asegurador exclusivamente a los "sistemas de IA destinados a ser utilizados para la evaluación de riesgos y la fijación de precios en relación con las personas físicas en el caso de los seguros de vida y de salud".',
    enterpriseLesson:
      'En el sector asegurador, concentra tus recursos de certificación del Anexo IV y FRIA (Art. 27) en los motores de tarificación y suscripción de Vida y Salud; los ramos de Autos, Hogar o RC patrimonial no están en el Anexo III.5.c).',
    citations: [
      makeCitation({
        id: 'anx_III.p15',
        targetType: 'annex',
        articleId: 'anx_III',
        paragraphId: 'anx_III.p15',
        displayLabel: 'Anexo III, punto 5(c) · Reglamento (UE) 2024/1689',
        exactQuote:
          'c) sistemas de IA destinados a ser utilizados para la evaluación de riesgos y la fijación de precios en relación con las personas físicas en el caso de los seguros de vida y de salud;',
      }),
    ],
  },
  {
    id: 'qz_82',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el Anexo III, punto 8, ¿qué dos tipos de sistemas de IA se clasifican como de alto riesgo en el ámbito de la administración de justicia y los procesos democráticos?',
    options: [
      'Los procesadores de texto ofimáticos usados en juzgados y las calculadoras de mesas electorales.',
      'Solo los sistemas de recuento óptico de papeletas.',
      '(a) Los sistemas destinados a ser utilizados por una autoridad judicial (o en su nombre) para ayudarla a investigar e interpretar hechos y la ley y a aplicar la ley a un conjunto concreto de hechos (o en resolución alternativa de litigios), y (b) los sistemas destinados a influir en el resultado de una elección o referéndum o en el comportamiento de voto de las personas físicas en el ejercicio de su voto (excluyendo herramientas administrativas de organización de campañas).',
      'Cualquier página web de un partido político.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El Anexo III, punto 8, protege el Estado de Derecho y la democracia clasificando como de alto riesgo los sistemas de asistencia a jueces/árbitros en la interpretación y aplicación de la ley a hechos concretos (letra a), y los sistemas destinados a influir en el resultado electoral o en el comportamiento de voto (letra b, excluyendo los resultados a los que las personas no estén directamente expuestas, como herramientas de logística de campaña).',
    enterpriseLesson:
      'Las herramientas LegalTech que asisten a tribunales o cortes arbitrales en la subsunción de hechos y aplicación de normas son sistemas de alto riesgo del Anexo III.8.a).',
    citations: [
      makeCitation({
        id: 'anx_III.p21',
        targetType: 'annex',
        articleId: 'anx_III',
        paragraphId: 'anx_III.p21',
        displayLabel: 'Anexo III, punto 8(a)-(b) · Reglamento (UE) 2024/1689',
        exactQuote:
          'a) sistemas de IA destinados a ser utilizados por una autoridad judicial o en su nombre para ayudarla a investigar e interpretar hechos y la ley, y a aplicar la ley a un conjunto concreto de hechos, o a ser utilizados de forma similar en la resolución alternativa de litigios; b) sistemas de IA destinados a ser utilizados para influir en el resultado de una elección o un referéndum o en el comportamiento de voto de las personas físicas.',
      }),
    ],
  },
  {
    id: 'qz_83',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_6',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 6.3, un sistema de IA enumerado en el Anexo III NO se considerará de alto riesgo si no plantea un riesgo significativo para la salud, la seguridad o los derechos fundamentales (y no realiza perfilado de personas físicas) por cumplirse una o varias de cuatro condiciones tasadas. ¿Cuáles son esas cuatro condiciones?',
    options: [
      'Ser gratuito, tener menos de 100 usuarios, funcionar sin internet o usar software libre.',
      'Ser desarrollado por una universidad, una ONG, un ayuntamiento pequeño o una startup.',
      'Usar datos anonimizados, no tener interfaz web, ejecutarse en local o borrar datos cada hora.',
      '(a) Estar destinado a realizar una tarea procedimental limitada; (b) estar destinado a mejorar el resultado de una actividad humana previamente completada; (c) estar destinado a detectar patrones de toma de decisiones o desviaciones sin sustituir la valoración humana previamente completada ni influir en ella sin una revisión humana adecuada; o (d) estar destinado a realizar una tarea preparatoria para una evaluación pertinente a efectos de los casos del Anexo III.',
    ],
    correctOptionIndex: 3,
    explanation:
      'El artículo 6.3 enumera de forma cerrada los cuatro supuestos en los que un sistema del Anexo III no influye materialmente en la toma de decisiones (tarea procedimental limitada, mejora de resultado humano previo, detección de patrones/desviaciones sin sustituir valoración humana, o tarea preparatoria como indexación o traducción de documentos), siempre que NO realice elaboración de perfiles de personas físicas.',
    enterpriseLesson:
      'Si tu herramienta para RR.HH. o justicia solo traduce, transcribe audio o formatea documentos sobre una decisión humana ya tomada (Art. 6.3.a/b/d) sin perfilar personas, documenta la evaluación del Art. 6.4 y regístrala bajo el Art. 49.2 para quedar exento de los requisitos de alto riesgo.',
    citations: [
      makeCitation({
        id: 'art_6.p3',
        targetType: 'paragraph',
        articleId: 'art_6',
        paragraphId: 'art_6.p3',
        displayLabel: 'Art. 6.3(a)-(d) · Reglamento (UE) 2024/1689',
        exactQuote:
          'a) el sistema de IA está destinado a realizar una tarea procedimental limitada; b) el sistema de IA está destinado a mejorar el resultado de una actividad humana previamente completada; c) el sistema de IA está destinado a detectar patrones de toma de decisiones o desviaciones con respecto a patrones anteriores de toma de decisiones y no está destinado a sustituir la valoración humana previamente completada... d) el sistema de IA está destinado a realizar una tarea preparatoria.',
      }),
    ],
  },
  {
    id: 'qz_84',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_7',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Según el artículo 7.1, ¿qué dos condiciones acumulativas deben cumplirse para que la Comisión Europea pueda añadir o modificar casos de uso de alto riesgo en el Anexo III mediante actos delegados?',
    options: [
      '(a) Que los sistemas de IA estén destinados a ser utilizados en cualquiera de los ámbitos ya enumerados en el Anexo III (puntos 1 a 8), Y (b) que planteen un riesgo de daño para la salud y la seguridad, o un impacto adverso en los derechos fundamentales, que sea equivalente o superior al riesgo que plantean los sistemas de IA de alto riesgo que ya figuran en el Anexo III.',
      'Que lo solicite al menos una empresa competidora y que el sistema tenga más de un millón de usuarios.',
      'Que la Comisión quiera añadir cualquier sector nuevo ajeno a los 8 ámbitos del Anexo III sin pasar por el Parlamento.',
      'Que hayan transcurrido al menos 15 años desde la entrada en vigor.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 7.1 acota el poder delegado de la Comisión: no puede crear un noveno ámbito sectorial ex novo por acto delegado, sino únicamente añadir o modificar casos de uso DENTRO de los 8 ámbitos ya listados en el Anexo III (letra a) y siempre que su nivel de riesgo para la salud, seguridad o derechos fundamentales sea equivalente o superior al de los sistemas ya incluidos (letra b). Además, el artículo 7.3 le permite suprimir casos de uso si dejan de plantear tales riesgos.',
    enterpriseLesson:
      'Vigila los actos delegados de la Comisión si operas en cualquiera de los 8 sectores del Anexo III, ya que nuevos subcasos de uso dentro de esos mismos sectores pueden incorporarse o suprimirse mediante el procedimiento del Art. 7.',
    citations: [
      makeCitation({
        id: 'art_7.p1',
        targetType: 'paragraph',
        articleId: 'art_7',
        paragraphId: 'art_7.p1',
        displayLabel: 'Art. 7.1 y 7.3 · Reglamento (UE) 2024/1689',
        exactQuote:
          'La Comisión estará facultada para adoptar actos delegados con arreglo al artículo 97 a fin de modificar el anexo III añadiendo o modificando casos de uso de sistemas de IA de alto riesgo cuando se cumplan las dos condiciones siguientes: a) que los sistemas de IA estén destinados a ser utilizados en cualquiera de los ámbitos enumerados en el anexo III; b) que los sistemas de IA planteen un riesgo de daño para la salud y la seguridad, o un impacto adverso en los derechos fundamentales, que sea equivalente o superior al riesgo de daño o de impacto adverso que plantean los sistemas de IA de alto riesgo a que ya se refiere el anexo III.',
      }),
    ],
  },
  {
    id: 'qz_85',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_8',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según el artículo 8.1, al determinar las medidas técnicas para garantizar que un sistema de IA de alto riesgo cumple los requisitos de la Sección 2 (Arts. 9 a 15), ¿qué tres elementos deben tenerse en cuenta expresamente?',
    options: [
      'El precio de venta del software, el país de nacimiento de los programadores y el tamaño de la oficina.',
      'Su finalidad prevista, el estado de la técnica generalmente reconocido en materia de IA y de tecnologías relacionadas con la IA, y el sistema de gestión de riesgos a que se refiere el artículo 9.',
      'Únicamente las normas técnicas estadounidenses del NIST.',
      'La opinión de las agencias de calificación bursátil.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 8.1 establece el criterio rector de cumplimiento de toda la Sección 2: los sistemas de alto riesgo cumplirán los requisitos teniendo en cuenta su finalidad prevista y el estado de la técnica generalmente reconocido en materia de IA, asegurando que las soluciones adoptadas se adecuen al sistema de gestión de riesgos del artículo 9.',
    enterpriseLesson:
      'El estándar legal de diligencia técnica evoluciona con el «estado de la técnica generalmente reconocido» (state of the art): tus defensas de seguridad y mitigación de sesgos deben actualizarse conforme avancen las normas armonizadas y estándares técnicos.',
    citations: [
      makeCitation({
        id: 'art_8.p1',
        targetType: 'paragraph',
        articleId: 'art_8',
        paragraphId: 'art_8.p1',
        displayLabel: 'Art. 8.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los sistemas de IA de alto riesgo cumplirán los requisitos establecidos en la presente sección, teniendo en cuenta su finalidad prevista, así como el estado de la técnica generalmente reconocido en materia de IA y de tecnologías relacionadas con la IA. El sistema de gestión de riesgos a que se refiere el artículo 9 velará por el cumplimiento de dichos requisitos.',
      }),
    ],
  },
  {
    id: 'qz_86',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_9',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      '¿Cómo define el artículo 9.2 la naturaleza del sistema de gestión de riesgos para sistemas de IA de alto riesgo, y qué exige el artículo 9.9 respecto a los menores de edad?',
    options: [
      'Es una auditoría única que se realiza un día antes de lanzar el producto y no vuelve a tocarse.',
      'Es un cuestionario voluntario que solo rellenan las empresas públicas.',
      'Se entiende como un proceso iterativo continuo planificado y ejecutado durante todo el ciclo de vida de un sistema de IA de alto riesgo que requiere revisiones y actualizaciones periódicas sistemáticas; además, el artículo 9.9 obliga a prestar consideración específica a si el sistema puede tener un impacto adverso en personas menores de 18 años o colectivos vulnerables.',
      'Solo analiza riesgos financieros para los accionistas del proveedor.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 9.2 configura el sistema de gestión de riesgos como un proceso iterativo continuo durante todo el ciclo de vida del sistema (alimentado por las pruebas de diseño y por la vigilancia poscomercialización del Art. 72), y el artículo 9.9 exige que los proveedores presten consideración a si es probable que el sistema de alto riesgo tenga un impacto adverso en personas menores de 18 años y, en su caso, en otros colectivos vulnerables.',
    enterpriseLesson:
      'En la matriz de gestión de riesgos del Art. 9, incluye obligatoriamente una sección específica evaluando el impacto potencial sobre menores de 18 años y colectivos vulnerables (Art. 9.9).',
    citations: [
      makeCitation({
        id: 'art_9.p2',
        targetType: 'paragraph',
        articleId: 'art_9',
        paragraphId: 'art_9.p2',
        displayLabel: 'Art. 9.2 y 9.9 · Reglamento (UE) 2024/1689',
        exactQuote:
          'El sistema de gestión de riesgos se entenderá como un proceso iterativo continuo planificado y ejecutado durante todo el ciclo de vida de un sistema de IA de alto riesgo, que requiere revisiones y actualizaciones periódicas sistemáticas.',
      }),
    ],
  },
  {
    id: 'qz_87',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_9',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: true,
    question:
      'Según los apartados 6, 7 y 8 del artículo 9, ¿cuándo y cómo deben realizarse las pruebas de los sistemas de IA de alto riesgo para determinar las medidas de gestión de riesgos más adecuadas?',
    options: [
      'Únicamente después de que el sistema lleve dos años comercializado.',
      'Solo mediante encuestas de satisfacción comercial.',
      'Sin definir umbrales previos, improvisando las métricas según los resultados obtenidos.',
      'En cualquier momento a lo largo del proceso de desarrollo y, en todo caso, antes de su introducción en el mercado o puesta en servicio, realizándose con respecto a parámetros (métricas) y umbrales probabilísticos definidos previamente que sean adecuados a la finalidad prevista del sistema de IA de alto riesgo.',
    ],
    correctOptionIndex: 3,
    explanation:
      'Los apartados 7 y 8 del artículo 9 exigen que las pruebas de los sistemas de IA de alto riesgo se realicen antes de su introducción en el mercado o puesta en servicio, y que se contrasten con parámetros y umbrales probabilísticos definidos PREVIAMENTE por el proveedor como adecuados para la finalidad prevista.',
    enterpriseLesson:
      'En MLOps de alto riesgo, debes fijar y documentar los umbrales de aceptación (precisión, tasa de falsos positivos/negativos por subgrupo demográfico, robustez) ANTES de ejecutar el conjunto de pruebas de validación final.',
    citations: [
      makeCitation({
        id: 'art_9.p7',
        targetType: 'paragraph',
        articleId: 'art_9',
        paragraphId: 'art_9.p7',
        displayLabel: 'Art. 9.6, 9.7 y 9.8 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las pruebas de los sistemas de IA de alto riesgo se realizarán, según proceda, en cualquier momento a lo largo del proceso de desarrollo y, en todo caso, antes de su introducción en el mercado o de su puesta en servicio. Las pruebas se realizarán con respecto a parámetros y umbrales probabilísticos definidos previamente que sean adecuados a la finalidad prevista del sistema de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_88',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_10',
    titleId: 'tit_III',
    difficulty: 'intermedio',
    isPracticalCase: false,
    question:
      'Según los apartados 3 y 4 del artículo 10, ¿qué características de calidad deben cumplir los conjuntos de datos de entrenamiento, validación y prueba de un sistema de IA de alto riesgo?',
    options: [
      'Deben ser pertinentes, suficientemente representativos y, en la mayor medida posible, carecer de errores y estar completos en vista de la finalidad prevista, teniendo además en cuenta las características o elementos particulares del ámbito geográfico, contextual, conductual o funcional específico en el que se prevé utilizar el sistema.',
      'Deben estar compuestos exclusivamente por datos sintéticos generados al azar.',
      'Basta con que tengan más de 10 millones de filas, sin importar si provienen de otro continente con demografía distinta.',
      'Solo deben revisarse los datos de prueba, pero no los de entrenamiento.',
    ],
    correctOptionIndex: 0,
    explanation:
      'El artículo 10.3 exige que los conjuntos de datos de entrenamiento, validación y prueba sean pertinentes, suficientemente representativos y, en la mayor medida posible, libres de errores y completos; y el artículo 10.4 obliga a que tengan en cuenta las características particulares del ámbito geográfico, contextual, conductual o funcional específico donde se va a desplegar el sistema (por ejemplo, datos representativos de la población europea/española).',
    enterpriseLesson:
      'Entrenar un modelo médico, crediticio o de RR.HH. únicamente con datasets norteamericanos o asiáticos y desplegarlo en España sin validar su representatividad geográfica y contextual incumple el Art. 10.4.',
    citations: [
      makeCitation({
        id: 'art_10.p3',
        targetType: 'paragraph',
        articleId: 'art_10',
        paragraphId: 'art_10.p3',
        displayLabel: 'Art. 10.3 y 10.4 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Los conjuntos de datos de entrenamiento, validación y prueba serán pertinentes, suficientemente representativos y, en la mayor medida posible, carecerán de errores y estarán completos en vista de la finalidad prevista. Tendrán las propiedades estadísticas adecuadas, también, cuando proceda, en lo que respecta a las personas o colectivos de personas en relación con los cuales esté previsto utilizar el sistema de IA de alto riesgo.',
      }),
    ],
  },
  {
    id: 'qz_89',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_10',
    titleId: 'tit_III',
    difficulty: 'avanzado',
    isPracticalCase: false,
    question:
      'Cuando un proveedor de alto riesgo se acoge excepcionalmente al artículo 10.5 para tratar categorías especiales de datos personales (Art. 9.1 RGPD) con el fin de detectar y corregir sesgos, ¿cuál de las siguientes seis condiciones acumulativas es OBLIGATORIA según las letras a) a f) del artículo 10.5?',
    options: [
      'Vender posteriormente los datos especiales a terceros para amortizar el coste de la auditoría.',
      'Que la detección y corrección de sesgos no pueda lograrse eficazmente tratando otros datos (incluidos datos sintéticos o anonimizados), que los datos estén sujetos a limitaciones técnicas de reutilización y medidas de seguridad/seudonimización, que no se transmitan ni transfieran a terceros, y que se supriman una vez corregido el sesgo o al finalizar el período de conservación, lo que ocurra primero.',
      'Publicar los datos sensibles en el repositorio público del proyecto.',
      'Conservar los datos sensibles de forma indefinida.',
    ],
    correctOptionIndex: 1,
    explanation:
      'El artículo 10.5 impone seis salvaguardias acumulativas estrictas (letras a a f): imposibilidad de lograrlo con datos sintéticos o anonimizados (a); limitaciones técnicas de reutilización, seguridad y seudonimización (b); acceso estrictamente restringido y confidencial (c); prohibición de transmitir, transferir o dar acceso a otras partes (d); supresión de los datos especiales una vez corregido el sesgo o al expirar su retención (e); y justificación en los registros del RGPD de por qué el tratamiento era estrictamente necesario (f).',
    enterpriseLesson:
      'En el Registro de Actividades de Tratamiento (RAT del RGPD), documenta los 6 requisitos del Art. 10.5(a)-(f) antes de ejecutar cualquier test de sesgo con atributos sensibles y automatiza su borrado al concluir la corrección.',
    citations: [
      makeCitation({
        id: 'art_10.p5',
        targetType: 'paragraph',
        articleId: 'art_10',
        paragraphId: 'art_10.p5',
        displayLabel: 'Art. 10.5(a)-(f) · Reglamento (UE) 2024/1689',
        exactQuote:
          'a) que la detección y corrección de sesgos no pueda lograrse de manera eficaz tratando otros datos, incluidos datos sintéticos o anonimizados... d) que las categorías especiales de datos personales no se transmitan ni transfieran a otras partes... e) que las categorías especiales de datos personales se supriman una vez que se haya corregido el sesgo o que los datos personales hayan llegado al final de su período de conservación, lo que ocurra primero;',
      }),
    ],
  },
  {
    id: 'qz_90',
    topicId: 'high_risk',
    topicLabel: 'Sistemas de Alto Riesgo (Arts. 6-49)',
    articleId: 'art_11',
    titleId: 'tit_III',
    difficulty: 'básico',
    isPracticalCase: true,
    question:
      'Una pyme o empresa emergente (startup) desarrolla un sistema de IA de alto riesgo y debe elaborar la documentación técnica del artículo 11 (Anexo IV) antes de introducirlo en el mercado. ¿Qué facilidad específica le concede el artículo 11.1?',
    options: [
      'Las pymes y startups están exentas de elaborar documentación técnica.',
      'Pueden entregar la documentación 5 años después de empezar a vender.',
      'Las pymes, incluidas las empresas emergentes, podrán proporcionar los elementos de la documentación técnica especificados en el Anexo IV de manera simplificada utilizando un formulario de documentación técnica simplificado establecido por la Comisión, que será aceptado por los organismos notificados a efectos de la evaluación de la conformidad.',
      'Solo tienen que presentar una diapositiva comercial.',
    ],
    correctOptionIndex: 2,
    explanation:
      'El artículo 11.1 prevé expresamente que las pymes, incluidas las empresas emergentes, puedan cumplimentar los elementos de la documentación técnica del Anexo IV de manera simplificada mediante el formulario oficial establecido por la Comisión Europea, obligando a los organismos notificados a aceptar dicho formulario en las evaluaciones de conformidad.',
    enterpriseLesson:
      'Si tu empresa califica como pyme o startup, utiliza el formulario oficial simplificado del Anexo IV (Art. 11.1) para reducir costes de ingeniería regulatoria con plena validez ante organismos notificados y la AESIA.',
    citations: [
      makeCitation({
        id: 'art_11.p1',
        targetType: 'paragraph',
        articleId: 'art_11',
        paragraphId: 'art_11.p1',
        displayLabel: 'Art. 11.1 · Reglamento (UE) 2024/1689',
        exactQuote:
          'Las pymes, incluidas las empresas emergentes, podrán proporcionar los elementos de la documentación técnica especificados en el anexo IV de manera simplificada. A tal fin, la Comisión establecerá un formulario de documentación técnica simplificado orientado a las necesidades de las pequeñas empresas y las microempresas. Cuando una pyme, incluida una empresa emergente, opte por proporcionar la información exigida en el anexo IV de manera simplificada, utilizará el formulario a que se refiere el presente apartado. Los organismos notificados aceptarán dicho formulario a efectos de la evaluación de la conformidad.',
      }),
    ],
  },
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
      'Sí, está prohibido unificar la documentación y debe duplicar todos los archivos.',
      'Solo debe elaborar el del Reglamento de IA, quedando derogado el MDR.',
      'No necesita elaborar ninguno si el hospital es público.',
      'No: el artículo 11.2 establece que cuando un sistema de IA de alto riesgo relacionado con un producto al que sean aplicables los actos legislativos del Anexo I, Sección A, se introduzca en el mercado o se ponga en servicio, se elaborará una ÚNICA documentación técnica que contenga toda la información establecida en el Anexo IV junto con la exigida en dichos actos legislativos.',
    ],
    correctOptionIndex: 3,
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
      '(a) El registro de la duración de cada utilización del sistema (fecha y hora de inicio y fin); (b) la base de datos de referencia con la que el sistema ha cotejado los datos de entrada; (c) los datos de entrada con respecto a los cuales la búsqueda ha dado lugar a una coincidencia (match); y (d) la identificación de las personas físicas que hayan participado en la verificación de los resultados a que se refiere el artículo 14.5.',
      'Únicamente el consumo eléctrico de la cámara y la temperatura ambiente.',
      'Solo el nombre del fabricante de la lente óptica.',
      'La dirección postal de todas las personas que pasen por la calle aunque no den coincidencia.',
    ],
    correctOptionIndex: 0,
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
      'Únicamente el precio de renovación anual de la licencia.',
      'La identidad y datos de contacto del proveedor; las características, capacidades y limitaciones de rendimiento del sistema (incluidos su finalidad prevista, nivel de precisión, solidez y ciberseguridad, circunstancias que puedan provocar riesgos o discriminación, y especificaciones de los datos de entrada); las medidas de supervisión humana (incluidas medidas técnicas para facilitar la interpretación de los resultados de salida); y la vida útil prevista y medidas de mantenimiento y recogida de logs.',
      'El currículum vitae de todos los becarios que participaron en el proyecto.',
      'Solo el logotipo del marcado CE sin texto explicativo.',
    ],
    correctOptionIndex: 1,
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
      'Fomentar que el operador acepte siempre la primera recomendación del sistema sin cuestionarla para ahorrar tiempo.',
      'Ocultar el nivel de confianza del modelo para no confundir al operador.',
      'Ser conscientes de la posible tendencia a confiar automáticamente o en exceso en los resultados de salida generados por un sistema de IA de alto riesgo («sesgo de automatización»), así como poder decidir no utilizar el sistema, descartar, invalidar o revertir sus resultados de salida, e intervenir o interrumpir el sistema mediante un botón de «parada» o procedimiento similar que permita detenerlo de forma segura.',
      'Impedir que el operador humano pueda contradecir al algoritmo.',
    ],
    correctOptionIndex: 2,
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
      'Basta con instalar un antivirus comercial estándar en el ordenador del recepcionista.',
      'Solo se exige cifrar el disco duro donde se guarda la factura.',
      'No se exige ninguna medida específica para sistemas que continúen aprendiendo tras su despliegue.',
      'En solidez: planes de prevención de fallos (redundancia o copias de seguridad) y, en sistemas con aprendizaje continuo, mitigación del riesgo de que resultados futuros sesgados influyan en entradas futuras («bucles de retroalimentación»). En ciberseguridad: soluciones para prevenir, detectar y responder a ataques que intenten manipular el conjunto de datos de entrenamiento («envenenamiento de datos»), componentes preentrenados («envenenamiento de modelos»), entradas diseñadas para que el modelo cometa un error («ejemplos adversarios» o «evasión de modelos») o ataques a la confidencialidad.',
    ],
    correctOptionIndex: 3,
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
      'Deben indicar en el sistema de IA de alto riesgo (o, cuando no sea posible, en su embalaje o en la documentación que lo acompañe) su nombre, su nombre comercial registrado o su marca registrada y su dirección de contacto; y deben asegurarse de que el sistema de IA de alto riesgo cumpla los requisitos de accesibilidad de conformidad con las Directivas (UE) 2016/2102 y (UE) 2019/882 (Acta Europea de Accesibilidad).',
      'Pueden comercializar el sistema de forma totalmente anónima.',
      'Están exentos de cumplir cualquier normativa de accesibilidad para personas con discapacidad.',
      'Solo deben indicar un apartado de correos sin nombre de empresa.',
    ],
    correctOptionIndex: 0,
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
      'Exige exactamente el mismo volumen burocrático a una microempresa de 3 empleados que a una multinacional de 100.000 empleados.',
      'La aplicación de los trece aspectos del sistema de gestión de la calidad (Art. 17.1.a-m) será PROPORCIONADA al tamaño de la organización del proveedor, documentándose en forma de políticas, procedimientos e instrucciones escritos; además, las entidades financieras reguladas pueden integrarlo en sus sistemas de gobernanza y control interno existentes.',
      'El sistema de gestión de la calidad es meramente verbal y no requiere políticas escritas.',
      'Solo es obligatorio a partir del año 2035.',
    ],
    correctOptionIndex: 1,
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
      'Se destruye toda la documentación inmediatamente el día del cierre de la empresa.',
      'La obligación desaparece por completo.',
      'Cada Estado miembro determinará las condiciones en las que la documentación a que se refiere el artículo 18.1 permanezca a disposición de las autoridades nacionales competentes durante el período de 10 años para los casos en que un proveedor o su representante autorizado establecido en su territorio se declare en quiebra o ponga fin a su actividad antes de que finalice dicho período.',
      'Los clientes particulares pasan a ser responsables penales de redactar de nuevo el Anexo IV.',
    ],
    correctOptionIndex: 2,
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
      'Deben borrar los logs cada 48 horas.',
      'Están exentos de generar logs.',
      'Deben enviar los logs en papel al Banco Central Europeo cada mañana.',
      'Conservarán los archivos de registro generados automáticamente por sus sistemas de IA de alto riesgo como parte de la documentación contemplada en la legislación pertinente en materia de servicios financieros.',
    ],
    correctOptionIndex: 3,
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
      'Adoptar inmediatamente las medidas correctoras necesarias para poner el sistema en conformidad, retirarlo del mercado, desactivarlo o recuperarlo, según proceda; informar de ello a los distribuidores, responsables del despliegue, representante autorizado e importadores; y si presenta un riesgo en el sentido del artículo 79.1, informar inmediatamente a las autoridades de vigilancia del mercado de los Estados miembros y, en su caso, al organismo notificado.',
      'Esperar a que venza el contrato anual de los clientes sin comunicar el fallo.',
      'Corregirlo en silencio únicamente para los nuevos clientes.',
      'Solo informar a su departamento de marketing.',
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
      'Exclusivamente en latín o en esperanto.',
      'En una lengua que pueda ser fácilmente comprendida por dicha autoridad, que será una de las lenguas oficiales de las instituciones de la Unión determinada por el Estado miembro de que se trate.',
      'Únicamente en el idioma del tercer país donde resida la matriz del proveedor.',
      'En código binario sin traducir.',
    ],
    correctOptionIndex: 1,
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
      'Ocultar el incumplimiento para no perder su comisión mercantil.',
      'Seguir comercializando el sistema hasta que caduque el contrato.',
      'Poner fin inmediatamente al mandato cuando considere o tenga motivos para considerar que el proveedor actúa de forma contraria a las obligaciones que le incumben en virtud del Reglamento, e informar inmediatamente de la finalización del mandato y de los motivos a la autoridad de vigilancia del mercado pertinente y, en su caso, al organismo notificado.',
      'Esperar 5 años antes de comunicarlo.',
    ],
    correctOptionIndex: 2,
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
      'No tiene que comprobar nada si el fabricante tiene página web.',
      'Solo debe comprobar que el precio esté expresado en euros.',
      'Debe conservar los documentos únicamente durante 3 meses.',
      'Debe asegurarse de que el proveedor ha realizado la evaluación de la conformidad, ha elaborado la documentación técnica, el sistema lleva el marcado CE y va acompañado de la declaración UE de conformidad e instrucciones de uso, y que el proveedor ha designado un representante autorizado; además, debe indicar en el sistema/embalaje/documentación su propio nombre, marca y dirección de contacto, y conservar durante 10 años copia del certificado del organismo notificado, de las instrucciones de uso y de la declaración UE de conformidad.',
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
      'No: cuando un distribuidor considere o tenga motivos para considerar, sobre la base de la información que obre en su poder, que un sistema de IA de alto riesgo no es conforme con los requisitos del Capítulo III, Sección 2, NO comercializará dicho sistema hasta que haya sido puesto en conformidad, y si presenta un riesgo informará al proveedor o importador y a las autoridades competentes.',
      'Sí, puede venderlo durante 6 meses de carencia.',
      'Sí, si hace un descuento del 20 % al comprador.',
      'Los distribuidores no tienen ninguna obligación en el Reglamento de IA.',
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
      'El proveedor inicial sigue siendo el único responsable y el nuevo proveedor no asume obligaciones.',
      'El proveedor que haya introducido inicialmente en el mercado o puesto en servicio el sistema de IA dejará de ser considerado proveedor de ese sistema concreto y cooperará estrechamente con el nuevo proveedor, facilitándole la información necesaria y el acceso técnico razonablemente esperado para cumplir el Reglamento, SALVO en aquellos casos en que el proveedor inicial haya especificado claramente que su sistema de IA no debe transformarse en un sistema de IA de alto riesgo.',
      'El proveedor inicial debe regalarle todas sus patentes.',
      'El artículo 25 prohíbe cualquier cooperación entre proveedor inicial y nuevo proveedor.',
    ],
    correctOptionIndex: 1,
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
      'El transportista que entrega la máquina.',
      'El usuario final que pulsa el botón de encendido.',
      'El fabricante del producto será considerado proveedor del sistema de IA de alto riesgo y estará sujeto a las obligaciones del artículo 16 si el sistema de IA de alto riesgo se introduce en el mercado junto con el producto con el nombre o la marca comercial del fabricante del producto, o si se pone en servicio con el nombre o la marca comercial del fabricante del producto después de que el producto haya sido introducido en el mercado.',
      'Nadie, porque el Anexo I anula el artículo 16.',
    ],
    correctOptionIndex: 2,
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
      'Seguir utilizándolo hasta final de mes y comentarlo en la reunión anual.',
      'Reprogramar por su cuenta el código fuente sin avisar al proveedor.',
      'Solo apagar el monitor durante unos minutos.',
      'Informar sin demora indebida al proveedor o al distribuidor y a la autoridad de vigilancia del mercado pertinente, y SUSPENDER la utilización de ese sistema (así como informar inmediatamente primero al proveedor y luego a las autoridades si detecta un incidente grave).',
    ],
    correctOptionIndex: 3,
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
      'No: según el artículo 26.8, los responsables del despliegue que sean autoridades públicas o instituciones de la Unión cumplirán las obligaciones de inscripción del artículo 49 y, si constatan que el sistema de alto riesgo que prevén utilizar no ha sido inscrito en la base de datos de la UE a que se refiere el artículo 71, NO utilizarán dicho sistema e informarán de ello al proveedor o al distribuidor.',
      'Sí, las administraciones públicas pueden usar sistemas sin registrar.',
      'Sí, siempre que el contrato sea menor de 15.000 euros.',
      'Solo tiene que esperar 48 horas y puede encenderlo.',
    ],
    correctOptionIndex: 0,
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
      'Entregarles una copia impresa del código fuente.',
      'Informar a las personas físicas de que están sujetas a la utilización del sistema de IA de alto riesgo (sin perjuicio de lo dispuesto en el artículo 50, y aplicando una regla adaptada para fines policiales en consonancia con el artículo 13 de la Directiva UE 2016/680).',
      'Pagarles una compensación económica por cada consulta.',
      'Ninguna, porque el Anexo III es confidencial.',
    ],
    correctOptionIndex: 1,
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
      'Solo contiene el presupuesto financiero del proyecto y la lista de servidores.',
      'Obliga a repetir desde cero todos los apartados ya realizados en la EIPD del RGPD.',
      'Debe constar de: (a) descripción de los procesos del desplegador en que se utilizará el sistema conforme a su finalidad prevista; (b) período de tiempo y frecuencia de uso; (c) categorías de personas físicas y colectivos que puedan verse afectados en el contexto específico; (d) riesgos específicos de perjuicio que puedan afectar a esas categorías teniendo en cuenta la información del proveedor (Art. 13); (e) descripción de la aplicación de las medidas de supervisión humana según las instrucciones; y (f) medidas que se adoptarán si se materializan dichos riesgos (gobernanza interna y mecanismos de reclamación). Además, según el Art. 27.4, si ya se cumple alguna obligación mediante una EIPD del Art. 35 RGPD, la FRIA complementará dicha evaluación de impacto en la protección de datos.',
      'Solo requiere una firma electrónica sin contenido descriptivo.',
    ],
    correctOptionIndex: 2,
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
      'Son exactamente la misma entidad.',
      'El organismo notificado es un ministerio público que aprueba leyes y la autoridad notificante es una empresa privada.',
      'Solo existen en terceros países fuera de la Unión Europea.',
      'La «autoridad notificante» (Art. 28) es la autoridad pública designada por cada Estado miembro como responsable de establecer y aplicar los procedimientos necesarios para la evaluación, designación, notificación y supervisión de los organismos de evaluación de la conformidad; mientras que el «organismo notificado» (Arts. 29–31) es el organismo independiente de evaluación de la conformidad acreditado y notificado para auditar y certificar sistemas de IA de alto riesgo cuando se exige evaluación por terceros.',
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
      'No: según los apartados 4, 5 y 6 del artículo 31, los organismos notificados serán independientes del proveedor del sistema de IA de alto riesgo en relación con el cual realicen actividades de evaluación de la conformidad (así como de cualquier competidor del proveedor), y ni el organismo, ni sus máximos directivos ni el personal responsable de la evaluación podrán ser el diseñador, proveedor, instalador, comprador, propietario o usuario de los sistemas de IA que evalúen.',
      'Sí, es recomendable porque ya conocen el sistema por dentro.',
      'Sí, siempre que cobren tarifas separadas por consultoría y por certificación.',
      'Solo está prohibido si el cliente es una administración pública.',
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
      'Puede subcontratar el 100 % sin pedir permiso al cliente y se libera de toda responsabilidad.',
      'Solo podrá subcontratar tareas o recurrir a una filial previo acuerdo con el proveedor; deberá asegurarse de que el subcontratista o la filial cumpla los requisitos del artículo 31 e informar a la autoridad notificante; y el organismo notificado asumirá la PLENA responsabilidad de las tareas realizadas por los subcontratistas o las filiales, con independencia de dónde tengan su sede.',
      'Está totalmente prohibido subcontratar cualquier ensayo técnico puntual.',
      'Solo puede subcontratar en paraísos fiscales.',
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
      'Exigiendo siempre auditorías presenciales de 6 meses de duración.',
      'Cobrando el doble a las empresas de menos de 50 empleados.',
      'Evitando cargas innecesarias para los proveedores y teniendo debidamente en cuenta el tamaño de la empresa, el sector en que opera, su estructura y el grado de complejidad del sistema de IA de que se trate, en particular teniendo en cuenta los intereses de las pymes, incluidas las empresas emergentes, a la hora de fijar las tasas de evaluación de la conformidad.',
      'Rechazando solicitudes de microempresas.',
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
      'Los exime de las prohibiciones del artículo 5.',
      'Les permite operar sin marcado CE ni registro.',
      'Les concede una subvención europea directa.',
      'Se presumirá que son conformes con los requisitos establecidos en el Capítulo III, Sección 2 (o, según proceda, con las obligaciones de los artículos 53 y 55 para modelos GPAI), en la medida en que dichas normas armonizadas abarquen tales requisitos u obligaciones ("presunción de conformidad").',
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
      'La Comisión puede adoptarlas cuando no existan normas armonizadas publicadas o cuando su petición de normalización no haya sido aceptada o sufra retrasos indebidos; y los proveedores que no cumplan dichas especificaciones comunes deberán justificar debidamente en su documentación técnica que han adoptado soluciones técnicas que cumplen los requisitos en un nivel al menos equivalente.',
      'Las especificaciones comunes derogan el Reglamento y nadie puede usar soluciones equivalentes.',
      'Solo pueden adoptarlas los ayuntamientos.',
      'Se aplican sin consultar al Comité Europeo de IA ni a las partes interesadas.',
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
      'Con la obligación de informar a los sindicatos del artículo 26.7.',
      'Con los requisitos de ciberseguridad establecidos en el artículo 15 del Reglamento, en la medida en que el certificado de ciberseguridad o la declaración de conformidad, o partes de ellos, abarquen dichos requisitos.',
      'Con la exención de pagar tasas de registro.',
      'Con la prohibición del artículo 5.',
    ],
    correctOptionIndex: 1,
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
      'Nunca; el punto 1 del Anexo III siempre va por control interno sin excepción.',
      'Solo cuando el proveedor tenga menos de 10 empleados.',
      'Cuando NO existan normas armonizadas (Art. 40) ni especificaciones comunes (Art. 41), cuando el proveedor las haya aplicado solo en parte, o cuando dichas normas armonizadas existan pero se hayan publicado con una restricción; mientras que si ha aplicado íntegramente normas armonizadas o especificaciones comunes completas, puede optar entre el control interno (Anexo VI) o el organismo notificado (Anexo VII).',
      'Solo los días festivos.',
    ],
    correctOptionIndex: 2,
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
      'Cada vez que cambia el director financiero del proveedor o cambia el domicilio fiscal dentro del mismo país.',
      'Cada lunes a las 9 de la mañana.',
      'Solo cuando caduca el dominio web de la empresa.',
      'En caso de que sea objeto de una «modificación sustancial» (con independencia de que el sistema modificado esté destinado a ser distribuido ulteriormente o continúe siendo utilizado por el actual responsable del despliegue), advirtiendo que para los sistemas con aprendizaje continuo los cambios predeterminados en la evaluación inicial y el Anexo IV.2.f) no constituirán una modificación sustancial.',
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
      'El período que en ellos se indique, que no excederá de cuatro años en el caso de los sistemas de IA regidos por el Anexo I, ni de cinco años en el caso de los sistemas de IA regidos por el Anexo III, pudiendo prorrogarse por períodos adicionales que no excedan de cuatro o cinco años respectivamente previa solicitud del proveedor y sobre la base de una nueva evaluación.',
      'Validez perpetua e indefinida sin revisiones.',
      'Exactamente 30 días naturales.',
      '25 años.',
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
      'No puede tocar el certificado hasta que caduquen los 5 años.',
      'Teniendo en cuenta el principio de proporcionalidad, suspenderá o retirará el certificado expedido o le impondrá restricciones, a no ser que se garantice el cumplimiento de dichos requisitos mediante medidas correctoras adecuadas adoptadas por el proveedor del sistema dentro de un plazo adecuado fijado por el organismo notificado (motivando siempre su decisión, frente a la cual cabrá recurso según el Art. 45).',
      'Multar directamente al proveedor con 35 millones de euros.',
      'Confiscar los edificios de la empresa.',
    ],
    correctOptionIndex: 1,
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
      'No, no existe ninguna excepción ni siquiera en caso de catástrofe nacional.',
      'Sí, cualquier empresa privada puede autodeclararse en emergencia comercial para vender sin evaluación.',
      'Sí: como excepción al artículo 43 y previa solicitud debidamente justificada, cualquier autoridad de vigilancia del mercado podrá autorizar por un período de tiempo limitado la introducción o puesta en servicio de sistemas específicos de IA de alto riesgo en el territorio de su Estado miembro por razones excepcionales de seguridad pública o de protección de la vida y la salud de las personas, la protección del medio ambiente y la protección de activos industriales y de infraestructuras clave, mientras se llevan a cabo los procedimientos del artículo 43.',
      'Solo si el sistema infringe también el artículo 5.',
    ],
    correctOptionIndex: 2,
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
      'Únicamente el código fiscal de la empresa.',
      'El listado de todos los clientes que han comprado el producto.',
      'Solo el nombre del presidente del consejo.',
      'Además de la identificación del sistema, los datos del proveedor, las normas armonizadas aplicadas y los datos del organismo notificado (si procede), el Anexo V punto 5 exige que, cuando un sistema de IA de alto riesgo conlleve el tratamiento de datos personales, incluya una declaración de que dicho sistema cumple los Reglamentos (UE) 2016/679 (RGPD) y (UE) 2018/1725 y la Directiva (UE) 2016/680.',
    ],
    correctOptionIndex: 3,
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
      'Utilizará un marcado CE digital que sea fácilmente accesible a través de la interfaz desde la que se accede a dicho sistema o a través de un código legible por máquina fácilmente accesible u otros medios electrónicos (e irá seguido del número de identificación del organismo notificado únicamente si este ha intervenido en el procedimiento del artículo 43).',
      'Está exento de colocar el marcado CE por ser software en la nube.',
      'Debe enviar una pegatina física por correo postal a cada candidato entrevistado.',
      'Solo puede colocarlo en la fachada del edificio de sus oficinas.',
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
      'Solo las universidades públicas.',
      '(1) Los proveedores (o representantes autorizados) de sistemas de IA de alto riesgo del Anexo III antes de comercializarlos o ponerlos en servicio (Art. 49.1, Anexo VIII Sección A); (2) los proveedores que hayan concluido que su sistema del Anexo III NO es de alto riesgo con arreglo al artículo 6.3 antes de comercializarlo o ponerlo en servicio (Art. 49.2, Anexo VIII Sección B); y (3) los responsables del despliegue que sean autoridades u organismos públicos o personas que actúen en su nombre antes de poner en servicio o utilizar el sistema (Art. 49.3, Anexo VIII Sección C).',
      'Únicamente los consumidores finales que descarguen una aplicación móvil.',
      'Solo las empresas que hayan sido sancionadas previamente.',
    ],
    correctOptionIndex: 1,
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
      'Simplemente publicando un anuncio en prensa.',
      'Enviando un correo electrónico a sus clientes.',
      'Presentando una solicitud de notificación a la autoridad notificante del Estado miembro en el que esté establecido (acompañada de la descripción de actividades, módulo de evaluación y certificado de acreditación si existe), y solo podrá realizar las actividades de un organismo notificado si ni la Comisión ni los demás Estados miembros han formulado objeciones en el plazo de dos semanas tras la notificación (si hay certificado de acreditación) o de dos meses (si no se recurre a la acreditación).',
      'Automáticamente en el momento de constituir una sociedad mercantil.',
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
      'No necesitan seguro ni medidas de ciberseguridad.',
      'Pueden publicar en abierto la documentación técnica confidencial de los proveedores.',
      'Solo tienen que contratar un seguro de incendio del edificio.',
      'Deberán suscribir un seguro de responsabilidad civil adecuado para sus actividades de evaluación de la conformidad (salvo que el Estado miembro asuma la responsabilidad); su personal estará sujeto al secreto profesional respecto a toda información obtenida (protegiendo derechos de propiedad intelectual y secretos comerciales); y deberán contar con medidas internas y procedimientos que garanticen un nivel adecuado de ciberseguridad.',
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
      'La autoridad notificante restringirá, suspenderá o retirará la notificación, según proceda, en función de la gravedad del incumplimiento, informando inmediatamente a la Comisión y a los demás Estados miembros; y en caso de cese, suspensión o retirada, los expedientes se transferirán a otro organismo notificado a elección del proveedor o se pondrán a disposición de las autoridades responsables.',
      'Los certificados emitidos desaparecen sin dejar rastro y los expedientes se destruyen.',
      'El organismo notificado puede seguir certificando sistemas durante 10 años más.',
      'La Comisión Europea no tiene competencia para investigar la competencia de los organismos notificados.',
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
      'Cualquier empresa extranjera puede autodesignarse organismo notificado sin requisitos.',
      'Únicamente cuando la Unión haya celebrado un acuerdo de reconocimiento mutuo (ARM) con dicho tercer país, y siempre que dichos organismos cumplan los requisitos establecidos en el artículo 31 o requisitos equivalentes.',
      'Está prohibido incluso aunque exista un tratado internacional firmado por la Unión.',
      'Basta con que tengan una cuenta bancaria en su país.',
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
      'Únicamente el tamaño total en gigabytes de la carpeta de entrenamiento.',
      'Solo el nombre del proveedor de almacenamiento en la nube.',
      'Las hojas de datos que describan todas las metodologías de entrenamiento y las técnicas utilizadas, así como la información general sobre los conjuntos de datos utilizados, incluida información sobre su procedencia, su alcance y sus características principales, cómo se obtuvieron y seleccionaron los datos, los procedimientos de etiquetado (por ejemplo, para el aprendizaje supervisado) y las metodologías de limpieza de datos (por ejemplo, detección de valores atípicos).',
      'Adjuntar en texto plano todos los datos personales en bruto de millones de ciudadanos.',
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
      'Pagar una tasa municipal, publicar un comunicado de prensa y contratar una auditora externa.',
      'Solo firmar una declaración jurada sin revisar la documentación.',
      'Enviar los pesos del modelo a la policía local.',
      '(1) Verificar que el sistema de gestión de la calidad establecido cumple los requisitos del artículo 17; (2) examinar la información contenida en la documentación técnica (Anexo IV) a fin de evaluar la conformidad del sistema de IA con los requisitos esenciales pertinentes del Capítulo III, Sección 2; y (3) verificar que el proceso de diseño y desarrollo del sistema de IA y su vigilancia poscomercialización (Art. 72) son coherentes con la documentación técnica.',
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
      'Se le concederá acceso completo a los conjuntos de datos de entrenamiento, validación y prueba utilizados (incluso mediante interfaces de programación / APIs o medios remotos seguros), podrá exigir al proveedor que realice más pruebas o realizarlas él mismo, y cuando no quede convencido tras agotar otras vías, se le concederá acceso al código fuente del sistema de IA previa solicitud motivada (punto 4.5 del Anexo VII).',
      'Solo puede leer un resumen de dos páginas sin ver datos ni realizar pruebas.',
      'Tiene prohibido realizar pruebas propias sobre el sistema.',
      'Solo revisa las facturas contables del proveedor.',
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

