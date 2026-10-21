---
name: ux-design-system
description: >-
  UX/UI Design System skill based on UI/UX Pro Max, Modern Web Guidance, and Apple macOS
  Human Interface Guidelines for legal intelligence applications. Defines typography,
  semantic risk-tier color palettes, progressive disclosure patterns, and keyboard UX.
---

# UX Design System — macOS Legal Intelligence & Compliance Studio

Designed for clarity, low cognitive load, and high scannability when studying complex European regulation.

## 1. Visual Hierarchy & Editorial Typography
- **Dual-Font System:**
  - **UI & Infographics:** Clean sans-serif (`Inter` / `-apple-system, BlinkMacSystemFont, "SF Pro Text"`) for controls, badges, metrics, and enterprise action items.
  - **Official Legal Text (BOE / EUR-Lex):** High-legibility editorial layout (`65ch–75ch` max reading width, `1.65` line height, generous paragraph spacing) with subtle left-border risk indicators and hover/active elevation on every clickable paragraph.
  - **Citations & Identifiers:** Monospace (`"SF Mono", ui-monospace`) for article numbers, ELI/BOE identifiers, and vector similarity scores.

## 2. Semantic Color System (Risk-Tier Coded)
- **Riesgo Inaceptable / Prohibido (Art. 5):** Rose/Crimson (`#f43f5e` / `rose-500`) — immediate visual alert.
- **Alto Riesgo (Art. 6, Anexos I y III):** Amber/Orange (`#f59e0b` / `amber-500`) — strict conformity requirements.
- **Modelos GPAI / Uso General (Arts. 51–55):** Violet/Purple (`#8b5cf6` / `violet-500`) — systemic & foundational obligations.
- **Riesgo de Transparencia Específica (Art. 50):** Sky/Blue (`#0ea5e9` / `sky-500`) — disclosure & watermarking duties.
- **Riesgo Mínimo / Voluntario (Art. 95):** Emerald/Green (`#10b981` / `emerald-500`) — codes of conduct.
- **Gobernanza, Sanciones y Plazos:** Indigo/Slate (`#6366f1` / `indigo-500`).

## 3. Core UX Patterns
- **Progressive Disclosure ("Vuelta de Tuerca"):** Never overwhelm the reader with walls of commentary inline. Keep the official legal text clean and scannable; clicking **any paragraph** smoothly populates the right-hand **Inspector Legal y Empresarial** with:
  1. *"En lenguaje claro"* (Plain explanation)
  2. *"¿Qué implica para la empresa?"* (Role-specific impact + actionable checklist)
  3. *"Fundamento y Considerandos"* (Linked Recitals & Annexes)
  4. *"Conexiones Semánticas"* (Vector-similar provisions across the Act)
- **Universal Traceability:** Every generated insight, infographic block, timeline item, and quiz explanation renders clickable `CitationBadge` pills that preview the exact quote on hover and jump to the exact paragraph on click.
- **macOS Native Ergonomics:**
  - `Cmd+K` opens the instant hybrid vector search palette from anywhere.
  - Translucent sidebar navigation with clear progress indicators.
