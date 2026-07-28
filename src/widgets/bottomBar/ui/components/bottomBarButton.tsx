'use client';

import { FC } from "react";
import { usePathname } from "next/navigation";

import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import SearchSVG from "@/shared/assets/controlledSVG/searchSVG";
import MessagesSVG from "@/shared/assets/controlledSVG/messagesSVG";
import ProfileSVG from "@/shared/assets/controlledSVG/profileSVG";

import { Button } from "@/shared/ui/button";
import { BottomBarItemType } from "../../model/mockData";

interface Props {
    item: BottomBarItemType;
}

const BottomBarButton: FC<Props> = ({ item }) => {

    const location = usePathname();

    const active = location === item.link;

    const fill = active ? '#000000' : '#62625b';


    const renderIcon = () => {
        switch (item.id) {
            case 'HOME':
                return <HomeSVG active={active} fill={fill} />;

            case 'SEARCH':
                return <SearchSVG active={active} fill={fill} />;

            case 'MESSAGES':
                return <MessagesSVG active={active} fill={fill} />;

            case 'PROFILE':
                return <ProfileSVG active={active} fill={fill} />;

            default:
                return null;
        }
    };


    return (
        <Button
            as="LINK"
            href={item.link}
            className="flex-1"
            scaling
        >
            {renderIcon()}
        </Button>
    );
};

export default BottomBarButton;