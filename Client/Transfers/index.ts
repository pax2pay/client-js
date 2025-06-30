import * as model from "../../model"
import { ProviderCode } from "../../model/ProviderCode"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Transfers extends List<model.TransferResponseV2> {
	protected readonly folder = "transfers"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Transfers {
		return new Transfers(connection)
	}
	async create(request: model.TransferRequest, otp?: string) {
		return await this.connection.post<model.TransferResponseV2>(
			`v2/${this.folder}`,
			request,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
	async search(
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
	async approve(providerCode: ProviderCode, transferId: string, otp?: string) {
		return await this.connection.post<model.TransferResponseV2>(
			`v2/${this.folder}/${providerCode}/${transferId}/approve`,
			undefined,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
	async decline(providerCode: ProviderCode, transferId: string, otp?: string) {
		return await this.connection.post<model.TransferResponseV2>(
			`v2/${this.folder}/${providerCode}/${transferId}/decline`,
			undefined,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
	async donloadReceipt(transferId: string, providerCode?: ProviderCode) {
		if (providerCode)
			return await this.connection.get<model.DownloadableResponse>(
				`v2/${this.folder}/${providerCode}/${transferId}/download`
			)
		else
			return await this.connection.get<model.DownloadableResponse>(`v2/${this.folder}/${transferId}/download`)
	}
}
