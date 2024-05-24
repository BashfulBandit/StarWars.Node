export enum ListCharacterStarshipsFailureReason {
	FAULT = 'Fault',
	CHARACTER_NOT_FOUND = 'Character Not Found'
}

export class ListCharacterStarshipsError extends Error {
	readonly failureReason: ListCharacterStarshipsFailureReason;

	private constructor (message?: string, options?: Readonly<ErrorOptions & {
		failureReason: ListCharacterStarshipsFailureReason;
	}>) {
		super(message, options);
		this.failureReason = options?.failureReason ?? ListCharacterStarshipsFailureReason.FAULT;
	}

	static fault (message: string, options?: Readonly<ErrorOptions>): ListCharacterStarshipsError {
		return new ListCharacterStarshipsError(message, {
			...options, failureReason: ListCharacterStarshipsFailureReason.FAULT
		});
	}

	static notFound (characterId: string): ListCharacterStarshipsError {
		return new ListCharacterStarshipsError(`Character not found for ${characterId}.`, { failureReason: ListCharacterStarshipsFailureReason.CHARACTER_NOT_FOUND });
	}
}
