'use server'

import AuthProviderServer from "@/providers/authProvider/authProvider.server";
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
                <AuthProviderServer>
                    {children}
                </AuthProviderServer>
            </StoreProvider>
        </GoogleOAuthProvider>
    )
}

export default Providers