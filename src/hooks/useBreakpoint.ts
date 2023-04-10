import { useEffect, useState } from 'react';

import { BREAKPOINT } from '@/constants';
import { useResize } from '@/hooks/useResize';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<
    (typeof BREAKPOINT)[keyof typeof BREAKPOINT]
  >(BREAKPOINT.xs);

  const { width } = useResize();

  useEffect(() => {
    if (width >= BREAKPOINT.xl) {
      setBreakpoint(BREAKPOINT.xl);
    } else if (width >= BREAKPOINT.lg) {
      setBreakpoint(BREAKPOINT.lg);
    } else if (width >= BREAKPOINT.md) {
      setBreakpoint(BREAKPOINT.md);
    } else if (width >= BREAKPOINT.sm) {
      setBreakpoint(BREAKPOINT.sm);
    } else {
      setBreakpoint(BREAKPOINT.xs);
    }
  }, [width]);

  return {
    greaterThanLG: breakpoint > BREAKPOINT.lg,
    greaterThanMD: breakpoint > BREAKPOINT.md,
    greaterThanSM: breakpoint > BREAKPOINT.sm,
    greaterThanXL: breakpoint > BREAKPOINT.xl,
    greaterThanXS: breakpoint > BREAKPOINT.xs,
    lessThanLG: breakpoint < BREAKPOINT.lg,
    lessThanMD: breakpoint < BREAKPOINT.md,
    lessThanSM: breakpoint < BREAKPOINT.sm,
    lessThanXL: breakpoint < BREAKPOINT.xl,
    lessThanXS: breakpoint < BREAKPOINT.xs,
  };
};
