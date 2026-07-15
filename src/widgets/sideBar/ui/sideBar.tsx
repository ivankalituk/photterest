'use client'
import { FC, useState } from "react";

const SideBar: FC = () => {

    const [expand, setExpand] =  useState<number>(0)

    const toggleExpand = () =>{
        setExpand(expand => expand + 20)
        console.log(expand)
    }

    return(
        <div
            className="
                fixed
                left-[0px]
                top-[0px]
                bg-[green]
                h-[100vh]
                w-[70px]
            "
            style={{width: 70 + expand}}
        >
            <button onClick={toggleExpand}>Expand</button>
        </div>
    )
}

export default SideBar