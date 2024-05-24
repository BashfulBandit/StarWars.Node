import { listEpisodeSpeciesRouter } from './list';
import Router from '@koa/router';

export const episodeSpeciesRouter = new Router({
	prefix: '/:episodeId/species'
})
	.use(listEpisodeSpeciesRouter.routes());
