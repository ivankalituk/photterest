'use client'
import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import { Button } from "@/shared/ui/button";
import { FC, useEffect, useState } from "react";
import { SidebarItem, sidebarNavData } from "../model/mockdata";
import SideBarButton from "./components/sideBarButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoSVG from "@/shared/assets/controlledSVG/logoSVG";

const RAIL_WIDTH = 70;
const PANEL_WIDTH = 384;

const SideBar: FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [currentButton, setCurrentButton] = useState('HOME');
    const [renderPanel, setRenderPanel] = useState<string | null>(null);
    const location = usePathname()


    const handleButton = (item: SidebarItem) => {
        if(item.id === currentButton){
            setCurrentButton(
                sidebarNavData.find(
                    item => item.href?.includes(location)
                )?.id || ''
            );

            setIsExpanded(false);

            return;
        }

        setCurrentButton(item.id);

        if(item.panel){
            setRenderPanel(item.id);
            setIsExpanded(true);
        } else {
            setRenderPanel(null);
            setIsExpanded(false);
        }
    }

    useEffect(() => {
        if(!isExpanded){
            const timeout = setTimeout(() => {
                setRenderPanel(null);
            }, 300);

            return () => clearTimeout(timeout);
        }
    }, [isExpanded]);

    const ActivePanel = sidebarNavData.find(
        item => item.id === renderPanel
    )?.panel;


    return (
        <aside
            className="
                flex
                h-[100dvh]
                transition-[width]
                duration-300
                overflow-hidden
                sticky
                top-0
            "
            style={{
                width: RAIL_WIDTH + (isExpanded ? PANEL_WIDTH : 0),
            }}
        >
            <div
                className="
                    w-[70px]
                    shrink-0
                    flex
                    flex-col
                    items-center
                    py-[16px]
                    border-r
                    gap-[24px]
                    
                "
            >
                <Link href='/'>
                    <Button 
                        type="WHITE" 
                        hover="GREY" 
                        className="
                            h-[48px]
                            w-[48px]
                        "
                        square
                    >
                        <LogoSVG />
                    </Button>
                </Link>



                {sidebarNavData.slice(0, -1).map((item: SidebarItem) => (
                    <SideBarButton 
                        item={item} 
                        key={item.id} 
                        onClick={handleButton}
                        active={currentButton === item.id}
                    />
                ))}

                    <SideBarButton 
                        item={sidebarNavData[sidebarNavData.length -1]} 
                        key={sidebarNavData[sidebarNavData.length -1].id} 
                        onClick={handleButton}
                        active={currentButton === sidebarNavData[sidebarNavData.length -1].id}

                        className="
                            mt-[auto]
                        "
                    />

            </div>

            <div
                className="
                    overflow-hidden
                    shrink-0
                "
                style={{
                    width: PANEL_WIDTH,
                }}
            >
                <div
                    className="
                        h-full
                        transition-transform
                        duration-300
                    "
                    style={{
                        transform: isExpanded
                            ? "translateX(0)"
                            : "translateX(-100%)",
                    }}
                >
                    <div 
                        className="
                            px-[12px]
                            py-[24px]
                        "
                    >
                        
                        {ActivePanel && <ActivePanel />}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;