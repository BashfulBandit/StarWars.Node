import type { Episode } from '~/core/models/episode';
import type { EpisodeDto } from '~/models/episode';

/**
 * Function to map a Episode to a EpisodeDto.
 *
 * @param model - Episode
 *
 * @returns EpisodeDto
 */
export const toDto = (model: Episode): EpisodeDto => ({
	createdAt: model.createdAt,
	director: model.director,
	id: model.id,
	openingCrawl: model.openingCrawl,
	producer: model.producer,
	releaseDate: model.releaseDate,
	releaseOrder: model.releaseOrder,
	title: model.title,
	updatedAt: model.updatedAt
});
