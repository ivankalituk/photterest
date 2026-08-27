import { getPasswordProgress } from "@/shared/utils/checkPassword";
import { FC } from "react";

interface Props {
    password: string;
}

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