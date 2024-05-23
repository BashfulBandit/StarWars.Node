export enum CalculatePopulationFailureReason {
	FAULT = 'Fault'
}

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
