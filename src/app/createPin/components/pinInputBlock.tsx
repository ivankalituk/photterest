import { FC, ReactNode } from "react";

interface Props{
    children: ReactNode
    name: string
}

const PinInputBlock: FC <Props> = ({children, name}) => {
    return(
        <div
            className="
                px-[12px]
                py-[16px]
                rounded-[16px]
                bg-background-secondary
                border-[1px]
                border-border
                w-[100%]
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

export default PinInputBlock