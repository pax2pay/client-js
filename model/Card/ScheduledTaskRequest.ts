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

export namespace ScheduledTaskRequest {
	export function is(value: ScheduledTaskRequest | any): value is ScheduledTaskRequest {
		return (
			typeof value == "object" &&
			isoly.DateTime.is(value.dueOn) &&
			(value.status == undefined || ScheduledTaskStatus.is(value.status)) &&
			(value.taskId == undefined || typeof value.taskId == "string") &&
			(value.taskType == undefined || CardScheduleTaskType.is(value.taskType)) &&
			(value.newBalance == undefined || typeof value.newBalance == "number") &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number") &&
			(value.balanceDifferential == undefined || typeof value.balanceDifferential == "number")
		)
	}
}
