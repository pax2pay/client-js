import { Date } from "isoly"
import { isly } from "isly"

export interface PaymentAmountScheduleResponse {
	amount: number
	date: Date
}
export namespace PaymentAmountScheduleResponse {
	export const type = isly.object<PaymentAmountScheduleResponse>({
		amount: isly.number(),
		date: isly.fromIs("Date", Date.is),
	})
	export const is = type.is
}
