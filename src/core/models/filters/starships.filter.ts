import type { SearchFilter } from '~/core/models/filters/search.filter';

export type StarshipsSearchFilter = SearchFilter & {
	characterId: string | null;
};
