import BellSVG from "@/shared/assets/controlledSVG/bellSVG";
import BoardsSVG from "@/shared/assets/controlledSVG/boardsSVG";
import CompasSVG from "@/shared/assets/controlledSVG/compasSVG";
import CreateSVG from "@/shared/assets/controlledSVG/createSVG";
import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";

export const mockButtons = [
    {
        name: 'home',
        component: <HomeSVG />,
        type: 'link',
        link: '/'
    },
    {
        name: 'ideas',
        component: <CompasSVG />,
        type: 'hover link',
        link: '/ideas'
    },
    {
        name: 'boards',
        component: <BoardsSVG />,
        type: 'link',
        link: '/profile'
    },
    {
        name: 'create',
        component: <CreateSVG />,
        type: 'active'
    },
    {
        name: 'notifications',
        component: <BellSVG />,
        type: 'active'
    }
]