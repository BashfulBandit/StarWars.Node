import type { PageResponse } from '~/clients/responses/page.response';
import type { Species } from '~/clients/models/species';

/**
 * Describes a successful response to retrieve a list of Species.
 *
 * @public
 */
export type ListSpeciesResponse = PageResponse<Species>;
