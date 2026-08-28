import { apiFetch } from "./api";

export const clientApi = async (
    url: string,
    options: RequestInit = {},
) => {
    return apiFetch(url, {
        ...options,
        credentials: 'include',
    });
};