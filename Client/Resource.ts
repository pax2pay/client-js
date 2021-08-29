import { Connection } from "./Connection"

export class Resource<Response, Request> {
	#connection: Connection
	protected get connection() {
		return this.#connection
	}
	#backend: Response
	protected get backend() {
		return this.#backend
	}
	constructor(connection: Connection, protected readonly folder: string, backend: Response) {
		this.#connection = connection
		this.#backend = backend
	}
	reload() {
		return this.connection.get<Response>(`${this.folder}`)
	}
	update(request: Request) {
		return this.connection.put<Response>(`${this.folder}`, request)
	}
	remove() {
		return this.connection.remove<Response>(`${this.folder}`)
	}
}
