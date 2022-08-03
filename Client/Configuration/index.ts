import { Currency } from "isoly"
import { Connection } from "../Connection"

export class Configuration {
	protected folder = "users"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Configuration(connection)
	}
	async getAvailableCurrency() {
		const result = await this.connection.get<Currency[]>(`config/currencies`)
		return result
	}
}
