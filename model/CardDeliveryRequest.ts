import * as isoly from "isoly"

export interface CardDeliveryRequest {
	to: string | [string, string]
	message?: string
	linkExpiry: isoly.Date
}
