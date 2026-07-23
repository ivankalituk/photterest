import { PanelHeading } from "@/shared/ui/PanelHeading";
import { SidebarItem } from "@/widgets/sideBar/model/mockdata";
import { FC } from "react";
import SettingsPanelButton from "./components/settingsPanelButton";
import { settingsLinksData, SettingsLinksType } from "../model/mockData";

interface Props {
    onClose: (item: SidebarItem) => void
    item: SidebarItem
}

const SettingsPanel: FC <Props> = ({onClose, item}) => {
    return(
        <div>
            <PanelHeading heading='Создать' onCross = {() => onClose(item)}/>

                <div
                    className="
                        mt-[44px]
                    "
                >
                    {settingsLinksData.map((item: SettingsLinksType) => (
                        <SettingsPanelButton item = {item} key={item.id}/>
                    ))}
                </div>
        </div>
        
    )
}

export default SettingsPanel