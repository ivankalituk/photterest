import { FC, useState } from "react";
import { Button } from "../../button";

interface Props{
    pinned?: boolean
}

const AddPinButton: FC <Props> = ({pinned = false}) => {

    const [isPinned, setIsPinned] = useState<boolean>(pinned)
    

    return(
        <Button 
            onClick={() => setIsPinned(!isPinned)}
            type={isPinned? "GREY" : "RED"} 
            className="
                flex-1
                rounded-[10px]
                flex
                items-center
                justify-around
                text-[white]
                font-bold
                active:scale-[0.96]
            "
        >
            {pinned? 'Save' : 'Saved'}
        </Button>
    )
}

export default AddPinButton