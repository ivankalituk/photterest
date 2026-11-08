import { ChangeEvent, FC } from "react";
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string
    placeholder?: string
    onFocus?: () => void
    onBlur?: () => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    value?: string
}

const Input: FC <Props> = ({className, placeholder, onFocus, onBlur, onChange, value}) => {
    return(
        <input 
            type="text"
            placeholder = {placeholder}
            className={twMerge(`
                flex-1
                outline-none
                border-0
            `, className)}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
        />
    )
}

export default Input