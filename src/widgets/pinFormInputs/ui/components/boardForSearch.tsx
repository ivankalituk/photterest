import LockSVG from "@/shared/assets/controlledSVG/lockSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";

const BoardForSearch: FC = () => {
    return(
        <Button
            hover="GREY"
            className="
                px-[8px]
                h-[52px]
                justify-between
                flex-shrink-0
            "
        >
            <div
                className="
                    flex
                    gap-[8px]
                    items-center
                "
            >
                <div 
                    className="
                        h-[32px]
                        w-[32px]
                        rounded-[8px]
                        bg-grey
                    "
                />

                <div>Название доски</div>
            </div>

            <LockSVG />
        </Button>
    )
}

export default  BoardForSearch