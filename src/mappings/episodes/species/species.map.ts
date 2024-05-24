import type { Species } from '~/core/models/species';
import type { SpeciesDto } from '~/models/species';

/**
 * Function to map a Species to a SpeciesDto.
 *
 * @param model - Species
 *
 * @returns SpeciesDto
 */
export const toDto = (model: Species): SpeciesDto => ({
	averageHeight: model.averageHeight,
	averageLifespan: model.averageLifespan,
	classification: model.classification,
	createdAt: model.createdAt,
	designation: model.designation,
	eyeColors: model.eyeColors,
	hairColors: model.hairColors,
	id: model.id,
	language: model.language,
	name: model.name,
	skinColors: model.skinColors,
	updatedAt: model.updatedAt
});
