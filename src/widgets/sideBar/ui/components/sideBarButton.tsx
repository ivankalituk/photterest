import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { SidebarItem } from "../../model/mockdata";

interface Props {
    item: SidebarItem
    onClick: (id: string) => void
    active?: boolean
}

const SideBarButton: FC <Props> = ({item, onClick, active}) => {
    return(
        <Button onClick={() => onClick(item.id)}>
            <item.icon active={active}/>
        </Button>
    )
}

export default SideBarButton