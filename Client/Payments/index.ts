import * as model from "../../model"
import { Connection } from "../Connection"

export class Payments {
	protected folder = "payments"
	#connection: Connection
	protected get connection() {
		return this.#connection
	}
	constructor(connection: Connection) {
		this.#connection = connection
	}
	static create(connection: Connection): Payments {
		return new Payments(connection)
	}
	async plan(request: model.SuggestionRequest) {
		return await this.connection.post<model.ErrorResponse | model.SuggestionResponse>(`${this.folder}/plan`, request)
	}
	async create(request: model.SuggestionRequest) {
		return await this.connection.post<model.ErrorResponse | model.PaymentResponse>(this.folder, request)
	}
}
