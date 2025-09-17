import { Date, DateTime } from "isoly"
import { isly } from "isly"
import { DeliveryStatus } from "./DeliveryStatus"

export interface CardDeliveryResponse {
	type: "EMAIL"
	to: string
	deliveredMessage: string
	linkExpiry: Date
	sent?: DateTime
	status: DeliveryStatus
	statusText?: string
	remittanceAdviceFilename?: string
}
export namespace CardDeliveryResponse {
	export const type = isly.object<CardDeliveryResponse>({
		type: isly.string("EMAIL"),
		to: isly.string(),
		deliveredMessage: isly.string(),
		linkExpiry: isly.fromIs("Date", Date.is),
		sent: isly.fromIs("DateTime", DateTime.is).optional(),
		status: isly.fromIs("DeliveryStatus", DeliveryStatus.is),
		statusText: isly.string().optional(),
		remittanceAdviceFilename: isly.string().optional(),
	})
	export const is = type.is
}
