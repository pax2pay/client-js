import { isly } from "isly"
import { AbstractProviderTransactionOperation } from "./AbstractProviderTransactionOperation"

export interface ProviderTransferTransactionOperation extends AbstractProviderTransactionOperation {
	reference?: string
	payee?: string
}
export namespace ProviderTransferTransactionOperation {
	export const type = AbstractProviderTransactionOperation.type.extend<ProviderTransferTransactionOperation>({
		reference: isly.string().optional(),
		payee: isly.string().optional(),
	})
}
