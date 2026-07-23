'use client'
import Link from "next/link";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface Props {
    children: ReactNode
    type?: 'TRANSPARENT' | 'WHITE' | 'RED'
    hover?: 'TRANSPARENT' | 'WHITE' | 'RED' | 'GREY'
    square?: boolean
    className?: string
    onClick?: () => any
    as?: 'BUTTON' | 'DIV' | 'LINK'
    href?: string
    scaling?: boolean
}

// change hover collors, change types

const Button: FC <Props> = ({children, square, hover, className, onClick, as = 'BUTTON', href, scaling}) => {

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.8,
    } as const;

    const MotionLink = motion(Link);

    if(as === 'DIV'){
        return(
            <motion.div
                className={
                    twMerge(`
                        flex
                        items-center
                        justify-around
                        h-[100%]
                        rounded-[12px] 
                        transition-colors
                        duration-200
                        ease-[cubic-bezier(0.2,0,0,1)]
                    `, `
                        ${square && 'aspect-[1]'}
                        ${hover === 'WHITE' && 'hover:bg-[white]'}
                        ${hover === 'GREY' && 'hover:bg-background-hover active:bg-background-active'}
                        ${className && className}
                    `)
                }
                onClick={onClick}
                whileTap={scaling ? { scale: 0.96 } : undefined}
                transition={spring}
            >
                {children}
            </motion.div>
        )
    }

    if(as === 'LINK' && href){
        return(
            <MotionLink
                href={href}
                className={
                    twMerge(`
                        flex
                        items-center
                        justify-around
                        h-[100%]
                        rounded-[12px] 
                        transition-colors
                        duration-200
                        ease-[cubic-bezier(0.2,0,0,1)]
                    `, `
                        ${square && 'aspect-[1]'}
                        ${hover === 'WHITE' && 'hover:bg-[white]'}
                        ${hover === 'GREY' && 'hover:bg-background-hover active:bg-background-active'}
                        ${className && className}
                    `)
                }

                whileTap={
                    scaling ? { scale: 0.96 } : undefined
                }
                transition={spring}
                
                onClick={onClick}
            >
                {children}
            </MotionLink>
        )
    }

    return(
        <motion.button
            className={
                twMerge(`
                    flex
                    items-center
                    justify-around
                    h-[100%]
                    rounded-[12px]
                    transition-colors
                    duration-200
                    ease-[cubic-bezier(0.2,0,0,1)] 
                `, `
                    ${square && 'aspect-[1]'}
                    ${hover === 'WHITE' && 'hover:bg-[white]'}
                    ${hover === 'GREY' && 'hover:bg-background-hover active:bg-background-active'}
                    ${className && className}
                `)
            }

                whileTap={scaling ? { scale: 0.96 } : undefined}
                transition={spring}

            onClick={onClick}
        >
            {children}
        </motion.button>
    )
    
}

export default Button