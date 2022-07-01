import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

export interface CardAmendmentScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: "CARD_AMENDMENT"
	newBalance?: number
	balanceDifferential?: number
	remainingBalance?: number
}
