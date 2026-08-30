import { Button } from "@/shared/ui/button";
import { FC, useState } from "react";
import avatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";
import TickSVG from "@/shared/assets/controlledSVG/tickSVG";
import AccountDropDown from "./accountDropDown";

const HeaderAccount: FC = () => {

    const [dropDown, setDropDown] = useState<boolean>(false)

    return(
        <div
            className="
                relative
                flex
                items-center
            "
        >
            <Button
                scaling
                as="LINK"
                href="/profile"
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

            <Button
                scaling
                square
                className="
                    h-[38px]
                    w-[38px]
                    rounded-[12px]
                "
                hover="GREY"

                onClick={() => setDropDown(!dropDown)}
            >
                <TickSVG />
            </Button>

            {dropDown && <AccountDropDown />}
        </div>
    )
}

export default HeaderAccount