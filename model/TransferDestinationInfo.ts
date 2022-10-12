/**
 * Destination information
 */
export interface TransferDestinationInfo {
	beneficiaryId?: string
	accountNumber?: string
	sortCode?: string
	iban?: string
	bic?: string
	fullName?: string
}

export namespace TransferDestinationInfo {
	export function is(value: TransferDestinationInfo | any): value is TransferDestinationInfo {
		return (
			typeof value == "object" &&
			(value.beneficiaryId == undefined || typeof value.beneficiaryId == "string") &&
			(value.accountNumber == undefined || typeof value.accountNumber == "string") &&
			(value.sortCode == undefined || typeof value.sortCode == "string") &&
			(value.iban == undefined || typeof value.iban == "string") &&
			(value.bic == undefined || typeof value.bic == "string") &&
			(value.fullName == undefined || typeof value.fullName == "string")
		)
	}
}
