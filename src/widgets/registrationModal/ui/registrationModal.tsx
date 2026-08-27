import CrossSVG from "@/shared/assets/controlledSVG/crossSVG";
import LogoSVG from "@/shared/assets/controlledSVG/logoSVG";
import { Button } from "@/shared/ui/button";
import { FC } from "react";

interface Props {
    onClose: () => void
}

const RegistrationModal: FC <Props> = ({onClose}) => {

    return(
        <div
            className="
                relative
                w-full
                max-w-[450px]
                h-full
                max-h-[756px]
                p-[24px]
                rounded-[24px]
                bg-[white]
            "
        >
            <Button 
                as="DIV"
                square
                className="
                    w-[64px]
                    h-[64px]
                    bg-grey-main
                "
            >
                <LogoSVG width={36}/>
            </Button>


            <Button
                onClick={onClose}
                type="WHITE"
                className="
                    w-[48px]
                    h-[48px]
                    absolute
                    right-[24px]
                    top-[24px]
                "
            >
                <CrossSVG />
            </Button>
        </div>
    )
}

export default RegistrationModal