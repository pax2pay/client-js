import { Currency } from "isoly"
import * as model from "../../model"
import { Connection } from "../Connection"
export class Configuration {
	protected folder = "config"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Configuration(connection)
	}
	async getAvailableCurrency() {
		const result = await this.connection.get<Currency[]>(`config/currencies`)
		return result
	}
	async validateEmail(email: string) {
		const result = await this.connection.get<model.EmailValidationResponse>(`email/validate/${email}`)
		return result
	}
}
