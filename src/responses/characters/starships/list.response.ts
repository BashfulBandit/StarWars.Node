import type { PageResponse } from '~/responses/page.response';
import type { StarshipDto } from '~/models/starship';

/**
 * Describes a response from a successful request to retrieve a paginated list of Starships
 * piloted by the Character.
 */
export type ListCharacterStarshipsResponse = PageResponse & {
	/**
	 * The paginated list of Starships retrieved.
	 */
	species: StarshipDto[];
};
