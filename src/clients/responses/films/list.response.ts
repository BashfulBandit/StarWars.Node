import type { Film } from '~/clients/models/film';
import type { PageResponse } from '~/clients/responses/page.response';

/**
 * Describes a successful response to retrieve a list of Films.
 *
 * @public
 */
export type ListFilmsResponse = PageResponse<Film>;
