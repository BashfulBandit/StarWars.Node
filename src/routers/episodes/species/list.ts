/* eslint-disable require-atomic-updates */
import { listEpisodeSpeciesHandler } from '~/core/queries/episodes/species/list-episode-species/list-episode-species.handler';
import {
	ListEpisodeSpeciesError,
	ListEpisodeSpeciesFailureReason
} from '~/core/queries/episodes/species/list-episode-species/list-episode-species.error';
import Router, { type RouterContext } from '@koa/router';
import {
	toQuery,
	toResponse
} from '~/mappings/episodes/species/list.map';

export const listEpisodeSpeciesRouter = new Router();

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
listEpisodeSpeciesRouter.get('/', async (ctx: RouterContext): Promise<void> => {
	try {
		const query = toQuery(ctx);
		const result = await listEpisodeSpeciesHandler(query);
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (!result.succeeded) throw result.error;

		ctx.status = 200;
		ctx.body = toResponse(result);
	} catch (err) {
		if (err instanceof ListEpisodeSpeciesError
			&& err.failureReason === ListEpisodeSpeciesFailureReason.EPISODE_NOT_FOUND) ctx.status = 404;
	}
});
