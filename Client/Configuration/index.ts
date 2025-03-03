import { Currency } from "isoly"
import * as model from "../../model"
import { ProviderCode } from "../../model/ProviderCode"
import { Connection } from "../Connection"
export class Configuration {
	protected readonly folder = "config"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Configuration(connection)
	}
	async getAvailableCurrency(providerCode: ProviderCode = "modulr"): Promise<Currency[] | model.ErrorResponse> {
		return await this.connection.get<Currency[]>(`${this.folder}/currencies`, { provider: providerCode })
	}
	async getOrganisation(code?: string): Promise<model.OrganisationConfig | model.ErrorResponse> {
		return await this.connection.get<model.OrganisationConfig>(`${this.folder}/organisation${code ? `/${code}` : ""}`)
	}
	async updateOrganisation(
		request: model.OrganisationConfig,
		code?: string
	): Promise<model.OrganisationConfig | model.ErrorResponse> {
		return await this.connection.post<model.OrganisationConfig>(
			`${this.folder}/organisation${code ? `/${code}` : ""}`,
			request
		)
	}
	async getInternalOrganisation(code?: string): Promise<model.InternalOrganisationConfig | model.ErrorResponse> {
		return await this.connection.get<model.InternalOrganisationConfig>(
			`${this.folder}/organisation_internal${code ? `/${code}` : ""}`
		)
	}
	async updateInternalOrganisation(
		request: model.InternalOrganisationConfig,
		code?: string
	): Promise<model.InternalOrganisationConfig | model.ErrorResponse> {
		return await this.connection.post<model.InternalOrganisationConfig>(
			`${this.folder}/organisation_internal${code ? `/${code}` : ""}`,
			request
		)
	}
	async getUser(username?: string): Promise<model.UserConfig | model.ErrorResponse> {
		return await this.connection.get<model.UserConfig>(`${this.folder}/user${username ? `/${username}` : ""}`)
	}
	async updateUser(request: model.UserConfig, username?: string): Promise<model.UserConfig | model.ErrorResponse> {
		return await this.connection.post<model.UserConfig>(`${this.folder}/user${username ? `/${username}` : ""}`, request)
	}
	async getPortalFeatures(): Promise<model.PaxpayFeature[] | model.ErrorResponse> {
		return await this.connection.get<model.PaxpayFeature[]>(`${this.folder}/portal`)
	}
	async getConfigValueFromKey(category: string, key: string): Promise<any | model.ErrorResponse> {
		return await this.connection.get<any>(`${this.folder}/key/${category}/${key}`)
	}
	async getAllTiers(): Promise<model.TierResponse[] | model.ErrorResponse> {
		return await this.connection.get<model.TierResponse[]>(`${this.folder}/tiers`)
	}
	async getTierById(id: string): Promise<model.TierResponse | model.ErrorResponse> {
		return await this.connection.get<model.TierResponse>(`${this.folder}/tiers/${id}`)
	}
}
