import { Pin } from "@/entities/pin";
import { FC } from "react";

const PinsGrid: FC = () => {
    return(
        <div
            className="
                grid
                grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
                gap-[10px]
            "
        >
            {Array.from({length: 30}).map((_, index: number)=> (
                <Pin key={index}/>
            ))}
        </div>
    )
}

export default PinsGrid