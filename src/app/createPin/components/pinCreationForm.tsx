import { FC } from "react";
import PinImageUpload from "./pinImageUpload";
import { PinBoardInput, PinTagInput, PinTextArea, PinTextInput } from "@/widgets/pinFormInputs";

const PinCreationForm: FC = () => {
    return(
        <form
            className="
                flex
                max-w-[1000px]
                gap-[40px]
                w-[100%]
                py-[20px]
            "
        >
            <div>
                <PinImageUpload />
            </div>

            <div 
                className="
                    flex-1
                    flex flex-col
                    gap-[20px]
                "
            >
                <PinTextInput name="Название" placeholder="Добавьте описание пина"/>
                <PinTextArea name="Описание" placeholder="Опишите ваш пин"/>
                <PinTextInput name="Ссылка" placeholder="Добавить ссылку"/>
                <PinBoardInput />
                <PinTagInput />
            </div>
        </form>
    )
}

export default PinCreationForm