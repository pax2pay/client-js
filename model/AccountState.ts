import { isly } from "isly"

export type AccountState = typeof AccountState.types[number]

export namespace AccountState {
	export const types = [
		"ACTIVE",
		"INACTIVE",
		"CLOSED",
		"DELETED",
		"EXPIRED",
		"PENDING",
		"APPROVED",
		"DECLINED",
		"GENERATED",
	] as const
	export const type = isly.string<AccountState>(types)
	export const is = type.is
}
