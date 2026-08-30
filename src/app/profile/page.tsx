'use server'
import { Profile } from "@/widgets/profile";
import { serverApi } from "../api/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {

    const user = await serverApi("/users/me");

    if(!user) {
        redirect('/')
    }

    return(
        <Profile type="PROFILE"/>
    )
}

export default ProfilePage