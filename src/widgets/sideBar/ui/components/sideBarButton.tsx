import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { SidebarItem } from "../../model/mockdata";
import Link from "next/link";

interface Props {
    item: SidebarItem
    onClick: (item: SidebarItem) => void
    active?: boolean
}

const SideBarButton: FC <Props> = ({item, onClick, active}) => {

    if(item.type === 'LINK' && item.href){
        return(
            <Link href={item.href} onClick={() => onClick(item)}>
                <item.icon active={active}/>
            </Link>
        )
    }

    if(item.type === 'PANEL'){
        return(
            <Button onClick={() => onClick(item)}>
                <item.icon active={active}/>
            </Button>
        )
    }
}

export default SideBarButton