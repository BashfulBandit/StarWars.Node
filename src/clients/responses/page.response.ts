export type PageResponse<T> = {
	count: number;
	next: string;
	previous: string;
	results: T[];
};
