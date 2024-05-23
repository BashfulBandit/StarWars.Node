import { SWApiClientError } from '~/clients/errors/swapi.error';
import { SWApiNotFoundError } from '~/clients/errors/notfound.error';

enum ErrorHttpStatuses {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	NOT_FOUND = 404
}

export const buildException = async (response: Response): Promise<SWApiClientError> => {
	const message = await response.text() ? '' : 'Error communicating with the StarWars API.';

	switch (response.status) {
		case ErrorHttpStatuses.NOT_FOUND:
			return new SWApiNotFoundError(message);
		default:
			return new SWApiClientError(message);
	}
};
