import { Currency } from "isoly"
import { BeneficiaryRequestStatus } from "./BeneficiaryRequestStatus"
import { BeneficiarySubTypeSearch } from "./BeneficiarySubTypeSearch"
import { TransferDestinationAddressType } from "./TransferDestinationAddressType"

export interface BeneficiarySearchRequest {
	defaultReference?: string
	currency?: Currency[]
	type?: TransferDestinationAddressType
	status?: BeneficiaryRequestStatus[]
	subtype?: BeneficiarySubTypeSearch[]
	name?: string
	fullName?: string
	fuzzySearch?: string
	autoPopulateRebate?: boolean
	rebateQualifier?: string
}
