import { PanelHeading } from "@/shared/ui/PanelHeading";
import { SidebarItem } from "@/widgets/sideBar/model/mockdata";
import { FC } from "react";
import Notification from "./components/notification";

interface Props {
    onClose: (item: SidebarItem) => void
    item: SidebarItem
}

const NotificationsPanel: FC <Props> = ({onClose, item}) => {
    return(
        <div>
            <PanelHeading heading={'Уведомления'} onCross={() => onClose(item)}/>
            
            <div 
                className="
                    mt-[44px]
                    mb-[8px]
                    px-[8px]
                "
            >
                Обновления
            </div>

            <div>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    )
}

export default NotificationsPanel