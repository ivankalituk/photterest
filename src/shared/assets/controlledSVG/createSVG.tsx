import { FC } from "react";

interface Props {
    active?: boolean
}

const CreateSVG: FC <Props> = ({active}) => {

    if(active){
        return(
            <svg aria-hidden="true" aria-label="" height="30" role="img" viewBox="0 0 24 24" width="30">
                <path d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm10 6H6v2h5v5h2v-5h5v-2h-5V6h-2z">
                </path>
            </svg>
        )
    } else {
        return(
            <svg aria-hidden="true" aria-label="" height="30" role="img" viewBox="0 0 24 24" width="30">
                <path d="M11 11H6v2h5v5h2v-5h5v-2h-5V6h-2zM5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm16 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2">
                </path>
            </svg>
        )
    }
}

export default CreateSVG