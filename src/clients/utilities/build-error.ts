import { SWApiClientError } from '~/clients/errors/swapi.error';
import { SWApiNotFoundError } from '~/clients/errors/notfound.error';

/**
 * An enumeration of possible HTTP error responses from the SW API.
 */
enum ErrorHttpStatuses {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	NOT_FOUND = 404
}

/**
 * Function to take a Response and build a SWApiClientError from the response.
 *
 * @param response - Response
 *
 * @returns Promise<SWApiClientError>
 */
export const buildError = async (response: Response): Promise<SWApiClientError> => {
	const message = await response.text() ? '' : 'Error communicating with the StarWars API.';

	switch (response.status) {
		case ErrorHttpStatuses.NOT_FOUND:
			return new SWApiNotFoundError(message);
		default:
			return new SWApiClientError(message);
	}
};
