import type { PageResponse } from '~/clients/responses/page.response';
import type { Person } from '~/clients/models/person';

/**
 * Describes a successful response to retrieve a list of People.
 *
 * @public
 */
export type ListPeopleResponse = PageResponse<Person>;
