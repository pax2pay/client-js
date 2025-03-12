import { isly } from "isly"
import { AbstractPaymentOperation } from "./AbstractPaymentOperation"
import { GenericPaymentOperation } from "./GenericPaymentOperation"
import { ProviderCardTransactionOperation } from "./ProviderCardTransactionOperation"
import { ProviderTransferTransactionOperation } from "./ProviderTransferTransactionOperation"

export type PaymentOperation =
	| AbstractPaymentOperation
	| GenericPaymentOperation
	| ProviderTransferTransactionOperation
	| ProviderCardTransactionOperation

export namespace PaymentOperation {
	export const type = isly.union(
		AbstractPaymentOperation.type,
		GenericPaymentOperation.type,
		ProviderTransferTransactionOperation.type,
		ProviderCardTransactionOperation.type
	)
	export const is = type.is
}
