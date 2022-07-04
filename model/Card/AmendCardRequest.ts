import * as isoly from "isoly"

export interface AmendCardRequest {
	newBalance?: number
	balanceDifferential?: number
	currency: isoly.Currency
	fundingDate?: isoly.Date
}
