'use client';

import { useCallback, useRef } from 'react';

/**
 * Returns a function that only executes after a delay
 * @param fn - function to be debounced
 * @param delay - delay in ms
 */
const useDebounce = (fn: () => any, delay?: number) => {
  const timer: any = useRef(null);
  return useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(fn, delay);
  }, [delay, fn]);
};

export default useDebounce;
