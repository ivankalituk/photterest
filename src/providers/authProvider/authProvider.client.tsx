'use client'
import { useAppDispatch } from "@/shared/redux/hooks";
import { clearUser, setUser, User } from "@/shared/redux/slices/userSlice";
import { FC, ReactNode, useEffect } from "react";

interface Props {
    children: ReactNode
    user: User | null
}

const AuthProviderClient: FC <Props> = ({children, user}) =>{
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(user){
            dispatch(setUser(user))
        } else {
            dispatch(clearUser())
        }
    }, [user, dispatch])    

    return children
}

export default AuthProviderClient