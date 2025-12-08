import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
    type: 'ELEMENT' | 'RED' | 'WHITE' | 'GREY'
    className?: string
    onClick?: () => void
}

const Button: FC <Props> = ({children, type, className, onClick}) => {

    return(
        <button className={`
            flex
            
            ${type === 'RED' && "bg-[red] active:bg-[yellow]"}
            ${type === 'WHITE' && 'bg-[white] active:bg-grey-light hover:bg-grey-light'}
            ${type === 'GREY' && 'bg-grey-light active:bg-grey'}            

            active:scale-90
            transition-all duration-250

            ${className}
        `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button