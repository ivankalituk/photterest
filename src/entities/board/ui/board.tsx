import { FC } from "react";
import BoardImages from "./components/boardImages";

// ещё должны быть фото тех, кто участвовал в 
// доске помимо создателя, напротив названия

// функция для сокращения чисел

const Board: FC = () => {
    return(
        <div 
            className="
                flex flex-col
            "
        >
            <BoardImages />

            <div>Название доски</div>
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