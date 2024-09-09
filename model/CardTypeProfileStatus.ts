import { isly } from "isly"

export type CardTypeProfileStatus = typeof CardTypeProfileStatus.values[number]

export namespace CardTypeProfileStatus {
	export const values = ["ACTIVE", "DELETED", "DEPRECATED"] as const
	export const type = isly.string(values)
	export const is = type.is
}
