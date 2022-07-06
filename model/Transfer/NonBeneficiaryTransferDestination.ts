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
	fullName: string
	saveAsNewBeneficiary?: boolean
}

export namespace NonBeneficiaryTransferDestination {
	export function is(value: NonBeneficiaryTransferDestination | any): value is NonBeneficiaryTransferDestination {
		return (
			typeof value == "object" &&
			(value.accountNumber == undefined || typeof value.accountNumber == "string") &&
			(value.sortCode == undefined || typeof value.sortCode == "string") &&
			(value.iban == undefined || typeof value.iban == "string") &&
			(value.bic == undefined || typeof value.bic == "string") &&
			(value.address == undefined || AddressInfo.is(value.address)) &&
			typeof value.fullName == "string" &&
			(value.saveAsNewBeneficiary == undefined || typeof value.saveAsNewBeneficiary == "boolean")
		)
	}
}
