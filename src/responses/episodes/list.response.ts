import type { EpisodeDto } from '~/models/episode';
import type { PageResponse } from '~/responses/page.response';

export type ListEpisodesResponse = PageResponse & {
	episodes: EpisodeDto[];
};
