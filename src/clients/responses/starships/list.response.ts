import type { PageResponse } from '~/clients/responses/page.response';
import type { Starship } from '~/clients/models/starship';

export type ListStarshipsResponse = PageResponse<Starship>;
