import { Date } from "isoly"
import { isly } from "isly"

export interface PaymentAmountScheduleRequest {
	amount: number
	date: Date
}
export namespace PaymentAmountScheduleRequest {
	export const type = isly.object<PaymentAmountScheduleRequest>({
		amount: isly.number(),
		date: isly.fromIs("Date", Date.is),
	})
	export const is = type.is
}
