import * as isoly from "isoly"

enum CardScheduleTaskType {
	CARD_AMENDMENT,
	CARD_STATE_CHANGE,
}
interface ScheduledTaskRequest {
	dueOn: isoly.DateTime
	status?:
		| "TODO"
		| "CANCELLED"
		| "CANCELLED_EXCEPTIONALLY"
		| "SUCCESSFUL"
		| "FAILED"
		| "FAILED_EXCEPTIONALLY"
		| "HALTED"
		| "PENDING"
		| "PENDING_DECLINED"
	taskId?: string
	taskType?: CardScheduleTaskType.CARD_AMENDMENT | CardScheduleTaskType.CARD_STATE_CHANGE
}

export interface CardAmendmentScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: CardScheduleTaskType.CARD_AMENDMENT
	newBalance?: number
	balanceDifferential?: number
	remainingBalance?: number
}
export interface CardStateChangeScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: CardScheduleTaskType.CARD_STATE_CHANGE
	desiredState: "CANCEL" | "FREEZE" | "THAW"
}
