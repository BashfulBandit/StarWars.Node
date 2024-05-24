import type { PageResponse } from '~/clients/responses/page.response';
import type { Species } from '~/clients/models/species';

export type ListSpeciesResponse = PageResponse<Species>;
