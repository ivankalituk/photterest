'use client'

import { Button } from "@/shared/ui/button";
import { ModalWindow } from "@/widgets/modalWindow";
import { RegistrationModal } from "@/widgets/registrationModal";
import { useGoogleLogin } from "@react-oauth/google";
import { FC, useState } from "react";
import { clientApi } from "../api/client";
import { logoutUser } from "../api/auth/auth";
import { useAppDispatch } from "@/shared/redux/hooks";
import { clearUser } from "@/shared/redux/slices/userSlice";

const AuthPage: FC = () => {

    const dispatch = useAppDispatch()

    const handleLogout = async () => {

        try{
            const {message} = await logoutUser()
            console.log(message)
            dispatch(clearUser())  
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};

export default AuthPage;