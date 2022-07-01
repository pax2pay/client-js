import * as isoly from "isoly"

export interface CardDeliveryResponse {
	type: "EMAIL"
	to: string | [string, string]
	deliveredMessage: string
	linkExpiry: isoly.Date
	sent: string
	status: "SUCCESS" | "FAILURE" | "TODO"
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
			typeof value.sent == "string" &&
			(typeof value.statusText == "string" || value.statusText == undefined) &&
			(value.status == "SUCCESS" || value.status == "FAILURE" || value.status == "TODO")
		)
	}
}
