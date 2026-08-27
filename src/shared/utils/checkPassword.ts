
export interface PasswordCheckProgress {
    percent: number;
    tip: string;
    color: string;
}

export const getPasswordProgress = (password: string): PasswordCheckProgress => {
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