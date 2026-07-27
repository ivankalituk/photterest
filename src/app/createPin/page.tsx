import { FC } from "react";
import PinImageUpload from "./components/pinImageUpload";
import PinInputBlock from "./components/pinInputBlock";

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
                    <form
                        className="
                            flex
                            max-w-[1000px]
                            gap-[40px]
                            w-[100%]
                            py-[20px]
                        "
                    >
                        <div>
                            <PinImageUpload />
                        </div>

                        <div 
                            className="
                                flex-1
                                flex flex-col
                                gap-[20px]
                            "
                        >
                            <PinInputBlock name="Название">
                                <span>Обычный инпут</span>
                            </PinInputBlock>

                            <PinInputBlock name="Описание">
                                <span>Текст ареа</span>
                            </PinInputBlock>

                            <PinInputBlock name="Ссылка">
                                <span>Инпут линк</span>
                            </PinInputBlock>

                            <PinInputBlock name="Доска">
                                <span>Выбор доски, пока не знаю</span>
                            </PinInputBlock>

                            <PinInputBlock name="Теги">
                                <span>Поиск тегов, как я делал на прошлом сайте</span>
                            </PinInputBlock>
                        </div>
                    </form>
                </div>

            </div>

            <div
                className="
                    min-w-[400px]
                    overflow-y-auto
                    border-l-[1px]
                    border-t-[1px]
                    border-border
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