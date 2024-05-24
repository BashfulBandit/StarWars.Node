import type { ListCharacterStarshipsResult } from '~/core/queries/characters/starships/list-character-starships/list-character-starships.result';
import type { Query } from '~/core/queries/query';
import type { StarshipsSearchFilter } from '~/core/models/filters/starships.filter';

export type ListCharacterStarships = Query<{
	filter: StarshipsSearchFilter;
}, ListCharacterStarshipsResult>;
