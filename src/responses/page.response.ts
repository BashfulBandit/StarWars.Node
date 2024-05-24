import type { PaginationDto } from '~/models/pagination';

/**
 * Describes a base for a successful response to retrieve a paginated
 * list of a resource.
 */
export type PageResponse = {
	/**
	 * The pagination meta data.
	 */
	pagination: PaginationDto;
};
