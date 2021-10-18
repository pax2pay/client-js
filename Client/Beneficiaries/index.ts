import * as model from "../../model"
import { Beneficiary } from "../Beneficiary"
import { Connection } from "../Connection"
import { List } from "../List"

export class Beneficiaries extends List<
	model.BeneficiaryResponse,
	model.BeneficiaryRequest
> {
	protected folder = "beneficiaries"
	constructor(connection: Connection) {
		super(connection)
	}
	protected getResourcePath(resource: model.BeneficiaryResponse): string {
		return [this.folder, resource.providerCode, resource.providerBeneficiaryId].join("/")
	}
	protected createResource(response: model.BeneficiaryResponse): Beneficiary {
		return new Beneficiary(this.connection, [this.folder, response.providerCode, response.providerBeneficiaryId].join("/"), response)
	}
	async getAll(){
		return await this.connection.get<model.BeneficiaryResponse[]>(`${this.folder}`)
	}
	async getBeneficiary(provider: model.ProviderCode, BeneficiaryId: string){
		return await this.connection.get<model.BeneficiaryResponse>([this.folder, provider, BeneficiaryId].join("/"))
	}
	protected map(response: model.BeneficiaryResponse): Beneficiary & model.BeneficiaryResponse {
		return Object.assign(new Beneficiary(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.BeneficiaryRequest) {
		const result = await this.connection.post<model.BeneficiaryResponse>(`${this.folder}`, request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
}
