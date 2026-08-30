import { FC } from "react";

interface Props {
    type: 'USER' | 'PROFILE'
}

const Profile: FC <Props> = ({type}) => {
    return(
        <div>page type {type}</div>
    )
}

export default Profile