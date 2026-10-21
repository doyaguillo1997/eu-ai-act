# Project Rules & Active Skills (`legal-helper`)

All agents working in this repository MUST load and follow the workspace skills in `.agents/skills/` by default:

1. **Communication (`@[caveman](.agents/skills/caveman/SKILL.md)`)**: Default active. Keep all communication terse, technical, and high-density (~65% fewer output tokens). Never alter code, file paths, or legal citations (`Reglamento (UE) 2024/1689` / `DOUE-L-2024-81079`).
2. **Minimalist & High-Performance Engineering (`@[ponytail](.agents/skills/ponytail/SKILL.md)`)**: Default active. Apply the 7-step YAGNI decision ladder before writing code. Use native web/macOS capabilities (`Float32Array`, `ArrayBuffer`, `<dialog>`, CSS Grid) and keep vector search $<5\text{ ms}$.
3. **Component-Driven Clean Code (`@[clean-code-components](.agents/skills/clean-code-components/SKILL.md)`)**: Default active. Reuse shared atomic components (`CitationBadge`, `RiskBadge`, `SectionCard`, `SegmentedFilterBar`, `SplitViewLayout`, `ParagraphInspector`, `CommandPaletteModal`). Every generated item MUST carry an exact `LegalCitation`.
4. **UX Design System (`@[ux-design-system](.agents/skills/ux-design-system/SKILL.md)`)**: Default active. Follow macOS HIG, semantic risk-tier color coding, editorial reading width, and progressive disclosure via the right-hand paragraph inspector.

## Browser & Runtime Policy
- **Target Runtime:** Electron on macOS (`x86_64-apple-darwin` / Chromium modern engine). Baseline Widely Available + modern Chromium APIs are supported natively without heavy polyfills.

## Autonomous State Persistence & Quota Continuity
- Maintain execution state in `.agents/state/progress.json` after each major step so any scheduled resumption or fallback orchestrator can continue seamlessly without losing progress.
