import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Transfer } from "../Transfer"

export class Transfers extends List<
	model.Transfer.TransferResponse,
	model.Transfer.TransferSearch,
	model.Transfer.TransferRequest
> {
	protected folder = "transfers"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Transfers {
		return new Transfers(connection)
	}
	protected getResourcePath(resource: model.Transfer.TransferResponse): string {
		return [this.folder, resource.providerCode, resource.providerTransferId].join("/")
	}
	protected createResource(response: model.Transfer.TransferResponse): Transfer {
		return new Transfer(
			this.connection,
			[this.folder, response.providerCode, response.providerTransferId].join("/"),
			response
		)
	}
	async getAll() {
		return await this.connection.get<model.Transfer.TransferResponse[]>(`${this.folder}`)
	}
	async getTransfer(provider: model.ProviderCode, transferId: string) {
		return await this.connection.get<model.Transfer.TransferResponse>([this.folder, provider, transferId].join("/"))
	}
	protected map(response: model.Transfer.TransferResponse): Transfer & model.Transfer.TransferResponse {
		return Object.assign(new Transfer(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.Transfer.TransferRequest) {
		const result = await this.connection.post<model.Transfer.TransferResponse>(`${this.folder}`, request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
}
