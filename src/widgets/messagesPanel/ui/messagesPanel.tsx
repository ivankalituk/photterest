import { PanelHeading } from "@/shared/ui/PanelHeading";
import { SidebarItem } from "@/widgets/sideBar/model/mockdata";
import { FC } from "react";

interface Props {
    onClose: (item: SidebarItem) => void
    item: SidebarItem
}

// пока не буду делать, тут есть разные отделения
// разные варианты панели зависимо от выбора
// пока сам не знаю как оно работает в пинтересте

const MessagesPanel: FC <Props> = ({onClose, item}) => {
    return(
        <PanelHeading heading="Сообщения" onCross = {() => onClose(item)}/>   
    )
}

export default MessagesPanel