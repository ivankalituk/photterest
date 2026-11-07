'use server'
import { serverApi } from "@/app/api/server";
import { Board, BoardType } from "@/entities/board";
import { FC } from "react";

const ProfileBoards: FC = async () => {
    const boardsRes = await serverApi("/boards/mine");
    
    const boards: BoardType[] = boardsRes.ok? await boardsRes.json() : undefined;

    return(
        <div 
            className="
                px-[16px]
                flex gap-[16px]
            "
        >
            {boards && boards.map((board: BoardType) => (
                 <Board key={board.id} data={board}/>
            ))}
        </div>
    )
}

export default ProfileBoards