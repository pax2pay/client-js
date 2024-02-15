import * as isoly from "isoly"

export interface CurrencyConversionResponse {
	from: isoly.Currency
	to: isoly.Currency
	fxRate: number
	original: number
	converted: number
	rateSource: string
}

export namespace CurrencyConversionResponse {
	export function is(value: CurrencyConversionResponse | any): value is CurrencyConversionResponse {
		return (
			typeof value == "object" &&
			isoly.Currency.is(value.from) &&
			isoly.Currency.is(value.to) &&
			typeof value.fxRate == "number" &&
			typeof value.original == "number" &&
			typeof value.converted == "number" &&
			typeof value.rateSource == "string"
		)
	}
}
