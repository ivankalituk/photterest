import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    className?: string
    placeholder?: string
}

const TextArea: FC <Props> = ({placeholder, className}) => {
    return(
        <textarea 
            placeholder = {placeholder}
            className={twMerge(`
                flex-1
                outline-none
                border-0
                scrollBar
            `, className)}
        />
    )
}

export default TextArea