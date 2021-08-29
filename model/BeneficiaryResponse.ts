import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface BeneficiaryResponse {
	transferDestination?: TransferDestinationInfo
	defaultReference?: string
	status?: "ACTIVE" | "DELETED" | "OUTDATED"
	name?: string
	fullName?: string
	beneficiaryId?: string
	createdOn?: string
	history?: BeneficiaryResponse[]
}
