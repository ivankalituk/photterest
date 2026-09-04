import { ChangeEvent, FC } from "react";
import PinField from "./components/pinField";
import { Input } from "@/shared/ui/input";

interface Props {
    name: string,
    placeholder: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const PinTextInput: FC <Props> = ({name, placeholder, onChange}) => {
    return(
        <PinField name={name}>
            <Input
                onChange={onChange}
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