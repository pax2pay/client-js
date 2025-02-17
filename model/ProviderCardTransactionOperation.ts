import { AbstractProviderTransactionOperation } from "./AbstractProviderTransactionOperation";
import { MerchantDetailsV2 } from "./MerchantDetailsV2";

export interface ProviderCardTransactionOperation extends AbstractProviderTransactionOperation {
	merchant?: MerchantDetailsV2
}
export namespace ProviderCardTransactionOperation {
	export const type = AbstractProviderTransactionOperation.type.extend<ProviderCardTransactionOperation>({
		merchant: MerchantDetailsV2.type.optional(),
	})
}
