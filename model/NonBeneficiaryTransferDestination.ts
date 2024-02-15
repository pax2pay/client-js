import { AddressInfo } from "./AddressInfo"

/**
 * Non-beneficiary destination to send this to
 */
export interface NonBeneficiaryTransferDestination {
	accountNumber?: string
	sortCode?: string
	iban?: string
	bic?: string
	address?: AddressInfo
	bankCountry?: string
	bankName?: string
	fullName: string
	name?: string
	defaultReference?: string
	saveAsNewBeneficiary?: boolean
}
