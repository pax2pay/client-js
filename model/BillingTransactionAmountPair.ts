import { AmountPair } from "./AmountPair"

export interface BillingTransactionAmountPair {
	billing: AmountPair
	transaction: AmountPair
	fxRate?: number
	rebate?: number
	rebateRate?: number
}
export namespace BillingTransactionAmountPair {
	export function is(value: BillingTransactionAmountPair | any): value is BillingTransactionAmountPair {
		return (
			typeof value == "object" &&
			AmountPair.is(value.billing) &&
			AmountPair.is(value.transaction) &&
			(value.fxRate == undefined || typeof value.fxRate == "number") &&
			(value.rebate == undefined || typeof value.rebate == "number") &&
			(value.rebateRate == undefined || typeof value.rebateRate == "number")
		)
	}
}
