import { Date, DateTime } from "isoly"
import { isly } from "isly"
import { DeliveryState } from "./DeliveryState"

export interface DeliveryResponse {
	type: string
	to: string
	message: string
	lapses: Date
	sent?: DateTime
	state: DeliveryState
	reason?: string
}
export namespace DeliveryResponse {
	export const type = isly.object<DeliveryResponse>({
		type: isly.string(),
		to: isly.string(),
		message: isly.string(),
		lapses: isly.fromIs("Date", Date.is),
		sent: isly.fromIs("DateTime", DateTime.is).optional(),
		state: DeliveryState.type,
		reason: isly.string().optional(),
	})
	export const is = type.is
}
