import * as isoly from "isoly"

export interface ScheduledTaskResponse {
	dueOn: isoly.DateTime
	status: string
	taskType: string
	taskId: string
}
