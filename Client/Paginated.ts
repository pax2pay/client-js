/**
 * Class for handling pagination, one instance represents a page of the List/Collection.
 * Can be used in combination with List#getNextPaginated
 *
 * data - list representing current page's data
 * totalCount - the total amount of rows available in the List/Collection
 * page - current page
 * size - current size
 * endReached - indicator whether there is no more data
 */
export class Paginated<T> {
	constructor(
		readonly data: T[],
		readonly totalCount: number,
		readonly page: number,
		readonly size: number,
		readonly endReached: boolean
	) {}
	nextPage(): number {
		return this.page + 1
	}

	hasNextPage(): boolean {
		return !this.endReached
	}

	isTotalCountKnown(): boolean {
		return this.totalCount >= 0
	}
}
