import type { PageRequest } from '~/requests/page.request';

export type ListEpisodeSpeciesRequest = PageRequest & {
	episodeId: string;
};
