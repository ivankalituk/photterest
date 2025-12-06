import { FC } from "react";

const SideBar: FC = () => {
    return(
        <div className="
            relative
            bg-blue-500
            h-[calc(100%+80px)]
            row-start-1 row-end-3
            col-start-1 col-end-2
        ">
            <div className="
                fixed
            ">
                <div>stat</div>
                <div>stat</div>
                <div>stat</div>
                <div>stat</div>


            </div>
        </div>
    )
}

export default SideBar