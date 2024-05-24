/**
 * Enumeration for failure reasons from handling a command to calculate the known Star Wars universe.
 */
export enum CalculatePopulationFailureReason {
	FAULT = 'Fault'
}

/**
 * Describes an error returned from the calculating of the known Star Wars universe.
 */
export class CalculatePopulationError extends Error {
	readonly failureReason: CalculatePopulationFailureReason;

	constructor (message?: string, options?: Readonly<ErrorOptions & {
		failureReason: CalculatePopulationFailureReason;
	}>) {
		super(message, options);
		this.failureReason = options?.failureReason ?? CalculatePopulationFailureReason.FAULT;
	}

	static fault (message: string, options?: Readonly<ErrorOptions>): CalculatePopulationError {
		return new CalculatePopulationError(message, { ...options, failureReason: CalculatePopulationFailureReason.FAULT });
	}
}
