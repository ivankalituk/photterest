import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { FC } from "react";
import samplePin from '@/shared/assets/images/samplePin.jpg'
import HorizontalDotsSVG from "@/shared/assets/controlledSVG/horizontalDotsSVG";
import Link from "next/link";

const Notification: FC = () => {
    return(
        <Button 
            as="DIV" 
            className="
                max-h-[300px]
                justify-start
                px-[8px] py-[8px]
                gap-[8px]
            "
            hover='GREY'
        >
            <Link 
                href={'/'}
                className="
                    flex
                    gap-[8px]
                    items-center
                    flex-1
                "
            >
                <Image 
                    src={samplePin} 
                    alt="notifImg"
                    className="
                        h-[72px]
                        w-[56px]
                        object-cover
                        aspect-[1/2]
                        rounded-[12px] 
                    "
                />

                <span
                    className="
                        text-[16px]
                        leading-[22px]
                    "
                >
                    Это вам точно подойдёт
                </span>
            </Link>
            <div
                className="
                    ml-[auto]
                    flex flex-col
                    items-end
                    gap-[8px]                    
                "
            >
                <div
                    className="
                        text-[12px]
                        text-text-light
                    "
                >
                    18 ч.
                </div>

                <Button
                    scaling
                    type="WHITE" 
                    hover="WHITE"
                    className="
                        h-[24px]
                        w-[24px]
                        rounded-[8px]
                        bg-[white]
                    "
                    onClick={() => console.log(1)}
                >
                    <HorizontalDotsSVG />
                </Button>
            </div>
            
        </Button>
    )
}

export default Notification