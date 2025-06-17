import { Currency } from "isoly"
import { isly } from "isly"
import { AddressInfo } from "./AddressInfo"
import { TransferDestinationAddressType } from "./TransferDestinationAddressType"

export interface TransferDestinationRequest {
	type: TransferDestinationAddressType
	address?: AddressInfo
	currency?: Currency
	fullName?: string
	saveAsNewBeneficiary?: boolean
	name?: string
	defaultReference?: string
	accountNumber?: string // SCAN, ABA
	sortCode?: string // SCAN
	iban?: string // IBAN
	bic?: string // IBAN, ABA
	abaRoutingNumber?: string // ABA
	bankCountry?: string // IBAN, ABA
	bankName?: string // IBAN, ABA
}

export namespace TransferDestinationRequest {
	export const type = isly.object<TransferDestinationRequest>({
		type: TransferDestinationAddressType.type,
		address: AddressInfo.type.optional(),
		currency: isly.fromIs("Currency", Currency.is).optional(),
		fullName: isly.string().optional(),
		saveAsNewBeneficiary: isly.boolean().optional(),
		name: isly.string().optional(),
		defaultReference: isly.string().optional(),
		accountNumber: isly.string().optional(),
		sortCode: isly.string().optional(),
		iban: isly.string().optional(),
		bic: isly.string().optional(),
		abaRoutingNumber: isly.string().optional(),
		bankCountry: isly.string().optional(),
		bankName: isly.string().optional(),
	})
	export const is = type.is
}
