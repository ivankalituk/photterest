'use client'

import { GoogleLogin } from "@react-oauth/google";
import { FC } from "react";

const AuthPage: FC = () => {

    const handleGoogleLogin = async (credential: string) => {
        try {
            const response = await fetch(
                'http://localhost:5000/auth/google',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: credential,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <GoogleLogin
            onSuccess={(response) => {
                if (response.credential) {
                    handleGoogleLogin(response.credential);
                }
            }}
            onError={() => {
                console.log('Google auth failed');
            }}
        />
    );
}

export default AuthPage