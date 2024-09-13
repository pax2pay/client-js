import { isly } from "isly"

export type PaymentDeliveryState = "success" | "failure" | "todo" | "pending" | "card declined"

export namespace PaymentDeliveryState {
	export const type = isly.string(["success", "failure", "todo", "pending", "card declined"])
	export const is = type.is
}
