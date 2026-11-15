import { FC } from "react";
import sampleAvatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { CoAuthorType } from "./createBoardForm";

interface Props{
    nickname: string,
    avatar_url: string | null,
    id: string
    handleCoAuthor: (data: CoAuthorType) => void
    selected: boolean
}

const CoAuthorAccount: FC<Props> = ({nickname, avatar_url, handleCoAuthor, id, selected}) => {
    return(
        <div
            className="
                flex
                justify-between
            "
        >
            <div
                className="
                    flex
                "
            >
                <Image 
                    src={sampleAvatar} 
                    alt="avatar"
                    className="
                        w-[48px]
                        h-[48px]
                        rounded-full
                        mr-[12px]
                    "
                />
                <div
                    className="
                        flex flex-col
                        justify-between
                    "
                >
                    <div>{nickname}</div>
                    <div className="text-[14px]">@{nickname}</div>
                </div>
            </div>

            <Button
                onClick={() => handleCoAuthor({id: id, avatar: avatar_url})}
                type='GREY'
                className="
                    h-[48px]
                    px-[14px]
                    font-[600]
                "
            >
                {selected? "Убрать" : "Добавить"}
            </Button>
        </div>
    )
}

export default CoAuthorAccount