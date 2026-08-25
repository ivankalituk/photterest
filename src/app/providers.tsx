'use client'

import StoreProvider from "@/shared/redux/storeProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { FC, ReactNode } from "react";

interface Props{
    children: ReactNode
}

const Providers: FC<Props> = ({children}) => {
    return(
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <StoreProvider>
                {children}
            </StoreProvider>
        </GoogleOAuthProvider>
    )
}

export default Providers