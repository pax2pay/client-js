import { AmountPair } from "./AmountPair"

export interface BillingTransactionAmountPair {
	billing: AmountPair
	transaction: AmountPair
	fxRate: number
	rebate?: number
	rebateRate?: number
}
export namespace BillingTransactionAmountPair {
	export function is(value: BillingTransactionAmountPair | any): value is BillingTransactionAmountPair {
		return (
			typeof value == "object" &&
			AmountPair.is(value.billing) &&
			AmountPair.is(value.transaction) &&
			typeof value.fxRate == "number" &&
			(typeof value.rebate == "number" || value.rebate == undefined) &&
			(typeof value.rebateRate == "number" || value.rebateRate == undefined)
		)
	}
}
