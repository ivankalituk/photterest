import { Button } from "@/shared/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import { FC } from "react";
import googleLogo from '@/shared/assets/icons/googleLogo.svg'

const GoogleLoginButton: FC = () => {
    const handleGoogleLogin = async (credential: string) => {
        try {
            const response = await fetch(
                "http://localhost:5000/auth/google",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
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

    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            await handleGoogleLogin(response.access_token);
        },

        onError: () => {
            console.log("Google auth failed");
        },
    });

    return(
        <Button
            onClick={() => googleLogin()}
            className="
                px-[12px]
                grid
                grid-cols-3
                grid-cols-[1fr_auto_1fr]
                h-[48px]
                border-border
                border-[1px]
                items-center
            "
        >
            <Image
                className="
                    w-[20px]
                " 
                src={googleLogo} 
                alt="logo"
            />
            <div
                className="font-[500]"
            >
                Войти через Google
            </div>
        </Button>
    )
}

export default GoogleLoginButton