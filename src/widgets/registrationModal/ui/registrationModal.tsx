import CrossSVG from "@/shared/assets/controlledSVG/crossSVG";
import LogoSVG from "@/shared/assets/controlledSVG/logoSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import RegistrationInput from "./components/registrationInput";
import PasswordCheck from "./components/passwordCheck";
import GoogleLoginButton from "./components/googleLoginButton";

interface Props {
    onClose: () => void
}

const RegistrationModal: FC <Props> = ({onClose}) => {

    return(
        <div
            className="
                relative
                w-full
                max-w-[450px]
                max-h-[756px]
                p-[24px]
                rounded-[24px]
                bg-[white]
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


            {/* РЕГИСТРАЦИЯ */}
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
        </div>
    )
}

export default RegistrationModal