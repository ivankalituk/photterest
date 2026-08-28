import { api } from "../api";

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

export const registerUser = async (
    data: RegistrationData,
): Promise<AuthResponse> => {
    const response = await api('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return response.json();
};