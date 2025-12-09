'use client'
import { FC, useState } from "react";
import SettingsSVG from "@/shared/assets/controlledSVG/settingsSVG";
import Image from "next/image";
import logo from '@/shared/assets/icons/logo.svg'
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { mockButtons } from "@/widgets/searchBar/model/mockData";
import SideBarButton from "@/widgets/searchBar/ui/components/sideBarButton";
import { usePathname } from "next/navigation";

const SideBar: FC = () => {

    const [overrideActiveId, setOverrideActiveId] = useState<string | null>(null);

    const pathname = usePathname()

    const getActiveId = () => {
        if (overrideActiveId) return overrideActiveId;

        const match = mockButtons.find(
            b => b.link && pathname === b.link
        );

        return match?.name ?? null;
    };

    const activeId = getActiveId();


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
            z-1
            
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

                    {mockButtons.map((data) => (
                        <SideBarButton 
                            element = {data.component} 
                            key={data.name} 
                            link={data.link} 
                            type={data.type}
                            active = {data.name === activeId}
                        />
                    ))}
                </ul>
            </nav>

            <SideBarButton 
                element = {<SettingsSVG />} 
                key='settings' 
                type='active'
                active = {'settings' === activeId}
            />
        </div>
    )
}

export default SideBar