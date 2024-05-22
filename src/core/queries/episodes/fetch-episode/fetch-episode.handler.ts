import type { FetchEpisode } from '~/core/queries/episodes/fetch-episode/fetch-episode.query';
import { FetchEpisodeResult } from '~/core/queries/episodes/fetch-episode/fetch-episode.result';

export const fetchEpisodeHandler = (
	query: Readonly<FetchEpisode>
): FetchEpisodeResult => FetchEpisodeResult.success({
	id: query.episodeId
});
