import { FC } from "react";
import { bottomBarData, BottomBarItemType } from "../model/mockData";
import BottomBarButton from "./components/bottomBarButton";

const BottomBar: FC = () => {
    return(
        <nav
            className={`
                fixed
                bottom-0
                left-0
                flex
                justify-around
                w-full
                h-[52px]
                bg-[white]
                border-t
                border-border

                lg:hidden
            `}
        >
            {bottomBarData.map((item: BottomBarItemType) => (
                <BottomBarButton item={item} key={item.id}/>
            ))}
        </nav>
    )
}

export default BottomBar