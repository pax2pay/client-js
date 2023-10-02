import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
import { BeneficiaryTransferDestinationResponse } from "./BeneficiaryTransferDestinationResponse"
import { ExternalDestination } from "./ExternalDestination"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"

export type TransferDestinationResponse =
	| BeneficiaryTransferDestinationResponse
	| AccountDetailsTransferDestinationResponse
	| FundingAccountSummaryResponse
	| ExternalDestination
export namespace TransferDestinationResponse {
	export function is(value: TransferDestinationResponse | any): value is TransferDestinationResponse {
		return (
			BeneficiaryTransferDestinationResponse.is(value) ||
			AccountDetailsTransferDestinationResponse.is(value) ||
			FundingAccountSummaryResponse.is(value) ||
			ExternalDestination.is(value)
		)
	}
}
