import Router from '@koa/router';
import type { RouterContext } from '@koa/router';

export const populationRouter = new Router({
	prefix: '/population'
});

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
populationRouter.get('/', (ctx: RouterContext): void => {
	ctx.status = 200;
	ctx.body = 'Calculate population';
});
