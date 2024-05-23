/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListFilmsRequest } from '~/clients/requests/films/list.request';
import type { ListPlanetsResponse } from '~/clients/responses/planets/list.response';

export type PlanetsClient = {
	list: (request: ListFilmsRequest) => Promise<ListPlanetsResponse>;
};

const PLANETS_BASE_URL = 'https://swapi.dev/api/planets';

const list = async (request: ListFilmsRequest): Promise<ListPlanetsResponse> => {
	const url = new URL(`${PLANETS_BASE_URL}/?page=${request.page}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	return await response.json() as ListPlanetsResponse;
};

export const planetsClient = {
	list
};
