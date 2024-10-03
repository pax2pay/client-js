import { Date } from "isoly"
import { isly } from "isly"

export interface CardDeliveryRequest {
	to: string
	message: string
	linkExpiry: Date
}
export namespace CardDeliveryRequest {
	export const type = isly.object<CardDeliveryRequest>({
		to: isly.string(),
		message: isly.string(),
		linkExpiry: isly.fromIs("Date", Date.is),
	})
	export const is = type.is
}
