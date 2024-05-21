import type { Context } from 'koa';

export type Endpoint = {
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	handler: (ctx: Context) => void;
	method: 'delete' | 'get' | 'put';
	path: string;
};
