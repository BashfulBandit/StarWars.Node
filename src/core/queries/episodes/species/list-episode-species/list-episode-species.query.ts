import type { ListEpisodeSpeciesResult } from '~/core/queries/episodes/species/list-episode-species/list-episode-species.result';
import type { Query } from '~/core/queries/query';
import type { SpeciesSearchFilter } from '~/core/models/filters/species.filter';

export type ListEpisodeSpecies = Query<{
	filter: SpeciesSearchFilter;
}, ListEpisodeSpeciesResult>;
