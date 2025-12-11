"use client"
import { FC, useState } from "react";
import { PinCard } from "../../pinCard";


const PinsGrid: FC = () => {

    const [length, setLength] = useState<number>(20)


    return(
        <div className="columns-4 gap-[12px] space-y-[12px]">
            {Array.from({length: length}).map((_, index: number) => (
                <PinCard key={index} index={index}/>
            ))}

            <button onClick={() => {setLength(length + 20)}}>ADD</button>
        </div>
    )
}

export default PinsGrid