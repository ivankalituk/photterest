import { FC, FormEvent, useState } from "react";
import RegistrationInput from "./registrationInput";
import { Button } from "@/shared/ui/button";
import GoogleLoginButton from "./googleLoginButton";
import PasswordCheck from "./passwordCheck";
import { getPasswordProgress } from "@/shared/utils/checkPassword";
import { validateDate } from "@/shared/utils/checkdate";
import { AuthModalType } from "@/widgets/header/ui/components/headerAuth";
import { registerUser } from "@/app/api/auth/auth";
import { useAppDispatch } from "@/shared/redux/hooks";
import { setUser } from "@/shared/redux/slices/userSlice";

interface FormErrors {
    email: boolean;
    password: boolean;
    date: boolean
}

interface Props {
    handleMode: (mode: AuthModalType) => void;
}

const RegistrationForm: FC <Props> = ({handleMode}) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [date, setDate] = useState<string>("")
    const dispatch = useAppDispatch()
    const [errors, setErrors] = useState<FormErrors>({
        email: false,
        password: false,
        date: false
    });

    const validate = () => {
        const newErrors = {
            email: !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            password: !password || getPasswordProgress (password).percent < 40,
            date: !validateDate(date)
        };

        setErrors(newErrors);

        return !newErrors.email && !newErrors.password;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValid = validate();

        if (!isValid) {
            return;
        }

        try{
            const response = await registerUser({
                email,
                password,
                birth_date: date,
            })

            dispatch(setUser(response.user))

        } catch (error){
            console.error(error)
        }

        console.log({
            email,
            password,
            date
        });
    };

    return(
        <form
            onSubmit={handleSubmit}
            noValidate

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
            />
            <RegistrationInput
                type = 'password'
                placeholder="Введите пароль"
                onChange={(event) => setPassword(event.target.value)}
                isError={errors.password}
            />

            <PasswordCheck password={password}/>

            <RegistrationInput
                type = 'date'
                placeholder="Введите дату рождения"
                onChange={(event) => setDate(event.target.value)}
                isError={errors.date}
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
                    type="FULLWHITE"
                    onClick={() => handleMode("logIn")}
                    className="underline cursor-pointer"
                >
                    Войти
                </Button>
            </div>
        </form>
    )
}

export default RegistrationForm