/* eslint-disable require-atomic-updates */
import { fetchCharacterHandler } from '~/core/queries/characters/fetch-character/fetch-character.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import { FetchCharacterError, FetchCharacterFailureReason } from '~core/queries/characters/fetch-character/fetch-character.error';
import {
	toQuery,
	toResponse
} from '~/mappings/characters/retrieve.map';

export const retrieveCharacterRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
retrieveCharacterRouter.get('/:characterId', async (ctx: RouterContext): Promise<void> => {
	try {
		const query = toQuery(ctx);
		const result = await fetchCharacterHandler(query);
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (!result.succeeded) throw result.error;

		ctx.status = 200;
		ctx.body = toResponse(result);
	} catch (err) {
		if (err instanceof FetchCharacterError
			&& err.failureReason === FetchCharacterFailureReason.CHARACTER_NOT_FOUND) ctx.status = 404;
	}
});
