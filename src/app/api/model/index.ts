export interface PaginatedRequest<T> {
    data: T[];
    totalPages: number;
    totalElements: number;
    pageNumber: number;
    pageElements: number;
    isLast: boolean;
    isFirst: boolean;
}