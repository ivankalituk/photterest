import { FC } from "react";
import BoardImages from "./components/boardImages";
import { BoardType } from "../model/types";

// ещё должны быть фото тех, кто участвовал в 
// доске помимо создателя, напротив названия

// функция для сокращения чисел
interface Props{
    data: BoardType
}

const Board: FC <Props> = ({data}) => {
    return(
        <div 
            className="
                flex flex-col
            "
        >
            <BoardImages />

            <div>{data.name}</div>
            <div
                className="flex gap-[7px]"
            >
                <span>19 пинов</span>
                <span>7 разделов</span>
                <span>6 дн.</span>
            </div>
        </div>
    )
}

export default Board