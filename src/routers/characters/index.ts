import { characterStarshipsRouter } from '~/routers/characters/starships';
import { listCharactersRouter } from '~/routers/characters/list';
import { retrieveCharacterRouter } from '~/routers/characters/retrieve';
import Router from '@koa/router';

export const charactersRouter = new Router({
	prefix: '/characters'
})
	.use(retrieveCharacterRouter.routes())
	.use(listCharactersRouter.routes())
	.use(characterStarshipsRouter.routes());
