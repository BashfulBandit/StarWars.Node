import { buildError } from '~/clients/utilities/build-error';
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListPlanetsRequest } from '~/clients/requests/planets/list.request';
import type { ListPlanetsResponse } from '~/clients/responses/planets/list.response';

const PLANETS_BASE_URL = 'https://swapi.dev/api/planets';

const list = async (request: ListPlanetsRequest): Promise<ListPlanetsResponse> => {
	const url = new URL(`${PLANETS_BASE_URL}/?page=${request.page}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	if (response.ok) return await response.json() as ListPlanetsResponse;
	throw await buildError(response);
};

/**
 * Describes a client to interact with the Planets resource.
 *
 * @public
 */
export type PlanetsClient = {
	/**
	 * Function to retrieve a paginated list Planets resources filtered by the provided input.
	 *
	 * @param request - ListFilmsRequest
	 *
	 * @returns Promise<ListPlanetsResponse>
	 *
	 * @public
	 */
	list: (request: ListPlanetsRequest) => Promise<ListPlanetsResponse>;
};

export const planetsClient = {
	list
};
