/* eslint-disable require-atomic-updates */
import { fetchEpisodeHandler } from '~/core/queries/episodes/fetch-episode/fetch-episode.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import { FetchEpisodeError, FetchEpisodeFailureReason } from '~/core/queries/episodes/fetch-episode/fetch-episode.error';
import {
	toQuery,
	toResponse
} from '~/mappings/episodes/retrieve.map';

export const retrieveEpisodeRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
retrieveEpisodeRouter.get('/:episodeId', async (ctx: RouterContext): Promise<void> => {
	try {
		const query = toQuery(ctx);
		const result = await fetchEpisodeHandler(query);
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (!result.succeeded) throw result.error;

		ctx.status = 200;
		ctx.body = toResponse(result);
	} catch (err) {
		if (err instanceof FetchEpisodeError
			&& err.failureReason === FetchEpisodeFailureReason.EPISODE_NOT_FOUND) ctx.status = 404;
	}
});
