import { SummaryCardResponseV3 } from "../SummaryCardResponseV3"
import { SummaryMerchantResponse } from "../SummaryMerchantResponse"
import { TransferResponseV3 } from "../TransferResponseV3"
import { AbstractResponse } from "./AbstractResponse"

export interface SummaryResponse extends AbstractResponse {
	merchant: SummaryMerchantResponse
	card?: SummaryCardResponseV3
	transfer?: TransferResponseV3
}

export namespace SummaryResponse {
	export const type = AbstractResponse.type.extend<SummaryResponse>({
		merchant: SummaryMerchantResponse.type,
		card: SummaryCardResponseV3.type.optional(),
		transfer: TransferResponseV3.type.optional(),
	})
	export const is = type.is
}
