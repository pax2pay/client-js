import * as isoly from "isoly"
import { isly } from "isly"

export interface CardDeliveryRequest {
	to: string
	message: string
	linkExpiry: isoly.Date
}
export namespace CardDeliveryRequest {
	export const type = isly.object<CardDeliveryRequest>({
		to: isly.string(/\S+@\S+\.\S+/),
		message: isly.string(),
		linkExpiry: isly.fromIs("Date", isExpiry),
	})
	function isExpiry(value: any): value is isoly.Date {
		return isoly.Date.is(value) && value > isoly.Date.now()
	}
	export const is = type.is
}
