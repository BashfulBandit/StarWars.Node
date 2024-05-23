/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Episode } from '~/core/models/episode';
import type { Page } from '~/core/models/page';
import { QueryResult } from '~/core/queries/query.result';

export class ListEpisodesResult extends QueryResult {
	page: Page<Episode> | null;

	private constructor (page: Page<Episode> | null, error?: Readonly<Error> | null) {
		if (error) {
			super(false, error);
			this.page = null;
		} else {
			super(true);
			this.page = page;
		}
	}

	static failure (error: Readonly<Error>): ListEpisodesResult {
		return new ListEpisodesResult(null, error);
	}

	static success (page: Page<Episode>): ListEpisodesResult {
		return new ListEpisodesResult(page);
	}
}
