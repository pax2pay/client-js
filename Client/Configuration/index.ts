import { Currency } from "isoly"
import * as model from "../../model"
import { ProviderCode } from "../../model/ProviderCode"
import { Connection } from "../Connection"
export class Configuration {
	protected folder = "config"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Configuration(connection)
	}
	async getAvailableCurrency(providerCode: ProviderCode = "modulr"): Promise<Currency[] | model.ErrorResponse> {
		return await this.connection.get<Currency[]>(`${this.folder}/currencies`, { provider: providerCode })
	}
	async getOrganisation(): Promise<model.OrganisationConfig | model.ErrorResponse> {
		return await this.connection.get<model.OrganisationConfig>(`${this.folder}/organisation`)
	}
	async updateOrganisation(request: model.OrganisationConfig): Promise<model.OrganisationConfig | model.ErrorResponse> {
		return await this.connection.post<model.OrganisationConfig>(`${this.folder}/organisation`, request)
	}
	async getInternalOrganisation(organisation: string): Promise<model.InternalOrganisationConfig | model.ErrorResponse> {
		return await this.connection.get<model.InternalOrganisationConfig>(
			`${this.folder}/organisation_internal/${organisation}`
		)
	}
	async updateInternalOrganisation(
		organisation: string,
		request: model.InternalOrganisationConfig
	): Promise<model.InternalOrganisationConfig | model.ErrorResponse> {
		return await this.connection.post<model.InternalOrganisationConfig>(
			`${this.folder}/organisation_internal/${organisation}`,
			request
		)
	}
	async getUser(): Promise<model.UserConfig | model.ErrorResponse> {
		return await this.connection.get<model.UserConfig>(`${this.folder}/user`)
	}
	async updateUser(request: model.UserConfig): Promise<model.UserConfig | model.ErrorResponse> {
		return await this.connection.post<model.UserConfig>(`${this.folder}/user`, request)
	}
	async getPortalFeatures(): Promise<model.PaxpayFeature[] | model.ErrorResponse> {
		return await this.connection.get<model.PaxpayFeature[]>(`${this.folder}/portal`)
	}
	async getConfigValueFromKey(category: string, key: string): Promise<any | model.ErrorResponse> {
		return await this.connection.get<any>(`${this.folder}/key/${category}/${key}`)
	}

	async setupCredentials(
		organisationCode: string,
		providerCode: ProviderCode,
		request: model.CredentialRequest
	): Promise<model.CredentialResponse | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		return await this.connection.post<model.CredentialResponse>(
			`credentials/${providerCode}/setup`,
			request,
			undefined,
			header
		)
	}
	async getAllCredentials(organisationCode: string): Promise<model.CredentialResponse[] | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		const parameters = { totalCount: false }
		const response = await this.connection.get<{ list: model.CredentialResponse[]; totalCount: number }>(
			`credentials`,
			parameters,
			header
		)
		if (model.ErrorResponse.is(response))
			return response
		else
			return response.list
	}

	async updateCredentials(
		organisationCode: string,
		providerCode: ProviderCode,
		request: model.CredentialRequest
	): Promise<model.CredentialResponse | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		return await this.connection.put<model.CredentialResponse>(
			`credentials/${providerCode}`,
			request,
			undefined,
			header
		)
	}
	async saveCredentials(
		organisationCode: string,
		providerCode: ProviderCode,
		request: model.CredentialRequest
	): Promise<model.CredentialResponse | model.ErrorResponse> {
		const header = { "x-assume": organisationCode }
		return await this.connection.post<model.CredentialResponse>(
			`credentials/${providerCode}`,
			request,
			undefined,
			header
		)
	}
}
