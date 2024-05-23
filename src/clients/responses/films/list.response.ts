import type { Film } from '~/clients/models/film';
import type { PageResponse } from '~/clients/responses/page.response';

export type ListFilmsResponse = PageResponse<Film>;
