import * as model from "../model"
import { Connection } from "./Connection"
import { Paginated } from "./Paginated"

export abstract class List<Response extends { [key: string]: any }> {
	private DEFAULT_PAGE_SIZE = 20
	#connection: Connection
	protected get connection() {
		return this.#connection
	}
	protected abstract readonly folder: string
	constructor(connection: Connection) {
		this.#connection = connection
	}
	async getNextPaginated<R = Response>(
		previous: Paginated<R> | undefined,
		callback: (
			page: number,
			size: number,
			sort?: string,
			request?: Record<string, any>
		) => Promise<model.ErrorResponse | { list: R[]; totalCount: number } | R[]>,
		request?: Record<string, any>,
		chosenPage?: number,
		chosenSize?: number,
		chosenSort?: string
	) {
		const sort = chosenSort
		let page = chosenPage
		let size = chosenSize
		let result
		if (previous) {
			if (previous.hasNextPage() == false) {
				return new Paginated([], previous.totalCount, previous.page, previous.size, true)
			}

			page = previous.nextPage()
			size = previous.size
		} else {
			page = page ?? 0
			size = size ?? this.DEFAULT_PAGE_SIZE
		}

		const response = await callback(page, size, sort, request)
		if (model.ErrorResponse.is(response)) {
			result = response
		} else {
			let totalCount = -1
			let list: R[]
			if (!Array.isArray(response)) {
				list = response.list
				totalCount = response.totalCount
			} else {
				list = response
			}

			result = new Paginated(list, totalCount, page, size, list.length < size)
		}
		return result
	}

	extractResponse<R = Response>(value: R[] | { list: R[]; totalCount: number } | model.ErrorResponse) {
		if (!model.ErrorResponse.is(value) && "list" in value)
			return value.list
		else
			return value
	}
}
