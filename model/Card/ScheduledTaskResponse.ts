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
