'use client'
import { FC, useEffect, useState } from "react";
import SettingsSVG from "@/shared/assets/controlledSVG/settingsSVG";
import Image from "next/image";
import logo from '@/shared/assets/icons/logo.svg'
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { mockButtons } from "@/widgets/searchBar/model/mockData";
import SideBarButton from "@/widgets/searchBar/ui/components/sideBarButton";
import { usePathname } from "next/navigation";

const SideBar: FC = () => {

    const [sectionActive, setSectionActive] = useState<string>('/')
    const pathname = usePathname();

    const handleActivatedSection = (section: string) => {
        
        // если переданная секция уже активна, то делаем её не активной
        // а также проверяем пазнейм для назначения текущей активной секции

        if (sectionActive === section){
            console.log(sectionActive === section)
            switch(pathname){
                case '/':
                    setSectionActive('home')
                    break
                case '/ideas':
                    setSectionActive('ideas')
                    break
                case '/profile':
                    setSectionActive('profile')
                    break
            }
        } else {
            // если передана новая секция, то делаем её активной
            switch(section){
                case '/':
                    setSectionActive('home')
                    break
                case '/ideas':
                    setSectionActive('ideas')
                    break
                case '/profile':
                    setSectionActive('profile')
                    break
                default: 
                    setSectionActive(section)
                    break
            }
        }

        console.log(sectionActive)
    }

    useEffect(() => {
        handleActivatedSection(pathname)
    }, [pathname])


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
                            name={data.name}
                            active={sectionActive === data.name}
                            onClick={handleActivatedSection}
                        />
                    ))}
                </ul>
            </nav>

            <SideBarButton 
                name='settings'
                element = {<SettingsSVG />} 
                key='settings' 
                type='active'
                active={sectionActive === 'settings'}
                onClick={handleActivatedSection}
            />
        </div>
    )
}

export default SideBar