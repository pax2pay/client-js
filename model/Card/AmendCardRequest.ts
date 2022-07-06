import * as isoly from "isoly"

export interface AmendCardRequest {
	newBalance?: number
	balanceDifferential?: number
	currency: isoly.Currency
	fundingDate?: isoly.Date
}

export namespace AmendCardRequest {
	export function is(value: AmendCardRequest | any): value is AmendCardRequest {
		return (
			typeof value == "object" &&
			(value.newBalance == undefined || typeof value.newBalance == "number") &&
			(value.balanceDifferential == undefined || typeof value.balanceDifferential == "number") &&
			isoly.Currency.is(value.currency) &&
			(value.fundingDate == undefined || isoly.Date.is(value.fundingDate))
		)
	}
}
