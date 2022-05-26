import * as isoly from "isoly"
import { CardScheduleTaskStatus } from "./CardScheduleTaskStatus"
import { CardScheduleTaskType } from "./CardScheduleTaskType"

export interface ScheduledTaskRequest {
	dueOn: isoly.DateTime
	status?: CardScheduleTaskStatus
	desiredState?: "CANCEL" | "FREEZE" | "THAW"
	taskId?: string
	taskType?: CardScheduleTaskType
	newBalance?: number
	remainingBalance?: number
	balanceDifferential?: number
}
