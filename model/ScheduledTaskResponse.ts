import * as isoly from "isoly"
import { TaskStatus } from "./TaskStatus"

export interface ScheduledTaskResponse {
	dueOn: isoly.DateTime
	status: TaskStatus
	taskType: string
	taskId: string
	newBalance?: number
	remainingBalance?: number
	balanceDifferential?: number
}
