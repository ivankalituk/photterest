import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
    children: ReactNode;
    type: 'ELEMENT' | 'RED' | 'WHITE' | 'GREY';
    className?: string;
    onClick?: () => void;
}

const Button: FC<Props> = ({ children, type, className, onClick }) => {

    const baseStyles = `
        flex items-center justify-center
        rounded-xl
        select-none
    `;

    const typeStyles = {
        RED: "bg-[red]",
        WHITE: "bg-transparent hover:bg-grey-light",
        GREY: "bg-grey-light",
        ELEMENT: ""
    };

    return (
        <motion.button
            onClick={onClick}
            className={`
                ${baseStyles}
                ${typeStyles[type]}
                ${className}
            `}
            
            whileTap={{ scale: 0.97 }}
            
            // whileHover={{ scale: 1.03 }}
            
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 25
            }}
        >
            {children}
        </motion.button>
    );
};

export default Button;