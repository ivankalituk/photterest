import { cookies } from 'next/headers';

import { apiFetch } from './api';

export const serverApi = async (
    url: string,
    options: RequestInit = {},
) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    return apiFetch(url, {
        ...options,
        headers: {
            ...options.headers,
            ...(token
                ? {
                      Authorization: `Bearer ${token}`,
                  }
                : {}),
        },
    });
};