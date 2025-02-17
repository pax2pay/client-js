import { AbstractPaymentOperation } from "./AbstractPaymentOperation"
import { BillingTransactionAmountPair } from "./BillingTransactionAmountPair"

export interface AbstractProviderTransactionOperation extends AbstractPaymentOperation {
	amount: BillingTransactionAmountPair
}
export namespace AbstractProviderTransactionOperation {
	export const type = AbstractPaymentOperation.type.extend<AbstractProviderTransactionOperation>({
		amount: BillingTransactionAmountPair.type,
	})
	export const is = type.is
}
