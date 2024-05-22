import { listCharacterStarshipsRouter } from '~/routers/characters/starships/list';
import Router from '@koa/router';

export const characterStarshipsRouter = new Router({
	prefix: '/:characterId/starships'
})
	.use(listCharacterStarshipsRouter.routes());
