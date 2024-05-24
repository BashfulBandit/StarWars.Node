import type { FetchCharacter } from '~/core/queries/characters/fetch-character/fetch-character.query';
import type { FetchCharacterResult } from '~/core/queries/characters/fetch-character/fetch-character.result';
import type { RetrieveCharacterResponse } from '~/responses/characters/retrieve.response';
import type { RouterContext } from '@koa/router';
import { toDto } from '~/mappings/characters/character.map';

/**
 * Function to map a Koa.RouterContext to a FetchCharacter query.
 *
 * @param ctx - RouterContext
 *
 * @returns FetchCharacter
 */
export const toQuery = (ctx: RouterContext): FetchCharacter => ({
	characterId: ctx.params.characterId
});

/**
 * Function to mape a FetchCharacterResult to a RetrieveCharacterResponse.
 *
 * @param result - FetchCharacterResult
 *
 * @returns RetrieveCharacterResponse
 */
export const toResponse = (result: FetchCharacterResult): RetrieveCharacterResponse => ({
	character: result.character ? toDto(result.character) : null
});
