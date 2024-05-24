import { fetchEpisodeHandler } from '~/core/queries/episodes/fetch-episode/fetch-episode.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';
import { FetchEpisodeError, FetchEpisodeFailureReason } from '~/core/queries/episodes/fetch-episode/fetch-episode.error';
import {
	toQuery,
	toResponse
} from '~/mappings/episodes/retrieve.map';

export const retrieveEpisodeRouter = new Router();

retrieveEpisodeRouter.get('/:episodeId', async (ctx: RouterContext): Promise<void> => {
	try {
		const query = toQuery(ctx);
		const result = await fetchEpisodeHandler(query);
		if (!result.succeeded
			&& result.error) throw result.error;

		ctx.status = 200;
		ctx.body = toResponse(result);
	} catch (err) {
		if (err instanceof FetchEpisodeError
			&& err.failureReason === FetchEpisodeFailureReason.EPISODE_NOT_FOUND) ctx.status = 404;
	}
});
