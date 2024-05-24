import type { CharactersSearchFilter } from '~/core/models/filters/characters.filter';
import type { ListCharacters } from '~/core/queries/characters/list-characters/list-characters.query';
import type { ListCharactersResponse } from '~/responses/characters/list.response';
import type { ListCharactersResult } from '~/core/queries/characters/list-characters/list-characters.result';
import type { RouterContext } from '@koa/router';
import { toDto as toDtoCharacter } from '~/mappings/characters/character.map';
import { toDto as toDtoPagination } from '~/mappings/pagination.map';
import {
	DEFAULT_PAGE_NUMBER,
	DEFAULT_PAGE_SIZE
} from '~/globals/constants';

const toFilter = (ctx: RouterContext): CharactersSearchFilter => ({
	page: typeof ctx.query.page !== 'string' || isNaN(Number(ctx.query.page)) ? DEFAULT_PAGE_NUMBER : Number(ctx.query.page),
	pageSize: typeof ctx.query.pageSize !== 'string' && isNaN(Number(ctx.query.pageSize)) ? DEFAULT_PAGE_SIZE : Number(ctx.query.pageSize)
});

export const toQuery = (ctx: RouterContext): ListCharacters => ({
	filter: toFilter(ctx)
});

export const toResponse = (result: ListCharactersResult): ListCharactersResponse => ({
	pagination: toDtoPagination(result.page),
	characters: result.page?.items.map(toDtoCharacter) ?? []
});
