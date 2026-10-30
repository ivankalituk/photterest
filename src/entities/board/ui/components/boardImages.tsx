import { FC } from "react";
import sample1 from '@/shared/assets/images/pinSample1.jpg'
import sample2 from '@/shared/assets/images/pinSample2.jpg'
import sample3 from '@/shared/assets/images/pinSample3.jpg'
import Image from "next/image";


const BoardImages: FC = () => {
    return(
        <div
            className="
                py-8px
                flex
                gap-[1px]
            "
        >
            {sample1? 
            <Image 
                src={sample1} 
                alt="image" 
                className="
                    bg-grey
                    h-[141px]
                    w-[140px]
                    rounded-l-[16px]
                    object-cover
                "
            />
            :
            <div 
                className="
                    bg-grey
                    h-[141px]
                    w-[140px]
                    rounded-l-[16px]
                "
            />}

            <div
                className="
                    flex flex-col
                    gap-[1px]
                    rounded-r-[16px]
                    overflow-hidden
                "
            >
            {sample2?
                <Image 
                    src={sample2} 
                    alt="image" 
                    className="
                        h-[70px]
                        w-[70px]
                        object-cover
                    "
                />
                    :
                <div 
                    className="
                        bg-grey
                        h-[70px]
                        w-[70px]
                    "
                />
            }
            {sample3?
                <Image 
                    src={sample3} 
                    alt="image" 
                    className="
                        h-[70px]
                        w-[70px]
                        object-cover
                    "
                />
                    :
                <div 
                    className="
                        bg-grey
                        h-[70px]
                        w-[70px]
                    "
                />
            }
            </div>
        </div>
    )
}

export default BoardImages