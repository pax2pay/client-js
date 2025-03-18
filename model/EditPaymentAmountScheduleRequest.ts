import { Date } from "isoly"
import { isly } from "isly"

export interface EditPaymentAmountScheduleRequest {
	amount: number
	date: Date
}
export namespace EditPaymentAmountScheduleRequest {
	export const type = isly.object<EditPaymentAmountScheduleRequest>({
		amount: isly.number(),
		date: isly.fromIs("Date", Date.is),
	})
	export const is = type.is
}
