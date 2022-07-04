import * as isoly from "isoly"
import { CardScheduleTaskType } from "./CardScheduleTaskType"
import { ScheduledTaskStatus } from "./ScheduledTaskStatus"

export interface ScheduledTaskRequest {
	dueOn: isoly.DateTime
	status?: ScheduledTaskStatus
	taskId?: string
	taskType?: CardScheduleTaskType
	newBalance?: number
	remainingBalance?: number
	balanceDifferential?: number
}
