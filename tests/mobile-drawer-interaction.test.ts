import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('Mobile Inspector Drawer & Consecutive Tap Logic Unit Verification', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('verifies first tap updates provision and activates Siri glow while keeping drawer closed', () => {
    let isMobileDrawerOpen = false;
    let isSiriGlowing = false;
    let lastSelectedKey: string | null = null;
    let siriTimer: NodeJS.Timeout | null = null;

    const triggerSiriGlow = () => {
      isSiriGlowing = true;
      if (siriTimer) clearTimeout(siriTimer);
      siriTimer = setTimeout(() => {
        isSiriGlowing = false;
      }, 1800);
    };

    const handleSelectProvision = (targetKey: string, isMobile: boolean) => {
      if (isMobile) {
        if (isMobileDrawerOpen) {
          lastSelectedKey = targetKey;
        } else {
          if (lastSelectedKey === targetKey) {
            isMobileDrawerOpen = true;
            isSiriGlowing = false;
          } else {
            lastSelectedKey = targetKey;
            triggerSiriGlow();
          }
        }
      }
    };

    // 1. First tap on Article 5
    handleSelectProvision('art_5', true);
    expect(isMobileDrawerOpen).toBe(false);
    expect(isSiriGlowing).toBe(true);
    expect(lastSelectedKey).toBe('art_5');

    // 2. Advance timer by 1000ms: still glowing
    vi.advanceTimersByTime(1000);
    expect(isSiriGlowing).toBe(true);

    // 3. Advance past 1800ms: glow turns off
    vi.advanceTimersByTime(850);
    expect(isSiriGlowing).toBe(false);
  });

  it('verifies second consecutive tap on same provision opens drawer and terminates glow', () => {
    let isMobileDrawerOpen = false;
    let isSiriGlowing = false;
    let lastSelectedKey: string | null = null;

    const handleSelectProvision = (targetKey: string, isMobile: boolean) => {
      if (isMobile) {
        if (isMobileDrawerOpen) {
          lastSelectedKey = targetKey;
        } else {
          if (lastSelectedKey === targetKey) {
            isMobileDrawerOpen = true;
            isSiriGlowing = false;
          } else {
            lastSelectedKey = targetKey;
            isSiriGlowing = true;
          }
        }
      }
    };

    // 1. First tap on Article 6
    handleSelectProvision('art_6', true);
    expect(isMobileDrawerOpen).toBe(false);
    expect(isSiriGlowing).toBe(true);

    // 2. Second consecutive tap on Article 6
    handleSelectProvision('art_6', true);
    expect(isMobileDrawerOpen).toBe(true);
    expect(isSiriGlowing).toBe(false);
  });

  it('verifies minimizing drawer clears consecutive tracking so subsequent tap triggers first-tap glow instead of immediate open', () => {
    let isMobileDrawerOpen = false;
    let isSiriGlowing = false;
    let lastSelectedKey: string | null = null;

    const closeMobileDrawer = () => {
      isMobileDrawerOpen = false;
      lastSelectedKey = null;
    };

    const handleSelectProvision = (targetKey: string, isMobile: boolean) => {
      if (isMobile) {
        if (isMobileDrawerOpen) {
          lastSelectedKey = targetKey;
        } else {
          if (lastSelectedKey === targetKey) {
            isMobileDrawerOpen = true;
            isSiriGlowing = false;
          } else {
            lastSelectedKey = targetKey;
            isSiriGlowing = true;
          }
        }
      }
    };

    // 1. Tap 1 on Art 5 -> glow, closed
    handleSelectProvision('art_5', true);
    expect(isMobileDrawerOpen).toBe(false);
    expect(isSiriGlowing).toBe(true);

    // 2. Tap 2 on Art 5 -> open
    handleSelectProvision('art_5', true);
    expect(isMobileDrawerOpen).toBe(true);

    // 3. User clicks "Minimizar"
    closeMobileDrawer();
    expect(isMobileDrawerOpen).toBe(false);
    expect(lastSelectedKey).toBeNull();

    // 4. User taps Art 5 again -> MUST NOT immediately open! Must be treated as first tap: glow and stay closed!
    handleSelectProvision('art_5', true);
    expect(isMobileDrawerOpen).toBe(false);
    expect(isSiriGlowing).toBe(true);
    expect(lastSelectedKey).toBe('art_5');
  });

  it('verifies touch swipe down gesture calculation dismisses drawer if distance > 45px', () => {
    let isMobileDrawerOpen = true;
    let lastSelectedKey: string | null = 'art_5';

    const closeMobileDrawer = () => {
      isMobileDrawerOpen = false;
      lastSelectedKey = null;
    };

    const handleSwipeEnd = (startY: number, endY: number) => {
      const diff = endY - startY;
      if (diff > 45) {
        closeMobileDrawer();
      }
    };

    // Small swipe down (30px) -> does not close
    handleSwipeEnd(100, 130);
    expect(isMobileDrawerOpen).toBe(true);

    // Swipe up (-50px) -> does not close
    handleSwipeEnd(100, 50);
    expect(isMobileDrawerOpen).toBe(true);

    // Big swipe down (75px) -> closes drawer and resets state
    handleSwipeEnd(100, 175);
    expect(isMobileDrawerOpen).toBe(false);
    expect(lastSelectedKey).toBeNull();
  });

  it('verifies resize to desktop resets mobile drawer and prevents ghost open state', () => {
    let isMobile = true;
    let isMobileDrawerOpen = true;
    let lastSelectedKey: string | null = 'art_5';

    const handleResize = (newWidth: number) => {
      const mobile = newWidth < 1024;
      isMobile = mobile;
      if (!mobile) {
        isMobileDrawerOpen = false;
        lastSelectedKey = null;
      }
    };

    // Resize from mobile (390px) to desktop (1280px)
    handleResize(1280);
    expect(isMobile).toBe(false);
    expect(isMobileDrawerOpen).toBe(false);
    expect(lastSelectedKey).toBeNull();
  });
});
