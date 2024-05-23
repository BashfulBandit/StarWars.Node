import type { Episode } from '~/core/models/episode';

export type RetrieveEpisodeResponse = {
	episode: Episode | null;
};
