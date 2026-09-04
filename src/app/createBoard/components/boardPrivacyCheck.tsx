'use client';

import { ChangeEvent, FC, useState } from "react";
import { InputSwitch } from "@/shared/ui/inputSwitch";

interface Props{
    onChange: () => void,
    checked: boolean
}

const BoardPrivacyCheck: FC <Props> = ({onChange, checked}) => {

    return (
        <div
            className="
                relative
                flex
                gap-[12px]
                items-center
            "
        >
            <div className="flex-1">
                <div>
                    Сделать доску частной
                </div>

                <div
                    className="
                        text-[14px]
                        text-text-light
                    "
                >
                    Доски по умолчанию являются общедоступными,
                    и любой пользователь может их увидеть.
                    Частные доски видят только соавторы
                </div>
            </div>

            <InputSwitch checked={checked} />

            <input
                className="
                    absolute
                    left-0
                    top-0
                    w-full
                    h-full
                    opacity-0
                    cursor-pointer
                "
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
};

export default BoardPrivacyCheck;