import type { EpisodeDto } from '~/models/episode';

/**
 * Describes a response from a successful request to retrieve an Episode by it's identifier.
 */
export type RetrieveEpisodeResponse = {
	/**
	 * The retrieved Star Wars episode identified by the provided identifier.
	 *
	 * This should never be null, but TS wants me to define it as such.
	 */
	episode: EpisodeDto | null;
};
