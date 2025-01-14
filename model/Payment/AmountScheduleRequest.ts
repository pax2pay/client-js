import { Date } from "isoly"
import { isly } from "isly"

export interface AmountScheduleRequest {
	amount: number
	date: Date
}
export namespace AmountScheduleRequest {
	export const type = isly.object<AmountScheduleRequest>({
		amount: isly.number(),
		date: isly.fromIs("Date", Date.is),
	})
	export const is = type.is
}
