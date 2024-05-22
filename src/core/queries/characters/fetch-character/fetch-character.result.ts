import type { Character } from '~/core/models/character';
import { FetchCharacterError } from '~/core/queries/characters/fetch-character/fetch-character.error';
import { QueryResult } from '~/core/queries/query.result';

export class FetchCharacterResult extends QueryResult {
	character: Character | null;

	constructor (character: Readonly<Character> | null, error?: Readonly<Error> | null) {
		if (error) {
			super(false, error);
			this.character = null;
		} else {
			super(true);
			this.character = character;
		}
	}

	static failure (error: Readonly<Error>): FetchCharacterResult {
		return new FetchCharacterResult(null, error);
	}

	static success (character: Readonly<Character>): FetchCharacterResult {
		return new FetchCharacterResult(character);
	}

	static notFound (characterId: string): FetchCharacterResult {
		return new FetchCharacterResult(null, FetchCharacterError.notFound(characterId));
	}
}
