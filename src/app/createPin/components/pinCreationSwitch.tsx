import { Button } from "@/shared/ui/button";
import { InputSwitch } from "@/shared/ui/inputSwitch";
import { ChangeEvent, FC, useState } from "react";

interface Props {
    text: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    checked: boolean
}

const PinCreationSwitch: FC<Props> = ({
    text,
    onChange,
    checked
}) => {

    return(
        <Button
            as="DIV"
            className="
                relative
                flex
                gap-[10px]
                h-[24px]
                select-none
                cursor-pointer
            "
        >
            <InputSwitch checked = {checked}/>
            <span>{text}</span>

            <input 
                type="checkbox" 
                onChange={onChange} 
                checked={checked}
                aria-label={text}
                className="
                    absolute
                    w-[100%]
                    h-[100%]
                    opacity-0
                    cursor-pointer
                "
            />
        </Button>
    )
}

export default PinCreationSwitch