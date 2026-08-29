import { clientApi } from '../client';
import { User } from '@/shared/redux/slices/userSlice';

interface RegistrationData {
    email: string;
    password: string;
    birth_date: string;
}

interface AuthResponse {
    user: User
}

interface AuthData {
    email: string;
    password: string
}

interface LogoutResponse {
    message: string
}

export const registerUser = async (
    data: RegistrationData,
): Promise<AuthResponse> => {
    const response = await clientApi('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return response.json();
};

export const authUser = async (
    data: AuthData
): Promise<AuthResponse> => {
    const response = await clientApi('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error('Auth failed')
    }

    return response.json()
}

export const authGoogleUser = async (
    credential: string
): Promise<AuthResponse> => {
    const response = await clientApi('/auth/google', {
        method: "POST",
        body: JSON.stringify({
            token: credential,
        }),
    })

    if (!response.ok) {
        throw new Error('Auth failed')
    }

    return response.json()
}

export const logoutUser = async (): Promise<LogoutResponse> => {
    const response = await clientApi('/auth/logout', {
        method: 'POST'
    })

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return response.json();
}