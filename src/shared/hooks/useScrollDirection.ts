import { useEffect, useState } from "react";
import { useThrottle } from "./useThrouttle";

export function useScrollDirection() {
    const [direction, setDirection] = useState<'up' | 'down'>('up');

    const handleScroll = useThrottle(() => {
        const currentScroll = window.scrollY;

        const previousScroll = Number(
            sessionStorage.getItem('scrollY') || 0
        );

        if(currentScroll > previousScroll){
            setDirection('down');
        }

        if(currentScroll < previousScroll){
            setDirection('up');
        }

        sessionStorage.setItem(
            'scrollY',
            String(currentScroll)
        );

    }, 100);


    useEffect(() => {
        window.addEventListener(
            'scroll',
            handleScroll
        );

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            );
        }
    }, [handleScroll]);


    return direction;
}