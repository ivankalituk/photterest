import BoardsSVG from "@/shared/assets/controlledSVG/boardsSVG";
import CreateSVG from "@/shared/assets/controlledSVG/createSVG";
import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import LogoSVG from "@/shared/assets/controlledSVG/logoSVG";
import MessagesSVG from "@/shared/assets/controlledSVG/messagesSVG";
import NotificationsSVG from "@/shared/assets/controlledSVG/notificationsSVG";
import SettingsSVG from "@/shared/assets/controlledSVG/settingsSVG";
import { FC } from "react";
import CreatePanel from "../../createPanel/ui/createPanel";
import { NotificationsPanel } from "@/widgets/notificationsPanel";
import { MessagesPanel } from "@/widgets/messagesPanel";

export interface SidebarItem {
    id: string,
    name: string,
    type: 'LINK' | 'PANEL',
    href?: string,
    panel?: FC<{item: SidebarItem, onClose: (item :SidebarItem) => void}>
    icon: FC<{active? : boolean}> 
}

export const sidebarNavData: SidebarItem[] = [
    {
        name: 'Home',
        id: 'HOME',
        type: 'LINK',
        icon: HomeSVG,
        href: '/'
    },
    {
        name: 'Boards',
        id: 'BOARDS',
        type: 'LINK',
        href: '/boards',
        icon: BoardsSVG,
    },
    {
        name: 'Create pin',
        id: 'CREATE',
        type: 'PANEL',
        icon: CreateSVG,
        panel: CreatePanel,
    },
    {
        name: 'Notifications',
        id: 'NOTIFICATIONS',
        type: 'PANEL',
        icon: NotificationsSVG,
        panel: NotificationsPanel,
    },
    {
        name: 'Messages',
        id: 'MESSAGES',
        type: 'PANEL',
        icon: MessagesSVG,
        panel: MessagesPanel,
    },
    {
        name: 'Settings',
        id: 'SETTINGS',
        type: "PANEL",
        icon: SettingsSVG,
        panel: SettingsSVG
    }
]
