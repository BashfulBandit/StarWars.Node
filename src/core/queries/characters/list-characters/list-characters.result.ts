/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Character } from '~/core/models/character';
import type { Page } from '~/core/models/page';
import { QueryResult } from '~/core/queries/query.result';

export class ListCharactersResult extends QueryResult {
	page: Page<Character> | null;

	private constructor (page: Page<Character> | null, error?: Readonly<Error> | null) {
		if (error) {
			super(false, error);
			this.page = null;
		} else {
			super(true);
			this.page = page;
		}
	}

	static failure (error: Readonly<Error>): ListCharactersResult {
		return new ListCharactersResult(null, error);
	}

	static success (page: Page<Character>): ListCharactersResult {
		return new ListCharactersResult(page);
	}
}
