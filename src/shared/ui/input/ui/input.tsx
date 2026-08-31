import { FC } from "react";
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string
    placeholder?: string
    onFocus?: () => void
    onBlur?: () => void
    // поменять
    onChange?: () => void
}

const Input: FC <Props> = ({className, placeholder, onFocus, onBlur, onChange}) => {
    return(
        <input 
            type="text"
            placeholder = {placeholder}
            className={twMerge(`
                flex-1
                outline-none
                border-0
            `, className)}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    )
}

export default Input