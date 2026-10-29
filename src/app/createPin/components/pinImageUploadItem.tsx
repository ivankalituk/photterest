import CrossSVG from "@/shared/assets/controlledSVG/crossSVG";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { FC } from "react";

interface Props {
    src: string
    index: number
    handleDeleteImage: (src: string) => void
}

const PinImageUploadItem: FC<Props> = ({src, index, handleDeleteImage}) => {
    return(
            <div 
                key={index}
                className="
                    relative
                    w-[100px]
                    h-[100px]
                    bg-red
                    rounded-[16px]
                    overflow-hidden
                    shrink-0
                " 
            >
                <Image
                    key={src}
                    src={src}
                    alt={`uploaded image ${index + 1}`}
                    width={30}
                    height={30}
                    className="
                        w-full
                        h-full
                        object-cover
                    "
                />
                <Button
                    onClick={() => handleDeleteImage(src)}
                    type="WHITE"
                    className="
                        absolute
                        items-start
                        justify-start
                        right-[5px]
                        top-[5px]
                        w-[27px]
                        h-[27px]
                        items-center
                        justify-center
                    "
                >
                    <CrossSVG />
                </Button>
            </div>
    )
}

export default PinImageUploadItem