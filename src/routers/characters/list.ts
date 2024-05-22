import type { Context } from 'koa';
import Router from '@koa/router';

export const listCharactersRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
listCharactersRouter.get('/', (ctx: Context): void => {
	ctx.status = 200;
	ctx.body = 'List Characters';
});
