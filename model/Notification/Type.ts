import { isly } from "isly"

export type Type = typeof Type.values[number]

export namespace Type {
	export const values = ["news", "alert"] as const
	export const type = isly.string<Type>(values)
	export const is = type.is
}
