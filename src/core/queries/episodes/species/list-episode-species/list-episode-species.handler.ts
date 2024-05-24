/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import { episodesStore } from '~/core/stores/episodes.store';
import type { ListEpisodeSpecies } from '~/core/queries/episodes/species/list-episode-species/list-episode-species.query';
import { ListEpisodeSpeciesResult } from '~/core/queries/episodes/species/list-episode-species/list-episode-species.result';
import { speciesStore } from '~/core/stores/species.store';
import {
	ListEpisodeSpeciesError,
	ListEpisodeSpeciesFailureReason
} from '~/core/queries/episodes/species/list-episode-species/list-episode-species.error';

const validate = async (query: ListEpisodeSpecies): Promise<void> => {
	if (query.filter.episodeId === null) throw ListEpisodeSpeciesError.notFound('');

	const episode = await episodesStore.fetch(query.filter.episodeId);
	if (episode === null) throw ListEpisodeSpeciesError.notFound(query.filter.episodeId);
};

export const listEpisodeSpeciesHandler = async (query: ListEpisodeSpecies): Promise<ListEpisodeSpeciesResult> => {
	try {
		await validate(query);
		const page = await speciesStore.list(query.filter);

		return ListEpisodeSpeciesResult.success(page);
	} catch (err) {
		if (err instanceof ListEpisodeSpeciesError
			// eslint-disable-next-line max-len
			&& err.failureReason === ListEpisodeSpeciesFailureReason.EPISODE_NOT_FOUND) return ListEpisodeSpeciesResult.failure(err);

		return ListEpisodeSpeciesResult.failure(ListEpisodeSpeciesError.fault(`Failed to list Species for Episode ${query.filter.episodeId}.`, { cause: err }));
	}
};
