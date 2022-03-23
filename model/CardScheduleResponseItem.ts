import * as isoly from "isoly"
import { CardScheduleTaskStatus } from "./CardScheduleTaskStatus"
import { CardScheduleTaskType } from "./CardScheduleTaskType"

export interface CardScheduleResponseItem {
	dueOn: isoly.DateTime
	status: CardScheduleTaskStatus
	statusText: string
	taskType: CardScheduleTaskType
	taskId: string
}

export namespace CardScheduleResponseItem {
	export function is(value: CardScheduleResponseItem | any): value is CardScheduleResponseItem {
		return (
			typeof value == "object" &&
			typeof value.dueOn == "string" &&
			CardScheduleTaskStatus.is(value.status) &&
			typeof value.statusText == "string" &&
			CardScheduleTaskType.is(value.taskType) &&
			typeof value.taskId == "string"
		)
	}
}
