import { buildError } from '~/clients/utilities/build-error';
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

	if (response.ok) return await response.json() as ListPlanetsResponse;
	throw await buildError(response);
};

export const planetsClient = {
	list
};
