'use client'
import { FC, useState } from "react";

const SideBar: FC = () => {

    const [expand, setExpand] =  useState<number>(0)

    const toggleExpand = () =>{
        setExpand(expand => expand + 20)
        console.log(expand)
    }

    return(
        <aside
            className="
                
                left-[0px]
                top-[0px]
                bg-[green]
                h-[100dvh]
                w-[70px]
            "
            style={{width: 70 + expand}}
        >
            <div className="sticky top-[0px] left-[0px]">
                <button onClick={toggleExpand}>Expand</button>
            </div>
        </aside>
    )
}

export default SideBar