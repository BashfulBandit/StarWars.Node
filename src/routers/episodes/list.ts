import { listEpisodesHandler } from '~/core/queries/episodes/list-episodes/list-episodes.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import {
	toQuery,
	toResponse
} from '~/mappings/episodes/list.map';

export const listEpisodesRouter = new Router();

listEpisodesRouter.get('/', async (ctx: RouterContext): Promise<void> => {
	const query = toQuery(ctx);
	const result = await listEpisodesHandler(query);
	if (!result.succeeded
		&& result.error) throw result.error;

	ctx.status = 200;
	ctx.body = toResponse(result);
});
