/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { FetchCharacter } from '~/core/queries/characters/fetch-character/fetch-character.query';
import type { FetchCharacterResult } from '~/core/queries/characters/fetch-character/fetch-character.result';
import type { RetrieveCharacterResponse } from '~/responses/characters/retrieve.response';
import type { RouterContext } from '@koa/router';
import { toDto } from '~/mappings/characters/character.map';

export const toQuery = (ctx: RouterContext): FetchCharacter => ({
	characterId: ctx.params.characterId
});

export const toResponse = (result: FetchCharacterResult): RetrieveCharacterResponse => ({
	character: result.character ? toDto(result.character) : null
});
