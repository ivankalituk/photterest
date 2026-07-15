import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode
    type?: 'TRANSPARENT' | 'WHITE' | 'RED'
    hover?: 'TRANSPARENT' | 'WHITE' | 'RED'
    square?: boolean
    
}

// change hover collors, change types

const Button: FC <Props> = ({children, square, hover}) => {
    return(
        <button
            className={
                twMerge(`
                    flex
                    items-center
                    justify-around
                    h-[100%]
                    rounded-[12px] 
                `, `
                    ${square && 'aspect-[1]'}
                    ${hover === 'WHITE' && 'hover:bg-[white]'}
                    
                `)
            }
        >
            {children}
        </button>
    )
}

export default Button