import LinkSVG from "@/shared/assets/controlledSVG/linkSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";
import { SettingsLinksType } from "../../model/mockData";

interface Props {
    item: SettingsLinksType
}

const SettingsPanelButton: FC <Props> = ({item}) => {
    return(
        <Button 
            as="LINK" 
            href={item.href}
            className="
                justify-between
                items-center
                px-[12px]
                py-[8px]
                font-[500]
            "
            hover="GREY"
        >
            <span>{item.name}</span>

            {item.icon && <LinkSVG />}
        </Button>
    )
}

export default SettingsPanelButton