import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
import { BeneficiaryTransferDestinationResponse } from "./BeneficiaryTransferDestinationResponse"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"

export type TransferDestinationResponse =
	| BeneficiaryTransferDestinationResponse
	| AccountDetailsTransferDestinationResponse
	| FundingAccountSummaryResponse

export namespace TransferDestinationResponse {
	export function is(value: TransferDestinationResponse | any): value is TransferDestinationResponse {
		return (
			BeneficiaryTransferDestinationResponse.is(value) ||
			AccountDetailsTransferDestinationResponse.is(value) ||
			FundingAccountSummaryResponse.is(value)
		)
	}
}
