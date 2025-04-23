import { Currency } from "isoly"
import { isly } from "isly"
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
	export const type = isly.object<AccountDetailsTransferDestinationResponse>({
		sortCode: isly.string().optional(),
		accountNumber: isly.string().optional(),
		iban: isly.string().optional(),
		bic: isly.string().optional(),
		type: isly.string(["SCAN", "IBAN"]),
		address: AddressInfo.type.optional(),
		fullName: isly.string().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		bankCountry: isly.string().optional(),
		bankName: isly.string().optional(),
	})
	export const is = type.is
}
