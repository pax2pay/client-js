import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
import { BeneficiaryTransferDestinationResponse } from "./BeneficiaryTransferDestinationResponse"
import { ExternalDestination } from "./ExternalDestination"
import { FundingAccountTransferDestinationResponse } from "./FundingAccountTransferDestinationResponse"

export type TransferDestinationResponse =
	| BeneficiaryTransferDestinationResponse
	| AccountDetailsTransferDestinationResponse
	| FundingAccountTransferDestinationResponse
	| ExternalDestination
export namespace TransferDestinationResponse {
	export function is(value: TransferDestinationResponse | any): value is TransferDestinationResponse {
		return (
			BeneficiaryTransferDestinationResponse.is(value) ||
			AccountDetailsTransferDestinationResponse.is(value) ||
			FundingAccountTransferDestinationResponse.is(value) ||
			ExternalDestination.is(value)
		)
	}
}
