import type { Episode } from '~/core/models/episode';
import { FetchEpisodeError } from '~/core/queries/episodes/fetch-episode/fetch-episode.error';
import { QueryResult } from '~/core/queries/query.result';

export class FetchEpisodeResult extends QueryResult {
	episode: Episode | null;

	private constructor (episode: Readonly<Episode> | null, error?: Readonly<Error> | null) {
		if (error) {
			super(false, error);
			this.episode = null;
		} else {
			super(true);
			this.episode = episode;
		}
	}

	static failure (error: Readonly<Error>): FetchEpisodeResult {
		return new FetchEpisodeResult(null, error);
	}

	static success (episode: Readonly<Episode>): FetchEpisodeResult {
		return new FetchEpisodeResult(episode);
	}

	static notFound (episodeId: string): FetchEpisodeResult {
		return new FetchEpisodeResult(null, FetchEpisodeError.notFound(episodeId));
	}
}
