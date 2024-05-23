/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Episode } from '~/core/models/episode';
import type { Film } from '~/clients/models/film';
import { parseId } from '~/core/utilities/parse-id';
import { swApiClient } from '~/clients/swapi.client';

export type EpisodeStore = {
	fetch: (episodeId: string) => Promise<Episode | null>;
};

export class EpisodeStoreError extends Error {}

const mapClientToCore = (film: Film): Episode => ({
	createdAt: film.created,
	director: film.director,
	id: parseId(film.url),
	openingCrawl: film.opening_crawl,
	producer: film.producer,
	releaseDate: film.release_date,
	releaseOrder: film.episode_id,
	title: film.title,
	updatedAt: film.edited
});

const fetch = async (episodeId: string): Promise<Episode | null> => {
	try {
		const response = await swApiClient.films.retrieve({
			episodeId
		});

		return mapClientToCore(response);
	} catch (err) {
		throw new EpisodeStoreError(`Error fetching Episode ${episodeId}.`, { cause: err });
	}
};

export const episodesStore = {
	fetch
};
