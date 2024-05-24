/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Species } from '~/core/models/species';
import type { SpeciesDto } from '~/models/species';

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
