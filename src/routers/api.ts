import { charactersRouter } from '~/routers/characters';
import { episodesRouter } from '~/routers/episodes';
import { healthzRouter } from '~/routers/healthz';
import { populationRouter } from '~/routers/population';
import Router from '@koa/router';

export const apiRouter = new Router({
	prefix: '/api'
});

const apiRouters: Router[] = [
	charactersRouter,
	episodesRouter,
	healthzRouter,
	populationRouter
] as const satisfies Router[];

apiRouters.forEach((router: Router) => {
	apiRouter.use(router.routes());
});
