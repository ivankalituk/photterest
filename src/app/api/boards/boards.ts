import { clientApi } from "../client"

// сделать типизацию, хотя она пока тут не нужнга

interface BoardInputData {
    name: string
    private: boolean
}

export const createBoard = async (data: BoardInputData) => {
    const response = await clientApi('/boards', {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error('Creation failed')
    }

    return response.json()
}