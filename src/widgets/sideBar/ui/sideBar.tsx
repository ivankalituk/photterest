import { FC } from "react";
import CompasSVG from "@/shared/assets/controlledSVG/compasSVG";
import HomeSVG from "@/shared/assets/controlledSVG/homeSVG";
import BoardsSVG from "@/shared/assets/controlledSVG/boardsSVG";
import CreateSVG from "@/shared/assets/controlledSVG/createSVG";
import BellSVG from "@/shared/assets/controlledSVG/bellSVG";
import SettingsSVG from "@/shared/assets/controlledSVG/settingsSVG";

const SideBar: FC = () => {
    return(
        <div className="
            fixed
            h-[100dvh]
            w-[80px]
            py-[12px]
            row-start-1 row-end-3
            col-start-1 col-end-1
            row-end-2
            border-r-[1px]
            border-grey-light
            bg-[white]
        ">
            <CompasSVG />
            <HomeSVG />
            <BoardsSVG />
            <CreateSVG />
            <BellSVG />
            <SettingsSVG />
        </div>
    )
}

export default SideBar