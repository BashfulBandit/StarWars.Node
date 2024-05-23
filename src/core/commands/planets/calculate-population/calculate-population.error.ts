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
}
