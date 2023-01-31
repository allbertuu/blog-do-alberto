import { useRef } from 'react';

/**
 * Debounce hook
 * @param fn - function to be debounced
 * @param delay - delay in ms
 */
const useDebounce = (fn: any, delay?: number) => {
    let timer: any = useRef(null);
    return () => {
        clearTimeout(timer.current);
        timer.current = setTimeout(fn, delay);
    };
};

export default useDebounce;
