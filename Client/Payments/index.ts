import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Payments extends List<model.PaymentResponse> {
	protected readonly folder = "payments"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Payments {
		return new Payments(connection)
	}
	async plan(request: model.SuggestionRequest) {
		return await this.connection.post<model.ErrorResponse | model.SuggestionResponse>(`${this.folder}/plan`, request)
	}
	async createSuggestion(request: model.SuggestionRequest) {
		return await this.connection.post<model.ErrorResponse | model.PaymentResponse>(`${this.folder}/suggestion`, request)
	}
	async create(request: model.PaymentRequest) {
		return await this.connection.post<model.ErrorResponse | model.PaymentResponse>(this.folder, request)
	}
	async search(
		request: model.PaymentSearch,
		previous?: Paginated<model.PaymentResponse>,
		page?: number,
		size?: number,
		sort = "createdOn,desc",
		includeCount = true
	) {
		return await this.getNextPaginated(
			previous,
			(page, size, sort, request) =>
				this.connection.post<{ list: model.PaymentResponse[]; totalCount: number } | model.PaymentResponse[]>(
					`${this.folder}/searches`,
					request,
					{ page, size, sort, includeCount }
				),
			request,
			page,
			size,
			sort
		)
	}
}
