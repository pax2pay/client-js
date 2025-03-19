import { isly } from "isly"
import { EditPaymentAmountScheduleRequest } from "./EditPaymentAmountScheduleRequest"

export interface EditPaymentScheduleRequest {
	schedule: EditPaymentAmountScheduleRequest[]
}
export namespace EditPaymentScheduleRequest {
	export const type = isly.object<EditPaymentScheduleRequest>({
		schedule: isly.array(isly.fromIs("EditPaymentAmountScheduleRequest", EditPaymentAmountScheduleRequest.is)),
	})
	export const is = type.is
}
