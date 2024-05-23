import { filmsClient } from '~/clients/clients/films/films.client';
import type { FilmsClient } from '~/clients/clients/films/films.client';
import { planetsClient } from '~/clients/clients/planets/planets.client';
import type { PlanetsClient } from '~/clients/clients/planets/planets.client';

export const DEFAULT_HEADERS = {
	headers: {
		accept: 'application/json'
	}
};

export type SWApiClient = {
	films: FilmsClient;
	planets: PlanetsClient;
};

export const swApiClient = {
	films: filmsClient,
	planets: planetsClient
};
