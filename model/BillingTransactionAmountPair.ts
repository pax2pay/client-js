import { isly } from "isly"
import { AmountPair } from "./AmountPair"

export interface BillingTransactionAmountPair {
	billing: AmountPair
	transaction: AmountPair
	fxRate?: number
}
export namespace BillingTransactionAmountPair {
	export const type = isly.object<BillingTransactionAmountPair>({
		billing: isly.fromIs("AmountPair", AmountPair.is),
		transaction: isly.fromIs("AmountPair", AmountPair.is),
		fxRate: isly.number().optional(),
	})
	export const is = type.is
}
