'use server'
import { PaginatedRequest } from "@/app/api/model";
import { serverApi } from "@/app/api/server";
import { Board, BoardType } from "@/entities/board";
import { FC } from "react";

const ProfileBoards: FC = async () => {

    const {data: boards} = await serverApi<PaginatedRequest<BoardType>>("/boards/mine");

    return(
        <div
            className="
                px-[16px]
                flex gap-[16px]
            "
        >
            {boards?.data && boards.data.map((board: BoardType) => (
                <Board key={board.id} data={board}/>
            ))}
        </div>
    )
}

export default ProfileBoards