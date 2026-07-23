'use client'
import { FC } from "react";
import { bottomBarData, BottomBarItemType } from "../model/mockData";
import BottomBarButton from "./components/bottomBarButton";

const BottomBar: FC = () => {
    return(
        <nav
            className="
                fixed bottom-[0px] left-[0px]
                justify-around
                flex gap-[10px]
                bottom-[0px]
                left-[0px]
                w-[100%]
                h-[52px]
                bg-[white]
                border-t
                border-border
                px-[8px]
                pt-[12px] pb-[16px]
                
                lg:hidden
            "
        >
            {bottomBarData.map((item: BottomBarItemType) => (
                <BottomBarButton item={item} key={item.id}/>
            ))}
        </nav>
    )
}

export default BottomBar