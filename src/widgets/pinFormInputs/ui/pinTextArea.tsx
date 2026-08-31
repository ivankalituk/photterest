import { FC } from "react";
import PinField from "./components/pinField";
import { TextArea } from "@/shared/ui/textArea";

interface Props {
    name: string,
    placeholder: string
}

const PinTextInput: FC <Props> = ({name, placeholder}) => {
    return(
        <PinField name={name}>
            <TextArea 
                placeholder={placeholder}
                className="
                    w-[100%]
                    min-h-[24px]
                "
            />
        </PinField>
    )
}

export default PinTextInput