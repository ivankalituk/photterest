import { FC } from "react";

const CreatePin: FC = () => {
    return(
        <div
            className="
                bg-[pink]
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

                <div>heading</div>

                <div
                    className="
                        overflow-y-auto
                        bg-[green]
                    "
                >
                    <div
                        className="h-[20000px]"
                    >
                        content
                    </div>
                </div>

            </div>

            <div
                className="
                    min-w-[400px]
                    overflow-y-auto
                "
            >
                    <div
                        className="h-[20000px]"
                    >
                        draft
                    </div>
            </div>
        </div>
    )
}

export default CreatePin