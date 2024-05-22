import { listEpisodeSpeciesRouter } from './list';
import Router from '@koa/router';

export const episodeSpeciesRouter = new Router({
	prefix: '/:episode/species'
})
	.use(listEpisodeSpeciesRouter.routes());
