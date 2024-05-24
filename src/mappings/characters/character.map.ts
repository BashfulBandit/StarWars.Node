import type { Character } from '~/core/models/character';
import type { CharacterDto } from '~/models/character';

/**
 * Function to map a Character to a CharacterDto.
 *
 * @param model - Character
 *
 * @returns - CharacterDto
 */
export const toDto = (model: Character): CharacterDto => ({
	birthYear: model.birthYear,
	createdAt: model.createdAt,
	eyeColor: model.eyeColor,
	gender: model.gender,
	hairColor: model.hairColor,
	height: model.height,
	id: model.id,
	mass: model.mass,
	name: model.name,
	skinColor: model.skinColor,
	updatedAt: model.updatedAt
});
