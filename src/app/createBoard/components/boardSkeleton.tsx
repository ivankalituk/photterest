import { FC } from "react";

const BoardSkeleton: FC = () => {
    return(
        <div
            className="
                py-8px
                flex
                justify-center
                gap-[1px]
            "
        >
            <div 
                className="
                    bg-grey
                    h-[141px]
                    w-[140px]
                    rounded-l-[16px]
                "
            />

            <div
                className="
                    flex flex-col
                    gap-[1px]
                    rounded-r-[16px]
                    overflow-hidden
                "
            >
                <div 
                    className="
                        bg-grey
                        h-[70px]
                        w-[70px]
                    "
                />
                <div 
                    className="
                        bg-grey
                        h-[70px]
                        w-[70px]
                    "
                />
            </div>
        </div>
    )
}

export default BoardSkeleton