import * as isoly from "isoly"
import { CardDeliveryStatus } from "./CardDeliveryStatus"

export interface CardDeliveryResponse {
	type: "EMAIL"
	to: string | [string, string] //TODO correct type?
	deliveredMessage: string
	linkExpiry: isoly.Date
	sent: isoly.DateTime
	status: CardDeliveryStatus
	statusText?: string
}
export namespace CardDeliveryResponse {
	export function is(value: CardDeliveryResponse | any): value is CardDeliveryResponse {
		return (
			typeof value == "object" &&
			value.type == "EMAIL" &&
			(typeof value.to == "string" || typeof value.to == "object") &&
			typeof value.deliveredMessage == "string" &&
			isoly.Date.is(value.linkExpiry) &&
			isoly.DateTime.is(value.sent) &&
			(typeof value.statusText == "string" || value.statusText == undefined) &&
			CardDeliveryStatus.is(value.status)
		)
	}
}
