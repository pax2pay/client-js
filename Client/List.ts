import * as model from "../model"
import { Connection } from "./Connection"
import { generatePagination } from "./generatePagination"
import { Resource } from "./Resource"

export abstract class List<
	Response extends { [key: string]: any },
	Search extends { [key: string]: any },
	Request extends { [key: string]: any } = { [key: string]: any },
	T extends Resource<Response, Request> = Resource<Response, Request>
> {
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
}
