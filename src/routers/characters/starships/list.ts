import type { Context } from 'koa';
import Router from '@koa/router';

export const listCharacterStarshipsRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
listCharacterStarshipsRouter.get('/', (ctx: Context): void => {
	ctx.status = 200;
	ctx.body = 'List Character Starships';
});
