/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { ListCharacterStarshipsError } from '~/core/queries/characters/starships/list-character-starships/list-character-starships.error';
import type { Page } from '~/core/models/page';
import { QueryResult } from '~/core/queries/query.result';
import type { Starship } from '~/core/models/starship';

export class ListCharacterStarshipsResult extends QueryResult {
	page: Page<Starship> | null;

	private constructor (page: Page<Starship> | null, error?: Readonly<Error> | null) {
		if (error) {
			super(false, error);
			this.page = null;
		} else {
			super(true);
			this.page = page;
		}
	}

	static failure (error: Readonly<Error>): ListCharacterStarshipsResult {
		return new ListCharacterStarshipsResult(null, error);
	}

	static success (page: Page<Starship>): ListCharacterStarshipsResult {
		return new ListCharacterStarshipsResult(page);
	}

	static notFound (characterId: string): ListCharacterStarshipsResult {
		return new ListCharacterStarshipsResult(null, ListCharacterStarshipsError.notFound(characterId));
	}
}
