import { cookies } from "next/headers";
import { apiFetch } from "./api";

export const serverApi = async (
  url: string,
  options: RequestInit = {},
) => {
  const cookieStore = await cookies();

  return apiFetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Cookie: cookieStore.toString(),
    },
  });
};