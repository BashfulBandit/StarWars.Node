import { SWApiClientError } from '~/clients/errors/swapi.error';

/**
 * Describes an error that represents a HTTP 404 - Not Found error from
 * the SW API.
 *
 * @public
 */
export class SWApiNotFoundError extends SWApiClientError {}
