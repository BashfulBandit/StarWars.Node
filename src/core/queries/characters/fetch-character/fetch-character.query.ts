import type { FetchCharacterResult } from '~/core/queries/characters/fetch-character/fetch-character.result';
import type { Query } from '~/core/queries/query';

export type FetchCharacter = Query<{
	characterId: string;
}, FetchCharacterResult>;
