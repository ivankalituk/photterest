import { getPinImgById } from "@/shared/helpers/getRandomImage";
import Image from "next/image";
import { FC, useState } from "react";
import { Button } from "../../button";
import TripleDotSVG from "@/shared/assets/controlledSVG/tripleDotSVG";
import { ChooseBoardButton } from "../../chooseBoardButton";
import AddPinButton from "../components/addPinButton";

interface Props {
    index: number
}

const PinCard: FC <Props> = ({index}) => {

    const [pinHover, setPinHover] = useState<boolean>(false)

    return(
        <div>
            <div 
                onPointerEnter={() => setPinHover(true)}
                onPointerLeave={() => setPinHover(false)}
                className={`
                    relative
                    rounded-[20px]
                    bg-[red]
                    overflow-hidden
                `}
            >
                <div 
                    className={`
                        absolute
                        inset-0
                        opacity-0
                        z-[9]
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0))]
                        ${pinHover && 'opacity-100'}
                        transform-opasity duration-250
                    `}
                />

                {pinHover && <div className="absolute top-[0px] left-[0px] z-[10] flex w-full gap-[10px] p-[10px]">
                    <ChooseBoardButton />

                    <AddPinButton />
                </div>}

                <Image src={getPinImgById((String(index)))} alt={`image${index}`} className="no-select no-drag"/>
            </div>

            <div 
                className="
                    flex
                    justify-between
                    px-[6px]
                    pt-[8px]
                "
            >
                <span>ExtraText</span>

                <Button type="WHITE" className="flex items-center justify-center p-[5px] rounded-[5px]"><TripleDotSVG /></Button>
            </div>
        </div>
    )
}

export default PinCard