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
	async search(
		searchRequest: model.PaymentSearchRequest,
		parameters?: model.PaymentSearchRequest.Parameters
	): Promise<model.ErrorResponse | model.CardResponseV2[]> {
		const response = await this.connection.post<{ list: model.CardResponseV2[]; totalCount: number }>(
			`v2/${this.folder}/searches`,
			searchRequest,
			parameters
		)
		return this.extractResponse<model.CardResponseV2>(response)
	}
	extractResponse<R = Response>(value: R[] | { list: R[]; totalCount: number } | model.ErrorResponse) {
		if (!model.ErrorResponse.is(value) && "list" in value)
			return value.list
		else
			return value
	}
}
