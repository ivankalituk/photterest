import { FC } from "react";

interface Props {
    active?: boolean
}

const BoardsSVG: FC <Props> = ({active}) => {

    if(active){
        return(
            <svg aria-hidden="true" aria-label="" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M11 23H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h6zm12-4a4 4 0 0 1-4 4h-6V13h10zM19 1a4 4 0 0 1 4 4v6H13V1z">
                </path>
            </svg>
        )
    } else {
        return(
            <svg aria-hidden="true" aria-label=""  height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M23 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4zm-10 6V3h6a2 2 0 0 1 2 2v6zm8 8a2 2 0 0 1-2 2h-6v-8h8zM5 3h6v18H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2">
                </path>
            </svg>
        )
    }
}

export default BoardsSVG