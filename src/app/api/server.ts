import "server-only";
import { cookies } from "next/headers";
import { apiFetch } from "./api";

export const serverApi = async <T>(
    url: string,
    options: RequestInit = {},
): Promise<{ ok: boolean; status: number; data: T | null }> => {
    const cookieStore = await cookies();

    const response = await apiFetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Cookie: cookieStore.toString(),
        },
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