import PinSVG from "@/shared/assets/controlledSVG/pinSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { CreatePanelTypes } from "../../model/mockData";

interface Props{
    variant: CreatePanelTypes
    onClose: () => void
}

const CreatePanelVariant: FC <Props> = ({variant, onClose}) => {
    return(
        <Button 
            as="LINK"
            href={variant.href}
            className="
                my-[12px]
                w-[100%]
                justify-start
                px-[12px]
                py-[8px]
                gap-[12px]
                items-start
            "
            hover="GREY"
            onClick={onClose}
        >
            <Button 
                as="DIV"
                className="
                    bg-background-secondary
                    w-[60px]
                    h-[60px]
                    shrink-0
                "
            >
                <variant.icon />
            </Button>

            <div
                className="
                    text-left
                "
            >
                <h5
                    className="
                        text-[16px]
                        text-text-default
                    "
                >
                    {variant.heading}
                </h5>
                <span
                    className="
                        text-[14px]
                        text-text-light
                    "
                >
                    {variant.explanation}
                </span>
            </div>
        </Button>
    )
}

export default CreatePanelVariant