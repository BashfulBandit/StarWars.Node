import type { PageResponse } from '~/clients/responses/page.response';
import type { Planet } from '~/clients/models/planet';

/**
 * Describes a successful response to retrieve a list of Planet.
 *
 * @public
 */
export type ListPlanetsResponse = PageResponse<Planet>;
