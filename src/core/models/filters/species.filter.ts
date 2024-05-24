import type { SearchFilter } from '~/core/models/filters/search.filter';

export type SpeciesSearchFilter = SearchFilter & {
	episodeId: string | null;
};
