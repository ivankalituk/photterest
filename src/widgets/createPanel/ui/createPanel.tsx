import { FC } from "react";
import { PanelHeading } from "@/shared/ui/PanelHeading";
import CreatePanelVariant from "./components/createPanelVariant";
import { createContentVariants, CreatePanelTypes } from "../model/mockData";

const CreatePanel: FC = () => {
    return(
        <div>
            <PanelHeading heading='Создать' onCross = {() => console.log(0)}/>

            <div>
                {createContentVariants.map((variant: CreatePanelTypes) => (
                    <CreatePanelVariant key={variant.id} variant={variant}/>
                ))}
            </div>
        </div>
    )
}

export default CreatePanel