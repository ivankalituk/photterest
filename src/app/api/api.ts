const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = async (
  url: string,
  options: RequestInit = {},
) => {
  return fetch(`${BASE_URL}${url}`, {
    credentials: "include",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
};