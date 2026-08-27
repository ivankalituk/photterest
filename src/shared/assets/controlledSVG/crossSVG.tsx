import { FC } from "react";

interface Props{
    width?: number
}

const CrossSVG: FC <Props> = ({width}) =>{
    return(
        <svg aria-hidden="true" aria-label="" height={width? width : 16} role="img" viewBox="0 0 24 24" width={width? width : 16}><path d="m12 13.41 8.3 8.3 1.4-1.42L13.42 12l8.3-8.3-1.42-1.4-8.3 8.28-8.3-8.3L2.3 3.7l8.28 8.3-8.3 8.3 1.42 1.4z"></path></svg>
    )
}

export default CrossSVG