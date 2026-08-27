'use client'
import { FC, useState } from "react";
import HeaderAccount from "./headerAccount";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/redux/hooks";
import { ModalWindow } from "@/widgets/modalWindow";
import { RegistrationModal } from "@/widgets/registrationModal";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type AuthModalType = "registration" | "logIn";


const HeaderAuth: FC = () => {
    const user = useAppSelector((state) => state.user.currentUser)


    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const modal = searchParams.get("modal");

    const openModal = (modal: AuthModalType) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('modal', modal)
        router.push(`${pathname}?${params.toString()}`);
    }

    const closeModal = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('modal')
        const query = params.toString();
        router.push(
            query
                ? `${pathname}?${query}`
                : pathname
        );
    }

    const isModalOpen =
        modal === 'registration' ||
        modal === 'logIn'


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
                        onClick={() => openModal('registration')}
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
                        onClick={() => openModal('logIn')}
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

            <ModalWindow isOpen = {isModalOpen} onClose={closeModal}>
                <RegistrationModal onClose={closeModal}/>
            </ModalWindow>
        </div>
    )
}

export default HeaderAuth