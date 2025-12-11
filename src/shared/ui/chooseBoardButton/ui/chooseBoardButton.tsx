import { FC } from "react";
import { Button } from "../../button";
import Image from "next/image";
import fullTick from '@/shared/assets/icons/fullTick.svg'

interface Props {
    boardName?: string
}

const ChooseBoardButton: FC <Props> = ({boardName = 'Unselected'}) => {
    return(
        <Button
            type="WHITE" 
            className="
                font-bold
                flex
                items-center
                justify-between
                flex-1
                p-[10px]
                rounded-[10px]
                gap-[10px]
                text-[white]
               active:scale-[0.96]        
            "
        >
            <span>{boardName}</span>
            <Image src={fullTick} alt="fullTick"/>
        </Button>
    )
}

export default ChooseBoardButton