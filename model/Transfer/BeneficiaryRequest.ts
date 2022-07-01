import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface BeneficiaryRequest {
	transferDestination: TransferDestinationInfo
	defaultReference?: string
	status: "ACTIVE" | "DELETED" | "OUTDATED"
	name?: string
	fullName: string
}
