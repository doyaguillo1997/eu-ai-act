# EU AI Act Studio (Reglamento UE 2024/1689)

> 🌐 **Versión Web en Vivo (GitHub Pages):** [https://doyaguillo1997.github.io/eu-ai-act/](https://doyaguillo1997.github.io/eu-ai-act/)

Aplicación interactiva (Web y Escritorio) para el estudio, análisis y cumplimiento normativo del **Reglamento (UE) 2024/1689 sobre Inteligencia Artificial (EU AI Act)** y su marco de adaptación en España (AESIA / BOE).

Construida con **Electron, React 18, TypeScript, Tailwind CSS y motor de búsqueda vectorial híbrido (`Float32Array`) en local**.

---

## Características Principales

* **Lector Jurídico Interactivo ("Vuelta de Tuerca"):**
  * Texto íntegro oficial de los **113 Artículos**, **180 Considerandos** y **13 Anexos** (EUR-Lex / BOE).
  * Desglose interactivo párrafo a párrafo con explicación en lenguaje claro e impacto empresarial por rol.
  * Conexiones semánticas por similitud coseno vectorial entre artículos y considerandos.
* **Búsqueda Semántica Vectorial Híbrida (`Cmd+K`):**
  * Búsqueda instantánea léxica + vectorial embebida en memoria sin llamadas a APIs externas ni latencia.
* **Matriz de Deberes por Rol Empresarial:**
  * Selector multi-rol: Desplegador (Empresa usuaria), Proveedor, Proveedor de Modelos GPAI, Importador y Distribuidor.
  * Casos sectoriales: Aseguradoras, Banca, PYMEs y modelos de IA in-house.
* **Cronograma Oficial y Auditoría de Readiness:**
  * Seguimiento de los 6 hitos temporales oficiales (2024–2030) con checklist interactivo y trazabilidad jurídica.
* **Banco de Tests y Simulador de Examen:**
  * Más de 200 preguntas prácticas y teóricas con modo estudio (feedback inmediato) y modo examen cronometrado con informe de debilidades.
* **Diseño Nativo y Alto Rendimiento en macOS:**
  * Soporte nativo para Modo Oscuro y Modo Claro adaptativo con contraste WCAG AA.
  * Consumo energético optimizado para macOS (sin sobrecalentamiento ni uso continuo de GPU).

---

## Requisitos y Pila Tecnológica

* **Node.js:** v18+ (recomendado v20+)
* **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons
* **Desktop:** Electron 27 (arquitectura universal x64 + arm64 Apple Silicon)
* **Testing:** Vitest

---

## Instalación y Desarrollo

```bash
# 1. Clonar el repositorio
git clone https://github.com/doyaguillo1997/eu-ai-act.git
cd eu-ai-act

# 2. Instalar dependencias
npm install

# 3. Iniciar en modo desarrollo web
npm run dev

# 4. Iniciar en modo Electron desktop
npm run electron:dev
```

---

## Verificación y Pruebas

```bash
# Ejecutar suite de pruebas unitarias (Vitest)
npm test

# Verificación de tipos TypeScript
npx tsc --noEmit
```

---

## Compilación y Empaquetado

```bash
# Compilar build web
npm run build

# Empaquetar DMG Universal para macOS (Intel + Apple Silicon)
npm run dist:mac:universal

# Empaquetar instalador NSIS para Windows (.exe)
npm run dist:win
```

---

## Fuentes Oficiales

* **EUR-Lex:** [Reglamento (UE) 2024/1689 del Parlamento Europeo y del Consejo](https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202401689)
* **BOE:** [Disposición DOUE-L-2024-81079](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-81079)
* **AESIA:** Real Decreto 729/2023 y Real Decreto 817/2023 (Sandbox regulatorio de IA en España)

---

## Licencia

Distribuido bajo licencia MIT. Consulte el articulado oficial para efectos jurídicos vinculantes.
