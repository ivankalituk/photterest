import { useCallback, useEffect, useRef } from "react";


export function useThrottle(fn: () => void, delay: number){
    const lastCallRef = useRef(0)
    const fnRef = useRef(fn)

    useEffect(() => {
        fnRef.current = fn
    }, [fn])

    return useCallback((...args: any) => {
        const now = Date.now()

        if(now - lastCallRef.current >= delay){
            lastCallRef.current = now
            fnRef.current(...args)
        }
    }, [delay])
}