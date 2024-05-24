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

/**
 * Describes a client to interact with the SW API Resources.
 *
 * @public
 */
export type SWApiClient = {
	/**
	 * A client to interact with the Films resources.
	 */
	films: FilmsClient;

	/**
	 * A client to interact with the Planets resources.
	 */
	planets: PlanetsClient;

	/**
	 * A client to interact with the Species resources.
	 */
	species: SpeciesClient;

	/**
	 * A client to interact with the Starships resources.
	 */
	starships: StarshipsClient;

	/**
	 * A client to interact with the People resources.
	 */
	people: PeopleClient;
};

export const swApiClient = {
	films: filmsClient,
	people: peopleClient,
	planets: planetsClient,
	species: speciesClient,
	starships: starshipsClient
};
