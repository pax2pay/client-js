import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
export interface BeneficiaryTransferDestinationResponse extends AccountDetailsTransferDestinationResponse {
	beneficiaryId: string
	name?: string
}

export namespace BeneficiaryTransferDestinationResponse {
	export function is(
		value: BeneficiaryTransferDestinationResponse | any
	): value is BeneficiaryTransferDestinationResponse {
		return (
			typeof value == "object" &&
			typeof value.beneficiaryId == "string" &&
			(value.name == undefined || typeof value.name == "string") &&
			AccountDetailsTransferDestinationResponse.is(value)
		)
	}
}
