import { FC } from "react";
import { PanelHeading } from "@/shared/ui/PanelHeading";
import CreatePanelVariant from "./components/createPanelVariant";
import { createContentVariants, CreatePanelTypes } from "../model/mockData";
import { SidebarItem } from "@/widgets/sideBar/model/mockdata";

interface Props {
    onClose: (item: SidebarItem) => void
    item: SidebarItem
}

const CreatePanel: FC <Props> = ({onClose, item}) => {

    return(
        <div>
            <PanelHeading heading='Создать' onCross = {() => onClose(item)}/>

            <div>
                {createContentVariants.map((variant: CreatePanelTypes) => (
                    <CreatePanelVariant key={variant.id} variant={variant} onClose={() => onClose(item)}/>
                ))}
            </div>
        </div>
    )
}

export default CreatePanel