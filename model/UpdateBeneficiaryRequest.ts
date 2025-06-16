import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface UpdateBeneficiaryRequest {
	transferDestination?: TransferDestinationRequest
	defaultReference?: string
	status?: "ACTIVE" | "DELETED" | "OUTDATED"
	name?: string
	fullName?: string
}
