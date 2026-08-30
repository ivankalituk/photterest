import { Button } from "@/shared/ui/button";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import avatar from '@/shared/assets/images/sampleAvatar.jpg'
import Image from "next/image";
import TickSVG from "@/shared/assets/controlledSVG/tickSVG";
import AccountDropDown from "./accountDropDown";

const HeaderAccount: FC = () => {

    const [dropDown, setDropDown] = useState<boolean>(false)

    const accountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (
                accountRef.current &&
                !accountRef.current.contains(event.target as Node)
            ) {
                setDropDown(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
        };
    }, []);

    return(
        <div
            className="
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

            <div
                className="
                    relative
                "

                ref={accountRef}
            >

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

                <AccountDropDown isOpen = {dropDown} onClose = {() => setDropDown(false)}/>
            </div>
        </div>
    )
}

export default HeaderAccount