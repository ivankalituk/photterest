import PinSVG from "@/shared/assets/controlledSVG/pinSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";

const CreatePanelVariant: FC = () => {
    return(
        <Button 
            as="LINK"
            href="/"
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
                <PinSVG />
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
                    Пин
                </h5>
                <span
                    className="
                        text-[14px]
                        text-text-light
                    "
                >
                    Публикуйте фотографии или видео, добавляйте ссылки, наклейки, эффекты и не только
                </span>
            </div>
        </Button>
    )
}

export default CreatePanelVariant