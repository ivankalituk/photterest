export interface BoardType {
    id: string,
    name: string,
    private: boolean,
    deleted: boolean,
    created_at: Date,
    updated_at: Date,
    creator_id: string,
    pins_updated_at: Date,
}