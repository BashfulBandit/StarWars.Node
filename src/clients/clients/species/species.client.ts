/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListSpeciesRequest } from '~/clients/requests/species/list.request';
import type { ListSpeciesResponse } from '~/clients/responses/species/list.response';

export type SpeciesClient = {
	list: (request: ListSpeciesRequest) => Promise<ListSpeciesResponse>;
};

const SPECIES_BASE_URL = 'https://swapi.dev/api/species';

const list = async (request: ListSpeciesRequest): Promise<ListSpeciesResponse> => {
	const url = new URL(`${SPECIES_BASE_URL}/?page=${request.page}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	return await response.json() as ListSpeciesResponse;
};

export const speciesClient = {
	list
};
