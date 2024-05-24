/* eslint-disable require-atomic-updates */
import { listCharactersHandler } from '~/core/queries/characters/list-characters/list-characters.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import {
	toQuery,
	toResponse
} from '~/mappings/characters/list.map';

export const listCharactersRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
listCharactersRouter.get('/', async (ctx: RouterContext): Promise<void> => {
	const query = toQuery(ctx);
	const result = await listCharactersHandler(query);
	// eslint-disable-next-line @typescript-eslint/no-throw-literal
	if (!result.succeeded) throw result.error;

	ctx.status = 200;
	ctx.body = toResponse(result);
});
