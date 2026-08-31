import { FC } from "react";
import PinField from "./components/pinField";
import { Input } from "@/shared/ui/input";

interface Props {
    name: string,
    placeholder: string
}

const PinTextInput: FC <Props> = ({name, placeholder}) => {
    return(
        <PinField name={name}>
            <Input 
                placeholder={placeholder}
                className="
                    w-[100%]
                    h-[24px]
                "
            />
        </PinField>
    )
}

export default PinTextInput