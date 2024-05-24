import type { Context } from 'koa';
import Router from '@koa/router';

export const healthzRouter = new Router({
	prefix: '/healthz'
});

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
healthzRouter.get('/', (ctx: Context): void => {
	// For now, just getting a request and returning a response is good enough.
	// We could definitely make this more robust to ensure any dependencies of this API
	// are healthy as well. But that is for a later date...
	ctx.status = 200;
	ctx.body = 'Healthy';
});
