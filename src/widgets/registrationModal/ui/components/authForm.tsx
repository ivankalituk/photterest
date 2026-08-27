import { FC } from "react";
import GoogleLoginButton from "./googleLoginButton";
import { Button } from "@/shared/ui/button";
import RegistrationInput from "./registrationInput";

const AuthForm: FC = () => {
    return(
        <div
            className="
                flex flex-col
                gap-[8px]
                mt-[16px]
            "
        >
            <RegistrationInput
                type = 'email'
                placeholder="Введите свою почту"
            />
            <RegistrationInput 
                type = 'password'
                placeholder="Введите пароль"
            />

                        <div
                className="
                    flex
                    flex-col
                    gap-[8px]
                "
            >
                <Button
                    type="RED"
                    className="
                        h-[48px]
                        text-[white]
                        font-[600]
                        w-[100%]
                    "
                >
                    Войти
                </Button>

                <div
                    className="
                        text-center
                        text-[14px]
                    "
                >ИЛИ</div>

                <GoogleLoginButton />
            </div>

            <div 
                className="
                    flex
                    gap-[4px]
                    mt-[16px]
                    justify-center
                "
            >
                У вас ещё нет аккаунта? 
                <Button
                    className="
                        underline
                    "
                >
                    Зарегистрироваться
                </Button>
            </div>
        </div>
    )
}

export default AuthForm