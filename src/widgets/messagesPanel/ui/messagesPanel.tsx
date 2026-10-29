import { PanelHeading } from "@/shared/ui/PanelHeading";
import { SidebarItem } from "@/widgets/sideBar/model/mockdata";
import { FC } from "react";

interface Props {
    onClose: (item: SidebarItem) => void
    item: SidebarItem
}

const MessagesPanel: FC <Props> = ({onClose, item}) => {

    console.log(item)

    return(
        <PanelHeading heading="Сообщения" onCross = {() => onClose(item)}/>   
    )
}

export default MessagesPanel