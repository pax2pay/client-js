import { isly } from "isly"

export type DeliveryState = "success" | "failure" | "todo" | "pending" | "card declined"

export namespace DeliveryState {
	export const type = isly.string(["success", "failure", "todo", "pending", "card declined"])
	export const is = type.is
}
