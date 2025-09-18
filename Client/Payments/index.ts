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
	async createWithRemittanceAdvice(request: model.PaymentRequest, file: File) {
		const formData = new FormData()
		formData.append("attachment", file, file?.name)
		formData.append(
			"request",
			new Blob([JSON.stringify(request, null, 2)], {
				type: "application/json",
			})
		)
		return await this.connection.post<model.PaymentResponse>(this.folder, formData)
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
	async freeze(id: string) {
		return await this.connection.get<model.PaymentResponse>(`${this.folder}/${id}/freeze`)
	}
	async thaw(id: string) {
		return await this.connection.get<model.PaymentResponse>(`${this.folder}/${id}/thaw`)
	}
	async approve(id: string) {
		return await this.connection.get<model.PaymentResponse>(`${this.folder}/${id}/approve`)
	}
	async decline(id: string) {
		return await this.connection.get<model.PaymentResponse>(`${this.folder}/${id}/decline`)
	}
	async generate(id: string) {
		return await this.connection.get<model.PaymentResponse>(`${this.folder}/${id}/generate`)
	}
	async generateTokenised(id: string) {
		return await this.connection.get<model.PaymentResponse>(`${this.folder}/${id}/generate/tokenised`)
	}
	async cancel(id: string) {
		return await this.connection.remove<model.PaymentResponse>(`${this.folder}/${id}`)
	}
	async editAmount(id: string, request: model.EditPaymentAmountRequest) {
		return await this.connection.put<model.PaymentResponse>(`${this.folder}/${id}/amount`, request)
	}
	async editCloseDate(id: string, request: model.EditPaymentCloseDateRequest) {
		return await this.connection.put<model.PaymentResponse>(`${this.folder}/${id}/close-date`, request)
	}
	async deleteCloseDate(id: string) {
		return await this.connection.remove<model.PaymentResponse>(`${this.folder}/${id}/close-date`)
	}
	async editSchedule(id: string, request: model.EditPaymentScheduleRequest) {
		return await this.connection.put<model.PaymentResponse>(`${this.folder}/${id}/schedule`, request)
	}
	async editMetadata(id: string, request: model.EditPaymentMetadataRequest) {
		return await this.connection.put<model.PaymentResponse>(`${this.folder}/${id}/meta`, request)
	}
	async downloadReceipt(id: string) {
		return await this.connection.get<model.DownloadableResponse>(`${this.folder}/${id}/download`)
	}
}
