import { isly } from "isly"
import { GenericPaymentOperation } from "./GenericPaymentOperation"
import { ProviderCardTransactionOperation } from "./ProviderCardTransactionOperation"
import { ProviderTransferTransactionOperation } from "./ProviderTransferTransactionOperation"

export type PaymentOperation =
	| GenericPaymentOperation
	| ProviderTransferTransactionOperation
	| ProviderCardTransactionOperation

export namespace PaymentOperation {
	export const type = isly.union(
		GenericPaymentOperation.type,
		ProviderTransferTransactionOperation.type,
		ProviderCardTransactionOperation.type
	)
}
