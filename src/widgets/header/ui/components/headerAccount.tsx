import { Button } from "@/shared/ui/button";
import { FC } from "react";
import avatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";
import Link from "next/link";
import TickSVG from "@/shared/assets/controlledSVG/tickSVG";

const HeaderAccount: FC = () => {
    return(
        <div
            className="
                flex
                items-center
            "
        >
            <Link 
                href={'/'}
            >
                <Button
                    className="
                        w-[48px]
                        cursor-pointer
                    "
                    hover='GREY'
                    square
                >
                    <Image 
                        src={avatar} 
                        alt="avatar" 
                        className="
                            no-drag
                            h-[32px]
                            w-[32px]
                            aspect-1
                            rounded-full
                            object-cover
                        "
                    />
                </Button>
            </Link>

            <Button
                square
                className="
                    h-[24px]
                    w-[24px]
                    rounded-full
                "
                hover="GREY"
            >
                <TickSVG />
            </Button>
        </div>
    )
}

export default HeaderAccount