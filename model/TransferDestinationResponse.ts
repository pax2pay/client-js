import { isly } from "isly"
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
	export const type = isly.union<TransferDestinationResponse>(
		BeneficiaryTransferDestinationResponse.type,
		AccountDetailsTransferDestinationResponse.type,
		FundingAccountSummaryResponse.type,
		ExternalDestination.type
	)
	export const is = type.is
}
