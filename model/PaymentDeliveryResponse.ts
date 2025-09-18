import { Date, DateTime } from "isoly"
import { isly } from "isly"
import { PaymentDeliveryStatus } from "./PaymentDeliveryStatus"

export interface PaymentDeliveryResponse {
	type: string
	to: string
	message: string
	lapses: Date
	sent?: DateTime
	state: PaymentDeliveryStatus
	reason?: string
	attachmentFilename?: string
}
export namespace PaymentDeliveryResponse {
	export const type = isly.object<PaymentDeliveryResponse>({
		type: isly.string(),
		to: isly.string(),
		message: isly.string(),
		lapses: isly.fromIs("Date", Date.is),
		sent: isly.fromIs("DateTime", DateTime.is).optional(),
		state: PaymentDeliveryStatus.type,
		reason: isly.string().optional(),
		attachmentFilename: isly.string().optional(),
	})
	export const is = type.is
}
