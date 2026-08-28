import { body } from 'framer-motion/client';
import { clientApi } from '../client';
import { User } from '@/shared/redux/slices/userSlice';

interface RegistrationData {
    email: string;
    password: string;
    birth_date: string;
}

interface AuthResponse {
    user: User,
    token: string;
}

interface AuthData {
    email: string;
    password: string
}


export const createSession = async (token: string): Promise<void> => {
    const response = await fetch('/api/auth/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    });

    if (!response.ok) {
        throw new Error('Failed to create session');
    }
};

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