import { BeneficiaryRequestStatus } from "./BeneficiaryRequestStatus"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface UpdateBeneficiaryRequest {
	transferDestination?: TransferDestinationRequest
	defaultReference?: string
	status?: BeneficiaryRequestStatus
	name?: string
	fullName?: string
}
