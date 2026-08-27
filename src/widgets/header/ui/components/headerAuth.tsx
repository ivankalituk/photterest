'use client'
import { FC, useState } from "react";
import HeaderAccount from "./headerAccount";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/redux/hooks";
import { ModalWindow } from "@/widgets/modalWindow";
import { RegistrationModal } from "@/widgets/registrationModal";

const HeaderAuth: FC = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)

    const user = useAppSelector((state) => state.user.currentUser)

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    return(
        <div>
            {!user && 
                <div
                    className="
                        flex
                        gap-[10px]
                    "
                >
                    <Button 
                        type="RED"
                        onClick={handleOpenModal}
                        className="
                            h-[48]
                            px-[14px]
                            text-[16px]
                            font-[600]
                            text-white
                        "
                    >
                        Sign In
                    </Button>

                    <Button
                        onClick={handleOpenModal}
                        type="GREY"
                        className="
                            h-[48]
                            px-[14px]
                            text-[16px]
                            font-[600]
                            text-black
                        "
                    >
                        Join Up
                    </Button>
                </div>
            }

            {user && <HeaderAccount />}

            <ModalWindow isOpen = {openModal} onClose={() => setOpenModal(false)}>
                <RegistrationModal onClose={() => setOpenModal(false)}/>
            </ModalWindow>
        </div>
    )
}

export default HeaderAuth