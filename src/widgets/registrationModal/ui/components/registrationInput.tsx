import PasswordEyeSVG from "@/shared/assets/controlledSVG/passwordEyeSVG";
import { Button } from "@/shared/ui/button";
import { ChangeEvent, ChangeEventHandler, FC, HTMLInputTypeAttribute, useState } from "react";

type RegistrationInputType = "text" | "email" | "password" | "date";

interface Props{
    type?: RegistrationInputType
    placeholder?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void 
}

const RegistrationInput: FC <Props> = ({type = 'text', placeholder = '', onChange}) => {

    const [passwordType, setPasswordType] = useState<'password' | 'text'>('password')

    const togglePasswordVisibility = () => {
        setPasswordType(prev => prev === 'password'? 'text' : 'password')
    }

    return(
        <div
            className="
                flex
                items-center
                w-[100%]
                rounded-[8px]
                border-[1px]
                border-border
                px-[12px]
                py-[16px]
                focus-within:border-white
                focus-within:shadow-[0_0_0_2px_#3b82f6]
                h-[56px]
                relative
            "
        >
            <input
                className="
                    flex-1
                "
                type={type === 'password'? passwordType : type}
                onChange={onChange}
                placeholder = {placeholder} 
            />

            { type === 'password' && 
            <Button
                className="
                    absolute
                    h-[40px]
                    w-[40px]
                    rounded-full
                    right-[12px]
                "
                type="WHITE"
                onClick={togglePasswordVisibility}
            >
                <PasswordEyeSVG visibility={passwordType === 'password'}/>
            </Button>}
        </div>
    )
}

export default RegistrationInput