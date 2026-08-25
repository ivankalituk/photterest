'use client'

import { Button } from "@/shared/ui/button";
import { ModalWindow } from "@/widgets/modalWindow";
import { GoogleLogin } from "@react-oauth/google";
import { FC, useState } from "react";

const AuthPage: FC = () => {

    const [modal, setModal] = useState<boolean>(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const handleGoogleLogin = async (credential: string) => {
        try {
            const response = await fetch(
                'http://localhost:5000/auth/google',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: credential,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={(response) => {
                    if (response.credential) {
                        handleGoogleLogin(response.credential);
                    }
                }}
                onError={() => {
                    console.log('Google auth failed');
                }}
            />

            <Button
                className="bg-[red]"
                onClick={openModal}
            >
                Open Modal
            </Button>

            <ModalWindow isOpen={modal} onClose={closeModal}>
                <div>gay</div>
            </ModalWindow>
            
        </div>
    );
}

export default AuthPage