import type { CharactersSearchFilter } from '~/core/models/filters/characters.filter';
import type { ListCharactersResult } from '~/core/queries/characters/list-characters/list-characters.result';
import type { Query } from '~/core/queries/query';

export type ListCharacters = Query<{
	filter: CharactersSearchFilter;
}, ListCharactersResult>;
