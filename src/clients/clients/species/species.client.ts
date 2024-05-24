import { buildError } from '~/clients/utilities/build-error';
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListSpeciesRequest } from '~/clients/requests/species/list.request';
import type { ListSpeciesResponse } from '~/clients/responses/species/list.response';

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

/**
 * Describes a client to interact with the Species resource.
 *
 * @public
 */
export type SpeciesClient = {

	/**
	 * Function to retrieve a paginated list Species resources filtered by the provided input.
	 *
	 * @param request - ListSpeciesRequest
	 *
	 * @returns Promise<ListSpeciesResponse>
	 *
	 * @public
	 */
	list: (request: ListSpeciesRequest) => Promise<ListSpeciesResponse>;
};

export const speciesClient = {
	list
};
