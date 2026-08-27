import { FC } from "react";
import RegistrationInput from "./registrationInput";
import { Button } from "@/shared/ui/button";
import GoogleLoginButton from "./googleLoginButton";
import PasswordCheck from "./passwordCheck";

const RegistrationForm: FC = () => {
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

            <PasswordCheck password="23232"/>

            <RegistrationInput 
                type = 'date'
                placeholder="Введите дату рождения"
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
                    Продолжить
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
                У вас уже есть аккаунт? 
                <Button
                    className="
                        underline
                    "
                >
                    Войти
                </Button>
            </div>
        </div>
    )
}

export default RegistrationForm