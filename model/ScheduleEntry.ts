import * as isoly from "isoly"

export interface ScheduleEntry {
	readonly dueOn?: isoly.Date
	readonly remainingBalance?: number
	readonly balanceDifferential?: number
	readonly newBalance?: number
	readonly desiredState?: string
	readonly status?: string
}
