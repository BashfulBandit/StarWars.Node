import { listCharactersHandler } from '~/core/queries/characters/list-characters/list-characters.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import {
	toQuery,
	toResponse
} from '~/mappings/characters/list.map';

export const listCharactersRouter = new Router();

listCharactersRouter.get('/', async (ctx: RouterContext): Promise<void> => {
	const query = toQuery(ctx);
	const result = await listCharactersHandler(query);
	if (!result.succeeded
		&& result.error) throw result.error;

	ctx.status = 200;
	ctx.body = toResponse(result);
});
