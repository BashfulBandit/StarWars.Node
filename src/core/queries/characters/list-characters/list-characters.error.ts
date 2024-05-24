export enum ListCharactersFailureReason {
	FAULT = 'Fault'
}

export class ListCharactersError extends Error {
	readonly failureReason: ListCharactersFailureReason;

	private constructor (message?: string, options?: Readonly<ErrorOptions & {
		failureReason: ListCharactersFailureReason;
	}>) {
		super(message, options);
		this.failureReason = options?.failureReason ?? ListCharactersFailureReason.FAULT;
	}

	static fault (message: string, options?: Readonly<ErrorOptions>): ListCharactersError {
		return new ListCharactersError(message, { ...options, failureReason: ListCharactersFailureReason.FAULT });
	}
}
