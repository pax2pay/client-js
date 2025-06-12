import * as model from "../../model"
import { ProviderCode } from "../../model/ProviderCode"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Transfers extends List<model.TransferResponse> {
	protected readonly folder = "transfers"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Transfers {
		return new Transfers(connection)
	}
	async createV2(request: model.TransferRequest, otp?: string) {
		return await this.connection.post<model.TransferResponseV2>(
			`v2/${this.folder}`,
			request,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
	async searchV2(
		request: model.TransferSearch,
		previous?: Paginated<model.TransferResponseV2>,
		page?: number,
		size?: number,
		sort?: string
	) {
		return await this.getNextPaginated(
			previous,
			(page, size, sort, request) =>
				this.connection.post<{ list: model.TransferResponseV2[]; totalCount: number } | model.TransferResponseV2[]>(
					`v2/${this.folder}/searches`,
					request,
					{ page, size, sort }
				),
			request,
			page,
			size,
			sort
		)
	}
	async approveV2(providerCode: ProviderCode, transferId: string, otp?: string) {
		return await this.connection.post<model.TransferResponseV2>(
			`v2/${this.folder}/${providerCode}/${transferId}/approve`,
			undefined,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
	async declineV2(providerCode: ProviderCode, transferId: string, otp?: string) {
		return await this.connection.post<model.TransferResponseV2>(
			`v2/${this.folder}/${providerCode}/${transferId}/decline`,
			undefined,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
}
