import type { PageRequest } from '~/requests/page.request';

export type ListCharacterStarshipsRequest = PageRequest & {
	characterId: string;
};
