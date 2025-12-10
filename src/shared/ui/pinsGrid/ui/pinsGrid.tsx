import { FC } from "react";
import { PinCard } from "../../pinCard";


const PinsGrid: FC = () => {
    return(
        <div>
            {Array.from({length: 20}).map((_, index: number) => (
                <PinCard key={index} index={index}/>
            ))}
        </div>
    )
}

export default PinsGrid