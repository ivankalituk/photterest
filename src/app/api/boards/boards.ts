import { clientApi } from "../client"

interface BoardInputData {
    name: string
    private: boolean
}

export interface Board {
    id: string,
    name: string,
    user_id: string,
    private: boolean,
    deleted: boolean,
    created_at: string,
    updated_at: string
}

export const createBoard = async (data: BoardInputData): Promise<Board> => {
    const response = await clientApi('/boards', {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error('Creation failed')
    }

    return response.json()
}