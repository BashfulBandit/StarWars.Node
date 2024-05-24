/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Starship as ClientStarship } from '~/clients/models/starship';
import type { Starship as CoreStarship } from '~/core/models/starship';
import type { ListStarshipsResponse } from '~/clients/responses/starships/list.response';
import type { Page } from '~/core/models/page';
import { parseId } from '~/core/utilities/parse-id';
import type { Starship } from '~/core/models/starship';
import type { StarshipsSearchFilter } from '~/core/models/filters/starships.filter';
import { swApiClient } from '~/clients/swapi.client';

export type StarshipsStore = {
	list: (filter: StarshipsSearchFilter) => Promise<Page<Starship>>;
};

export class StarshipsStoreError extends Error {}

const mapClientToCore = (clientStarship: ClientStarship): CoreStarship => ({
	MGLT: clientStarship.MGLT,
	cargoCapacity: clientStarship.cargo_capacity,
	consumables: clientStarship.consumables,
	costInCredits: clientStarship.cost_in_credits,
	createdAt: clientStarship.created,
	crew: clientStarship.crew,
	hyperdriveRating: clientStarship.hyperdrive_rating,
	id: parseId(clientStarship.url),
	length: clientStarship.length,
	manufacturers: clientStarship.manufacturer.split(',').map((manufacturer: string): string => manufacturer.trim()),
	maxAtomispheringSpeed: clientStarship.max_atomosphering_speed,
	name: clientStarship.name,
	passengers: clientStarship.passengers,
	starshipClass: clientStarship.startship_class,
	updatedAt: clientStarship.edited
});

const list = async (filter: StarshipsSearchFilter): Promise<Page<Starship>> => {
	try {
		const starships: ClientStarship[] = [];

		const {
			count,
			results
		} = await swApiClient.starships.list({
			page: 1
		});

		const pagePromises = new Array(Math.ceil((count - results.length) / results.length))
			.fill(null)
			.map(async (_value, index: number) => swApiClient.starships.list({
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				page: index + 2
			}));

		const pages = await Promise.all(pagePromises);
		starships.push(
			...results,
			...pages.map((value: ListStarshipsResponse) => value.results).flat(1)
		);

		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		const filtered = [...starships]
			.filter(
				// eslint-disable-next-line id-length
				(s: ClientStarship): boolean => s.pilots.some(
					(url: string): boolean => parseId(url) === filter.characterId
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
		throw new StarshipsStoreError(`Error fetching page of Starships ${JSON.stringify(filter)}.`, { cause: err });
	}
};

export const starshipsStore = {
	list
};
