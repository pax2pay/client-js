import { FundingAccountIdentifierType } from "./FundingAccountIdentifierType"

export interface AccountIdentifierResponse {
	type?: FundingAccountIdentifierType
	accountNumber?: string
	bic?: string
	iban?: string
	sortCode?: string
}

export namespace AccountIdentifierResponse {
	export function is(value: AccountIdentifierResponse | any): value is AccountIdentifierResponse {
		return (
			typeof value == "object" &&
			(value.type == undefined || FundingAccountIdentifierType.is(value.type)) &&
			(value.accountNumber == undefined || typeof value.accountNumber == "string") &&
			(value.bic == undefined || typeof value.bic == "string") &&
			(value.iban == undefined || typeof value.iban == "string") &&
			(value.sortCode == undefined || typeof value.sortCode == "string")
		)
	}
}
