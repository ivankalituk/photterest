'use client'

import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/shared/ui/button";
import LogoSVG from "@/shared/assets/controlledSVG/logoSVG";

import { SidebarItem, sidebarNavData } from "../model/mockdata";
import SideBarButton from "./components/sideBarButton";


const RAIL_WIDTH = 70;
const PANEL_WIDTH = 384;


const SideBar: FC = () => {

    const location = usePathname();

    const [currentItem, setCurrentItem] = useState<SidebarItem>(
        sidebarNavData[0]
    );
    const [mountedPanel, setMountedPanel] = useState<SidebarItem | null>(null);

    const [isExpanded, setIsExpanded] = useState(false);


    const handleButton = (item: SidebarItem) => {

        if(item.id === currentItem.id){

            const routeItem = sidebarNavData.find(
                navItem => navItem.href?.includes(location)
            );

            if(routeItem){
                setCurrentItem(routeItem);
            }

            closePanel();

            return;
        }


        setCurrentItem(item);


        if(item.panel){

            setMountedPanel(item);
            setIsExpanded(true);

        } else {

            closePanel();

        }
    };


    const closePanel = () => {
        setIsExpanded(false);
    };


    useEffect(() => {

        if(!isExpanded){

            const timeout = setTimeout(() => {
                setMountedPanel(null);
            }, 300);


            return () => clearTimeout(timeout);
        }

    }, [isExpanded]);



    const ActivePanel = mountedPanel?.panel;



    return (
        <aside
            className="
                flex
                h-[100dvh]
                transition-[width]
                ease-[cubic-bezier(0.2,0,0,1)]
                duration-300
                overflow-hidden
                sticky
                top-0
            "
            style={{
                width: RAIL_WIDTH + (isExpanded ? PANEL_WIDTH : 0)
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
                    border-border
                    gap-[24px]
                "
            >
                <Button
                    as="LINK"
                    href="/"
                    scaling
                    type="WHITE"
                    hover="GREY"
                    square
                    className="
                        h-[48px]
                        w-[48px]
                    "
                >
                    <LogoSVG />
                </Button>

                {
                    sidebarNavData
                        .slice(0, -1)
                        .map((item: SidebarItem) => (
                            <SideBarButton
                                key={item.id}
                                item={item}
                                onClick={handleButton}
                                active={currentItem.id === item.id}
                            />
                        ))
                }

                <SideBarButton
                    item={
                        sidebarNavData[
                            sidebarNavData.length - 1
                        ]
                    }
                    onClick={handleButton}
                    active={
                        currentItem.id ===
                        sidebarNavData[
                            sidebarNavData.length - 1
                        ].id
                    }
                    className="
                        mt-auto
                    "
                />

            </div>

            <div
                className="
                    overflow-hidden
                    shrink-0
                    border-r
                    border-border
                "
                style={{
                    width: PANEL_WIDTH
                }}
            >
            
                <div
                    className="
                        h-full
                        transition-transform
                        duration-300
                        ease-[cubic-bezier(0.2,0,0,1)]
                    "
                    style={{
                        transform: isExpanded
                            ? "translateX(0)"
                            : "translateX(-100%)"
                    }}
                >

                    <div
                        className="
                            px-[12px]
                            py-[24px]
                        "
                    >

                        {
                            ActivePanel && (
                                <ActivePanel
                                    item={mountedPanel}
                                    onClose={closePanel}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </aside>
    );
};


export default SideBar;