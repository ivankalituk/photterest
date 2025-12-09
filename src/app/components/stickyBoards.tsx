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
        <div className={`fixed top-[80px] flex gap-[10px] transition-transform duration-250 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            {mockBoards.map((board: string, index: number) => (
                <div key={index} className="px-3 py-1 bg-gray-200 rounded">{board}</div>
            ))}
        </div>
    )
}

export default StickyBoards