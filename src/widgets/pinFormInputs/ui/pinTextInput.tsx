import { FC } from "react";
import PinField from "./components/pinField";

const PinTextInput: FC = () => {
    return(
        <PinField name="text">
            <span>text</span>
        </PinField>
    )
}

export default PinTextInput