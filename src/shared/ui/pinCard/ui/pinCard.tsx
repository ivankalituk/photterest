import { getPinImgById } from "@/shared/helpers/getRandomImage";
import Image from "next/image";
import { FC } from "react";

interface Props {
    index: number
}

const PinCard: FC <Props> = ({index}) => {
    return(
        <div>
            <Image src={getPinImgById((String(index)))} alt={`image${index}`}/>
        </div>
    )
}

export default PinCard