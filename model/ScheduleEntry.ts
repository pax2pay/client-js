import * as isoly from "isoly"
import { TaskStatus } from "./TaskStatus"

export interface ScheduleEntry {
	readonly dueOn?: isoly.Date | isoly.DateTime
	readonly remainingBalance?: number
	readonly balanceDifferential?: number
	readonly newBalance?: number
	readonly desiredState?: string
	readonly status?: TaskStatus
}
export namespace ScheduleEntry {
	export function is(value: ScheduleEntry | any): value is ScheduleEntry {
		return (
			typeof value == "object" &&
			(value.dueOn == undefined || isoly.Date.is(value.dueOn) || isoly.DateTime.is(value.dueOn)) &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number") &&
			(value.balanceDifferential == undefined || typeof value.balanceDifferential == "number") &&
			(value.newBalance == undefined || typeof value.newBalance == "number") &&
			(value.desiredState == undefined || typeof value.desiredState == "string") &&
			(value.status == undefined || TaskStatus.is(value.status))
		)
	}
}
