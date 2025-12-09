import { FC } from "react";

interface Props {
    active?: boolean
}

const HomeSVG: FC <Props> = ({active}) => {

    if(active){
        return(
            <svg aria-hidden="true" aria-label="" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M9.59.92a3.63 3.63 0 0 1 4.82 0l7.25 6.44A4 4 0 0 1 23 10.35v8.46a3.9 3.9 0 0 1-3.6 3.92 
                    106 106 0 0 1-14.8 0A3.9 3.9 0 0 1 1 18.8v-8.46a4 4 0 0 1 1.34-3zM12 16a5 5 0 0 1-3.05-1.04l-1.23 
                    1.58a7 7 0 0 0 8.56 0l-1.23-1.58A5 5 0 0 1 12 16">
                </path>
            </svg>
        )
    } else {
        return(
            <svg aria-hidden="true" aria-label=""  height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M4.6 22.73A107 107 0 0 0 11 23h2.22c2.43-.04 4.6-.16 6.18-.27A3.9 3.9 0 0 0 23 18.8v-8.46a4 4 0 
                    0 0-1.34-3L14.4.93a3.63 3.63 0 0 0-4.82 0L2.34 7.36A4 4 0 0 0 1 10.35v8.46a3.9 3.9 0 0 0 3.6 3.92M13.08 
                    2.4l7.25 6.44a2 2 0 0 1 .67 1.5v8.46a1.9 1.9 0 0 1-1.74 1.92q-1.39.11-3.26.19V16a4 4 0 0 0-8 0v4.92q-1.87-.08-3.26-.19A1.9 
                    1.9 0 0 1 3 18.81v-8.46a2 2 0 0 1 .67-1.5l7.25-6.44a1.63 1.63 0 0 1 2.16 0M13.12 21h-2.24a1 1 0 0 1-.88-1v-4a2 2 0 1 1 4 
                    0v4a1 1 0 0 1-.88 1">
                </path>
            </svg>

        )
    }
}

export default HomeSVG