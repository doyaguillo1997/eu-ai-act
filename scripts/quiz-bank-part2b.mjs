import { makeCitation } from './legal-enrichment-data.mjs';

export const QUIZ_BANK_PART2B = [
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
      'Establecer y documentar un sistema de vigilancia poscomercialización proporcionado a los riesgos, que recoja y analice activa y sistemáticamente datos sobre su funcionamiento durante toda la vida útil conforme al plan previsto en el Anexo IV.',
      'Delegar íntegramente la recogida y análisis de datos de telemetría en los responsables del despliegue, limitándose el proveedor a archivar los informes periódicos que estos le remitan de forma voluntaria sin aplicar un plan formal documentado.',
      'Someter el sistema a una reevaluación semestral de conformidad por un organismo notificado ajeno, suspendiendo cautelarmente su operatividad comercial hasta obtener un nuevo certificado formal de marcado CE en cada período de facturación.',
      'Mantener un registro meramente pasivo de reclamaciones recibidas por canales de soporte al cliente, activando análisis técnicos únicamente cuando se haya materializado un daño patrimonial o personal notificado formalmente por la autoridad.',
    ],
    correctOptionIndex: 0,
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
      'Solicitar una moratoria formal de treinta días hábiles a la autoridad de vigilancia del mercado antes del vencimiento del día quince, aportando una justificación técnica firmada por el delegado de protección de datos y el auditor jefe.',
      'Presentar una notificación inicial incompleta dentro del plazo de quince días para cumplir la exigencia de celeridad, remitiendo posteriormente el informe forense completo y definitivo una vez que haya concluido el esclarecimiento técnico.',
      'Posponer cualquier comunicación formal ante las autoridades hasta finalizar de forma concluyente la investigación pericial interna, evitando remitir datos preliminares susceptibles de generar inseguridad jurídica en el expediente sancionador.',
      'Archivar internamente el expediente sin notificación obligatoria a la autoridad cuando los análisis preliminares descarten un fallo sistémico en la arquitectura del modelo, limitándose a comunicar el incidente a los clientes afectados.',
    ],
    correctOptionIndex: 1,
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
      'Prohíbe suspender temporalmente la ejecución de las inferencias automáticas en los servidores de producción mientras no se haya obtenido una autorización judicial previa o un requerimiento expreso dictado por la autoridad nacional competente.',
      'Impide realizar volcados de memoria y copias de seguridad de las bases de datos de entrenamiento del modelo, al considerarse una alteración no autorizada de la cadena de custodia probatoria tipificada en la normativa penal sobre pruebas digitales.',
      'Prohíbe llevar a cabo investigaciones que impliquen alterar el sistema de IA de un modo que pueda afectar a cualquier evaluación posterior de las causas del incidente, antes de haber informado de dicha acción a las autoridades competentes.',
      'Veta la colaboración de peritos informáticos externos en la recopilación de telemetría forense, reservando dicha labor exclusivamente a los inspectores de la autoridad de vigilancia del mercado o a los auditores del organismo notificado.',
    ],
    correctOptionIndex: 2,
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
      'Ordenar unilateralmente la revocación inmediata del marcado CE y la desconexión cautelar del sistema de los servidores del responsable del despliegue sin necesidad de consultar ni informar a la autoridad de vigilancia del mercado.',
      'Exigir la transferencia obligatoria y gratuita de los derechos de propiedad intelectual y del código fuente original a un repositorio público gestionado por la Oficina Europea de Inteligencia Artificial para su examen de oficio.',
      'Instar la suspensión automática de las actividades mercantiles de la empresa proveedora e imponer de forma directa multas coercitivas diarias basadas en el volumen de negocios global previsto en el régimen general de infracciones.',
      'Solicitar y acceder a cualquier documentación creada con arreglo al Reglamento de IA y pedir a la autoridad de vigilancia del mercado que organice pruebas técnicas del sistema con su participación en el marco de sus competencias.',
    ],
    correctOptionIndex: 3,
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
      'Adoptar medidas provisionales adecuadas para prohibir o restringir la comercialización del sistema en su mercado nacional, retirarlo del mercado o recuperarlo en un plazo razonable, informando sin demora a la Comisión y a los Estados miembros.',
      'Emitir una advertencia meramente informativa sin fuerza ejecutiva, debiendo esperar a que el Comité Europeo de Inteligencia Artificial ratifique por unanimidad cualquier intervención material restrictiva sobre el operador económico afectado.',
      'Decretar de oficio la incautación penal de la infraestructura de servidores y ordenar la liquidación societaria forzosa de la entidad proveedora mediante resolución administrativa directa sin intervención de los órganos jurisdiccionales.',
      'Remitir el expediente al Tribunal de Justicia de la Unión Europea para que dicte sentencia cautelar previa, absteniéndose de adoptar salvaguardias provisionales en el mercado interior mientras no recaiga resolución judicial comunitaria.',
    ],
    correctOptionIndex: 0,
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
      'La autoridad convalidará de oficio la clasificación realizada siempre que el proveedor demuestre la ausencia de dolo, limitándose a emitir una recomendación técnica sin posibilidad de incoar un expediente sancionador del artículo 99.',
      'La autoridad exigirá al proveedor adaptar el sistema a los requisitos de alto riesgo en un plazo determinado, quedando el operador sujeto a las multas del artículo 99 si se constata falsedad para eludir la aplicación del Reglamento.',
      'El sistema quedará automáticamente exento de cualquier exigencia técnica durante un período transitorio improrrogable de tres años, debiendo únicamente actualizar el registro identificativo en la base de datos de la Unión Europea.',
      'La autoridad deberá transferir obligatoriamente la titularidad del software a una entidad sin ánimo de lucro o liberar su código fuente bajo una licencia de software libre como medida compensatoria ante la comunidad de usuarios.',
    ],
    correctOptionIndex: 1,
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
      'No, porque la obtención formal del marcado CE y el registro en la base de datos comunitaria otorgan una presunción de conformidad iuris et de jure que impide cualquier restricción comercial posterior dentro del mercado interior.',
      'Solo si la Comisión Europea deroga con carácter retroactivo la norma armonizada aplicable, mediante un reglamento de ejecución específico aprobado por el Comité de Inteligencia Artificial tras consultar a los organismos notificados.',
      'Sí, si la autoridad comprueba que, pese a cumplir formalmente los requisitos, presenta un riesgo para la salud, la seguridad o los derechos fundamentales, exigiendo al operador mitigarlo, retirarlo del mercado o recuperarlo.',
      'Únicamente cuando el proveedor declare concurso de acreedores o cese voluntariamente sus operaciones mercantiles, debiendo la autoridad asumir la tutela cautelar de la base de datos de usuarios afectados por el despliegue del sistema.',
    ],
    correctOptionIndex: 2,
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
      'Carece de legitimación activa directa ante los organismos reguladores, pudiendo actuar únicamente como parte coadyuvante en procesos penales previamente incoados de oficio por el Ministerio Fiscal o por la Comisión Europea.',
      'Debe interponer obligatoriamente una demanda de conciliación previa ante la Cámara de Comercio del Estado miembro donde radique la sede del proveedor, supeditando cualquier acción administrativa al fracaso formal de dicho trámite.',
      'Puede personarse exclusivamente ante el Tribunal de Justicia de la Unión Europea mediante recurso de anulación directo, siempre que acredite una afectación patrimonial individualizada superior al umbral legal comunitario.',
      'Presentar una reclamación motivada ante la autoridad de vigilancia del mercado competente (como la AESIA en España), sin perjuicio de entablar otras acciones administrativas o judiciales en defensa de sus derechos.',
    ],
    correctOptionIndex: 3,
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
      'Se aplica a decisiones del responsable del despliegue basadas en sistemas de alto riesgo del Anexo III (salvo infraestructuras críticas) con efectos jurídicos o significativos, rigiendo solo si el derecho no está ya previsto en el Derecho de la Unión.',
      'Afecta con carácter universal a cualquier sistema de inteligencia artificial comercializado en la Unión, derogando expresamente las garantías previstas en los artículos 13 a 15 y 22 del Reglamento General de Protección de Datos (RGPD).',
      'Se restringe con exclusividad a los sistemas de categorización biométrica en espacios públicos y a los componentes de seguridad de productos del Anexo I, sin abarcar los sistemas de contratación laboral o de concesión de créditos privados.',
      'Obliga a los proveedores y distribuidores a remitir el código fuente sin compilar y los pesos completos del modelo a cada interesado que formule una petición formal por escrito mediante conducto notarial ante la sede social de la compañía.',
    ],
    correctOptionIndex: 0,
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
      'El Reglamento (UE) 2016/679 relativo a la protección de datos personales, que prohíbe el despido disciplinario únicamente si las represalias empresariales conllevan una vulneración acreditada de datos biométricos especialmente protegidos.',
      'La Directiva (UE) 2019/1937 de protección del informante (transpuesta en España por la Ley 2/2023), que ampara la denuncia de infracciones del Reglamento de IA frente a despidos, suspensiones u otras medidas de represalia laboral.',
      'La normativa sobre secretos empresariales de la Directiva (UE) 2016/943, que subordina toda inmunidad laboral a que el empleado obtenga autorización judicial previa antes de revelar datos confidenciales sobre los algoritmos.',
      'El Estatuto de los Trabajadores en su régimen general de bajas incentivadas, sin que exista un mecanismo de protección reforzado ni canales de alerta confidenciales específicos en el marco del ordenamiento jurídico comunitario.',
    ],
    correctOptionIndex: 1,
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
      'Ordenar la cesión forzosa de la propiedad de las patentes y licencias de software a un consorcio público de investigación gestionado por el Consejo Europeo de Investigación, extinguiendo la explotación comercial del modelo en toda la Unión.',
      'Imponer de forma cautelar la suspensión de cotización bursátil de la sociedad matriz del proveedor y la intervención judicial de sus centros de procesamiento de datos por un período improrrogable de hasta dos años consecutivos.',
      'Exigir que adopte medidas para cumplir los artículos 53 y 54, medidas para mitigar riesgos sistémicos si la evaluación suscita preocupación grave, o bien restringir la comercialización del modelo, retirarlo del mercado o recuperarlo.',
      'Limitarse a formular recomendaciones no vinculantes de buenas prácticas algorítmicas, debiendo transferir cualquier requerimiento coercitivo a las autoridades nacionales de vigilancia del Estado donde radique la sede principal.',
    ],
    correctOptionIndex: 2,
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
      'Hasta 20.000.000 EUR o el 4 % del volumen de negocios anual por cualquier incumplimiento de obligaciones de operadores, y hasta 10.000.000 EUR o el 2 % en supuestos de falsedad u ocultación dolosa de información técnica relevante.',
      'Hasta 30.000.000 EUR o el 5 % por infracciones cometidas por grandes empresas multinacionales, y hasta 5.000.000 EUR en cuantía fija sin porcentaje del volumen de negocios para infracciones procedimentales de carácter leve.',
      'Hasta 10.000.000 EUR o el 2 % por inobservancia de los requisitos técnicos del Anexo IV, y hasta 2.500.000 EUR o el 0,5 % por retrasos en la notificación formal de incidentes graves ante la autoridad de vigilancia nacional.',
      'Hasta 15.000.000 EUR o el 3 % por incumplir las obligaciones de los operadores o el artículo 50, y hasta 7.500.000 EUR o el 1 % por suministrar información inexacta, incompleta o engañosa a los organismos o autoridades.',
    ],
    correctOptionIndex: 3,
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
      'Cada Estado miembro establecerá normas sobre si se pueden imponer multas administrativas a autoridades y organismos públicos establecidos en su territorio y en qué medida, sin perjuicio de las medidas correctoras de las autoridades.',
      'El Reglamento exime de plano y de forma armonizada a todas las administraciones públicas europeas de cualquier sanción pecuniaria, limitando la intervención de las autoridades reguladoras a meros apercibimientos de carácter ético.',
      'Las administraciones públicas quedan sujetas obligatoriamente a los mismos tramos de multa máxima de hasta 35.000.000 EUR sin que las legislaciones nacionales puedan modular ni limitar su exigibilidad en los presupuestos públicos.',
      'La imposición de multas económicas a entidades del sector público queda reservada en exclusiva a la Comisión Europea mediante decisión directa, previa audiencia preceptiva del Comité Europeo de Inteligencia Artificial.',
    ],
    correctOptionIndex: 0,
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
      'La Comisión Europea puede imponer de oficio multas de hasta 3.000.000 EUR por vulnerar el artículo 5 y de hasta 1.000.000 EUR por cualquier otra infracción de los requisitos sustantivos aplicables a las instituciones de la Unión.',
      'El Supervisor Europeo de Protección de Datos (SEPD) puede imponer multas de hasta 1.500.000 EUR por infringir el artículo 5, y de hasta 500.000 EUR por el incumplimiento de cualquier otro requisito u obligación del Reglamento.',
      'La Oficina Europea de Inteligencia Artificial puede aplicar multas directas de hasta 2.500.000 EUR por prácticas prohibidas y de hasta 750.000 EUR por inobservancia sobrevenida de las directrices de transparencia y supervisión.',
      'El Tribunal de Cuentas Europeo ostenta potestad para imponer sanciones de hasta 5.000.000 EUR por vulnerar prohibiciones y de hasta 1.500.000 EUR por deficiencias contables y de auditoría interna en los proyectos con fondos UE.',
    ],
    correctOptionIndex: 1,
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
      'Hasta el 7 % del volumen de negocios mundial o 35.000.000 EUR si suministran información inexacta sobre el consumo energético, revisables con carácter vinculante por una comisión arbitral designada por el Consejo de Europa.',
      'Hasta el 5 % de los ingresos brutos globales o 20.000.000 EUR por infracciones en materia de derechos de autor, sometidas al control jurisdiccional de la sala contenciosa del tribunal de primera instancia de la sede del proveedor.',
      'Hasta el 3 % del volumen de negocios mundial total o 15.000.000 EUR por infringir el Reglamento o incumplir requerimientos de la Comisión, sujetas al control de plena jurisdicción del Tribunal de Justicia de la Unión Europea.',
      'Hasta el 1 % del volumen de negocios o 7.500.000 EUR exclusivamente por negligencia grave en ciberseguridad, sujetas al recurso de casación ante el Tribunal de Comercio Internacional de la Organización Mundial del Comercio.',
    ],
    correctOptionIndex: 2,
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
      'A más tardar el 2 de agosto de 2026, coincidiendo con la fecha general de plena aplicación prevista para todos los sistemas de IA clasificados como de alto riesgo en virtud del Anexo III.',
      'A más tardar el 2 de agosto de 2027, al vencer el plazo de tres años establecido en la cláusula transitoria general para el marco de seguridad fronteriza e interoperabilidad europea.',
      'A más tardar el 2 de agosto de 2028, fecha límite de adaptación obligatoria aplicable a los sistemas que constituyan componentes de seguridad en los productos sujetos a la legislación del Anexo I Sección A.',
      'A más tardar el 31 de diciembre de 2030, según la moratoria específica del artículo 111.1 para los sistemas de gran magnitud del Anexo X desplegados con anterioridad al 2 de agosto de 2027.',
    ],
    correctOptionIndex: 3,
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
      'A más tardar el 2 de agosto de 2030, fecha límite improrrogable que el artículo 111.2 impone a los sistemas de alto riesgo legacy destinados a autoridades públicas aunque no experimenten cambios significativos de diseño.',
      'A más tardar el 2 de agosto de 2027, momento en que expira la exención general de doce meses concedida a los sistemas de gestión tributaria y prestaciones de la seguridad social en el ámbito de las administraciones públicas.',
      'Quedan exentos de forma permanente e indefinida mientras no se modifique el código fuente básico, rigiéndose exclusivamente por la normativa interna sobre procedimiento administrativo común y transparencia pública.',
      'A más tardar el 31 de diciembre de 2028, fecha límite fijada para la convergencia técnica entre las plataformas de tramitación electrónica de los Estados miembros y los requisitos de auditoría algorítmica del Anexo IV.',
    ],
    correctOptionIndex: 0,
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
      'Para supeditar la imposición de multas a la previa homologación internacional de estándares de evaluación por la Organización Internacional de Normalización (ISO) y el Comité Europeo de Normalización Electrotécnica (CENELEC).',
      'Para conceder un margen de adaptación de un año entre la exigibilidad de los deberes GPAI (agosto de 2025) y la activación de las multas del artículo 101 (agosto de 2026), facilitando el rodaje de los códigos de prácticas.',
      'Porque las sanciones económicas a proveedores de modelos fundacionales solo pueden ejecutarse tras constatar un perjuicio patrimonial efectivo superior a cien millones de euros en el mercado interior de la Unión Europea.',
      'Para acompasar el inicio sancionador con la entrada en vigor del Reglamento de Ciberresiliencia y la designación de los laboratorios europeos de ensayo de conformidad algorítmica previstos en el marco de la gobernanza.',
    ],
    correctOptionIndex: 1,
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
      'Cada dos años respecto a los sistemas de alto riesgo del Anexo III y cada cinco años para las prácticas prohibidas del artículo 5, coincidiendo con la renovación de los mandatos de los miembros del Parlamento Europeo.',
      'Semestralmente durante los primeros tres años de vigencia del Reglamento, y posteriormente cada tres años mediante informe conjunto elaborado por la Comisión y la Junta de Supervisión de la Agencia de Ciberseguridad ENISA.',
      'Anualmente tras la entrada en vigor para el artículo 5 y el Anexo III (presentando informe al Parlamento y al Consejo), junto a una revisión general a más tardar el 2 de agosto de 2029 y cada cuatro años en lo sucesivo.',
      'Únicamente cada seis años en el marco del programa de adecuación y eficacia de la reglamentación (REFIT), previa consulta preceptiva no vinculante a los organismos notificados y a las confederaciones empresariales europeas.',
    ],
    correctOptionIndex: 2,
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
      'Derogar íntegramente las directivas de homologación técnica sectorial en materia de automoción y transporte ferroviario, sustituyendo los ensayos físicos de choque y resistencia mecánica por auditorías exclusivas de software.',
      'Eximir a los fabricantes de maquinaria pesada, vehículos y aeronaves de cumplir con el marcado CE general de seguridad industrial cuando sus componentes algorítmicos cuenten con una certificación voluntaria del Anexo IV.',
      'Transferir la inspección de aeronavegabilidad y seguridad marítima a la Oficina Europea de IA, desapoderando a las agencias técnicas especializadas en favor de una supervisión transversal de los algoritmos de navegación.',
      'Asegurar que los actos delegados y de ejecución de la legislación sectorial de seguridad de productos (Anexo I Sección B) integren los requisitos obligatorios de alto riesgo del Capítulo III Sección 2 del Reglamento de IA.',
    ],
    correctOptionIndex: 3,
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
      'Se publicó en el DOUE el 12 de julio de 2024 y entró en vigor el 1 de agosto de 2024, a los veinte días naturales de su preceptiva inserción en el boletín comunitario.',
      'Se publicó en el DOUE el 1 de mayo de 2024 y entró en vigor el 21 de mayo de 2024, difiriendo la eficacia de sus capítulos sustantivos a una decisión posterior del Consejo.',
      'Se publicó en el DOUE el 2 de agosto de 2024 y entró en vigor el 1 de septiembre de 2024, coincidiendo con la sesión de apertura del nuevo período legislativo del Parlamento.',
      'Se publicó en el DOUE el 15 de junio de 2024 y entró en vigor el 1 de julio de 2024, fijándose un plazo vacacional extraordinario previo al inicio del cómputo de aplicabilidad.',
    ],
    correctOptionIndex: 0,
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
      'Concluyó la moratoria transitoria única para todos los sistemas de IA integrados como componentes de seguridad en productos del Anexo I Sección A sujetos a la legislación de armonización.',
      'Comenzó la aplicación general del Reglamento: exigibilidad de alto riesgo del Anexo III, deberes de transparencia del artículo 50, sandboxes del artículo 57 y régimen del artículo 101.',
      'Entró en vigor con carácter exclusivo el Título V relativo a modelos de IA de uso general (GPAI), quedando demorada la aplicación del régimen de alto riesgo hasta el ejercicio 2028.',
      'Finalizó el período extraordinario de adaptación voluntaria, derogando formalmente el Reglamento General de Protección de Datos (RGPD) en todos los tratamientos mediante algoritmos.',
    ],
    correctOptionIndex: 1,
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
      'En noviembre de 2026 debe retirar el escáner del mercado por falta de marcado CE algorítmico, mientras que en septiembre de 2027 goza de una dispensa sectorial permanente bajo la Directiva MDR.',
      'Ambas modificaciones quedan plenamente exoneradas de evaluación de conformidad hasta el 31 de diciembre de 2030 por aplicación analógica del régimen de grandes sistemas informáticos del Anexo X.',
      'El cambio de noviembre de 2026 ocurre antes de la fecha de aplicación del artículo 6.1 (agosto de 2027), mientras que el cambio de septiembre de 2027 somete al sistema a las obligaciones del Reglamento.',
      'La modificación de noviembre de 2026 activa automáticamente el artículo 6.1 por retroactividad legal, mientras que en septiembre de 2027 la actualización técnica solo exige notificar a la AEMPS.',
    ],
    correctOptionIndex: 2,
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
      'A más tardar el 2 de febrero de 2026 para la revisión del Anexo III y el 1 de enero de 2027 para la auditoría técnica de centros de datos de la Oficina de IA conforme al dictamen de ENISA.',
      'A más tardar el 2 de agosto de 2026 mediante un informe único consolidado que examine la idoneidad funcional de la Oficina de IA junto a metas obligatorias de reducción de huella ecológica y CO2.',
      'A más tardar el 31 de diciembre de 2030 para la clasificación del Anexo III y el 2 de agosto de 2032 para emitir el dictamen inicial sobre la eficacia estructural de la Oficina Europea de IA.',
      'Evalúa anualmente el Anexo III y el artículo 5 desde la entrada en vigor (Art. 112.1), y a más tardar el 2 de agosto de 2028 evalúa la Oficina de IA y la normalización energética (Art. 112.7).',
    ],
    correctOptionIndex: 3,
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
      '(1) 1-ago-2024: entrada en vigor; (2) 2-feb-2025: prohibiciones y alfabetización; (3) 2-ago-2025: gobernanza y modelos GPAI; (4) 2-ago-2026: aplicación general (alto riesgo Anexo III y Art. 50); (5) 2-ago-2027: alto riesgo del Anexo I; (6) 2030: sistemas públicos legacy y Anexo X.',
      '(1) 1-ago-2024: entrada en vigor; (2) 2-feb-2025: alto riesgo del Anexo I; (3) 2-ago-2025: aplicación general y Art. 50; (4) 2-ago-2026: gobernanza y modelos GPAI; (5) 2-ago-2027: prohibiciones del Art. 5; (6) 2030: sistemas de grandes bases de datos informáticas de la Unión.',
      '(1) 1-ago-2024: entrada en vigor; (2) 2-feb-2025: sandboxes nacionales; (3) 2-ago-2025: alto riesgo del Anexo III; (4) 2-ago-2026: modelos GPAI y multas comunitarias; (5) 2-ago-2027: prohibiciones del Art. 5; (6) 2030: auditorías de seguridad en productos del Anexo I.',
      '(1) 1-ene-2025: entrada en vigor; (2) 1-jul-2025: prohibiciones; (3) 1-ene-2026: gobernanza; (4) 1-ene-2027: aplicación general de alto riesgo; (5) 1-ene-2028: productos regulados del Anexo I; (6) 2031: sistemas informáticos de gran magnitud de la administración de justicia.',
    ],
    correctOptionIndex: 0,
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
      'Ambos modelos se consideran de alto riesgo bajo el Anexo III punto 5, debiendo superar una evaluación de conformidad por organismo notificado y registrarse de forma preceptiva en la base de datos pública de la Unión Europea.',
      'El Modelo A (vida y salud) es de alto riesgo bajo el Anexo III.5(c) (exige evaluación FRIA y deberes de proveedor), mientras que el Modelo B (autos y hogar) no es de alto riesgo al quedar fuera de dicho anexo.',
      'El Modelo B es de alto riesgo por afectar a infraestructuras críticas del transporte y la propiedad privada, mientras que el Modelo A es de riesgo mínimo al ampararse en el secreto médico de la Ley de Autonomía del Paciente.',
      'Ninguno de los dos modelos queda sujeto al Reglamento de IA, al tratarse de herramientas internas de cálculo actuarial excluidas del ámbito comunitario en virtud de la Directiva Solvencia II y la legislación de ordenación de seguros.',
    ],
    correctOptionIndex: 1,
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
      'Queda dispensada de cumplir la normativa de protección de datos al tratarse de un seguro no de vida, bastando con incluir una cláusula genérica de consentimiento informático en las condiciones particulares de la póliza de automóvil.',
      'Activa automáticamente la calificación de alto riesgo bajo el Anexo I sobre productos sanitarios (Reglamento MDR), requiriendo un marcado CE de software clínico y auditoría preceptiva por la Agencia Española de Medicamentos (AEMPS).',
      'Rige plenamente el RGPD (Art. 2.7): al tratar datos de salud (Art. 9) es preceptiva una EIPD (Art. 35) y se prohíben decisiones puramente automatizadas sin intervención médica pericial humana cualificada (Art. 22.4 RGPD).',
      'Incurre de inmediato en una práctica prohibida del artículo 5.1(a) por manipulación cognitiva de lesionados, conllevando la nulidad de pleno derecho de cualquier oferta motivada y multas de hasta el 7 % del volumen de facturación.',
    ],
    correctOptionIndex: 2,
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
      'Siempre que la aseguradora cuente con una autorización previa expresa de la autoridad de vigilancia y abone un canon de compensación al fondo público de cohesión sanitaria por cada historial clínico tratado en el reentrenamiento.',
      'Únicamente si los historiales provienen de fuentes de acceso público y se limitan a tomadores mayores de edad que hayan otorgado un consentimiento contractual retribuido en el momento de solicitar la suscripción de la póliza.',
      'En cualquier circunstancia de optimización actuarial ordinaria, pudiendo ceder posteriormente los datasets sanitarios depurados a entidades reaseguradoras internacionales para mejorar la solvencia global del sector financiero.',
      'Solo si es estrictamente necesario bajo las garantías del Art. 10.5: inviabilidad de datos sintéticos, control de acceso, seudonimización y seguridad reforzada, prohibición de cesión a terceros y supresión tras corregir el sesgo.',
    ],
    correctOptionIndex: 3,
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
      'CICOS (daños materiales entre aseguradoras sin impacto en derechos esenciales de personas) es de riesgo mínimo; los sistemas de triaje o denegación de asistencia sanitaria a lesionados se clasifican como de alto riesgo (Anexo III punto 5).',
      'Ambos sistemas se consideran prácticas terminantemente prohibidas en virtud del artículo 5.1(c), al constituir mecanismos de puntuación social y económica coordinada entre operadores del mercado asegurador nacional.',
      'El convenio CICOS es de alto riesgo por gestionar saldos financieros que comprometen la estabilidad del sistema bancario, mientras que la asistencia a lesionados queda desregulada por el principio de autonomía clínica.',
      'Ambos procesos quedan plenamente excluidos del Reglamento de IA conforme al artículo 2.3, al tratarse de acuerdos privados de autorregulación mercantil amparados por la Ley de Contrato de Seguro y la DGSFP.',
    ],
    correctOptionIndex: 0,
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
      'El sistema de evaluación médica y tarificación de pólizas de salud, puesto que el cálculo del riesgo actuarial goza de una exención sectorial expresa dentro del régimen de acceso a servicios financieros básicos.',
      'El sistema destinado exclusivamente a la detección de fraude en seguros, que queda excluido del Anexo III punto 5 a diferencia de la tarificación y evaluación de riesgo en pólizas de salud para personas físicas.',
      'Ambos sistemas se clasifican preceptivamente como de alto riesgo, dado que cualquier tratamiento algorítmico en el negocio asegurador incide de forma directa en los intereses económicos de tomadores y asegurados.',
      'Ninguno de los dos sistemas está exento, debiendo someterse obligatoriamente a una auditoría por organismo notificado y a una evaluación de impacto en derechos fundamentales (FRIA) conforme al artículo 27.',
    ],
    correctOptionIndex: 1,
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
      'Someter el bot conversacional a una evaluación de conformidad por un organismo notificado y tramitar un marcado CE bajo el Anexo I sobre seguridad de productos de telecomunicaciones.',
      'Elaborar preceptivamente una evaluación de impacto en derechos fundamentales (FRIA) conforme al artículo 27 y remitir una copia íntegra a la Dirección General de Seguros antes de atender llamadas.',
      'Cumplir la obligación de transparencia del artículo 50.1 (informar al usuario al inicio de la interacción de que habla con una IA) y asegurar la alfabetización del personal encargado (Art. 4).',
      'Inscribir el árbol de diálogos y los pesos del modelo sintético en el registro comunitario de alto riesgo del artículo 49, actualizando la ficha de telemetría de forma preceptiva cada semestre.',
    ],
    correctOptionIndex: 2,
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
      'Actúa únicamente como responsable del despliegue en virtud del artículo 26, quedando dispensado de las obligaciones de proveedor del artículo 16 al tratarse de un desarrollo in-house que no se comercializa a terceros competidores.',
      'Se califica exclusivamente como importador bajo el artículo 23 si las librerías de código abierto utilizadas en el entrenamiento algorítmico proceden de repositorios mantenidos por fundaciones domiciliadas fuera de la Unión.',
      'Queda enteramente exento del Reglamento de IA en virtud de la Directiva de Requisitos de Capital (CRD V), al prevalecer la normativa bancaria sectorial del Banco Central Europeo sobre los regímenes comunitarios transversales.',
      'Asume el doble rol de proveedor (Art. 16) y responsable del despliegue (Art. 26 y FRIA Art. 27), integrando el sistema de calidad y vigilancia poscomercialización en sus estructuras de gobernanza prudencial (Arts. 17.4 y 26.5).',
    ],
    correctOptionIndex: 3,
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
      'No: el Anexo III punto 5(b) excluye expresamente los sistemas de IA destinados a la detección del fraude en servicios financieros, por lo que este motor transaccional y antiblanqueo no se clasifica como de alto riesgo.',
      'Sí: toda aplicación algorítmica operada por entidades de crédito se clasifica automáticamente como de alto riesgo bajo el Anexo III punto 5(b) por incidir en la solvencia y capacidad patrimonial de las personas físicas.',
      'Constituye una práctica prohibida por el artículo 5.1(d) al equipararse a la elaboración de perfiles policiales para la prevención y detección de infracciones penales sin base probatoria previa individualizada.',
      'Es de alto riesgo únicamente si analiza transacciones bancarias transfronterizas de cuantía unitaria superior a diez mil euros o si procesa órdenes de pago en divisas de terceros países de alto riesgo financiero.',
    ],
    correctOptionIndex: 0,
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
      'El proveedor original conserva intacta su responsabilidad legal exclusiva ante los reguladores, debiendo asumir las sanciones que deriven de los nuevos parámetros algorítmicos introducidos por el banco adquirente.',
      'El banco pasa a ser considerado proveedor del sistema modificado y asume las obligaciones del artículo 16, cesando la condición de proveedor del fabricante inicial respecto de esa versión sustancialmente alterada.',
      'El modelo pierde de inmediato su clasificación de alto riesgo al haber sido reentrenado en un entorno corporativo cerrado, rigiéndose en adelante únicamente por las normas de transparencia voluntaria del artículo 95.',
      'La modificación sustancial produce la nulidad de pleno derecho de todos los préstamos concedidos bajo el nuevo scoring, obligando al banco a compensar automáticamente con intereses a todos los clientes evaluados.',
    ],
    correctOptionIndex: 1,
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
      'Porque el cálculo de scoring mediante variables de reputación personal requiere una autorización judicial previa motivada de la que carecen las entidades de crédito privadas no bancarias.',
      'Porque el Anexo I Sección B califica como ilícito cualquier análisis de solvencia que no emplee exclusivamente ratios contables auditados bajo las Normas Internacionales de Información Financiera.',
      'Incurre en la prohibición de puntuación social del artículo 5.1(c), que prohíbe evaluar a personas por su comportamiento social generando un trato perjudicial en contextos no relacionados.',
      'Porque la Directiva de Crédito al Consumo prohíbe taxativamente denegar financiación a solicitantes que acrediten unos ingresos recurrentes superiores al salario mínimo interprofesional vigente.',
    ],
    correctOptionIndex: 2,
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
      'Se clasifica como de alto riesgo bajo el Anexo III punto 5 en todos los casos, e incurre en práctica prohibida del artículo 5.1(a) tan pronto como aplica precios diferentes a usuarios en un mismo día.',
      'Es un sistema prohibido per se por vulnerar el principio de precio único en el mercado interior europeo establecido en los tratados fundacionales y en las directivas de protección a consumidores.',
      'Constituye siempre un sistema de alto riesgo del Anexo I sobre seguridad de productos de consumo, quedando prohibido únicamente si procesa medios de pago electrónicos no securizados mediante PSD2.',
      'Es de riesgo mínimo en general, pero vulnera el artículo 5.1(b) si explota vulnerabilidades por edad, discapacidad o precariedad para alterar su comportamiento causándole un perjuicio significativo.',
    ],
    correctOptionIndex: 3,
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
      'Es de riesgo mínimo si solo filtra u ordena ofertas según criterios objetivos elegidos por el usuario, pero es de alto riesgo si elabora perfiles (Art. 6.3) para evaluar solvencia o riesgo vital en seguros y préstamos.',
      'Es de riesgo mínimo únicamente si la empresa no percibe comisiones comerciales directas por clic, pasando a ser de alto riesgo del Anexo I sobre servicios de la sociedad de la información en cuanto percibe ingresos publicitarios.',
      'Se clasifica siempre como de alto riesgo en virtud del artículo 6.2 al intermediar en operaciones con impacto patrimonial directo sobre personas físicas residentes en el territorio de la Unión Europea.',
      'Queda excluido del Reglamento en todo supuesto conforme al artículo 2.3, siempre que la plataforma albergue un aviso legal de exención de responsabilidad ante la Comisión Nacional de los Mercados y la Competencia.',
    ],
    correctOptionIndex: 0,
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
      'Porque el Reglamento de IA presume que cualquier desarrollo de software corporativo con más de cincuenta empleados constituye una empresa conjunta sujeta a doble auditoría externa por la autoridad de vigilancia.',
      'Porque al ponerlo en servicio para su propio uso (Art. 3.11) es a la vez proveedor (Art. 16, Anexo IV y marcado CE) y responsable del despliegue (Art. 26, supervisión humana e información sindical del Art. 26.7).',
      'Porque la empresa queda exenta como proveedor pero asume de forma subsidiaria las obligaciones de importador y distribuidor mayorista al alojar el algoritmo de cribado laboral en servidores en la nube compartida.',
      'Porque el estatuto de proveedor solo se activa para empresas de recursos humanos, mientras que las empresas comerciales de distribución quedan limitadas exclusivamente a la entrega de registros al Ministerio de Trabajo.',
    ],
    correctOptionIndex: 1,
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
      'Ambas empresas son calificadas como proveedores de modelos fundacionales con riesgo sistémico, debiendo realizar evaluaciones de modelos y pruebas adversarias conforme al artículo 55 del Reglamento de IA.',
      'La Empresa 1 es proveedora de un sistema de alto riesgo por procesar correspondencia corporativa interna, mientras que la Empresa 2 es una mera distribuidora exenta de evaluación de conformidad técnica algorítmica.',
      'La Empresa 1 es responsable del despliegue de un sistema de riesgo mínimo, mientras que la Empresa 2 se convierte en proveedor de un sistema de alto riesgo del Anexo III punto 3 conforme al artículo 25.1(c).',
      'Ninguna de las dos asume responsabilidades sustantivas bajo el Reglamento de IA, al recaer la totalidad de las obligaciones de conformidad exclusivamente en el proveedor que entrenó el modelo GPAI original.',
    ],
    correctOptionIndex: 2,
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
      'No, porque el principio de territorialidad estricta exime a los proveedores extracomunitarios mientras sus servidores y centros de procesamiento de datos permanezcan radicados fuera del territorio de la Unión.',
      'Aplica únicamente a la empresa española, quedando la consultora del tercer país exonerada de cualquier deber de colaboración o documentación técnica al carecer de personalidad jurídica en el espacio europeo.',
      'Solo resultaría aplicable si la consultora del tercer país hubiese suscrito voluntariamente el código de conducta del artículo 95 o mantuviese un establecimiento permanente registrado en un Estado miembro de la Unión.',
      'Sí: la empresa española queda sujeta bajo el artículo 2.1(b) y la consultora extracomunitaria queda plenamente vinculada por el artículo 2.1(c), al utilizarse los resultados de salida del sistema de IA en la Unión.',
    ],
    correctOptionIndex: 3,
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
      'La extracción no selectiva de imágenes de CCTV está prohibida (Art. 5.1.e), y la identificación biométrica remota comercial carece de habilitación en el RGPD y constituye un sistema de alto riesgo del Anexo III punto 1(a).',
      'Ambas prácticas son conformes con el Reglamento siempre que el centro comercial exhiba carteles informativos en los accesos y obtenga el consentimiento tácito de los visitantes al cruzar los arcos de entrada del establecimiento.',
      'La extracción masiva de rostros se clasifica como de riesgo mínimo bajo el artículo 95, mientras que la identificación de hurtadores habituales queda supeditada únicamente a un protocolo interno visado por la Policía Local.',
      'El sistema conjunto se califica como componente de seguridad de productos del Anexo I, requiriendo exclusivamente una declaración de conformidad técnica elaborada internamente por la empresa instaladora de los circuitos de TV.',
    ],
    correctOptionIndex: 0,
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
      'Ambos módulos son de riesgo mínimo por aplicarse en el ámbito del teletrabajo doméstico, quedando exentos de cualquier deber documental al regirse exclusivamente por el acuerdo individual de trabajo a distancia firmado entre las partes.',
      'El módulo 1 (inferencia de emociones en el entorno laboral) está prohibido por el artículo 5.1(f); el módulo 2 (evaluación del rendimiento y asignación de tareas) es de alto riesgo bajo el Anexo III punto 4(b) y el artículo 26.',
      'El módulo 1 es un sistema de alto riesgo sujeto a marcado CE del Anexo IV, mientras que el módulo 2 queda absolutamente prohibido por constituir una práctica vejatoria contraria al derecho constitucional a la intimidad del trabajador.',
      'Ambos módulos se consideran componentes de seguridad industrial del Anexo I Sección B, requiriendo para su validez jurídica un dictamen de auditoría emitido por la Inspección de Trabajo y Seguridad Social previo a su implantación.',
    ],
    correctOptionIndex: 1,
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
      'Debe conservar los registros de forma obligatoria durante al menos cinco años para facilitar eventuales reclamaciones laborales por discriminación, sin posibilidad de suprimirlos antes salvo autorización de la Inspección de Trabajo.',
      'Puede purgar y destruir diariamente los archivos de registro al cierre de cada jornada de selección para garantizar el derecho a la supresión de datos personales recogido en el artículo 17 del RGPD y evitar brechas de seguridad.',
      'Conservará los registros bajo su control durante un período adecuado a la finalidad del sistema y de al menos seis meses, salvo que el Derecho de la Unión o nacional aplicable en protección de datos establezca otro plazo (Art. 26.6).',
      'Está obligada a transferir semanalmente una copia criptográfica de todos los logs a un repositorio gestionado por la AESIA, cesando su deber de custodia local a partir de la recepción del justificante telemático de entrega.',
    ],
    correctOptionIndex: 2,
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
      'Queda enteramente exenta de implementar un sistema de gestión de la calidad y de elaborar la documentación técnica del Anexo IV, rigiéndose únicamente por los principios generales de alfabetización en IA previstos en el artículo 4.',
      'Puede sustituir la evaluación de conformidad por una declaración jurada de cumplimiento suscrita por el administrador único de la sociedad mercantil, depositándola en la Cámara de Comercio de su demarcación territorial de origen.',
      'Disfruta de una moratoria automática de diez años que aplaza la aplicación de todos los requisitos de alto riesgo hasta que su plantilla supere el umbral de cincuenta empleados o facture más de diez millones de euros anuales.',
      'Puede aportar la documentación del Anexo IV mediante un formulario simplificado oficial (Art. 11.1) y cumplir el sistema de gestión de la calidad de forma simplificada según las directrices de la Comisión (Art. 63), sin eximirse de la conformidad.',
    ],
    correctOptionIndex: 3,
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
      'Deben especificar mediante acuerdo escrito la información, capacidades, acceso técnico y asistencia necesarios para cumplir el Reglamento, salvo que se trate de herramientas o componentes con licencia libre y de código abierto (Art. 25.4).',
      'Asumen por ministerio de la ley una responsabilidad civil y administrativa solidaria con el integrador frente a los usuarios, respondiendo mancomunadamente de cualquier sanción impuesta por las autoridades de vigilancia del mercado.',
      'Tienen la obligación legal imperativa de transferir el código fuente íntegro y la totalidad de los derechos de explotación sobre los algoritmos al integrador, sin que sea admisible pactar cláusulas contractuales de secreto comercial o industrial.',
      'Quedan legalmente exonerados de prestar ningún tipo de soporte técnico o documentación, debiendo el integrador asumir íntegramente la ingeniería inversa de todos los componentes externos utilizados en la construcción del sistema.',
    ],
    correctOptionIndex: 0,
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

