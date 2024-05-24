import { buildError } from '~/clients/utilities/build-error';
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListFilmsRequest } from '~/clients/requests/films/list.request';
import type { ListFilmsResponse } from '~/clients/responses/films/list.response';
import type { RetrieveFilmRequest } from '~/clients/requests/films/retrieve.request';
import type { RetrieveFilmResponse } from '~/clients/responses/films/retrieve.response';

const FILMS_BASE_URL = 'https://swapi.dev/api/films';

const retrieve = async (request: RetrieveFilmRequest): Promise<RetrieveFilmResponse> => {
	const url = new URL(`${FILMS_BASE_URL}/${request.episodeId}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	return await response.json() as RetrieveFilmResponse;
};

const list = async (request: ListFilmsRequest): Promise<ListFilmsResponse> => {
	const url = new URL(`${FILMS_BASE_URL}/?page=${request.page}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	if (response.ok) return await response.json() as ListFilmsResponse;
	throw await buildError(response);
};

/**
 * Describes a client to interact with the Films resource.
 *
 * @public
 */
export type FilmsClient = {
	/**
	 * Function to retrieve a Film resource by it's identifier.
	 *
	 * @param request - RetrieveFilmRequest
	 *
	 * @returns Promise<RetrieveFilmResponse>
	 *
	 * @public
	 */
	retrieve: (request: RetrieveFilmRequest) => Promise<RetrieveFilmResponse>;

	/**
	 * Function to retrieve a paginated list Films resources filtered by the provided input.
	 *
	 * @param request - ListFilmsRequest
	 *
	 * @returns Promise<ListFilmsResponse>
	 *
	 * @public
	 */
	list: (request: ListFilmsRequest) => Promise<ListFilmsResponse>;
};

export const filmsClient = {
	retrieve,
	list
};
