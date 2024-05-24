import { buildError } from '~/clients/utilities/build-error';
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListStarshipsRequest } from '~/clients/requests/starships/list.request';
import type { ListStarshipsResponse } from '~/clients/responses/starships/list.response';

export type StarshipsClient = {
	list: (request: ListStarshipsRequest) => Promise<ListStarshipsResponse>;
};

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

export const starshipsClient = {
	list
};
