import type { CalculatePopulation } from '~/core/commands/planets/calculate-population/calculate-population.command';
import { CalculatePopulationResult } from '~/core/commands/planets/calculate-population/calculate-population.result';

export const calculatePopulationHandler = (
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	command: Readonly<CalculatePopulation>
): CalculatePopulationResult => CalculatePopulationResult.success(1);
