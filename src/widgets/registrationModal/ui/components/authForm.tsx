import { FC, FormEvent, useState } from "react";
import GoogleLoginButton from "./googleLoginButton";
import { Button } from "@/shared/ui/button";
import RegistrationInput from "./registrationInput";
import PasswordCheck from "./passwordCheck";
import { getPasswordProgress } from "@/shared/utils/checkPassword";
import { AuthModalType } from "@/widgets/header/ui/components/headerAuth";

interface FormErrors {
    email: boolean;
    password: boolean;
}

interface Props {
    handleMode: (mode: AuthModalType) => void
}

const AuthForm: FC <Props> = ({handleMode}) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [errors, setErrors] = useState<FormErrors>({
        email: false,
        password: false,
    });

    const validate = () => {
        const newErrors = {
            email: !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            password: !password
        };

        setErrors(newErrors);

        return !newErrors.email && !newErrors.password;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValid = validate();

        if (!isValid) {
            return;
        }

        console.log({
            email,
            password,
        });
    };

    return(
        <form
            noValidate
            onSubmit={handleSubmit}
            className="
                flex flex-col
                gap-[8px]
                mt-[16px]
            "
        >
            <RegistrationInput
                type = 'email'
                placeholder="Введите свою почту"
                onChange={(event) => setEmail(event.target.value)}
                isError={errors.email}
                required     
            />
            <RegistrationInput 
                type = 'password'
                placeholder="Введите пароль"
                onChange={(event) => setPassword(event.target.value)}
                isError={errors.password}
                required
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
                    htmlType="submit"
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
                    onClick={() => handleMode('registration')}
                >
                    Зарегистрироваться
                </Button>
            </div>
        </form>
    )
}

export default AuthForm