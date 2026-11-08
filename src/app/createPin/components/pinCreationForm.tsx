'use client'
import { ChangeEvent, FC, useState } from "react";
import PinImageUpload from "./pinImageUpload";
import { PinBoardInput, PinTagInput, PinTextArea, PinTextInput } from "@/widgets/pinFormInputs";
import PinCreationSwitch from "./pinCreationSwitch";

const PinCreationForm: FC = () => {

    const [aiCreated, setAiCreated] = useState<boolean>(false)
    const [aiHumanCreated, setAiHumanCreated] = useState<boolean>(false)
    const [allowComments, setAllowComments] = useState<boolean>(false)


    const onAiCreatedChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAiCreated(event.target.checked)
    }

    const onAiHumanCreatedChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAiHumanCreated(event.target.checked)
    }


    const onAllowCommentsChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAllowComments(event.target.checked)
    }


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
                    <PinCreationSwitch
                        text={'Отметить как изменённый пс помощью ИИ'}
                        onChange={onAiCreatedChange}
                        checked={aiCreated}
                    />
                    <PinCreationSwitch 
                        text={'Этот пин содержит человека, созданного с помощью ИИ'}
                        onChange={onAiHumanCreatedChange}
                        checked={aiHumanCreated}
                    />
                    <PinCreationSwitch 
                        text={'Разрешить комментировать'}
                        onChange={onAllowCommentsChange}
                        checked={allowComments}
                    />
                </div>
            </div>
        </form>
    )
}

export default PinCreationForm