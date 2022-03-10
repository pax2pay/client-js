import * as isoly from "isoly"
import { CardScheduleTaskType } from "./CardScheduleTaskType"

export interface ScheduledTaskRequest {
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
	taskType?: CardScheduleTaskType
}
