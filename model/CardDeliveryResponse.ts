import * as isoly from "isoly"
import { DeliveryStatus } from "./DeliveryStatus"

export interface CardDeliveryResponse {
	type: "EMAIL"
	to: string | [string, string]
	deliveredMessage: string
	linkExpiry: isoly.Date
	sent?: isoly.DateTime
	status: DeliveryStatus
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
			(value.sent == undefined || isoly.DateTime.is(value.sent)) &&
			(value.statusText == undefined || typeof value.statusText == "string") &&
			DeliveryStatus.is(value.status)
		)
	}
}
