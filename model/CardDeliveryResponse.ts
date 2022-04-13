import * as isoly from "isoly"
import { CardDeliveryStatus } from "./CardDeliveryStatus"
import { CardDeliveryType } from "./CardDeliveryType"

export interface CardDeliveryResponse {
	type: CardDeliveryType
	to: string
	deliveredMessage?: string
	linkExpiry: isoly.Date
	sent: isoly.DateTime
	status: CardDeliveryStatus
	statusText?: string
}

export namespace CardDeliveryResponse {
	export function is(value: CardDeliveryResponse | any): value is CardDeliveryResponse {
		return (
			typeof value == "object" &&
			value.type == CardDeliveryType.is(value.type) &&
			typeof value.to == "string" &&
			typeof value.deliveredMessage == "string" &&
			isoly.Date.is(value.linkExpiry) &&
			isoly.DateTime.is(value.sent) &&
			CardDeliveryStatus.is(value.status) &&
			(value.statusText == undefined || typeof value.statusText == "string")
		)
	}
}
