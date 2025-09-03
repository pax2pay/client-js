import { isly } from "isly"
import { AccountState } from "./AccountState"

export type PaymentStatus = typeof PaymentStatus.values[number]

export namespace PaymentStatus {
	export const values = [
		"active",
		"sent",
		"upcoming",
		"settled",
		"rejected",
		"frozen",
		"closed",
		"expired",
		"pending",
		"approved",
		"declined",
	] as const
	export const type = isly.string(values)
	export const is = type.is
	export function editable(accountState: AccountState, paymentState: PaymentStatus) {
		return (
			accountState != "ARCHIVED" && paymentState != "closed" && paymentState != "declined" && paymentState != "expired"
		)
	}
}
