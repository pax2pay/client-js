import { AmountPair } from "./AmountPair"

export interface BillingTransactionAmountPair {
	billing: AmountPair
	transaction: AmountPair
	fxRate?: number
}
export namespace BillingTransactionAmountPair {
	export function is(value: BillingTransactionAmountPair | any): value is BillingTransactionAmountPair {
		return (
			typeof value == "object" &&
			AmountPair.is(value.billing) &&
			AmountPair.is(value.transaction) &&
			(value.fxRate == undefined || typeof value.fxRate == "number")
		)
	}
}
