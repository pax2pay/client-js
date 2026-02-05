import { isly } from "isly"
import { AbstractProviderTransactionOperation } from "./AbstractProviderTransactionOperation"
import { MerchantDetailsV2 } from "./MerchantDetailsV2"

export interface ProviderCardTransactionOperation extends AbstractProviderTransactionOperation {
	merchant?: MerchantDetailsV2
	providerTransactionId?: string
}
export namespace ProviderCardTransactionOperation {
	export const type = AbstractProviderTransactionOperation.type.extend<ProviderCardTransactionOperation>({
		merchant: MerchantDetailsV2.type.optional(),
		providerTransactionId: isly.string().optional(),
	})
	export const is = type.is
}
