import type { EpisodeDto } from '~/models/episode';
import type { PageResponse } from '~/responses/page.response';

/**
 * Describes a response from a successful request to retrieve a paginated list of Episodes.
 */
export type ListEpisodesResponse = PageResponse & {
	/**
	 * The paginated list of Episodes retrieved.
	 */
	episodes: EpisodeDto[];
};
