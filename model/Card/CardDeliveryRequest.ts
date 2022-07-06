import * as isoly from "isoly"

export interface CardDeliveryRequest {
	to: string | [string, string] //TODO correct type?
	message: string
	linkExpiry: isoly.Date
}
export namespace CardDeliveryRequest {
	export function is(value: CardDeliveryRequest | any): value is CardDeliveryRequest {
		return (
			typeof value == "object" &&
			(typeof value.to == "string" || typeof value.to == "object") &&
			typeof value.message == "string" &&
			/^.+@.+$/.test(value.to) &&
			isoly.Date.is(value.linkExpiry)
		)
	}
}
