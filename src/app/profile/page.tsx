'use server'
import { Profile } from "@/widgets/profile";
import { serverApi } from "../api/server";
import { redirect } from "next/navigation";
import Board from "@/entities/board";

const ProfilePage = async () => {

    const user = await serverApi("/users/me");

    if(!user) {
        redirect('/')
    }

    return(
        // <Profile type="PROFILE"/>
        <div className="px-[16px]" >
            <Board />
        </div>
    )
}

export default ProfilePage