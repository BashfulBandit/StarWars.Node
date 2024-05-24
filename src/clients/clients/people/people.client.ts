/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { DEFAULT_HEADERS } from '~/clients/swapi.client';
import type { ListPeopleRequest } from '~/clients/requests/people/list.request';
import type { ListPeopleResponse } from '~/clients/responses/people/list.response';
import type { RetrievePersonRequest } from '~/clients/requests/people/retrieve.request';
import type { RetrievePersonResponse } from '~/clients/responses/people/retrieve.response';

export type PeopleClient = {
	retrieve: (request: RetrievePersonRequest) => Promise<RetrievePersonResponse>;
	list: (request: ListPeopleRequest) => Promise<ListPeopleResponse>;
};

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

	return await response.json() as ListPeopleResponse;
};

export const peopleClient = {
	retrieve,
	list
};
