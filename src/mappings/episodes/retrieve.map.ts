import type { FetchEpisode } from '~/core/queries/episodes/fetch-episode/fetch-episode.query';
import type { FetchEpisodeResult } from '~/core/queries/episodes/fetch-episode/fetch-episode.result';
import type { RetrieveEpisodeResponse } from '~/responses/episodes/retrieve.response';
import type { RouterContext } from '@koa/router';
import { toDto } from '~/mappings/episodes/episode.map';

/**
 * Function to map a Koa.RouterContext to a FetchEpisode query.
 *
 * @param ctx - RouterContext
 *
 * @returns FetchEpisode
 */
export const toQuery = (ctx: RouterContext): FetchEpisode => ({
	episodeId: ctx.params.episodeId
});

/**
 * Function to map a FetchEpisodeResult to a RetrieveEpisodeResponse.
 *
 * @param result - FetchEpisodeResult
 *
 * @returns RetrieveEpisodeResponse
 */
export const toResponse = (result: FetchEpisodeResult): RetrieveEpisodeResponse => ({
	episode: result.episode ? toDto(result.episode) : null
});
