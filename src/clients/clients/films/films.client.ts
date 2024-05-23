/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListFilmsRequest } from '~/clients/requests/films/list.request';
import type { ListFilmsResponse } from '~/clients/responses/films/list.response';
import type { RetrieveFilmRequest } from '~/clients/requests/films/retrieve.request';
import type { RetrieveFilmResponse } from '~/clients/responses/films/retrieve.response';

export type FilmsClient = {
	retrieve: (request: RetrieveFilmRequest) => Promise<RetrieveFilmResponse>;
	list: (request: ListFilmsRequest) => Promise<ListFilmsResponse>;
};

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

	return await response.json() as ListFilmsResponse;
};

export const filmsClient = {
	retrieve,
	list
};
