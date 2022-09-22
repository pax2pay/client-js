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

	async getAll(): Promise<model.ErrorResponse | model.BeneficiaryResponse[]>
	async getAll(): Promise<
		model.ErrorResponse | model.BeneficiaryResponse[] | { list: model.BeneficiaryResponse[]; totalCount: number }
	>
	async getAll(
		withCount?: boolean
	): Promise<
		model.ErrorResponse | model.BeneficiaryResponse[] | { list: model.BeneficiaryResponse[]; totalCount: number }
	> {
		const response = await this.connection.get<{ list: model.BeneficiaryResponse[]; totalCount: number }>(
			`${this.folder}`
		)
		return this.extractResponse(response, withCount)
	}
	async getBeneficiary(beneficiaryId: string) {
		return await this.connection.get<model.BeneficiaryResponse>([this.folder, beneficiaryId].join("/"))
	}
	protected map(response: model.BeneficiaryResponse): Beneficiary & model.BeneficiaryResponse {
		return Object.assign(new Beneficiary(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.BeneficiaryRequest) {
		const result = await this.connection.post<model.BeneficiaryResponse>(`${this.folder}`, request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
}
