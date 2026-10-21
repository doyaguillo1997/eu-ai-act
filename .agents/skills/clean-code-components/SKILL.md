---
name: clean-code-components
description: >-
  Component-driven architecture and Clean Code standards for the EU AI Act macOS app.
  Enforces atomic component reuse (DRY), single responsibility, strict TypeScript typing,
  and mandatory legal reference binding across all UI modules.
---

# Clean Code & Component-Driven Architecture Skill

All application code must follow strict **Component-Driven Development (CDD)** and **Clean Code** principles to maximize reuse and maintainability.

## 1. Atomic & Reusable Component Hierarchy
- **Shared Primitives (`src/components/shared/`)**:
  - `CitationBadge`: Single universal component for rendering and navigating to any legal citation (`Art. X`, `Párrafo Y`, `Considerando Z`, `Anexo W`). Never hardcode inline citation badges.
  - `RiskBadge`: Single universal badge for AI Act risk tiers (`unacceptable`, `high`, `transparency`, `gpai`, `minimal`, `governance`).
  - `SectionCard`: Reusable container card with standardized header, icon slot, badge slot, body, and citation footer.
  - `SegmentedFilterBar`: Reusable filter/tab control for roles, risk tiers, titles, and quiz modes.
  - `StatMetricCard`: Reusable KPI/metric card with optional progress ring/bar.
  - `SplitViewLayout`: Reusable master-detail layout pairing a scrollable primary pane with a sticky/collapsible inspector drawer.
- **Domain Components (`src/components/legal/`)**:
  - `ParagraphInspector`: Single inspector drawer used whenever a user clicks a paragraph in the Law Reader or inspects a citation anywhere in the app.
  - `CommandPaletteModal`: Global `Cmd+K` vector + lexical search modal.

## 2. Clean Code Rules
- **Single Responsibility (SRP):** One component per file; separate pure data transformations (`src/services/`) from React presentation (`src/components/` and `src/views/`).
- **Strict TypeScript:** Zero `any` types in domain models. All legal entities must implement `WithLegalCitations`.
- **Zero Duplicated Logic (DRY):** Search, citation resolution, risk-tier styling, and local storage persistence must live in shared services/hooks (`src/services/vectorStore.ts`, `src/hooks/useLegalStore.ts`).
