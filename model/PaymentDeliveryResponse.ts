import { Date, DateTime } from "isoly"
import { isly } from "isly"
import { PaymentDeliveryState } from "./PaymentDeliveryState"

export interface PaymentDeliveryResponse {
	type: string
	to: string
	message: string
	lapses: Date
	sent?: DateTime
	state: PaymentDeliveryState
	reason?: string
}
export namespace PaymentDeliveryResponse {
	export const type = isly.object<PaymentDeliveryResponse>({
		type: isly.string(),
		to: isly.string(),
		message: isly.string(),
		lapses: isly.fromIs("Date", Date.is),
		sent: isly.fromIs("DateTime", DateTime.is).optional(),
		state: isly.fromIs("PaymentDeliveryState", PaymentDeliveryState.is),
		reason: isly.string().optional(),
	})
	export const is = type.is
}
