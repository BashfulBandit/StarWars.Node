/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
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

	return await response.json() as ListStarshipsResponse;
};

export const starshipsClient = {
	list
};
