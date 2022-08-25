export class Paginated<T> {
	constructor(
		readonly data: T[],
		readonly totalCount: number | undefined,
		readonly page: number,
		readonly size: number
	) {}
	nextPage(): number {
		return this.page + 1
	}

	hasNextPage(): boolean | undefined {
		return this.totalCount ? this.nextPage() * this.size < this.totalCount : undefined
	}
}
