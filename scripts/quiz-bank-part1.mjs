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
      'Sí: el artículo 1.2 reconoce soberanía plena a cada Estado miembro para vetar unilateralmente cualquier sistema de IA que supere umbrales de riesgo fijados por sus autoridades nacionales de mercado.',
      'No: garantiza la libre circulación de sistemas de IA en el mercado interior (art. 1.1), impidiendo restricciones estatales unilaterales salvo que el propio Reglamento lo autorice expresamente.',
      'Solo mediante real decreto de emergencia de orden público tras solicitar dictamen vinculante a la Oficina Europea de IA y obtener aprobación por mayoría cualificada en el Comité de Inteligencia Artificial.',
      'Sí, al fundamentarse en el artículo 168 del TFUE sobre salud pública, opera como armonización de mínimos que faculta a los parlamentos autonómicos y nacionales para introducir prohibiciones suplementarias.',
    ],
    correctOptionIndex: 1,
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
      'Las exime plenamente de cualquier obligación del Reglamento si designan un representante autorizado en la Unión y constituyen una fianza de responsabilidad civil superior a diez millones de euros ante la Comisión.',
      'Solo las excluye si sus sistemas de IA han obtenido previamente una certificación de conformidad militar o policial homologada por la Oficina Europea de Inteligencia Artificial para misiones conjuntas en territorio de la Unión.',
      'El Reglamento no se aplica a autoridades públicas de terceros países ni organizaciones internacionales en el marco de tratados de cooperación policial o judicial con la UE o Estados miembros con garantías de derechos.',
      'Las exime de los requisitos sustantivos de alto riesgo del Título III, pero exige su inscripción en el registro público de la Unión y la auditoría bienal de sus algoritmos por un organismo notificado europeo acreditado.',
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
      'Permanece excluido de forma indefinida, pues el artículo 2.3 confiere inmunidad regulatoria permanente a todo software cuya arquitectura o pesos iniciales hayan sido financiados mediante fondos del Ministerio de Defensa.',
      'Queda exento de los requisitos de alto riesgo siempre que la entidad portuaria y la policía certifiquen que el sistema no realiza transferencias de metadatos biométricos hacia servidores ubicados fuera del territorio de la Unión.',
      'Solo debe cumplir las obligaciones de transparencia voluntaria del artículo 95, al presumirse que los sistemas de tecnología de doble uso mantienen la salvaguarda de seguridad nacional que declara el Estado miembro de origen.',
      'Queda plenamente sujeto al Reglamento: la exclusión del artículo 2.3 solo ampara sistemas introducidos o utilizados exclusivamente con fines militares o de defensa, aplicando el régimen general a usos policiales civiles.',
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
      'No: el artículo 2.8 excluye actividades de I+D previas a la comercialización, pero dispone expresamente que las pruebas en condiciones reales no están cubiertas por la exclusión y deben ajustarse al régimen del artículo 60.',
      'Sí: el artículo 2.6 ampara cualquier ensayo clínico o prueba con pacientes siempre que no se perciba contraprestación económica directa y la clínica privada cuente con autorización del comité de ética de la investigación médica.',
      'Sí, porque toda fase anterior a la primera factura comercial o distribución masiva del producto goza de exención completa de conformidad y registro bajo la salvaguardia general de innovación tecnológica del artículo 2.8.',
      'Solo queda sujeta si el modelo de diagnóstico se conecta a redes públicas de telecomunicaciones o almacena historiales médicos en infraestructuras informáticas compartidas en la nube con arreglo al artículo 60.2.',
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
      'Armoniza de forma plena y excluyente las relaciones laborales digitales, impidiendo que la legislación nacional o la negociación colectiva impongan obligaciones de información algorítmica adicionales a las del artículo 26.',
      'No impide que la Unión o los Estados miembros mantengan o aprueben normas legales más favorables para los trabajadores frente a la IA laboral, ni que fomenten o permitan convenios colectivos con mayores niveles de protección.',
      'Permite regular condiciones laborales más estrictas únicamente en empresas de más de doscientos cincuenta trabajadores y siempre que la autoridad laboral autonómica emita un informe favorable previo en el plazo de un mes.',
      'Deroga todas las facultades de información sindical sobre algoritmos en los Estados miembros, reservando la interlocución sobre sistemas de IA de recursos humanos exclusivamente al Comité Europeo de Inteligencia Artificial.',
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
      'Debe conservar los registros de generación durante seis meses y registrar el software en la base de datos comunitaria del artículo 71 para acreditar la ausencia de actividad económica remunerada ante la autoridad competente.',
      'Debe efectuar una evaluación simplificada de impacto en derechos fundamentales (FRIA) si el modelo genera imágenes de menores de edad o personas identificables según las pautas de transparencia previstas en el artículo 27.',
      'Ninguna: el artículo 2.10 excluye de las obligaciones a las personas físicas que utilicen sistemas de IA en el ejercicio de una actividad puramente personal de carácter no profesional (exención para uso doméstico o particular).',
      'Está obligado a incorporar una marca de agua visible y metadatos criptográficos en cada fotografía editada, notificando el uso doméstico a la autoridad nacional de protección de datos en un plazo de diez días hábiles.',
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
      'Cuando se introduzca en el mercado o ponga en servicio como sistema de alto riesgo (Título III), incurra en prácticas prohibidas del artículo 5 o quede sujeto a las obligaciones de transparencia específica del artículo 50.',
      'Cuando supere diez mil descargas mensuales, cuando su repositorio esté alojado fuera de la Unión o cuando su código fuente contenga librerías privativas que impidan la auditoría algorítmica por terceros evaluadores acreditados.',
      'Únicamente cuando el software se utilice en infraestructuras críticas del sector energético, se traduzca a más de tres lenguas oficiales de la Unión o reciba aportaciones de desarrolladores con sede en terceros países.',
      'Cuando la comunidad acepte donaciones voluntarias, cuando el sistema procese imágenes satelitales o cuando sea distribuido en plataformas comerciales con independencia de su finalidad prevista y nivel de riesgo real.',
    ],
    correctOptionIndex: 0,
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
      'Sí: cualquier programa informático que ejecute flujos lógicos condicionales y automatice decisiones de crédito financiero con repercusión sobre personas físicas se califica de sistema de IA de alto riesgo bajo el artículo 3.1.',
      'Sí, porque el concepto de autonomía del artículo 3.1 incluye cualquier software que procese datos bancarios y ejecute evaluaciones sin intervención de un operador humano en cada cálculo matemático realizado en los servidores.',
      'Depende exclusivamente de si el motor de reglas se aloja en un servidor local del banco o en una plataforma en la nube pública sujeta a las exigencias de ciberseguridad y gobernanza establecidas en el artículo 15 del Reglamento.',
      'No: el artículo 3.1 exige inferir de las entradas cómo generar salidas; el Considerando 12 aclara que la programación tradicional y los sistemas basados únicamente en reglas humanas para ejecutar operaciones automáticas no son IA.',
    ],
    correctOptionIndex: 3,
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
      'Únicamente los proveedores de sistemas de IA y los responsables del despliegue establecidos legalmente dentro del territorio de la Unión Europea.',
      'El proveedor, el fabricante del producto, el responsable del despliegue, el representante autorizado, el importador o el distribuidor en la Unión.',
      'Los organismos notificados, los evaluadores de conformidad independientes y las autoridades nacionales de vigilancia del mercado de los Estados miembros.',
      'Cualquier entidad mercantil que comercialice servicios de telecomunicaciones o suministre redes de conectividad digital en el mercado interior europeo.',
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
      'La finalidad prevista comprende los usos autorizados contractualmente por el usuario final, mientras que el uso indebido razonablemente previsible abarca exclusivamente los ciberataques maliciosos, manipulaciones fraudulentas o sabotajes externos tipificados penalmente.',
      'La finalidad prevista define los requisitos mínimos de ciberseguridad del sistema, mientras que el uso indebido razonablemente previsible es cualquier fallo o anomalía técnica imputable a defectos en los datos de entrenamiento suministrados por terceros proveedores.',
      'La «finalidad prevista» es el uso concebido por el proveedor en su documentación e instrucciones; el «uso indebido razonablemente previsible» es la utilización no ajustada a dicha finalidad resultante del comportamiento humano o de la interacción con otros sistemas.',
      'Son conceptos sinónimos a efectos del análisis de riesgos del artículo 9, diferenciándose únicamente en que el uso indebido solo es exigible a distribuidores e importadores pero nunca al proveedor original del sistema de IA comercializado en el mercado interior.',
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
      'Cuando los cambios y su rendimiento hayan sido predeterminados por el proveedor en la evaluación inicial de la conformidad y figuren descritos en la documentación técnica a que se refiere el punto 2, letra f), del Anexo IV.',
      'Cuando los reentrenamientos algorítmicos se ejecuten fuera del horario comercial y la variación acumulada de los pesos en la red neuronal no altere más del cinco por ciento del rendimiento estadístico global validado inicialmente.',
      'Siempre que el sistema conserve su interfaz gráfica original sin añadir nuevas funciones para el usuario final y mantenga idéntico nivel de ciberseguridad perimetral conforme a las normas armonizadas europeas aplicables al sector.',
      'Únicamente cuando el reentrenamiento se realice empleando conjuntos de datos sintéticos generados en un espacio controlado de pruebas (sandbox) que cuente con supervisión previa de la autoridad nacional de vigilancia del mercado.',
    ],
    correctOptionIndex: 0,
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
      'Exclusivamente la interrupción imprevista del suministro en infraestructuras digitales críticas durante un período superior a cuarenta y ocho horas continuadas, siempre que afecte a usuarios de más de dos Estados miembros de la Unión.',
      'Únicamente el fallecimiento de una o varias personas físicas derivado de fallos mecánicos directos de un sistema de IA integrado en maquinaria industrial pesada regulada por la normativa de armonización del Anexo I del Reglamento.',
      'Cualquier divergencia algorítmica imprevista que provoque pérdidas económicas empresariales superiores a dos millones de euros o que reduzca la precisión declarada en la documentación técnica en más de un quince por ciento.',
      'Cualquiera de estos cuatro: muerte o daño grave para la salud; alteración grave de infraestructuras críticas; vulneración de normas de la Unión de protección de derechos fundamentales; o daños graves a bienes o al medio ambiente.',
    ],
    correctOptionIndex: 3,
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
      'Sí: cualquier tecnología biométrica capaz de registrar parámetros faciales o gestuales del cuerpo humano califica como reconocimiento de emociones, con independencia de que analice estados fisiológicos o estados afectivos internos.',
      'No: se limita a deducir emociones o intenciones (felicidad, miedo, etc.) a partir de datos biométricos, y no abarca estados físicos como el dolor o la fatiga ni expresiones faciales salvo que se empleen para inferir emociones internas.',
      'Sí, pero únicamente cuando el sistema procese imágenes captadas en lugares de trabajo o centros de formación profesional y el operador omita recabar el consentimiento explícito previsto en el artículo 9 del Reglamento General de Protección de Datos.',
      'No, porque la definición legal del artículo 3.39 exige exclusivamente la captación directa de señales neuronales mediante interfaces cerebro-ordenador para poder hablar jurídicamente de reconocimiento emocional en el Derecho europeo.',
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
      'El modelo GPAI es todo software entrenado con menos de 10^25 FLOPs de cómputo acumulado bajo licencias libres, mientras que el sistema GPAI abarca exclusivamente las soluciones comerciales propietarias puestas a disposición mediante interfaces web de pago en la Unión.',
      'El modelo GPAI abarca únicamente arquitecturas de lenguaje natural destinadas a la generación de texto sintético, mientras que el sistema GPAI engloba de manera exclusiva soluciones multimodales de visión e inferencia integradas en entornos industriales críticos.',
      'El modelo GPAI (art. 3.63) es el componente de base entrenado a gran escala que requiere capas adicionales para operar, mientras que el sistema GPAI (art. 3.66) es el sistema de IA completo basado en dicho modelo que puede utilizarse directamente o integrarse en otras aplicaciones.',
      'No existe distinción material en el articulado: ambos conceptos se emplean de forma intercambiable en los artículos 51 a 56 para regular a cualquier algoritmo probabilístico con parámetros adaptativos comercializado en el mercado de la Unión Europea.',
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
      'Tanto a su personal como a las personas que operen sistemas de IA en su nombre, según sus conocimientos, experiencia, educación, contexto de uso y los colectivos afectados.',
      'Únicamente a los empleados en plantilla fija que diseñen o programen la arquitectura técnica del sistema, excluyendo a subcontratistas externos y encargados de tratamiento.',
      'Solo a los miembros del consejo de administración y directivos con poderes de representación legal ante las autoridades de supervisión del mercado de la Unión Europea.',
      'Exclusivamente a los operadores que atiendan reclamaciones sobre sistemas de alto riesgo enumerados en el Anexo III, quedando exenta la atención comercial ordinaria.',
    ],
    correctOptionIndex: 0,
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
      'En cualquier campaña comercial ordinaria que utilice segmentación psicográfica o pruebas A/B para optimizar la tasa de compra, con independencia de si se merman decisiones informadas o si concurren perjuicios considerables.',
      'Únicamente cuando el proveedor actúe con dolo acreditado judicialmente y el sistema utilice frecuencias de audio inaudibles o impulsos visuales de duración inferior a cincuenta milisegundos en medios de difusión pública.',
      'Solo si las técnicas engañosas se dirigen de forma exclusiva a menores de catorce años en plataformas digitales educativas y el daño económico directo resultante supera los umbrales de fraude agravado del Código Penal.',
      'Cuando altere de manera sustancial el comportamiento humano mermando apreciablemente la capacidad de decisión informada, haciendo tomar decisiones perjudiciales que causen o puedan causar perjuicios considerables físicos, psicológicos o financieros.',
    ],
    correctOptionIndex: 3,
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
      'No: el artículo 5.1(b) ampara únicamente la tutela de menores de edad o personas con discapacidad legalmente reconocida, quedando las situaciones de precariedad patrimonial reguladas por la normativa de crédito al consumo.',
      'Sí: el artículo 5.1(b) prohíbe explotar vulnerabilidades derivadas de la edad, discapacidad o de una situación social o económica específica, cuando altere sustancialmente el comportamiento causando perjuicios considerables.',
      'Solo incurre en infracción si la plataforma aplica tipos de interés que superen en diez puntos porcentuales el interés legal del dinero fijado anualmente por el Banco Central Europeo conforme a la legislación financiera.',
      'No se considera práctica prohibida si el prestatario firma electrónicamente un descargo de responsabilidad informado y el algoritmo ha sido auditado por un organismo notificado bajo el procedimiento del Anexo VII.',
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
      '(i) Que sea implementado por entidades bancarias privadas para evaluar préstamos, o (ii) que asigne notas numéricas de reputación basadas exclusivamente en infracciones de tráfico comunicadas por ayuntamientos.',
      '(i) Que procese datos de más de tres administraciones públicas simultáneamente, o (ii) que ejecute valoraciones algorítmicas automáticas sin permitir la intervención de un funcionario supervisor en el plazo de un mes.',
      '(i) Que cause trato perjudicial en contextos sociales desvinculados de donde se recabaron los datos, o (ii) que cause un trato perjudicial injustificado o desproporcionado respecto a la conducta social o su gravedad.',
      '(i) Que cruce información tributaria con historiales clínicos sanitarios, o (ii) que califique la fidelidad corporativa de empleados en centros de trabajo sin previa negociación con los comités de empresa.',
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
      'Sí, porque el artículo 5.1(d) prohíbe de forma taxativa cualquier herramienta de inferencia algorítmica utilizada por autoridades policiales o tributarias para prevenir, investigar o perseguir infracciones penales o administrativas.',
      'Solo es legal si la investigación se tramita ante la Fiscalía Europea y el modelo ha sido verificado mediante el procedimiento de evaluación de conformidad de urgencia regulado en el artículo 46 del presente Reglamento.',
      'Está prohibido salvo que el sospechoso haya sido condenado en firme previamente por blanqueo y el sistema de IA cuente con autorización judicial individualizada emitida en las veinticuatro horas previas al cruce de datos.',
      'No: la prohibición del artículo 5.1(d) no se aplica si el sistema apoya la valoración humana basada en hechos objetivos y verificables vinculados directamente a una actividad delictiva (clasificándose como alto riesgo en Anexo III).',
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
      'El ferroviario es legal por motivos médicos o de seguridad (art. 5.1.f, sujeto a alto riesgo); el de la universidad está prohibido al inferir emociones en un centro educativo sin fin médico o de seguridad.',
      'Ambos sistemas son plenamente legales siempre que las entidades publiquen avisos visibles y los afectados puedan solicitar la desconexión de los sensores en virtud del artículo 50 sobre transparencia informativa.',
      'El de la universidad es legal con fines de mejora pedagógica, mientras que el ferroviario está prohibido por vulnerar la intimidad corporal de los trabajadores protegida por el artículo 5.1(c) del Reglamento.',
      'Ambos están taxativamente prohibidos, pues el artículo 5.1(f) no admite excepción alguna para monitorizaciones biométricas continuadas en centros de trabajo ni en instituciones educativas de la Unión Europea.',
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
      'Permite categorizar opiniones políticas en campañas electorales siempre que el tratamiento se limite a mayores de edad y los datos sean anonimizados dentro de las cuarenta y ocho horas posteriores al escrutinio.',
      'No abarca el etiquetado o filtrado de conjuntos de datos biométricos adquiridos legalmente (como imágenes) ni la categorización biométrica legítima en el ámbito de la garantía del cumplimiento del Derecho.',
      'Excluye los sistemas de categorización comercial operados por redes sociales cuando tengan como único propósito recomendar contenidos religiosos o asociativos solicitados voluntariamente por el propio usuario registrado.',
      'Autoriza deducir la orientación sexual y el origen racial en procesos de selección laboral cuando sea indispensable para verificar cuotas de diversidad exigidas por directivas de la Unión en materia de igualdad.',
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
      'Estar sancionado en la legislación nacional correspondiente con una pena privativa de libertad cuya duración mínima obligatoria sea de al menos dos años de reclusión.',
      'Constituir una infracción penal grave castigada con penas de prisión de duración máxima de al menos un año o inhabilitación especial para empleo público en dicho Estado.',
      'Estar castigado en el Estado miembro de que se trate con pena o medida de seguridad privativa de libertad de una duración máxima de al menos cuatro años.',
      'Estar tipificado como delito societario o fiscal grave sancionado con pena privativa de libertad de duración máxima superior a tres años en la jurisdicción del Estado.',
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
      'Haber depositado una memoria de impacto ambiental ante la Comisión Europea y recabado la conformidad vinculante del Comité Europeo de Protección de Datos en un plazo no superior a treinta días naturales previos al despliegue.',
      'Haber obtenido dictamen favorable por unanimidad del parlamento autonómico y publicado el código fuente del algoritmo en el boletín oficial del Estado miembro para garantizar la auditoría ciudadana de los sesgos biométricos.',
      'Haber contratado una póliza de responsabilidad civil de cobertura ilimitada y notificado las coordenadas geoespaciales de las cámaras a la Oficina Europea de Inteligencia Artificial con cuarenta y ocho horas de antelación.',
      'Haber completado una evaluación del impacto en los derechos fundamentales (art. 27) y haber registrado el sistema en la base de datos de la Unión (art. 49), salvo urgencia justificada en que el registro se hace sin demora.',
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
      'Debe solicitarse a más tardar en 24 horas; si es rechazada, el uso cesa de inmediato y todos los datos, resultados y registros de salida generados son inmediatamente descartados y suprimidos.',
      'Debe solicitarse en el plazo máximo de setenta y dos horas; si es denegada, la policía puede conservar las grabaciones como diligencias previas reservadas durante un período de seis meses.',
      'Debe pedirse en cuarenta y ocho horas; si se rechaza, cesa el uso futuro pero se conservan los resultados obtenidos que resulten de utilidad para la investigación penal en curso del sospechoso.',
      'Debe tramitarse en un plazo improrrogable de siete días naturales; en caso de denegación judicial, los datos biométricos se transfieren para su custodia cautelar al órgano de supervisión de mercado.',
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
      'Sí: al ser un reglamento europeo de eficacia directa con arreglo al artículo 288 del TFUE, surte plenos efectos directos sin requerir ley nacional habilitante, bastando una instrucción formal del mando policial responsable del operativo en la vía pública.',
      'No: el artículo 5.5 exige que el Estado miembro apruebe normas en su Derecho nacional para autorizar y regular el procedimiento de solicitud, concesión y supervisión, debiendo notificar cada uso a las autoridades de vigilancia y protección de datos.',
      'No: requiere la previa adopción de una directiva delegada de armonización aprobada formalmente por el Parlamento Europeo y el Consejo, así como una autorización de seguridad anual expresa concedida por el Comité Europeo de Inteligencia Artificial.',
      'Solo en casos de ciberterrorismo internacional, mientras que para los restantes supuestos del Anexo II basta con suscribir un protocolo de colaboración interadministrativa ratificado por el Ministerio de Asuntos Exteriores del Estado.',
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
      'Las autoridades policiales deben publicar en sus portales web oficiales los fotogramas anonimizados de cada intervención en el plazo máximo de diez días hábiles desde la clausura de la investigación penal.',
      'Los órganos judiciales autorizantes remitirán trimestralmente al Tribunal de Justicia de la Unión Europea las grabaciones y registros biométricos íntegros para su archivo centralizado en Luxemburgo.',
      'Las autoridades de vigilancia del mercado y de protección de datos remitirán informes anuales a la Comisión sobre dicho uso (sin datos sensibles), y la Comisión publicará informes anuales de síntesis.',
      'La Oficina Europea de IA celebrará comparecencias parlamentarias mensuales confidenciales en las que expondrá las grabaciones remitidas por los cuerpos y fuerzas de seguridad de los Estados miembros.',
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
      'Sí: cualquier sistema de IA incorporado a maquinaria, ascensores o equipos industriales regulados en el Anexo I es automáticamente de alto riesgo con independencia del procedimiento de evaluación de conformidad que rija para el producto.',
      'No: solo es de alto riesgo si la máquina opera con algoritmos de aprendizaje por refuerzo en tiempo real y el fabricante no cuenta con una sede corporativa registrada en alguno de los veintisiete Estados miembros de la Unión Europea.',
      'Sí, salvo que el fabricante presente una declaración responsable de exención ante la autoridad de vigilancia del mercado y subcontrate el soporte operativo con una pyme europea conforme al régimen simplificado del artículo 11 del Reglamento.',
      'No: el artículo 6.1 exige dos requisitos acumulativos: ser componente de seguridad (o producto) bajo el Anexo I y que dicho producto deba someterse a evaluación de conformidad por terceros conforme a dicha norma del Anexo I.',
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
      'No: el Anexo III, punto 1(a), excluye expresamente los sistemas de verificación biométrica (1-a-1) cuya única finalidad sea confirmar que una persona concreta es quien dice ser.',
      'Sí: toda tecnología de reconocimiento facial aplicada al sector financiero o bancario clasifica como de alto riesgo bajo el punto 5 del Anexo III con independencia de su arquitectura técnica.',
      'Sí, porque el Reglamento califica como de alto riesgo cualquier tratamiento de datos biométricos ejecutado en teléfonos móviles inteligentes sin intervención de un empleado humano de la entidad.',
      'Solo si el importe de las transferencias autorizadas por la aplicación móvil supera los diez mil euros o si el banco comparte los vectores faciales con agencias de prevención de fraude del sector.',
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
      'La red ferroviaria de alta velocidad, las telecomunicaciones por satélite, los puertos marítimos comerciales, las refinerías y la banca minorista.',
      'La infraestructura digital crítica, el tráfico vial y el suministro de agua, gas, calefacción y electricidad, conforme al anexo III, punto 2.',
      'Las instalaciones de energía nuclear, el transporte marítimo comercial, la gestión aeroportuaria, los hospitales y las redes postales.',
      'La distribución de alimentos básicos, las presas hidráulicas, las autopistas de peaje, el alumbrado municipal y el tratamiento de residuos.',
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
      'Es una práctica prohibida absoluta bajo el artículo 5.1(a) al considerarse una técnica subliminal y de vigilancia biométrica invasiva en el domicilio.',
      'Es de riesgo mínimo bajo el artículo 95 al operar en entornos educativos privados donde los alumnos han aceptado voluntariamente la supervisión.',
      'Es de alto riesgo: el Anexo III, punto 3(d), incluye los sistemas de IA para vigilar y detectar comportamientos prohibidos de estudiantes en pruebas.',
      'Queda regulado únicamente bajo las obligaciones de transparencia informativa del artículo 50 sin someterse a evaluación de conformidad de alto riesgo.',
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
      'En el Anexo III, punto 1(a), al calificarse como un sistema de categorización biométrica conductual aplicado a la supervisión remota de trabajadores en el marco de la economía de plataformas.',
      'En el Anexo III, punto 5(b), al considerarse análogo a los modelos de calificación de solvencia y riesgo patrimonial aplicados a contratistas autónomos dependientes en el mercado interior.',
      'No encaja en el Anexo III: la asignación operativa de tareas a profesionales autónomos en la vía pública queda excluida del alto riesgo laboral si no se utiliza reconocimiento facial en tiempo real.',
      'En el Anexo III, punto 4(b): sistemas para tomar decisiones sobre condiciones laborales, rescisiones o promociones, asignar tareas según conducta o rasgos personales, o vigilar y evaluar el rendimiento laboral.',
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
      'El Sistema A (calificación crediticia de personas físicas) es de alto riesgo; el Sistema B queda expresamente excluido porque el Anexo III, punto 5(b), exceptúa los sistemas destinados a detectar fraudes financieros.',
      'Ambos son de alto riesgo con arreglo al Anexo III, punto 5(b), al evaluar perfiles de solvencia y transacciones monetarias de personas físicas en entidades de crédito supervisadas por las autoridades bancarias europeas.',
      'El Sistema B es de alto riesgo por analizar transferencias en tiempo real, mientras que el Sistema A está exento si el score crediticio es validado por un gestor de sucursal bancaria en un plazo de 48 horas.',
      'Ninguno es de alto riesgo: el sector bancario se rige de forma exclusiva por las normas prudenciales de solvencia de Basilea III y las directivas sectoriales sobre créditos al consumo sin sujeción a este Anexo.',
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
      'Los tres ramos son de alto riesgo: cualquier fijación algorítmica de primas que discrimine perfiles de riesgo contractual en pólizas aseguradoras queda englobada en el Anexo III, punto 5(c).',
      'Únicamente los seguros de vida y de salud: el Anexo III, punto 5(c), limita el alto riesgo a la evaluación de riesgos y tarificación respecto a personas físicas en ramos de vida y salud.',
      'Solo el seguro de automóvil, al estar vinculado a la seguridad vial y directivas de homologación de vehículos a motor incluidas en la lista armonizada de seguridad del Anexo I del Reglamento.',
      'Ninguno de ellos: las entidades aseguradoras privadas están exentas del Anexo III al someterse al régimen de supervisión prudencial y solvencia de la Directiva 2009/138/CE (Solvencia II).',
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
      '(a) Plataformas informáticas para la gestión procesal y señalamiento telemático de vistas judiciales, y (b) sistemas de recuento electrónico de votos y escrutinio electoral administrados por el Ministerio del Interior.',
      '(a) Modelos de procesamiento de lenguaje para redactar transcripciones literales de declaraciones judiciales, y (b) chatbots de partidos políticos utilizados para informar sobre sus programas electorales sin perfilar votantes.',
      '(a) Sistemas para ayudar a autoridades judiciales a investigar e interpretar hechos y leyes y aplicarlas a hechos concretos (o en ADR), y (b) sistemas para influir en el resultado electoral o referéndum o en el voto de personas.',
      '(a) Software de ciberseguridad utilizado para proteger bases de datos del Consejo General del Poder Judicial, y (b) encuestas demoscópicas de intención de voto publicadas por medios de comunicación durante periodos electorales.',
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
      '(a) Estar bajo licencia de código abierto; (b) procesar menos de diez mil consultas anuales; (c) contar con auditoría externa de ciberseguridad; o (d) haber sido financiado íntegramente por fondos públicos del programa Horizonte Europa.',
      '(a) Operar exclusivamente sin conexión a internet; (b) borrar los datos biométricos tras cada sesión; (c) no utilizar redes neuronales profundas; o (d) ser desarrollado por una pyme con menos de cincuenta empleados en plantilla.',
      '(a) No tener interfaz de usuario directa; (b) almacenar la información en servidores ubicados en la Unión; (c) limitar los outputs a formatos numéricos; o (d) contar con un seguro de responsabilidad civil suscrito ante notario.',
      '(a) Realizar una tarea procedimental limitada; (b) mejorar el resultado de una actividad humana previa; (c) detectar patrones o desviaciones de decisiones sin sustituir la valoración humana previa; o (d) realizar una tarea preparatoria.',
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
      '(a) Utilizarse en alguno de los 8 ámbitos ya enumerados en el Anexo III, y (b) plantear un riesgo de daño a la salud, seguridad o impacto adverso en derechos fundamentales equivalente o superior al de los sistemas ya contemplados en dicho Anexo.',
      '(a) Contar con la ratificación expresa por mayoría cualificada del Parlamento Europeo y del Consejo en un plazo de tres meses, y (b) acreditar un volumen de implantación superior al veinte por ciento de las empresas del mercado interior.',
      '(a) Haber obtenido dictamen preceptivo favorable del Comité Europeo de Inteligencia Artificial, y (b) que el caso de uso implique el despliegue de modelos de IA de uso general con riesgo sistémico evaluados bajo el artículo 51 del Reglamento.',
      '(a) Estar vinculado a nuevas tecnologías cuánticas emergentes que carezcan de norma armonizada, y (b) haber originado al menos tres incidentes graves notificados por los Estados miembros ante la base de datos de la Unión del artículo 73.',
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
      'El volumen de facturación mercantil del proveedor, el país de origen de la inversión y la cuota de mercado total ocupada en el sector relevante de la Unión.',
      'Su finalidad prevista, el estado de la técnica generalmente reconocido en IA y tecnologías conexas, y el sistema de gestión de riesgos del artículo 9.',
      'Las directrices técnicas del marco NIST, el número de patentes registradas por el desarrollador y los estándares de gestión de calidad ISO 9001.',
      'El coste computacional en servidores en la nube, la solvencia financiera de la entidad y la experiencia formativa de los ingenieros en plantilla.',
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
      'Es una auditoría técnica formal previa al marcado CE que no precisa actualización posterior alguna; el artículo 9.9 prohíbe el uso de sistemas de IA de alto riesgo por menores de dieciocho años salvo previa autorización judicial en cada Estado miembro.',
      'Es un protocolo voluntario elaborado conforme a los códigos de conducta del artículo 95; el artículo 9.9 recomienda recabar el consentimiento de progenitores únicamente cuando el sistema procese categorías especiales de datos del RGPD.',
      'Es un proceso iterativo continuo planificado y ejecutado durante todo el ciclo de vida con revisiones periódicas sistemáticas; el artículo 9.9 exige considerar específicamente si puede tener un impacto adverso en menores de 18 años o grupos vulnerables.',
      'Es una autoevaluación bienal obligatoria gestionada por la autoridad de vigilancia del mercado; el artículo 9.9 exime de considerar a menores de edad siempre que el sistema opere en infraestructuras clasificadas como críticas del Anexo III.',
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
      'Exclusivamente en los tres meses posteriores a la comercialización inicial, evaluando el comportamiento del modelo frente a incidencias reales no planificadas reportadas por usuarios en el marco de la vigilancia poscomercialización.',
      'Únicamente dentro de un espacio controlado de pruebas (sandbox) regulatorio nacional autorizado por la AESIA, siguiendo metodologías empíricas no predeterminadas para contrastar la adaptabilidad algorítmica en entornos abiertos.',
      'Obligatoriamente tras recibir la aprobación del organismo notificado en la evaluación de la conformidad, sin requerir parámetros ni umbrales probabilísticos cuantitativos fijados con anterioridad a la ejecución de los ensayos.',
      'En cualquier momento del desarrollo y, en todo caso, antes de su comercialización o puesta en servicio, sobre la base de parámetros y umbrales probabilísticos definidos previamente que sean adecuados a la finalidad prevista.',
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
      'Deben ser pertinentes, suficientemente representativos y, en lo posible, carecer de errores y estar completos para su finalidad, atendiendo a las características del ámbito geográfico, contextual, conductual o funcional de uso.',
      'Deben contener al menos un noventa por ciento de datos anonimizados o sintéticos generados en la Unión Europea, con independencia de su representatividad estadística respecto a la demografía o peculiaridades del territorio de despliegue.',
      'Basta con que el volumen de entrenamiento supere los diez millones de registros etiquetados, sin que resulte exigible auditar errores muestrales o sesgos geográficos si el sistema no realiza decisiones íntegramente automatizadas.',
      'Deben estar certificados mediante sello de calidad algorítmica emitido por un organismo notificado, debiendo renovarse el conjunto de validación de forma obligatoria cada seis meses mediante auditorías de sesgo algorítmico.',
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
      'Que la autoridad de protección de datos apruebe formalmente cada sesión de entrenamiento y que el proveedor conserve copia íntegra de los datos sensibles en un archivo notarial permanente como garantía documental de diligencia debida.',
      'Que no pueda lograrse con otros datos (como sintéticos), que existan límites de reutilización y seguridad/seudonimización, que no se transfieran a terceros y que se supriman una vez corregido el sesgo o finalizada la conservación.',
      'Que el tratamiento se realice exclusivamente en sistemas de computación en la nube pública certificada y que los datos especiales se cedan a investigadores universitarios para contrastar los resultados de la corrección del sesgo.',
      'Que se abone una compensación económica a las personas afectadas por el tratamiento de sus datos sensibles y que el sesgo residual del modelo quede acreditado por debajo del uno por ciento mediante auditoría externa del Anexo VII.',
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
      'Quedan plenamente exentas de presentar documentación técnica y registrar el sistema en la base de datos de la Unión durante sus primeros tres ejercicios fiscales si su plantilla no supera los cincuenta trabajadores en cómputo anual.',
      'Pueden sustituir la documentación técnica del Anexo IV por una declaración jurada de solvencia tecnológica acompañada de la memoria económica anual depositada en el Registro Mercantil del Estado miembro donde tengan su sede social.',
      'Pueden presentar los elementos del Anexo IV de forma simplificada mediante un formulario establecido por la Comisión, el cual deberá ser aceptado por los organismos notificados a efectos de la evaluación de la conformidad.',
      'Tienen derecho a una moratoria legal improrrogable de cinco años desde la puesta en servicio para elaborar el expediente técnico, siempre que el sistema opere bajo la supervisión de un socio tecnológico de gran tamaño en la Unión.',
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
];
