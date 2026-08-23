import { Button } from "@/shared/ui/button";
import { FC } from "react";

const AuthPage: FC = () => {
    return(
        <Button
            type="WHITE"
            className="
                bg-[green]
                p-[8px]
                text-[white]
            "
        >
            Google auth
        </Button>
    )
}

export default AuthPage