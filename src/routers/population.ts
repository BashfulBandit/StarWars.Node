import { calculatePopulationHandler } from '~/core/commands/planets/calculate-population/calculate-population.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import { toResponse } from '~/mappings/planets/population.map';

export const populationRouter = new Router({
	prefix: '/population'
});

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
populationRouter.get('/', async (ctx: RouterContext): Promise<void> => {
	const result = await calculatePopulationHandler();
	// eslint-disable-next-line @typescript-eslint/no-throw-literal
	if (!result.succeeded) throw result.error;

	ctx.status = 200;
	ctx.body = toResponse(result);
});
