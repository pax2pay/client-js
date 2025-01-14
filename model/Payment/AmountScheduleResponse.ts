import { Date } from "isoly"
import { isly } from "isly"

export interface AmountScheduleResponse {
	amount: number
	date: Date
}
export namespace AmountScheduleResponse {
	export const type = isly.object<AmountScheduleResponse>({
		amount: isly.number(),
		date: isly.fromIs("Date", Date.is),
	})
	export const is = type.is
}
