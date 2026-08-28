import { Button } from "@/shared/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import { FC } from "react";
import googleLogo from '@/shared/assets/icons/googleLogo.svg'
import { authGoogleUser, createSession } from "@/app/api/auth/auth";
import { useAppDispatch } from "@/shared/redux/hooks";
import { setUser } from "@/shared/redux/slices/userSlice";

const GoogleLoginButton: FC = () => {
    const dispatch = useAppDispatch()

    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            const data = await authGoogleUser(response.access_token)
            dispatch(setUser(data.user))
            await createSession(data.token);
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