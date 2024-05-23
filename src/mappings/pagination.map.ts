/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { Page } from '~/core/models/page';
import type { PaginationDto } from '~/models/pagination';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const toDto = (page: Page<unknown> | null): PaginationDto => ({
	hasNext: page?.hasNext ?? false,
	hasPrevious: page?.hasPrevious ?? false,
	pageCount: page?.pageCount ?? 0,
	pageNumber: page?.pageNumber ?? 1,
	pageSize: page?.pageSize ?? 25,
	totalCount: page?.totalCount ?? 0
});
