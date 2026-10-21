---
name: ponytail
description: >-
  Anti-over-engineering and clean systems skill based on DietrichGebert/ponytail
  and macOS performance discipline. Enforces the 7-step YAGNI decision ladder,
  zero unnecessary dependencies, native Web/macOS APIs first, and bounded latency.
---

# Ponytail Skill — Pragmatic Minimalist & High-Performance Engineering

> *"The best code is the code you never wrote."*

Before writing any code or adding any abstraction, evaluate solutions using the **Ponytail Decision Ladder**, stopping at the first rung that satisfies the requirement:

## 1. The 7-Step Decision Ladder
1. **Does this need to exist?** (YAGNI — skip speculative abstractions).
2. **Is it already in this codebase?** (Reuse existing components, hooks, types, and utilities).
3. **Does the standard library / runtime do it?** (`Float32Array`, `Intl`, `URL`, `crypto`, `localStorage`, `ArrayBuffer`).
4. **Is there a native platform feature?** (Native `<dialog>`, CSS Grid/Flexbox, custom properties, macOS `hiddenInset` window frame).
5. **Can an already-installed dependency handle it?** (React 18 primitives, Lucide icons, Tailwind utilities).
6. **Can it be written in one clear function?**
7. **Only then:** Write the bare minimum, well-typed code that works.

## 2. What Ponytail Never Cuts (Safety & Quality Guardrails)
- **Legal Citation Accuracy:** Every statement, infographic, deadline, and quiz question MUST reference its exact source in `Reglamento (UE) 2024/1689` / `DOUE-L-2024-81079`.
- **Memory & Latency Budget on macOS (`x86_64-apple-darwin`):**
  - Vector cosine similarity and BM25 search across the entire EU AI Act must complete in $< 5\text{ ms}$ using contiguous `Float32Array` buffers without per-query heap churn.
  - Deterministic cleanup of event listeners (`keydown`, IPC channels, timers) inside React `useEffect` hooks.
- **Accessibility & Error Handling:** Full keyboard navigation (`Cmd+K`, `Escape`, arrow keys) and graceful error boundaries.
