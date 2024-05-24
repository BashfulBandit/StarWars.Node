/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { ListEpisodeSpeciesError } from '~/core/queries/episodes/species/list-episode-species/list-episode-species.error';
import type { Page } from '~/core/models/page';
import { QueryResult } from '~/core/queries/query.result';
import type { Species } from '~/core/models/species';

export class ListEpisodeSpeciesResult extends QueryResult {
	page: Page<Species> | null;

	private constructor (page: Page<Species> | null, error?: Readonly<Error> | null) {
		if (error) {
			super(false, error);
			this.page = null;
		} else {
			super(true);
			this.page = page;
		}
	}

	static failure (error: Readonly<Error>): ListEpisodeSpeciesResult {
		return new ListEpisodeSpeciesResult(null, error);
	}

	static success (page: Page<Species>): ListEpisodeSpeciesResult {
		return new ListEpisodeSpeciesResult(page);
	}

	static notFound (episodeId: string): ListEpisodeSpeciesResult {
		return new ListEpisodeSpeciesResult(null, ListEpisodeSpeciesError.notFound(episodeId));
	}
}
