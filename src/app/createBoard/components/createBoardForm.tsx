'use client'
import CrossSVG from "@/shared/assets/controlledSVG/crossSVG";
import { Button } from "@/shared/ui/button";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import BoardSkeleton from "./boardSkeleton";
import { PinTextInput } from "@/widgets/pinFormInputs";
import BoardPrivacyCheck from "./boardPrivacyCheck";
import AddUserSVG from "@/shared/assets/controlledSVG/addUserSVG";
import { createBoard } from "@/app/api/boards/boards";
import CoAuthorAdd from "./coAuthorAdd";
import TickSVG from "@/shared/assets/controlledSVG/tickSVG";
import TickBackSVG from "@/shared/assets/controlledSVG/tickBackSVG";

interface FormErrors{
    name: boolean
}

const CreateBoardForm: FC = () => {
    const [name, setName] = useState<string>('')
    const [boardPrivacy, setBoardPrivacy] = useState<boolean>(false)
    const [errors, setErrors] = useState<FormErrors>({
        name: false
    });

    const [mode, setMode] = useState<'MAIN' | 'COAUTHOR'>('MAIN')
    
    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onPrivacyChange = () => {
        setBoardPrivacy(!boardPrivacy)
    }

    const validate = () => {
        const newErrors = {
            name: !name
        };

        setErrors(newErrors);

        return !newErrors.name
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()

        if (!validate()) {
            return;
        }

        try{
            const response = await createBoard({
                name: name,
                private: boardPrivacy
            })

            console.log(response)

            setBoardPrivacy(false)
            setName('')

        } catch (error) {
            console.error(error)
        }

    }

    return(
        <form
            onSubmit={onSubmit}
            className="
                relative
                shadow
                rounded-[24px]
                flex-1
                max-w-[708px]
            "
        >
            {mode !== 'MAIN' && <Button
                hover="GREY"
                className="
                    absolute
                    w-[48px]
                    h-[48px]
                    left-[24px]
                    top-[24px]
                "
                onClick={() => setMode('MAIN')}
            >
                <TickBackSVG />
            </Button>}

            <h3
                className="
                    text-center
                    text-[28px]
                    font-[600]
                    p-[24px]
                "
            >
                {mode === "MAIN"? 'Создать доску' : "Пригласить соавторов"}
            </h3>
            {mode === 'MAIN' && <div>
                <BoardSkeleton />

                <div
                    className="
                        flex flex-col
                        pt-[24px]
                        px-[24px]
                        pb-[12px]
                        gap-[24px]
                    "
                >
                    <PinTextInput 
                        name="Название доски" 
                        placeholder="Введите название доски"
                        onChange={onNameChange}
                        value={name}
                        isError = {errors.name}
                    />

                    <BoardPrivacyCheck 
                        checked = {boardPrivacy}
                        onChange = {onPrivacyChange}
                    />

                    <Button
                        className="
                            justify-between
                        "
                        onClick={() => setMode('COAUTHOR')}
                    >
                        <div
                            className="
                                text-start
                            "
                        >
                            <div>Общая доска</div>

                            <div
                                className="
                                    text-[14px]
                                    text-text-light
                                "
                            >
                                Пригласите соавторов присоединиться к этой доске
                            </div>
                        </div>

                        <Button 
                            as="DIV"
                            type="GREY"
                            className="
                                h-[48px]
                                w-[48px]
                                rounded-[16px]
                            "
                        >
                            <AddUserSVG />
                        </Button>
                    </Button>

                    <Button
                        htmlType="submit"
                        disabled = {name === ''}
                        type="RED"
                        className="
                            h-[48px]
                            text-white
                            font-[600]
                            rounded-[16px]
                        "
                    >
                        Создать
                    </Button>
                </div>
            </div>}

            {mode === 'COAUTHOR' && <div>
                <CoAuthorAdd />
            </div>}

            {false && <Button
                hover="GREY"
                className="
                    invisible
                    absolute
                    w-[48px]
                    h-[48px]
                    right-[24px]
                    top-[24px]
                "
            >
                <CrossSVG width={24}/>
            </Button>}
        </form>
    )
}

export default CreateBoardForm