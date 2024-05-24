import { type FilmsClient, filmsClient } from '~/clients/clients/films/films.client';
import { type PlanetsClient, planetsClient } from '~/clients/clients/planets/planets.client';
import { type SpeciesClient, speciesClient } from '~/clients/clients/species/species.client';

export const DEFAULT_HEADERS = {
	headers: {
		accept: 'application/json'
	}
};

export type SWApiClient = {
	films: FilmsClient;
	planets: PlanetsClient;
	species: SpeciesClient;
};

export const swApiClient = {
	films: filmsClient,
	planets: planetsClient,
	species: speciesClient
};
