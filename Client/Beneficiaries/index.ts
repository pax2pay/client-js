import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class Beneficiaries extends List<model.BeneficiaryResponse> {
	protected readonly folder = "beneficiaries"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Beneficiaries {
		return new Beneficiaries(connection)
	}
	async getAll(sort?: string): Promise<model.ErrorResponse | model.BeneficiaryResponse[]> {
		const response = await this.connection.get<{ list: model.BeneficiaryResponse[]; totalCount: number }>(
			`${this.folder}`,
			{
				page: 0,
				size: 1500,
				sort: sort,
			}
		)
		return this.extractResponse(response)
	}
	async getBeneficiary(beneficiaryId: string) {
		return await this.connection.get<model.BeneficiaryResponse>([this.folder, beneficiaryId].join("/"))
	}
	async searchBeneficiary(request: model.SearchBeneficiaryRequest, sort?: string) {
		const response = await this.connection.post<model.ErrorResponse | model.BeneficiaryResponse[]>(
			`${this.folder}/searches`,
			request,
			{
				page: 0,
				size: 1500,
				sort: sort,
			}
		)
		return this.extractResponse(response)
	}
	async create(request: model.BeneficiaryRequest) {
		return await this.connection.post<model.BeneficiaryResponse>(`${this.folder}`, request)
	}
	async update(beneficiaryId: string, request: model.UpdateBeneficiaryRequest) {
		return await this.connection.put<model.BeneficiaryResponse>(`${this.folder}/${beneficiaryId}`, request)
	}
	async delete(beneficiaryId: string) {
		return await this.connection.remove<model.BeneficiaryResponse>(`${this.folder}/${beneficiaryId}`)
	}
}
