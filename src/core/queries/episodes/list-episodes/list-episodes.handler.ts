import { episodesStore } from '~/core/stores/episodes.store';
import type { ListEpisodes } from '~/core/queries/episodes/list-episodes/list-episodes.query';
import { ListEpisodesError } from '~/core/queries/episodes/list-episodes/list-episodes.error';
import { ListEpisodesResult } from '~/core/queries/episodes/list-episodes/list-episodes.result';
import type { QueryHandler } from '~/core/queries/query.handler';

export type ListEpisodesHandler = QueryHandler<ListEpisodes, ListEpisodesResult>;

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const listEpisodesHandler = async (query: ListEpisodes): Promise<ListEpisodesResult> => {
	try {
		const page = await episodesStore.list(query.filter);

		return ListEpisodesResult.success(page);
	} catch (err) {
		return ListEpisodesResult.failure(ListEpisodesError.fault('Failed to list episodes.', { cause: err }));
	}
};
