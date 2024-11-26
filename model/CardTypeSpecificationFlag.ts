import { isly } from "isly"

export type CardTypeFlag = typeof CardTypeFlag.types[number]

export namespace CardTypeFlag {
	export const types = ["CORPORATE", "BUSINESS", "CONSUMER"] as const
	export const type = isly.string(types)
	export const is = type.is
}
