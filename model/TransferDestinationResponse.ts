import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
import { BeneficiaryTransferDestinationResponse } from "./BeneficiaryTransferDestinationResponse"
import { FundingAccountResponseV2 } from "./FundingAccountResponseV2"

export type TransferDestinationResponse =
	| BeneficiaryTransferDestinationResponse
	| AccountDetailsTransferDestinationResponse
	| FundingAccountResponseV2

export namespace TransferDestinationResponse {
	export function is(value: TransferDestinationResponse | any): value is TransferDestinationResponse {
		return (
			BeneficiaryTransferDestinationResponse.is(value) ||
			AccountDetailsTransferDestinationResponse.is(value) ||
			FundingAccountResponseV2.is(value)
		)
	}
}
