import { Currency } from "isoly"
import { isly } from "isly"
import { AddressInfo } from "./AddressInfo"
import { ConfirmationOfPayeeResponse } from "./ConfirmationOfPayeeResponse"
import { TransferDestinationAddressType } from "./TransferDestinationAddressType"

export interface AccountDetailsTransferDestinationResponse {
	sortCode?: string
	accountNumber?: string
	iban?: string
	bic?: string
	abaRoutingNumber?: string
	type: TransferDestinationAddressType
	address?: AddressInfo
	fullName?: string
	currency: Currency
	bankCountry?: string
	bankName?: string
	confirmationOfPayee?: ConfirmationOfPayeeResponse
}

export namespace AccountDetailsTransferDestinationResponse {
	export const type = isly.object<AccountDetailsTransferDestinationResponse>({
		sortCode: isly.string().optional(),
		accountNumber: isly.string().optional(),
		iban: isly.string().optional(),
		bic: isly.string().optional(),
		abaRoutingNumber: isly.string().optional(),
		type: TransferDestinationAddressType.type,
		address: AddressInfo.type.optional(),
		fullName: isly.string().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		bankCountry: isly.string().optional(),
		bankName: isly.string().optional(),
		confirmationOfPayee: ConfirmationOfPayeeResponse.type.optional(),
	})
	export const is = type.is
}
