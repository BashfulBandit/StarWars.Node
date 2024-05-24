import { charactersStore } from '~/core/stores/characters.store';
import type { FetchCharacter } from '~/core/queries/characters/fetch-character/fetch-character.query';
import { FetchCharacterError } from '~/core/queries/characters/fetch-character/fetch-character.error';
import { FetchCharacterResult } from '~/core/queries/characters/fetch-character/fetch-character.result';

export const fetchCharacterHandler = async (
	query: FetchCharacter
): Promise<FetchCharacterResult> => {
	try {
		const character = await charactersStore.fetch(query.characterId);
		if (character === null) return FetchCharacterResult.notFound(query.characterId);

		return FetchCharacterResult.success(character);
	} catch (err) {
		return FetchCharacterResult.failure(FetchCharacterError.fault('Failed to fetch character.', { cause: err }));
	}
};
