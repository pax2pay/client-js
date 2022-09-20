export class Paginated<T> {
	constructor(
		readonly data: T[],
		readonly totalCount: number | undefined,
		readonly page: number,
		readonly size: number,
		readonly endReached: boolean
	) {}
	nextPage(): number {
		return this.page + 1
	}

	hasNextPage(): boolean {
		return this.endReached || (!this.totalCount ? this.endReached : this.nextPage() * this.size < this.totalCount)
	}
}
