import type { CharacterDto } from '~/models/character';

export type RetrieveCharacterResponse = {
	character: CharacterDto | null;
};
