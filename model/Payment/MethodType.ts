import { isly } from "isly"

export type MethodType = typeof MethodType.values[number]

export namespace MethodType {
	export const values = ["card", "transfer"] as const
	export const type = isly.string<MethodType>(values)
	export const is = type.is
}
