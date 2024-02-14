import { Currency } from "isoly"
import { AddressInfo } from "./AddressInfo"

export interface AccountDetailsTransferDestinationResponse {
	sortCode?: string
	accountNumber?: string
	iban?: string
	bic?: string
	type: "SCAN" | "IBAN"
	address?: AddressInfo
	fullName?: string
	currency: Currency
	bankCountry?: string
	bankName?: string
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
			(value.type == "IBAN" || value.type == "SCAN") &&
			(value.fullName == undefined || typeof value.fullName == "string") &&
			(value.address == undefined || AddressInfo.is(value.address)) &&
			Currency.is(value.currency) &&
			(value.bankCountry == undefined || typeof value.bankCountry == "string") &&
			(value.bankName == undefined || typeof value.bankName == "string")
		)
	}
}
