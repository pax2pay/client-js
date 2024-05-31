import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Merchants extends List<model.MerchantResponse> {
	protected folder = "merchants" as const
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Merchants {
		return new Merchants(connection)
	}
	async create(request: model.MerchantRequest) {
		return await this.connection.post<model.MerchantResponse>(this.folder, request)
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
	async searchPaginated(
		request: model.MerchantSearchRequest,
		previous?: Paginated<model.MerchantResponse>,
		page?: number,
		size?: number,
		sort = "name"
	): Promise<model.ErrorResponse | Paginated<model.MerchantResponse>> {
		return await this.getNextPaginated(
			previous,
			(page, size, sort, request) =>
				this.connection.post<{ list: model.MerchantResponse[]; totalCount: number }>(
					`${this.folder}/searches`,
					request,
					{ page, size, sort }
				),
			request,
			page,
			size,
			sort
		)
	}
	async getAll() {
		const response = await this.connection.get<model.ErrorResponse | model.MerchantResponse[]>(this.folder, {
			page: 0,
			size: 5000,
		})
		return this.extractResponse(response)
	}
}
