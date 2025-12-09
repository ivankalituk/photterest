import { FC } from "react";
import CompasSVG from "@/shared/assets/controlledSVG/compasSVG";
import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import BoardsSVG from "@/shared/assets/controlledSVG/boardsSVG";
import CreateSVG from "@/shared/assets/controlledSVG/createSVG";
import BellSVG from "@/shared/assets/controlledSVG/bellSVG";
import SettingsSVG from "@/shared/assets/controlledSVG/settingsSVG";
import Image from "next/image";
import logo from '@/shared/assets/icons/logo.svg'
import { Button } from "@/shared/ui/button";
import Link from "next/link";
const SideBar: FC = () => {
    return(
        <div className="
            fixed
            flex
            flex-col
            items-center
            justify-between
            h-[100dvh]
            w-[80px]
            py-[12px]
            row-start-1 row-end-3
            col-start-1 col-end-1
            row-end-2
            border-r-[1px]
            border-grey-light
            bg-[white]
            
        ">
            <nav>
                <ul className="
                    flex
                    flex-col
                    items-center
                    gap-[12px]
                ">
                    <Link href='/'>
                        <Button 
                            type='WHITE' 
                            className="
                                p-[5px]
                                rounded-[7px]
                                w-[55px]
                                aspect-[1/1]
                                no-select no-drag
                            "
                        >
                            <Image src={logo} alt="logo" />
                        </Button>
                    </Link>

                    <Link href='/'>
                        <Button 
                            type='WHITE' 
                            className="
                                flex
                                items-center
                                justify-around
                                p-[5px]
                                rounded-[7px]
                                w-[55px]
                                aspect-[1/1]
                                no-select no-drag
                            "
                        >
                            <HomeSVG />
                        </Button>
                    </Link>

                    {/* IF HOVER THEN SPECIAL WINDOW */}
                    <Link href='/ideas'>
                        <Button 
                            type='WHITE' 
                            className="
                                flex
                                items-center
                                justify-around
                                p-[5px]
                                rounded-[7px]
                                w-[55px]
                                aspect-[1/1]
                                no-select no-drag
                            "
                        >
                            <CompasSVG />
                        </Button>
                    </Link>

                    <Link href='/profile'>
                        <Button 
                            type='WHITE' 
                            className="
                                flex
                                items-center
                                justify-around
                                p-[5px]
                                rounded-[7px]
                                w-[55px]
                                aspect-[1/1]
                                no-select no-drag
                            "
                        >
                             <BoardsSVG />
                        </Button>
                    </Link>

                    {/* IF ACTIVE THEN SPECIAL WINDOW */}
                    <Button 
                        type='WHITE' 
                        className="
                            flex
                            items-center
                            justify-around
                            p-[5px]
                            rounded-[7px]
                            w-[55px]
                            aspect-[1/1]
                            no-select no-drag
                        "
                    >
                            <CreateSVG />
                    </Button>

                    {/* IF ACTIVE THEN SPECIAL WINDOW */}
                    <Button 
                        type='WHITE' 
                        className="
                            flex
                            items-center
                            justify-around
                            p-[5px]
                            rounded-[7px]
                            w-[55px]
                            aspect-[1/1]
                            no-select no-drag
                        "
                    >
                        <BellSVG />
                    </Button>
                </ul>
            </nav>

            <Button 
                type='WHITE' 
                className="
                    flex
                    items-center
                    justify-around
                    p-[5px]
                    rounded-[7px]
                    w-[55px]
                    aspect-[1/1]
                    no-select no-drag
                "
            >
                <SettingsSVG />
            </Button>
        </div>
    )
}

export default SideBar