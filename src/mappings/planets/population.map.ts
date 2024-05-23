import type { CalculatePopulationResult } from '~/core/commands/planets/calculate-population/calculate-population.result';
import type { GetPopulationResponse } from '~/responses/planets/population.response';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const toResponse = (result: CalculatePopulationResult): GetPopulationResponse => ({
	population: result.population ?? 0
});
