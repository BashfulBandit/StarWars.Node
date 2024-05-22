import type { Query } from '~/core/queries/query';
import type { QueryResult } from '~/core/queries/query.result';

export type QueryHandler <
	TQuery extends Query<unknown, TQueryResult>,
	TQueryResult extends QueryResult
> = (query: Readonly<TQuery>) => Promise<TQueryResult> | TQueryResult;
