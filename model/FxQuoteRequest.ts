import * as isoly from "isoly"
import { isly } from "isly"

export interface FxQuoteRequest {
	from: isoly.Currency
	to: isoly.Currency
	amountSent?: number
	amountReceived?: number
	sourceAccount: string
}

export namespace FxQuoteRequest {
	export const type = isly.object<FxQuoteRequest>({
		from: isly.fromIs("isoly.Currency", isoly.Currency.is),
		to: isly.fromIs("isoly.Currency", isoly.Currency.is),
		amountSent: isly.number().optional(),
		amountReceived: isly.number().optional(),
		sourceAccount: isly.string(),
	})
	export const is = type.is
}
