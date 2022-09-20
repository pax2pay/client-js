import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Transfer } from "../Transfer"

export class Transfers extends List<model.TransferResponse, model.TransferSearch, model.TransferRequest> {
	protected folder = "transfers"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Transfers {
		return new Transfers(connection)
	}
	protected getResourcePath(resource: model.TransferResponse): string {
		return [this.folder, resource.providerCode, resource.providerTransferId].join("/")
	}
	protected createResource(response: model.TransferResponse): Transfer {
		return new Transfer(
			this.connection,
			[this.folder, response.providerCode, response.providerTransferId].join("/"),
			response
		)
	}
	async getAll(): Promise<model.ErrorResponse | model.TransferResponse[]>
	async getAll(
		withCount: boolean
	): Promise<model.ErrorResponse | model.TransferResponse[] | { list: model.TransferResponse[]; totalCount: number }>
	async getAll(
		withCount?: boolean
	): Promise<model.ErrorResponse | model.TransferResponse[] | { list: model.TransferResponse[]; totalCount: number }> {
		let result
		result = await this.connection.get<{ list: model.TransferResponse[]; totalCount: number }>(`${this.folder}`)
		if (!model.ErrorResponse.is(result) && !withCount)
			result = result.list
		return result
	}
	async getTransfer(provider: model.ProviderCode, transferId: string) {
		return await this.connection.get<model.TransferResponse>([this.folder, provider, transferId].join("/"))
	}
	protected map(response: model.TransferResponse): Transfer & model.TransferResponse {
		return Object.assign(new Transfer(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.TransferRequest) {
		const result = await this.connection.post<model.TransferResponse>(`${this.folder}`, request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
}
