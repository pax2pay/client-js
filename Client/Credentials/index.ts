import * as model from "../../model"
import { ProviderCode } from "../../model/ProviderCode"
import { Connection } from "../Connection"
export class Credentials {
	protected readonly folder = "credentials"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Credentials(connection)
	}
	async setup(
		organisationCode: string,
		providerCode: ProviderCode,
		request: model.CredentialRequest
	): Promise<model.CredentialResponse | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		return await this.connection.post<model.CredentialResponse>(
			`${this.folder}/${providerCode}/setup`,
			request,
			undefined,
			header
		)
	}
	async getAll(organisationCode: string): Promise<model.CredentialResponse[] | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		const parameters = { totalCount: false }
		const response = await this.connection.get<{ list: model.CredentialResponse[]; totalCount: number }>(
			`${this.folder}`,
			parameters,
			header
		)
		if (model.ErrorResponse.is(response))
			return response
		else
			return response.list
	}

	async update(
		organisationCode: string,
		providerCode: ProviderCode,
		request: model.CredentialRequest
	): Promise<model.CredentialResponse | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		return await this.connection.put<model.CredentialResponse>(
			`${this.folder}/${providerCode}`,
			request,
			undefined,
			header
		)
	}
	async save(
		organisationCode: string,
		providerCode: ProviderCode,
		request: model.CredentialRequest
	): Promise<model.CredentialResponse | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		return await this.connection.post<model.CredentialResponse>(
			`${this.folder}/${providerCode}`,
			request,
			undefined,
			header
		)
	}
	async remove(organisationCode: string, providerCode: ProviderCode): Promise<undefined | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		return await this.connection.remove<undefined>(`${this.folder}/${providerCode}`, undefined, undefined, header)
	}
}
