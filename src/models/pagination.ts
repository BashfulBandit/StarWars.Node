/**
 * Describes a pagination metadata.
 */
export type PaginationDto = {
	/**
	 * The number of the page.
	 */
	pageNumber: number;

	/**
	 * The size of the page.
	 */
	pageSize: number;

	/**
	 * Total number of pages possible.
	 */
	pageCount: number;

	/**
	 * Total number of entries in the collection.
	 */
	totalCount: number;

	/**
	 * Whether or not there is a page before this one.
	 */
	hasPrevious: boolean;

	/**
	 * Whether or not there is another page after this one.
	 */
	hasNext: boolean;
};
