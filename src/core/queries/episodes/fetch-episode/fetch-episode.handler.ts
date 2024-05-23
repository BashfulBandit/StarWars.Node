import { episodesStore } from '~/core/stores/episodes.store';
import type { FetchEpisode } from '~/core/queries/episodes/fetch-episode/fetch-episode.query';
import { FetchEpisodeError } from '~/core/queries/episodes/fetch-episode/fetch-episode.error';
import { FetchEpisodeResult } from '~/core/queries/episodes/fetch-episode/fetch-episode.result';
import type { QueryHandler } from '~/core/queries/query.handler';

export type FetchEpisodeHandler = QueryHandler<FetchEpisode, FetchEpisodeResult>;

export const fetchEpisodeHandler = async (query: Readonly<FetchEpisode>): Promise<FetchEpisodeResult> => {
	try {
		const episode = await episodesStore.fetch(query.episodeId);
		if (episode === null) return FetchEpisodeResult.notFound(query.episodeId);

		return FetchEpisodeResult.success(episode);
	} catch (err) {
		return FetchEpisodeResult.failure(FetchEpisodeError.fault('Failed to fetch episode.', { cause: err }));
	}
};
