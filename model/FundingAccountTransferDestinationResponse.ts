import { Currency } from "isoly"
import { isly } from "isly"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"
import { TransferDestinationAddressType } from "./TransferDestinationAddressType"

export interface FundingAccountTransferDestinationResponse extends FundingAccountSummaryResponse {
	type: TransferDestinationAddressType
	currency: Currency
}

export namespace FundingAccountTransferDestinationResponse {
	export const type = FundingAccountSummaryResponse.type
		.extend<FundingAccountTransferDestinationResponse>({
			type: TransferDestinationAddressType.type,
			currency: isly.fromIs("Currency", Currency.is),
		})
		.extend(FundingAccountSummaryResponse.type)
	export const is = type.is
}
