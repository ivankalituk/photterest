'use client'
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { BottomBarItemType } from "../../model/mockData";
import { usePathname } from "next/navigation";

interface Props{
    item: BottomBarItemType
}

const BottomBarButton: FC <Props> = ({item}) => {

    const location = usePathname()

    // active - #000000
    // unactive - #62625b


    return(
        <Button 
            as="LINK" 
            href={item.link}
            className="
                flex-1
            "
            scaling
        >
            <item.svg active={location === item.link} fill={location === item.link? '#000000' : '#62625b'}/>
        </Button>
    )
}

export default BottomBarButton