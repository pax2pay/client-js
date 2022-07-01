import * as isoly from "isoly"

export interface AmountPair {
	amount: number
	currency: isoly.Currency
}

export namespace AmountPair {
	export function is(value: AmountPair | any): value is AmountPair {
		return typeof value == "object" && typeof value.amount == "number" && isoly.Currency.is(value.currency)
	}
}
