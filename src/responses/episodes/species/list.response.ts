import type { PageResponse } from '~/responses/page.response';
import type { SpeciesDto } from '~/models/species';

export type ListEpisodeSpeciesResponse = PageResponse & {
	species: SpeciesDto[];
};
