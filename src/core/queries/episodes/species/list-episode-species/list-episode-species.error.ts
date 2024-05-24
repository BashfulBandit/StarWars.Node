export enum ListEpisodeSpeciesFailureReason {
	FAULT = 'Fault',
	EPISODE_NOT_FOUND = 'Episode Not Found'
}

export class ListEpisodeSpeciesError extends Error {
	readonly failureReason: ListEpisodeSpeciesFailureReason;

	private constructor (message?: string, options?: Readonly<ErrorOptions & {
		failureReason: ListEpisodeSpeciesFailureReason;
	}>) {
		super(message, options);
		this.failureReason = options?.failureReason ?? ListEpisodeSpeciesFailureReason.FAULT;
	}

	static fault (message: string, options?: Readonly<ErrorOptions>): ListEpisodeSpeciesError {
		return new ListEpisodeSpeciesError(message, { ...options, failureReason: ListEpisodeSpeciesFailureReason.FAULT });
	}

	static notFound (episodeId: string): ListEpisodeSpeciesError {
		return new ListEpisodeSpeciesError(`Episode not found for ${episodeId}.`, { failureReason: ListEpisodeSpeciesFailureReason.EPISODE_NOT_FOUND });
	}
}
