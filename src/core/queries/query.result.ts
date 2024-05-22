export class QueryResult {
	succeeded: boolean;
	error?: Error;

	constructor (succeeded: boolean, error?: Readonly<Error>) {
		this.succeeded = succeeded;
		this.error = error;
	}
}
