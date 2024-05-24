/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
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
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	pageSize: typeof ctx.query.pageSize !== 'string' && isNaN(Number(ctx.query.pageSize)) ? DEFAULT_PAGE_SIZE : Number(ctx.query.pageSize)
});

export const toQuery = (ctx: RouterContext): ListCharacterStarships => ({
	filter: toFilter(ctx)
});

export const toResponse = (result: ListCharacterStarshipsResult): ListCharacterStarshipsResponse => ({
	pagination: toDtoPagination(result.page),
	species: result.page?.items.map(toDtoStarship) ?? []
});
