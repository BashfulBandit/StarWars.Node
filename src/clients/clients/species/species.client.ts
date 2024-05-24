import { buildError } from '~/clients/utilities/build-error';
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

	if (response.ok) return await response.json() as ListSpeciesResponse;
	throw await buildError(response);
};

export const speciesClient = {
	list
};
