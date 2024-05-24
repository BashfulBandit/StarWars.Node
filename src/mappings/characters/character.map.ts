import type { Character } from '~/core/models/character';
import type { CharacterDto } from '~/models/character';

export const toDto = (model: Readonly<Character>): CharacterDto => ({
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
