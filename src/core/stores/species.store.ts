/* eslint-disable @typescript-eslint/naming-convention */
import type { Species as ClientSpecies } from '~/clients/models/species';
import type { Species as CoreSpecies } from '~/core/models/species';
import type { ListSpeciesResponse } from '~/clients/responses/species/list.response';
import type { Page } from '~/core/models/page';
import { parseId } from '~/core/utilities/parse-id';
import type { SpeciesSearchFilter } from '~/core/models/filters/species.filter';
import { swApiClient } from '~/clients/swapi.client';

/**
 * Describes a store to manage the Species resources.
 */
export type SpeciesStore = {

	/**
	 * Function to get a page of Species from storage.
	 *
	 * @param filter - SpeciesSearchFilter
	 *
	 * @returns Promise\<Page<Species>\>
	 */
	list: (filter: SpeciesSearchFilter) => Promise<Page<CoreSpecies>>;
};

/**
 * Desribes a error thrown by the SpeciesStore on a failed operation.
 */
export class SpeciesStoreError extends Error {}

const mapClientToCore = (clientSpecies: ClientSpecies): CoreSpecies => ({
	averageHeight: clientSpecies.average_height,
	averageLifespan: clientSpecies.average_lifespan,
	classification: clientSpecies.classification,
	createdAt: clientSpecies.created,
	designation: clientSpecies.designation,
	eyeColors: clientSpecies.eye_colors.split(',').map((eyeColor: string): string => eyeColor.trim()),
	hairColors: clientSpecies.hair_colors.split(',').map((hairColor: string): string => hairColor.trim()),
	id: parseId(clientSpecies.url),
	language: clientSpecies.language,
	name: clientSpecies.name,
	skinColors: clientSpecies.skin_colors.split(',').map((skinColor: string): string => skinColor.trim()),
	updatedAt: clientSpecies.edited
});

const list = async (filter: SpeciesSearchFilter): Promise<Page<CoreSpecies>> => {
	try {
		const species: ClientSpecies[] = [];

		const {
			count,
			results
		} = await swApiClient.species.list({
			page: 1
		});

		const pagePromises = new Array(Math.ceil((count - results.length) / results.length))
			.fill(null)
			.map(async (_value, index: number) => swApiClient.species.list({
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				page: index + 2
			}));

		const pages = await Promise.all(pagePromises);
		species.push(
			...results,
			...pages.map((value: ListSpeciesResponse) => value.results).flat(1)
		);

		// Just disabling this because the call to `filter` is only in place for if/when
		// I want to add support for filtering by some property.
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		const filtered = [...species]
			.filter(
				(s: ClientSpecies): boolean => s.films.some(
					(url: string): boolean => parseId(url) === filter.episodeId
				)
			)
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
		throw new SpeciesStoreError(`Error fetching page of Species ${JSON.stringify(filter)}.`, { cause: err });
	}
};

export const speciesStore = {
	list
};
