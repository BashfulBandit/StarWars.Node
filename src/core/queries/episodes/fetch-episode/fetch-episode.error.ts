export enum FetchEpisodeFailureReason {
	FAULT = 'Fault',
	EPISODE_NOT_FOUND = 'Episode Not Found'
}

export class FetchEpisodeError extends Error {
	readonly failureReason: FetchEpisodeFailureReason;

	private constructor (message?: string, options?: Readonly<ErrorOptions & {
		failureReason: FetchEpisodeFailureReason;
	}>) {
		super(message, options);
		this.failureReason = options?.failureReason ?? FetchEpisodeFailureReason.FAULT;
	}

	static fault (message?: string, options?: Readonly<ErrorOptions>): FetchEpisodeError {
		return new FetchEpisodeError(message, { ...options, failureReason: FetchEpisodeFailureReason.FAULT });
	}

	static notFound (episodeId: string): FetchEpisodeError {
		return new FetchEpisodeError(`Episode not found for ${episodeId}.`, { failureReason: FetchEpisodeFailureReason.EPISODE_NOT_FOUND });
	}
}
