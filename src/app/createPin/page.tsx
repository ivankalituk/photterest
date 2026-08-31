import { FC } from "react";

import PinCreationForm from "./components/pinCreationForm";
import PinCreationDrafts from "./components/pinCreationDrafts";

const CreatePin: FC = () => {
    return(
        <div
            className="
                flex
                h-[calc(100dvh-80px)]
                overflow-hidden
            "
        >
            <div 
                className="
                    flex-1
                    min-h-0
                    flex
                    flex-col
                "
            >

                <h3
                    className="
                        leading-[20px]
                        text-[20px]
                        font-[600]
                        py-[26px]
                        px-[16px]
                        border-t-[1px]
                        border-b-[1px]
                        border-border
                    "
                >
                    Создание пина
                </h3>

                <div
                    className="
                        overflow-y-auto
                        flex
                        justify-center
                    "
                >
                    <PinCreationForm />
                </div>

            </div>

            <PinCreationDrafts />
        </div>
    )
}

export default CreatePin