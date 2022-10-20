import * as model from "../model"
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
		callback: (
			page: number,
			size: number,
			sort?: string,
			providerCode?: model.ProviderCode,
			includeCount?: boolean,
			request?: Record<string, any>
		) => Promise<model.ErrorResponse | { list: R[]; totalCount: number } | R[]>,
		request?: Record<string, any>,
		chosenPage?: number,
		chosenSize?: number,
		chosenSort?: string,
		chosenProvider?: model.ProviderCode,
		chosenIncludeCount?: boolean
	) {
		const sort = chosenSort
		const provider = chosenProvider
		const includeCount = chosenIncludeCount
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
			size = size ?? 20
		}

		const response = await callback(page, size, sort, provider, includeCount, request)
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

	extractResponse<R>(value: R[] | { list: R[]; totalCount: number } | model.ErrorResponse) {
		if (!model.ErrorResponse.is(value) && "list" in value)
			return value.list
		else
			return value
	}
}
