import { apiFetch } from "./api";

export const clientApi = async <T>(
    url: string,
    options: RequestInit = {},
): Promise<{ ok: boolean; status: number; data: T | null }> => {

    const response = await apiFetch(url, {
        ...options,
        credentials: 'include',
    });

    const data = response.ok
        ? await response.json() as T
        : null;

    return {
        ok: response.ok,
        status: response.status,
        data,
    };
};