import { useAppDispatch } from "../redux/hooks";
import { clearUser } from "../redux/slices/userSlice";
import { getToken } from "./auth"

const BASE_URL = process.env.PUBLIC_API_URL

const dispatch = useAppDispatch();

export const api = async(
    url: string,
    options: RequestInit = {}
) => {
    const token = getToken()

    const response = await fetch(`${BASE_URL}${url}`, {
        ...options,

        headers: {
            "Content-Type": "application/json",

            ...(token && {
                Authorization: `Bearer ${token}`,
            }),

            ...options.headers,
        },
    });

    if(response.status === 401){
        localStorage.removeItem('userToken')
        dispatch(clearUser());
    }
}