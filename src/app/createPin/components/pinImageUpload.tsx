import ImageSVG from "@/shared/assets/controlledSVG/imageSVG";
import { FC } from "react";

const PinImageUpload: FC = () => {
    return(
        <div
            className="
                relative
                w-[357px]
                aspect-[357/457]
                rounded-[24px]
                bg-background-secondary
                overflow-hidden
                border-[1px]
                border-border
                transition-colors
                duration-200
                ease-[cubic-bezier(0.2,0,0,1)]

                hover:bg-background-hover
                active:bg-background-active
            "
        >
            <div
                className="
                    h-[100%]
                    flex
                    flex-col
                    items-center
                    justify-center
                "
            >                
                <ImageSVG />

                <span
                    className="
                        font-[600]
                        mt-[12px]
                        text-text-default
                    "
                >
                    Загрузите медиафайлы
                </span>
                <span
                    className="
                        mt-[10px]
                        w-[70%]
                        text-center
                        text-text-light
                    "
                >
                    Выберите несколько файлов в проводнике, используя клавиши Shift или Cmd/Ctrl
                </span>
            </div>

            <input 
                type="file"
                className="
                    opacity-[0]
                    absolute
                    top-[0px]
                    left-[0px]
                    w-[100%]
                    h-[100%]
                " 
            />
        </div>
    )
}

export default PinImageUpload