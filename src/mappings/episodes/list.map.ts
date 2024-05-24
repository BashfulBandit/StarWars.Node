/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { EpisodesSearchfilter } from '~/core/models/filters/episodes.filter';
import type { ListEpisodes } from '~/core/queries/episodes/list-episodes/list-episodes.query';
import type { ListEpisodesResponse } from '~/responses/episodes/list.response';
import type { ListEpisodesResult } from '~/core/queries/episodes/list-episodes/list-episodes.result';
import type { RouterContext } from '@koa/router';
import { toDto as toDtoEpisode } from '~/mappings/episodes/episode.map';
import { toDto as toDtoPagination } from '~/mappings/pagination.map';
import {
	DEFAULT_PAGE_NUMBER,
	DEFAULT_PAGE_SIZE
} from '~/globals/constants';

const toFilter = (ctx: RouterContext): EpisodesSearchfilter => ({
	page: typeof ctx.query.page !== 'string' || isNaN(Number(ctx.query.page)) ? DEFAULT_PAGE_NUMBER : Number(ctx.query.page),
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	pageSize: typeof ctx.query.pageSize !== 'string' && isNaN(Number(ctx.query.pageSize)) ? DEFAULT_PAGE_SIZE : Number(ctx.query.pageSize)
});

export const toQuery = (ctx: RouterContext): ListEpisodes => ({
	filter: toFilter(ctx)
});

export const toResponse = (result: ListEpisodesResult): ListEpisodesResponse => ({
	pagination: toDtoPagination(result.page),
	episodes: result.page?.items.map(toDtoEpisode) ?? []
});
