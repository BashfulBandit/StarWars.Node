import type { Context } from 'koa';
import type { Endpoint } from '~/models/endpoint';

export const list: Endpoint = {
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	handler: (ctx: Context): void => {
		ctx.status = 200;
		ctx.body = 'Retrieve Species';
	},
	method: 'get',
	path: '/api/episodes/:episodeId/species/'
};
