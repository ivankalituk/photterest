import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { SidebarItem } from "../../model/mockdata";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
    item: SidebarItem
    onClick: (item: SidebarItem) => void
    active?: boolean
    className?: string
}

const SideBarButton: FC <Props> = ({item, onClick, active, className}) => {

    if(item.type === 'LINK' && item.href){
        return(
            <Link href={item.href} onClick={() => onClick(item)}>
                <Button
                    className={twMerge(`
                        h-[48px]
                        w-[48px]
                    `, className)}
                    hover="GREY"
                >
                    <item.icon active={active}/>
                </Button>
            </Link>
        )
    }

    if(item.type === 'PANEL'){
        return(
            <Button 
                onClick={() => onClick(item)}
                className={twMerge(`
                    h-[48px]
                    w-[48px]
                `, className)}
                hover="GREY"
            >
                <item.icon active={active}/>
            </Button>
        )
    }
}

export default SideBarButton