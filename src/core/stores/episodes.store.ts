import type { Episode } from '~/core/models/episode';
import type { EpisodesSearchfilter } from '~/core/models/filters/episodes.filter';
import type { Film } from '~/clients/models/film';
import type { ListFilmsResponse } from '~clients/responses/films/list.response';
import type { Page } from '~/core/models/page';
import { parseId } from '~/core/utilities/parse-id';
import { swApiClient } from '~/clients/swapi.client';

/**
 * Describes a store to manage the Episode resources.
 */
export type EpisodesStore = {
	/**
	 * Function to fetch a Episode from storage.
	 *
	 * @param episodeId - string
	 *
	 * @returns Promise\<Episode | null\>
	 */
	fetch: (episodeId: string) => Promise<Episode | null>;

	/**
	 * Function to get a page of Episodes from storage.
	 *
	 * @param filter - EpisodesSearchfilter
	 *
	 * @returns Promise\<Page<Episode>\>
	 */
	list: (filter: EpisodesSearchfilter) => Promise<Page<Episode>>;
};

/**
 * Desribes a error thrown by the EpisodesStore on a failed operation.
 */
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

const list = async (filter: EpisodesSearchfilter): Promise<Page<Episode>> => {
	try {
		const films: Film[] = [];

		const {
			count,
			results
		} = await swApiClient.films.list({
			page: 1
		});

		const pagePromises = new Array(Math.ceil((count - results.length) / results.length))
			.fill(null)
			.map(async (_value, index: number) => swApiClient.films.list({
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				page: index + 2
			}));

		const pages = await Promise.all(pagePromises);
		films.push(
			...results,
			...pages.map((value: ListFilmsResponse) => value.results).flat(1)
		);

		// Just disabling this because the call to `filter` is only in place for if/when
		// I want to add support for filtering by some property.
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		const filtered = [...films].filter((): boolean => true)
			.sort(() => 0)
			.slice((filter.page - 1) * filter.pageSize, filter.pageSize)
			.map(mapClientToCore);

		return {
			hasNext: Math.max(1, filter.page) < Math.ceil(filtered.length / filter.pageSize),
			hasPrevious: Math.max(1, filter.page) > 1,
			items: filtered,
			pageCount: Math.ceil(filtered.length / filter.pageSize),
			pageNumber: Math.max(1, filter.page),
			pageSize: Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, filter.pageSize)),
			totalCount: Math.max(0, filtered.length)
		};
	} catch (err) {
		throw new EpisodeStoreError(`Error fetching page of Episodes ${JSON.stringify(filter)}.`, { cause: err });
	}
};

export const episodesStore = {
	fetch,
	list
};
