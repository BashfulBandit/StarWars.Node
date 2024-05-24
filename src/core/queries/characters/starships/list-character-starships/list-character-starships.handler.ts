/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { charactersStore } from '~/core/stores/characters.store';
import type { ListCharacterStarships } from '~/core/queries/characters/starships/list-character-starships/list-character-starships.query';
import { ListCharacterStarshipsResult } from '~/core/queries/characters/starships/list-character-starships/list-character-starships.result';
import { starshipsStore } from '~/core/stores/starships.store';
import {
	ListCharacterStarshipsError,
	ListCharacterStarshipsFailureReason
} from '~/core/queries/characters/starships/list-character-starships/list-character-starships.error';

const validate = async (
	query: ListCharacterStarships
): Promise<void> => {
	if (query.filter.characterId === null) throw ListCharacterStarshipsError.notFound('');

	const character = await charactersStore.fetch(query.filter.characterId);
	if (character === null) throw ListCharacterStarshipsError.notFound(query.filter.characterId);
};

export const listCharacterStarshipsHandler = async (
	query: ListCharacterStarships
): Promise<ListCharacterStarshipsResult> => {
	try {
		await validate(query);
		const page = await starshipsStore.list(query.filter);

		return ListCharacterStarshipsResult.success(page);
	} catch (err) {
		if (err instanceof ListCharacterStarshipsError
			// eslint-disable-next-line max-len
			&& err.failureReason === ListCharacterStarshipsFailureReason.CHARACTER_NOT_FOUND) return ListCharacterStarshipsResult.failure(err);

		return ListCharacterStarshipsResult.failure(ListCharacterStarshipsError.fault(`Failed to list Starships for Character ${query.filter.characterId}.`, { cause: err }));
	}
};
