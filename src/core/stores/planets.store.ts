/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Planet as ClientPlanet } from '~/clients/models/planet';
import type { Planet as CorePlanet } from '~/core/models/planet';
import type { ListPlanetsResponse } from '~/clients/responses/planets/list.response';
import type { Page } from '~/core/models/page';
import { parseId } from '~/core/utilities/parse-id';
import type { PlanetsSearchFilter } from '~/core/models/filters/planets.filter';
import { swApiClient } from '~/clients/swapi.client';

export type PlanetsStore = {
	list: (filter: PlanetsSearchFilter) => Promise<Page<CorePlanet>>;
};

export class PlanetsStoreError extends Error {}

const mapClientToCore = (clientPlanet: ClientPlanet): CorePlanet => ({
	climates: clientPlanet.climate.split(',').map((climate: string): string => climate.trim()),
	createdAt: clientPlanet.created,
	diameter: clientPlanet.diameter,
	gravity: clientPlanet.gravity,
	id: parseId(clientPlanet.url),
	name: clientPlanet.name,
	orbitalPeriod: clientPlanet.orbital_period,
	population: clientPlanet.population === null
		|| isNaN(Number(clientPlanet.population)) ? 0 : Number(clientPlanet.population),
	rotationPeriod: clientPlanet.rotation_period,
	surfaceWater: clientPlanet.surface_water,
	terrains: clientPlanet.terrain.split(',').map((terrain: string): string => terrain.trim()),
	updatedAt: clientPlanet.edited
});

const list = async (filter: PlanetsSearchFilter): Promise<Page<CorePlanet>> => {
	try {
		const planets: ClientPlanet[] = [];

		const {
			count,
			results
		} = await swApiClient.planets.list({
			page: 1
		});

		const pagePromises = new Array(Math.ceil((count - results.length) / results.length))
			.fill(null)
			.map(async (_value, index: number) => swApiClient.planets.list({
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				page: index + 2
			}));

		const pages = await Promise.all(pagePromises);
		planets.push(
			...results,
			...pages.map((value: ListPlanetsResponse) => value.results).flat(1)
		);

		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		const filtered = [...planets].filter((): boolean => true)
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
		throw new PlanetsStoreError(`Error fetching page of Planets ${JSON.stringify(filter)}.`, { cause: err });
	}
};

export const planetsStore = {
	list
};
