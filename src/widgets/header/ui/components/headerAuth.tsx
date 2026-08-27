"use client";

import { FC, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import HeaderAccount from "./headerAccount";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/redux/hooks";
import { ModalWindow } from "@/widgets/modalWindow";
import { RegistrationModal } from "@/widgets/registrationModal";

export type AuthModalType = "registration" | "logIn";

const HeaderAuth: FC = () => {
    const user = useAppSelector((state) => state.user.currentUser);

    const [mode, setMode] = useState<AuthModalType>("logIn");

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const isModalOpen = searchParams.get("modal") === "auth";

    const openModal = (mode: AuthModalType) => {
        setMode(mode);

        const params = new URLSearchParams(searchParams.toString());
        params.set("modal", "auth");

        router.push(`${pathname}?${params.toString()}`);
    };

    const closeModal = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("modal");

        const query = params.toString();

        router.push(
            query
                ? `${pathname}?${query}`
                : pathname
        );
    };

    return (
        <div>
            {!user && (
                <div
                    className="
                        flex
                        gap-[10px]
                    "
                >
                    <Button
                        type="RED"
                        onClick={() => openModal("logIn")}
                        className="
                            h-[48px]
                            px-[14px]
                            text-[16px]
                            font-[600]
                            text-white
                        "
                    >
                        Sign In
                    </Button>

                    <Button
                        type="GREY"
                        onClick={() => openModal("registration")}
                        className="
                            h-[48px]
                            px-[14px]
                            text-[16px]
                            font-[600]
                            text-black
                        "
                    >
                        Join Up
                    </Button>
                </div>
            )}

            {user && <HeaderAccount />}

            <ModalWindow
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <RegistrationModal
                    mode={mode}
                    setMode={setMode}
                    onClose={closeModal}
                />
            </ModalWindow>
        </div>
    );
};

export default HeaderAuth;