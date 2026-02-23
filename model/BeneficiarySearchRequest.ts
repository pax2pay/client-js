import { Currency } from "isoly"
import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { BeneficiarySubTypeSearch } from "./BeneficiarySubTypeSearch"
import { TransferDestinationAddressType } from "./TransferDestinationAddressType"

export interface BeneficiarySearchRequest {
	defaultReference?: string
	currency?: Currency[]
	type?: TransferDestinationAddressType
	status?: BeneficiaryStatus[]
	subtype?: BeneficiarySubTypeSearch[]
	name?: string
	fullName?: string
	fuzzySearch?: string
	autoPopulateRebate?: boolean
	rebateQualifier?: string
}
