import { ChangeEvent, ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";

interface Props{
    type?: HTMLInputTypeAttribute
    placeholder?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void 
}

const RegistrationInput: FC <Props> = ({type = 'text', placeholder = '', onChange}) => {


    return(
        <div
            className="
                flex
                w-[100%]
                rounded-[8px]
                border-[1px]
                border-border
                px-[12px]
                py-[16px]
                focus-within:border-white
                focus-within:shadow-[0_0_0_2px_#3b82f6]
            "
        >
            <input
                className="
                    flex-1
                "
                type={type}
                onChange={onChange}
                placeholder = {placeholder} 
            />
        </div>
    )
}

export default RegistrationInput