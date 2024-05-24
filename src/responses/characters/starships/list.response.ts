import type { PageResponse } from '~/responses/page.response';
import type { StarshipDto } from '~/models/starship';

export type ListCharacterStarshipsResponse = PageResponse & {
	species: StarshipDto[];
};
