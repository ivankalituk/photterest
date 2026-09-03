import { redirect } from "next/navigation";
import { serverApi } from "../api/server";
import CreateBoardForm from "./components/createBoardForm";

export default async function CreatePinPage() {
    const user = await serverApi("/users/me");

    if (!user) {
        redirect("/")
    }

    return (
        <div
            className="
                h-[calc(100dvh-80px)]
                flex
                p-[16px]
                items-center
                justify-around
            "
        >
            <CreateBoardForm />
        </div>
    );
}