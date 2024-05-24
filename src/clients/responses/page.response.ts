/**
 * Describes a base pagination response.
 */
export type PageResponse<T> = {
	/**
	 * The total number of resources from the SW API.
	 */
	count: number;

	/**
	 * The hypermedia URL of the next page of the resources.
	 */
	next: string | null;

	/**
	 * The hypermedia URL of the previous page of the resources.
	 */
	previous: string | null;

	/**
	 * The page of resources.
	 */
	results: T[];
};
