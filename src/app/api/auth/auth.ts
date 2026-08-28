import { clientApi } from '../client';

interface RegistrationData {
    email: string;
    password: string;
    birth_date: string;
}

interface AuthResponse {
    user: {
        id: string;
        nickname: string;
        email: string;
        role: string;
    };
    token: string;
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