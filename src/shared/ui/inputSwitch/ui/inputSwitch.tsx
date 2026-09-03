'use client';

import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

const InputSwitch: FC<Props> = ({
    checked,
    onChange,
    className,
}) => {
    return (
        <button
            type="button"
            onClick={onChange? () => onChange(!checked) : undefined}
            className={twMerge(
                `
                relative
                flex
                h-[24px]
                w-[48px]
                items-center
                rounded-full
                p-[1px]
                transition-colors
                duration-200
                `,
                checked ? "bg-black" : "bg-border",
                className
            )}
        >
            <div
                className={twMerge(
                    `
                    h-[22px]
                    w-[22px]
                    rounded-full
                    bg-white
                    shadow-sm
                    transition-transform
                    duration-200
                    ease-out
                    `,
                    checked && "translate-x-[24px]"
                )}
            />
        </button>
    );
};

export default InputSwitch;