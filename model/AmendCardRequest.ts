import { TaskStatus } from "./TaskStatus"

export interface AmendCardRequest {
	newBalance?: number
	remainingBalance?: number
	balanceDifferential?: number
	fundingDate?: string
	status?: TaskStatus
}
