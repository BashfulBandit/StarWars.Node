import type { Episode } from '~/core/models/episode';
import type { EpisodeDto } from '~/models/episode';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
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
