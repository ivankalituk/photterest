import CrossSVG from "@/shared/assets/controlledSVG/crossSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";

interface Props{
    heading: string,
    onCross: () => any
}

const PanelHeading: FC <Props> = ({heading, onCross}) => {
    return(
        <div
            className="
                flex
                items-center
                justify-between
                px-[12px]
            "
        >
            <h4
                className="
                    text-[20px]
                    font-[600]
                    leading-[28px]
                "
            >
                {heading}
            </h4>

            <Button
                scaling
                onClick={onCross} 
                hover="GREY"
                className="
                    h-[28px]
                    w-[28px]
                "
            >
                <CrossSVG />
            </Button>
        </div>
    )
}

export default PanelHeading