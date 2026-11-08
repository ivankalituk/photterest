import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { motion } from "framer-motion";

const PinTagsSearch: FC = () => {
    return(
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.96,
                y: -4,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                scale: 0.96,
                y: -4,
            }}
            transition={{
                duration: 0.15,
                ease: 'easeOut',
            }}

            className="
                absolute
                py-[8px]
                bg-white
                shadow
                w-[100%]
                rounded-[24px]
                mt-[10px]
                z-10
            "
        >
            <div
                className="
                    px-[8px]
                    max-h-[200px]
                    overflow-y-auto
                    scrollBar
                "
            >
            {Array.from({length: 10}).map((_, index: number) => (
                <Button
                    className="
                        p-[8px]
                    "
                    key={index}
                    hover="GREY"
                >
                    tag
                </Button>
            ))}
            </div>
        </motion.div>
    )
}

export default PinTagsSearch