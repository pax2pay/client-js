import * as model from "../../model"
import { Beneficiary } from "../Beneficiary"
import { Connection } from "../Connection"
import { List } from "../List"

export class Beneficiaries extends List<model.BeneficiaryResponse, model.BeneficiaryRequest> {
	protected folder = "beneficiaries"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Beneficiaries {
		return new Beneficiaries(connection)
	}
	protected getResourcePath(resource: model.BeneficiaryResponse): string {
		return [this.folder, resource.beneficiaryId].join("/")
	}
	protected createResource(response: model.BeneficiaryResponse): Beneficiary {
		return new Beneficiary(this.connection, [this.folder, response.beneficiaryId].join("/"), response)
	}

	async getAll(sort?: string): Promise<model.ErrorResponse | model.BeneficiaryResponse[]> {
		const response = await this.connection.get<{ list: model.BeneficiaryResponse[]; totalCount: number }>(
			`${this.folder}?page=0&size=1500&sort=${sort}`
		)
		return this.extractResponse(response)
	}
	async getBeneficiary(beneficiaryId: string) {
		return await this.connection.get<model.BeneficiaryResponse>([this.folder, beneficiaryId].join("/"))
	}
	async searchBeneficiary(request: model.SearchBeneficiaryRequest, sort?: string) {
		const response = await this.connection.post<model.ErrorResponse | model.BeneficiaryResponse[]>(
			`${this.folder}/searches?page=0&size=1500&sort=${sort}`,
			request
		)
		return this.extractResponse(response)
	}
	protected map(response: model.BeneficiaryResponse): Beneficiary & model.BeneficiaryResponse {
		return Object.assign(new Beneficiary(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.BeneficiaryRequest) {
		const result = await this.connection.post<model.BeneficiaryResponse>(`${this.folder}`, request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
}
