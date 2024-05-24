/**
 * Describes a pagination request.
 */
export type PageRequest = {
	/**
	 * The page to retrieve.
	 */
	page: number;

	/**
	 * The size of the page to retrieve.
	 */
	pageSize: number;
};
