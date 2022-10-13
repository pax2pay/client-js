export interface BeneficiaryTransferDestinationResponse {
	beneficiaryId: string
	name: string
}

export namespace BeneficiaryTransferDestinationResponse {
	export function is(
		value: BeneficiaryTransferDestinationResponse | any
	): value is BeneficiaryTransferDestinationResponse {
		return typeof value == "object" && typeof value.beneficiaryId == "string" && typeof value.name == "string"
	}
}
