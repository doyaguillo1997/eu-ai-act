import { describe, it, expect } from 'vitest';
import React from 'react';
import { RISK_METADATA } from '../shared/RiskBadge';

describe('Legal & UI Components Specification', () => {
  it('covers all 6 official risk levels in RISK_METADATA', () => {
    const levels = ['unacceptable', 'high', 'gpai', 'transparency', 'minimal', 'governance'] as const;
    for (const lvl of levels) {
      expect(RISK_METADATA[lvl]).toBeDefined();
      expect(RISK_METADATA[lvl].label).toBeTruthy();
      expect(RISK_METADATA[lvl].shortLabel).toBeTruthy();
      expect(RISK_METADATA[lvl].colorClass).toBeTruthy();
      expect(RISK_METADATA[lvl].borderClass).toBeTruthy();
      expect(RISK_METADATA[lvl].bgClass).toBeTruthy();
      expect(RISK_METADATA[lvl].dotClass).toBeTruthy();
      expect(RISK_METADATA[lvl].description).toBeTruthy();
    }
  });

  it('matches semantic color coding required by UX design system', () => {
    expect(RISK_METADATA.unacceptable.colorClass).toContain('rose');
    expect(RISK_METADATA.high.colorClass).toContain('amber');
    expect(RISK_METADATA.gpai.colorClass).toContain('violet');
    expect(RISK_METADATA.transparency.colorClass).toContain('sky');
    expect(RISK_METADATA.minimal.colorClass).toContain('emerald');
    expect(RISK_METADATA.governance.colorClass).toContain('indigo');
  });
});
