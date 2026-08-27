import { FC, FormEvent, useState } from "react";

import GoogleLoginButton from "./googleLoginButton";
import { Button } from "@/shared/ui/button";
import RegistrationInput from "./registrationInput";

import { AuthModalType } from "@/widgets/header/ui/components/headerAuth";

interface Props {
    handleMode: (mode: AuthModalType) => void;
}

interface FormErrors {
    email: boolean;
    password: boolean;
}

const AuthForm: FC<Props> = ({ handleMode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState<FormErrors>({
        email: false,
        password: false,
    });

    const validate = () => {
        const newErrors = {
            email:
                !email ||
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),

            password: !password,
        };

        setErrors(newErrors);

        return !newErrors.email && !newErrors.password;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        console.log({
            email,
            password,
        });
    };

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            className="
                flex
                flex-col
                gap-[8px]
                mt-[16px]
            "
        >
            <RegistrationInput
                type="email"
                placeholder="Введите свою почту"
                onChange={(event) => setEmail(event.target.value)}
                isError={errors.email}
            />

            <RegistrationInput
                type="password"
                placeholder="Введите пароль"
                onChange={(event) => setPassword(event.target.value)}
                isError={errors.password}
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
                    htmlType="submit"
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
                >
                    ИЛИ
                </div>

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
                    type="FULLWHITE"
                    onClick={() => handleMode("registration")}
                    className="underline cursor-pointer"
                >
                    Зарегистрироваться
                </Button>
            </div>
        </form>
    );
};

export default AuthForm;