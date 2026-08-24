import { AbstractPaymentResponse } from "./AbstractPaymentResponse"
import { SummaryCardResponseV3 } from "./SummaryCardResponseV3"
import { SummaryMerchantResponse } from "./SummaryMerchantResponse"
import { TransferResponseV3 } from "./TransferResponseV3"

export interface SummaryPaymentResponse extends AbstractPaymentResponse {
	merchant?: SummaryMerchantResponse
	card?: SummaryCardResponseV3
	transfer?: TransferResponseV3
}
export namespace SummaryPaymentResponse {
	export const type = AbstractPaymentResponse.type.extend<SummaryPaymentResponse>({
		merchant: SummaryMerchantResponse.type.optional(),
		card: SummaryCardResponseV3.type.optional(),
		transfer: TransferResponseV3.type.optional(),
	})
	export const is = type.is
}
