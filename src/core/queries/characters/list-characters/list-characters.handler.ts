import { charactersStore } from '~/core/stores/characters.store';
import type { ListCharacters } from '~/core/queries/characters/list-characters/list-characters.query';
import { ListCharactersError } from '~/core/queries/characters/list-characters/list-characters.error';
import { ListCharactersResult } from '~/core/queries/characters/list-characters/list-characters.result';
import type { QueryHandler } from '~/core/queries/query.handler';

export type ListCharactersHandler = QueryHandler<ListCharacters, ListCharactersResult>;

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const listCharactersHandler = async (query: ListCharacters): Promise<ListCharactersResult> => {
	try {
		const page = await charactersStore.list(query.filter);

		return ListCharactersResult.success(page);
	} catch (err) {
		return ListCharactersResult.failure(ListCharactersError.fault('Failed to list characters.', { cause: err }));
	}
};
