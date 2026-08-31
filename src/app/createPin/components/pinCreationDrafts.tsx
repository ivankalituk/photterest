import FolderSVG from "@/shared/assets/controlledSVG/folderSVG";
import PlusSVG from "@/shared/assets/controlledSVG/plusSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";

const PinCreationDrafts: FC = () => {
    return(
        <div
            className="
                w-[70px]
                overflow-y-auto
                border-l-[1px]
                border-t-[1px]
                border-border
                flex flex-col
                items-center
                p-[16px]
                gap-[24px]
            "
        >
            <Button
                className="
                    w-[48px]
                    h-[48px]
                "
                hover="GREY"
            >
                <FolderSVG />
            </Button>

            <Button
                className="
                    w-[48px]
                    h-[48px]
                "
                hover="GREY"
            >
                <PlusSVG />
            </Button>
        </div>
    )
}

export default PinCreationDrafts