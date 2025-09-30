import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Merchants extends List<model.MerchantResponse> {
	protected readonly folder = "merchants"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Merchants {
		return new Merchants(connection)
	}
	async create(request: model.MerchantRequest) {
		return await this.connection.post<model.MerchantResponse>(this.folder, request)
	}
	async delete(merchantId: string) {
		return await this.connection.remove<model.MerchantResponse>(`${this.folder}/${merchantId}`)
	}
	async update(merchantId: string, request: model.UpdateMerchantRequest) {
		return await this.connection.put<model.MerchantResponse>(`${this.folder}/${merchantId}`, request)
	}
	async searchByName(searchString: string) {
		const response = await this.connection.get<model.ErrorResponse | model.MerchantResponse[]>(
			`${this.folder}/searches/${searchString}`,
			{
				page: 0,
				size: 1500,
			}
		)
		return this.extractResponse(response)
	}
	async getMerchant(value: string) {
		return await this.connection.get<model.ErrorResponse | model.MerchantResponse>(`${this.folder}/${value}`)
	}
	async searchPaginated(
		request: model.MerchantSearchRequest,
		previous?: Paginated<model.MerchantResponse>,
		page?: number,
		size?: number,
		sort = "name",
		organisationCode?: string
	): Promise<model.ErrorResponse | Paginated<model.MerchantResponse>> {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.getNextPaginated(
			previous,
			(page, size, sort, request) =>
				this.connection.post<{ list: model.MerchantResponse[]; totalCount: number }>(
					`${this.folder}/searches`,
					request,
					{ page, size, sort },
					header
				),
			request,
			page,
			size,
			sort
		)
	}
	async getAll(organisationCode?: string, sort = "name") {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		const response = await this.connection.get<model.ErrorResponse | model.MerchantResponse[]>(
			this.folder,
			{
				page: 0,
				size: 5000,
				sort,
			},
			header
		)
		return this.extractResponse(response)
	}
}
