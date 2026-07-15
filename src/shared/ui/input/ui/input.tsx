import { FC } from "react";
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string
    placeholder?: string
}

const Input: FC <Props> = ({className, placeholder}) => {
    return(
        <input 
            type="text"
            placeholder = {placeholder}
            className={twMerge(`
                flex-1
                outline-none
                border-0
            `, className)}
        />
    )
}

export default Input