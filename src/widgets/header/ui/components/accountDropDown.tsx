import { Button } from "@/shared/ui/button";
import { FC } from "react";
import sampleAvatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";

const AccountDropDown: FC = () => {
    return(
        <div
            className="
                absolute
                bg-[white]
                right-[0px]
                top-[44px]
                w-[284px]
                rounded-[12px]
                p-[12px]
                shadow
            "
        >
            <div
                className="
                    px-[12px] py-[8px]
                    text-text-light
                    text-[12px]
                "
            >
                Сейчас: 
            </div>

            <Button
                as="LINK"
                href="/profile"
                className="
                    px-[12px] py-[8px]
                    w-[100%]
                    justify-start
                    gap-[8px]
                    items-center
                "
                hover="GREY"
            >
                <Image 
                    src={sampleAvatar} 
                    alt="avatar"
                    className="
                        w-[60px]
                        h-[60px]
                        rounded-full
                    "
                />

                <div
                    className="
                        flex-1
                        flex flex-col
                        text-start
                    "
                >
                    <div
                        className="
                            text-[16px]
                            font-[600]
                        "
                    >
                        Nickname
                    </div>

                    <div
                        className="
                            text-text-light
                            text-[14px]
                        "
                    >
                        Личний
                    </div>

                    <div
                        className="
                            text-[14px]
                            text-text-light
                        "
                    >
                        post@gmail.com
                    </div>
                </div>


            </Button>

            <Button
                className="
                    px-[12px] py-[8px]
                    w-[100%]
                    justify-start
                    font-[600]
                "
            >
                Перейти на бизнес-аккаунт
            </Button>

            <div
                className="
                    px-[12px] py-[8px]
                    text-text-light
                    text-[12px]
                "
            >
                Ваши аккаунты:
            </div>

            <Button
                hover="GREY"
                className="
                    px-[12px] py-[8px]
                    w-[100%]
                    justify-start
                    font-[600]
                "
            >
                Добавить аккаунт Pinterest
            </Button>

            <Button
                hover="GREY"
                className="
                    px-[12px] py-[8px]
                    w-[100%]
                    justify-start
                    font-[600]
                "
            >
                Выход
            </Button>
        </div>
    )
}

export default AccountDropDown