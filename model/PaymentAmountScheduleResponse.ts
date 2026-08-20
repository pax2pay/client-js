import { Date } from "isoly"
import { isly } from "isly"
import { PaymentScheduleResponseStatus } from "./PaymentScheduleResponseStatus"

export interface PaymentAmountScheduleResponse {
	amount: number
	date: Date
	state: PaymentScheduleResponseStatus
}
export namespace PaymentAmountScheduleResponse {
	export const type = isly.object<PaymentAmountScheduleResponse>({
		amount: isly.number(),
		date: isly.fromIs("Date", Date.is),
		state: PaymentScheduleResponseStatus.type,
	})
	export const is = type.is
}
