import CrossSVG from "@/shared/assets/controlledSVG/crossSVG";
import LogoSVG from "@/shared/assets/controlledSVG/logoSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import RegistrationInput from "./components/registrationInput";
import PasswordCheck from "./components/passwordCheck";
import GoogleLoginButton from "./components/googleLoginButton";
import RegistrationForm from "./components/registrationForm";
import AuthForm from "./components/authForm";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AuthModalType } from "@/widgets/header/ui/components/headerAuth";

interface Props {
    onClose: () => void
}

const RegistrationModal: FC <Props> = ({onClose}) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const mode = searchParams.get('modal')

    const handleMode = (mode: AuthModalType) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('modal', mode)
        const query = params.toString();
        router.push(
            query
                ? `${pathname}?${query}`
                : pathname
        );
    }


    return(
        <div
            className="
                relative
                w-full
                max-w-[450px]
                max-h-[756px]
                py-[24px]
                rounded-[24px]
                bg-[white]
                box-border
            "
        >
            <div
                className="
                    overflow-y-auto
                    scrollBar
                    max-h-[708px]
                    px-[24px]
                "
            >
                <Button 
                    as="DIV"
                    square
                    className="
                        w-[64px]
                        h-[64px]
                        bg-grey-main
                    "
                >
                    <LogoSVG width={36}/>
                </Button>


                <Button
                    onClick={onClose}
                    type="WHITE"
                    className="
                        w-[48px]
                        h-[48px]
                        absolute
                        right-[24px]
                        top-[24px]
                    "
                >
                    <CrossSVG width={24}/>
                </Button>

                <h3
                    className="
                        mt-[16px]
                        text-[26px]
                        font-[600]
                    "
                >
                    Добро пожаловать в Photterest
                </h3>

                <div>Присоединяйтесь к Photterest бесплатно, чтобы просматривать больше идей</div>


                {mode === 'registration' && <RegistrationForm handleMode = {handleMode}/>}
                {mode === 'logIn' && <AuthForm handleMode = {handleMode}/>}

            </div>
        </div>
    )
}

export default RegistrationModal