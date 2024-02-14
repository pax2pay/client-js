import * as isoly from "isoly"

export interface CurrencyConversionRequest {
	from: isoly.Currency
	to: isoly.Currency
	amount: number
}

export namespace CurrencyConversionRequest {
	export function is(value: CurrencyConversionRequest | any): value is CurrencyConversionRequest {
		return (
			typeof value == "object" &&
			isoly.Currency.is(value.from) &&
			isoly.Currency.is(value.to) &&
			typeof value.amount == "number"
		)
	}
}
