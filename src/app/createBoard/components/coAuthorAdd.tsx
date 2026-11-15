'use client'
import { SearchBar } from "@/features/searchBar";
import { FC, useEffect, useState } from "react";
import CoAuthorAccount from "./coAuthorAccount";
import { clientApi } from "@/app/api/client";
import { PaginatedRequest } from "@/app/api/model";
import { User } from "@/shared/redux/slices/userSlice";
import { CoAuthorType } from "./createBoardForm";

interface Props {
    handleCoAuthor: (data: CoAuthorType) => void
    coAuthors: CoAuthorType[]
}

const CoAuthorAdd: FC<Props> = ({handleCoAuthor, coAuthors}) => {

    const [users, setUsers] = useState<PaginatedRequest<User> | null>(null);

    useEffect
    (() => {
        const fetchUsers = async () => {
            const response = await clientApi<PaginatedRequest<User>>('/users');

            if (response.ok && response.data) {
                setUsers(response.data);
            }
        };

        fetchUsers();
    }, []);

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
                {users?.data.map((data: User) => (
                    <CoAuthorAccount 
                        key={data.id} 
                        nickname={data.nickname} 
                        avatar_url={data.avatar_url}
                        id={data.id}
                        handleCoAuthor = {handleCoAuthor}
                        selected = {coAuthors.some(item => item.id === data.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CoAuthorAdd