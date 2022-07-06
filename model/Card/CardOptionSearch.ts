import * as isoly from "isoly"

export interface CardOptionSearch {
	supplier?: string
	balance?: number
	currency: isoly.Currency
	fundCheck: boolean
}

export namespace CardOptionSearch {
	export function is(value: CardOptionSearch | any): value is CardOptionSearch {
		return (
			typeof value == "object" &&
			(value.supplier == undefined || typeof value.supplier == "string") &&
			(value.balance == undefined || typeof value.balance == "number") &&
			isoly.Currency.is(value.currency) &&
			typeof value.fundCheck == "boolean"
		)
	}
}
