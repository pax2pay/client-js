import { CardScheduleTaskType } from "./CardScheduleTaskType"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

export interface CardAmendmentScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: CardScheduleTaskType.CARD_AMENDMENT
	newBalance?: number
	balanceDifferential?: number
	remainingBalance?: number
}
