'use client'
import { FC } from "react";
import HeaderAccount from "./headerAccount";
import { Button } from "@/shared/ui/button";

const HeaderAuth: FC = () => {
    return(
        <div>
            {/* <Button type="RED">
                Sign In
            </Button>

            <Button>
                Join Up
            </Button> */}

            <HeaderAccount />
        </div>
    )
}

export default HeaderAuth