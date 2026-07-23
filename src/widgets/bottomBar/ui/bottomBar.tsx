'use client'
import { FC } from "react";
import { bottomBarData, BottomBarItemType } from "../model/mockData";
import BottomBarButton from "./components/bottomBarButton";
import { useScrollDirection } from "@/shared/hooks/useScrollDirection";

const BottomBar: FC = () => {

    const direction = useScrollDirection();

    const hidden = direction === 'down';

    // пока не знаю нужно ли делать скрытие, вроде в пинтересте
    // оно есть, а вроде и нет, там не понять, может зависит от каких-то настроек
    // если нужно убрать, просто убираю хидден

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
                transition-all
                duration-300

                ${hidden 
                    ? 
                    "opacity-0 translate-y-full pointer-events-none"
                    :
                    "opacity-100 translate-y-0"
                }

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