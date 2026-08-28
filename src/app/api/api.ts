const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = async (
    url: string,
    options: RequestInit = {},
) => {
    return fetch(`${BASE_URL}${url}`, {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });
};