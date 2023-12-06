import * as isoly from "isoly"
import { CardScheduleTaskType } from "./CardScheduleTaskType"

export interface ScheduledTaskRequest {
	dueOn?: isoly.DateTime
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
	desiredState?: string
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
			(value.dueOn == undefined || isoly.DateTime.is(value.dueOn)) &&
			(value.status == undefined || typeof value.status == "string") &&
			(value.desiredState == undefined || typeof value.desiredState == "string") &&
			(value.taskId == undefined || typeof value.taskId == "string") &&
			(value.taskType == undefined || typeof CardScheduleTaskType.is(value.taskType)) &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number") &&
			(value.balanceDifferential == undefined || typeof value.balanceDifferential == "number") &&
			(value.newBalance == undefined || typeof value.newBalance == "number")
		)
	}
}
