'use server'
import { serverApi } from "../api/server";
import { redirect } from "next/navigation";
import ProfileBoards from "./components/boards";

const ProfilePage = async () => {

    const user = await serverApi("/users/me");

    if(!user) {
        redirect('/')
    }

    return(
        // <Profile type="PROFILE"/>
        <div>
            <ProfileBoards />
        </div>
    )
}

export default ProfilePage