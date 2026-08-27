import { FC } from "react";

interface Props {
    password: string;
}

interface PasswordProgress {
    percent: number;
    tip: string;
    color: string;
}

const getPasswordProgress = (password: string): PasswordProgress => {
    if (!password) {
        return {
            percent: 0,
            tip: "Подсказка",
            color: "bg-gray-300",
        };
    }

    let percent = 20;
    let tip = "Плохой";
    let color = "bg-red-900";

    if (password.length >= 8) {
        percent = 40;
        tip = "Хороший";
        color = "bg-blue-500";
    }

    const hasUpperCase = /[A-ZА-ЯЁ]/.test(password);
    const hasLowerCase = /[a-zа-яё]/.test(password);

    if (hasUpperCase && hasLowerCase) {
        percent = 60;
        tip = "Отличный!";
        color = "bg-green-500";
    }

    const hasSpecialCharacter = /[^a-zA-Zа-яА-ЯёЁ0-9]/.test(password);

    if (hasSpecialCharacter) {
        percent = 80;
        tip = "Отличный!!";
        color = "bg-green-500";
    }

    if (password.length > 10) {
        percent = 100;
        tip = "Отличный!!!";
        color = "bg-green-500";
    }

    return {
        percent,
        tip,
        color,
    };
};

const PasswordCheck: FC<Props> = ({ password }) => {
    const progress = getPasswordProgress(password);

    return (
        <div>
            <div className="h-[8px] w-full overflow-hidden rounded-full bg-gray-300">
                <div
                    className={`h-full ${progress.color} transition-all duration-300`}
                    style={{ width: `${progress.percent}%` }}
                />
            </div>

            <div
                className="
                    mt-[4px]
                    text-[12px]
                    font-[600]
                "
            >
                {progress.tip}
            </div>

            <div
                className="
                    text-[12px]
                    text-text-light
                "
            >
                Пароль должен содержать не менее 8 символов,
                буквы в разном регистре и специальные символы
            </div>
        </div>
    );
};

export default PasswordCheck;