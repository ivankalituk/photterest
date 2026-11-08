import { SearchBar } from "@/features/searchBar";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import BoardForSearch from "./boardForSearch";
import RedPlus from "@/shared/assets/controlledSVG/redPlus";
import { AnimatePresence, motion } from "framer-motion";

const BoardsSearch: FC = () => {
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
                top-[100px]
                z-10
                absolute
                rounded-[24px]
                bg-[white]
                w-[100%]
                shadow
            "
        >
            <div
                className="
                    p-[12px]
                "
            >
                <SearchBar />

                <div
                    className="
                        pt-[16px]
                        pb-[4px]
                        text-[14px]
                    "
                >
                    Все доски
                </div>

                <div
                    className="
                        flex flex-col
                        max-h-[150px]
                        scrollBar
                        overflow-y-auto

                    "
                >
                    <BoardForSearch />
                    <BoardForSearch />
                    <BoardForSearch />
                    <BoardForSearch />
                </div>
            </div>

            <Button
                className="
                    px-[28px]
                    py-[12px]
                    w-[100%]
                    justify-start
                    gap-[16px]
                    rounded-[0px]
                    border-t-[1px]
                    border-border
                "
                hover="GREY"
            >
                <RedPlus />
                <div
                    className="
                        font-[600]
                    "
                >Создать доску</div>
            </Button>
        </motion.div>
    )
}

export default BoardsSearch