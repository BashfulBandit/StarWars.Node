import { fetchEpisodeHandler } from '~core/queries/episodes/fetch-episode/fetch-episode.handler';
import Router from '@koa/router';
import type { RouterContext } from '@koa/router';

export const retrieveEpisodeRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/no-invalid-void-type
retrieveEpisodeRouter.get('/:episodeId', (ctx: RouterContext): void => {
	try {
		const result = fetchEpisodeHandler({
			episodeId: ctx.params.episodeId
		});
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (!result.succeeded) throw result.error;

		ctx.status = 200;
		ctx.body = {
			episode: {
				id: result.episode?.id
			}
		};
	} catch (err) {
		ctx.status = 404;
	}
});
