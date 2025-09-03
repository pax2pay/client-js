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
}
