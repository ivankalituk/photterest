'use client'
import { FC, useState } from "react";
import PinField from "./components/pinField";
import TickSVG from "@/shared/assets/controlledSVG/tickSVG";
import BoardsSearch from "./components/boardsSearch";

const PinBoardInput: FC = () => {

    const [showBoards, setShowBoars] = useState<boolean>(false)

    return(
        <div
            className="
                relative
            "
        >
            <PinField
                name="Выберите доску"
                as="BUTTON"
                onClick={() => setShowBoars(!showBoards)}
            >
                <div
                    className="
                        flex
                        w-[100%]
                        justify-between
                    "
                >
                    <div
                        className="
                            flex
                            justify-between
                            items-center
                            gap-[8px]
                        "
                    >
                        <div
                            className="
                                w-[32px]
                                h-[32px]
                                bg-grey
                                rounded-[8px]
                            "
                        />

                        <div>
                            Ваша доска
                        </div>
                    </div>

                    <TickSVG />

                </div>
            </PinField>

            {showBoards && 
                <BoardsSearch />
            }
        </div>
    )
}

export default PinBoardInput