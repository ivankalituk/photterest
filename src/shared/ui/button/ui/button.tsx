import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode
    type?: 'TRANSPARENT' | 'WHITE' | 'RED'
    hover?: 'TRANSPARENT' | 'WHITE' | 'RED' | 'GREY'
    square?: boolean
    className?: string
    
}

// change hover collors, change types

const Button: FC <Props> = ({children, square, hover, className}) => {
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
                    ${hover === 'GREY' && 'hover:bg-[grey]'}
                    ${className && className}
                `)
            }
        >
            {children}
        </button>
    )
}

export default Button