import { Button } from "@/shared/ui/button";
import { FC } from "react";

const PinTagsSearch: FC = () => {
    return(
        <div
            className="
                absolute
                py-[8px]
                bg-white
                shadow
                w-[100%]
                rounded-[24px]
                mt-[10px]
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
        </div>
    )
}

export default PinTagsSearch