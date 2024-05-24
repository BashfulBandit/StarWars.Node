/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { ListEpisodeSpecies } from '~/core/queries/episodes/species/list-episode-species/list-episode-species.query';
import type { ListEpisodeSpeciesResponse } from '~responses/episodes/species/list.response';
import type { ListEpisodeSpeciesResult } from '~/core/queries/episodes/species/list-episode-species/list-episode-species.result';
import type { RouterContext } from '@koa/router';
import type { SpeciesSearchFilter } from '~/core/models/filters/species.filter';
import { toDto as toDtoPagination } from '~/mappings/pagination.map';
import { toDto as toDtoSpecies } from '~/mappings/episodes/species/species.map';
import {
	DEFAULT_PAGE_NUMBER,
	DEFAULT_PAGE_SIZE
} from '~/globals/constants';

const toFilter = (ctx: RouterContext): SpeciesSearchFilter => ({
	episodeId: ctx.params.episodeId,
	page: typeof ctx.query.page !== 'string' || isNaN(Number(ctx.query.page)) ? DEFAULT_PAGE_NUMBER : Number(ctx.query.page),
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	pageSize: typeof ctx.query.pageSize !== 'string' && isNaN(Number(ctx.query.pageSize)) ? DEFAULT_PAGE_SIZE : Number(ctx.query.pageSize)
});

export const toQuery = (ctx: RouterContext): ListEpisodeSpecies => ({
	filter: toFilter(ctx)
});

export const toResponse = (result: ListEpisodeSpeciesResult): ListEpisodeSpeciesResponse => ({
	pagination: toDtoPagination(result.page),
	species: result.page?.items.map(toDtoSpecies) ?? []
});
