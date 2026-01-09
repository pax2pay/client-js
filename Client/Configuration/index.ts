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
	async getAllCurrency() {
		return await this.connection.get<Currency[]>(`${this.folder}/currencies/all`)
	}
	async getOrganisation(code?: string): Promise<model.Config.Organisation | model.ErrorResponse> {
		return await this.connection.get<model.Config.Organisation>(`${this.folder}/organisation${code ? `/${code}` : ""}`)
	}
	async updateOrganisation(
		request: model.Config.Organisation,
		code?: string
	): Promise<model.Config.Organisation | model.ErrorResponse> {
		return await this.connection.post<model.Config.Organisation>(
			`${this.folder}/organisation${code ? `/${code}` : ""}`,
			request
		)
	}
	async getInternalOrganisation(code?: string): Promise<model.Config.InternalOrganisation | model.ErrorResponse> {
		return await this.connection.get<model.Config.InternalOrganisation>(
			`${this.folder}/organisation_internal${code ? `/${code}` : ""}`
		)
	}
	async updateInternalOrganisation(
		request: model.Config.InternalOrganisation,
		code?: string
	): Promise<model.Config.InternalOrganisation | model.ErrorResponse> {
		return await this.connection.post<model.Config.InternalOrganisation>(
			`${this.folder}/organisation_internal${code ? `/${code}` : ""}`,
			request
		)
	}
	async getUser(username?: string): Promise<model.Config.User | model.ErrorResponse> {
		return await this.connection.get<model.Config.User>(`${this.folder}/user${username ? `/${username}` : ""}`)
	}
	async updateUser(request: model.Config.User, username?: string): Promise<model.Config.User | model.ErrorResponse> {
		return await this.connection.post<model.Config.User>(
			`${this.folder}/user${username ? `/${username}` : ""}`,
			request
		)
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
