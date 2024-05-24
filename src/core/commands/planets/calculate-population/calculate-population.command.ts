import type { CalculatePopulationResult } from '~/core/commands/planets/calculate-population/calculate-population.result';
import type { Command } from '~/core/commands/command';

/**
 * Describes a command for starting a process to calculate the known Star Wars universe.
 */
export type CalculatePopulation = Command<unknown, CalculatePopulationResult>;
