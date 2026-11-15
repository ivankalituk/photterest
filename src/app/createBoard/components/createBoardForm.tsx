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
import TickBackSVG from "@/shared/assets/controlledSVG/tickBackSVG";
import sampleAvatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";

interface FormErrors{
    name: boolean
}

export interface CoAuthorType{
    id: string,
    avatar: string | null
}

const CreateBoardForm: FC = () => {
    const [name, setName] = useState<string>('')
    const [boardPrivacy, setBoardPrivacy] = useState<boolean>(false)
    const [errors, setErrors] = useState<FormErrors>({name: false});
    const [mode, setMode] = useState<'MAIN' | 'COAUTHOR'>('MAIN')
    

    const [coAuthors, setCoAuthors] = useState<CoAuthorType[]>([]);

    const handleCoAuthor = (data: CoAuthorType) => {
        if (coAuthors.some(item => item.id === data.id)) {
            setCoAuthors(coAuthors.filter(item => item.id !== data.id));
        } else {
            setCoAuthors(prev => [...prev, data]);
        }
    };

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

    console.log(coAuthors)

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
                            py-[10px]
                            pointer
                        "
                        hover="GREY"
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
                            className="h-[48px] rounded-[16px]"
                        >
                            {coAuthors.map((author, index) => (
                                <Image
                                    key={author.id}
                                    src={sampleAvatar}
                                    alt="avatar"
                                    className={`
                                        relative
                                        w-[48px]
                                        h-[48px]
                                        rounded-full
                                        no-drag
                                        border-[1px]
                                        border-white
                                        ${index === 0? "left-[48px]": "left-[24px]"}
                                    `}
                                />
                            ))}

                            <Button
                                as="DIV"
                                className="
                                    w-[48px]
                                    h-[48px]
                                    rounded-full
                                    z-[100]
                                    bg-grey
                                    border-[1px]
                                    border-white
                                "
                            >
                                <AddUserSVG />
                            </Button>
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
                <CoAuthorAdd coAuthors={coAuthors} handleCoAuthor={handleCoAuthor}/>
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