"use client"
import { useThrottle } from "@/shared/hooks/useThrottle";
import { FC, useEffect, useRef, useState } from "react";

const mockBoards = [
    'All',
    'Dishes',
    'Minecraft designs',
    'SFV content',
    'RANDOM',
    'ideas'
]


const StickyBoards: FC = () => {
    // const [lastScroll, setLastScroll] = useState<number>(0);
    const [hidden, setHidden] = useState<boolean>(false)
    const [currentBoard, setCurrentBoard] = useState<string>('All')

    const lastScrollRef = useRef(0)

    const handleScroll = useThrottle(() => {
        const currentScroll = window.pageYOffset
        console.log('ACTION')
        if (currentScroll > lastScrollRef.current && currentScroll > 100) {
            setHidden(true)
        } else {
            setHidden(false)
        }

        lastScrollRef.current = currentScroll
    }, 100)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])


    return(
        <div className={
            `sticky top-[80px]
            flex gap-[10px]
            h-[54px]
            bg-[white]
            z-[11]
            transition-transform duration-250 ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}>
            {mockBoards.map((board: string, index: number) => (
                <div 
                    key={index} 
                    className="
                        px-[12px] py-[8px]
                        text-[black]
                        font-[500]
                    "
                >
                    <div 
                        className={`
                            ${currentBoard === board? 'border-b-[black]' : 'border-b-[white]'}
                            cursor-pointer
                            no-drag no-select
                            border-b-[2px]
                            transition-border duration-250
                        `}
                        onClick={() => setCurrentBoard(board)}
                    >
                        {board}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StickyBoards