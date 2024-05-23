export type PaginationDto = {
	pageNumber: number;
	pageSize: number;
	pageCount: number;
	totalCount: number;
	hasPrevious: boolean;
	hasNext: boolean;
};
