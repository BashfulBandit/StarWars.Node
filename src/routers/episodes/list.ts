/* eslint-disable require-atomic-updates */
import { listEpisodesHandler } from '~/core/queries/episodes/list-episodes/list-episodes.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import {
	toQuery,
	toResponse
} from '~/mappings/episodes/list.map';

export const listEpisodesRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
listEpisodesRouter.get('/', async (ctx: RouterContext): Promise<void> => {
	const query = toQuery(ctx);
	const result = await listEpisodesHandler(query);
	// eslint-disable-next-line @typescript-eslint/no-throw-literal
	if (!result.succeeded) throw result.error;

	ctx.status = 200;
	ctx.body = toResponse(result);
});
