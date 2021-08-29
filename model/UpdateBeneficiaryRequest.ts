import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface UpdateBeneficiaryRequest {
	transferDestination?: TransferDestinationInfo
	defaultReference?: string
	status?: "ACTIVE" | "DELETED" | "OUTDATED"
	name?: string
	fullName?: string
}
