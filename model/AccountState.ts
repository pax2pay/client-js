import { isly } from "isly"

export type AccountState = typeof AccountState.values[number]

export namespace AccountState {
	export const values = [
		"ACTIVE",
		"INACTIVE",
		"DELETED",
		"EXPIRED",
		"PENDING",
		"APPROVED",
		"DECLINED",
		"ARCHIVED",
	] as const
	export const type = isly.string<AccountState>(values)
	export const is = type.is
	export function toDisplay(value: AccountState): string {
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
		if (value == "ARCHIVED")
			return "archived"
		return value
	}
}
