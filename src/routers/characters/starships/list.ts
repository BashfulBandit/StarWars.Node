import { listCharacterStarshipsHandler } from '~/core/queries/characters/starships/list-character-starships/list-character-starships.handler';
import {
	ListCharacterStarshipsError,
	ListCharacterStarshipsFailureReason
} from '~core/queries/characters/starships/list-character-starships/list-character-starships.error';
import Router, { type RouterContext } from '@koa/router';
import {
	toQuery,
	toResponse
} from '~/mappings/characters/starships/list.map';

export const listCharacterStarshipsRouter = new Router();

listCharacterStarshipsRouter.get('/', async (ctx: RouterContext): Promise<void> => {
	try {
		const query = toQuery(ctx);
		const result = await listCharacterStarshipsHandler(query);
		if (!result.succeeded
			&& result.error) throw result.error;

		ctx.status = 200;
		ctx.body = toResponse(result);
	} catch (err) {
		if (err instanceof ListCharacterStarshipsError
			&& err.failureReason === ListCharacterStarshipsFailureReason.CHARACTER_NOT_FOUND) ctx.status = 404;
	}
});
