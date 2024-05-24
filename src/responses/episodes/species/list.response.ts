import type { PageResponse } from '~/responses/page.response';
import type { SpeciesDto } from '~/models/species';

/**
 * Describes a response from a successful request to retrieve a
 * paginated list of Species for a specific Episode.
 */
export type ListEpisodeSpeciesResponse = PageResponse & {
	/**
	 * The paginated list of Species retrieved.
	 */
	species: SpeciesDto[];
};
