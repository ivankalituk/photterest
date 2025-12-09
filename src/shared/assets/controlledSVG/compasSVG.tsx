import { FC } from "react";

interface Props {
    active?: boolean
}

const CompasSVG: FC <Props> = ({active}) => {

    if(active){
        return(
            <svg aria-hidden="true" aria-label="" height="30" role="img" viewBox="0 0 24 24" width="30">
                <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 14a12 12 0 1 0 0-24 12 12 0 0 0 0 24M8.8 7.24l8-1.6a1.32 
                    1.32 0 0 1 1.56 1.55l-1.6 8a2 2 0 0 1-1.57 1.57l-8 1.6a1.32 1.32 0 0 1-1.55-1.55l1.6-8A2 2 0 0 1 8.8 
                    7.24">
                </path>
            </svg>
        )
    } else {
        return(
            <svg aria-hidden="true" aria-label="" height="30" role="img" viewBox="0 0 24 24" width="30">
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.42 7.24a3 3 0 0 0-2.18 2.18L5.7 15.57a2.25 2.25 0 0 0
                    2.73 2.73l6.15-1.54a3 3 0 0 0 2.18-2.18l1.54-6.15a2.25 2.25 0 0 0-2.73-2.73zm6.94.7-1.54 6.15a1 
                    1 0 0 1-.73.73l-6.15 1.54a.25.25 0 0 1-.3-.3L9.18 9.9a1 1 0 0 1 .73-.73l6.15-1.54a.25.25 0 0 1 
                    .3.3M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0">
                </path>
            </svg>
        )
    }
}

export default CompasSVG