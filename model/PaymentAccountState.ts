import { isly } from "isly"

export type PaymentAccountState = "active" | "inactive" | "deleted" | "expired" | "pending" | "approved" | "declined"

export namespace PaymentAccountState {
	export const type = isly.string(["active", "inactive", "deleted", "expired", "pending", "approved", "declined"])
	export const is = type.is
}
