import { Button } from "@/shared/ui/button";
import { InputSwitch } from "@/shared/ui/inputSwitch";
import { ChangeEvent, FC, useState } from "react";

interface Props {
    text: string
}

const PinCreationSwitch: FC<Props> = ({text}) => {

    const [checked, setChecked] = useState<boolean>(false)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return(
        <Button
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