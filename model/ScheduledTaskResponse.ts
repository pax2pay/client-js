import * as isoly from "isoly"
import { isly } from "isly"

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
	export const type = isly.object<ScheduledTaskResponse>({
		dueOn: isly.fromIs("DateTime", isoly.DateTime.is),
		status: isly.string(),
		taskType: isly.string(),
		taskId: isly.string(),
		newBalance: isly.number().optional(),
		remainingBalance: isly.number().optional(),
		balanceDifferential: isly.number().optional(),
	})
	export const is = type.is
}
