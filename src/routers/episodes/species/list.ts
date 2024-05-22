import type { Context } from 'koa';
import Router from '@koa/router';

export const listEpisodeSpeciesRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
listEpisodeSpeciesRouter.get('/', (ctx: Context): void => {
	ctx.status = 200;
	ctx.body = 'List Episode Species';
});
