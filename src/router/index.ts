import type { Endpoint } from '~/models/endpoint';
import { endpoints } from '~/router/endpoints';
import Router from '@koa/router';

export const router = new Router();

endpoints.forEach(({ handler, method, path }: Readonly<Endpoint>) => {
	switch (method) {
		case 'get':
			router.get(path, handler);
			break;
		case 'put':
			router.put(path, handler);
			break;
		case 'delete':
			router.delete(path, handler);
			break;
		default:
	}
});
