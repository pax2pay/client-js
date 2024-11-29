import * as isoly from "isoly"
import * as model from "../../model"
import { CurrencyConversionRequest } from "../../model/CurrencyConversionRequest"
import { CurrencyConversionResponse } from "../../model/CurrencyConversionResponse"
import { Connection } from "../Connection"

export class Currency {
	protected readonly folder = "currency"
	#connection: Connection
	protected get connection() {
		return this.#connection
	}
	constructor(connection: Connection) {
		this.#connection = connection
	}
	static create(connection: Connection): Currency {
		return new Currency(connection)
	}
	async convertSimple(from: isoly.Currency, amount: number, to: isoly.Currency): Promise<number | model.ErrorResponse> {
		return await this.connection.get<number>(`${this.folder}/convert/${from}/${amount}/${to}`)
	}
	async convert(request: CurrencyConversionRequest): Promise<CurrencyConversionResponse | model.ErrorResponse> {
		return await this.connection.post<CurrencyConversionResponse>(`${this.folder}/convert`, request)
	}
}
