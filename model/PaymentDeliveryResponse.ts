import { Date, DateTime } from "isoly"
import { isly } from "isly"
import { DeliveryStatus } from "./DeliveryStatus"

export interface PaymentDeliveryResponse {
	type: string
	to: string
	message: string
	lapses: Date
	sent?: DateTime
	state: DeliveryStatus
	reason?: string
}
export namespace PaymentDeliveryResponse {
	export const type = isly.object<PaymentDeliveryResponse>({
		type: isly.string(),
		to: isly.string(),
		message: isly.string(),
		lapses: isly.fromIs("Date", Date.is),
		sent: isly.fromIs("DateTime", DateTime.is).optional(),
		state: isly.fromIs("DeliveryStatus", DeliveryStatus.is),
		reason: isly.string().optional(),
	})
	export const is = type.is
}
