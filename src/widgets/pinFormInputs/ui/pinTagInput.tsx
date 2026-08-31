import { FC } from "react";
import PinField from "./components/pinField";

const PinTagInput: FC = () => {
    return(
        <PinField name="tag">
            <span>tag</span>
        </PinField>
    )
}

export default PinTagInput