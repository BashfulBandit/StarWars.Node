import type { PageResponse } from '~/clients/responses/page.response';
import type { Planet } from '~/clients/models/planet';

export type ListPlanetsResponse = PageResponse<Planet>;
