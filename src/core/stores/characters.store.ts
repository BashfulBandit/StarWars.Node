import type { Character } from '~/core/models/character';
import type { CharactersSearchFilter } from '~/core/models/filters/characters.filter';
import type { ListPeopleResponse } from '~/clients/responses/people/list.response';
import type { Page } from '~/core/models/page';
import { parseId } from '~/core/utilities/parse-id';
import type { Person } from '~/clients/models/person';
import { swApiClient } from '~/clients/swapi.client';

/**
 * Describes a store to manage the Character resources.
 */
export type CharactersStore = {
	/**
	 * Function to fetch a Character from storage.
	 *
	 * @param characterId - string
	 *
	 * @returns Promise\<Character | null\>
	 */
	fetch: (characterId: string) => Promise<Character | null>;

	/**
	 * Function to get a page of Characters from storage.
	 *
	 * @param filter - CharactersSearchFilter
	 *
	 * @returns Promise\<Page<Character>\>
	 */
	list: (filter: CharactersSearchFilter) => Promise<Page<Character>>;
};

/**
 * Desribes a error thrown by the CharactersStore on a failed operation.
 */
export class CharactersStoreError extends Error {}

const mapClientToCore = (person: Person): Character => ({
	birthYear: person.birth_year,
	createdAt: person.created,
	eyeColor: person.eye_color,
	gender: person.gender,
	hairColor: person.hair_color,
	height: person.height,
	id: parseId(person.url),
	mass: person.mass,
	name: person.name,
	skinColor: person.skin_color,
	updatedAt: person.edited
});

const fetch = async (characterId: string): Promise<Character | null> => {
	try {
		const response = await swApiClient.people.retrieve({
			personId: characterId
		});

		return mapClientToCore(response);
	} catch (err) {
		throw new CharactersStoreError(`Error fetching Characters ${characterId}.`, { cause: err });
	}
};

const list = async (filter: CharactersSearchFilter): Promise<Page<Character>> => {
	try {
		const people: Person[] = [];

		const {
			count,
			results
		} = await swApiClient.people.list({
			page: 1
		});

		const pagePromises = new Array(Math.ceil((count - results.length) / results.length))
			.fill(null)
			.map(async (_value, index: number) => swApiClient.people.list({
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				page: index + 2
			}));

		const pages = await Promise.all(pagePromises);
		people.push(
			...results,
			...pages.map((value: ListPeopleResponse) => value.results).flat(1)
		);

		// Just disabling this because the call to `filter` is only in place for if/when
		// I want to add support for filtering by some property.
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		const filtered = [...people].filter((): boolean => true)
			.sort(() => 0)
			.slice((filter.page - 1) * filter.pageSize, filter.pageSize)
			.map(mapClientToCore);

		return {
			hasNext: Math.max(1, filter.page) < Math.ceil(filtered.length / filter.pageSize),
			hasPrevious: Math.max(1, filter.page) > 1,
			items: filtered,
			pageCount: Math.ceil(filtered.length / filter.pageSize),
			pageNumber: Math.max(1, filter.page),
			pageSize: Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, filter.pageSize)),
			totalCount: Math.max(0, filtered.length)
		};
	} catch (err) {
		throw new CharactersStoreError(`Error fetching page of Episodes ${JSON.stringify(filter)}.`, { cause: err });
	}
};

export const charactersStore = {
	fetch,
	list
};
