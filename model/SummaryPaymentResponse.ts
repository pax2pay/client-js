import { AbstractPaymentResponse } from "./AbstractPaymentResponse"
import { SummaryCardResponseV3 } from "./SummaryCardResponseV3"
import { SummaryMerchantResponse } from "./SummaryMerchantResponse"
import { TransferResponseV3 } from "./TransferResponseV3"

export interface SummaryPaymentResponse extends AbstractPaymentResponse {
	merchant: SummaryMerchantResponse
	card?: SummaryCardResponseV3
	transfer?: TransferResponseV3
}
