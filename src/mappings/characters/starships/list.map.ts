import type { ListCharacterStarships } from '~/core/queries/characters/starships/list-character-starships/list-character-starships.query';
import type { ListCharacterStarshipsResponse } from '~/responses/characters/starships/list.response';
import type { ListCharacterStarshipsResult } from '~/core/queries/characters/starships/list-character-starships/list-character-starships.result';
import type { RouterContext } from '@koa/router';
import type { StarshipsSearchFilter } from '~/core/models/filters/starships.filter';
import { toDto as toDtoPagination } from '~/mappings/pagination.map';
import { toDto as toDtoStarship } from '~/mappings/characters/starships/starship.map';
import {
	DEFAULT_PAGE_NUMBER,
	DEFAULT_PAGE_SIZE
} from '~/globals/constants';

const toFilter = (ctx: RouterContext): StarshipsSearchFilter => ({
	characterId: ctx.params.characterId,
	page: typeof ctx.query.page !== 'string' || isNaN(Number(ctx.query.page)) ? DEFAULT_PAGE_NUMBER : Number(ctx.query.page),
	pageSize: typeof ctx.query.pageSize !== 'string' && isNaN(Number(ctx.query.pageSize)) ? DEFAULT_PAGE_SIZE : Number(ctx.query.pageSize)
});

/**
 * Function to map a Koa.RouterContext to a ListCharacterStarships query.
 *
 * @param ctx - RouterContext
 *
 * @returns ListCharacterStarships
 */
export const toQuery = (ctx: RouterContext): ListCharacterStarships => ({
	filter: toFilter(ctx)
});

/**
 * Function to map a ListCharacterStarshipsResult to a ListCharacterStarshipsResponse.
 *
 * @param result - ListCharacterStarshipsResult
 *
 * @returns ListCharacterStarshipsResponse
 */
export const toResponse = (result: ListCharacterStarshipsResult): ListCharacterStarshipsResponse => ({
	species: result.page?.items.map(toDtoStarship) ?? [],
	pagination: toDtoPagination(result.page)
});
