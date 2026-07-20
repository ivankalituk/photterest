import BoardsSVG from "@/shared/assets/controlledSVG/boardsSVG";
import CreateSVG from "@/shared/assets/controlledSVG/createSVG";
import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import LogoSVG from "@/shared/assets/controlledSVG/logoSVG";
import MessagesSVG from "@/shared/assets/controlledSVG/messagesSVG";
import NotificationsSVG from "@/shared/assets/controlledSVG/notificationsSVG";
export const sidebarNavData = [
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
        type: 'PANEL',
        icon: BoardsSVG,
        panel: BoardsSVG
    },
    {
        name: 'Create pin',
        id: 'CREATE',
        type: 'PANEL',
        icon: CreateSVG,
        panel: CreateSVG,
    },
    {
        name: 'Notifications',
        id: 'NOTIFICATIONS',
        type: 'PANEL',
        icon: NotificationsSVG,
        panel: NotificationsSVG,
    },
    {
        name: 'Messages',
        id: 'MESSAGES',
        type: 'PANEL',
        icon: MessagesSVG,
        panel: MessagesSVG,
    }
]