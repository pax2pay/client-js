import * as model from "../model"
import { CardResponseV2 } from "../model/CardResponseV2"
import { ErrorResponse } from "../model/ErrorResponse"
import { Connection } from "./Connection"
import { generatePagination } from "./generatePagination"
import { Paginated } from "./Paginated"
import { Resource } from "./Resource"

export abstract class List<
	Response extends { [key: string]: any },
	Search extends { [key: string]: any },
	Request extends { [key: string]: any } = { [key: string]: any },
	T extends Resource<Response, Request> = Resource<Response, Request>
> {
	private DEFAULT_PAGE_SIZE = 20
	#connection: Connection
	protected get connection() {
		return this.#connection
	}
	protected abstract readonly folder: string
	constructor(connection: Connection) {
		this.#connection = connection
	}
	protected abstract createResource(response: Response): T
	protected map(response: Response): T & Response {
		return Object.assign(this.createResource(response), response)
	}
	protected convert<S extends model.ErrorResponse & { status: number }>(result: Response | S): (T & Response) | S
	protected convert<S extends model.ErrorResponse & { status: number }>(result: Response[] | S): (T & Response)[] | S
	protected convert<S extends model.ErrorResponse & { status: number }>(
		result: Response[] | Response | S
	): (T & Response)[] | (T & Response) | S {
		return Array.isArray(result) ? result.map(r => this.map(r)) : Connection.isError(result) ? result : this.map(result)
	}
	async list(page = 0, size = 20, sort: model.Sorting<Response>[] = []) {
		return this.convert(await this.connection.get<Response[]>(`${this.folder}${generatePagination(page, size, sort)}`))
	}
	async search(pattern: Search | string, page = 0, size = 20, sort: model.Sorting<Response>[] = []) {
		return this.convert(
			await (typeof pattern == "string"
				? this.connection.get<Response[]>(`${this.folder}/searches/${pattern}${generatePagination(page, size, sort)}`)
				: this.connection.post<Response[]>(`${this.folder}/searches${generatePagination(page, size, sort)}`, pattern))
		)
	}
	async getNextPaginated<R>(
		previous: Paginated<R> | undefined,
		callback: (page: number, size: number) => Promise<model.ErrorResponse | { list: R[]; totalCount: number }>
	) {
		let page, size, result
		if (previous) {
			if (!previous.hasNextPage()) {
				return new Paginated([], previous.totalCount, previous.page, previous.size)
			}

			page = previous.nextPage()
			size = previous.size
		} else {
			page = 0
			size = this.DEFAULT_PAGE_SIZE
		}

		const response = await callback(page, size)
		if (ErrorResponse.is(response)) {
			result = response
		} else {
			const totalCount = response.totalCount

			result = new Paginated(response.list, totalCount, page, size)
		}
		return result
	}
}
