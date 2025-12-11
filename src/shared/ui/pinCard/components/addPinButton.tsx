import { FC } from "react";
import { Button } from "../../button";

interface Props{
    pinned?: boolean
}

const AddPinButton: FC <Props> = ({pinned}) => {
    return(
        <Button 
            type={pinned? "GREY" : "RED"} 
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