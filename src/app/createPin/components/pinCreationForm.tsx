'use client'
import { FC } from "react";
import PinImageUpload from "./pinImageUpload";
import { PinBoardInput, PinTagInput, PinTextArea, PinTextInput } from "@/widgets/pinFormInputs";
import { InputSwitch } from "@/shared/ui/inputSwitch";
import InputCheckbox from "@/shared/ui/inputCheckbox/ui/inputCheckbox";
import PinCreationSwitch from "./pinCreationSwitch";

const PinCreationForm: FC = () => {
    return(
        <form
            className="
                flex
                max-w-[1000px]
                h-[100%]
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
                <PinTextInput name="Название" placeholder="Добавьте описание пина" onChange={() => console.log('1')}/>
                <PinTextArea name="Описание" placeholder="Опишите ваш пин" />
                <PinTextInput name="Ссылка" placeholder="Добавить ссылку" onChange={() => console.log('1')}/>
                <PinBoardInput />
                <PinTagInput />


                <div
                    className="
                        flex flex-col
                        items-start
                        gap-[10px]
                    "
                >
                    <PinCreationSwitch text={'Отметить как изменённый пс помощью ИИ'}/>
                    <PinCreationSwitch text={'Этот пин содержит человека, созданного с помощью ИИ'}/>
                    <PinCreationSwitch text={'Разрешить комментировать'}/>
                </div>
            </div>
        </form>
    )
}

export default PinCreationForm