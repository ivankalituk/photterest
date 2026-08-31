import { FC, ReactNode } from "react";

interface Props{
    children: ReactNode
    name: string
}

const PinField: FC <Props> = ({children, name}) => {
    return(
        <div
            className="
                px-[12px]
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
                    text-text-light
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