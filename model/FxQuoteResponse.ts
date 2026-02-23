import * as isoly from "isoly"
import { isly } from "isly"

export interface FxQuoteResponse {
	quoteId: string
	validUntil: isoly.DateTime
	sourceAccount: string
	from: isoly.Currency
	to: isoly.Currency
	amountSent: number
	amountReceived: number
	fee: number
	fxRate: number
	markup?: number
	markedUpFxRate?: number
}

export namespace FxQuoteResponse {
	export const type = isly.object<FxQuoteResponse>({
		quoteId: isly.string(),
		validUntil: isly.fromIs("isoly.DateTime", isoly.DateTime.is),
		sourceAccount: isly.string(),
		from: isly.fromIs("isoly.Currency", isoly.Currency.is),
		to: isly.fromIs("isoly.Currency", isoly.Currency.is),
		amountSent: isly.number(),
		amountReceived: isly.number(),
		fee: isly.number(),
		fxRate: isly.number(),
		markup: isly.number().optional(),
		markedUpFxRate: isly.number().optional(),
	})
	export const is = type.is
}
