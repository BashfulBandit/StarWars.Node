import { type FilmsClient, filmsClient } from '~/clients/clients/films/films.client';
import { type PeopleClient, peopleClient } from '~/clients/clients/people/people.client';
import { type PlanetsClient, planetsClient } from '~/clients/clients/planets/planets.client';
import { type SpeciesClient, speciesClient } from '~/clients/clients/species/species.client';
import { type StarshipsClient, starshipsClient } from '~/clients/clients/starships/starships.client';

export const DEFAULT_HEADERS = {
	headers: {
		accept: 'application/json'
	}
};

export type SWApiClient = {
	films: FilmsClient;
	planets: PlanetsClient;
	species: SpeciesClient;
	starships: StarshipsClient;
	people: PeopleClient;
};

export const swApiClient = {
	films: filmsClient,
	people: peopleClient,
	planets: planetsClient,
	species: speciesClient,
	starships: starshipsClient
};
