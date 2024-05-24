import type { CharacterDto } from '~/models/character';
import type { PageResponse } from '~/responses/page.response';

export type ListCharactersResponse = PageResponse & {
	characters: CharacterDto[];
};
