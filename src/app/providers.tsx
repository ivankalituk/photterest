'use client'

import { GoogleOAuthProvider } from "@react-oauth/google";
import { FC, ReactNode } from "react";

interface Props{
    children: ReactNode
}

const Providers: FC<Props> = ({children}) => {
    return(
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            {children}
        </GoogleOAuthProvider>
    )
}

export default Providers