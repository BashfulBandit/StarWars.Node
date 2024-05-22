import type { QueryResult } from '~/core/queries/query.result';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Query <T, TQueryResult extends QueryResult> = {
	[K in keyof T]: T[K];
};
