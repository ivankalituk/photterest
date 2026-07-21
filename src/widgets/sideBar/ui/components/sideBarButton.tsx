import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { SidebarItem } from "../../model/mockdata";
import { twMerge } from "tailwind-merge";

interface Props {
    item: SidebarItem
    onClick: (item: SidebarItem) => void
    active?: boolean
    className?: string
}

const SideBarButton: FC <Props> = ({item, onClick, active, className}) => {

    const isLink = item.type === "LINK"

    return (
        <Button
            onClick={() => onClick(item)}
            as={isLink ? "LINK" : "BUTTON"}
            href={isLink ? item.href : undefined}
            className={twMerge(`
                h-[48px]
                w-[48px]
            `, className)}
            hover="GREY"
        >
            <item.icon active={active} />
        </Button>
    );
}

export default SideBarButton