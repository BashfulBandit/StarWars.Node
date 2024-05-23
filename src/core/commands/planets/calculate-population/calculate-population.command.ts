import type { CalculatePopulationResult } from '~/core/commands/planets/calculate-population/calculate-population.result';
import type { Command } from '~/core/commands/command';

export type CalculatePopulation = Command<unknown, CalculatePopulationResult>;
