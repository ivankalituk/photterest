import { FC } from "react";
import sampleAvatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";
import { Button } from "@/shared/ui/button";


const CoAuthorAccount: FC = () => {
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
                    <div>Account name</div>
                    <div className="text-[14px]">@accountTag</div>
                </div>
            </div>

            <Button 
                type='GREY'
                className="
                    h-[48px]
                    px-[14px]
                    font-[600]
                "
            >
                Добавить
            </Button>
        </div>
    )
}

export default CoAuthorAccount