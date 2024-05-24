import { buildError } from '~/clients/utilities/build-error';
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListPeopleRequest } from '~/clients/requests/people/list.request';
import type { ListPeopleResponse } from '~/clients/responses/people/list.response';
import type { RetrievePersonRequest } from '~/clients/requests/people/retrieve.request';
import type { RetrievePersonResponse } from '~/clients/responses/people/retrieve.response';

const PEOPLE_BASE_URL = 'https://swapi.dev/api/people';

const retrieve = async (request: RetrievePersonRequest): Promise<RetrievePersonResponse> => {
	const url = new URL(`${PEOPLE_BASE_URL}/${request.personId}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	return await response.json() as RetrievePersonResponse;
};

const list = async (request: ListPeopleRequest): Promise<ListPeopleResponse> => {
	const url = new URL(`${PEOPLE_BASE_URL}/?page=${request.page}`);

	const response = await fetch(url.href, {
		...DEFAULT_HEADERS,
		method: 'GET'
	});

	if (response.ok) return await response.json() as ListPeopleResponse;
	throw await buildError(response);
};

/**
 * Describes a client to interact with the Person resource.
 *
 * @public
 */
export type PeopleClient = {
	/**
	 * Function to retrieve a Person resource by it's identifier.
	 *
	 * @param request - RetrievePersonRequest
	 *
	 * @returns Promise<RetrievePersonResponse>
	 *
	 * @public
	 */
	retrieve: (request: RetrievePersonRequest) => Promise<RetrievePersonResponse>;

	/**
	 * Function to retrieve a paginated list Person resources filtered by the provided input.
	 *
	 * @param request - ListPeopleRequest
	 *
	 * @returns Promise<ListPeopleResponse>
	 *
	 * @public
	 */
	list: (request: ListPeopleRequest) => Promise<ListPeopleResponse>;
};

export const peopleClient = {
	retrieve,
	list
};
