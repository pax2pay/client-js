import { Date } from "isoly"
import { isly } from "isly"

export interface DeliveryRequest {
	type?: string
	to: string
	message: string
	lapses?: Date
}
export namespace DeliveryRequest {
	export const type = isly.object<DeliveryRequest>({
		type: isly.string().optional(),
		to: isly.string(),
		message: isly.string(),
		lapses: isly.fromIs("Date", Date.is).optional(),
	})
	export const is = type.is
}
