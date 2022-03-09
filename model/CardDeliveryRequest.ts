import * as isoly from "isoly"

export interface CardDeliveryRequest {
	to: Set<string>
	message: string
	linkExpiry: isoly.Date
}
