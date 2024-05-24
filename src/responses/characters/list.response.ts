import type { CharacterDto } from '~/models/character';
import type { PageResponse } from '~/responses/page.response';

/**
 * Describes a response from a successful request to retrieve a paginated list of Characters.
 */
export type ListCharactersResponse = PageResponse & {
	/**
	 * The paginated list of Characters retrieved.
	 */
	characters: CharacterDto[];
};
