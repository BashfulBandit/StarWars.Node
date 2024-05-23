export enum ListEpisodesFailureReason {
	FAULT = 'Fault'
}

export class ListEpisodesError extends Error {
	readonly failureReason: ListEpisodesFailureReason;

	private constructor (message?: string, options?: Readonly<ErrorOptions & {
		failureReason: ListEpisodesFailureReason;
	}>) {
		super(message, options);
		this.failureReason = options?.failureReason ?? ListEpisodesFailureReason.FAULT;
	}

	static fault (message: string, options?: Readonly<ErrorOptions>): ListEpisodesError {
		return new ListEpisodesError(message, { ...options, failureReason: ListEpisodesFailureReason.FAULT });
	}
}
