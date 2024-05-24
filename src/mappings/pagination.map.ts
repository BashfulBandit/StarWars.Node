import type { Page } from '~/core/models/page';
import type { PaginationDto } from '~/models/pagination';
import {
	DEFAULT_PAGE_COUNT,
	DEFAULT_PAGE_NUMBER,
	DEFAULT_PAGE_SIZE,
	DEFAULT_TOTAL_COUNT
} from '~globals/constants';

export const toDto = (page: Page<unknown> | null): PaginationDto => ({
	hasNext: page?.hasNext ?? false,
	hasPrevious: page?.hasPrevious ?? false,
	pageCount: page?.pageCount ?? DEFAULT_PAGE_COUNT,
	pageNumber: page?.pageNumber ?? DEFAULT_PAGE_NUMBER,
	pageSize: page?.pageSize ?? DEFAULT_PAGE_SIZE,
	totalCount: page?.totalCount ?? DEFAULT_TOTAL_COUNT
});
