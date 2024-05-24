/**
 * Describes a base result from processing a CQRS Command.
 */
export abstract class CommandResult {
	succeeded: boolean;
	error: Error;

	constructor (
		succeeded: boolean,
		error: Readonly<Error>
	) {
		this.succeeded = succeeded;
		this.error = error;
	}
}
