import { CommandResult } from '~/core/commands/command.result';

/**
 * Describes the result of processing a command to calculate the population of the known Star Wars universe.
 */
export class CalculatePopulationResult extends CommandResult {
	readonly population: number | null;

	constructor (
		population: Readonly<number> | null,
		error?: Readonly<Error>
	) {
		if (error) {
			super(false, error);
			this.population = null;
		} else {
			super(true, new Error());
			this.population = population;
		}
	}

	static failure (error: Readonly<Error>): CalculatePopulationResult {
		return new CalculatePopulationResult(null, error);
	}

	static success (population: number): CalculatePopulationResult {
		return new CalculatePopulationResult(population);
	}
}
