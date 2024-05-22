import type { FetchEpisodeResult } from '~/core/queries/episodes/fetch-episode/fetch-episode.result';
import type { Query } from '~/core/queries/query';

export type FetchEpisode = Query<{
	episodeId: string;
}, FetchEpisodeResult>;
