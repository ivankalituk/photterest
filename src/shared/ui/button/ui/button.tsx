import Link from "next/link";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode
    type?: 'TRANSPARENT' | 'WHITE' | 'RED'
    hover?: 'TRANSPARENT' | 'WHITE' | 'RED' | 'GREY'
    square?: boolean
    className?: string
    onClick?: () => any
    as?: 'BUTTON' | 'DIV' | 'LINK'
    href?: string
}

// change hover collors, change types

const Button: FC <Props> = ({children, square, hover, className, onClick, as = 'BUTTON', href}) => {


    if(as === 'DIV'){
        return(
            <div
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
                onClick={onClick}
            >
                {children}
            </div>
        )
    }

    if(as === 'LINK' && href){
        return(
            <Link
                href={href}
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
                onClick={onClick}
            >
                {children}
            </Link>
        )
    }

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
            onClick={onClick}
        >
            {children}
        </button>
    )
    
}

export default Button