import { isly } from "isly"

export type Type = typeof Type.values[number]

export namespace Type {
	export const values = ["TEST", "PAYMENT", "REBATE"] as const
	export const type = isly.string(values)
	export const is = type.is
}
