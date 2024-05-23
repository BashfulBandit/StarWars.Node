import type { EpisodesSearchfilter } from '~/core/models/filters/episodes.filter';
import type { ListEpisodesResult } from '~/core/queries/episodes/list-episodes/list-episodes.result';
import type { Query } from '~/core/queries/query';

export type ListEpisodes = Query<{
	filter: EpisodesSearchfilter;
}, ListEpisodesResult>;
