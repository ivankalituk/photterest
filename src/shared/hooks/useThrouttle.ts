import { useCallback, useEffect, useRef } from "react";

export function useThrottle<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
) {
    const lastCallRef = useRef(0);
    const fnRef = useRef(fn);

    useEffect(() => {
        fnRef.current = fn;
    }, [fn]);

    return useCallback(
        (...args: Parameters<T>) => {
            const now = Date.now();

            if (now - lastCallRef.current >= delay) {
                lastCallRef.current = now;
                fnRef.current(...args);
            }
        },
        [delay]
    );
}