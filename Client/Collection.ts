import { Connection } from "./Connection"
import { List } from "./List"

export abstract class Collection<
	Response extends { [key: string]: any },
	Search extends { [key: string]: any },
	Request extends { [key: string]: any }
> extends List<Response, Search> {
	constructor(connection: Connection) {
		super(connection)
	}
	async fetch(resource?: string) {
		return this.convert(await this.connection.get<Response>(`${this.folder}/${resource}`))
	}
	async create(request: Request) {
		return this.convert(await this.connection.post<Response>(this.folder, request))
	}
}
