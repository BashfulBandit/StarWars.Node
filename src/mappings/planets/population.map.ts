import type { CalculatePopulationResult } from '~/core/commands/planets/calculate-population/calculate-population.result';
import type { GetPopulationResponse } from '~/responses/planets/population.response';

/**
 * Function to map a CalculatePopulationResult to a GetPopulationResponse.
 *
 * @param result - CalculatePopulationResult
 *
 * @returns GetPopulationResponse
 */
export const toResponse = (result: CalculatePopulationResult): GetPopulationResponse => ({
	population: result.population ?? 0
});
