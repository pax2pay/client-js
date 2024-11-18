import { Date } from "isoly"
import { isly } from "isly"

export interface PaymentDeliveryRequest {
	type?: string
	to: string
	message: string
	lapses?: Date
}
export namespace PaymentDeliveryRequest {
	export const type = isly.object<PaymentDeliveryRequest>({
		type: isly.string().optional(),
		to: isly.string(),
		message: isly.string(),
		lapses: isly.fromIs("Date", Date.is).optional(),
	})
	export const is = type.is
}
