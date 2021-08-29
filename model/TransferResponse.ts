import { AccountResponse } from "./AccountResponse"
import { BeneficiaryResponse } from "./BeneficiaryResponse"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface TransferResponse {
	sourceAccount?: AccountResponse
	beneficiary?: BeneficiaryResponse
	destinationAccount?: AccountResponse
	destination?: TransferDestinationInfo
	amount?: number
	status?:
		| "PENDING"
		| "PENDING_FOR_DATE"
		| "PENDING_FOR_FUNDS"
		| "SETTLED"
		| "CANCELLED"
		| "ERROR_REJECTED"
		| "APPROVAL_PENDING"
		| "DECLINED"
		| "APPROVED"
		| "GENERATED"
	createdDate?: string
	paymentDate?: string
	reference?: string
	providerCode?: ProviderCode
	providerTransferId?: string
	scheduled?: boolean
	errorDescription?: string
}
