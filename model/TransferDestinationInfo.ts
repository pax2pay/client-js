import { Currency } from "isoly"
import { isly } from "isly"
import { AddressInfo } from "./AddressInfo"
import { ConfirmationOfPayeeResponse } from "./ConfirmationOfPayeeResponse"

/**
 * Destination information
 */
export interface TransferDestinationInfo {
	accountNumber?: string
	sortCode?: string
	iban?: string
	bic?: string
	abaRoutingNumber?: string
	currency: Currency
	address?: AddressInfo
	bankCountry?: string
	bankName?: string
	fullName?: string
	type?: "IBAN" | "SCAN" | "ABA"
	confirmationOfPayee?: ConfirmationOfPayeeResponse
}

export namespace TransferDestinationInfo {
	export const type = isly.object<TransferDestinationInfo>({
		accountNumber: isly.string().optional(),
		sortCode: isly.string().optional(),
		iban: isly.string().optional(),
		bic: isly.string().optional(),
		abaRoutingNumber: isly.string().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		address: AddressInfo.type.optional(),
		bankCountry: isly.string().optional(),
		bankName: isly.string().optional(),
		fullName: isly.string().optional(),
		type: isly.string(["IBAN", "SCAN", "ABA"]).optional(),
		confirmationOfPayee: ConfirmationOfPayeeResponse.type.optional(),
	})
	export const is = type.is
}
