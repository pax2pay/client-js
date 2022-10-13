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
			(value.sortCode == undefined || typeof value.sortCode == "string") &&
			(value.accountNumber == undefined || typeof value.accountNumber == "string") &&
			(value.iban == undefined || typeof value.iban == "string") &&
			(value.bic == undefined || typeof value.bic == "string") &&
			(value.fullName == undefined || typeof value.fullName == "string") &&
			typeof value.beneficiaryId == "string" &&
			(value.name == undefined || typeof value.name == "string")
		)
	}
}
