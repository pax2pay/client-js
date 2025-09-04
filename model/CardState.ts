import { isly } from "isly"
import { AccountState } from "./AccountState"

export type CardState = typeof CardState.values[number]

export namespace CardState {
	export const values = ["ACTIVE", "INACTIVE", "DELETED", "EXPIRED", "PENDING", "APPROVED", "DECLINED"] as const
	export const type = isly.string(values)
	export const is = type.is
	export function toDisplay(value: CardState): string {
		if (value == "ACTIVE")
			return "active"
		if (value == "INACTIVE")
			return "frozen"
		if (value == "DELETED")
			return "closed"
		if (value == "EXPIRED")
			return "expired"
		if (value == "PENDING")
			return "pending"
		if (value == "APPROVED")
			return "approved"
		if (value == "DECLINED")
			return "declined"
		return value
	}
	export function editable(accountState: AccountState, cardState: CardState) {
		return accountState != "ARCHIVED" && cardState != "DELETED" && cardState != "DECLINED" && cardState != "EXPIRED"
	}
}
