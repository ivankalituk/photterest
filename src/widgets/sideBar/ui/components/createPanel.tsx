import { FC } from "react";
import PanelHeading from "./panelHeading";
import CreatePanelVariant from "./createPanelVariant";

const CreatePanel: FC = () => {
    return(
        <div>
            <PanelHeading heading='Создать' onCross = {() => console.log(0)}/>

            <div>
                <CreatePanelVariant />
                <CreatePanelVariant />
                <CreatePanelVariant />
            </div>
        </div>
    )
}

export default CreatePanel