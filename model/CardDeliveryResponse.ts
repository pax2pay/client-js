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

