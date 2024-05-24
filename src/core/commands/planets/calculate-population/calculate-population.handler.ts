import type { CalculatePopulation } from '~/core/commands/planets/calculate-population/calculate-population.command';
import { CalculatePopulationError } from '~/core/commands/planets/calculate-population/calculate-population.error';
import { CalculatePopulationResult } from '~/core/commands/planets/calculate-population/calculate-population.result';
import type { CommandHandler } from '~/core/commands/command.handler';
import { planetsStore } from '~/core/stores/planets.store';

export type CalculatePopulationHandler = CommandHandler<CalculatePopulation, CalculatePopulationResult>;

export const calculatePopulationHandler = async (): Promise<CalculatePopulationResult> => {
	try {
		const page = await planetsStore.list({
			page: 1,
			pageSize: Number.MAX_SAFE_INTEGER
		});

		const galacticPopulation = page.items
			.filter(({ population }) => !isNaN(population))
			.map(({ population }) => Number(population))
			.reduce((sum, population) => sum + population);

		return CalculatePopulationResult.success(galacticPopulation);
	} catch (err) {
		return CalculatePopulationResult.failure(CalculatePopulationError.fault('Failed to calculate population.', { cause: err }));
	}
};
