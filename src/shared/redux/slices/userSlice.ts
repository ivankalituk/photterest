import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    id: string,
    nickname: string,
    email: string,
    google_id: string | null,
    avatar_url: string | null,
}

interface UserState {
    currentUser: User | null
}

const initialState: UserState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>){
            state.currentUser = action.payload
        },
        clearUser(state){
            state.currentUser = null
        }
    }
})

export const {
    setUser,
    clearUser
} = userSlice.actions

export default userSlice.reducer