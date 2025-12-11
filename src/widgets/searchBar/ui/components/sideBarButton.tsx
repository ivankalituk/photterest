import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { FC, ReactElement, cloneElement } from "react";

interface Props {
    element: ReactElement<{active?: boolean}>
    type: string
    link?: string
    active?: boolean
    name: string
    onClick: (section: string) => void
}

const SideBarButton: FC <Props> = ({element, type, link, active, onClick, name}) => {

    const icon = cloneElement(element, {active})

    const buttonElement =
        <Button
            onClick={() => onClick(name)}
            type='WHITE' 
            className="
                flex
                items-center
                justify-around
                p-[5px]
                rounded-[7px]
                w-[55px]
                aspect-[1/1]
                no-select no-drag
            "
        >
            {icon}
        </Button>


    if(link && type.includes('link')){
        return <Link href={link}>{buttonElement}</Link>
    }
    return(buttonElement)
}

export default SideBarButton