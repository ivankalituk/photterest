import { SearchBar } from "@/features/searchBar";
import { FC } from "react";
import CoAuthorAccount from "./coAuthorAccount";

const CoAuthorAdd: FC = () => {
    return(
        <div
            className="
                px-[24px]
                pb-[12px]
            "
            
        >
            <div>
                <div
                    className="
                        text-[14px]
                        my-[4px]
                    "
                >
                    Разрешения соавторов
                </div>
                <div
                    className="
                        mt-[6px]
                        mb-[2px]
                        text-[20px]
                        font-[600]
                    "
                >
                    Доступ практически ко всем функциям
                </div>
                <div
                    className="
                        my-[2px]
                        text-[14px]
                    "
                >
                    Добавляйте, перемещайте или удаляйте пины и разделы досок, оставляйте комментарии и реакции
                </div>
            </div>

            <div
                className="mt-[12px]"
            >
                <div
                    className="
                        text-[14px]
                    "
                >
                    Пригласите кого-нибудь в Photterest
                </div>
                <SearchBar 
                    className="
                        mt-[8px]
                    "
                />
            </div>

            <div 
                className="
                    flex flex-col
                    gap-[8px]
                    mt-[12px]
                    max-h-[300px]
                    overflow-y-auto
                    scrollBar
                "
            >
                {Array.from({length: 10}).map(() => (
                    <CoAuthorAccount />
                ))}
            </div>
        </div>
    )
}

export default CoAuthorAdd