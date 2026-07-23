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

    return(
        <Button 
            as="LINK" 
            href={item.link}
            className="
                flex-1
            "
            scaling
        >
            <item.svg active={location === item.link}/>
        </Button>
    )
}

export default BottomBarButton