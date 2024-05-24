import type { PageResponse } from '~/clients/responses/page.response';
import type { Starship } from '~/clients/models/starship';

/**
 * Describes a successful response to retrieve a list of Starships.
 *
 * @public
 */
export type ListStarshipsResponse = PageResponse<Starship>;
