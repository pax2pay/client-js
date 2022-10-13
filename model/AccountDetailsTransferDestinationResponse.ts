export interface AccountDetailsTransferDestinationResponse {
	sortCode?: string
	accountNumber?: string
	iban?: string
	bic?: string
	fullName?: string
}

export namespace AccountDetailsTransferDestinationResponse {
	export function is(
		value: AccountDetailsTransferDestinationResponse | any
	): value is AccountDetailsTransferDestinationResponse {
		return (
			typeof value == "object" &&
			(value.sortCode == undefined || typeof value.sortCode == "string") &&
			(value.accountNumber == undefined || typeof value.accountNumber == "string") &&
			(value.iban == undefined || typeof value.iban == "string") &&
			(value.bic == undefined || typeof value.bic == "string") &&
			(value.fullName == undefined || typeof value.fullName == "string")
		)
	}
}
