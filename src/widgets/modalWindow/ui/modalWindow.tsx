'use client'

import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface Props {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
}

const ModalWindow: FC<Props> = ({ children, isOpen, onClose }) => {
    const shouldClose = useRef(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    onMouseDown={(event) => {
                        shouldClose.current =
                            event.target === event.currentTarget;
                    }}
                    onClick={() => {
                        if (shouldClose.current) {
                            onClose();
                        }
                        shouldClose.current = false;
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="
                        fixed inset-0 z-[1000]
                        flex items-center justify-center
                        bg-black/55 backdrop-blur-[3px]
                    "
                >
                    <motion.div
                        onMouseDown={() => {
                            shouldClose.current = false;
                        }}
                        className="contents overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                        initial={{ opacity: 0, scale: 0.95, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalWindow;