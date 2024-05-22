import { fetchCharacterHandler } from '~/core/queries/characters/fetch-character/fetch-character.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import { FetchCharacterError, FetchCharacterFailureReason } from '~core/queries/characters/fetch-character/fetch-character.error';

export const retrieveCharacterRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
retrieveCharacterRouter.get('/:characterId', (ctx: RouterContext): void => {
	try {
		const result = fetchCharacterHandler({
			characterId: ctx.params.characterId
		});
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (!result.succeeded) throw result.error;

		ctx.status = 200;
		ctx.body = {
			character: {
				id: result.character?.id
			}
		};
	} catch (err) {
		if (err instanceof FetchCharacterError
			&& err.failureReason === FetchCharacterFailureReason.CHARACTER_NOT_FOUND) ctx.status = 404;
	}
});
