'use client'
import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import { Button } from "@/shared/ui/button";
import { FC, useState } from "react";
import { SidebarItem, sidebarNavData } from "../model/mockdata";
import SideBarButton from "./components/sideBarButton";

const RAIL_WIDTH = 70;
const PANEL_WIDTH = 200;

const SideBar: FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [currentButton, setCurrentButton] = useState<string>('HOME')

    const handleButton = (id: string) => {

        // или если текущая страница === главной, то делать HOME
        if(id === currentButton){
            setCurrentButton('HOME')
            console.log('id===current')
            return
        } else {
            setCurrentButton(id)
        }

    }

    return (
        <aside
            className="
                flex
                h-[100dvh]
                bg-green-500
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

                    py-4
                    border-r
                "
            >
                <button
                    onClick={() => setIsExpanded(prev => !prev)}
                >
                    Expand
                </button>

                {sidebarNavData.map((item: SidebarItem) => (
                    <SideBarButton 
                        item={item} 
                        key={item.id} 
                        onClick={handleButton}
                        active={currentButton === item.id}
                    />
                ))}

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
                    <div className="p-5">
                        <h2 className="font-bold mb-4">
                            Expanded Content
                        </h2>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;