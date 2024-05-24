import type { CalculatePopulationResult } from '~/core/commands/planets/calculate-population/calculate-population.result';
import type { GetPopulationResponse } from '~/responses/planets/population.response';

export const toResponse = (result: CalculatePopulationResult): GetPopulationResponse => ({
	population: result.population ?? 0
});
