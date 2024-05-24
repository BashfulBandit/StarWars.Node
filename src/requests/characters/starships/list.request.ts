import type { PageRequest } from '~/requests/page.request';

/**
 * Describes a request to retrieve a paginated list of Starships piloted
 * by a Character.
 */
export type ListCharacterStarshipsRequest = PageRequest & {
	/**
	 * The identifier of the target Character.
	 */
	characterId: string;
};
