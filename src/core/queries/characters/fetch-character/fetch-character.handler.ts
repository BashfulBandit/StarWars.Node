import type { FetchCharacter } from '~/core/queries/characters/fetch-character/fetch-character.query';
import { FetchCharacterResult } from '~/core/queries/characters/fetch-character/fetch-character.result';

export const fetchCharacterHandler = (
	query: Readonly<FetchCharacter>
): FetchCharacterResult => FetchCharacterResult.success({
	id: query.characterId
});
