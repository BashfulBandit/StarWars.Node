import type { PageRequest } from '~/requests/page.request';

/**
 * Describes a request to retrieve a paginated list of Species
 * for an Episode.
 */
export type ListEpisodeSpeciesRequest = PageRequest & {
	/**
	 * The identifier of the target Episode.
	 */
	episodeId: string;
};
