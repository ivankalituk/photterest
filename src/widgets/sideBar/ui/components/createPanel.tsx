import { FC } from "react";
import PanelHeading from "./panelHeading";

const CreatePanel: FC = () => {
    return(
        <div>
            <PanelHeading heading='Создать' onCross = {() => console.log(0)}/>
        </div>
    )
}

export default CreatePanel