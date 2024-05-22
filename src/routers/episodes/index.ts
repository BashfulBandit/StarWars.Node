import { episodeSpeciesRouter } from '~/routers/episodes/species';
import { listEpisodesRouter } from '~/routers/episodes/list';
import { retrieveEpisodeRouter } from '~/routers/episodes/retrieve';
import Router from '@koa/router';

export const episodesRouter = new Router({
	prefix: '/episodes'
})
	.use(retrieveEpisodeRouter.routes())
	.use(listEpisodesRouter.routes())
	.use(episodeSpeciesRouter.routes());
