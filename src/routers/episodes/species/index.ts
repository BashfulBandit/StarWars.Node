import { listEpisodeSpeciesRouter } from '~/routers/episodes/species/list';
import Router from '@koa/router';

export const episodeSpeciesRouter = new Router({
	prefix: '/:episodeId/species'
})
	.use(listEpisodeSpeciesRouter.routes());
