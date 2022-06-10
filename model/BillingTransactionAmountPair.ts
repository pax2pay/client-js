import { AmountPair } from "./AmountPair"

export interface BillingTransactionAmountPair {
	billing: AmountPair
	transaction: AmountPair
	fxRate: number
}
