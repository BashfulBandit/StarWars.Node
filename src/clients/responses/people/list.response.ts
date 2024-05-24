import type { PageResponse } from '~/clients/responses/page.response';
import type { Person } from '~/clients/models/person';

export type ListPeopleResponse = PageResponse<Person>;
