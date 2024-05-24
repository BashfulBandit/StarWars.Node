/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { FetchEpisode } from '~/core/queries/episodes/fetch-episode/fetch-episode.query';
import type { FetchEpisodeResult } from '~/core/queries/episodes/fetch-episode/fetch-episode.result';
import type { RetrieveEpisodeResponse } from '~/responses/episodes/retrieve.response';
import type { RouterContext } from '@koa/router';
import { toDto } from '~/mappings/episodes/episode.map';

export const toQuery = (ctx: RouterContext): FetchEpisode => ({
	episodeId: ctx.params.episodeId
});

export const toResponse = (result: FetchEpisodeResult): RetrieveEpisodeResponse => ({
	episode: result.episode ? toDto(result.episode) : null
});
