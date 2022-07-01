import * as model from "../../model"
import { Beneficiary } from "../Beneficiary"
import { Connection } from "../Connection"
import { List } from "../List"

export class Beneficiaries extends List<model.Transfer.BeneficiaryResponse, model.Transfer.BeneficiaryRequest> {
	protected folder = "beneficiaries"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Beneficiaries {
		return new Beneficiaries(connection)
	}
	protected getResourcePath(resource: model.Transfer.BeneficiaryResponse): string {
		return [this.folder, resource.beneficiaryId].join("/")
	}
	protected createResource(response: model.Transfer.BeneficiaryResponse): Beneficiary {
		return new Beneficiary(this.connection, [this.folder, response.beneficiaryId].join("/"), response)
	}
	async getAll() {
		return await this.connection.get<model.Transfer.BeneficiaryResponse[]>(`${this.folder}`)
	}
	async getBeneficiary(beneficiaryId: string) {
		return await this.connection.get<model.Transfer.BeneficiaryResponse>([this.folder, beneficiaryId].join("/"))
	}
	protected map(response: model.Transfer.BeneficiaryResponse): Beneficiary & model.Transfer.BeneficiaryResponse {
		return Object.assign(new Beneficiary(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.Transfer.BeneficiaryRequest) {
		const result = await this.connection.post<model.Transfer.BeneficiaryResponse>(`${this.folder}`, request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
}
