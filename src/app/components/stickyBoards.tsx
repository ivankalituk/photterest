"use client"
import { FC, useEffect, useState } from "react";

const mockBoards = [
    'All',
    'Dishes',
    'Minecraft designs',
    'SFV content',
    'RANDOM',
    'ideas'
]


const StickyBoards: FC = () => {
    const [lastScroll, setLastScroll] = useState<number>(0);
    const [hidden, setHidden] = useState<boolean>(false)
    const [currentBoard, setCurrentBoard] = useState<string>('All')

    useEffect(() => {

        const handleScroll = () =>{
            const currentScroll = window.pageYOffset
            console.log(currentScroll)

            if(currentScroll > lastScroll && currentScroll > 100){
                setHidden(true)
            } else {
                setHidden(false)
            }

            setLastScroll(currentScroll)
        }


        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScroll])

    return(
        <div className={
            `sticky top-[80px]
            flex gap-[10px]
            h-[54px]
            bg-[white]
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