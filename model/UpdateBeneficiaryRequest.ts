import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface UpdateBeneficiaryRequest {
	transferDestination?: TransferDestinationRequest
	defaultReference?: string
	status?: BeneficiaryStatus
	name?: string
	fullName?: string
}
