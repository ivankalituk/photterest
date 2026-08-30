import { Button } from "@/shared/ui/button";
import { FC, useEffect, useRef } from "react";
import sampleAvatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import { logoutUser } from "@/app/api/auth/auth";
import { clearUser } from "@/shared/redux/slices/userSlice";
import { RootState } from "@reduxjs/toolkit/query";

interface Props {
    onClose: () => void
    isOpen: boolean
}

const AccountDropDown: FC <Props> = ({onClose, isOpen}) => {

    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.currentUser)

    const handleLogout = async () => {
        try{
            const {message} = await logoutUser()
            console.log(message)
            dispatch(clearUser())
            onClose()
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <AnimatePresence>
            {isOpen && user && <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.96,
                    y: -4,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    scale: 0.96,
                    y: -4,
                }}
                transition={{
                    duration: 0.15,
                    ease: 'easeOut',
                }}
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
                            min-w-0
                            flex flex-col
                            text-start
                        "
                    >
                        <div
                            className="
                                text-[16px]
                                font-[600]
                                truncate
                            "
                        >
                            {user.nickname}
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
                                truncate
                            "
                        >
                            {user.email}
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
                    onClick={handleLogout}
                >
                    Выход
                </Button>
            </motion.div>}
        </AnimatePresence>
    )
}

export default AccountDropDown