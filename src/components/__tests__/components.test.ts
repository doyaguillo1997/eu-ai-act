import { describe, it, expect } from 'vitest';
import { RISK_METADATA, RiskBadge } from '../shared/RiskBadge';
import { CitationBadge } from '../shared/CitationBadge';
import { SectionCard } from '../shared/SectionCard';
import { SegmentedFilterBar } from '../shared/SegmentedFilterBar';
import { SplitViewLayout } from '../shared/SplitViewLayout';
import { StatMetricCard } from '../shared/StatMetricCard';
import { ParagraphInspector } from '../legal/ParagraphInspector';
import { CommandPaletteModal } from '../legal/CommandPaletteModal';

describe('UI Component Library Exports', () => {
  it('exports all shared components with proper signatures', () => {
    expect(RISK_METADATA).toBeDefined();
    expect(RISK_METADATA.unacceptable.shortLabel).toBe('Prohibido');
    expect(RiskBadge).toBeDefined();
    expect(CitationBadge).toBeDefined();
    expect(SectionCard).toBeDefined();
    expect(SegmentedFilterBar).toBeDefined();
    expect(SplitViewLayout).toBeDefined();
    expect(StatMetricCard).toBeDefined();
  });

  it('exports legal domain components with proper signatures', () => {
    expect(ParagraphInspector).toBeDefined();
    expect(CommandPaletteModal).toBeDefined();
  });
});
