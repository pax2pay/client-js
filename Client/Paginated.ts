export class Paginated<T> {
	constructor(readonly data: T[], readonly totalCount: number, readonly page: number, readonly size: number) {}
	nextPage(): number {
		return this.page + 1
	}

	hasNextPage(): boolean {
		return this.nextPage() * this.size < this.totalCount
	}
}
