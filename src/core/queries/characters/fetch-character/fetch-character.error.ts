export enum FetchCharacterFailureReason {
	FAULT = 'Fault',
	CHARACTER_NOT_FOUND = 'Character Not Found'
}

export class FetchCharacterError extends Error {
	readonly failureReason: FetchCharacterFailureReason;

	constructor (message?: string, options?: Readonly<ErrorOptions & {
		failureReason: FetchCharacterFailureReason;
	}>) {
		super(message, options);
		this.failureReason = options?.failureReason ?? FetchCharacterFailureReason.FAULT;
	}

	static fault (message?: string, options?: Readonly<ErrorOptions>): FetchCharacterError {
		return new FetchCharacterError(message, { ...options, failureReason: FetchCharacterFailureReason.FAULT });
	}

	static notFound (characterId: string): FetchCharacterError {
		return new FetchCharacterError(`Character not found for ${characterId}.`, { failureReason: FetchCharacterFailureReason.CHARACTER_NOT_FOUND });
	}
}
