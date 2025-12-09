import { Button } from "@/shared/ui/button";
import { FC } from "react";
import logo from '@/shared/assets/icons/logo.svg'
import Image from "next/image";
import Link from "next/link";
import board from "@/shared/assets/icons/board.svg"
import notifications from "@/shared/assets/icons/notifications.svg"
import compass from "@/shared/assets/icons/compass.svg"
import create from "@/shared/assets/icons/create.svg"

const SideBar: FC = () => {
    return(
        <div className="
            fixed
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

            <nav className="flex flex-col items-center justify-between h-full">
                <ul className="
                    flex
                    flex-col
                    items-center
                    gap-[24px]

                ">
                    <li>
                        <Button 
                            type='ELEMENT'
                            className='w-[56px] h-[56px] aspect 1/1 p-[4px] hover:bg-grey-light rounded-[6px]'
                        >
                            <Link href='/'>
                                <Image src={logo} alt="logo" className="no-select no-drag" />
                            </Link>
                        </Button>
                    </li>

                    <li>
                        <Button 
                            type='ELEMENT'
                            className='w-[56px] h-[56px] aspect 1/1 p-[4px] hover:bg-grey-light rounded-[6px]'
                        >
                            <Link href='/'>
                                <Image src={logo} alt="logo" className="no-select no-drag" />
                            </Link>
                        </Button>
                    </li>

                    <li>
                        <Button 
                            type='ELEMENT'
                            className='w-[56px] h-[56px] aspect 1/1 p-[4px] hover:bg-grey-light rounded-[6px] flex items-center justify-around'
                        >
                            <Link href='/ideas'>
                                <Image src={compass} alt="compass" className="no-select no-drag " />
                            </Link>
                        </Button>
                    </li>

                    <li>
                        <Button 
                            type='ELEMENT'
                            className='w-[56px] h-[56px] aspect 1/1 p-[4px] hover:bg-grey-light rounded-[6px] flex items-center justify-around'
                        >
                            <Link href='/profile'>
                                <Image src={board} alt="board" className="no-select no-drag" />
                            </Link>
                        </Button>
                    </li>

                    <li>
                        <Button 
                            type='ELEMENT'
                            className='w-[56px] h-[56px] aspect 1/1 p-[4px] hover:bg-grey-light rounded-[6px] flex items-center justify-around'
                        >

                            <Image src={create} alt="create" className="no-select no-drag" />
                        </Button>
                    </li>

                    <li>
                        <Button 
                            type='ELEMENT'
                            className='w-[56px] h-[56px] aspect 1/1 p-[4px] hover:bg-grey-light rounded-[6px] flex items-center justify-around'
                        >
                            <Image src={notifications} alt="notifications" className="no-select no-drag" />
                        </Button>
                    </li>
                </ul>

                <div>
                    <Button 
                        type='ELEMENT'
                        className='w-[56px] h-[56px] aspect 1/1 p-[4px] hover:bg-grey-light rounded-[6px]'
                    >
                        <Link href='/ideas'>
                            <Image src={logo} alt="logo" className="no-select no-drag" />
                        </Link>
                    </Button>
                </div>
            </nav>
        </div>
    )
}

export default SideBar