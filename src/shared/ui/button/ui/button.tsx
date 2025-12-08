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
            
            ${type === 'RED' && "bg-[red] p-[16px] rounded-[16px] active:bg-[yellow]"}
            ${type === 'WHITE' && 'bg-[white] p-[16px] rounded-[16px] active:bg-grey-light'}
            ${type === 'GREY' && 'bg-grey-light p-[16px] rounded-[16px] active:bg-grey'}            

            active:scale-95
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