import * as isoly from "isoly"

export interface ScheduledTaskResponse {
	dueOn: isoly.DateTime
	status: string
	taskType: string
	taskId: string
	newBalance?: number
	remainingBalance?: number
	balanceDifferential?: number
}

export namespace ScheduledTaskResponse {
	export function is(value: ScheduledTaskResponse | any): value is ScheduledTaskResponse {
		return (
			typeof value == "object" &&
			isoly.DateTime.is(value.dueOn) &&
			typeof value.status == "string" &&
			typeof value.taskType == "string" &&
			typeof value.taskId == "string" &&
			(value.newBalance == undefined || typeof value.newBalance == "number") &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number") &&
			(value.balanceDifferential == undefined || typeof value.balanceDifferential == "number")
		)
	}
}
