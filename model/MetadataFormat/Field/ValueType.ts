import { isly } from "isly"

export type ValueType = typeof ValueType.values[number]

export namespace ValueType {
	export const values = ["string", "date", "datetime", "numeric", "integer"] as const
	export const type = isly.string(values)
	export const is = type.is
}
