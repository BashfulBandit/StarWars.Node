import { buildError } from '~/clients/utilities/build-error';
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListStarshipsRequest } from '~/clients/requests/starships/list.request';
import type { ListStarshipsResponse } from '~/clients/responses/starships/list.response';

const STARSHIPS_BASE_URL = 'https://swapi.dev/api/starships';

const list = async (request: ListStarshipsRequest): Promise<ListStarshipsResponse> => {
	const url = new URL(`${STARSHIPS_BASE_URL}/?page=${request.page}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	if (response.ok) return await response.json() as ListStarshipsResponse;
	throw await buildError(response);
};

/**
 * Describes a client to interact with the Starships resource.
 *
 * @public
 */
export type StarshipsClient = {

	/**
	 * Function to retrieve a paginated list Starships resources filtered by the provided input.
	 *
	 * @param request - ListStarshipsRequest
	 *
	 * @returns Promise<ListStarshipsResponse>
	 *
	 * @public
	 */
	list: (request: ListStarshipsRequest) => Promise<ListStarshipsResponse>;
};

export const starshipsClient = {
	list
};
