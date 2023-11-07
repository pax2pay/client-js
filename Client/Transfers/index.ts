import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class Transfers extends List<model.TransferResponse> {
	protected folder = "transfers"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Transfers {
		return new Transfers(connection)
	}
	async getAll(): Promise<model.ErrorResponse | model.TransferResponse[]> {
		const response = await this.connection.get<{ list: model.TransferResponse[]; totalCount: number }>(`${this.folder}`)
		return this.extractResponse(response)
	}
	async getTransfer(provider: model.ProviderCode, transferId: string) {
		return await this.connection.get<model.TransferResponse>([this.folder, provider, transferId].join("/"))
	}
	async create(request: model.TransferRequest) {
		return await this.connection.post<model.TransferResponse>(`${this.folder}`, request)
	}
	async createV2(request: model.TransferRequest, otp?: string) {
		return await this.connection.post<model.TransferResponseV2>(
			"v2/transfers",
			request,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
}
