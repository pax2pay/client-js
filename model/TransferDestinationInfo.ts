import { AddressInfo } from "./AddressInfo"

/**
 * Destination information
 */
export interface TransferDestinationInfo {
	accountNumber?: string
	sortCode?: string
	iban?: string
	bic?: string
	currency: string
	address?: AddressInfo
	fullName?: string
}
