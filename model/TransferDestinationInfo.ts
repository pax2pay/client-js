import * as isoly from "isoly"
import { AddressInfo } from "./AddressInfo"

/**
 * Destination information
 */
export interface TransferDestinationInfo {
	accountNumber?: string
	sortCode?: string
	iban?: string
	bic?: string
	currency: isoly.Currency
	address?: AddressInfo
	fullName?: string
}

export namespace TransferDestinationInfo {
	export function is(value: TransferDestinationInfo | any): value is TransferDestinationInfo {
		return (
			typeof value == "object" &&
			(value.accountNumber == undefined || typeof value.accountNumber == "string") &&
			(value.sortCode == undefined || typeof value.sortCode == "string") &&
			(value.iban == undefined || typeof value.iban == "string") &&
			(value.bic == undefined || typeof value.bic == "string") &&
			isoly.Currency.is(value.currency) &&
			(value.address == undefined || AddressInfo.is(value.address)) &&
			(value.fullName == undefined || typeof value.fullName == "string")
		)
	}
}
