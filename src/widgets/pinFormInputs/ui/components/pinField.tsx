import { Button } from "@/shared/ui/button";
import { FC, ReactNode } from "react";

interface Props{
    children: ReactNode
    name: string
    as?: 'DIV' | 'BUTTON'
    onClick?: () => void
    isError?: boolean
}

const PinField: FC <Props> = ({children, name, as = 'DIV', onClick, isError}) => {

    if(as === 'BUTTON'){
        return(
            <Button
                onClick={onClick}
                className={`
                    block
                    text-start
                    px-[16px]
                    py-[16px]
                    rounded-[16px]
                    border-[1px]
                    border-border
                    w-[100%]
                    focus-within:border-white
                    focus-within:shadow-[0_0_0_2px_#3b82f6]

                    ${isError && 'shadow-[0_0_0_2px_#FF0000]'}
                `}
            >
                <div
                    className="
                        font-[500]
                        text-[12px]
                        mb-[10px]
                    "
                >
                    {name}
                </div>
                {children}
            </Button>
        )
    }


    return(
        <div
            className="
                px-[16px]
                py-[16px]
                rounded-[16px]
                border-[1px]
                border-border
                w-[100%]
                focus-within:border-white
                focus-within:shadow-[0_0_0_2px_#3b82f6]
            "
        >
            <div
                className="
                    font-[500]
                    text-[12px]
                    mb-[10px]
                "
            >
                {name}
            </div>
            {children}
        </div>
    )
}

export default PinField