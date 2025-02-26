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
	async create(request: model.PaymentRequest) {
		return await this.connection.post<model.ErrorResponse | model.PaymentResponse>(this.folder, request)
	}
	async createTokenised(request: model.PaymentRequest) {
		return await this.connection.post<model.ErrorResponse | model.PaymentResponse>(`${this.folder}/tokenised`, request)
	}
	async get(id: string) {
		return await this.connection.get<model.PaymentResponse>(`${this.folder}/${id}`)
	}
	async search(
		request: model.PaymentSearch,
		previous?: Paginated<model.SummaryPaymentResponse>,
		page?: number,
		size?: number,
		sort = "createdOn,desc",
		includeCount = true
	) {
		return await this.getNextPaginated(
			previous,
			(page, size, sort, request) =>
				this.connection.post<
					{ list: model.SummaryPaymentResponse[]; totalCount: number } | model.SummaryPaymentResponse[]
				>(`${this.folder}/searches`, request, { page, size, sort, includeCount }),
			request,
			page,
			size,
			sort
		)
	}
}
