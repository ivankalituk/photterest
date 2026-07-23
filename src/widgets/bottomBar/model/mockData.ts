import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import MessagesSVG from "@/shared/assets/controlledSVG/messagesSVG";
import ProfileSVG from "@/shared/assets/controlledSVG/profileSVG";
import SearchSVG from "@/shared/assets/controlledSVG/searchSVG";
import { FC } from "react";

export interface BottomBarItemType {
    name: string,
    id: string,
    svg: FC<{active?:boolean}>
    link: string
}

export const bottomBarData: BottomBarItemType[] = [
    {
        name: 'Home',
        id: 'HOME',
        svg: HomeSVG,
        link: '/'
    },
    {
        name: 'Search',
        id: 'SEARCH',
        svg: SearchSVG,
        link: '/search'
    },
    {
        name: 'Messages',
        id: 'MESSAGES',
        svg: MessagesSVG,
        link: '/messages'
    },
    {
        name: 'Profile',
        id: 'PROFILE',
        svg: ProfileSVG,
        link: '/profile'
    },
]