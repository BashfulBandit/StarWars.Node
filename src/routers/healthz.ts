import type { Context } from 'koa';
import Router from '@koa/router';

export const healthzRouter = new Router({
	prefix: '/healthz'
});

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
healthzRouter.get('/', (ctx: Context): void => {
	ctx.status = 200;
	ctx.body = 'Healthy';
});
