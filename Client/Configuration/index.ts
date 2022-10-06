import { Currency } from "isoly"
import * as model from "../../model"
import { Connection } from "../Connection"
export class Configuration {
	protected folder = "config"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Configuration(connection)
	}
	async getAvailableCurrency(): Promise<Currency[] | model.ErrorResponse> {
		const result = await this.connection.get<Currency[]>(`config/currencies`)
		return result
	}
	async getConfigurationForOrganisation(): Promise<model.OrganisationConfig | model.ErrorResponse> {
		const result = await this.connection.get<model.OrganisationConfig>(`config/organisation`)
		return result
	}
}
