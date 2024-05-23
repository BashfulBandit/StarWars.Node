export type Page<T> = {
	pageNumber: number;
	pageSize: number;
	pageCount: number;
	totalCount: number;
	hasPrevious: boolean;
	hasNext: boolean;
	items: T[];
};
