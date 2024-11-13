import { isly } from "isly"

export type ValueCategory = typeof ValueCategory.values[number]

export namespace ValueCategory {
	export const values = ["supplier reference", "agent reference", "customer name"] as const
	export const type = isly.string(values)
	export const is = type.is
}
