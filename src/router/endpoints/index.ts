
import type { Endpoint } from '~/models/endpoint';
import { retrieve as getCharacter } from '~/router/endpoints/characters/retrieve';
import { retrieve as getEpisode } from '~/router/endpoints/episodes/retrieve';
import { healthz as getHealthz } from '~/router/endpoints/healthz';
import { retrieve as getPopulation } from '~/router/endpoints/planets/population';
import { list as listCharacters } from '~/router/endpoints/characters/list';
import { list as listCharacterStarships } from '~/router/endpoints/characters/starships/list';
import { list as listEpisodes } from '~/router/endpoints/episodes/list';
import { list as listEpisodeSpecies } from '~/router/endpoints/episodes/species/list';

export const endpoints = [
	getHealthz,
	getPopulation,
	getEpisode,
	listEpisodes,
	listEpisodeSpecies,
	getCharacter,
	listCharacters,
	listCharacterStarships
] as const satisfies Endpoint[];
