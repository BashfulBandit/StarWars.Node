import type { Starship } from '~/core/models/starship';
import type { StarshipDto } from '~/models/starship';

/**
 * Function to map a Starship to a StarshipDto.
 *
 * @param model - Starship
 *
 * @returns StarshipDto
 */
export const toDto = (model: Starship): StarshipDto => ({
	MGLT: model.MGLT,
	cargoCapacity: model.cargoCapacity,
	consumables: model.consumables,
	costInCredits: model.costInCredits,
	createdAt: model.createdAt,
	crew: model.crew,
	hyperdriveRating: model.hyperdriveRating,
	id: model.id,
	length: model.length,
	manufacturers: model.manufacturers,
	maxAtomispheringSpeed: model.maxAtomispheringSpeed,
	model: model.model,
	name: model.name,
	passengers: model.passengers,
	starshipClass: model.starshipClass,
	updatedAt: model.updatedAt
});
