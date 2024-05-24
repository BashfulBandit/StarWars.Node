import type { CharacterDto } from '~/models/character';

/**
 * Describes a response from a successful request to retrieve a Character by it's identifier.
 */
export type RetrieveCharacterResponse = {
	/**
	 * The retrieved Star Wars character identified by the provided identifier.
	 *
	 * This should never be null, but TS wants me to define it as such.
	 */
	character: CharacterDto | null;
};
